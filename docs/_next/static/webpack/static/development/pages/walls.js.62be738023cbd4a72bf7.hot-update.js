webpackHotUpdate("static\\development\\pages\\walls.js",{

/***/ "./pages/walls.js":
/*!************************!*\
  !*** ./pages/walls.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return walls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/header */ "./layouts/header.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _layouts_model_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/model-list */ "./layouts/model-list.js");
var _jsxFileName = "C:\\Users\\Isaac\\Desktop\\bobbie_model_pages\\nextjs-blog\\pages\\walls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSG = true;
function walls(_ref) {
  var postData = _ref.postData;
  // first, get all valid models.
  var modelElementList = [];
  var data = postData;

  for (var i = 0; i < data.length; i++) {
    var model = data[i];

    if (model.type == "wall") {
      modelElementList.push(Object(_layouts_model_list__WEBPACK_IMPORTED_MODULE_5__["default"])(model["image_name"], model["file_name"]));
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_layouts_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("style", {
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\n            :root {\n            --jumbotron-padding-y: 3rem;\n            }\n            .jumbotron {\n            padding-top: var(--jumbotron-padding-y);\n            padding-bottom: var(--jumbotron-padding-y);\n            margin-bottom: 0;\n            background-color: #fff;\n            }\n            @media (min-width: 768px) {\n            .jumbotron {\n                padding-top: calc(var(--jumbotron-padding-y) * 2);\n                padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n            }\n            }\n\n            .jumbotron p:last-child {\n            margin-bottom: 0;\n            }\n\n            .jumbotron-heading {\n            font-weight: 300;\n            }\n\n            .jumbotron .container {\n                max-width: 40rem;\n            }\n            .container{\n                height: 100%;\n                min-height: 100vh;\n            }\n            footer {\n            padding-top: 3rem;\n            padding-bottom: 3rem;\n            }\n\n            footer p {\n            margin-bottom: .25rem;\n            }\n\n            .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n\n            .album {\n                background-color: #202020;\n            }\n            .body{\n                background-color: #202020;\n            }\n            .card-title{\n                font-size:2rem;\n                text-align: center;\n                margin-bottom: .2rem;\n            }\n            .btn{\n                font-size: 1.5rem;\n            }\n            .card{\n                background-color: #000000;\n            }\n            .btn{\n                background-color: #000000;\n                border-color: #4d4d4d;\n            }\n        "), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "walls")), __jsx("div", {
    "class": "album py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, modelElementList))));
}

/***/ })

})
//# sourceMappingURL=walls.js.62be738023cbd4a72bf7.hot-update.js.map