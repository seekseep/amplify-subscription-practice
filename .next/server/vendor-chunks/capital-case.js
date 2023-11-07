"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/capital-case";
exports.ids = ["vendor-chunks/capital-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/capital-case/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/capital-case/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.capitalCase = exports.capitalCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar no_case_1 = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist/index.js\");\nvar upper_case_first_1 = __webpack_require__(/*! upper-case-first */ \"(ssr)/./node_modules/upper-case-first/dist/index.js\");\nfunction capitalCaseTransform(input) {\n    return upper_case_first_1.upperCaseFirst(input.toLowerCase());\n}\nexports.capitalCaseTransform = capitalCaseTransform;\nfunction capitalCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: \" \", transform: capitalCaseTransform }, options));\n}\nexports.capitalCase = capitalCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FwaXRhbC1jYXNlL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsNEJBQTRCO0FBQ2xELGNBQWMsbUJBQU8sQ0FBQyx1REFBTztBQUM3QixnQkFBZ0IsbUJBQU8sQ0FBQywyREFBUztBQUNqQyx5QkFBeUIsbUJBQU8sQ0FBQyw2RUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsOEJBQThCO0FBQzlCLHNEQUFzRCxpREFBaUQ7QUFDdkc7QUFDQSxtQkFBbUI7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FwaXRhbC1jYXNlL2Rpc3QvaW5kZXguanM/MDE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2FwaXRhbENhc2UgPSBleHBvcnRzLmNhcGl0YWxDYXNlVHJhbnNmb3JtID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgbm9fY2FzZV8xID0gcmVxdWlyZShcIm5vLWNhc2VcIik7XG52YXIgdXBwZXJfY2FzZV9maXJzdF8xID0gcmVxdWlyZShcInVwcGVyLWNhc2UtZmlyc3RcIik7XG5mdW5jdGlvbiBjYXBpdGFsQ2FzZVRyYW5zZm9ybShpbnB1dCkge1xuICAgIHJldHVybiB1cHBlcl9jYXNlX2ZpcnN0XzEudXBwZXJDYXNlRmlyc3QoaW5wdXQudG9Mb3dlckNhc2UoKSk7XG59XG5leHBvcnRzLmNhcGl0YWxDYXNlVHJhbnNmb3JtID0gY2FwaXRhbENhc2VUcmFuc2Zvcm07XG5mdW5jdGlvbiBjYXBpdGFsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vX2Nhc2VfMS5ub0Nhc2UoaW5wdXQsIHRzbGliXzEuX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiIFwiLCB0cmFuc2Zvcm06IGNhcGl0YWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMuY2FwaXRhbENhc2UgPSBjYXBpdGFsQ2FzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/capital-case/dist/index.js\n");

/***/ })

};
;