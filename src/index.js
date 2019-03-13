module.exports = getFocusableElements
getFocusableElements.asArray = getArrayOfFocusableElements


const focusableElementsSelector = require('./focusable-selectors')
const tabbableElementsSelector = require('./tabbable-selectors')


/** @private @type NodeListDummy */
const nodeListDummy = Object.create(null)
nodeListDummy.length = 0
Object.freeze(nodeListDummy)


/**
 * Retrieves all focusable descendents of the given DOM element.
 *
 * @param {Element} [context=document] - The DOM Element in which to look for focusable elements
 * @param {boolean} [tabbable=true] - Restrict to tabbable elements
 *
 * @returns {NodeList|NodeListDummy}
 */
function getFocusableElements (context = document, tabbable = true) {
	if (
		context === null ||
		typeof context !== 'object' ||
		typeof context.querySelectorAll !== 'function'
	) {
		return nodeListDummy
	}

	return context.querySelectorAll(tabbable ? tabbableElementsSelector : focusableElementsSelector)
}

/**
 * @function getFocusableElements.asArray
 *
 * @description
 * Same as `getFocusableElements` but returns an Array
 *
 * @param {Element} [context=document] - The DOM Element in which to look for focusable elements
 * @param {boolean} [tabbable=true] - Restrict to tabbable elements
 *
 * @returns {Array}
 */
function getArrayOfFocusableElements (context, tabbable) {
	const nodes = getFocusableElements(context, tabbable)

	return Array.from(nodes)
}

/**
 * @typedef {Object} NodeListDummy
 *
 *
 * @description
 * The NodeListDummy is an object with a length property of 0.
 * This ensures that the result of `getFocusableElements` can always be used and checked for length.
 * That makes checks for a truthy/falsy return value unnecessary.
 *
 * @property {number} length - always 0
 */
