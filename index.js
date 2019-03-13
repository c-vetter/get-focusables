module.exports = getFocusableElements
getFocusableElements.asArray = getArrayOfFocusableElements


const focusableElementsSelector = [
	'a[href]',
	'area[href]',
	'input:not([disabled]):not([type="hidden"])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'button:not([disabled])',
	'iframe',
	'object',
	'embed',
	'[contenteditable]',
	'[tabindex]',
].map(
	selector => `${selector}:not([tabindex^="-"])`
).join(',')


/** @private @type NodeListDummy */
const nodeListDummy = Object.create(null)
nodeListDummy.length = 0
Object.freeze(nodeListDummy)


/**
 * Retrieves all focusable descendents of the given DOM element.
 *
 * @param {Element} [context=document] - The DOM Element in which to look for focusable elements.
 *
 * @returns {NodeList|NodeListDummy}
 */
function getFocusableElements (context = document) {
	if (
		context === null ||
		typeof context !== 'object' ||
		typeof context.querySelectorAll !== 'function'
	) {
		return nodeListDummy
	}

	return context.querySelectorAll(focusableElementsSelector)
}

/**
 * @function getFocusableElements.asArray
 *
 * @description
 * Same as `getFocusableElements` but returns an Array
 *
 * @param {Element} [context=document] - The DOM Element in which to look for focusable elements.
 *
 * @returns {Array}
 */
function getArrayOfFocusableElements (context) {
	const nodes = getFocusableElements(context)

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
