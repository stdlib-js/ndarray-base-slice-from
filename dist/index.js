"use strict";var h=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var t=h(function(S,v){"use strict";var p=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/slice-base-args2multislice"),l=require("@stdlib/slice-ctor"),m=require("@stdlib/ndarray-base-shape"),o=require("@stdlib/ndarray-base-slice");function f(u,e,n,c){var i,a,r,s;for(a=m(u),i=[],s=0;s<e.length;s++)r=e[s],p(r)&&r!==0?r===a[s]?(r-=1,i.push(new l(r,r))):i.push(new l(r,null)):i.push(null);return o(u,q(i),n,c)}v.exports=f});var g=t();module.exports=g;
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
