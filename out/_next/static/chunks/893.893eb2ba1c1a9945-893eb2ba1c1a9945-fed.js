"use strict";(self.selfdesignchunkLoader=self.selfdesignchunkLoader||[]).push([[893,521],{251:function(e,r,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o(5),t=Symbol.for("react.element"),f=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,o){var n,f={},u=null,a=null;for(n in void 0!==o&&(u=""+o),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!_.hasOwnProperty(n)&&(f[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===f[n]&&(f[n]=r[n]);return{$$typeof:t,type:e,key:u,ref:a,props:f,_owner:l.current}}r.Fragment=f,r.jsx=u,r.jsxs=u},893:function(e,r,o){e.exports=o(251)}}]);