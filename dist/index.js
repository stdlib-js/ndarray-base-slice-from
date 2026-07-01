"use strict";var h=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var n=h(function(S,t){"use strict";var p=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/slice-base-args2multislice"),v=require("@stdlib/slice-ctor"),m=require("@stdlib/ndarray-base-shape"),o=require("@stdlib/ndarray-base-slice");function f(u,r,a,c){var i,l,e,s;for(l=m(u),i=[],s=0;s<r.length;s++)e=r[s],p(e)&&e!==0?e===l[s]?(e-=1,i.push(new v(e,e))):i.push(new v(e,null)):i.push(null);return o(u,q(i),a,c)}t.exports=f});var g=n();module.exports=g;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
