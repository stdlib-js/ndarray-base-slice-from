"use strict";var h=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var t=h(function(S,v){
var p=require('@stdlib/assert-is-number/dist').isPrimitive,q=require('@stdlib/slice-base-args2multislice/dist'),l=require('@stdlib/slice-ctor/dist'),m=require('@stdlib/ndarray-base-shape/dist'),o=require('@stdlib/ndarray-base-slice/dist');function f(u,e,n,c){var i,a,r,s;for(a=m(u),i=[],s=0;s<e.length;s++)r=e[s],p(r)&&r!==0?r===a[s]?(r-=1,i.push(new l(r,r))):i.push(new l(r,null)):i.push(null);return o(u,q(i),n,c)}v.exports=f
});var g=t();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
