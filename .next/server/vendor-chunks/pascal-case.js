"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pascal-case";
exports.ids = ["vendor-chunks/pascal-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/pascal-case/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/pascal-case/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pascalCase = exports.pascalCaseTransformMerge = exports.pascalCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar no_case_1 = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist/index.js\");\nfunction pascalCaseTransform(input, index) {\n    var firstChar = input.charAt(0);\n    var lowerChars = input.substr(1).toLowerCase();\n    if (index > 0 && firstChar >= \"0\" && firstChar <= \"9\") {\n        return \"_\" + firstChar + lowerChars;\n    }\n    return \"\" + firstChar.toUpperCase() + lowerChars;\n}\nexports.pascalCaseTransform = pascalCaseTransform;\nfunction pascalCaseTransformMerge(input) {\n    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();\n}\nexports.pascalCaseTransformMerge = pascalCaseTransformMerge;\nfunction pascalCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: \"\", transform: pascalCaseTransform }, options));\n}\nexports.pascalCase = pascalCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFzY2FsLWNhc2UvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsR0FBRyxnQ0FBZ0MsR0FBRywyQkFBMkI7QUFDbkYsY0FBYyxtQkFBTyxDQUFDLHVEQUFPO0FBQzdCLGdCQUFnQixtQkFBTyxDQUFDLDJEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsOEJBQThCO0FBQzlCLHNEQUFzRCwrQ0FBK0M7QUFDckc7QUFDQSxrQkFBa0I7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFzY2FsLWNhc2UvZGlzdC9pbmRleC5qcz83MThmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXNjYWxDYXNlID0gZXhwb3J0cy5wYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UgPSBleHBvcnRzLnBhc2NhbENhc2VUcmFuc2Zvcm0gPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBub19jYXNlXzEgPSByZXF1aXJlKFwibm8tY2FzZVwiKTtcbmZ1bmN0aW9uIHBhc2NhbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgdmFyIGZpcnN0Q2hhciA9IGlucHV0LmNoYXJBdCgwKTtcbiAgICB2YXIgbG93ZXJDaGFycyA9IGlucHV0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpbmRleCA+IDAgJiYgZmlyc3RDaGFyID49IFwiMFwiICYmIGZpcnN0Q2hhciA8PSBcIjlcIikge1xuICAgICAgICByZXR1cm4gXCJfXCIgKyBmaXJzdENoYXIgKyBsb3dlckNoYXJzO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIiArIGZpcnN0Q2hhci50b1VwcGVyQ2FzZSgpICsgbG93ZXJDaGFycztcbn1cbmV4cG9ydHMucGFzY2FsQ2FzZVRyYW5zZm9ybSA9IHBhc2NhbENhc2VUcmFuc2Zvcm07XG5mdW5jdGlvbiBwYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UgPSBwYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2U7XG5mdW5jdGlvbiBwYXNjYWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9fY2FzZV8xLm5vQ2FzZShpbnB1dCwgdHNsaWJfMS5fX2Fzc2lnbih7IGRlbGltaXRlcjogXCJcIiwgdHJhbnNmb3JtOiBwYXNjYWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMucGFzY2FsQ2FzZSA9IHBhc2NhbENhc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pascal-case/dist/index.js\n");

/***/ })

};
;