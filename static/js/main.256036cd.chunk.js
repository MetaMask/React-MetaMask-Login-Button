(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(16),r=n.n(i),c=(n(84),n(48)),s=n.n(c),l=n(74),u=n(9),h=n(10),d=n(13),b=n(11),m=n(12),k=n(7),w=n(75),f=(n(29),function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).call(this,e))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Login into MetaMask",o.a.createElement("br",null)))}}]),t}(a.Component)),j=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).call(this,e))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Install MetaMask to Sign in"))}}]),t}(a.Component),O=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).call(this,e))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Connect to  ropsten network",o.a.createElement("br",null)))}}]),t}(a.Component),p=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).call(this,e))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Sign in into your account now",o.a.createElement("br",null)))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).components={foo:f,boo:j,coo:O,doo:p},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.components[this.props.tag||"foo"];return o.a.createElement(e,null)}}]),t}(a.Component),v=n(34),E=n.n(v),C=n(28),y=n.n(C),M=(n(149),n(151),n(157).detect),S=function(e){function t(e,n){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e,n))).handleShow=a.handleShow.bind(Object(k.a)(Object(k.a)(a))),a.handleClose=a.handleClose.bind(Object(k.a)(Object(k.a)(a))),a.handleClick=a.handleClick.bind(Object(k.a)(Object(k.a)(a))),a.network=a.network.bind(Object(k.a)(Object(k.a)(a))),a.mount=a.mount.bind(Object(k.a)(Object(k.a)(a))),a.init=a.init.bind(Object(k.a)(Object(k.a)(a))),a.state={show:!1,isMetaMask:!1,isLoginMetaMask:!1,isDesiredNetwork:!1,isLogin:!1},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"mount",value:function(){if("undefined"!==typeof web3)this.init();else switch(M().name){case"firefox":window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/","_blank");break;case"chrome":window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en","_blank");case"opera":window.open("https://addons.opera.com/en/extensions/details/metamask/","_blank")}this.setState({isMetaMask:!0})}},{key:"handleClick",value:function(e){e.preventDefault(),this.init()}},{key:"init",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:e.sent,this.setState({isDesiredNetwork:!0}),this.network(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({isLoginMetaMask:!0});case 11:window.ethereum.on("accountsChanged",function(e){console.log(e),1===e.length&&(console.log("hi"),t.setState({isLoginMetaMask:!0,isMetaMask:!1,isDesiredNetwork:!1,isLogin:!1})),console.log("Hello")});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"network",value:function(){var e=this;if("3"===window.ethereum.networkVersion)this.setState({isLogin:!0});else{window.ethereum.on("networkChanged",function(t){console.log(t),"3"===t?e.setState({isLogin:!0}):(e.setState({isLogin:!1}),e.setState({isDesiredNetwork:!0}))})}}},{key:"handleClose",value:function(){window.location.reload(),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0}),this.mount()}},{key:"render",value:function(){var e;return this.state.isMetaMask&&(e=o.a.createElement(g,{tag:"boo"})),this.state.isLoginMetaMask&&(e=o.a.createElement(g,{tag:"foo"})),this.state.isDesiredNetwork&&(e=o.a.createElement(g,{tag:"coo"})),this.state.isLogin&&(e=o.a.createElement(g,{tag:"doo"})),o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{mb:3,onClick:this.handleShow},"Connect with MetaMask"),o.a.createElement(y.a,{show:this.state.show,onHide:this.handleClose},o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,null,"Lets Start!")),o.a.createElement(y.a.Body,null,e),o.a.createElement(y.a.Footer,null,o.a.createElement(E.a,{variant:"secondary",onClick:this.handleClose},"Close"),o.a.createElement(E.a,{variant:"primary",onClick:this.handleClose},"Save Changes"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n(196)},84:function(e,t,n){}},[[79,2,1]]]);
//# sourceMappingURL=main.256036cd.chunk.js.map