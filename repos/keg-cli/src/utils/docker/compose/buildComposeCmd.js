const path = require('path')
const { get } = require('@keg-hub/jsutils')
const { DOCKER } = require('KegConst/docker')
const { writeFile, mkDir, pathExists } = require('KegFileSys/fileSys')
const { GLOBAL_INJECT_FOLDER } = require('KegConst/constants')
const { CONTAINERS } = DOCKER
const { loadTemplate } = require('KegUtils/template')
const { generateLabels } = require('./generateLabels')
const { generalError } = require('KegUtils/error/generalError')
const { exists } = require('fs')

const composeArgs = {
  clean: '--force-rm',
  cache: '--no-cache',
  pull: '--pull'
}

/**
 * Writes the injected compose file to the global injected folder
 * @function
 * @param {string} injectedCompose - Path to the injected-compose.yml file
 * @param {object} data - Data to fill the compose template with
 *
 * @returns {boolean} - If the file was added
 */
const writeInjectedCompose = async (injectedCompose, data) => {
  await mkDir(GLOBAL_INJECT_FOLDER)

  const template = await loadTemplate('injected-compose', data)
  const [ err, saved ] = await writeFile(injectedCompose, template)

  err && generalError(`ERROR: Can not write injected compose file.\n${ err.stack }`)

  return saved
}

/**
 * Adds the injected-compose.template.yml file
 * @function
 * @param {string} data - Data to fill the template with
 *
 * @returns {string} - Filled docker-compose.yml template file
 */
const addInjectedTemplate = async (dockerCmd, data={}) => {
  const image = get(data, `params.__injected.image`)
  const injectedCompose = path.join(GLOBAL_INJECT_FOLDER, `${image}.yml`)

  // Flatten the data so it can be accessed at a single consistent level
  const templateArgs = {
    ...data,
    ...data.params,
    ...data.params.__injected,
    generatedLabels: generateLabels('', data)
  }

  const [ err, exists ] = await pathExists(injectedCompose)
  !exists && await writeInjectedCompose(injectedCompose, templateArgs)

  return `${dockerCmd} -f ${injectedCompose}`
}

/**
 * Builds a docker-compose file argument based on the passed in args
 * @function
 * @param {string} dockerCmd - Docker command to add the compile file paths to
 * @param {string} context - Context the docker command is being run in ( core / tap )
 * @param {string} env - Name of the ENV that defines the file path of the compose file
 * @param {string} composeFile - compose file path to override pulling from container ENVs
 *
 * @returns {string} - dockerCmd string with the file path added
 */
const addComposeFile = (dockerCmd='', container, env, composeFile) => {
  const compPath = composeFile || get(CONTAINERS, `${ container }.ENV.${ env }`)
  const addedComposeFile = compPath ? `-f ${ compPath }` : ''

  return `${dockerCmd} ${ addedComposeFile }`.trim()
}

/**
 * Adds the paths to the docker compose file for the env
 * @function
 * @param {string} dockerCmd - Docker command to add the compile file paths to
 * @param {Object} args - Arguments passed on from the current Task
 * @param {string} args.cmdContext - Current docker image context
 * @param {Object} args.params - Parse options passed from the cmd line
 * @param {Object} args.globalConfig - CLI Global Config object
 * @param {Object} args.contextEnvs - ENVs for the current context
 * 
 *
 * @returns {string} - dockerCmd string with the file paths added
 */
const addComposeFiles = async (dockerCmd, args) => {

  const curENV = get(args, `params.env`, 'LOCAL')
  const container = get(args, 'cmdContext', '').toUpperCase()

  if(!container) return dockerCmd
  
  const injectedComposePath = get(args, 'params.__injected.composePath')

  // Check if the compose file path has been injected
  // Or get the default docker compose file
  dockerCmd = injectedComposePath
    ? addComposeFile(dockerCmd, container, ``, injectedComposePath)
    : addComposeFile(dockerCmd, container, `KEG_COMPOSE_DEFAULT`)

  // Get the docker compose file from the repo
  dockerCmd = addComposeFile(dockerCmd, container, `KEG_COMPOSE_REPO`)

  // Get the docker compose file for the environment
  dockerCmd = addComposeFile(dockerCmd, container, `KEG_COMPOSE_${ curENV }`)

  // Get the docker compose file for the container and ENV
  dockerCmd = addComposeFile(dockerCmd, container, `KEG_COMPOSE_${ container }_${ curENV }`)

  return injectedComposePath
    ? addInjectedTemplate(dockerCmd, args)
    : dockerCmd
}

/**
 * Conditionally adds a docker argument based on the passed in arguments
 * @function
 * @param {string} dockerCmd - Docker command to add the compile file paths to
 * @param {string} toAdd - The arguments to be added to the docker command
 * @param {boolean} condition - If the argument should be added to the dockerCmd
 *
 * @returns {string} - dockerCmd string with the file paths added
 */
const addDockerArg = (dockerCmd, toAdd, condition) => {
  return condition
    ? `${dockerCmd} ${toAdd}`
    : dockerCmd
}

/**
 * Converts the passed in docker-compose params to to string format
 * @function
 * @param {string} dockerCmd - docker-compose command to add params to
 * @param {Object} params - Parse params passed from the command line
 *
 * @returns {string} - docker command with params added
 */
const addCmdOpts = (dockerCmd, params) => {
  return reduceObj(params, (key, value, added) => {
    return !composeArgs[key]
      ? added
      : addDockerArg(
          added,
          composeArgs[key],
          key === 'cache' ? !Boolean(value) : Boolean(value)
        )
  }, dockerCmd)
}

/**
 * Build the docker-compose down args to ensure it cleans up properly
 * @function
 * @param {string} dockerCmd - docker-compose command to add params to
 * @param {string} remove - Args passed in from the command line to define what items to remove
 *
 * @returns {string} - Docker compose command, with remove args added
 */
const getDownArgs = (dockerCmd, remove) => {
  return remove.split(',').reduce((builtCmd, toRemove) => {
    if(toRemove === 'all' || toRemove === 'local')
      dockerCmd = `${dockerCmd} -rmi ${toRemove}`
    else if(toRemove === 'v' || toRemove === 'volumes')
      dockerCmd = `${dockerCmd} --volumes`
    else if(toRemove === 'or' || toRemove === 'orphans')
      dockerCmd = `${dockerCmd} --remove-orphans`

    return dockerCmd
  }, dockerCmd)
}

/**
 * Creates the docker-compose up command
 * @function
 * @param {Object} globalConfig - Global config object for the keg-cli
 * @param {string} cmdContext - Context the command is being run in ( core | tap )
 * @param {Object} params - Parse params passed from the command line
 *
 * @returns {string} - Built docker command
 */
const buildComposeCmd = async args => {
  const { cmd, params={}, } = args

  const { attach, remove } = params

  let dockerCmd = `docker-compose`
  dockerCmd = await addComposeFiles(dockerCmd, args)

  dockerCmd = `${dockerCmd} ${cmd}`

  if(cmd === 'up')  dockerCmd = addDockerArg(dockerCmd, '--detach', !Boolean(attach))
  if(cmd === 'build') dockerCmd = addCmdOpts(dockerCmd, params)
  if(cmd === 'down') dockerCmd = remove ? getDownArgs(dockerCmd, remove) : dockerCmd

  return dockerCmd
}

module.exports = {
  buildComposeCmd
}

