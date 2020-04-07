const { reduceObj, isStr } = require('jsutils')


/**
 * Formats volume mounts into a docker string format from an object
 * @param {Object} dirs - Key/Value pairs of folder paths to mount
 * @param {string} [dockerCmd=''] - Docker command to add mounts to
 *
 * @returns {string} - Volume mounts joined as a docker formatted string
 */
const getVolumeMounts = (dirs, dockerCmd='') => {
  return reduceObj(dirs, (local, mount, joinedCmd) => {
    return isStr(mount)
      ? `${joinedCmd} -v ${local}:${mount}`
      : joinedCmd
  }, dockerCmd)
}

module.exports = {
  getVolumeMounts
}
