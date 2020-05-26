const { checkCall, get, reduceObj, isObj, isFunc } = require('jsutils')
const { getCoreVersion } = require('KegUtils/getters')
const { logVirtualIP } = require('KegUtils/log')
const { getTapPath } = require('KegUtils/globalConfig/getTapPath')
const { throwNoAction, throwNoTask } = require('KegUtils/error')
const { buildDockerCmd } = require('KegDocker')
const { spawnCmd, executeCmd } = require('KegProc')
const { DOCKER } = require('KegConst')

/**
 * Starts a docker container for a tap
 * @param {Object} args - arguments passed from the runTask method
 * @param {Object} args.globalConfig - Global config object for the keg-cli
 * @param {Object} args.params - Formatted object of the passed in options 
 *
 * @returns {void}
 */
const startContainer = async ({ globalConfig, params }) => {
  const { tap, env, docker, mounts } = params

  const location = getTapPath(globalConfig, tap)
  // TODO: update version to come from docker BUILD constants
  const version = getCoreVersion(globalConfig)

  const dockerCmd = buildDockerCmd(globalConfig, {
    tap,
    env,
    mounts,
    location,
    docker,
    name: 'tap',
    cmd: `run`,
    container: 'TAP',
  })

  await logVirtualIP()

  await spawnCmd(dockerCmd, location)
}

/**
 * Start a docker-sync or docker container for a tap
 * @param {Object} args - arguments passed from the runTask method
 * @param {string} args.command - Initial command being run
 * @param {Array} args.options - arguments passed from the command line
 * @param {Object} args.tasks - All registered tasks of the CLI
 * @param {Object} globalConfig - Global config object for the keg-cli
 *
 * @returns {void}
 */
const startTap = async (args) => {
  // Check if we are running the container with just docker
  if(get(args, 'params.service') === 'container') return startContainer(args)
  
  const { command, globalConfig, options, params, tasks } = args
  const { tap } = params

  // Get the docker-sync start tasks
  const syncStartTask = get(tasks, 'docker.tasks.sync.tasks.start')

  // Check that the sync start task exists
  return !isObj(syncStartTask)
    ? throwNoTask(args)
    // Check the action for the sync start exists
    : !isFunc(syncStartTask.action)
      ? throwNoAction(args)
      // Run the docker-sync start task for the tap
      : checkCall(syncStartTask.action, {
          ...args,
          command: 'docker',
          params: { ...args.params, tap, context: 'tap' },
          task: syncStartTask,
        })

}

module.exports = {
  name: 'start',
  alias: [ 'st', 'run' ],
  action: startTap,
  description: `Runs a tap in a docker container`,
  example: 'keg tap start <options>',
  options: {
    tap: { 
      description: 'Name of the tap to run. Must be a tap linked in the global config',
      required: true,
    },
    build: {
      description: 'Removes and rebuilds the docker container before running the tap',
      default: true
    },
    clean: {
      description: 'Cleans docker-sync before running the tap',
      example: 'keg tap --clean false',
      default: true
    },
    env: {
      description: 'Environment to start the Docker service in',
      default: 'development',
    },
    docker: {
      description: `Extra docker arguments to pass to the 'docker run command'`
    },
    mounts: {
      description: `List of key names or folder paths to mount into the docker container`
    },
    service: {
      allowed: [ 'sync', 'container' ],
      description: 'What docker service to build the tap with. Must be on of ( sync || container )',
      default: 'sync'
    },
  }
}