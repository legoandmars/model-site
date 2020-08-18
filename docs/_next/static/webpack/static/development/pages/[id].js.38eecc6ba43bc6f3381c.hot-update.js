webpackHotUpdate("static\\development\\pages\\[id].js",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/header */ "./layouts/header.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Isaac\\Desktop\\bobbie_model_pages\\nextjs-blog\\pages\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  var renderButtons = false;
  var imageIndex = 0;
  var initialImage;

  if (postData.extra_images) {
    initialImage = postData.extra_images[0];
  } else initialImage = postData.image_name;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialImage),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  function previousImage() {
    if (postData.extra_images.indexOf(selected) == 0) {
      setSelected(postData.extra_images[postData.extra_images.length - 1]);
    } else {
      setSelected(postData.extra_images[postData.extra_images.indexOf(selected) - 1]);
    }
  }

  function nextImage() {
    if (postData.extra_images.indexOf(selected) + 1 == postData.extra_images.length) {
      setSelected(postData.extra_images[0]);
    } else {
      setSelected(postData.extra_images[postData.extra_images.indexOf(selected) + 1]);
    }
  }

  function getButtons() {
    if (postData.extra_images) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "dark",
        "class": "left-arrow-button",
        size: "lg",
        onClick: function onClick() {
          return previousImage();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        "class": "arrow float-right",
        src: "arrow-left.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "dark",
        "class": "arrow-button",
        size: "lg",
        onClick: function onClick() {
          return nextImage();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        "class": "arrow float-right",
        src: "arrow.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      })));
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("style", {
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\n                :root {\n                --jumbotron-padding-y: 3rem;\n                }\n                .jumbotron {\n                padding-top: var(--jumbotron-padding-y);\n                padding-bottom: var(--jumbotron-padding-y);\n                margin-bottom: 0;\n                background-color: #fff;\n                }\n                @media (min-width: 768px) {\n                .jumbotron {\n                    padding-top: calc(var(--jumbotron-padding-y) * 2);\n                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n                }\n                }\n    \n                .jumbotron p:last-child {\n                margin-bottom: 0;\n                }\n    \n                .jumbotron-heading {\n                font-weight: 300;\n                }\n    \n                .jumbotron .container {\n                    max-width: 40rem;\n                }\n                .container{\n                }\n                footer {\n                padding-top: 3rem;\n                padding-bottom: 3rem;\n                }\n    \n                footer p {\n                margin-bottom: .25rem;\n                }\n    \n                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n    \n                .main {\n                    background-color: #202020;\n                }\n                body{\n                    background-color: #202020;\n                }\n                .card-title{\n                    font-size:2rem;\n                    text-align: center;\n                    margin-bottom: .2rem;\n                }\n                .btn{\n                    font-size: 1.5rem;\n                }\n                .card{\n                    background-color: #000000;\n                }\n                .btn{\n                    background-color: #000000;\n                    border-color: #4d4d4d;\n                    border-radius: 10px;       \n                    border: 0.15rem solid #4d4d4d;            \n                }\n                .mainimage{\n                    height:55%;\n                    width:55%;\n                    margin-left:0px;\n                    background-color: #303030;\n                    float:left;\n                    border-radius: 10px;\n                }\n                .imagetext{\n                    width:45%;\n                    height:100%;\n                    float:right;\n                }\n                .p{\n                    text-align: center;\n                }\n                .titletext{\n                    font-size:3rem;\n                    font-size: 2vw;\n                    text-align: center;\n                    font-weight:bold;\n                    background-color: #000000;\n                    border-color: #4d4d4d;\n                    border-width: thin;\n                    width: 85%;\n                    margin: auto;\n                    border-radius: 10px;\n                    border: 0.15rem solid #4d4d4d;\n                }\n                .descriptiontext{\n                    font-size:1.5rem;\n                    text-align: center;\n                    margin: auto;\n                }\n                .description-holder{\n                    margin: auto;\n                    margin-top: 10px;\n                    border-radius: 10px;\n                    border: 0.15rem solid #4d4d4d;\n                    position:relative;\n                    width: 85%;\n                    height:100%;\n                    background-color: #000000;\n                }\n                .imagesubcontainer{\n                    margin-top:3rem;\n                    display:inline-block;\n                    width:100%;\n                    position:relative;\n                }\n                .downloadbuttons{\n                    width:35%;\n                    bottom:0;                          \n                    right:0;   \n                    left: 60%;\n                    position:absolute;    \n                }\n                .arrow-button{\n                    position:absolute;\n                    background-color: #000000;\n                    border-radius: 10px;\n                    border: 0.15rem solid #4d4d4d;\n                    width:4rem;\n                    height:4rem;\n                    top: calc(90% - 0.15rem);\n                    left: calc(55% - 4rem);\n                }\n                .left-arrow-button{\n                    position:absolute;\n                    background-color: #000000;\n                    border-radius: 10px;\n                    border: 0.15rem solid #4d4d4d;\n                    width:4rem;\n                    height:4rem;\n                    top: calc(90% - 0.15rem);\n                    left: 0;\n                }\n                .arrow{\n                    position:relative;\n                    width:100%\n                }\n            "), __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "walls")), __jsx("div", {
    "class": "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "imagesubcontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    "class": "mainimage float-left",
    src: selected,
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 29
    }
  }), getButtons(), __jsx("p", {
    "class": "imageheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  }, " class")), __jsx("div", {
    "class": "imagetext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, __jsx("p", {
    "class": "text-light titletext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 29
    }
  }, postData.model.name), __jsx("div", {
    "class": "description-holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  }, __jsx("p", {
    "class": "text-light descriptiontext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 33
    }
  }, postData.model.description))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
    className: "d-flex downloadbuttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "button",
    variant: "dark",
    href: "./".concat(postData.file_name),
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 29
    }
  }, "Download"))))));
}

/***/ })

})
//# sourceMappingURL=[id].js.38eecc6ba43bc6f3381c.hot-update.js.map