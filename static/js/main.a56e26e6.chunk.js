(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{55:function(e,t,a){e.exports=a(72)},60:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),s=(a(60),a(61),a(62),a(81)),c=a(76),u=a(8),i=a(9),d=a(11),m=a(12),h=a(82),v=a(80),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{bg:"light",expand:"lg"},l.a.createElement(h.a.Brand,{href:"/home"},l.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/sports-and-games-doodles-vol-02/32/sudoku-puzzle-game-math-riddle-512.png",alt:"sudoku icon",height:"30px",className:"mr-3"}),l.a.createElement("strong",null,"SUDOKU SOLVER")),l.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(v.a.Link,{href:"/Sudoku-Solver/home"},"Home"),l.a.createElement(v.a.Link,{href:"/Sudoku-Solver/about"},"About"))))}}]),a}(l.a.Component),E=a(15),b=a(75),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{variant:"outline-secondary",id:this.props.id,disabled:this.props.disabled,onClick:this.props.onClick,className:"square"},this.props.value)}}]),a}(l.a.Component),k=a(78),y=a(83),w=a(79),S=a(77),C=a(54);function O(e){return!!function(e){for(var t=[{},{},{},{},{},{},{},{},{}],a=[{},{},{},{},{},{},{},{},{}],n=[{},{},{},{},{},{},{},{},{}],l=T/3,r=0;r<T;r++)for(var o=0;o<T;o++){var s=e[r][o];if(null!==s){var c=Math.floor(o/l)+Math.floor(r/l)*l;if(t[c][s]||a[o][s]||n[r][s])return!1;t[c][s]=a[o][s]=n[r][s]=!0}}return!0}(e)&&(function e(t,a,n){if(g(a))return;var l=n[t],r=function(e,t){var a=e.row,n=e.col,l=new Set([1,2,3,4,5,6,7,8,9]);l=new Set(Object(C.a)(l).filter((function(e){return t[a].indexOf(e)<0})));for(var r=0;r<T;r++){var o=t[r][n];null!==o&&l.has(o)&&l.delete(o)}for(var s=T/3,c=Math.floor(a/s)*s,u=Math.floor(n/s)*s,i=c;i<c+s;i++)for(var d=u;d<u+s;d++)null!==(o=t[i][d])&&l.has(o)&&l.delete(o);return Array.from(l)}(l,a),o=l.row,s=l.col;r.forEach((function(l){g(a)||(a[o][s]=l),e(t+1,a,n),g(a)||(a[o][s]=null)}))}(0,e,function(e){for(var t=[],a=0;a<T;a++)for(var n=0;n<T;n++)null===e[a][n]&&t.push(new j(a,n));return t}(e)),!0)}function g(e){for(var t=0;t<T;t++)if(-1!==e[t].indexOf(null))return!1;return!0}var j=function e(t,a){Object(u.a)(this,e),this.row=t,this.col=a},T=9,N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={squares:Array(T).fill(null).map((function(){return Array(T).fill(null)})),selectedCell:[],showNumPad:!1,showToast:!1,toastBody:"",solved:!1},n.resetBoard=n.resetBoard.bind(Object(E.a)(n)),n.solveAndUpdateBoard=n.solveAndUpdateBoard.bind(Object(E.a)(n)),n.numPad=n.numPad.bind(Object(E.a)(n)),n.hideModal=n.hideModal.bind(Object(E.a)(n)),n.showToastSuccess=n.showToastSuccess.bind(Object(E.a)(n)),n.showToastFail=n.showToastFail.bind(Object(E.a)(n)),n.hideToast=n.hideToast.bind(Object(E.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(e,t){this.setState({showNumPad:!0,selectedCell:[e,t]})}},{key:"buildBoard",value:function(){var e=this;return[0,1,2,3,4,5,6,7,8].map((function(t){return e.buildRow(t)}))}},{key:"buildRow",value:function(e){var t=this,a=[0,1,2,3,4,5,6,7,8].map((function(a){return t.renderSquare(e,a)}));return l.a.createElement("div",{key:"row-"+e.toString(),className:"board-row"},a)}},{key:"resetBoard",value:function(){var e=Array(T).fill(null).map((function(){return Array(T).fill(null)}));this.setState({squares:e,solved:!1})}},{key:"renderSquare",value:function(e,t){var a=this;return l.a.createElement(p,{id:"square-"+e.toString()+"-"+t.toString(),key:"square-"+e.toString()+"-"+t.toString(),disabled:this.state.solved,value:this.state.squares[e][t],onClick:function(){return a.handleClick(e,t)}})}},{key:"selectCellValue",value:function(e){var t=this.state.squares.slice(),a=this.state.selectedCell.slice();t[a[0]][a[1]]=e,this.setState({squares:t,showNumPad:!1})}},{key:"hideModal",value:function(){this.setState({showNumPad:!1})}},{key:"numPad",value:function(){var e=this;return l.a.createElement(k.a,{show:this.state.showNumPad,onHide:this.hideModal,centered:!0},l.a.createElement(k.a.Body,null,l.a.createElement("div",{className:"board-row"},l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(1)}},"1")),l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(2)}},"2")),l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(3)}},"3"))),l.a.createElement("div",{className:"board-row"},l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(4)}},"4")),l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(5)}},"5")),l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(6)}},"6"))),l.a.createElement("div",{className:"board-row"},l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(7)}},"7")),l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(8)}},"8")),l.a.createElement(y.a,null,l.a.createElement(b.a,{variant:"outline-success",onClick:function(){return e.selectCellValue(9)}},"9"))),l.a.createElement("div",{className:"board-row mt-2"},l.a.createElement(b.a,{variant:"outline-danger",onClick:function(){return e.selectCellValue(null)}},"Clear"))))}},{key:"solveAndUpdateBoard",value:function(){var e=this.state.squares.slice(),t=performance.now();if(O(e)){var a=performance.now();this.setState({squares:e,solved:!0}),this.showToastSuccess((a-t).toFixed(3))}else this.showToastFail()}},{key:"showToastSuccess",value:function(e){var t=l.a.createElement("div",null,l.a.createElement("strong",{style:{color:"green"}},"SUCCESS! "),"It took ",e," milliseconds to solve your puzzle!");this.setState({showToast:!0,toastBody:t})}},{key:"showToastFail",value:function(){var e=l.a.createElement("div",null,l.a.createElement("strong",{style:{color:"red"}},"ERROR: "),"Invalid sudoku board! Please try again.");this.setState({showToast:!0,toastBody:e})}},{key:"hideToast",value:function(){this.setState({showToast:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,this.buildBoard(),l.a.createElement(this.numPad,null)),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(w.a,{style:{position:"absolute",bottom:"60px",right:"0"},className:"mr-3",onClose:this.hideToast,show:this.state.showToast,delay:4e3,autohide:!0},l.a.createElement(w.a.Body,null,this.state.toastBody))),l.a.createElement(S.a,{className:"button-row mb-4 mt-4"},l.a.createElement(b.a,{variant:"danger",className:"mr-5",onClick:this.resetBoard},"Reset"),l.a.createElement(b.a,{variant:"success",disabled:this.state.solved,onClick:this.solveAndUpdateBoard},"Solve!")))}}]),a}(l.a.Component),B=a(50),q=a(51),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{expand:"lg",variant:"light",bg:"light",fixed:"bottom"},l.a.createElement(h.a.Collapse,{className:"justify-content-center"},l.a.createElement(h.a.Text,null,"Made with \u2665 by Heidi Tran and Sammy Tran"),l.a.createElement(v.a.Link,{href:"https://github.com/HeidiTran/Sudoku-Solver",target:"_blank"},l.a.createElement(B.a,{icon:q.a,size:"lg",color:"grey"}))))}}]),a}(l.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center mb-5"},"Let the power of AI solve your problems!"),l.a.createElement(c.a,null,l.a.createElement(N,null)),l.a.createElement(x,null))}}]),a}(l.a.Component),V=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"THIS IS ABOUT COMPONENT"),l.a.createElement(x,null))}}]),a}(l.a.Component),M=function(){return l.a.createElement(s.c,null,l.a.createElement(f,null),l.a.createElement(c.a,{fluid:!0,className:"mt-3"},l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/Sudoku-Solver/home",component:A}),l.a.createElement(s.b,{path:"/Sudoku-Solver/about",component:V}),l.a.createElement(s.a,{from:"/Sudoku-Solver",to:"/Sudoku-Solver/home"}))))};var P=function(){return l.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a56e26e6.chunk.js.map