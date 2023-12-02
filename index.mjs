// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";function r(r,n,l,d){var m,j,o;for(m=[],o=0;o<n.length;o++)j=n[o],s(j)&&0!==j?m.push(new t(j,null)):m.push(null);return i(r,e(m),l,d)}export{r as default};
//# sourceMappingURL=index.mjs.map
