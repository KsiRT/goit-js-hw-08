var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var l=r("kEUo3");const n=document.querySelector(".feedback-form"),a={email:"",message:""};(()=>{let e;try{e=JSON.parse(localStorage.getItem("feedback-form-state"))}catch(e){console.log(e)}if(null!==e){for(const t in e)n.elements[t].value=e[t];console.log("ne pusto")}})();n.addEventListener("input",l.throttle((({target:e})=>{const t=e.name,o=e.value;let r=JSON.parse(localStorage.getItem("feedback-form-state"))||a;r[t]=o;const l=JSON.stringify(r);localStorage.setItem("feedback-form-state",l)}),500)),n.addEventListener("submit",(e=>{e.preventDefault(),console.log(a),localStorage.removeItem("feedback-form-state"),n.reset()}));
//# sourceMappingURL=03-feedback.b529f0d5.js.map