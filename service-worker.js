if(!self.define){let e,o={};const n=(n,i)=>(n=new URL(n+".js",i).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let c={};const t=e=>n(e,r),d={module:{uri:r},exports:c,require:t};o[r]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-c937e275"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"662.js",revision:"d4abf9c191a284b3e57dbe58a0665a13"},{url:"791.js",revision:"7f43455fd3ab26777dee3640d0dfc108"},{url:"997.js",revision:"a8633cfd24b495d76ed958eb64483206"},{url:"997.js.LICENSE.txt",revision:"6e7fd502a3e961bc686889558acefbb6"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"84c47812adc32f76c677018002aac7db"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{}),e.registerRoute(/assets/,new e.CacheFirst,"GET"),e.registerRoute(/manifest\.json/,new e.CacheFirst,"GET"),e.registerRoute(/robots\.txt/,new e.CacheFirst,"GET"),e.registerRoute(/logo\.192\.png/,new e.CacheFirst,"GET"),e.registerRoute(/logo\.512\.png/,new e.CacheFirst,"GET"),e.registerRoute(/favicon\.ico/,new e.CacheFirst,"GET"),e.registerRoute(/robots\.txt/,new e.CacheFirst,"GET")}));
