import { isObj } from '@keg-hub/jsutils'
import { ruleHelpers } from '../constants'
import { getPlatforms } from './getPlatforms'
import { Dimensions } from 'ReDimensions'
import { getSize, getMergeSizes } from '../dimensions'
import { getTheme } from './getTheme'

/**
 * Helper for compileStyles
 * @param {Object} obj
 * @param {string} key
 * @returns {Object} obj with all the properties located under obj.key merged to the root of obj, and key removed
 * @example
 * const a = { a: 0, b: { c: 10, d: 11 }}
 * extract(a, 'b') => { a: 0, c: 10, d: 11 }
 */
const extract = (obj, key) => {
  obj[key] && Object.assign(obj, obj[key])
  delete obj[key]
  return obj
}

/**
 * Compiles the styles object given the active platforms, sizes, and keys to omit
 * @param {Object} styles
 * @param {Array<string>} params.platforms - platforms to compile
 * @param {Array<string>} params.sizes - sizes to compile
 * @param {Array<string>} params.omit - dynamic keys to ignore
 * @param {Object} params.aliases - optional alias map for style rules, defaults to constants.ruleHelpers
 * @returns {Object} compiled stlyes
 */
export const compileStyles = (styles, params = {}) => {
  if (!isObj(styles)) return styles

  const { platforms, sizes, omit, aliases = ruleHelpers } = params

  // filter out unused keys, compile aliases, and move all active size-styles
  // into buckets at root of object
  const structured = Object.entries(styles).reduce((acc, [ key, value ]) => {
    if (platforms.includes(key) || sizes.includes(key)) {
      // compile the styles defined by `key`, then merge them with
      // all previous compiled styles identified by the same key
      acc[key] = {
        ...acc[key],
        ...compileStyles(value, params),
      }
    }
    else if (!omit.includes(key)) {
      // convert shortcut keys, if used (e.g. m => margin)
      // then add the entry to the compiled styles object
      const trueKey = aliases[key] || key
      acc[trueKey] = isObj(value) ? compileStyles(value, params) : value
    }

    return acc
  }, {})

  // sizes and platforms have a precedence order, determined by
  // the order of keys in `platforms` and `sizes` (from least-specific to most).
  // So remove the dynamic keys, in precedence order, and merge their values
  // with the final styles object in that order
  const fromPlatforms = platforms.reduce(extract, structured)
  return sizes.reduce(extract, fromPlatforms)
}

/**
 * Calls `compileStyles` with all of the parameters matching the current state of your app's viewport
 * (the currently active platforms & sizes)
 * @param {Object} styles
 * @returns {Object}
 */
export const compileStylesForViewport = (styles, withMeta = true) => {
  const [ platforms, inactivePlatforms ] = getPlatforms()
  const dimensions = Dimensions.get('window')
  const [ sizeKey, widthForSizeKey ] = getSize(dimensions.width)
  const [ activeSizes, inactiveSizes ] = getMergeSizes(sizeKey) || []
  const keysToIgnore = inactivePlatforms.concat(inactiveSizes)

  const compiled = compileStyles(styles, {
    platforms,
    sizes: activeSizes,
    omit: keysToIgnore,
  })

  if (withMeta) {
    compiled.RTMeta = {
      key: sizeKey,
      size: widthForSizeKey,
      width: dimensions.width,
      height: dimensions.height,
    }
    compiled.get = getTheme
  }

  return compiled
}
