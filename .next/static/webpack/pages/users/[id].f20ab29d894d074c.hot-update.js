"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar User = function(props) {\n    _s();\n    console.log(props);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                __source: {\n                    fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: \"card\",\n                    __source: {\n                        fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: \"card-header\",\n                            __source: {\n                                fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                src: \"\",\n                                __source: {\n                                    fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 16,\n                                    columnNumber: 17\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: \"card-body\",\n                            __source: {\n                                fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = _asyncToGenerator(D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n    var res, resJSON;\n    return D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                resJSON = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    user: resJSON.data\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSDtBQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxHQUFLLENBQUNHLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7SUFDakIsR0FBSyxDQUFDRyxNQUFNLEdBQUdQLHNEQUFTO0lBQ3hCLEdBQUssQ0FBR1EsRUFBRSxHQUFLRCxNQUFNLENBQUNFLEtBQUssQ0FBbkJELEVBQUU7SUFFVixNQUFNLHNFQUNITiw2REFBUzs7Ozs7Ozt1RkFDUFEsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7OzsyRkFDakJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFzQjs7Ozs7OztnR0FDbENELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7Ozs2RkFDbEJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzJHQUN2QkMsQ0FBRztnQ0FBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs2RkFFZEgsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7Ozs7Ozs7QUFNdEMsQ0FBQztHQW5CS1IsSUFBSTs7UUFFT0gsa0RBQVM7OztLQUZwQkcsSUFBSTtBQW9CVkEsSUFBSSxDQUFDVyxlQUFlLHlJQUFHLFFBQVEsU0FBREMsR0FBRyxFQUFLLENBQUM7UUFDL0JDLEdBQUcsRUFDSEMsT0FBTzs7Ozs7dUJBREtoQix1REFBSyxDQUFFLENBQTRCLDhCQUFlLE9BQWJjLEdBQUcsQ0FBQ04sS0FBSyxDQUFDRCxFQUFFOztnQkFBN0RRLEdBQUc7O3VCQUNhQSxHQUFHLENBQUNFLElBQUk7O2dCQUF4QkQsT0FBTzs2Q0FFTixDQUFDO29CQUFDRSxJQUFJLEVBQUVGLE9BQU8sQ0FBQ0csSUFBSTtnQkFBQyxDQUFDOzs7Ozs7QUFDL0IsQ0FBQztBQUVELCtEQUFlakIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzLyR7Y3R4LnF1ZXJ5LmlkfWApXHJcbiAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHsgdXNlcjogcmVzSlNPTi5kYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmV0Y2giLCJDb250YWluZXIiLCJVc2VyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsInJlc0pTT04iLCJqc29uIiwidXNlciIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});