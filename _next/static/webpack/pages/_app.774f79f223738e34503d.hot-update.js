webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/GoogleAnalytics/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/GoogleAnalytics/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./src/config.ts\");\n/* harmony import */ var _CtaButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CtaButton */ \"./src/components/CtaButton/index.tsx\");\n/* harmony import */ var _services_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gtag */ \"./src/services/gtag.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/GoogleAnalytics/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/getta/dev/portals/hippocampus-model-portal/src/components/GoogleAnalytics/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar CookiePrefsForm = function CookiePrefsForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      formVisible = _useState[0],\n      setFormVisible = _useState[1];\n\n  var allowGtm = function allowGtm() {\n    Object(_services_gtag__WEBPACK_IMPORTED_MODULE_5__[\"setCookiePrefs\"])({\n      cookies: true\n    });\n    Object(_services_gtag__WEBPACK_IMPORTED_MODULE_5__[\"initGtm\"])(_config__WEBPACK_IMPORTED_MODULE_3__[\"gtm\"].id);\n    setFormVisible(false);\n  };\n\n  var disallowGtm = function disallowGtm() {\n    Object(_services_gtag__WEBPACK_IMPORTED_MODULE_5__[\"setCookiePrefs\"])({\n      cookies: false\n    });\n    setFormVisible(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var cookiePrefs = Object(_services_gtag__WEBPACK_IMPORTED_MODULE_5__[\"getCookiePrefs\"])();\n\n    if (!cookiePrefs) {\n      setFormVisible(true);\n      return;\n    }\n\n    if (cookiePrefs.cookies) {\n      Object(_services_gtag__WEBPACK_IMPORTED_MODULE_5__[\"initGtm\"])(_config__WEBPACK_IMPORTED_MODULE_3__[\"gtm\"].id);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://www.googletagmanager.com/gtag/js?id=\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"gtm\"].id)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), formVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row end-sm middle-xs\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-xs-12 col-md-6 col-lg-8 mt-2\",\n          children: [\"We use cookies to improve user experience and analyze website traffic. Read the \\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://www.epfl.ch/about/presidency/presidents-team/legal-affairs/epfl-privacy-policy/cookies-policy/\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Cookies policy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-xs-6 col-sm-4 col-md-3 col-lg-2 mt-2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CtaButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            color: \"grey\",\n            block: true,\n            onClick: disallowGtm,\n            children: \"Don't allow\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-xs-6 col-sm-4 col-md-3 col-lg-2 mt-2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CtaButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            color: \"yellow\",\n            block: true,\n            onClick: allowGtm,\n            children: \"Allow\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(CookiePrefsForm, \"hbC/zrPFwOqax4rRKMHTUZ26Oh0=\");\n\n_c = CookiePrefsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookiePrefsForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CookiePrefsForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR29vZ2xlQW5hbHl0aWNzL2luZGV4LnRzeD9mYjhiIl0sIm5hbWVzIjpbIkNvb2tpZVByZWZzRm9ybSIsInVzZVN0YXRlIiwiZm9ybVZpc2libGUiLCJzZXRGb3JtVmlzaWJsZSIsImFsbG93R3RtIiwic2V0Q29va2llUHJlZnMiLCJjb29raWVzIiwiaW5pdEd0bSIsImd0bSIsImlkIiwiZGlzYWxsb3dHdG0iLCJ1c2VFZmZlY3QiLCJjb29raWVQcmVmcyIsImdldENvb2tpZVByZWZzIiwic3R5bGVzIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLGVBQXlCLEdBQUcsU0FBNUJBLGVBQTRCLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUMvQkMsV0FEK0I7QUFBQSxNQUNsQkMsY0FEa0I7O0FBR3RDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJDLHlFQUFjLENBQUM7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBRCxDQUFkO0FBQ0FDLGtFQUFPLENBQUNDLDJDQUFHLENBQUNDLEVBQUwsQ0FBUDtBQUNBTixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkwseUVBQWMsQ0FBQztBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFELENBQWQ7QUFDQUgsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxHQUhEOztBQUtBUSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxXQUFXLEdBQUdDLHFFQUFjLEVBQWxDOztBQUNBLFFBQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQlQsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQTtBQUNEOztBQUVELFFBQUlTLFdBQVcsQ0FBQ04sT0FBaEIsRUFBeUI7QUFDdkJDLG9FQUFPLENBQUNDLDJDQUFHLENBQUNDLEVBQUwsQ0FBUDtBQUNEO0FBQ0YsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFRLFdBQUcsd0RBQWlERCwyQ0FBRyxDQUFDQyxFQUFyRDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFLR1AsV0FBVyxpQkFDVjtBQUFLLGVBQVMsRUFBRVksMERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQSwwSEFFRTtBQUNFLGdCQUFJLEVBQUMsd0dBRFA7QUFFRSxrQkFBTSxFQUFDLFFBRlQ7QUFHRSxlQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0U7QUFBSyxtQkFBUyxFQUFDLDBDQUFmO0FBQUEsaUNBQ0UscUVBQUMsa0RBQUQ7QUFDRSxpQkFBSyxFQUFDLE1BRFI7QUFFRSxpQkFBSyxNQUZQO0FBR0UsbUJBQU8sRUFBRUwsV0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFrQkU7QUFBSyxtQkFBUyxFQUFDLDBDQUFmO0FBQUEsaUNBQ0UscUVBQUMsa0RBQUQ7QUFDRSxpQkFBSyxFQUFDLFFBRFI7QUFFRSxpQkFBSyxNQUZQO0FBR0UsbUJBQU8sRUFBRU4sUUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBLGtCQURGO0FBd0NELENBbEVEOztHQUFNSixlOztLQUFBQSxlO0FBb0VTQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dvb2dsZUFuYWx5dGljcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IGd0bSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgQ3RhQnV0dG9uIGZyb20gJy4uL0N0YUJ1dHRvbic7XG5pbXBvcnQgeyBnZXRDb29raWVQcmVmcywgc2V0Q29va2llUHJlZnMsIGluaXRHdG0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ndGFnJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cblxuY29uc3QgQ29va2llUHJlZnNGb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1WaXNpYmxlLCBzZXRGb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYWxsb3dHdG0gPSAoKSA9PiB7XG4gICAgc2V0Q29va2llUHJlZnMoeyBjb29raWVzOiB0cnVlIH0pO1xuICAgIGluaXRHdG0oZ3RtLmlkKTtcbiAgICBzZXRGb3JtVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZGlzYWxsb3dHdG0gPSAoKSA9PiB7XG4gICAgc2V0Q29va2llUHJlZnMoeyBjb29raWVzOiBmYWxzZSB9KTtcbiAgICBzZXRGb3JtVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb29raWVQcmVmcyA9IGdldENvb2tpZVByZWZzKCk7XG4gICAgaWYgKCFjb29raWVQcmVmcykge1xuICAgICAgc2V0Rm9ybVZpc2libGUodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvb2tpZVByZWZzLmNvb2tpZXMpIHtcbiAgICAgIGluaXRHdG0oZ3RtLmlkKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z3RtLmlkfWB9Pjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7Zm9ybVZpc2libGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZW5kLXNtIG1pZGRsZS14c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTYgY29sLWxnLTggbXQtMlwiPlxuICAgICAgICAgICAgICBXZSB1c2UgY29va2llcyB0byBpbXByb3ZlIHVzZXIgZXhwZXJpZW5jZSBhbmQgYW5hbHl6ZSB3ZWJzaXRlIHRyYWZmaWMuIFJlYWQgdGhlICZuYnNwO1xuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5lcGZsLmNoL2Fib3V0L3ByZXNpZGVuY3kvcHJlc2lkZW50cy10ZWFtL2xlZ2FsLWFmZmFpcnMvZXBmbC1wcml2YWN5LXBvbGljeS9jb29raWVzLXBvbGljeS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5Db29raWVzIHBvbGljeTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMiBtdC0yXCI+XG4gICAgICAgICAgICAgIDxDdGFCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGlzYWxsb3dHdG19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEb24ndCBhbGxvd1xuICAgICAgICAgICAgICA8L0N0YUJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMiBtdC0yXCI+XG4gICAgICAgICAgICAgIDxDdGFCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj1cInllbGxvd1wiXG4gICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthbGxvd0d0bX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFsbG93XG4gICAgICAgICAgICAgIDwvQ3RhQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llUHJlZnNGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GoogleAnalytics/index.tsx\n");

/***/ })

})