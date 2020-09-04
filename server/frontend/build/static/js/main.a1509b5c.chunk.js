(this.webpackJsonpconcentio=this.webpackJsonpconcentio||[]).push([[0],{133:function(e,a,t){e.exports=t(205)},205:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),i=t.n(o),l=t(24),c=t(241),m=t(235),s=t(229),u=t(231),p=t(232),d=t(233),g=t(234),h=Object(s.a)((function(e){return{grow:{flexGrow:1,margin:e.spacing(0)},appBar:{zIndex:200},Toolbar:{zIndex:200},title:Object(l.a)({fontSize:15,textTransform:"none"},e.breakpoints.up("sm"),{display:"block"})}}));var f=function(e){var a=h();return r.a.createElement("div",{className:a.grow},r.a.createElement(u.a,{position:"fixed",className:a.appBar},r.a.createElement(p.a,{variant:"dense",className:a.Toolbar},r.a.createElement(d.a,{variant:"h4",noWrap:!0},r.a.createElement(g.a,{color:"inherit",variant:"text",className:a.title},"Musicorum")),r.a.createElement("div",{className:a.grow}))))};function y(){return r.a.createElement("header",null,r.a.createElement(f,null))}var b=t(123),E=t(112),v=t(121),_=(t(142),function(e){var a=Object(E.a)({},e).playlist;return r.a.createElement(v.a,{audioLists:a,autoPlay:!1,autoHiddenCover:!0,spaceBar:!0,defaultPosition:{left:0,bottom:0}})}),w=t(236),k=t(237),j=t(238),x=t(117),N=t.n(x),S=t(120),O=t.n(S),B=t(119),M=t.n(B),z=t(118),C=t.n(z),G=t(239),P=Object(s.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},cardDetails:{flex:1},cardMedia:{width:160},description:{margin:e.spacing(0,2)},a:{textDecoration:"none",color:e.palette.secondary.main}}})),A=[{name:"Gotta Get Up",singer:"Harry Nilsson",cover:"https://res.cloudinary.com/lang-code/image/upload/v1599213505/gotta_get_up_ilmg8w.jpg",musicSrc:"https://res.cloudinary.com/lang-code/video/upload/v1599213151/Harry_Nilsson_-_Gotta_Get_Up__Official_Audio_t9jftf.mp3"},{name:"Burning Sky",singer:"Bad Company",musicSrc:"https://res.cloudinary.com/lang-code/video/upload/v1599214523/01_20Burnin_20Sky_epzvsn.mp3"},{name:"Prism of life",singer:"Prism of life",cover:"https://res.cloudinary.com/lang-code/image/upload/v1599214158/presim_jlzurz.jpg",musicSrc:"https://res.cloudinary.com/lang-code/video/upload/v1599214125/11_20Prism_20of_20Life_bzmbwu.mp3"}],H=function(e){var a=P(),t=Object(n.useState)([]),o=Object(b.a)(t,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){fetch("".concat(window.location.origin,"/api/playlist")).then((function(e){e.json().then((function(e){e.error?l(A):e.playlist?l(e.playlist):l(A)}))})).catch((function(e){l(A)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(w.a,{className:a.card},r.a.createElement("div",{className:a.cardDetails},r.a.createElement(k.a,null,r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Concentio, enjoy the simplicity, enjoy your music."),r.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary",paragraph:!0},"A light, simple and straight-forward music streaming app."))),r.a.createElement(j.a,{className:a.cardMedia,image:"https://res.cloudinary.com/lang-code/image/upload/v1599217214/images/music_icon_tkqdsq.png",title:"Concentio"}))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary",className:a.description,paragraph:!0},"Minimalistic music streaming app built with React + Material-UI, and served with Flask. Star, fork or contribute if you wish so.",r.a.createElement("a",{href:"https://github.com/MurphyAdam",target:"_blank",rel:"noopener noreferrer",className:a.a}," By: @GitHub/MurphyAdam (Majdi)")),r.a.createElement(G.a,{component:"a",title:"GitHub","aria-label":"GitHub",color:"inherit",href:"https://github.com/MurphyAdam",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(N.a,null)),r.a.createElement(G.a,{component:"a",title:"Source code","aria-label":"Source code",color:"inherit",href:"https://github.com/MurphyAdam/Concentio",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,null)),r.a.createElement(G.a,{component:"a",title:"LinkedIn","aria-label":"LinkedIn",color:"inherit",href:"https://www.linkedin.com/in/mahfoud-majidi-258461198",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,null)),r.a.createElement(G.a,{component:"a",title:"Email","aria-label":"Email",color:"inherit",href:"mailto:langandcode@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.a,null))),r.a.createElement(_,{playlist:i}))},I=t(122),L=t(240),T={defaultPaletteColors:{primary:{light:"#484848",main:"#212121",dark:"#000000"},secondary:{light:"#ffff6e",main:"#009688",dark:"#009692"}}},D=Object(s.a)((function(e){return{root:Object(l.a)({width:"auto",marginTop:e.spacing(10),marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up(1100+e.spacing(6)),{width:1100,marginLeft:"auto",marginRight:"auto"})}}));var R=function(){var e=D(),a=Object(I.a)({palette:{type:"dark",primary:T.defaultPaletteColors.primary,secondary:T.defaultPaletteColors.secondary,contrastThreshold:3,tonalOffset:.2},typography:{fontSize:14}});return r.a.createElement(L.a,{theme:a},r.a.createElement(c.a,null),r.a.createElement(m.a,{component:"main",className:e.root},r.a.createElement(y,null),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.a1509b5c.chunk.js.map