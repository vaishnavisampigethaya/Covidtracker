(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(6),d=c.n(r),i=(c(11),c(2)),a=c(3),j=c.n(a),h=c(4),l=(c(13),c(14),c(0));function o(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.statewise),console.log(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"container-fluid mt-5",children:[Object(l.jsx)("div",{className:"main-heading",children:Object(l.jsxs)("h1",{className:"mb-5 text-center",children:[Object(l.jsx)("span",{className:"font-weight-bold",children:" India "})," Covid-19 Dashboard"]})}),Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"State"}),Object(l.jsx)("th",{children:"Confirmed"}),Object(l.jsx)("th",{children:"Recovered"}),Object(l.jsx)("th",{children:"Deaths"}),Object(l.jsx)("th",{children:"Active"}),Object(l.jsx)("th",{children:"Deltaconfirmed"}),Object(l.jsx)("th",{children:"Deltarecovered"}),Object(l.jsx)("th",{children:"Deltadeaths"}),Object(l.jsx)("th",{children:"Lastupdatedtime"}),Object(l.jsx)("th",{children:"Migratedother"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.state}),Object(l.jsx)("td",{children:e.confirmed}),Object(l.jsx)("td",{children:e.recovered}),Object(l.jsx)("td",{children:e.deaths}),Object(l.jsx)("td",{children:e.active}),Object(l.jsx)("td",{children:e.deltaconfirmed}),Object(l.jsx)("td",{children:e.deltarecovered}),Object(l.jsx)("td",{children:e.deltadeaths}),Object(l.jsx)("td",{children:e.lastupdatedtime}),Object(l.jsx)("td",{children:e.migratedother})]},t)}))})]})})]})})}c(16);function b(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.Countries),console.log(c.Countries);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"container-fluid mt-5",children:[Object(l.jsx)("div",{className:"main-heading",children:Object(l.jsxs)("h1",{className:"mb-5 text-center",children:[Object(l.jsx)("span",{className:"font-weight-bold",children:" World"})," Covid-19 Dashboard"]})}),Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Country"}),Object(l.jsx)("th",{children:"Total Confirmed"}),Object(l.jsx)("th",{children:"Total Recovered"}),Object(l.jsx)("th",{children:"Total Deaths"}),Object(l.jsx)("th",{children:"New Confimed"}),Object(l.jsx)("th",{children:"New Deaths"}),Object(l.jsx)("th",{children:"New Recovered"}),Object(l.jsx)("th",{children:"Lastupdatedtime"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.Country}),Object(l.jsx)("td",{children:e.TotalConfirmed}),Object(l.jsx)("td",{children:e.TotalRecovered}),Object(l.jsx)("td",{children:e.TotalDeaths}),Object(l.jsx)("td",{children:e.NewConfirmed}),Object(l.jsx)("td",{children:e.NewDeaths}),Object(l.jsx)("td",{children:e.NewRecovered}),Object(l.jsx)("td",{children:e.Date})]},t)}))})]})})]})})}c(17);var O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(){s(!c)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"btn",children:[Object(l.jsx)("p",{children:"Click Here to get the data World or State "}),!c&&Object(l.jsx)("button",{onClick:r,children:"Contry"}),c&&Object(l.jsx)("button",{onClick:r,children:"State"})]}),!c&&Object(l.jsx)(o,{}),c&&Object(l.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,d=t.getTTFB;c(e),n(e),s(e),r(e),d(e)}))};d.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.6218cb86.chunk.js.map