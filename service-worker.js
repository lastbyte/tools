if(!self.define){let e,o={};const i=(i,n)=>(i=new URL(i+".js",n).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(o[c])return;let r={};const t=e=>i(e,c),f={module:{uri:c},exports:r,require:t};o[c]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-c937e275"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"../public/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"../public/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"../public/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"../public/manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"../public/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"206.js",revision:"64c7ac51db28b1e11addf14530991cd5"},{url:"206.js.LICENSE.txt",revision:"3635dbf7251425d4b2ed88fbc573d695"},{url:"706.js",revision:"8e503d477e5bf39267e51e69b6b649a3"},{url:"791.js",revision:"b6f085a8972406f2ff328c0feeaeef8c"},{url:"index.html",revision:"5258a983d1f641beaf25113f2bfe1262"}],{}),e.registerRoute(/assets/,new e.CacheFirst,"GET"),e.registerRoute(/manifest\.json/,new e.CacheFirst,"GET"),e.registerRoute(/robots\.txt/,new e.CacheFirst,"GET"),e.registerRoute(/logo\.192\.png/,new e.CacheFirst,"GET"),e.registerRoute(/logo\.512\.png/,new e.CacheFirst,"GET"),e.registerRoute(/favicon\.ico/,new e.CacheFirst,"GET"),e.registerRoute(/robots\.txt/,new e.CacheFirst,"GET")}));
