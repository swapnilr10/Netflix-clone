(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,a){e.exports=a(65)},27:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){},47:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=(a(27),a(28),a(29),a(4)),s=a.n(i),l=a(5),m=a(3),u=a(17),d=a.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(a(47),a(18)),p=a(21),v=a.n(p);var h=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(m.a)(o,2),u=i[0],p=i[1],h=Object(n.useState)(""),g=Object(m.a)(h,2),b=g[0],E=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,p(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"row_title"},t),c.a.createElement("div",{className:"row_posters"},u.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?E(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);E(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(r&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&c.a.createElement(f.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="12290eda1b96f9daa32aea1e6e77c450",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),FetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};a(63);var E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(b.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"centre center"}},c.a.createElement("div",{className:"banner_contents"},c.a.createElement("h1",{className:"banner_title"},(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"banner_button1"},"Play"),c.a.createElement("button",{className:"banner_button2"},"More info"))),c.a.createElement("div",{className:"banner_fadetop"}),c.a.createElement("div",{className:"banner_fadeBottom"}))};a(64);var w=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){Window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav_black")},c.a.createElement("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),c.a.createElement("input",{className:"nav_input",type:"text",placeholder:"Title, people, genres"}),c.a.createElement("p",{className:"p1"},"Home"),c.a.createElement("p",{className:"p2"},"TV Shows"),c.a.createElement("p",{className:"p3"},"Movies"),c.a.createElement("p",{className:"p4"},"Latest"),c.a.createElement("p",{className:"p5"},"My List"))};var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(E,null),c.a.createElement(h,{title:" Netflix Originals",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(h,{title:"Trending Now",fetchUrl:b.fetchTrending}),c.a.createElement(h,{title:"Top Rated",fetchUrl:b.fetchTopRated}),c.a.createElement(h,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),c.a.createElement(h,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),c.a.createElement(h,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),c.a.createElement(h,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),c.a.createElement(h,{title:"Documentaries",fetchUrl:b.FetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7d8823ae.chunk.js.map
