(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/avatar.3bfe990d.png"},,,,,,,,,,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"description":"I\'m a Front-End Developer from Paris. I am particularly interested in the Javascript environment, and I am thirsty for knowledge","contact":"If you want to contact me","copyright":"SULLIVAN TOBIAS \xa92020"}')},,function(e,a,t){e.exports=t(81)},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(38),c=t.n(r),s=t(1),i=t.n(s),o=(i.a.string,i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,t(48),function(e){var a=e.flexDisplay,t=e.children,n=e.className,r="component".concat(a?" ".concat(a):"").concat(n?" "+n:"");return l.a.createElement("div",{className:r},t)}),m=(i.a.string.isRequired,t(49),function(e){var a=e.text,t=e.flexDisplay,n=e.link,r=l.a.createElement("a",{href:n},l.a.createElement("div",{className:"cmp-button"},l.a.createElement("span",null,a))),c=l.a.createElement("div",{className:"cmp-button"},l.a.createElement("span",null,a));return l.a.createElement(o,{flexDisplay:t},n?r:c)}),f=(i.a.string.isRequired,i.a.bool,t(50),function(e){var a=e.title,t=e.flexDisplay,n=e.underlined,r=e.tag,c=e.className,s=n?" underlined":"",i=r?"h".concat(r):"h1";return l.a.createElement(o,{flexDisplay:t,className:c},l.a.createElement(i,{className:"cmp-title".concat(s)},a),n&&l.a.createElement("div",{className:"underline"}))}),u=(i.a.string.isRequired,i.a.string.isRequired,i.a.string,i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,t(51),function(e){var a=e.marker,t=e.flexDisplay,n=e.tag,r=e.children,c="structure".concat(a?"-".concat(a):""," container-fluid"),s="structure".concat(a?"-".concat(a):"","__wrapper flex-row").concat(t?" "+t:""),i=n;return l.a.createElement(i,{id:a,className:c},l.a.createElement("section",{className:s},r))}),p=(i.a.string.isRequired,i.a.string.isRequired,i.a.string,t(52),function(e){var a=e.marker,t=e.tag,n=e.flexDisplay;return l.a.createElement(u,{marker:a,tag:t,flexDisplay:n},l.a.createElement(f,{title:"Hello, I'm Sullivan Tobias.",flexDisplay:"flex-xs-12"}),l.a.createElement(m,{text:"Check my Portfolio",link:"#about"}))}),x=t(6),d=(i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,href:i.a.string.isRequired}).isRequired),t(53),function(e){var a=e.navigationLinks,t=e.flexDisplay,r=Object(n.useState)(""),c=Object(x.a)(r,2),s=c[0],i=c[1],m=Object(n.useState)(void 0),f=Object(x.a)(m,2),u=f[0],p=f[1],d=Object(n.useRef)();Object(n.useEffect)((function(){var e=d.current.offsetTop,a=document.querySelector("#root").classList,t=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var n=window.pageYOffset;t.forEach((function(e){n+50>e.offsetTop&&p(e)})),n>e?(a.add("fixedNavigation"),i(" fixed")):(a.remove("fixedNavigation"),i(""))}))}),[]);var E=a.map((function(e,a){return l.a.createElement("a",{onClick:function(e){return function(e){var a=d.current.children,t=!0,n=!1,l=void 0;try{for(var r,c=a[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){r.value.classList.remove("active")}}catch(s){n=!0,l=s}finally{try{t||null==c.return||c.return()}finally{if(n)throw l}}e.currentTarget.classList.add("active")}(e)},className:u&&u.id===e.href?"active":"",key:a,href:"#".concat(e.href)},l.a.createElement("li",null,e.title))}));return l.a.createElement(o,{flexDisplay:"".concat(t).concat(s)},l.a.createElement("ul",{className:"cmp-navigation flex-row flex-just-around-xs",ref:d},E))}),E=t(14),y=t.n(E),g=t(8),v=t.n(g),h=(i.a.bool,i.a.string,i.a.arrayOf(Object),t(57),function(e){var a=e.flexDisplay,t=e.skills,r=e.isVisible,c=Object(n.useState)("hidden"),s=Object(x.a)(c,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){r&&m("")}),[r]),l.a.createElement(o,{flexDisplay:a},l.a.createElement("div",{className:"cmp-skillBars ".concat(i)},t.map((function(e){return l.a.createElement("div",{className:"cmp-skillBars__wrapper",key:e.type},l.a.createElement("div",{className:"cmp-skillBars__wrapper--type"},e.type),l.a.createElement("div",{className:"cmp-skillBars__wrapper--bar ".concat(i),style:{width:"".concat(e.level,"%")}},l.a.createElement("span",{className:"cmp-skillBars__wrapper--bar--percentage"},e.level,"%")))}))))}),b=(i.a.string,t(58),function(e){var a=e.flexDisplay,t=e.props;return l.a.createElement(o,{flexDisplay:a},l.a.createElement("div",{className:"cmp-image"},l.a.createElement("img",Object.assign({alt:t.alt},t))))}),N=t(39),k=(i.a.string,i.a.string,t(59),function(e){var a=e.textKey,t=e.text,n=e.link,r=e.flexDisplay,c=e.className,s=a?N[a]:t;return l.a.createElement(o,{flexDisplay:r},n?l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",{className:"cmp-text".concat(c?" "+c:"")},s)):l.a.createElement("p",{className:"cmp-text".concat(c?" "+c:"")},s))}),D=(i.a.node,i.a.string,i.a.string,i.a.bool,i.a.bool,i.a.string,t(60),function(e){var a=e.children,t=e.flexDisplay,r=e.className,c=e.withTransition,s=e.isVisible,i=e.typeTransition,m=Object(n.useState)(i),f=Object(x.a)(m,2),u=f[0],p=f[1];Object(n.useEffect)((function(){s&&p("")}),[s]);var d=c?"cmp-container__withTransition":"cmp-container";return l.a.createElement(o,{flexDisplay:"".concat(t||"").concat(r?" "+r:"")},l.a.createElement("div",{className:"".concat(d).concat(u?" "+u:""," flex-just-center-xs")},a))}),w=t(9),j=(i.a.string,i.a.string,i.a.string,t(64),function(e){var a=e.text,t=e.icon,n=e.flexDisplay,r=e.className;return l.a.createElement(o,{flexDisplay:n,className:r},l.a.createElement("div",{className:"cmp-text-icon"},l.a.createElement(w.a,{icon:t,className:"icon"}),a&&l.a.createElement("p",{className:"cmp-text"},a)))}),O=(i.a.string,i.a.string,i.a.number,t(65),function(e){var a=e.flexDisplay,t=e.className,n=e.width;return l.a.createElement(o,{flexDisplay:a,className:t},l.a.createElement("hr",{width:n+"%",className:"cmp-separator"}))}),S=t(10),R=(t(66),[{type:"HTML",level:85},{type:"CSS",level:85},{type:"JavaScript",level:80},{type:"React",level:80},{type:"Handlebars",level:80},{type:"AEM",level:70},{type:"GraphQl",level:70}]),T=function(e){var a=e.marker,t=e.tag,n=e.flexDisplay;return l.a.createElement(u,{marker:a,tag:t,flexDisplay:n},l.a.createElement(f,{title:"About Me",flexDisplay:"flex-xs-12",underlined:!0}),l.a.createElement(v.a,{partialVisibility:!0,once:!0,className:"flex-xs-12 flex-md-6 flex-just-center-xs"},l.a.createElement(D,{withTransition:!0,typeTransition:"scale",className:"about-header-container"},l.a.createElement(b,{props:{src:y.a,alt:"avatar"}}),l.a.createElement(k,{textKey:"description"}))),l.a.createElement(v.a,{partialVisibility:!0,once:!0,className:"flex-xs-12 flex-md-6"},l.a.createElement(h,{skills:R})),l.a.createElement(O,{width:70,flexDisplay:"flex-xs-12"}),l.a.createElement(f,{title:"WIP Technologies",flexDisplay:"flex-xs-12",tag:3}),l.a.createElement(v.a,{partialVisibility:!0,once:!0,className:"flex-xs-12"},l.a.createElement(D,{withTransition:!0,typeTransition:"leftToRight"},l.a.createElement(j,{icon:S.d,className:"flex-xs-6 nodeJS"}))))},_=t(40),q=t.n(_),L=(i.a.string,i.a.object.isRequired,t(75),function(e){var a=e.flexDisplay,t=e.card,n=new Date(t.isoDate).toDateString();return l.a.createElement(o,{flexDisplay:a},l.a.createElement("div",{className:"cmp-cards"},l.a.createElement("a",{target:"_blank",href:t.link,rel:"noopener noreferrer"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card_image"},l.a.createElement(k,{className:"title",text:t.title}),l.a.createElement(k,{text:n}),t.creator&&l.a.createElement(k,{className:"author",text:t.creator}))))))}),I=(i.a.string,i.a.string.isRequired,i.a.number,t(76),function(e){var a=e.flexDisplay,t=e.url,r=e.maxDisplayed,c=Object(n.useState)({}),s=Object(x.a)(c,2),i=s[0],m=s[1],f=new q.a;return Object(n.useEffect)((function(){f.parseURL(t).then((function(e){return{items:e.items.splice(0,r)}})).then((function(e){var a=e.items.map((function(e,a){return l.a.createElement("li",{className:"flex-xs-12 flex-md-6 flux-item",key:a},l.a.createElement(L,{card:e}))}));m(a)})).catch((function(e){throw e}))}),[]),l.a.createElement(o,{flexDisplay:a},l.a.createElement("ul",{className:"cmp-flux flex-row"},Object.keys(i).length&&i," "))}),C=t(3),B=(t(77),function(e){var a=e.marker,t=e.tag,n=e.flexDisplay;return l.a.createElement(u,{marker:a,tag:t,flexDisplay:n},l.a.createElement(f,{title:"Flux",flexDisplay:"flex-xs-12",underlined:!0}),l.a.createElement(k,{flexDisplay:"flex-xs-12",text:"Some interesting websites",className:"information"}),l.a.createElement(C.d,{className:"flex-xs-12",forceRenderTabPanel:!0,defaultIndex:1},l.a.createElement(C.b,null,l.a.createElement(C.a,{className:"flex-xs-8 flex-md-3 flex-just-center-md"}," Codrops "),l.a.createElement(C.a,{className:"flex-xs-8 flex-md-3 flex-just-center-md"}," CSS-Tricks "),l.a.createElement(C.a,{className:"flex-xs-8 flex-md-3 flex-just-center-md"}," Reddit "),l.a.createElement(C.a,{className:"flex-xs-8 flex-md-3 flex-just-center-md"}," CodePen "),l.a.createElement(C.a,{className:"flex-xs-8 flex-md-3 flex-just-center-md"}," SO ")),l.a.createElement(C.c,null,l.a.createElement(I,{maxDisplayed:4,url:"https://tympanus.net/codrops/collective/feed/"})),l.a.createElement(C.c,null,l.a.createElement(I,{maxDisplayed:4,url:"https://css-tricks.com/feed/"})),l.a.createElement(C.c,null,l.a.createElement(I,{maxDisplayed:4,url:"https://www.reddit.com/r/programming/.rss"})),l.a.createElement(C.c,null,l.a.createElement(I,{maxDisplayed:4,url:"https://blog.codepen.io/feed/"})),l.a.createElement(C.c,null,l.a.createElement(I,{maxDisplayed:4,url:"https://stackoverflow.com/feeds/tag?tagnames=javascript&sort=newest"}))))}),M=t(30),V=(t(78),function(e){var a=e.marker,t=e.tag,r=e.flexDisplay,c=Object(n.useRef)(),s=Object(n.useRef)(),i=Object(n.useRef)(),o=[{href:"https://www.linkedin.com/in/sullivan-tobias-340807157/",class:"linkedIn",icon:S.c,text:"See my profile",target:"_blank"},{href:"https://github.com/sullivantobias",class:"github",icon:S.a,text:"Check my repositories",target:"_blank"},{href:"mailto:sullytobias@gmail.com",class:"gmail",icon:S.b,text:"Send me an email"}].map((function(e,a){return l.a.createElement("a",{key:a,target:e.target,href:e.href,className:e.class},l.a.createElement(w.a,{icon:e.icon}),l.a.createElement(k,{text:e.text}),l.a.createElement(w.a,{icon:M.b}))}));return l.a.createElement(u,{marker:a,tag:t,flexDisplay:r},l.a.createElement(f,{title:"More",underlined:!0,className:"section-title flex-xs-12"}),l.a.createElement(k,{className:"mentions",text:"Honorable Mentions",flexDisplay:"flex-xs-12"}),l.a.createElement(D,{flexDisplay:"flex-xs-12"},l.a.createElement(k,{className:"screeps",text:"Screeps",link:"https://screeps.com/"}),l.a.createElement(k,{className:"terminal",text:"Terminal",link:"https://terminal.c1games.com/"}),l.a.createElement(k,{className:"hackerrank",text:"HackerRank",link:"https://www.hackerrank.com/"}),l.a.createElement(k,{className:"zachtronics",text:"Zachtronics",link:"http://www.zachtronics.com/"})),l.a.createElement(O,{flexDisplay:"flex-xs-12",width:80}),l.a.createElement(v.a,{partialVisibility:!0,once:!0},l.a.createElement(D,{withTransition:!0,typeTransition:"leftToRight"},l.a.createElement("div",{className:"contact-area"},l.a.createElement("div",{className:"contact"},l.a.createElement("section",null,l.a.createElement("div",{className:"content"},l.a.createElement(b,{props:{src:y.a,alt:"Profile Image"}}),l.a.createElement("aside",null,l.a.createElement(f,{title:"Sullivan Tobias"}),l.a.createElement(k,{textKey:"contact"})),l.a.createElement("button",{onClick:function(){c.current.classList.toggle("active"),s.current.classList.toggle("active"),i.current.classList.toggle("active")},ref:c},l.a.createElement("span",null,"Contact Me"),l.a.createElement(w.a,{icon:M.a}))),l.a.createElement("div",{className:"title",ref:s},l.a.createElement("p",null,"Contact Me"))),l.a.createElement("nav",{ref:i},o))))))}),A=(t(79),function(e){var a=e.marker,t=e.tag,n=e.flexDisplay;return l.a.createElement(u,{marker:a,tag:t,flexDisplay:n},l.a.createElement(k,{flexDisplay:"flex-xs-12",textKey:"copyright"}))}),J=[{title:"About me",href:"about"},{title:"Flux",href:"flux-rss"},{title:"More",href:"more"}],P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{marker:"header",tag:"header",flexDisplay:"flex-just-center-xs"}),l.a.createElement(d,{navigationLinks:J,flexDisplay:"container-fluid navigation"}),l.a.createElement(T,{tag:"section",marker:"about"}),l.a.createElement(B,{tag:"section",marker:"flux-rss",flexDisplay:"flex-just-center-xs"}),l.a.createElement(V,{tag:"section",marker:"more",flexDisplay:"flex-just-center-xs"}),l.a.createElement(A,{tag:"footer",marker:"footer",flexDisplay:"flex-just-center-xs"}))};t(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[41,1,2]]]);
//# sourceMappingURL=main.b76f7c72.chunk.js.map