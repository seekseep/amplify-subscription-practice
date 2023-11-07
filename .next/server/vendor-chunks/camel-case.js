"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/camel-case";
exports.ids = ["vendor-chunks/camel-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/camel-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/camel-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar pascal_case_1 = __webpack_require__(/*! pascal-case */ \"(ssr)/./node_modules/pascal-case/dist/index.js\");\nfunction camelCaseTransform(input, index) {\n    if (index === 0)\n        return input.toLowerCase();\n    return pascal_case_1.pascalCaseTransform(input, index);\n}\nexports.camelCaseTransform = camelCaseTransform;\nfunction camelCaseTransformMerge(input, index) {\n    if (index === 0)\n        return input.toLowerCase();\n    return pascal_case_1.pascalCaseTransformMerge(input);\n}\nexports.camelCaseTransformMerge = camelCaseTransformMerge;\nfunction camelCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));\n}\nexports.camelCase = camelCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLCtCQUErQixHQUFHLDBCQUEwQjtBQUNoRixjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0Isb0JBQW9CLG1CQUFPLENBQUMsbUVBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsOEJBQThCO0FBQzlCLDhEQUE4RCwrQkFBK0I7QUFDN0Y7QUFDQSxpQkFBaUI7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0L2luZGV4LmpzPzE5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhbWVsQ2FzZSA9IGV4cG9ydHMuY2FtZWxDYXNlVHJhbnNmb3JtTWVyZ2UgPSBleHBvcnRzLmNhbWVsQ2FzZVRyYW5zZm9ybSA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIHBhc2NhbF9jYXNlXzEgPSByZXF1aXJlKFwicGFzY2FsLWNhc2VcIik7XG5mdW5jdGlvbiBjYW1lbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gcGFzY2FsX2Nhc2VfMS5wYXNjYWxDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCk7XG59XG5leHBvcnRzLmNhbWVsQ2FzZVRyYW5zZm9ybSA9IGNhbWVsQ2FzZVRyYW5zZm9ybTtcbmZ1bmN0aW9uIGNhbWVsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHBhc2NhbF9jYXNlXzEucGFzY2FsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0KTtcbn1cbmV4cG9ydHMuY2FtZWxDYXNlVHJhbnNmb3JtTWVyZ2UgPSBjYW1lbENhc2VUcmFuc2Zvcm1NZXJnZTtcbmZ1bmN0aW9uIGNhbWVsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIHBhc2NhbF9jYXNlXzEucGFzY2FsQ2FzZShpbnB1dCwgdHNsaWJfMS5fX2Fzc2lnbih7IHRyYW5zZm9ybTogY2FtZWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/camel-case/dist/index.js\n");

/***/ })

};
;