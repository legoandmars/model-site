(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/gSk":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},AvUB:function(e,t,n){"use strict";var r=n("Jvh8"),o=n("jDy9"),a=n("htwP"),i=n("QB1g"),u=n("SMe+");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("i1k+");t.__esModule=!0,t.default=void 0;var d=l(n("SFBB")),s=l(n("HABi")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){a(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:v.error},d.default.createElement(s.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:v.h1},e):null,d.default.createElement("div",{style:v.desc},d.default.createElement("h2",{style:v.h2},t,"."))))}}]),n}(d.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"G5+k":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("AvUB")}])},GsCB:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("SFBB"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},HABi:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=c(n("SFBB")),o=c(n("ubx3")),a=n("GsCB"),i=n("T+Cn"),u=n("UbM0");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;f.has(d)?a=!1:(f.add(d),r[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}h.rewind=p.rewind;var v=h;t.default=v},P8VF:function(e,t,n){var r=n("cKsR");e.exports=function(e){if(Array.isArray(e))return r(e)}},T6tQ:function(e,t,n){var r=n("P8VF"),o=n("/gSk"),a=n("JTcI"),i=n("TeMX");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},TeMX:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},UbM0:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("SFBB"))&&r.__esModule?r:{default:r},a=n("GsCB");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},ubx3:function(e,t,n){"use strict";var r=n("Jvh8"),o=n("u7K4"),a=n("jDy9"),i=n("htwP"),u=n("QB1g"),c=n("SMe+"),l=n("T6tQ");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("SFBB"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(l,u);var c=d(l);function l(e){var a;return r(this,l),a=c.call(this,e),f&&(t.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}}},[["G5+k",0,2,1]]]);