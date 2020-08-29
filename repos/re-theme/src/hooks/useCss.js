import React, { useMemo } from 'react'
import { useTheme } from './useTheme'
import { PortalHelmet, Style } from '../helmet'
import { hasDomAccess } from '../helpers/hasDomAccess'
import { getRNPlatform } from '../context/platform'
import { checkCall, get, isStr, isObj, exists, reduceObj } from '@svkeg/jsutils'

/**
 * Consistent object which can be reused to keep it's identity
 * @object
 */
const noOp = Object.freeze({})

/**
 * Cache holder for quick check if we're using web styles or not
 * <br> Can be overridden by passing inline to the useCss hook
 * @object
 */
let __webPlatform


/**
 * Adds styles to the dom through react-helmet
 * <br/>All selectors are converted into data-class selectors for versatility
 * @function
 * @param {Object} cssProps - Response from the buildDataSet method containing the dataSet selectors
 * @param {Object} webStyles - Single level (flat) CssInJs style object
 *                             Contains selectors as keys, and a style objects as the values
 *
 * @returns {Object} - Passed in cssProps to be applied to the React Components directly
 */
const addStylesToDom = (cssProps, webStyles) => {

  // TODO: Update this to dynamically build the passed in web styles into a joined string
  PortalHelmet([
    <Style key={'1'} >
    {`
      body { background-color: #111111; }
    `}
    </Style>
  ])

  return cssProps
}

/**
 * Validates the passed in theme style object to ensure the key value pairs are style rules
 * <br/>If style object is not valid, then it will throw!
 * <br/>Should only run in production
 * <br/>Bypassed when in production
 * @function
 * @param {Object} style - CssInJs style object
 * @param {string} className - Root class name for build the sub-data-call attributes
 *
 * @returns {boolean} - If themeStyles is a valid styles object
 */
const validTheme = (themeStyles, className) => {
  return process.env.NODE_ENV === 'production' ||
    Boolean(isObj(themeStyles) && className) ||
    console.error(
      `[ ReTheme ERROR ] - Invalid themeRef`,
      `\n   - useCss hook requires a valid theme reference of type 'Object' || 'string'`,
      `\n   - As string - must be a dot delimited path to a styles object on the global theme`,
      `\n   - As Object - must be a valid CssInJs styles object`,
      `\n`,
      `\n   - A 'root class' of type 'string' is also required`,
      `\n   - It can be a key on the 'themeRef' as '$class' or '$className'`,
      `\n   - Or passed as the third argument to the 'useCss' hook`
    )
}

/**
 * Checks if we should use web css style sheets or inline styles base on inline and platform
 * @function
 * @param {string} inline - Force use inline styles regardless of platform
 * 
 * @returns {boolean} - true if using a web platform, false if not on web || inline === true
 */
const checkWebPlatform = inline => {
  return inline
    ? false
    : exists(__webPlatform)
      ? __webPlatform
      : checkCall(() => {
          const platform = getRNPlatform()
          // Cache the web platform call so we don't have to call this again
          // The Platform doesn't change, so it's not an issue
          __webPlatform = hasDomAccess() && platform.OS === 'web'
            ? true
            : false

          return __webPlatform
        })
}

/**
 * Builds the cssProps to be returned to the calling component
 * <br/> The method returns valid component props, which means
 * <br/> The cssProps can and should be applied directly to the component
 * <br/> It builds a dataSet: { class: <dynamic-class> } based on the path to found style rules
 * @example
 * const cssStyles = { content: { icon: { color: 'green' }}}
 * const cssProps = buildDataSet(`class`, cssStyles)
 * // cssProps === { content: { icon: { style: { color: 'blue' }, dataSet: { class: `class-content-icon` }}}}
 * // dataSet.class === cssStyles.content.icon === `class-content-icon`
 * // The class value `cssProps.content.icon.dataSet.class` is built from the cssStyle path to the Icon
 * @function
 * 
 * @param {string} rootClass - Name to use as the root data-class attribute
 * @param {Object} cssStyles - CssInJs style object
 * @param {Object} webStyles - Empty object to hold the styles when in on a Web Platform
 * @param {Object} [customStyles={}] - Custom styles to merge with the theme css
 * 
 * @returns {Object} - cssProps Object, containing style and dataSet keys
 */
const buildDataSet = (rootClass, cssStyles, webStyles, customStyles) => {
  return reduceObj(cssStyles, (key, value, cssProps) => {

    // Check if value is an object
    // If it is, we know the key should be added to the dataSet
    isObj(value)
      ? checkCall(() => {
          // Build the class name to be used in the dataSet and webStyles
          const className = `${rootClass}-${key}`
          // Recursively call buildDataSet on each child object of the original cssProps
          cssProps[key] = buildDataSet(
            className,
            value,
            webStyles,
            isObj(customStyles) && customStyles[key] || noOp,
          )

          // If a style or className was added, then add the dataSet too
          const hasStyle = Boolean(cssProps[key].style || webStyles[className])
          hasStyle && ( cssProps[key].dataSet = { class: className } )

        })
      : checkCall(() => {
          // If it's not an object, it must by style rules
          // So add the styles to the correct object based on platform
          if(webStyles){
            // Use the rootCall, because that's the parent of the style object being created
            webStyles[rootClass] = webStyles[rootClass] || {}
            webStyles[rootClass][key] = isObj(customStyles) && customStyles[key] || value
          }
          else {
            // Add the style key, to be applied directly to the component in React Native
            cssProps.style = cssProps.style || {}
            cssProps.style[key] = isObj(customStyles) && customStyles[key] || value
          }
        })

    return cssProps
  })
}

/**
 * Create a custom hook for adding styles to the Dom in a web context
 * When on native, will return a dataSet and style prop to be applied to the element
 * @example
 * const { dataSet, style } = useCss(themeRef, customStyles, rootClass)
 * <View dataSet={ dataSet } style={ style } >My View</View>
 * 
 * @param {Object} css - CssInJs style object with a $class || $className key
 * @param {Object} [customStyles={}] - Custom styles to merge with the theme css
 * @param {string} rootClass - Name to use as the root data-class attribute
 * 
 * @returns { Object } - Current theme
 */
export const useCss = (themeRef, customStyles=noOp, rootClass, inline) => {

  const theme = useTheme()

  // Check if the themeRef is a theme path as a string
  // Or it could be an style object from the theme
  const themeStyles = isStr(themeRef) ? get(theme, themeRef, noOp) : (themeRef || noOp)

  return useMemo(() => {
    // Extract the $class and $className from the themeStyles
    const { $class, $className, ...cssStyle } = (themeStyles || noOp)
    const className = rootClass || $className || $class

    const isValid = validTheme(themeStyles, className)
    if(!validTheme(themeStyles, className)) return noOp
    
    // Check if we should add the styles to the Dom
    const webStyles = checkWebPlatform(inline) && {}
    const cssProps = buildDataSet(
      className,
      cssStyle,
      webStyles,
      customStyles,
    )

    // When on web, add the styles to a Dom <style> element using React-Helmet
    // This allows using css sudo classes like :hover
    return webStyles
      ? addStylesToDom(cssProps, webStyles)
      : cssProps

  }, [ themeStyles, customStyles, rootClass, inline ])
}
