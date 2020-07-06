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
  var postList = [];

  for (var i = 0; i < postData.length; i++) {
    var model = postData[i];
    postList.push(getCard(model.image_name, model.file_name));
  }
}
/*[{
    "image_name": "testimage.png",
    "file_name": "Diamond Ore.pixie",
    "type": "wall",
    "endpoint": "DiamondOre"
}]*/

/***/ })

})
//# sourceMappingURL=walls.js.8604b2f4cfeb9f1c8a06.hot-update.js.map