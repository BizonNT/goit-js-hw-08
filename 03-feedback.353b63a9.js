!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(T,t),s?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=p();if(O(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&i?b(e):(i=o=void 0,u)}function S(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(m)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:w(p())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var h,O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){(function(e){var t=e.target;"email"===t.name?x.email=t.value.trim():"message"===t.name&&(x.message=t.value.trim())})(e),localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),formBtn=e.currentTarget,""===formBtn.email.value||""===formBtn.message.value)return void alert("Fill the empty Input field");console.log(x),localStorage.removeItem("feedback-form-state"),formBtn.email.value="",formBtn.message.value=""}));var T=null!==(h=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==h?h:{},w=T.email,S=T.message;O.email.value=null!=w?w:"",O.message.value=null!=S?S:"";var x={email:O.email.value,message:O.message.value}}();
//# sourceMappingURL=03-feedback.353b63a9.js.map