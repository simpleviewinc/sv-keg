const { DOCKER } = require('KegConst')
const { reduceObj, get, isStr } = require('jsutils')
const { exists } = require('KegUtils/helpers/exists')
const docker = require('KegDocCli')
const { getContainerConst } = require('./getContainerConst')

/**
 * Loops over the passed in args and maps them to the docker constants
 * Matching keys will use the passed in value or the constants value
 * @example
 * const dockerArgs = getDockerArgs({ network: true, file: '/repo/Dockerfile' })
 * @param {Object} args - Key/Values to map to docker arguments
 * @param {string|boolean} args.file - Dockerfile to use for the docker command
 * @param {string|boolean} args.network - Type of docker network setup to use
 * @param {string|boolean} args.attached - Docker container interactive mode
 * @param {string|boolean} args.detached - Docker container detached mode
 * @param {string|boolean} args.nocache - Build docker container without using cache
 * @param {string} [dockerCmd=''] - Docker command to add args to
 *
 * @returns {string} - Joint docker command arguments
 */
const getDockerArgs = ({ args, cmd, context, dockerCmd='' }) => {

  const containerOpts = get(DOCKER, `CONTAINERS.${ context.toUpperCase() }`)

  // Override the default docker arguments with passed in arguments
  const checkArgs = { ...containerOpts.DEFAULTS, ...args }

  // Loop the containerOpts.Value object and check for any extra arguments to add
  // Get All values get compared against the checkArgs array
  // If set to true, then the value from containerOpts.VALUES is added to the cmd
  return reduceObj(containerOpts.VALUES, (key, value, joinedArgs) => {

    // Ensure both detached and attached are not added to the docker args
    if(key === 'detached' && args.attached) return joinedArgs
    if(key === 'attached' && args.detached) return joinedArgs

    // Check if cache is explicitly set to false
    // And if so, turn off caching for builds
    if(key === 'nocache')
      return args.cache === false
        ? `${ joinedArgs } ${ value }`.trim()
        : joinedArgs

    // Get the key value from the args object
    // This will be either a passed in value from the command line
    // Or the key value from DOCKER.CONTAINERS.DEFAULTS constants ( boolean )
    const argVal = checkArgs[key]

    // Special handling for the container entrypoint override
    // We need both the key and the value
    // So check if the value exists, and is the correct type
    if(key === 'entrypoint' && exists(argVal) && isStr(argVal))
       return `${ joinedArgs } ${ value } ${ argVal }`.trim()

    // Ensure if the key exists in the args object, otherwise set to empty string
    const addArg = exists(argVal) ? argVal === true ? value : argVal : ''

    // Join and return the args
    return `${joinedArgs} ${addArg}`.trim()
  }, dockerCmd)

}

/**
 * Adds the name of the container to the dockerCmd
 * @param {string} name - Name of the container to add to the dockerCmd
 * @param {string} [dockerCmd=''] - Docker command to add the name to
 *
 * @returns {string} - dockerCmd with the name arg added
 */
const addContainerName = (dockerCmd='', name) => {
  return `${dockerCmd} --name ${name}`
}

/**
 * Adds location as a mounted volume to the dockerCmd
 * @param {string} location - Local location of the tap to mount
 * @param {string} [dockerCmd=''] - Docker command to add the mounted tap to
 *
 * @returns {string} - dockerCmd with the mounted tap arg added
 */
const addTapMount = (dockerCmd, context, location) => {
  const mountPath = getContainerConst(context, `ENV.DOC_APP_PATH`)

  return mountPath
    ? `${dockerCmd} -v ${location}:${ mountPath }`
    : dockerCmd

}

/**
 * Adds Envs to the passed in dockerCmd ( -e key=value )
 * @param {string} [dockerCmd=''] - Command to add the envs to
 * @param {Object} [options={}] - Items to add as Envs
 *
 * @returns {string} - dockerCmd with envs added
 */
const addContainerEnv = (dockerCmd='', options={}) => {
  return reduceObj(options, (key, value, cmd) => {
    return docker.asContainerEnv(
      key.toUpperCase(),
      value,
      cmd
    )
  }, dockerCmd)
}



module.exports = {
  addContainerEnv,
  addContainerName,
  addTapMount,
  getDockerArgs
}