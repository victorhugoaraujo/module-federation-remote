!function(){"use strict";var e,t,n,r,u,o,i,f,c,a,s,d,l,p,h,g,m,v,y,b,x,w,S,E,j,_,O,P,k,C={786:function(e,t,n){var r={"./catalog":function(){return n.e(318).then(function(){return function(){return n(318)}})},"./remote":function(){return n.e(355).then(function(){return function(){return n(355)}})},"./selfdesign":function(){return n.e(149).then(function(){return function(){return n(149)}})},"./pages-map":function(){return n.e(710).then(function(){return function(){return n(710)}})},"./pages-map-v2":function(){return n.e(827).then(function(){return function(){return n(827)}})},"./pages/catalog":function(){return n.e(882).then(function(){return function(){return n(882)}})},"./pages/index":function(){return n.e(149).then(function(){return function(){return n(149)}})},"./pages/selfDesignPage":function(){return n.e(557).then(function(){return function(){return n(557)}})}},u=function(e,t){return n.R=t,t=n.o(r,e)?r[e]():Promise.resolve().then(function(){throw Error('Module "'+e+'" does not exist in container.')}),n.R=void 0,t},o=function(e,t){if(n.S){var r="default",u=n.S[r];if(u&&u!==e)throw Error("Container initialization failed as it has already been initialized with a different share scope");return n.S[r]=e,n.I(r,t)}};n.d(t,{get:function(){return u},init:function(){return o}})},573:function(e,t,n){e.exports=new Promise(function(e,t){var r=new URL("http://localhost:3000/_next/static/chunks/remoteEntry.js");r.searchParams.set("t",Date.now());var u=Error();if("undefined"!=typeof main)return e();n.l(r.href,function(n){if("undefined"!=typeof main)return e();var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading script failed.\n("+r+": "+o+")",u.name="ScriptExternalLoadError",u.type=r,u.request=o,t(u)},"main")}).then(function(){let e={get:main.get,init:function(e){try{main.init(new Proxy(e,{get:(e,t)=>(e[t]&&Object.values(e[t]).forEach(function(e){"_N_E"===e.from&&(e.loaded=1)}),e[t]),set:(e,t,n,r)=>e[t]?e[t]:(e[t]=n,!0)}))}catch(t){}main.__initialized=!0}};return main.__initialized||e.init(n.S.default),e})}},T={};function L(e){var t=T[e];if(void 0!==t)return t.exports;var n=T[e]={exports:{}},r=!0;try{C[e](n,n.exports,L),r=!1}finally{r&&delete T[e]}return n.exports}L.m=C,L.c=T,L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},L.t=function(n,r){if(1&r&&(n=this(n)),8&r||"object"==typeof n&&n&&(4&r&&n.__esModule||16&r&&"function"==typeof n.then))return n;var u=Object.create(null);L.r(u);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach(function(e){o[e]=function(){return n[e]}});return o.default=function(){return n},L.d(u,o),u},L.d=function(e,t){for(var n in t)L.o(t,n)&&!L.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},L.f={},L.e=function(e){return Promise.all(Object.keys(L.f).reduce(function(t,n){return L.f[n](e,t),t},[]))},L.u=function(e){return"static/chunks/"+e+"."+({149:"4b3d22e33ba95073",167:"e7d5cd3b9ad5c3f8",318:"b8ae1eec7c39dab5",355:"9232ad8d06c5b9ff",521:"f1e296c8ccbd9c83",557:"d669a4692e737601",710:"8f68dd77f568e451",827:"4f1c35a27f2b27da",882:"ba3b3d8960ae7d8b",893:"893eb2ba1c1a9945",906:"366ae3054cdcaad8"})[e]+"-"+({149:"4b3d22e33ba95073",167:"e7d5cd3b9ad5c3f8",318:"b8ae1eec7c39dab5",355:"9232ad8d06c5b9ff",521:"f1e296c8ccbd9c83",557:"d669a4692e737601",710:"8f68dd77f568e451",827:"4f1c35a27f2b27da",882:"ba3b3d8960ae7d8b",893:"893eb2ba1c1a9945",906:"366ae3054cdcaad8"})[e]+"-fed.js"},L.miniCssF=function(e){return"static/css/"+({149:"ae0e3e027412e072",882:"ae0e3e027412e072"})[e]+"-fed.css"},L.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="selfdesign:",L.l=function(e,t,u,o){if(n[e]){n[e].push(t);return}if(void 0!==u)for(var i,f,c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var s=c[a];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==r+u){i=s;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,L.nc&&i.setAttribute("nonce",L.nc),i.setAttribute("data-webpack",r+u),i.src=L.tu(e)),n[e]=[t];var d=function(t,r){i.onerror=i.onload=null,clearTimeout(l);var u=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),u&&u.forEach(function(e){return e(r)}),t)return t(r)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),f&&document.head.appendChild(i)},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u={167:[167],906:[906]},o={167:["default","./footer",573],906:["default","./nav",573]},L.f.remotes=function(e,t){L.o(u,e)&&u[e].forEach(function(e){var n=L.R;n||(n=[]);var r=o[e];if(!(n.indexOf(r)>=0)){if(n.push(r),r.p)return t.push(r.p);var u=function(t){t||(t=Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+r[1]+'" from '+r[2]),L.m[e]=function(){throw t},r.p=0},i=function(e,n,o,i,f,c){try{var a=e(n,o);if(!a||!a.then)return f(a,i,c);var s=a.then(function(e){return f(e,i)},u);if(!c)return s;t.push(r.p=s)}catch(d){u(d)}},f=function(e,t,u){return i(t.get,r[1],n,0,c,u)},c=function(t){r.p=1,L.m[e]=function(e){e.exports=t()}};i(L,r[2],0,0,function(e,t,n){return e?i(L.I,r[0],0,e,f,n):u()},1)}})},L.S={},i={},f={},L.I=function(e,t){t||(t=[]);var n=f[e];if(n||(n=f[e]={}),!(t.indexOf(n)>=0)){if(t.push(n),i[e])return i[e];L.o(L.S,e)||(L.S[e]={});var r,u,o,c,a,s=L.S[e],d="selfdesign",l=[];return"default"===e&&(u="18.2.0",(a=(c=s[r="react/jsx-runtime"]=s[r]||{})[u])&&(a.loaded||(!o!=!a.eager?!o:!(d>a.from)))||(c[u]={get:function(){return L.e(893).then(function(){return function(){return L(893)}})},from:d,eager:!!o}),function(n){var r=function(e){"undefined"!=typeof console&&console.warn&&console.warn("Initialization of sharing external failed: "+e)};try{var u=L(573);if(!u)return;var o=function(n){return n&&n.init&&n.init(L.S[e],t)};if(u.then)return l.push(u.then(o,r));var i=o(u);i&&i.then&&l.push(i.catch(r))}catch(f){r(f)}}(0)),l.length?i[e]=Promise.all(l).then(function(){return i[e]=1}):i[e]=1}},L.tt=function(){return void 0===c&&(c={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(c=trustedTypes.createPolicy("nextjs#bundler",c))),c},L.tu=function(e){return L.tt().createScriptURL(e)},function(){L.g.importScripts&&(e=L.g.location+"");var e,t=L.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),L.p=e+"../../"}(),a=function(e){var t=function(e){return e.split(".").map(function(e){return+e==e?+e:e})},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=n[1]?t(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,t(n[2]))),n[3]&&(r.push([]),r.push.apply(r,t(n[3]))),r},s=function(e,t){e=a(e),t=a(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var r=e[n],u=(typeof r)[0];if(n>=t.length)return"u"==u;var o=t[n],i=(typeof o)[0];if(u!=i)return"o"==u&&"n"==i||"s"==i||"u"==u;if("o"!=u&&"u"!=u&&r!=o)return r<o;n++}},d=function(e){var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,u=1;u<e.length;u++)r--,n+="u"==(typeof(i=e[u]))[0]?"-":(r>0?".":"")+(r=2,i);return n}var o=[];for(u=1;u<e.length;u++){var i=e[u];o.push(0===i?"not("+f()+")":1===i?"("+f()+" || "+f()+")":2===i?o.pop()+" "+o.pop():d(i))}return f();function f(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=function(e,t){if(0 in e){t=a(t);var n=e[0],r=n<0;r&&(n=-n-1);for(var u=0,o=1,i=!0;;o++,u++){var f,c,s=o<e.length?(typeof e[o])[0]:"";if(u>=t.length||"o"==(c=(typeof(f=t[u]))[0]))return!i||("u"==s?o>n&&!r:""==s!=r);if("u"==c){if(!i||"u"!=s)return!1}else if(i){if(s==c){if(o<=n){if(f!=e[o])return!1}else{if(r?f>e[o]:f<e[o])return!1;f!=e[o]&&(i=!1)}}else if("s"!=s&&"n"!=s){if(r||o<=n)return!1;i=!1,o--}else{if(o<=n||c<s!=r)return!1;i=!1}}else"s"!=s&&"n"!=s&&(i=!1,o--)}}var d=[],p=d.pop.bind(d);for(u=1;u<e.length;u++){var h=e[u];d.push(1==h?p()|p():2==h?p()&p():h?l(h,t):!p())}return!!p()},p=function(e,t){var n=L.S[e];if(!n||!L.o(n,t))throw Error("Shared module "+t+" doesn't exist in shared scope "+e);return n},h=function(e,t){var n=e[t];return Object.keys(n).reduce(function(e,t){return!e||!n[e].loaded&&s(e,t)?t:e},0)},g=function(e,t,n,r){var u=h(e,n);return m(e[n][u])},m=function(e){return e.loaded=1,e.get()},y=(v=function(e){return function(t,n,r,u){var o=L.I(t);return o&&o.then?o.then(e.bind(e,t,L.S[t],n,r,u)):e(t,L.S[t],n,r,u)}})(function(e,t,n){return p(e,n),g(t,e,n)}),b=v(function(e,t,n,r){return t&&L.o(t,n)?g(t,e,n):r()}),x={},w={5:function(){return y("default","react")},807:function(){return b("default","react/jsx-runtime",function(){return L.e(521).then(function(){return function(){return L(893)}})})},868:function(){return y("default","next/link")},13:function(){return y("default","styled-jsx")},94:function(){return y("default","react-dom")},108:function(){return y("default","next/script")},479:function(){return y("default","next/dynamic")},569:function(){return y("default","styled-jsx/style")},731:function(){return y("default","next/head")},819:function(){return y("default","next/router")}},S={149:[5,13,94,108,479,569,731,807,819,868],318:[5,807,868],355:[5,13,94,108,479,569,731,807,819,868],557:[5,13,94,108,479,569,731,807,819,868],882:[5,13,94,108,479,569,731,807,819,868],893:[5]},L.f.consumes=function(e,t){L.o(S,e)&&S[e].forEach(function(e){if(L.o(x,e))return t.push(x[e]);var n=function(t){x[e]=0,L.m[e]=function(n){delete L.c[e],n.exports=t()}},r=function(t){delete x[e],L.m[e]=function(n){throw delete L.c[e],t}};try{var u=w[e]();u.then?t.push(x[e]=u.then(n).catch(r)):n(u)}catch(o){r(o)}})},E=function(e,t,n,r){var u=document.createElement("link");return u.rel="stylesheet",u.type="text/css",u.onerror=u.onload=function(o){if(u.onerror=u.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),f=o&&o.target&&o.target.href||t,c=Error("Loading CSS chunk "+e+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=f,u.parentNode.removeChild(u),r(c)}},u.href=t,document.head.appendChild(u),u},j=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var u=n[r],o=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===t))return u}for(var i=document.getElementsByTagName("style"),r=0;r<i.length;r++){var u=i[r],o=u.getAttribute("data-href");if(o===e||o===t)return u}},_={854:0},L.f.miniCss=function(e,t){_[e]?t.push(_[e]):0!==_[e]&&({149:1,882:1})[e]&&t.push(_[e]=new Promise(function(t,n){var r=L.miniCssF(e),u=L.p+r;if(j(r,u))return t();E(e,u,t,n)}).then(function(){_[e]=0},function(t){throw delete _[e],t}))},O={854:0},L.f.j=function(e,t){var n=L.o(O,e)?O[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(/^(167|906)$/.test(e))O[e]=0;else{var r=new Promise(function(t,r){n=O[e]=[t,r]});t.push(n[2]=r);var u=L.p+L.u(e),o=Error();L.l(u,function(t){if(L.o(O,e)&&(0!==(n=O[e])&&(O[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",o.name="ChunkLoadError",o.type=r,o.request=u,n[1](o)}},"chunk-"+e,e)}}},P=function(e,t){var n,r,u=t[0],o=t[1],i=t[2],f=0;if(u.some(function(e){return 0!==O[e]})){for(n in o)L.o(o,n)&&(L.m[n]=o[n]);i&&i(L)}for(e&&e(t);f<u.length;f++)r=u[f],L.o(O,r)&&O[r]&&O[r][0](),O[r]=0},(k=self.selfdesignchunkLoader=self.selfdesignchunkLoader||[]).forEach(P.bind(null,0)),k.push=P.bind(null,k.push.bind(k));var A=L(786);window.selfdesign=A}();