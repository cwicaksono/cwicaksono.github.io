(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},I5cv:function(t,e,n){var r=n("XKFU"),c=n("Kuth"),o=n("2OiF"),u=n("y3w9"),i=n("0/R4"),a=n("eeVq"),l=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,p=a((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),s=!a((function(){f((function(){}))}));r(r.S+r.F*(p||s),"Reflect",{construct:function(t,e){o(t),u(e);var n=arguments.length<3?t:o(arguments[2]);if(s&&!p)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var a=n.prototype,b=c(i(a)?a:Object.prototype),O=Function.apply.call(t,b,e);return i(O)?O:b}})},X8hv:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var l=n("q1tI"),f=n("E/Ix"),p=f.useMDXComponents,s=f.mdx,b=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,u=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,["scope","components","children"]),a=p(n),f=b(e),O=l.useMemo((function(){if(!c)return null;var t=i({React:l,mdx:s},f),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,e]);return l.createElement(O,i({components:a},u))}},xjC2:function(t,e,n){"use strict";n.r(e);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("txSG"),c=n("iYmT"),o=n("Wbzz"),u=n("s/18"),i=n("qKvR"),a=function(t){var e=t.previous,n=t.next;return Object(i.c)("footer",{css:Object(r.f)({mt:4,pt:3})},Object(i.c)(r.c.hr,null),Object(i.c)(u.a,null),(e||n)&&Object(i.c)(r.b,{as:"ul",css:Object(c.a)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},Object(i.c)("li",null,e&&Object(i.c)(r.c.a,{as:o.a,to:e.slug,rel:"prev"},"← ",e.title)),Object(i.c)("li",null,n&&Object(i.c)(r.c.a,{as:o.a,to:n.slug,rel:"next"},n.title," →"))))},l=n("PqFP"),f=n("dlzO"),p=n("A2+M"),s=function(t){var e=t.data,n=e.post,c=e.site.siteMetadata.title,o=t.location,u=t.previous,s=t.next;return Object(i.c)(l.a,{location:o,title:c},Object(i.c)(f.a,{title:n.title,description:n.excerpt}),Object(i.c)("main",null,Object(i.c)(r.c.h1,null,n.title),Object(i.c)(r.c.p,{css:Object(r.f)({fontSize:1,mt:-3,mb:3})},n.date),Object(i.c)(p.MDXRenderer,null,n.body)),Object(i.c)(a,{previous:u,next:s}))};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"query",(function(){return j}));e.default=function(t){var e=t.location,n=t.data,r=n.blogPost,c=n.previous,o=n.next;return Object(i.c)(s,{data:O({},n,{post:r}),location:e,previous:c,next:o})};var j="602541989"}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-58fe7b1b1a7d151dc24b.js.map