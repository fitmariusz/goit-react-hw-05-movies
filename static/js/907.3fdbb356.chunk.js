"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[907],{5907:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(7689),i=r(1933),s=r(5861),o=r(4687),c=r.n(o),u=function(e){return(0,s.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"064bc5fa04e70ee06b5bfcffdd0028ff",r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&api_key=").concat("064bc5fa04e70ee06b5bfcffdd0028ff"),n.next=4,fetch(r);case 4:if((t=n.sent).ok){n.next=7;break}throw new Error("Network response was not ok");case 7:return n.abrupt("return",t.json());case 8:case"end":return n.stop()}}),n)})))},a=r(184),f=function(e){var n=e.Id,r=(0,i.useQuery)({queryKey:["getReviews"],queryFn:u(n)}),t=r.data,s=r.isLoading,o=r.error;return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsxs)("p",{children:["Something went wrong: ",o.message]}),s&&(0,a.jsx)("p",{children:"Loading..."}),!s&&!o&&(0,a.jsxs)("ul",{children:[!t.results||0===t.results.length&&(0,a.jsx)("div",{children:"There is no reviews yet."}),t.results.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h3",{children:["Author: ",e.author]}),(0,a.jsx)("p",{children:e.content})]},e.id)}))]})]})},d=function(){var e=(0,t.UO)().idMovie;return(0,a.jsx)("main",{children:(0,a.jsx)(f,{Id:e})})}},5861:function(e,n,r){function t(e,n,r,t,i,s,o){try{var c=e[s](o),u=c.value}catch(a){return void r(a)}c.done?n(u):Promise.resolve(u).then(t,i)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(i,s){var o=e.apply(n,r);function c(e){t(o,i,s,c,u,"next",e)}function u(e){t(o,i,s,c,u,"throw",e)}c(void 0)}))}}r.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=907.3fdbb356.chunk.js.map