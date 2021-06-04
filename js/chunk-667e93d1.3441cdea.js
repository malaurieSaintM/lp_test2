(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-667e93d1"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=u},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=u},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=u},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=u},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("numeric",/^[0-9]*$/);t.default=u},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=u},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,a=(0,n.regex)("email",u);t.default=a},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=u},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=u},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=u},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",u);t.default=a},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=u(r("8750"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var s=function(e,t){return(0,n.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=s},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,u=n;t.default=u},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t.default=u;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},a9f4:function(e,t,r){"use strict";r("e895")},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=q(r("6235")),u=q(r("3a54")),a=q(r("45b8")),i=q(r("ec11")),o=q(r("5d75")),f=q(r("c99d")),s=q(r("91d3")),d=q(r("2a12")),l=q(r("5db3")),c=q(r("d4f4")),m=q(r("aa82")),p=q(r("e652")),v=q(r("b6cb")),b=q(r("772d")),y=q(r("d294")),_=q(r("3360")),g=q(r("6417")),h=q(r("eb66")),P=q(r("46bc")),x=q(r("1331")),O=q(r("c301")),j=w(r("78ef"));function w(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function q(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=u},b8fa:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"formulaire"},[r("h2",[e._v("Support Client")]),r("ul",[e._m(0),e._m(1),r("li",[r("h2",[e._v("Formulaire de contact")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"firstName"}},[e._v("Nom")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.firstName.$error},attrs:{id:"firstName",name:"firstName",type:"text"},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}}),e.submitted&&!e.$v.user.firstName.required?r("div",{staticClass:"invalid-feedback"},[e._v("Le nom est requis")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"lastName"}},[e._v("Prénom")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.lastName.$error},attrs:{id:"lastName",name:"lastName",type:"text"},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}}),e.submitted&&!e.$v.user.lastName.required?r("div",{staticClass:"invalid-feedback"},[e._v("Le prénom est requis")]):e._e()]),e._m(2),e._m(3),r("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[e._v("Envoyer")])]),r("b-card",{staticClass:"map"},[r("h2",[e._v("Siège de Spotify")]),r("li",[r("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9350931218305!2d2.323192915684759!3d48.87851387928947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4ae7dbbb3d%3A0xe4e9d3f60003b293!2s54%20Rue%20de%20Londres%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1604614353523!5m2!1sfr!2sfr",width:"600",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})]),r("li",[r("div",{staticClass:"office"},[r("div",[r("p",[e._v("Spotify AB")]),r("p",[e._v("Regeringsgatan 19")]),r("p",[e._v("SE-111 53 Stockholm")]),r("p",[e._v("Sweden")]),r("p",[e._v("Reg no: 556703-7485")]),r("p",[e._v("office@spotify.com")])]),r("div",[r("p",[e._v("Spotify France SAS")]),r("p",[e._v("54 Rue de Londres, 75008")]),r("p",[e._v("Paris")]),r("p",[e._v("France")]),r("p",[e._v("office@spotify.com")])])])])])],1)])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{target:"_blank",href:"https://support.spotify.com/uk/?_ga=2.238036544.1124744676.1604600490-1303291832.1604600490"}},[e._v("Site d'aide.")]),e._v(" Consultez notre site d'aide pour trouver des réponses à vos questions et découvrir comment profiter au maximum de Spotify et de votre musique.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{target:"_blank",href:"https://community.spotify.com/?_ga=2.243034946.1124744676.1604600490-1303291832.1604600490"}},[e._v("Communauté.")]),e._v(" Obtenez rapidement l'aide des utilisateurs experts de Spotify. Si vous ne trouvez pas de réponse à votre question, postez-la et un utilisateur y répondra sans tarder. Vous pouvez aussi proposer de nouvelles idées pour l'application, voter pour les idées des autres ou tout simplement discuter de musique avec d'autres fans.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),r("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"}}),r("small",{staticClass:"form-text text--transparent",attrs:{id:"emailHelp"}},[e._v("Rentrez une adresse mail valide")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("textarea",{attrs:{placeholder:"Ecrivez votre message"}})])}],a=r("b5ae"),i={name:"Join",data:function(){return{user:{firstName:"",lastName:"",email:"",about:""},submitted:!1}},validations:{user:{firstName:{required:a["required"]},lastName:{required:a["required"]},email:{required:a["required"],email:a["email"]},password:{required:a["required"],minLength:Object(a["minLength"])(6)}}},methods:{handleSubmit:function(){this.submitted=!0}}},o=i,f=(r("a9f4"),r("2877")),s=Object(f["a"])(o,n,u,!1,null,"03c64608",null);t["default"]=s.exports},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=u},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=u;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},u=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},a=n.vuelidate?n.vuelidate.withParams:u;t.withParams=a}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=u},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=u},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},e895:function(e,t,r){},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=u},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=u}}]);
//# sourceMappingURL=chunk-667e93d1.3441cdea.js.map