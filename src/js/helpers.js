/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.currentDate = void 0;
/**
 * Return current time in local string
 * @returns The current time in local string format.
 */
const currentDate = () => {
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    return `${dateString} ${timeString}`;
};
exports.currentDate = currentDate;


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
const payloads_1 = __webpack_require__(/*! ./payloads */ "./src/payloads/index.ts");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
// Functions registration.
// Pulsar.registerFunction('variableName', variableName);
// Pulsar.registerFunction('fileHeaderComment', fileHeaderComment);
// Pulsar.registerFunction('groupNameComment', groupNameComment);
// Pulsar.registerFunction('rgbToHsl', rgbToHsl);
Pulsar.registerFunction("currentDate", helpers_1.currentDate);
// Payloads registration
Pulsar.registerPayload('categoryPrefixes', payloads_1.categoryPrefixes);
Pulsar.registerPayload('actionsNameDefinition', payloads_1.actionsNameDefinition);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVksRUFBRSxXQUFXO0FBQ3ZDO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQ2JOO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDZCQUE2QixHQUFHLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQywwREFBa0I7Ozs7Ozs7VUNoQnZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsMkNBQVk7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsbUNBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV1cm9uLWV4cG9ydGVyLXR5cGVzY3JpcHQvLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9wYXlsb2Fkcy9jb21tb25QYXlsb2Fkcy50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9wYXlsb2Fkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXVyb24tZXhwb3J0ZXItdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3VycmVudERhdGUgPSB2b2lkIDA7XG4vKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZyBmb3JtYXQuXG4gKi9cbmNvbnN0IGN1cnJlbnREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfSAke3RpbWVTdHJpbmd9YDtcbn07XG5leHBvcnRzLmN1cnJlbnREYXRlID0gY3VycmVudERhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWN0aW9uc05hbWVEZWZpbml0aW9uID0gZXhwb3J0cy5jYXRlZ29yeVByZWZpeGVzID0gdm9pZCAwO1xuLyoqXG4gKiBQcmVmaXhlcyBmb3IgdGhlIHRva2VuIGNhdGVnb3J5LlxuICogT25seSBjb2xvciBhbmQgbWVhc3VyZSBpcyBpbXBsZW1lbnRlZCBub3cuIFdlIG5lZWQgb25seSBjb2xvciBhbmQgbWVhc3VyZSBub3cuXG4gKi9cbmV4cG9ydHMuY2F0ZWdvcnlQcmVmaXhlcyA9IHtcbiAgICBjb2xvclRva2VuUHJlZml4OiBcImNvbG9yXCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbn07XG5leHBvcnRzLmFjdGlvbnNOYW1lRGVmaW5pdGlvbiA9IFtcbiAgICBcImhvdmVyXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJlbXBoYXNpemVkXCIsXG4gICAgXCJtdXRlZFwiLFxuICAgIFwiY29udHJhc3RcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwibmVnYXRpdmVcIixcbiAgICBcImJhc2VcIixcbiAgICBcInRpbnlcIixcbiAgICBcInNtYWxsXCIsXG4gICAgXCJtZWRpdW1cIixcbiAgICBcImxhcmdlXCIsXG4gICAgXCJleHRyYS1sYXJnZVwiLFxuICAgIFwiaHVnZVwiLFxuICAgIFwiZnVsbFwiLFxuICAgIFwibm9uZVwiLFxuXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29tbW9uUGF5bG9hZHNcIiksIGV4cG9ydHMpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGF5bG9hZHNfMSA9IHJlcXVpcmUoXCIuL3BheWxvYWRzXCIpO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbi8vIEZ1bmN0aW9ucyByZWdpc3RyYXRpb24uXG4vLyBQdWxzYXIucmVnaXN0ZXJGdW5jdGlvbigndmFyaWFibGVOYW1lJywgdmFyaWFibGVOYW1lKTtcbi8vIFB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKCdmaWxlSGVhZGVyQ29tbWVudCcsIGZpbGVIZWFkZXJDb21tZW50KTtcbi8vIFB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKCdncm91cE5hbWVDb21tZW50JywgZ3JvdXBOYW1lQ29tbWVudCk7XG4vLyBQdWxzYXIucmVnaXN0ZXJGdW5jdGlvbigncmdiVG9Ic2wnLCByZ2JUb0hzbCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImN1cnJlbnREYXRlXCIsIGhlbHBlcnNfMS5jdXJyZW50RGF0ZSk7XG4vLyBQYXlsb2FkcyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlclBheWxvYWQoJ2NhdGVnb3J5UHJlZml4ZXMnLCBwYXlsb2Fkc18xLmNhdGVnb3J5UHJlZml4ZXMpO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZCgnYWN0aW9uc05hbWVEZWZpbml0aW9uJywgcGF5bG9hZHNfMS5hY3Rpb25zTmFtZURlZmluaXRpb24pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9