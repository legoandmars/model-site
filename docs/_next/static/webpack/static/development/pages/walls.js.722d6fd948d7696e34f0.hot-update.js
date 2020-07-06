webpackHotUpdate("static\\development\\pages\\walls.js",{

/***/ "./layouts/model-list.js":
/*!*******************************!*\
  !*** ./layouts/model-list.js ***!
  \*******************************/
/*! exports provided: default, modelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelPage", function() { return modelPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\Isaac\\Desktop\\bobbie_model_pages\\nextjs-blog\\layouts\\model-list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function getCard(imageName, downloadName) {
  return __jsx("div", {
    "class": "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "card mb-4 box-shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    "class": "card-img-top",
    src: "./".concat(imageName),
    alt: "Card image cap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "w-100",
    type: "button",
    variant: "dark",
    href: "./".concat(downloadName),
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, "Download"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "w-100",
    type: "button",
    variant: "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "Details"))));
}
function modelPage(allModels, modelType) {
  var modelElementList = []; // send it off to be rendered by model-list;

  for (var i = 0; i < allModels.length; i++) {
    var model = allModels[i];

    if (model.type == modelType) {
      modelElementList.push(getCard(model["image_name"], model["file_name"]));
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("style", {
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "\n                :root {\n                --jumbotron-padding-y: 3rem;\n                }\n                .jumbotron {\n                padding-top: var(--jumbotron-padding-y);\n                padding-bottom: var(--jumbotron-padding-y);\n                margin-bottom: 0;\n                background-color: #fff;\n                }\n                @media (min-width: 768px) {\n                .jumbotron {\n                    padding-top: calc(var(--jumbotron-padding-y) * 2);\n                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n                }\n                }\n    \n                .jumbotron p:last-child {\n                margin-bottom: 0;\n                }\n    \n                .jumbotron-heading {\n                font-weight: 300;\n                }\n    \n                .jumbotron .container {\n                    max-width: 40rem;\n                }\n                .container{\n                    height: 100%;\n                    min-height: 100vh;\n                }\n                footer {\n                padding-top: 3rem;\n                padding-bottom: 3rem;\n                }\n    \n                footer p {\n                margin-bottom: .25rem;\n                }\n    \n                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n    \n                .album {\n                    background-color: #202020;\n                }\n                .body{\n                    background-color: #202020;\n                }\n                .card-title{\n                    font-size:2rem;\n                    text-align: center;\n                    margin-bottom: .2rem;\n                }\n                .btn{\n                    font-size: 1.5rem;\n                }\n                .card{\n                    background-color: #000000;\n                }\n                .btn{\n                    background-color: #000000;\n                    border-color: #4d4d4d;\n                }\n            "), __jsx(Head, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "walls")), __jsx("div", {
    "class": "album py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, modelElementList))));
}
/*[{
    "image_name": "testimage.png",
    "file_name": "Diamond Ore.pixie",
    "type": "wall",
    "endpoint": "DiamondOre"
}]*/

/***/ })

})
//# sourceMappingURL=walls.js.722d6fd948d7696e34f0.hot-update.js.map