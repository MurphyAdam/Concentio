(this.webpackJsonpmusicorum=this.webpackJsonpmusicorum||[]).push([[0],{133:function(e,a,t){e.exports=t(205)},205:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(12),i=t.n(o),l=t(24),c=t(241),m=t(235),s=t(229),u=t(231),p=t(232),d=t(233),g=t(234),h=Object(s.a)((function(e){return{grow:{flexGrow:1,margin:e.spacing(0)},appBar:{zIndex:200},Toolbar:{zIndex:200},title:Object(l.a)({fontSize:15,textTransform:"none"},e.breakpoints.up("sm"),{display:"block"})}}));var f=function(e){var a=h();return n.a.createElement("div",{className:a.grow},n.a.createElement(u.a,{position:"fixed",className:a.appBar},n.a.createElement(p.a,{variant:"dense",className:a.Toolbar},n.a.createElement(d.a,{variant:"h4",noWrap:!0},n.a.createElement(g.a,{color:"inherit",variant:"text",className:a.title},"Musicorum")),n.a.createElement("div",{className:a.grow}))))};function y(){return n.a.createElement("header",null,n.a.createElement(f,null))}var b=t(123),E=t(112),v=t(121),_=(t(142),function(e){var a=Object(E.a)({},e).playlist;return n.a.createElement(v.a,{audioLists:a,autoPlay:!1,autoHiddenCover:!0,spaceBar:!0,defaultPosition:{left:0,bottom:0}})}),w=t(236),k=t(237),j=t(238),x=t(117),M=t.n(x),N=t(120),S=t.n(N),O=t(119),B=t.n(O),z=t(118),G=t.n(z),P=t(239),A=Object(s.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},cardDetails:{flex:1},cardMedia:{width:160},description:{margin:e.spacing(0,2)},a:{textDecoration:"none",color:e.palette.secondary.main}}})),H=[{name:"Gotta Get Up",singer:"Harry Nilsson",cover:"https://res.cloudinary.com/lang-code/image/upload/v1599213505/gotta_get_up_ilmg8w.jpg",musicSrc:"https://res.cloudinary.com/lang-code/video/upload/v1599213151/Harry_Nilsson_-_Gotta_Get_Up__Official_Audio_t9jftf.mp3"},{name:"Burning Sky",singer:"Bad Company",musicSrc:"https://res.cloudinary.com/lang-code/video/upload/v1599214523/01_20Burnin_20Sky_epzvsn.mp3"},{name:"Prism of life",singer:"Prism of life",cover:"https://res.cloudinary.com/lang-code/image/upload/v1599214158/presim_jlzurz.jpg",musicSrc:"https://res.cloudinary.com/lang-code/video/upload/v1599214125/11_20Prism_20of_20Life_bzmbwu.mp3"}],I=function(e){var a=A(),t=Object(r.useState)([]),o=Object(b.a)(t,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){fetch("".concat(window.location.origin,"/api/playlist")).then((function(e){e.json().then((function(e){e.error?l(H):e.playlist?l(e.playlist):l(H)}))})).catch((function(e){l(H)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(w.a,{className:a.card},n.a.createElement("div",{className:a.cardDetails},n.a.createElement(k.a,null,n.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Musicorum, enjoy the simplicity, enjoy your music."),n.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary",paragraph:!0},"A light, simple and straight-forward music streaming app."))),n.a.createElement(j.a,{className:a.cardMedia,image:"https://res.cloudinary.com/lang-code/image/upload/v1599217214/images/music_icon_tkqdsq.png",title:"Musicorum"}))),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary",className:a.description,paragraph:!0},"Minimalistic music streaming app built with React + Material-UI, and served with Flask. Star, fork or contribute if you wish so.",n.a.createElement("a",{href:"https://github.com/MurphyAdam",target:"_blank",rel:"noopener noreferrer",className:a.a}," By: @GitHub/MurphyAdam (Majdi)")),n.a.createElement(P.a,{component:"a",title:"GitHub","aria-label":"GitHub",color:"inherit",href:"https://github.com/MurphyAdam",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(M.a,null)),n.a.createElement(P.a,{component:"a",title:"Source code","aria-label":"Source code",color:"inherit",href:"https://github.com/MurphyAdam/Musicorum",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(G.a,null)),n.a.createElement(P.a,{component:"a",title:"LinkedIn","aria-label":"LinkedIn",color:"inherit",href:"https://www.linkedin.com/in/mahfoud-majidi-258461198",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(B.a,null)),n.a.createElement(P.a,{component:"a",title:"Email","aria-label":"Email",color:"inherit",href:"mailto:langandcode@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(S.a,null))),n.a.createElement(_,{playlist:i}))},L=t(122),C=t(240),T={defaultPaletteColors:{primary:{light:"#484848",main:"#212121",dark:"#000000"},secondary:{light:"#ffff6e",main:"#009688",dark:"#009692"}}},D=Object(s.a)((function(e){return{root:Object(l.a)({width:"auto",marginTop:e.spacing(10),marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up(1100+e.spacing(6)),{width:1100,marginLeft:"auto",marginRight:"auto"})}}));var R=function(){var e=D(),a=Object(L.a)({palette:{type:"dark",primary:T.defaultPaletteColors.primary,secondary:T.defaultPaletteColors.secondary,contrastThreshold:3,tonalOffset:.2},typography:{fontSize:14}});return n.a.createElement(C.a,{theme:a},n.a.createElement(c.a,null),n.a.createElement(m.a,{component:"main",className:e.root},n.a.createElement(y,null),n.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.5bbf7eca.chunk.js.map