(this.webpackJsonpgeneratequote=this.webpackJsonpgeneratequote||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},40:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/women.bf4f92c7.svg"},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=n(12),u=n(13),l=n(16),s=n(14),h=n(17),m=n(15),d=n.n(m),g=(n(40),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).getNewQuote=function(){n.getQuote()},n.state={quote:"",author:"",position:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=this;d.a.get("https://raw.githubusercontent.com/lalawuhan/quote-generator-data/master/quotes.json").then((function(t){var n=t.data;console.log(n);var o=Math.floor(Math.random()*n.length);console.log(o);var a=n[o];console.log(a),e.setState({quote:a.quote,author:a.author,position:a.position})}))}},{key:"render",value:function(){var e=this.state,t=e.quote,o=e.author,r=e.position;return a.a.createElement("div",{id:"wrapper"},a.a.createElement("div",{id:"image"},a.a.createElement("img",{src:n(41),alt:"women sketch holding flag"})),a.a.createElement("h1",{className:"title"},"Inspirational Women in Tech."),a.a.createElement("div",{id:"quote-box"},a.a.createElement("div",{id:"text"},a.a.createElement("p",null,t)),a.a.createElement("div",{id:"author"},a.a.createElement("h5",null,o,", ",r)),a.a.createElement("div",{id:"buttons"},a.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(t," ").concat(o),target:"_blank",rel:"noopener noreferrer",title:"Post this quote on twitter!"}," ",a.a.createElement("button",null,"Tweet")),a.a.createElement("button",{id:"new-quote",className:"buttons",onClick:this.getNewQuote},"New Quote"))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.abb2e6cd.chunk.js.map