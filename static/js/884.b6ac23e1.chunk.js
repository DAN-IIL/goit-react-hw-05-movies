"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(n,t,e){e.r(t);var r=e(439),o=e(689),c=e(791),i=e(652),a=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1],h=(0,o.UO)().movieId;return(0,c.useEffect)((function(){(0,i.CL)(h).then((function(n){var t=n.cast.filter((function(n){return"Acting"===n.known_for_department}));u(t)})).catch((function(n){return console.error("error:"+n)}))}),[h]),(0,a.jsxs)(a.Fragment,{children:[e.length>0&&(0,a.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,o=n.character,c=e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/100x150";return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{width:"100",src:"".concat(c),alt:"".concat(r,"_").concat(t)}),(0,a.jsx)("p",{children:r}),(0,a.jsxs)("p",{children:["Character: ",o]})]},t)}))}),0===e.length&&(0,a.jsx)("p",{children:"We don't have any credits for this movie"})]})}},652:function(n,t,e){e.d(t,{Ai:function(){return i},CL:function(){return u},DC:function(){return c},Mc:function(){return a},wH:function(){return h}});var r="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg"}},c=function(n){var t="".concat(r,"trending/movie/day?language=en-US");if(0!==n.length)return fetch(t,o).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},i=function(n){var t="".concat(r,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");if(n)return fetch(t,o).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},a=function(n){var t="".concat(r,"movie/").concat(n,"?language=en-US");if(n&&""!==n)return fetch(t,o).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},u=function(n){var t="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US");return fetch(t,o).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},h=function(n){var t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1");return fetch(t,o).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))}}}]);
//# sourceMappingURL=884.b6ac23e1.chunk.js.map