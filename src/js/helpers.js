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
    // console.log(tokenGroup.path, tokenGroup.parent ? tokenGroup.name : '')
    console.log(tokenGroup.path);
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
exports.actionsNameDefinition = exports.categoryPrefixes = void 0;
/**
 * Prefixes for the token category.
 * Only color and measure is implemented now. We need only color and measure now.
 */
exports.categoryPrefixes = {
    colorTokenPrefix: "color",
    measureTokenPrefix: "measure",
};
exports.actionsNameDefinition = [
    "hover",
    "default",
    "active",
    "disabled",
    "emphasized",
    "muted",
    "contrast",
    "success",
    "danger",
    "warning",
    "info",
    "negative",
];


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
Pulsar.registerPayload('actionsNameDefinition', payloads_1.actionsNameDefinition);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZLHlCQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLHVCQUF1QixLQUFLLHNCQUFzQjtBQUM1RTtBQUNBLGtCQUFlOzs7Ozs7O1VDdkVmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCLG1CQUFPLENBQUMsK0NBQWM7QUFDM0MsbUJBQW1CLG1CQUFPLENBQUMsMkNBQVk7QUFDdkMsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVM7QUFDakMsaUJBQWlCLG1CQUFPLENBQUMsdUNBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL2NvbW1lbnRhcnkvZmlsZUhlYWRlckNvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvY29tbWVudGFyeS9ncm91cE5hbWVDb21tZW50LnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL2NvbW1lbnRhcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvbmFtZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvbmFtZXMvdmFyaWFibGVOYW1lLnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL3BheWxvYWRzL2NvbW1vblBheWxvYWRzLnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL3BheWxvYWRzL2luZGV4LnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL3ZhbHVlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy92YWx1ZXMvcmdiVG9Ic2wudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhIGhlYWRlciBjb21tZW50IGZvciBhIGdlbmVyYXRlZCBmaWxlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZE5hbWUgLSBUaGUgY3VycmVudCBicmFuZCBuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGdlbmVyYXRlZCBmaWxlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBoZWFkZXIgY29tbWVudC5cbiAqL1xuY29uc3QgZmlsZUhlYWRlckNvbW1lbnQgPSAoYnJhbmROYW1lLCBmaWxlTmFtZSkgPT4gYFxuICAvKlxuICAqICR7ZmlsZU5hbWV9IC0gZ2VuZXJhdGVkIGZyb20gU3VwZXJub3ZhIGJ5IG5ldXJvbiBleHBvcnRlci5cbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICogXG4gICogY3VycmVudCBicmFuZDogJHticmFuZE5hbWV9XG4gICovXG4gIGA7XG5leHBvcnRzLmRlZmF1bHQgPSBmaWxlSGVhZGVyQ29tbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xubGV0IHByaW50Q29tbWVudCA9IGZhbHNlO1xubGV0IGdyb3VwTmFtZSA9ICcnO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBncm91cCBuYW1lIGNvbW1lbnQgaWYgdGhlIHRva2VuIGdyb3VwJ3MgcGFyZW50IG5hbWUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge1Rva2VuR3JvdXB9IHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgdG8gZ2VuZXJhdGUgYSBjb21tZW50IGZvci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZSBjb21tZW50LlxuICovXG5jb25zdCBncm91cE5hbWVDb21tZW50ID0gKHRva2VuR3JvdXApID0+IHtcbiAgICBpZiAoIXRva2VuR3JvdXAucGFyZW50KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgeyBwYXJlbnQ6IHsgbmFtZSB9IH0gPSB0b2tlbkdyb3VwO1xuICAgIGlmIChuYW1lICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgZ3JvdXBOYW1lID0gbmFtZTtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByaW50Q29tbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb21tZW50XG4gICAgICAgID8gYFxuXG4gIC8qIC0tLSAke2dyb3VwTmFtZX0gLS0tICovXG5gIDogJyc7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JvdXBOYW1lQ29tbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gZXhwb3J0cy5maWxlSGVhZGVyQ29tbWVudCA9IHZvaWQgMDtcbnZhciBmaWxlSGVhZGVyQ29tbWVudF8xID0gcmVxdWlyZShcIi4vZmlsZUhlYWRlckNvbW1lbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWxlSGVhZGVyQ29tbWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmlsZUhlYWRlckNvbW1lbnRfMS5kZWZhdWx0OyB9IH0pO1xudmFyIGdyb3VwTmFtZUNvbW1lbnRfMSA9IHJlcXVpcmUoXCIuL2dyb3VwTmFtZUNvbW1lbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJncm91cE5hbWVDb21tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBncm91cE5hbWVDb21tZW50XzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52YXJpYWJsZU5hbWUgPSB2b2lkIDA7XG52YXIgdmFyaWFibGVOYW1lXzEgPSByZXF1aXJlKFwiLi92YXJpYWJsZU5hbWVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YXJpYWJsZU5hbWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhcmlhYmxlTmFtZV8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlcGxhY2VJZkNvbnRhaW5zID0gKHNvdXJjZSwgcmVwbGFjZUZyb20sIHJlcGxhY2VUbykgPT4ge1xuICAgIGlmIChzb3VyY2UuaW5jbHVkZXMocmVwbGFjZUZyb20pKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UucmVwbGFjZShyZXBsYWNlRnJvbSwgcmVwbGFjZVRvKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIHZhcmlhYmxlIG5hbWUgYnkgY29tYmluaW5nIHByZWZpeGVzLCB0b2tlbiBpbmZvcm1hdGlvbiwgYW5kIHRva2VuIGdyb3VwIHBhdGguXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCAtIFRoZSBwcmVmaXggdG8gcHJlcGVuZCB0byB0aGUgZ2VuZXJhdGVkIG5hbWUuXG4gKiBAcGFyYW0ge1Rva2VufSB0b2tlbiAtIFRoZSB0b2tlbiB0byBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20uXG4gKiBAcGFyYW0ge1Rva2VuR3JvdXB9IHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgdG8gZXh0cmFjdCBwYXRoIGFuZCBuYW1lIGluZm9ybWF0aW9uIGZyb20uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZ2VuZXJhdGVkIHZhcmlhYmxlIG5hbWUuXG4gKi9cbmNvbnN0IHZhcmlhYmxlTmFtZSA9IChwcmVmaXgsIHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZFxuICAgIGNvbnN0IHNlZ21lbnRzID0gWy4uLnRva2VuR3JvdXAucGF0aF07XG4gICAgaWYgKCF0b2tlbkdyb3VwLmlzUm9vdCkge1xuICAgICAgICBzZWdtZW50cy5wdXNoKHRva2VuR3JvdXAubmFtZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRva2VuR3JvdXAucGF0aCwgdG9rZW5Hcm91cC5wYXJlbnQgPyB0b2tlbkdyb3VwLm5hbWUgOiAnJylcbiAgICBjb25zb2xlLmxvZyh0b2tlbkdyb3VwLnBhdGgpO1xuICAgIC8vIFJlcGxhY2UgZGFzaCB0byBkb3VibGUgZGFzaCBpbiB0aGUgbmFtZVxuICAgIGNvbnN0IHdpdGhEb3VibGVEYXNoID0gcmVwbGFjZUlmQ29udGFpbnModG9rZW4ubmFtZSwgXCItXCIsIFwiLS1cIik7XG4gICAgc2VnbWVudHMucHVzaCh3aXRoRG91YmxlRGFzaCk7XG4gICAgLy8gQ3JlYXRlIHN0cmluZyBmcm9tIHNlbnRlbmNlIGFycmF5IGFuZCBzZXBhcmF0ZSBpdCBiYSBcIi1cIiBzeW1ib2wuXG4gICAgY29uc3Qgc2VwYXJhdGVkTmFtZSA9IHNlZ21lbnRzLmpvaW4oXCItXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gSWYgdGhlIGdyb3VwIGNvbnRhaW5zIHNwYWNlIHJlbW92ZSBpdC5cbiAgICBjb25zdCBmaW5hbFJlc3VsdCA9IHNlcGFyYXRlZE5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuICAgIHJldHVybiBgJHtwcmVmaXh9LSR7ZmluYWxSZXN1bHR9YDtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB2YXJpYWJsZU5hbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWN0aW9uc05hbWVEZWZpbml0aW9uID0gZXhwb3J0cy5jYXRlZ29yeVByZWZpeGVzID0gdm9pZCAwO1xuLyoqXG4gKiBQcmVmaXhlcyBmb3IgdGhlIHRva2VuIGNhdGVnb3J5LlxuICogT25seSBjb2xvciBhbmQgbWVhc3VyZSBpcyBpbXBsZW1lbnRlZCBub3cuIFdlIG5lZWQgb25seSBjb2xvciBhbmQgbWVhc3VyZSBub3cuXG4gKi9cbmV4cG9ydHMuY2F0ZWdvcnlQcmVmaXhlcyA9IHtcbiAgICBjb2xvclRva2VuUHJlZml4OiBcImNvbG9yXCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbn07XG5leHBvcnRzLmFjdGlvbnNOYW1lRGVmaW5pdGlvbiA9IFtcbiAgICBcImhvdmVyXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJlbXBoYXNpemVkXCIsXG4gICAgXCJtdXRlZFwiLFxuICAgIFwiY29udHJhc3RcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwibmVnYXRpdmVcIixcbl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbW1vblBheWxvYWRzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZ2JUb0hzbCA9IHZvaWQgMDtcbnZhciByZ2JUb0hzbF8xID0gcmVxdWlyZShcIi4vcmdiVG9Ic2xcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZ2JUb0hzbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmdiVG9Ic2xfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGh1ZSB2YWx1ZSBmb3IgdGhlIEhTTCBjb2xvciBzcGFjZSBiYXNlZCBvbiB0aGUgUkdCIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIFJHQiB2YWx1ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gY21heCAtIFRoZSBtYXhpbXVtIFJHQiB2YWx1ZSBhbW9uZyByLCBnLCBhbmQgYi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByIC0gVGhlIHJlZCBjb21wb25lbnQgb2YgdGhlIFJHQiBjb2xvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBnIC0gVGhlIGdyZWVuIGNvbXBvbmVudCBvZiB0aGUgUkdCIGNvbG9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgLSBUaGUgYmx1ZSBjb21wb25lbnQgb2YgdGhlIFJHQiBjb2xvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjYWxjdWxhdGVkIGh1ZSB2YWx1ZSBpbiBkZWdyZWVzIFswLCAzNjApLlxuICovXG5jb25zdCBjYWxjdWxhdGVIdWUgPSAoZGVsdGEsIGNtYXgsIHIsIGcsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAvLyBubyBkZWZlcmVuY2VcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChjbWF4ID09PSByKSB7XG4gICAgICAgIHJlc3VsdCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gZykge1xuICAgICAgICByZXN1bHQgPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBiKSB7XG4gICAgICAgIHJlc3VsdCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgfVxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJlc3VsdCAqIDYwKTtcbiAgICBpZiAocm91bmRlZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kZWQgKyAzNjA7XG4gICAgfVxuICAgIHJldHVybiByb3VuZGVkO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGlnaHRuZXNzIHZhbHVlIGZvciB0aGUgSFNMIGNvbG9yIHNwYWNlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjbWF4IC0gVGhlIG1heGltdW0gUkdCIHZhbHVlIGFtb25nIHIsIGcsIGFuZCBiLlxuICogQHBhcmFtIHtudW1iZXJ9IGNtaW4gLSBUaGUgbWluaW11bSBSR0IgdmFsdWUgYW1vbmcgciwgZywgYW5kIGIuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUgaW4gdGhlIHJhbmdlIFswLCAxXS5cbiAqL1xuY29uc3QgY2FsY3VsYXRlTGlnaHRuZXNzID0gKGNtYXgsIGNtaW4pID0+IChjbWF4ICsgY21pbikgLyAyO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzYXR1cmF0aW9uIHZhbHVlIGZvciB0aGUgSFNMIGNvbG9yIHNwYWNlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gUkdCIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaWdodG5lc3MgLSBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY2FsY3VsYXRlZCBzYXR1cmF0aW9uIHZhbHVlIGluIHRoZSByYW5nZSBbMCwgMV0uXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZVNhdHVyYXRpb24gPSAoZGVsdGEsIGxpZ2h0bmVzcykgPT4gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSk7XG4vKipcbiAqIENvbnZlcnRzIGFuIFJHQiBjb2xvciB0byBIU0wgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7Q29sb3JUb2tlblZhbHVlfSBjb2xvciAtIFRoZSBSR0IgY29sb3IgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIEhTTCByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5wdXQgUkdCIGNvbG9yLlxuICovXG5jb25zdCByZ2JUb0hzbCA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgcjogX3IsIGc6IF9nLCBiOiBfYiwgYSB9ID0gY29sb3I7XG4gICAgY29uc3QgciA9IF9yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBfZyAvIDI1NTtcbiAgICBjb25zdCBiID0gX2IgLyAyNTU7XG4gICAgY29uc3QgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgIGNvbnN0IGh1ZSA9IGNhbGN1bGF0ZUh1ZShkZWx0YSwgY21heCwgciwgZywgYik7XG4gICAgY29uc3QgX2xpZ2h0bmVzcyA9IGNhbGN1bGF0ZUxpZ2h0bmVzcyhjbWF4LCBjbWluKTtcbiAgICBjb25zdCBfc2F0dXJhdGlvbiA9IGNhbGN1bGF0ZVNhdHVyYXRpb24oZGVsdGEsIF9saWdodG5lc3MpO1xuICAgIC8vIE11bHRpcGx5IGxpZ2h0bmVzcyBhbmQgc2F0dXJhdGlvbiBieSAxMDBcbiAgICBjb25zdCBsaWdodG5lc3MgPSArKF9saWdodG5lc3MgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc2F0dXJhdGlvbiA9ICsoX3NhdHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJnYlRvSHNsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29tbWVudGFyeV8xID0gcmVxdWlyZShcIi4vY29tbWVudGFyeVwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbmNvbnN0IG5hbWVzXzEgPSByZXF1aXJlKFwiLi9uYW1lc1wiKTtcbmNvbnN0IHZhbHVlc18xID0gcmVxdWlyZShcIi4vdmFsdWVzXCIpO1xuLy8gRnVuY3Rpb25zIHJlZ2lzdHJhdGlvbi5cblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKCd2YXJpYWJsZU5hbWUnLCBuYW1lc18xLnZhcmlhYmxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbignZmlsZUhlYWRlckNvbW1lbnQnLCBjb21tZW50YXJ5XzEuZmlsZUhlYWRlckNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oJ2dyb3VwTmFtZUNvbW1lbnQnLCBjb21tZW50YXJ5XzEuZ3JvdXBOYW1lQ29tbWVudCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbigncmdiVG9Ic2wnLCB2YWx1ZXNfMS5yZ2JUb0hzbCk7XG4vLyBQYXlsb2FkcyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlclBheWxvYWQoJ2NhdGVnb3J5UHJlZml4ZXMnLCBwYXlsb2Fkc18xLmNhdGVnb3J5UHJlZml4ZXMpO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZCgnYWN0aW9uc05hbWVEZWZpbml0aW9uJywgcGF5bG9hZHNfMS5hY3Rpb25zTmFtZURlZmluaXRpb24pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9