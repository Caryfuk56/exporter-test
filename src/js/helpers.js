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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const payloads_1 = __webpack_require__(/*! ../payloads */ "./src/payloads/index.ts");
const replaceIfContains = (source, replaceFrom, replaceTo) => {
    if (source.includes(replaceFrom)) {
        return source.replace(replaceFrom, replaceTo);
    }
    return source;
};
const replaceLastOne = (definition, source) => {
    if (definition.some((item) => source.includes(item))) {
        return `-${source}`;
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
    segments.push(token.name);
    segments[segments.length - 1] = replaceLastOne(payloads_1.actionsNameDefinition, segments[segments.length - 1]);
    // Create string from sentence array and separate it ba "-" symbol.
    let separatedName = segments.join("-").toLowerCase();
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
    "base",
    "tiny",
    "small",
    "medium",
    "large",
    "extra-large",
    "huge",
    "full",
    "none",
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
const stringHSL = (hue, saturation, lightness) => `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
const stringHSLA = (hue, saturation, lightness, alpha) => `hsla(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%, ${Math.round(alpha * 10) / 10})`;
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
    const { r: _r, g: _g, b: _b, a: _a } = color;
    const r = _r / 255;
    const g = _g / 255;
    const b = _b / 255;
    const a = _a / 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    const hue = calculateHue(delta, cmax, r, g, b);
    const _lightness = calculateLightness(cmax, cmin);
    const _saturation = calculateSaturation(delta, _lightness);
    // Multiply lightness and saturation by 100
    const lightness = +(_lightness * 100).toFixed(1);
    const saturation = +(_saturation * 100).toFixed(1);
    // If color has alpha 1 retun HSL and when some alpha is included return HSLA
    return a === 1 ? stringHSL(hue, saturation, lightness) : stringHSLA(hue, saturation, lightness, a);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2ZpbGVIZWFkZXJDb21tZW50LnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL2NvbW1lbnRhcnkvZ3JvdXBOYW1lQ29tbWVudC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9jb21tZW50YXJ5L2luZGV4LnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL25hbWVzL2luZGV4LnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL25hbWVzL3ZhcmlhYmxlTmFtZS50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9wYXlsb2Fkcy9jb21tb25QYXlsb2Fkcy50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9wYXlsb2Fkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy92YWx1ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvdmFsdWVzL3JnYlRvSHNsLnRzIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldXJvbi1leHBvcnRlci10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBoZWFkZXIgY29tbWVudCBmb3IgYSBnZW5lcmF0ZWQgZmlsZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJhbmROYW1lIC0gVGhlIGN1cnJlbnQgYnJhbmQgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBnZW5lcmF0ZWQgZmlsZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgaGVhZGVyIGNvbW1lbnQuXG4gKi9cbmNvbnN0IGZpbGVIZWFkZXJDb21tZW50ID0gKGJyYW5kTmFtZSwgZmlsZU5hbWUpID0+IGBcbiAgLypcbiAgKiAke2ZpbGVOYW1lfSAtIGdlbmVyYXRlZCBmcm9tIFN1cGVybm92YSBieSBuZXVyb24gZXhwb3J0ZXIuXG4gICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqIFxuICAqIGN1cnJlbnQgYnJhbmQ6ICR7YnJhbmROYW1lfVxuICAqL1xuICBgO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmlsZUhlYWRlckNvbW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmxldCBwcmludENvbW1lbnQgPSBmYWxzZTtcbmxldCBncm91cE5hbWUgPSAnJztcbi8qKlxuICogR2VuZXJhdGVzIGEgZ3JvdXAgbmFtZSBjb21tZW50IGlmIHRoZSB0b2tlbiBncm91cCdzIHBhcmVudCBuYW1lIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtUb2tlbkdyb3VwfSB0b2tlbkdyb3VwIC0gVGhlIHRva2VuIGdyb3VwIHRvIGdlbmVyYXRlIGEgY29tbWVudCBmb3IuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUgY29tbWVudC5cbiAqL1xuY29uc3QgZ3JvdXBOYW1lQ29tbWVudCA9ICh0b2tlbkdyb3VwKSA9PiB7XG4gICAgaWYgKCF0b2tlbkdyb3VwLnBhcmVudCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyZW50OiB7IG5hbWUgfSB9ID0gdG9rZW5Hcm91cDtcbiAgICBpZiAobmFtZSAhPT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgIGdyb3VwTmFtZSA9IG5hbWU7XG4gICAgICAgIHByaW50Q29tbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmludENvbW1lbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW50Q29tbWVudFxuICAgICAgICA/IGBcblxuICAvKiAtLS0gJHtncm91cE5hbWV9IC0tLSAqL1xuYCA6ICcnO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdyb3VwTmFtZUNvbW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9IGV4cG9ydHMuZmlsZUhlYWRlckNvbW1lbnQgPSB2b2lkIDA7XG52YXIgZmlsZUhlYWRlckNvbW1lbnRfMSA9IHJlcXVpcmUoXCIuL2ZpbGVIZWFkZXJDb21tZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlsZUhlYWRlckNvbW1lbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpbGVIZWFkZXJDb21tZW50XzEuZGVmYXVsdDsgfSB9KTtcbnZhciBncm91cE5hbWVDb21tZW50XzEgPSByZXF1aXJlKFwiLi9ncm91cE5hbWVDb21tZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ3JvdXBOYW1lQ29tbWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ3JvdXBOYW1lQ29tbWVudF8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmFyaWFibGVOYW1lID0gdm9pZCAwO1xudmFyIHZhcmlhYmxlTmFtZV8xID0gcmVxdWlyZShcIi4vdmFyaWFibGVOYW1lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFyaWFibGVOYW1lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2YXJpYWJsZU5hbWVfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4uL3BheWxvYWRzXCIpO1xuY29uc3QgcmVwbGFjZUlmQ29udGFpbnMgPSAoc291cmNlLCByZXBsYWNlRnJvbSwgcmVwbGFjZVRvKSA9PiB7XG4gICAgaWYgKHNvdXJjZS5pbmNsdWRlcyhyZXBsYWNlRnJvbSkpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKHJlcGxhY2VGcm9tLCByZXBsYWNlVG8pO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xufTtcbmNvbnN0IHJlcGxhY2VMYXN0T25lID0gKGRlZmluaXRpb24sIHNvdXJjZSkgPT4ge1xuICAgIGlmIChkZWZpbml0aW9uLnNvbWUoKGl0ZW0pID0+IHNvdXJjZS5pbmNsdWRlcyhpdGVtKSkpIHtcbiAgICAgICAgcmV0dXJuIGAtJHtzb3VyY2V9YDtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIHZhcmlhYmxlIG5hbWUgYnkgY29tYmluaW5nIHByZWZpeGVzLCB0b2tlbiBpbmZvcm1hdGlvbiwgYW5kIHRva2VuIGdyb3VwIHBhdGguXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCAtIFRoZSBwcmVmaXggdG8gcHJlcGVuZCB0byB0aGUgZ2VuZXJhdGVkIG5hbWUuXG4gKiBAcGFyYW0ge1Rva2VufSB0b2tlbiAtIFRoZSB0b2tlbiB0byBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20uXG4gKiBAcGFyYW0ge1Rva2VuR3JvdXB9IHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgdG8gZXh0cmFjdCBwYXRoIGFuZCBuYW1lIGluZm9ybWF0aW9uIGZyb20uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZ2VuZXJhdGVkIHZhcmlhYmxlIG5hbWUuXG4gKi9cbmNvbnN0IHZhcmlhYmxlTmFtZSA9IChwcmVmaXgsIHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZFxuICAgIGNvbnN0IHNlZ21lbnRzID0gWy4uLnRva2VuR3JvdXAucGF0aF07XG4gICAgaWYgKCF0b2tlbkdyb3VwLmlzUm9vdCkge1xuICAgICAgICBzZWdtZW50cy5wdXNoKHRva2VuR3JvdXAubmFtZSk7XG4gICAgfVxuICAgIHNlZ21lbnRzLnB1c2godG9rZW4ubmFtZSk7XG4gICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0gPSByZXBsYWNlTGFzdE9uZShwYXlsb2Fkc18xLmFjdGlvbnNOYW1lRGVmaW5pdGlvbiwgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0pO1xuICAgIC8vIENyZWF0ZSBzdHJpbmcgZnJvbSBzZW50ZW5jZSBhcnJheSBhbmQgc2VwYXJhdGUgaXQgYmEgXCItXCIgc3ltYm9sLlxuICAgIGxldCBzZXBhcmF0ZWROYW1lID0gc2VnbWVudHMuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBJZiB0aGUgZ3JvdXAgY29udGFpbnMgc3BhY2UgcmVtb3ZlIGl0LlxuICAgIGNvbnN0IGZpbmFsUmVzdWx0ID0gc2VwYXJhdGVkTmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0tJHtmaW5hbFJlc3VsdH1gO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhcmlhYmxlTmFtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hY3Rpb25zTmFtZURlZmluaXRpb24gPSBleHBvcnRzLmNhdGVnb3J5UHJlZml4ZXMgPSB2b2lkIDA7XG4vKipcbiAqIFByZWZpeGVzIGZvciB0aGUgdG9rZW4gY2F0ZWdvcnkuXG4gKiBPbmx5IGNvbG9yIGFuZCBtZWFzdXJlIGlzIGltcGxlbWVudGVkIG5vdy4gV2UgbmVlZCBvbmx5IGNvbG9yIGFuZCBtZWFzdXJlIG5vdy5cbiAqL1xuZXhwb3J0cy5jYXRlZ29yeVByZWZpeGVzID0ge1xuICAgIGNvbG9yVG9rZW5QcmVmaXg6IFwiY29sb3JcIixcbiAgICBtZWFzdXJlVG9rZW5QcmVmaXg6IFwibWVhc3VyZVwiLFxufTtcbmV4cG9ydHMuYWN0aW9uc05hbWVEZWZpbml0aW9uID0gW1xuICAgIFwiaG92ZXJcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcImVtcGhhc2l6ZWRcIixcbiAgICBcIm11dGVkXCIsXG4gICAgXCJjb250cmFzdFwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJuZWdhdGl2ZVwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwidGlueVwiLFxuICAgIFwic21hbGxcIixcbiAgICBcIm1lZGl1bVwiLFxuICAgIFwibGFyZ2VcIixcbiAgICBcImV4dHJhLWxhcmdlXCIsXG4gICAgXCJodWdlXCIsXG4gICAgXCJmdWxsXCIsXG4gICAgXCJub25lXCIsXG5dO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25QYXlsb2Fkc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmdiVG9Ic2wgPSB2b2lkIDA7XG52YXIgcmdiVG9Ic2xfMSA9IHJlcXVpcmUoXCIuL3JnYlRvSHNsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmdiVG9Ic2xcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJnYlRvSHNsXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBodWUgdmFsdWUgZm9yIHRoZSBIU0wgY29sb3Igc3BhY2UgYmFzZWQgb24gdGhlIFJHQiB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBSR0IgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IGNtYXggLSBUaGUgbWF4aW11bSBSR0IgdmFsdWUgYW1vbmcgciwgZywgYW5kIGIuXG4gKiBAcGFyYW0ge251bWJlcn0gciAtIFRoZSByZWQgY29tcG9uZW50IG9mIHRoZSBSR0IgY29sb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZyAtIFRoZSBncmVlbiBjb21wb25lbnQgb2YgdGhlIFJHQiBjb2xvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiIC0gVGhlIGJsdWUgY29tcG9uZW50IG9mIHRoZSBSR0IgY29sb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY2FsY3VsYXRlZCBodWUgdmFsdWUgaW4gZGVncmVlcyBbMCwgMzYwKS5cbiAqL1xuY29uc3QgY2FsY3VsYXRlSHVlID0gKGRlbHRhLCBjbWF4LCByLCBnLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgLy8gbm8gZGVmZXJlbmNlXG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoY21heCA9PT0gcikge1xuICAgICAgICByZXN1bHQgPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGcpIHtcbiAgICAgICAgcmVzdWx0ID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gYikge1xuICAgICAgICByZXN1bHQgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgIH1cbiAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyZXN1bHQgKiA2MCk7XG4gICAgaWYgKHJvdW5kZWQgPCAwKSB7XG4gICAgICAgIHJldHVybiByb3VuZGVkICsgMzYwO1xuICAgIH1cbiAgICByZXR1cm4gcm91bmRlZDtcbn07XG5jb25zdCBzdHJpbmdIU0wgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpID0+IGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xuY29uc3Qgc3RyaW5nSFNMQSA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpID0+IGBoc2xhKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7TWF0aC5yb3VuZChhbHBoYSAqIDEwKSAvIDEwfSlgO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsaWdodG5lc3MgdmFsdWUgZm9yIHRoZSBIU0wgY29sb3Igc3BhY2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNtYXggLSBUaGUgbWF4aW11bSBSR0IgdmFsdWUgYW1vbmcgciwgZywgYW5kIGIuXG4gKiBAcGFyYW0ge251bWJlcn0gY21pbiAtIFRoZSBtaW5pbXVtIFJHQiB2YWx1ZSBhbW9uZyByLCBnLCBhbmQgYi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjYWxjdWxhdGVkIGxpZ2h0bmVzcyB2YWx1ZSBpbiB0aGUgcmFuZ2UgWzAsIDFdLlxuICovXG5jb25zdCBjYWxjdWxhdGVMaWdodG5lc3MgPSAoY21heCwgY21pbikgPT4gKGNtYXggKyBjbWluKSAvIDI7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNhdHVyYXRpb24gdmFsdWUgZm9yIHRoZSBIU0wgY29sb3Igc3BhY2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBSR0IgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IGxpZ2h0bmVzcyAtIFRoZSBjYWxjdWxhdGVkIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjYWxjdWxhdGVkIHNhdHVyYXRpb24gdmFsdWUgaW4gdGhlIHJhbmdlIFswLCAxXS5cbiAqL1xuY29uc3QgY2FsY3VsYXRlU2F0dXJhdGlvbiA9IChkZWx0YSwgbGlnaHRuZXNzKSA9PiBkZWx0YSA9PT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKTtcbi8qKlxuICogQ29udmVydHMgYW4gUkdCIGNvbG9yIHRvIEhTTCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtDb2xvclRva2VuVmFsdWV9IGNvbG9yIC0gVGhlIFJHQiBjb2xvciB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSFNMIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbnB1dCBSR0IgY29sb3IuXG4gKi9cbmNvbnN0IHJnYlRvSHNsID0gKGNvbG9yKSA9PiB7XG4gICAgY29uc3QgeyByOiBfciwgZzogX2csIGI6IF9iLCBhOiBfYSB9ID0gY29sb3I7XG4gICAgY29uc3QgciA9IF9yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBfZyAvIDI1NTtcbiAgICBjb25zdCBiID0gX2IgLyAyNTU7XG4gICAgY29uc3QgYSA9IF9hIC8gMjU1O1xuICAgIGNvbnN0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgY29uc3QgZGVsdGEgPSBjbWF4IC0gY21pbjtcbiAgICBjb25zdCBodWUgPSBjYWxjdWxhdGVIdWUoZGVsdGEsIGNtYXgsIHIsIGcsIGIpO1xuICAgIGNvbnN0IF9saWdodG5lc3MgPSBjYWxjdWxhdGVMaWdodG5lc3MoY21heCwgY21pbik7XG4gICAgY29uc3QgX3NhdHVyYXRpb24gPSBjYWxjdWxhdGVTYXR1cmF0aW9uKGRlbHRhLCBfbGlnaHRuZXNzKTtcbiAgICAvLyBNdWx0aXBseSBsaWdodG5lc3MgYW5kIHNhdHVyYXRpb24gYnkgMTAwXG4gICAgY29uc3QgbGlnaHRuZXNzID0gKyhfbGlnaHRuZXNzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHNhdHVyYXRpb24gPSArKF9zYXR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIC8vIElmIGNvbG9yIGhhcyBhbHBoYSAxIHJldHVuIEhTTCBhbmQgd2hlbiBzb21lIGFscGhhIGlzIGluY2x1ZGVkIHJldHVybiBIU0xBXG4gICAgcmV0dXJuIGEgPT09IDEgPyBzdHJpbmdIU0woaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogc3RyaW5nSFNMQShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmdiVG9Ic2w7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21tZW50YXJ5XzEgPSByZXF1aXJlKFwiLi9jb21tZW50YXJ5XCIpO1xuY29uc3QgcGF5bG9hZHNfMSA9IHJlcXVpcmUoXCIuL3BheWxvYWRzXCIpO1xuY29uc3QgbmFtZXNfMSA9IHJlcXVpcmUoXCIuL25hbWVzXCIpO1xuY29uc3QgdmFsdWVzXzEgPSByZXF1aXJlKFwiLi92YWx1ZXNcIik7XG4vLyBGdW5jdGlvbnMgcmVnaXN0cmF0aW9uLlxuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oJ3ZhcmlhYmxlTmFtZScsIG5hbWVzXzEudmFyaWFibGVOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKCdmaWxlSGVhZGVyQ29tbWVudCcsIGNvbW1lbnRhcnlfMS5maWxlSGVhZGVyQ29tbWVudCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbignZ3JvdXBOYW1lQ29tbWVudCcsIGNvbW1lbnRhcnlfMS5ncm91cE5hbWVDb21tZW50KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKCdyZ2JUb0hzbCcsIHZhbHVlc18xLnJnYlRvSHNsKTtcbi8vIFBheWxvYWRzIHJlZ2lzdHJhdGlvblxuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZCgnY2F0ZWdvcnlQcmVmaXhlcycsIHBheWxvYWRzXzEuY2F0ZWdvcnlQcmVmaXhlcyk7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKCdhY3Rpb25zTmFtZURlZmluaXRpb24nLCBwYXlsb2Fkc18xLmFjdGlvbnNOYW1lRGVmaW5pdGlvbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=