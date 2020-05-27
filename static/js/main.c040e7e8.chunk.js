(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(27)},,,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(3),c=t.n(r),s=(t(15),t(1)),o=t(4),l=t(5),m=t(7),u=t(6),d=t(8),h=(t(17),t(19),function(e){var n=e.type,t=e.length,a=e.onUpdateLength,r=e.isRunning;return i.a.createElement("div",{className:"length-ctrl"},i.a.createElement("div",{id:"".concat(n,"-label"),className:"length-label"},"".concat(n," Length")),i.a.createElement("div",{className:"length-buttons"},i.a.createElement("button",{className:"length-btn-inc",id:"".concat(n,"-increment"),onClick:function(){return a(n,"inc")},disabled:!!(t>=60||r)},i.a.createElement("i",{className:"icon ion-md-arrow-dropup"})),i.a.createElement("div",{id:"".concat(n,"-length"),className:"length"},t),i.a.createElement("button",{className:"length-btn-dec",id:"".concat(n,"-decrement"),onClick:function(){return a(n,"dec")},disabled:!!(t<=1||r)},i.a.createElement("i",{className:"icon ion-md-arrow-dropdown"}))))}),p=(t(21),t(23),function(e){var n=e.isRunning;return i.a.createElement("div",{className:"arc arc-1 ".concat(!n&&"pause-anim")},i.a.createElement("div",{className:"arc arc-2 ".concat(!n&&"pause-anim")},i.a.createElement("div",{className:"arc arc-3 ".concat(!n&&"pause-anim")},i.a.createElement("div",{className:"arc arc-4 ".concat(!n&&"pause-anim")}))))}),f=function(e){var n=e.timerType,t=e.timer,a=e.isRunning,r=Math.floor(t/60),c=t%60,s="".concat(r<10?"0":"").concat(r,":").concat(c<10?"0":"").concat(c),o={shadow1:{boxShadow:"0 0 5rem rgba(255, 0, 0, 0.7)"},shadow2:{boxShadow:"0 0 4rem 2rem rgba(255, 0, 0, 0.7), inset 0 0 3px 8px rgba(255, 0, 0, 0.7)"},color:{color:"red"}};return i.a.createElement("div",{className:"timer-container"},i.a.createElement("div",{id:"timer-label",className:"timer-label"},i.a.createElement("i",{className:"icon ion-ios-timer"})," ",n),i.a.createElement("div",{className:"timer-box",style:t<60?o.shadow1:{}},i.a.createElement(p,{isRunning:a}),i.a.createElement("div",{className:"timer",style:t<60?o.shadow2:{}},i.a.createElement("div",{id:"time-left",className:"time-left-label",style:t<60?o.color:{}},s))))},g=(t(25),function(e){var n=e.onCountDown,t=e.isRunning,a=e.onResetTimer;return i.a.createElement("div",{className:"timer-controller"},i.a.createElement("div",{className:"btn-box btn-box-playstop"},i.a.createElement("span",{className:"curve-line"}),i.a.createElement("button",{id:"start_stop",onClick:function(){return n()}},t?i.a.createElement("i",{className:"icon ion-md-pause"}):i.a.createElement("i",{className:"icon ion-md-play"})),i.a.createElement("span",{className:"short-line"})),i.a.createElement("div",{className:"btn-box"},i.a.createElement("span",null),i.a.createElement("button",{id:"reset",onClick:function(){return a()}},i.a.createElement("i",{className:"icon ion-md-sync"})),i.a.createElement("span",{className:"short-line"})))}),v=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={sessionTime:25,breakTime:5,timer:1500,timerType:"session",isRunning:!1},t.audioRef=i.a.createRef(),t.handleUpdateLength=function(e,n){var a="session"===e?"sessionTime":"breakTime";t.state.isRunning||("inc"===n?t.setState(function(e){return Object(s.a)({},a,e[a]+1)}):"dec"===n&&t.setState(function(e){return Object(s.a)({},a,e[a]-1)}),"session"===e&&t.handleUpdateTimer())},t.handleCountDown=function(){t.state.isRunning?(t.setState(function(e){return{isRunning:!e.isRunning}}),clearInterval(t.countDown)):(t.setState(function(e){return{isRunning:!e.isRunning}}),t.startCountDown())},t.handleReset=function(){clearInterval(t.countDown),t.audioRef.current.currentTime=0,t.audioRef.current.pause(),t.setState(function(){return{sessionTime:25,breakTime:5,timer:1500,timerType:"session",isRunning:!1}})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"handleUpdateTimer",value:function(){this.setState(function(e){return{timer:60*e.sessionTime}})}},{key:"changeTimer",value:function(){this.setState(function(e){var n=e.timerType,t=e.breakTime,a=e.sessionTime;return"session"===n?{timer:60*t,timerType:"break"}:{timer:60*a,timerType:"session"}}),clearInterval(this.countDown),this.startCountDown()}},{key:"timeCheck",value:function(){this.state.timer<0&&(this.audioRef.current.play(),this.changeTimer())}},{key:"startCountDown",value:function(){var e=this;this.countDown=setInterval(function(){e.setState(function(e){return{timer:e.timer-1}}),e.timeCheck()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.countDown)}},{key:"render",value:function(){var e=this.state,n=e.sessionTime,t=e.breakTime,a=e.timer,r=e.timerType,c=e.isRunning;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",{className:"app-title"},"Pomodoro Clock"),i.a.createElement("div",{className:"length-ctrl-box"},i.a.createElement(h,{type:"session",length:n,onUpdateLength:this.handleUpdateLength,isRunning:c}),i.a.createElement(h,{type:"break",length:t,onUpdateLength:this.handleUpdateLength,isRunning:c})),i.a.createElement("div",{className:"time"},i.a.createElement(f,{timerType:r,timer:a,isRunning:c}),i.a.createElement(g,{onCountDown:this.handleCountDown,isRunning:c,onResetTimer:this.handleReset})),i.a.createElement("audio",{id:"beep",src:"https://res.cloudinary.com/dpc8imgk1/video/upload/v1547455581/alarm.mp3",type:"audio/mpeg",preload:"auto",ref:this.audioRef}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.c040e7e8.chunk.js.map