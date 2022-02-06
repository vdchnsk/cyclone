var v=Object.defineProperty,S=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&g(e,n,t[n]);if(y)for(var n of y(t))w.call(t,n)&&g(e,n,t[n]);return e},d=(e,t)=>S(e,O(t));import{j as N,r as I,R as C,a as $}from"./vendor.b66e2d12.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};L();const r=N.exports.jsx,c=N.exports.jsxs,W=({weatherMethod:e})=>c("form",{onSubmit:e,className:"content__form",children:[r("input",{name:"city",placeholder:"City",className:"form__inputBar",type:"text"}),r("button",{type:"submit",className:"form__button",children:"Find"})]}),M=({weatherData:e})=>{var t,n,i;return e.error?r("h3",{className:"weatherInfoTab__errorTab",children:e.error}):r("main",{className:"weatherInfoTab",children:e.name&&c("div",{className:"weatherInfoTab__outputTab-general",children:[c("div",{className:"weatherInfoTab__outputTab-secondary",children:[r("h3",{className:"weatherInfoTab__ouputTab-text",children:"Place:"}),c("p",{className:"weatherInfoTab__ouputTab-text",children:[e==null?void 0:e.name,", ",(t=e==null?void 0:e.sys)==null?void 0:t.country]})]}),c("div",{className:"weatherInfoTab__outputTab-secondary",children:[r("h3",{className:"weatherInfoTab__ouputTab-text",children:"Temperature:"}),c("p",{children:[(n=e==null?void 0:e.main)==null?void 0:n.temp," \xB0C"]})]}),c("div",{className:"weatherInfoTab__outputTab-secondary",children:[r("h3",{className:"weatherInfoTab__ouputTab-text",children:"Preassure:"}),c("p",{className:"weatherInfoTab__ouputTab-text",children:[(i=e==null?void 0:e.main)==null?void 0:i.pressure," Pa"]})]}),c("div",{className:"weatherInfoTab__outputTab-secondary",children:[r("h3",{className:"weatherInfoTab__ouputTab-text",children:"Sunset:"}),r("p",{className:"weatherInfoTab__ouputTab-text",children:e.sunset})]})]})})},P="Chose the city!",A="Chosen is not found :(",B=e=>{const t=new Date;return t.setTime(e),`${t.getHours()}hr ${t.getMinutes()}mn ${t.getSeconds()}s `},E="b6fd0cd5ec30f48c66ef2e4ede481445";function F(){const[e,t]=I.exports.useState({}),[n,i]=I.exports.useState(!0);return r("div",{className:"App",children:r("main",{className:"main",children:c("div",{className:"main__window",children:[r(W,{weatherMethod:async s=>{var h,_,b,T;s.preventDefault();const a=(T=(b=(_=(h=s.target)==null?void 0:h.elements)==null?void 0:_.city)==null?void 0:b.value)!=null?T:"";a||t(d(u({},e),{error:P}));const x=l=>{var p;const m=(p=l==null?void 0:l.sys)==null?void 0:p.sunset;return B(m)};if(a){i(!0);try{const m=a.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g,""),f=await(await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${m}&appid=${E}`)).json();if(f.cod==="404")return t(d(u({},e),{error:A}));t(d(u({},f),{sunset:x(f)})),i(!1)}catch(l){t(d(u({},e),{error:l.message}))}}}}),r(M,{weatherData:e})]})})})}Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}C.render(r($.StrictMode,{children:r(F,{})}),document.getElementById("root"));R();
