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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Isaac\\Desktop\\bobbie_model_pages\\nextjs-blog\\pages\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  var renderButtons = false;
  var imageIndex = 0;
  var initialImage;
  var initialDescription;

  if (postData.extra_images) {
    initialImage = postData.extra_images[0];
    initialDescription = postData.image_metadata[0];
  } else {
    initialImage = postData.image_name;
    initialDescription = "";
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialImage),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialDescription),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      selectedDescription = _React$useState4[0],
      setSelectedDescription = _React$useState4[1];

  function previousImage() {
    if (postData.extra_images.indexOf(selected) == 0) {
      setSelected(postData.extra_images[postData.extra_images.length - 1]);
      setSelectedDescription(postData.image_metadata[postData.extra_images.length - 1]);
    } else {
      setSelected(postData.extra_images[postData.extra_images.indexOf(selected) - 1]);
      setSelectedDescription(postData.image_metadata[postData.extra_images.indexOf(selected) - 1]);
    }
  }

  function nextImage() {
    if (postData.extra_images.indexOf(selected) + 1 == postData.extra_images.length) {
      setSelected(postData.extra_images[0]);
      setSelectedDescription(postData.image_metadata[0]);
    } else {
      setSelected(postData.extra_images[postData.extra_images.indexOf(selected) + 1]);
      setSelectedDescription(postData.image_metadata[postData.extra_images.indexOf(selected) + 1]);
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
          lineNumber: 46,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        "class": "arrowleft",
        src: "arrow-left.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
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
          lineNumber: 49,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        "class": "arrow",
        src: "arrow.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }
      })));
    }
  }

  function getDownloadButtons() {
    if (postData.second_button) {
      if (postData.second_button.download) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "button",
          className: "first",
          variant: "dark",
          href: "./".concat(postData.file_name),
          download: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }
        }, "Download"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "button",
          className: "second",
          variant: "dark",
          href: "./".concat(postData.second_button.link),
          download: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }
        }, postData.second_button.text));
      } else {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "button",
          className: "first",
          variant: "dark",
          href: "./".concat(postData.file_name),
          download: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }
        }, "Download"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "button",
          className: "second",
          variant: "dark",
          href: postData.second_button.link,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }
        }, postData.second_button.text));
      }
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "button",
        variant: "dark",
        href: "./".concat(postData.file_name),
        download: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, "Download"));
    }
  }

  function preloadImages(imageSources) {
    var _this = this;

    if (imageSources) {
      var allImages = [];
      imageSources.forEach(function (i) {
        allImages.push(__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
          rel: "preload",
          href: i,
          as: "image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }
        })));
      });
      return allImages;
    }
  }

  function getCredits() {
    if (postData.fallguyscredits) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        "class": "credit-holder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, __jsx("h2", {
        "class": "text-light creditheader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, "Credits"), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, "Fall Guy Model: ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://sketchfab.com/3d-models/unofficial-fall-guy-598b22b710b44c22a962fecc9dd92312",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 66
        }
      }, "Sketchfab"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 196
        }
      })), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }
      }, "Sabers: ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/Hooi21",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 58
        }
      }, "Hooi")), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }
      }, "Maps: ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/lethrial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 56
        }
      }, "Lethrial"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/One_narwhal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 131
        }
      }, "That_Narwhal"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/bytrius",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 213
        }
      }, "Bytrius"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/ConnnnorJC",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 286
        }
      }, "ConnorJC"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/Lonewolvez1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 363
        }
      }, "Lonewolvez"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/The_Caeden117",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 443
        }
      }, "Caeden117"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/nomuffn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 524
        }
      }, "nomuffn")), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, "Fall Guys Original Soundtrack created by Jukio Kallio and Daniel Hagstr\xF6m"), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, "SUPPORT & FOLLOW THE ORIGINAL ARTISTS: ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://jukiokallio.bandcamp.com/album/fall-guys-original-soundtrack",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 89
        }
      }, "Bandcamp"), " / ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://open.spotify.com/album/2XbgThX8BaW5Euimr3JAPT?si=OjPnw2qSSby1I2vGZJtOsg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 205
        }
      }, "Spotify")), __jsx("p", {
        "class": "text-light credittext-bottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://jukiokallio.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 57
        }
      }, "More about Jukio Kallio"), " / ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://danielhagstrom.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 143
        }
      }, "More about Daniel Hagstr\xF6m"))));
    } else if (postData.fnfcredits) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        "class": "credit-holder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, __jsx("h2", {
        "class": "text-light creditheader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, "Credits"), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, "Thank you to the wonderful mappers that helped chart songs for this pack: ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 124
        }
      })), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/NokahVR",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 50
        }
      }, "Nokah"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/LmoaNolan",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 121
        }
      }, "nolanLMOA"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/oddloop_",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 198
        }
      }, "oddloop"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/MystikmolR",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 272
        }
      }, "Mystikmol"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/KikaeAeon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 350
        }
      }, "KikaeAeon"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/One_narwhal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 427
        }
      }, "That_Narwhal"), ",", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }
      }), __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/nomuffn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 26
        }
      }, "muffn"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/skeaary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 97
        }
      }, "skeary"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/TheRealHoppaw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 169
        }
      }, "Hoppaw"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/plusonerabbit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 247
        }
      }, "Rabbit"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/TM0D_",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 325
        }
      }, "TM0D"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/lethrial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 393
        }
      }, "Lethrial"), ", ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/anothershad",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 468
        }
      }, "shad"), ", and ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://twitter.com/when_pink",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 546
        }
      }, "Pink"), "."), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }
      }, "Friday Night Funkin was created by ninjamuffin99. Play the game ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://ninja-muffin24.itch.io/funkin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 114
        }
      }, "here"), ".", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 193
        }
      })), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      }, "Friday Night Funkin Original Soundtrack by ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://kawaisprite.bandcamp.com/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 93
        }
      }, "Kawai Sprite"), " and ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://bassetmusic.bandcamp.com/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 180
        }
      }, "Basset"), ". ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 258
        }
      })), __jsx("p", {
        "class": "text-light credittext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }, "Friday Night Funkin Character Models: ", __jsx("a", {
        link: true,
        "class": "graylink",
        href: "https://skfb.ly/onHYD",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 88
        }
      }, "Cally3D"), " on Sketchfab.", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 167
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      })));
    }
  }

  function getDonationPopup() {
    if (postData.type == "pack") {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        "class": "donationpopup",
        id: "donationpopup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, __jsx("p", {
        "class": "text-light donationtext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 25
        }
      }, "Have a few extra bucks and want to support me in making awesome free model packs? Donate to my ko-fi!"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
        className: "d-flex donationbuttons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "button",
        variant: "dark",
        className: "button1",
        href: "https://ko-fi.com/bobbievr",
        download: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 29
        }
      }, "Donate"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "button",
        variant: "dark",
        className: "button2",
        onClick: function onClick() {
          document.getElementById("donationpopup").style.visibility = "hidden";
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 29
        }
      }, "Close"))));
    }
  }

  function getShortnedDesc() {
    if (postData.model.description.length > 150) {
      return postData.model.description.substring(0, 146) + "...";
    } else {
      return postData.model.description;
    }
  }

  function getRedirect() {
    if (postData.model.name == "Solar System Pack") {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("meta", {
        "http-equiv": "refresh",
        content: "0; url = https://bsmodel.city/SolarSystemPack",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }));
    }
  }

  function replaceLinks(text) {
    var html = text.replace(/\[([^\]]+)\]\(([^\)]+)\)/, '<a href="$2">$1</a>');
    return html;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx("style", {
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, "\n                :root {\n                --jumbotron-padding-y: 3rem;\n                }\n                .jumbotron {\n                padding-top: var(--jumbotron-padding-y);\n                padding-bottom: var(--jumbotron-padding-y);\n                margin-bottom: 0;\n                background-color: #fff;\n                }\n                @media (min-width: 768px) {\n                .jumbotron {\n                    padding-top: calc(var(--jumbotron-padding-y) * 2);\n                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n                }\n                }\n    \n                .jumbotron p:last-child {\n                margin-bottom: 0;\n                }\n    \n                .jumbotron-heading {\n                font-weight: 300;\n                }\n    \n                .jumbotron .container {\n                    /*max-width: 40rem;*/\n                }\n                .container{\n                    position: absolute;\n                    max-width:100%;\n                    max-height:100%;\n                    width:60%;\n                    left:20%;\n                    height:50%; \n                }\n                footer {\n                    padding-top: 3rem;\n                    padding-bottom: 3rem;\n                }\n    \n                footer p {\n                margin-bottom: .25rem;\n                }\n    \n                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n    \n                .main {\n                    background-color: #202020;\n                }\n                body{\n                    background-color: #202020;\n                }\n                .card-title{\n                    font-size:2rem;\n                    text-align: center;\n                    margin-bottom: .2rem;\n                }\n                .btn{\n                    font-size: 1.5rem;\n                }\n                .card{\n                    background-color: #000000;\n                }\n                .btn{\n                    background-color: #000000;\n                    border-color: #4d4d4d;\n                    border-radius: 10px;       \n                    border: 0.15rem solid #4d4d4d;            \n                }\n                .mainimage{\n                    height:55%;\n                    width:55%;\n                    margin-left:0px;\n                    background-color: #303030;\n                    float:left;\n                    border-radius: 0.5vw;\n                }\n                .imagetext{\n                    width:45%;\n                    height:100%;\n                    float:right;\n                }\n                .p{\n                    text-align: center;\n                }\n                .titletext{\n                    font-size:2.25rem;\n                    font-size:1.9vw;\n                    text-align: center;\n                    font-weight:bold;\n                    background-color: #000000;\n                    width: 85%;\n                    margin: auto;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                }\n                .descriptiontext{\n                    font-size:1.5rem;\n                    font-size:1.25vw;\n                    text-align: center;\n                    margin-top: 0.5vw;\n                    margin-bottom: 0.5vw;\n                    margin-left: 0.75vw;\n                    margin-right: 0.75vw;\n                }\n                .description-holder{\n                    margin: auto;\n                    margin-top: 0.25vw;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    position:relative;\n                    width: 85%;\n                    height:100%;\n                    background-color: #000000;\n                    z-index:1;\n                }\n                .imagesubcontainer{\n                    margin-top:2.5vw;\n                    display:inline-block;\n                    width:100%;\n                    position:relative;\n                }\n                .downloadbuttons{\n                    position:absolute;\n                    width: 37.5%;\n                    bottom:0;                          \n                    right:0;   \n                    left: 58.75%;\n                    height:3vw;\n                    z-index:2;\n                    top: calc(100% - 3vw);\n                }\n                .arrow-button{\n                    position:absolute;\n                    background-color: #000000;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    width:3vw;\n                    height:3vw;\n                    top: calc(90% + 0.2vw);\n                    left: calc(55% - 3.0vw);\n                    outline: none !important;\n                    padding:0;\n                    margin:0;\n                }\n                .left-arrow-button{\n                    position:absolute;\n                    background-color: #000000;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    width:3vw;\n                    height:3vw;\n                    top: calc(90% + 0.2vw);\n                    left: 0;\n                    outline: none !important;\n                    padding:0;\n                    margin:0;\n                }\n                .arrow{\n                    position:absolute;\n                    left:0.375vw;\n                    top:0.375vw;\n                    width:2.25vw;\n                    height:2.25vw;\n                }\n                .arrowleft{\n                    position:absolute;\n                    right:0.375vw;\n                    top:0.375vw;\n                    width:2.25vw;\n                    height:2.25vw;\n                }\n                .imageheader{\n                    position: absolute;\n                    font-size:3rem;\n                    font-size: 2vw;\n                    text-align: center;\n                    font-weight:bold;\n                    width: 55%;\n                    margin: auto;\n                }\n                .imageheaderstroke{\n                    position: absolute;\n                    font-size:3rem;\n                    font-size: 2vw;\n                    text-align: center;\n                    font-weight:bold;\n                    width: 55%;\n                    margin: auto;\n                    -webkit-text-stroke-width: .4vw;\n                    -webkit-text-stroke-color: black;                  \n                }\n                .credit-holder{\n                    margin: auto;\n                    margin-top: 57.5%;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    position:absolute;\n                    width: 96.75%;\n                    background-color: #000000;\n                    z-index:0;\n                    margin-bottom: 2%;\n                }\n                .creditheader{\n                    font-size:2.25vw;\n                    text-align: center;\n                    margin: auto;\n                }\n                .credittext{\n                    font-size:1.5rem;\n                    font-size:1.25vw;\n                    text-align: center;\n                    margin: auto;\n                }\n                .credittext-bottom{\n                    font-size:1.5rem;\n                    font-size:1.25vw;\n                    text-align: center;\n                    margin: auto;\n                    margin-bottom:0.7%;\n                }\n                .graylink{\n                    color: gray;\n                    text-decoration: underline;\n                }\n                .graylink:hover {\n                    color: #474747;\n                }                  \n\n                ::-webkit-scrollbar {\n                    width: 8px;\n                    background-color: transparent;\n                    -webkit-border-radius: 100px;\n                }\n                ::-webkit-scrollbar:hover {\n                    background-color: rgba(0, 0, 0, 0.09);\n                }\n                ::-webkit-scrollbar-thumb:vertical {\n                    background: rgba(0,0,0,0.5);\n                    -webkit-border-radius: 100px;\n                }\n                ::-webkit-scrollbar-thumb:vertical:active {\n                    background: rgba(0,0,0,0.61);\n                    -webkit-border-radius: 100px;\n                }\n                .btn{\n                    font-size:1.25vw;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    position:absolute!important;\n                    max-height:100%;\n                    height:100%;\n                    max-width:100%;\n                    width:100%;\n                    top:0;\n                    padding:0;\n                    padding-top: 0.4vw;\n                    /*height:3vw!important;*/\n                }\n                .second{\n                    width:50%;\n                    left:50%;\n                }\n                .first{\n                    width:50%;\n                }\n                @media (max-aspect-ratio: 1/1) {\n                    .container {\n                        width: 95%;\n                        left: 2.5%;\n                    }\n                    .descriptiontext{\n                        font-size:2vw;\n                    }    \n                }     \n                .donationpopup{\n                    position: fixed;\n                    width:15%;\n                    left:85%;\n                    height:20%;\n                    top:80%;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    background-color: #000000;\n                }\n                .donationtext{\n                    font-size:1.5rem;\n                    font-size:1.0vw;\n                    text-align: center;\n                    margin-top: 0.5vw;\n                    margin-bottom: 0.5vw;\n                    margin-left: 0.75vw;\n                    margin-right: 0.75vw;\n                }        \n                .donationbuttons{\n                    left:5%;\n                    width:45%;\n                    height:25%;\n                }\n                .button1{\n                    font-size:1.2vw;\n                    padding:0;\n                    padding-top: 0.2vw;\n                    margin:0;\n                }\n                .button2{\n                    font-size:1.2vw;\n                    padding:0;\n                    padding-top: 0vw;\n                    margin:0;\n                    left:100%;\n                }\n        "), __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 17
    }
  }, postData.model.name), __jsx("meta", {
    content: "bobbie.dev",
    property: "og:site_name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: postData.model.name,
    property: "og:title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: getShortnedDesc(),
    property: "og:description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#96e3ff",
    name: "theme-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "https://bobbie.dev/" + postData.image_name,
    property: "og:image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 17
    }
  }), getRedirect(), preloadImages(postData.extra_images)), __jsx("div", {
    "class": "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 13
    }
  }, getDonationPopup(), __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "imagesubcontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    "class": "mainimage float-left",
    src: selected,
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 29
    }
  }), __jsx("p", {
    "class": "text-light imageheaderstroke",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 29
    }
  }, selectedDescription), __jsx("p", {
    "class": "text-light imageheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 29
    }
  }, selectedDescription), getButtons(), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
    className: "d-flex downloadbuttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 29
    }
  }, getDownloadButtons())), __jsx("div", {
    "class": "imagetext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }, __jsx("p", {
    "class": "text-light titletext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 29
    }
  }, postData.model.name), __jsx("div", {
    "class": "description-holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 29
    }
  }, __jsx("p", {
    "class": "text-light descriptiontext",
    dangerouslySetInnerHTML: {
      __html: replaceLinks(postData.model.description)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 33
    }
  }))), getCredits()))));
}

/***/ })

})
//# sourceMappingURL=[id].js.af850363869e5411328e.hot-update.js.map