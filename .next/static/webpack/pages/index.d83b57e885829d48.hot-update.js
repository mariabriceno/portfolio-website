"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GradientBackground\": function() { return /* binding */ GradientBackground; },\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GradientBackground(param) {\n    var variant = param.variant, className = param.className;\n    var _obj;\n    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_obj, (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().colorBackground), variant === \"large\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_obj, (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().colorBackgroundBottom), variant === \"small\"), _obj), className);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classes\n    }, void 0, false, {\n        fileName: \"/Users/marialaurabriceno/Desktop/bricenope-website/components/Layout.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n_c = GradientBackground;\nfunction Layout(param) {\n    var children = param.children;\n    _s();\n    var setAppTheme = function() {\n        var darkMode = localStorage.getItem(\"theme\") === \"dark\";\n        var lightMode = localStorage.getItem(\"theme\") === \"light\";\n        if (darkMode) {\n            document.documentElement.classList.add(\"dark\");\n        } else if (lightMode) {\n            document.documentElement.classList.remove(\"dark\");\n        }\n        return;\n    };\n    var handleSystemThemeChange = function() {\n        var darkQuery = window.matchMedia(\"(prefers-color-scheme: dark)\");\n        darkQuery.onchange = function(e) {\n            if (e.matches) {\n                document.documentElement.classList.add(\"dark\");\n                localStorage.setItem(\"theme\", \"dark\");\n            } else {\n                document.documentElement.classList.remove(\"dark\");\n                localStorage.setItem(\"theme\", \"light\");\n            }\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setAppTheme();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        handleSystemThemeChange();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto grid grid-cols-12\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/marialaurabriceno/Desktop/bricenope-website/components/Layout.js\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this);\n};\n_s(Layout, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n_c1 = Layout;\nvar _c, _c1;\n$RefreshReg$(_c, \"GradientBackground\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBb0M7QUFDRjtBQUNPO0FBRWxDLFNBQVNHLGtCQUFrQixDQUFDLEtBQXNCLEVBQUU7UUFBdEJDLE9BQU8sR0FBVCxLQUFzQixDQUFwQkEsT0FBTyxFQUFFQyxTQUFTLEdBQXBCLEtBQXNCLENBQVhBLFNBQVM7UUFFbkQsSUFHQztJQUpILElBQU1DLE9BQU8sR0FBR04saURBQVUsRUFDeEIsSUFHQyxPQUZDLGlGQURGLElBR0MsRUFGRUUsMkVBQXNCLEVBQUdFLE9BQU8sS0FBSyxPQUFPLEdBQzdDLGlGQUZGLElBR0MsRUFERUYsaUZBQTRCLEVBQUdFLE9BQU8sS0FBSyxPQUFPLEdBRnJELElBR0MsR0FDREMsU0FBUyxDQUNWO0lBRUQscUJBQU8sOERBQUNJLEtBQUc7UUFBQ0osU0FBUyxFQUFFQyxPQUFPOzs7OztZQUFJLENBQUM7Q0FDcEM7QUFWZUgsS0FBQUEsa0JBQWtCO0FBWW5CLFNBQVNPLE1BQU0sQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROztJQUN2QyxJQUFNQyxXQUFXLEdBQUcsV0FBTTtRQUN4QixJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE1BQU07UUFDekQsSUFBTUMsU0FBUyxHQUFHRixZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPO1FBRTNELElBQUlGLFFBQVEsRUFBRTtZQUNaSSxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEQsTUFBTSxJQUFJSixTQUFTLEVBQUU7WUFDcEJDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU87S0FDUjtJQUVELElBQU1DLHVCQUF1QixHQUFHLFdBQU07UUFDcEMsSUFBSUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQztRQUVqRUYsU0FBUyxDQUFDRyxRQUFRLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1lBQzFCLElBQUlBLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO2dCQUNiWCxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9DTixZQUFZLENBQUNlLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkMsTUFBTTtnQkFDTFosUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRFAsWUFBWSxDQUFDZSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3hDO1NBQ0YsQ0FBQztLQUNIO0lBRUQ1QixnREFBUyxDQUFDLFdBQU07UUFDZFcsV0FBVyxFQUFFLENBQUM7S0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVBYLGdEQUFTLENBQUMsV0FBTTtRQUNkcUIsdUJBQXVCLEVBQUUsQ0FBQztLQUMzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0ksOERBQUNiLEtBQUc7UUFBQ0osU0FBUyxFQUFDLDJCQUEyQjtrQkFDckNNLFFBQVE7Ozs7O1lBQ1AsQ0FDUjtDQUNIO0dBeEN1QkQsTUFBTTtBQUFOQSxNQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JhZGllbnRCYWNrZ3JvdW5kKHsgdmFyaWFudCwgY2xhc3NOYW1lIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAge1xuICAgICAgW3N0eWxlcy5jb2xvckJhY2tncm91bmRdOiB2YXJpYW50ID09PSAnbGFyZ2UnLFxuICAgICAgW3N0eWxlcy5jb2xvckJhY2tncm91bmRCb3R0b21dOiB2YXJpYW50ID09PSAnc21hbGwnLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBzZXRBcHBUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXJrTW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyayc7XG4gICAgY29uc3QgbGlnaHRNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdsaWdodCc7XG5cbiAgICBpZiAoZGFya01vZGUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgfSBlbHNlIGlmIChsaWdodE1vZGUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTeXN0ZW1UaGVtZUNoYW5nZSA9ICgpID0+IHtcbiAgICB2YXIgZGFya1F1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcblxuICAgIGRhcmtRdWVyeS5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QXBwVGhlbWUoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlU3lzdGVtVGhlbWVDaGFuZ2UoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMTJcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiR3JhZGllbnRCYWNrZ3JvdW5kIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJjb2xvckJhY2tncm91bmQiLCJjb2xvckJhY2tncm91bmRCb3R0b20iLCJkaXYiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInNldEFwcFRoZW1lIiwiZGFya01vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlnaHRNb2RlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYW5kbGVTeXN0ZW1UaGVtZUNoYW5nZSIsImRhcmtRdWVyeSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJvbmNoYW5nZSIsImUiLCJtYXRjaGVzIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});