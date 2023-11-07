"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sentence-case";
exports.ids = ["vendor-chunks/sentence-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/sentence-case/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/sentence-case/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sentenceCase = exports.sentenceCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar no_case_1 = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist/index.js\");\nvar upper_case_first_1 = __webpack_require__(/*! upper-case-first */ \"(ssr)/./node_modules/upper-case-first/dist/index.js\");\nfunction sentenceCaseTransform(input, index) {\n    var result = input.toLowerCase();\n    if (index === 0)\n        return upper_case_first_1.upperCaseFirst(result);\n    return result;\n}\nexports.sentenceCaseTransform = sentenceCaseTransform;\nfunction sentenceCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: \" \", transform: sentenceCaseTransform }, options));\n}\nexports.sentenceCase = sentenceCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLDZCQUE2QjtBQUNwRCxjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0IsZ0JBQWdCLG1CQUFPLENBQUMsMkRBQVM7QUFDakMseUJBQXlCLG1CQUFPLENBQUMsNkVBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDhCQUE4QjtBQUM5QixzREFBc0Qsa0RBQWtEO0FBQ3hHO0FBQ0Esb0JBQW9CO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbnRlbmNlLWNhc2UvZGlzdC9pbmRleC5qcz85ZWRjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZW50ZW5jZUNhc2UgPSBleHBvcnRzLnNlbnRlbmNlQ2FzZVRyYW5zZm9ybSA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG5vX2Nhc2VfMSA9IHJlcXVpcmUoXCJuby1jYXNlXCIpO1xudmFyIHVwcGVyX2Nhc2VfZmlyc3RfMSA9IHJlcXVpcmUoXCJ1cHBlci1jYXNlLWZpcnN0XCIpO1xuZnVuY3Rpb24gc2VudGVuY2VDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCkge1xuICAgIHZhciByZXN1bHQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIHVwcGVyX2Nhc2VfZmlyc3RfMS51cHBlckNhc2VGaXJzdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnNlbnRlbmNlQ2FzZVRyYW5zZm9ybSA9IHNlbnRlbmNlQ2FzZVRyYW5zZm9ybTtcbmZ1bmN0aW9uIHNlbnRlbmNlQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vX2Nhc2VfMS5ub0Nhc2UoaW5wdXQsIHRzbGliXzEuX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiIFwiLCB0cmFuc2Zvcm06IHNlbnRlbmNlQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG5leHBvcnRzLnNlbnRlbmNlQ2FzZSA9IHNlbnRlbmNlQ2FzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sentence-case/dist/index.js\n");

/***/ })

};
;