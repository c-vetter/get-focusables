# get-focusables

Get focusable elements within a DOM node

## Versions

The package includes versions for ES6+ and ES5, both as an ESM module (browser-compatible) and a CJS module (npm-compatible).

Here's the included file variants:

|     | CJS      | ESM       | importing                                                |
| --- | -------- | --------- | -------------------------------------------------------- |
| ES6 | index.js | index.mjs | `const getFocusableElements = require('get-focusables')` |
| ES5 | es5.js   | es5.mjs   | `import getFocusableElements from 'get-focusables'`      |

Each version gives you the [getFocusableElements](#getfocusableelements) function.

`get-focusables` is written in ES6 syntax and packaged node-style.<br>
It is converted to ES5/ESM for wider distribution.<br>
The default is therefore the ES6 CJS variant `index.js`.

> **NOTE**<br>
> In order to get a non-default version, you will need to tell your bundler to use `index.mjs`/`es5.js`/`es5.mjs` instead of `index.js`. <br>
> For `webpack`, that's `{ resolve: { alias: { 'get-focusables': 'get-focusables/es5.mjs } } }'`

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [getFocusableElements](#getfocusableelements)
    -   [Parameters](#parameters)
-   [getFocusableElements.asArray](#getfocusableelementsasarray)
    -   [Parameters](#parameters-1)
-   [NodeListDummy](#nodelistdummy)
    -   [Properties](#properties)

### getFocusableElements

Retrieves all focusable descendents of the given DOM element.

#### Parameters

-   `context` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** The DOM Element in which to look for focusable elements. (optional, default `document`)

Returns **([NodeList](https://developer.mozilla.org/docs/Web/API/NodeList) \| [NodeListDummy](#nodelistdummy))** 

### getFocusableElements.asArray

Same as `getFocusableElements` but returns an Array

#### Parameters

-   `context` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** The DOM Element in which to look for focusable elements. (optional, default `document`)

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### NodeListDummy

The NodeListDummy is an object with a length property of 0.
This ensures that the result of `getFocusableElements` can always be used and checked for length.
That makes checks for a truthy/falsy return value unnecessary.

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Properties

-   `length` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** always 0
