(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),n=a(15),s=a.n(n),o=(a(22),a(10)),r=(a(23),a(8)),i=a(0),d=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.style," bg-").concat(e.style),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:"TextUtils"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.darkmode}),Object(i.jsx)("label",{className:"form-check-label text-".concat("light"===e.style?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"light"===e.style?"Enabled Light Mode":"Enabled Dark Mode"})]})]})]})})})},b=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),l=a[0],n=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"my-3 container",children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"text-center mb-5 text-".concat("light"===e.style?"dark":"light"),children:"Enter the text click button and analyze your text"})}),Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label text-".concat("light"===e.style?"dark":"light"),children:"Enter Your Text Below :"}),Object(i.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:l,onChange:function(e){n(e.target.value)}}),Object(i.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-outline-secondary mx-2",onClick:function(){var e=l.toUpperCase();n(e)},children:"Text Uppercase"}),Object(i.jsx)("button",{type:"button",className:"btn btn-outline-secondary mx-2",onClick:function(){n(l.toLowerCase())},children:"Text Lowercase"}),Object(i.jsx)("button",{type:"button",className:"btn btn-outline-secondary mx-2",onClick:function(){n("")},children:"Clear Text"}),Object(i.jsx)("button",{type:"button",className:"btn btn-outline-secondary mx-2",onClick:function(){navigator.clipboard.writeText(l)},children:"Copy Text"})]})]}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"text-".concat("light"===e.style?"dark":"light"),children:"Your text summary"}),Object(i.jsxs)("p",{className:"text-".concat("light"===e.style?"dark":"light"),children:[0===l.length?0:l.split(" ").length," words and ",l.length," charecters"]})]})]})},j=function(e){return Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Text uppercase"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body bg-".concat(e.style," text-").concat("light"===e.style?"dark":"light"),children:["After clicking ",Object(i.jsx)("strong",{children:"Text Uppercase"})," button your full text will be in uppercase then you can use it."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Text Lowercase"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body bg-".concat(e.style," text-").concat("light"===e.style?"dark":"light"),children:["After clicking ",Object(i.jsx)("strong",{children:"Text Lowercase"})," button your full text will be in lowercase then you can use it."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Clear Text"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body bg-".concat(e.style," text-").concat("light"===e.style?"dark":"light"),children:["After clicking ",Object(i.jsx)("strong",{children:"Clear Text"})," button your full text will be cleared then you can write new text for utilize."]})})]}),Object(i.jsxs)("div",{className:"accordion-item ",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingFour",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFour","aria-expanded":"true","aria-controls":"collapseFour",children:"Copy Text"})}),Object(i.jsx)("div",{id:"collapseFour",className:"accordion-collapse collapse","aria-labelledby":"headingFour","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body bg-".concat(e.style," text-").concat("light"===e.style?"dark":"light"),children:["After clicking ",Object(i.jsx)("strong",{children:"Copy Text"})," button full text will be copied then you can paste this text anywhere."]})})]})]})})},h=a(2);var x=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],n=a?"dark":"light";return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{style:n,darkmode:function(){a?(l(!1),document.body.style.backgroundColor="white"):(l(!0),document.body.style.backgroundColor="#000000")}}),Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/about",children:Object(i.jsx)(j,{style:n})}),Object(i.jsx)(h.a,{path:"/",children:Object(i.jsx)(b,{style:n})})]})]})})};s.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.756e2763.chunk.js.map