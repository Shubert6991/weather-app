(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),r=n.n(i),s=(n(25),n(14)),o=n.n(s),j=n(16),h=n(11),d=(n(27),n(28),n(19)),l=n(20),b=n(17),u=n(15),O=n(10),x=n(18),m=n(2),p=function(e){var t=e.weatherData;console.log(t);var n=new Date,c=Date.now(),a=new Date(c),i=n.toLocaleTimeString("en-US");return Object(m.jsx)(x.a,{children:Object(m.jsx)(u.a,{className:"main-card",bg:"ligth",children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsxs)("section",{children:[Object(m.jsx)("img",{src:"".concat("https://openweathermap.org/img/w","n/").concat(t.weather[0].icon,"@2x.png")}),Object(m.jsx)("h2",{children:t.name}),Object(m.jsx)("h3",{children:t.weather[0].main}),Object(m.jsxs)("h1",{children:[t.main.temp," \xb0C"]}),Object(m.jsx)("h3",{children:"".concat(a.toDateString())}),Object(m.jsx)("h3",{children:i})]}),Object(m.jsx)(O.a,{children:Object(m.jsxs)(O.a.Item,{eventKey:"0",children:[Object(m.jsx)(O.a.Header,{children:"More Info"}),Object(m.jsxs)(O.a.Body,{children:[Object(m.jsxs)("h4",{children:["Feels Like: ",t.main.feels_like," \xb0C"]}),Object(m.jsxs)("h4",{children:["Max: ",t.main.temp_max," \xb0C"]}),Object(m.jsxs)("h4",{children:["Min: ",t.main.temp_min," \xb0C"]}),Object(m.jsxs)("h4",{children:["Humidity: ",t.main.humidity,"%"]})]})]})})]})})})};var f=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(h.a)(i,2),s=r[0],u=r[1],O=Object(c.useState)([]),x=Object(h.a)(O,2),f=x[0],g=x[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){a(e.coords.latitude),u(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(n,"&lon=").concat(s,"&units=metric&APPID=").concat("d9ad1a0b1076684ff0caf7df5288848c")).then((function(e){return e.json()})).then((function(e){g(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,s]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d.a,{children:"undefined"!=typeof f.main?Object(m.jsx)(p,{weatherData:f}):Object(m.jsx)(l.a,{animation:"border",role:"status",children:Object(m.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),Object(m.jsx)(b.a,{type:"circle",bg:!0})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.02b149af.chunk.js.map