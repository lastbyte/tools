if(!self.define){let e,o={};const n=(n,c)=>(n=new URL(n+".js",c).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(o[s])return;let r={};const t=e=>n(e,s),f={module:{uri:s},exports:r,require:t};o[s]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-c937e275"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"286.js",revision:"152fa077dcbafff246f1c0eca0725dfc"},{url:"286.js.LICENSE.txt",revision:"6e7fd502a3e961bc686889558acefbb6"},{url:"424.js",revision:"b47d497a3f9e37216112ca6e64184cec"},{url:"791.js",revision:"7f43455fd3ab26777dee3640d0dfc108"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"84c47812adc32f76c677018002aac7db"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{}),e.registerRoute(/assets/,new e.CacheFirst,"GET"),e.registerRoute(/manifest\.json/,new e.CacheFirst,"GET"),e.registerRoute(/robots\.txt/,new e.CacheFirst,"GET"),e.registerRoute(/logo\.192\.png/,new e.CacheFirst,"GET"),e.registerRoute(/logo\.512\.png/,new e.CacheFirst,"GET"),e.registerRoute(/favicon\.ico/,new e.CacheFirst,"GET"),e.registerRoute(/robots\.txt/,new e.CacheFirst,"GET")}));
