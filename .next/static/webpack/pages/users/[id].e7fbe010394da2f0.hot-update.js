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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar User = function(param) {\n    var user = param.user;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                __source: {\n                    fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: \"card\",\n                    __source: {\n                        fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: \"card-header text-center\",\n                            __source: {\n                                fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                src: user.avatar,\n                                style: {\n                                    borderRadius: '50%'\n                                },\n                                __source: {\n                                    fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 15,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: \"card-body\",\n                            __source: {\n                                fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h3\", {\n                                __source: {\n                                    fileName: \"D:\\\\Data\\\\Desktop\\\\next-project\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: [\n                                    user.id,\n                                    \". \",\n                                    user.first_\n                                ]\n                            })\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = _asyncToGenerator(D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n    var res, resJSON;\n    return D_Data_Desktop_next_project_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                resJSON = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    user: resJSON.data\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSDtBQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxHQUFLLENBQUNHLElBQUksR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2xCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QixHQUFLLENBQUdNLEVBQUUsR0FBS0QsTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBRVYsTUFBTSxzRUFDSEosNkRBQVM7Ozs7Ozs7dUZBQ1BNLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7MkZBQ2pCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7Ozs7Ozs7Z0dBQ2xDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7NkZBQ2xCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBeUI7Ozs7Ozs7MkdBQ3JDQyxDQUFHO2dDQUFDQyxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsTUFBTTtnQ0FBRUMsS0FBSyxFQUFFLENBQUM7b0NBQUNDLFlBQVksRUFBRSxDQUFLO2dDQUFDLENBQUM7Ozs7Ozs7Ozs2RkFFdEROLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OzRHQUNyQk0sQ0FBRTs7Ozs7Ozs7b0NBQUVYLElBQUksQ0FBQ0UsRUFBRTtvQ0FBQyxDQUFFO29DQUFDRixJQUFJLENBQUNZLE1BQU07Ozs7Ozs7OztBQU8zQyxDQUFDO0dBcEJLYixJQUFJOztRQUNPSCxrREFBUzs7O0tBRHBCRyxJQUFJO0FBcUJWQSxJQUFJLENBQUNjLGVBQWUseUlBQUcsUUFBUSxTQUFEQyxHQUFHLEVBQUssQ0FBQztRQUMvQkMsR0FBRyxFQUNIQyxPQUFPOzs7Ozt1QkFES25CLHVEQUFLLENBQUUsQ0FBNEIsOEJBQWUsT0FBYmlCLEdBQUcsQ0FBQ1gsS0FBSyxDQUFDRCxFQUFFOztnQkFBN0RhLEdBQUc7O3VCQUNhQSxHQUFHLENBQUNFLElBQUk7O2dCQUF4QkQsT0FBTzs2Q0FFTixDQUFDO29CQUFDaEIsSUFBSSxFQUFFZ0IsT0FBTyxDQUFDRSxJQUFJO2dCQUFDLENBQUM7Ozs7OztBQUMvQixDQUFDO0FBRUQsK0RBQWVuQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXInXHJcblxyXG5jb25zdCBVc2VyID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPnt1c2VyLmlkfS4ge3VzZXIuZmlyc3RffTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YClcclxuICBjb25zdCByZXNKU09OID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4geyB1c2VyOiByZXNKU09OLmRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaCIsIkNvbnRhaW5lciIsIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImF2YXRhciIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaDMiLCJmaXJzdF8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJyZXNKU09OIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});