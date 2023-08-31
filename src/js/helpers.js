/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commentary/fileHeaderComment.ts":
/*!*********************************************!*\
  !*** ./src/commentary/fileHeaderComment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Generates a header comment for a generated file.
 *
 * @param {string} brandName - The current brand name.
 * @param {string} fileName - The name of the generated file.
 * @returns {string} The formatted header comment.
 */
const fileHeaderComment = (brandName, fileName) => `
  /*
  * ${fileName} - generated from Supernova by neuron exporter.
  * ----------------------------------------------------------
  * 
  * current brand: ${brandName}
  */
  `;
exports["default"] = fileHeaderComment;


/***/ }),

/***/ "./src/commentary/groupNameComment.ts":
/*!********************************************!*\
  !*** ./src/commentary/groupNameComment.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let printComment = false;
let groupName = '';
/**
 * Generates a group name comment if the token group's parent name changes.
 *
 * @param {TokenGroup} tokenGroup - The token group to generate a comment for.
 * @returns {string} The generated group name comment.
 */
const groupNameComment = (tokenGroup) => {
    if (!tokenGroup.parent) {
        return '';
    }
    const { parent: { name } } = tokenGroup;
    if (name !== groupName) {
        groupName = name;
        printComment = true;
    }
    else {
        printComment = false;
    }
    return printComment
        ? `

  /* --- ${groupName} --- */
` : '';
};
exports["default"] = groupNameComment;


/***/ }),

/***/ "./src/commentary/index.ts":
/*!*********************************!*\
  !*** ./src/commentary/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.groupNameComment = exports.fileHeaderComment = void 0;
var fileHeaderComment_1 = __webpack_require__(/*! ./fileHeaderComment */ "./src/commentary/fileHeaderComment.ts");
Object.defineProperty(exports, "fileHeaderComment", ({ enumerable: true, get: function () { return fileHeaderComment_1.default; } }));
var groupNameComment_1 = __webpack_require__(/*! ./groupNameComment */ "./src/commentary/groupNameComment.ts");
Object.defineProperty(exports, "groupNameComment", ({ enumerable: true, get: function () { return groupNameComment_1.default; } }));


/***/ }),

/***/ "./src/names/index.ts":
/*!****************************!*\
  !*** ./src/names/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.variableName = void 0;
var variableName_1 = __webpack_require__(/*! ./variableName */ "./src/names/variableName.ts");
Object.defineProperty(exports, "variableName", ({ enumerable: true, get: function () { return variableName_1.default; } }));


/***/ }),

/***/ "./src/names/variableName.ts":
/*!***********************************!*\
  !*** ./src/names/variableName.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const replaceIfContains = (source, replaceFrom, replaceTo) => {
    if (source.includes(replaceFrom)) {
        return source.replace(replaceFrom, replaceTo);
    }
    return source;
};
/**
 * Generates a variable name by combining prefixes, token information, and token group path.
 *
 * @param {string} prefix - The prefix to prepend to the generated name.
 * @param {Token} token - The token to extract information from.
 * @param {TokenGroup} tokenGroup - The token group to extract path and name information from.
 * @returns {string} The generated variable name.
 */
const variableName = (prefix, token, tokenGroup) => {
    // Create array with all path segments and token name at the end
    const segments = [...tokenGroup.path];
    if (!tokenGroup.isRoot) {
        segments.push(tokenGroup.name);
    }
    // Replace dash to double dash in the name
    const withDoubleDash = replaceIfContains(token.name, "-", "--");
    segments.push(withDoubleDash);
    // Create string from sentence array and separate it ba "-" symbol.
    const separatedName = segments.join("-").toLowerCase();
    // If the group contains space remove it.
    const finalResult = separatedName.replace(/\s/g, "");
    return `${prefix}-${finalResult}`;
};
exports["default"] = variableName;


/***/ }),

/***/ "./src/payloads/commonPayloads.ts":
/*!****************************************!*\
  !*** ./src/payloads/commonPayloads.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.categoryPrefixes = void 0;
/**
 * Prefixes for the token category.
 * Only color and measure is implemented now. We need only color and measure now.
 */
exports.categoryPrefixes = {
    colorTokenPrefix: "color",
    measureTokenPrefix: "measure",
};


/***/ }),

/***/ "./src/payloads/index.ts":
/*!*******************************!*\
  !*** ./src/payloads/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./commonPayloads */ "./src/payloads/commonPayloads.ts"), exports);


/***/ }),

/***/ "./src/values/index.ts":
/*!*****************************!*\
  !*** ./src/values/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rgbToHsl = void 0;
var rgbToHsl_1 = __webpack_require__(/*! ./rgbToHsl */ "./src/values/rgbToHsl.ts");
Object.defineProperty(exports, "rgbToHsl", ({ enumerable: true, get: function () { return rgbToHsl_1.default; } }));


/***/ }),

/***/ "./src/values/rgbToHsl.ts":
/*!********************************!*\
  !*** ./src/values/rgbToHsl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Calculates the hue value for the HSL color space based on the RGB values.
 *
 * @param {number} delta - The difference between the maximum and minimum RGB values.
 * @param {number} cmax - The maximum RGB value among r, g, and b.
 * @param {number} r - The red component of the RGB color.
 * @param {number} g - The green component of the RGB color.
 * @param {number} b - The blue component of the RGB color.
 * @returns {number} The calculated hue value in degrees [0, 360).
 */
const calculateHue = (delta, cmax, r, g, b) => {
    let result = 0;
    // no deference
    if (delta === 0) {
        return 0;
    }
    if (cmax === r) {
        result = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        result = (b - r) / delta + 2;
    }
    else if (cmax === b) {
        result = (r - g) / delta + 4;
    }
    const rounded = Math.round(result * 60);
    if (rounded < 0) {
        return rounded + 360;
    }
    return rounded;
};
/**
 * Calculates the lightness value for the HSL color space.
 *
 * @param {number} cmax - The maximum RGB value among r, g, and b.
 * @param {number} cmin - The minimum RGB value among r, g, and b.
 * @returns {number} The calculated lightness value in the range [0, 1].
 */
const calculateLightness = (cmax, cmin) => (cmax + cmin) / 2;
/**
 * Calculates the saturation value for the HSL color space.
 *
 * @param {number} delta - The difference between the maximum and minimum RGB values.
 * @param {number} lightness - The calculated lightness value.
 * @returns {number} The calculated saturation value in the range [0, 1].
 */
const calculateSaturation = (delta, lightness) => delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
/**
 * Converts an RGB color to HSL format.
 *
 * @param {ColorTokenValue} color - The RGB color to be converted.
 * @returns {string} The HSL representation of the input RGB color.
 */
const rgbToHsl = (color) => {
    const { r: _r, g: _g, b: _b, a } = color;
    const r = _r / 255;
    const g = _g / 255;
    const b = _b / 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    const hue = calculateHue(delta, cmax, r, g, b);
    const _lightness = calculateLightness(cmax, cmin);
    const _saturation = calculateSaturation(delta, _lightness);
    // Multiply lightness and saturation by 100
    const lightness = +(_lightness * 100).toFixed(1);
    const saturation = +(_saturation * 100).toFixed(1);
    return `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
};
exports["default"] = rgbToHsl;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commentary_1 = __webpack_require__(/*! ./commentary */ "./src/commentary/index.ts");
const payloads_1 = __webpack_require__(/*! ./payloads */ "./src/payloads/index.ts");
const names_1 = __webpack_require__(/*! ./names */ "./src/names/index.ts");
const values_1 = __webpack_require__(/*! ./values */ "./src/values/index.ts");
// Functions registration.
Pulsar.registerFunction('variableName', names_1.variableName);
Pulsar.registerFunction('fileHeaderComment', commentary_1.fileHeaderComment);
Pulsar.registerFunction('groupNameComment', commentary_1.groupNameComment);
Pulsar.registerFunction('rgbToHsl', values_1.rgbToHsl);
// Payloads registration
Pulsar.registerPayload('categoryPrefixes', payloads_1.categoryPrefixes);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxVQUFVO0FBQ2hCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ2pCRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsV0FBVztBQUN0QjtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDNUJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QixHQUFHLHlCQUF5QjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyxrRUFBcUI7QUFDdkQscURBQW9ELEVBQUUscUNBQXFDLHVDQUF1QyxFQUFDO0FBQ25JLHlCQUF5QixtQkFBTyxDQUFDLGdFQUFvQjtBQUNyRCxvREFBbUQsRUFBRSxxQ0FBcUMsc0NBQXNDLEVBQUM7Ozs7Ozs7Ozs7O0FDTnBIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixxQkFBcUIsbUJBQU8sQ0FBQyxtREFBZ0I7QUFDN0MsZ0RBQStDLEVBQUUscUNBQXFDLGtDQUFrQyxFQUFDOzs7Ozs7Ozs7OztBQ0o1RztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsWUFBWTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLFlBQVk7QUFDcEM7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUMvQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsMERBQWtCOzs7Ozs7Ozs7OztBQ2hCMUI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLGlCQUFpQixtQkFBTyxDQUFDLDRDQUFZO0FBQ3JDLDRDQUEyQyxFQUFFLHFDQUFxQyw4QkFBOEIsRUFBQzs7Ozs7Ozs7Ozs7QUNKcEc7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsWUFBWSx5QkFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksSUFBSSx1QkFBdUIsS0FBSyxzQkFBc0I7QUFDNUU7QUFDQSxrQkFBZTs7Ozs7OztVQ3ZFZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQixtQkFBTyxDQUFDLCtDQUFjO0FBQzNDLG1CQUFtQixtQkFBTyxDQUFDLDJDQUFZO0FBQ3ZDLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFTO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLHVDQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvY29tbWVudGFyeS9maWxlSGVhZGVyQ29tbWVudC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9jb21tZW50YXJ5L2dyb3VwTmFtZUNvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvY29tbWVudGFyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9uYW1lcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9uYW1lcy92YXJpYWJsZU5hbWUudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvcGF5bG9hZHMvY29tbW9uUGF5bG9hZHMudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvcGF5bG9hZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvdmFsdWVzL2luZGV4LnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL3ZhbHVlcy9yZ2JUb0hzbC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogR2VuZXJhdGVzIGEgaGVhZGVyIGNvbW1lbnQgZm9yIGEgZ2VuZXJhdGVkIGZpbGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJyYW5kTmFtZSAtIFRoZSBjdXJyZW50IGJyYW5kIG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZ2VuZXJhdGVkIGZpbGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIGhlYWRlciBjb21tZW50LlxuICovXG5jb25zdCBmaWxlSGVhZGVyQ29tbWVudCA9IChicmFuZE5hbWUsIGZpbGVOYW1lKSA9PiBgXG4gIC8qXG4gICogJHtmaWxlTmFtZX0gLSBnZW5lcmF0ZWQgZnJvbSBTdXBlcm5vdmEgYnkgbmV1cm9uIGV4cG9ydGVyLlxuICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKiBcbiAgKiBjdXJyZW50IGJyYW5kOiAke2JyYW5kTmFtZX1cbiAgKi9cbiAgYDtcbmV4cG9ydHMuZGVmYXVsdCA9IGZpbGVIZWFkZXJDb21tZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5sZXQgcHJpbnRDb21tZW50ID0gZmFsc2U7XG5sZXQgZ3JvdXBOYW1lID0gJyc7XG4vKipcbiAqIEdlbmVyYXRlcyBhIGdyb3VwIG5hbWUgY29tbWVudCBpZiB0aGUgdG9rZW4gZ3JvdXAncyBwYXJlbnQgbmFtZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7VG9rZW5Hcm91cH0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCB0byBnZW5lcmF0ZSBhIGNvbW1lbnQgZm9yLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lIGNvbW1lbnQuXG4gKi9cbmNvbnN0IGdyb3VwTmFtZUNvbW1lbnQgPSAodG9rZW5Hcm91cCkgPT4ge1xuICAgIGlmICghdG9rZW5Hcm91cC5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCB7IHBhcmVudDogeyBuYW1lIH0gfSA9IHRva2VuR3JvdXA7XG4gICAgaWYgKG5hbWUgIT09IGdyb3VwTmFtZSkge1xuICAgICAgICBncm91cE5hbWUgPSBuYW1lO1xuICAgICAgICBwcmludENvbW1lbnQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwcmludENvbW1lbnRcbiAgICAgICAgPyBgXG5cbiAgLyogLS0tICR7Z3JvdXBOYW1lfSAtLS0gKi9cbmAgOiAnJztcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBncm91cE5hbWVDb21tZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdyb3VwTmFtZUNvbW1lbnQgPSBleHBvcnRzLmZpbGVIZWFkZXJDb21tZW50ID0gdm9pZCAwO1xudmFyIGZpbGVIZWFkZXJDb21tZW50XzEgPSByZXF1aXJlKFwiLi9maWxlSGVhZGVyQ29tbWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpbGVIZWFkZXJDb21tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmaWxlSGVhZGVyQ29tbWVudF8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgZ3JvdXBOYW1lQ29tbWVudF8xID0gcmVxdWlyZShcIi4vZ3JvdXBOYW1lQ29tbWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdyb3VwTmFtZUNvbW1lbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdyb3VwTmFtZUNvbW1lbnRfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZhcmlhYmxlTmFtZSA9IHZvaWQgMDtcbnZhciB2YXJpYWJsZU5hbWVfMSA9IHJlcXVpcmUoXCIuL3ZhcmlhYmxlTmFtZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhcmlhYmxlTmFtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFyaWFibGVOYW1lXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVwbGFjZUlmQ29udGFpbnMgPSAoc291cmNlLCByZXBsYWNlRnJvbSwgcmVwbGFjZVRvKSA9PiB7XG4gICAgaWYgKHNvdXJjZS5pbmNsdWRlcyhyZXBsYWNlRnJvbSkpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKHJlcGxhY2VGcm9tLCByZXBsYWNlVG8pO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xufTtcbi8qKlxuICogR2VuZXJhdGVzIGEgdmFyaWFibGUgbmFtZSBieSBjb21iaW5pbmcgcHJlZml4ZXMsIHRva2VuIGluZm9ybWF0aW9uLCBhbmQgdG9rZW4gZ3JvdXAgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC0gVGhlIHByZWZpeCB0byBwcmVwZW5kIHRvIHRoZSBnZW5lcmF0ZWQgbmFtZS5cbiAqIEBwYXJhbSB7VG9rZW59IHRva2VuIC0gVGhlIHRva2VuIHRvIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbS5cbiAqIEBwYXJhbSB7VG9rZW5Hcm91cH0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCB0byBleHRyYWN0IHBhdGggYW5kIG5hbWUgaW5mb3JtYXRpb24gZnJvbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBnZW5lcmF0ZWQgdmFyaWFibGUgbmFtZS5cbiAqL1xuY29uc3QgdmFyaWFibGVOYW1lID0gKHByZWZpeCwgdG9rZW4sIHRva2VuR3JvdXApID0+IHtcbiAgICAvLyBDcmVhdGUgYXJyYXkgd2l0aCBhbGwgcGF0aCBzZWdtZW50cyBhbmQgdG9rZW4gbmFtZSBhdCB0aGUgZW5kXG4gICAgY29uc3Qgc2VnbWVudHMgPSBbLi4udG9rZW5Hcm91cC5wYXRoXTtcbiAgICBpZiAoIXRva2VuR3JvdXAuaXNSb290KSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2godG9rZW5Hcm91cC5uYW1lKTtcbiAgICB9XG4gICAgLy8gUmVwbGFjZSBkYXNoIHRvIGRvdWJsZSBkYXNoIGluIHRoZSBuYW1lXG4gICAgY29uc3Qgd2l0aERvdWJsZURhc2ggPSByZXBsYWNlSWZDb250YWlucyh0b2tlbi5uYW1lLCBcIi1cIiwgXCItLVwiKTtcbiAgICBzZWdtZW50cy5wdXNoKHdpdGhEb3VibGVEYXNoKTtcbiAgICAvLyBDcmVhdGUgc3RyaW5nIGZyb20gc2VudGVuY2UgYXJyYXkgYW5kIHNlcGFyYXRlIGl0IGJhIFwiLVwiIHN5bWJvbC5cbiAgICBjb25zdCBzZXBhcmF0ZWROYW1lID0gc2VnbWVudHMuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBJZiB0aGUgZ3JvdXAgY29udGFpbnMgc3BhY2UgcmVtb3ZlIGl0LlxuICAgIGNvbnN0IGZpbmFsUmVzdWx0ID0gc2VwYXJhdGVkTmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0tJHtmaW5hbFJlc3VsdH1gO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhcmlhYmxlTmFtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYXRlZ29yeVByZWZpeGVzID0gdm9pZCAwO1xuLyoqXG4gKiBQcmVmaXhlcyBmb3IgdGhlIHRva2VuIGNhdGVnb3J5LlxuICogT25seSBjb2xvciBhbmQgbWVhc3VyZSBpcyBpbXBsZW1lbnRlZCBub3cuIFdlIG5lZWQgb25seSBjb2xvciBhbmQgbWVhc3VyZSBub3cuXG4gKi9cbmV4cG9ydHMuY2F0ZWdvcnlQcmVmaXhlcyA9IHtcbiAgICBjb2xvclRva2VuUHJlZml4OiBcImNvbG9yXCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbW1vblBheWxvYWRzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZ2JUb0hzbCA9IHZvaWQgMDtcbnZhciByZ2JUb0hzbF8xID0gcmVxdWlyZShcIi4vcmdiVG9Ic2xcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZ2JUb0hzbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmdiVG9Ic2xfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGh1ZSB2YWx1ZSBmb3IgdGhlIEhTTCBjb2xvciBzcGFjZSBiYXNlZCBvbiB0aGUgUkdCIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIFJHQiB2YWx1ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gY21heCAtIFRoZSBtYXhpbXVtIFJHQiB2YWx1ZSBhbW9uZyByLCBnLCBhbmQgYi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByIC0gVGhlIHJlZCBjb21wb25lbnQgb2YgdGhlIFJHQiBjb2xvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBnIC0gVGhlIGdyZWVuIGNvbXBvbmVudCBvZiB0aGUgUkdCIGNvbG9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgLSBUaGUgYmx1ZSBjb21wb25lbnQgb2YgdGhlIFJHQiBjb2xvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjYWxjdWxhdGVkIGh1ZSB2YWx1ZSBpbiBkZWdyZWVzIFswLCAzNjApLlxuICovXG5jb25zdCBjYWxjdWxhdGVIdWUgPSAoZGVsdGEsIGNtYXgsIHIsIGcsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAvLyBubyBkZWZlcmVuY2VcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChjbWF4ID09PSByKSB7XG4gICAgICAgIHJlc3VsdCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gZykge1xuICAgICAgICByZXN1bHQgPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBiKSB7XG4gICAgICAgIHJlc3VsdCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgfVxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJlc3VsdCAqIDYwKTtcbiAgICBpZiAocm91bmRlZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kZWQgKyAzNjA7XG4gICAgfVxuICAgIHJldHVybiByb3VuZGVkO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGlnaHRuZXNzIHZhbHVlIGZvciB0aGUgSFNMIGNvbG9yIHNwYWNlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjbWF4IC0gVGhlIG1heGltdW0gUkdCIHZhbHVlIGFtb25nIHIsIGcsIGFuZCBiLlxuICogQHBhcmFtIHtudW1iZXJ9IGNtaW4gLSBUaGUgbWluaW11bSBSR0IgdmFsdWUgYW1vbmcgciwgZywgYW5kIGIuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUgaW4gdGhlIHJhbmdlIFswLCAxXS5cbiAqL1xuY29uc3QgY2FsY3VsYXRlTGlnaHRuZXNzID0gKGNtYXgsIGNtaW4pID0+IChjbWF4ICsgY21pbikgLyAyO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzYXR1cmF0aW9uIHZhbHVlIGZvciB0aGUgSFNMIGNvbG9yIHNwYWNlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gUkdCIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaWdodG5lc3MgLSBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY2FsY3VsYXRlZCBzYXR1cmF0aW9uIHZhbHVlIGluIHRoZSByYW5nZSBbMCwgMV0uXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZVNhdHVyYXRpb24gPSAoZGVsdGEsIGxpZ2h0bmVzcykgPT4gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSk7XG4vKipcbiAqIENvbnZlcnRzIGFuIFJHQiBjb2xvciB0byBIU0wgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7Q29sb3JUb2tlblZhbHVlfSBjb2xvciAtIFRoZSBSR0IgY29sb3IgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIEhTTCByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5wdXQgUkdCIGNvbG9yLlxuICovXG5jb25zdCByZ2JUb0hzbCA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgcjogX3IsIGc6IF9nLCBiOiBfYiwgYSB9ID0gY29sb3I7XG4gICAgY29uc3QgciA9IF9yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBfZyAvIDI1NTtcbiAgICBjb25zdCBiID0gX2IgLyAyNTU7XG4gICAgY29uc3QgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgIGNvbnN0IGh1ZSA9IGNhbGN1bGF0ZUh1ZShkZWx0YSwgY21heCwgciwgZywgYik7XG4gICAgY29uc3QgX2xpZ2h0bmVzcyA9IGNhbGN1bGF0ZUxpZ2h0bmVzcyhjbWF4LCBjbWluKTtcbiAgICBjb25zdCBfc2F0dXJhdGlvbiA9IGNhbGN1bGF0ZVNhdHVyYXRpb24oZGVsdGEsIF9saWdodG5lc3MpO1xuICAgIC8vIE11bHRpcGx5IGxpZ2h0bmVzcyBhbmQgc2F0dXJhdGlvbiBieSAxMDBcbiAgICBjb25zdCBsaWdodG5lc3MgPSArKF9saWdodG5lc3MgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc2F0dXJhdGlvbiA9ICsoX3NhdHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJnYlRvSHNsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29tbWVudGFyeV8xID0gcmVxdWlyZShcIi4vY29tbWVudGFyeVwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbmNvbnN0IG5hbWVzXzEgPSByZXF1aXJlKFwiLi9uYW1lc1wiKTtcbmNvbnN0IHZhbHVlc18xID0gcmVxdWlyZShcIi4vdmFsdWVzXCIpO1xuLy8gRnVuY3Rpb25zIHJlZ2lzdHJhdGlvbi5cblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKCd2YXJpYWJsZU5hbWUnLCBuYW1lc18xLnZhcmlhYmxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbignZmlsZUhlYWRlckNvbW1lbnQnLCBjb21tZW50YXJ5XzEuZmlsZUhlYWRlckNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oJ2dyb3VwTmFtZUNvbW1lbnQnLCBjb21tZW50YXJ5XzEuZ3JvdXBOYW1lQ29tbWVudCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbigncmdiVG9Ic2wnLCB2YWx1ZXNfMS5yZ2JUb0hzbCk7XG4vLyBQYXlsb2FkcyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlclBheWxvYWQoJ2NhdGVnb3J5UHJlZml4ZXMnLCBwYXlsb2Fkc18xLmNhdGVnb3J5UHJlZml4ZXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9