(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,n,t){e.exports=t(78)},78:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(14),o=t.n(i),c=t(5),l=t(2),u=t(3);function d(){var e=Object(l.a)(["\n/* @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap'); */\n* {\n  margin: 0;\n  padding:0;\n  box-sizing: border-box;\n\n  a {\n    text-decoration: none;\n    color: #000;\n  }\n\n  li {\n    list-style-type: none;\n  }  \n\n  button {\n    background-color: white;\n  }\n\n  button:hover {\n    cursor: pointer;\n  }\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 25px;\n\n  @media (max-width: 768px) {\n    font-size: 16px;\n  }\n}\n\ninput, textarea, button {\n  font-family: inherit;\n  font-size: inherit;\n}\n"]);return d=function(){return e},e}var m,s=Object(u.a)(d()),p=t(16),f=t(44),b=t(52),h=t(23);!function(e){e.addTasks="ADD_TASKS",e.addTask="ADD_TASK",e.editTask="EDIT_TASK",e.deleteTask="DELETE_TASK",e.completeTask="COMPLETE_TASK",e.showModal="SHOW_MODAL",e.hideModal="HIDE_MODAL"}(m||(m={}));var E;!function(e){e.initial="",e.createTask="CREATE_TASK",e.deleteTask="DELETE_TASK"}(E||(E={}));var g={modalType:E.initial,modalProps:{}},x=Object(p.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.addTask:return[].concat(Object(h.a)(e),[n.payload]);case m.addTasks:return[].concat(Object(h.a)(e),Object(h.a)(n.payload));case m.completeTask:return e.map(function(e){return e.id===n.payload?Object(b.a)({},e,{completed:!e.completed}):e});case m.editTask:return e.map(function(e){return e.id===n.payload.id?n.payload:e});case m.deleteTask:return e.filter(function(e){return e.id!==n.payload});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.showModal:return n.payload;case m.hideModal:return g;default:return e}}}),v=Object(p.createStore)(x,Object(f.composeWithDevTools)()),k=t(22),y=t(45),w=t.n(y),T=t(46),O=t.n(T);function j(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: 10px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return j=function(){return e},e}function C(){var e=Object(l.a)(["\n  border: 2px solid black;\n  padding: 6px 12px;\n  min-width: 100px;\n  font-size: 1.5rem;\n  :hover {\n    background-color: #2e93e8;\n  }\n  :disabled {\n    border: 2px solid gray;\n    :hover {\n      background-color: white;\n      cursor: default;\n    }\n  }\n"]);return C=function(){return e},e}function D(){var e=Object(l.a)(["\n  margin: 15px 0;\n  text-align: center;\n"]);return D=function(){return e},e}function S(){var e=Object(l.a)(["\n  max-width: 90%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return S=function(){return e},e}function A(){var e=Object(l.a)(["\n  background-color: #fff;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 580px;\n  height: 520px;\n\n  transform: translate(-50%, -50%);\n  border: 2px solid #2e93e8;\n\n  @media (max-width: 768px) {\n    width: 280px;\n    height: 400px;\n  }\n"]);return A=function(){return e},e}var F=Object(u.b)(O.a)(A()),M=u.b.div(S()),L=u.b.h2(D()),P=u.b.button(C()),z=u.b.div(j()),_=function(e){var n=e.modalType,t=e.modalProps;return{type:m.showModal,payload:{modalType:n,modalProps:t}}},I=document.getElementById("root");if(null===I)throw new Error("Element was not found");F.setAppElement(I);var K=function(e){var n=e.heading,t=e.confirmText,a=e.isDisabled,i=e.children,o=e.hideModal,c=e.onSubmit;return r.a.createElement(F,{isOpen:!0,onRequestClose:o},r.a.createElement(M,null,r.a.createElement(L,null,n),i,r.a.createElement(z,null,r.a.createElement(P,{onClick:o},"Cancel"),r.a.createElement(P,{onClick:function(){c(),o()},disabled:a},t))))};K.defaultProps={isDisabled:!1};var H,J=Object(c.b)(null,{hideModal:function(){return{type:m.hideModal}}})(K),R=t(10),N=t(11);!function(e){e.low="Low",e.medium="Medium",e.high="High"}(H||(H={}));var B=function(e){switch(e.priority){case H.low:return r.a.createElement(R.a,{icon:N.b});case H.medium:return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{icon:N.b}),r.a.createElement(R.a,{icon:N.b}));case H.high:return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{icon:N.b}),r.a.createElement(R.a,{icon:N.b}),r.a.createElement(R.a,{icon:N.b}));default:return r.a.createElement(r.a.Fragment,null)}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return t<10&&(t="0"+t),a<10&&(a="0"+a),"".concat(n,"-").concat(t,"-").concat(a)};function q(){var e=Object(l.a)(["\n  margin: 10px;\n  ",":checked + "," svg {\n    color: #2e93e8;\n  }\n"]);return q=function(){return e},e}function Y(){var e=Object(l.a)(["\n  width: 80%;\n  border: 2px solid black;\n  height: 150px;\n  padding: 10px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return Y=function(){return e},e}function G(){var e=Object(l.a)(["\n  width: 50%;\n  border: 2px solid black;\n  margin: 10px;\n  padding: 5px 15px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return G=function(){return e},e}function Q(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Q=function(){return e},e}function U(){var e=Object(l.a)(["\n  :hover {\n    cursor: pointer;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(l.a)(["\n  display: none;\n"]);return V=function(){return e},e}var X=u.b.input(V()),Z=u.b.label(U()),$=u.b.div(Q()),ee=u.b.input(G()),ne=u.b.textarea(Y()),te=u.b.div(q(),X,Z),ae=function(e){var n=e.taskInput,t=e.handleTaskTextChange,a=e.priority,i=e.handlePriorityChange,o=e.date,c=e.handleDateChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement(te,null,r.a.createElement(X,{type:"radio",name:"priority",id:H.low,value:H.low,checked:H.low===a,onChange:i}),r.a.createElement(Z,{htmlFor:H.low},r.a.createElement(B,{priority:H.low}))),r.a.createElement(te,null,r.a.createElement(X,{type:"radio",name:"priority",id:H.medium,value:H.medium,checked:H.medium===a,onChange:i}),r.a.createElement(Z,{htmlFor:H.medium},r.a.createElement(B,{priority:H.medium}))),r.a.createElement(te,null,r.a.createElement(X,{type:"radio",name:"priority",id:H.high,value:H.high,checked:H.high===a,onChange:i}),r.a.createElement(Z,{htmlFor:H.high},r.a.createElement(B,{priority:H.high})))),r.a.createElement(ee,{type:"date",onChange:c,value:o,min:W()}),r.a.createElement(ne,{value:n,onChange:t}))},re={task:{id:"",description:"",date:new Date,priority:H.low,completed:!1}},ie=function(e){var n=e.task,t=e.addTask,i=e.editTask,o=W(n.date),c=Object(a.useState)(n.description),l=Object(k.a)(c,2),u=l[0],d=l[1],m=Object(a.useState)(n.priority),s=Object(k.a)(m,2),p=s[0],f=s[1],b=Object(a.useState)(o),h=Object(k.a)(b,2),E=h[0],g=h[1],x=!!n.id,v=!u.length;return r.a.createElement(J,{heading:x?"Edit Task":"Create Task",confirmText:x?"Edit":"Create",onSubmit:function(){var e={id:n.id||w()(),description:u,date:new Date(E),priority:p,completed:n.completed};x?i(e):t(e)},isDisabled:v},r.a.createElement(ae,{taskInput:u,handleTaskTextChange:function(e){var n=e.currentTarget.value;if(!function(e){for(var n=e.split(/\s+/),t=0;t<n.length;t++)if(n[t].length>=18)return!1;return!0}(n))return alert("Maximum length of the word");d(n)},priority:p,handlePriorityChange:function(e){f(e.currentTarget.value)},date:E,handleDateChange:function(e){g(e.currentTarget.value)}}))};ie.defaultProps=re;var oe=Object(c.b)(null,{addTask:function(e){return{type:m.addTask,payload:e}},editTask:function(e){return{type:m.editTask,payload:e}}})(ie),ce=Object(c.b)(null,{deleteTask:function(e){return{type:m.deleteTask,payload:e}}})(function(e){var n=e.deleteTask,t=e.task;return r.a.createElement(J,{heading:"Do you want to delete task?",confirmText:"Delete",onSubmit:function(){n(t.id)}},r.a.createElement("p",null," ".concat(t.description)))}),le=Object(c.b)(function(e){return{modal:e.modal}})(function(e){var n=e.modal,t=n.modalType,a=n.modalProps;switch(t){case E.createTask:return r.a.createElement(oe,{task:a.task});case E.deleteTask:return r.a.createElement(ce,{task:a.task})}return null}),ue=t(17),de=t(25);function me(){var e=Object(l.a)([""]);return me=function(){return e},e}function se(){var e=Object(l.a)(["\n  font-size: ",";\n\n  @media (max-width: 768px) {\n    font-size: ",";\n  }\n"]);return se=function(){return e},e}function pe(){var e=Object(l.a)(["\n  border: none;\n  outline: 0;\n  :hover {\n    color: #2e93e8;\n  }\n"]);return pe=function(){return e},e}var fe,be=u.b.button(pe()),he=u.b.span(se(),function(e){return!0===e.big?"50px":"35px"},function(e){return!0===e.big?"40px":"25px"}),Ee=Object(u.b)(R.a)(me()),ge=function(e){var n=e.handleAction,t=e.icon,a=e.big;return r.a.createElement(be,{onClick:function(){n()}},r.a.createElement(he,{big:a},r.a.createElement(Ee,{icon:t})))},xe=Object(c.b)(null,{showModal:_})(function(e){return r.a.createElement(ge,{icon:de.b,handleAction:function(){e.showModal({modalType:E.createTask,modalProps:{}})},big:!0})});function ve(){var e=Object(l.a)(["\n  .active > "," {\n    color: #2e93e8;\n  }\n"]);return ve=function(){return e},e}function ke(){var e=Object(l.a)(["\n  margin-right: 15px;\n"]);return ke=function(){return e},e}function ye(){var e=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  padding: 5px 0 30px;\n  margin: 0 auto;\n  font-size: 34px;\n  background-color: white;\n\n  @media (max-width: 768px) {\n    padding: 8px;\n    font-size: 24px;\n  }\n"]);return ye=function(){return e},e}!function(e){e.today="/",e.future="/future",e.past="/history"}(fe||(fe={}));var we=u.b.nav(ye()),Te=u.b.span(ke()),Oe=u.b.div(ve(),Te),je=function(){return r.a.createElement(we,null,r.a.createElement(Oe,null,r.a.createElement(ue.b,{to:fe.today,exact:!0},r.a.createElement(Te,null,"Today")),r.a.createElement(ue.b,{to:fe.future},r.a.createElement(Te,null,"Future")),r.a.createElement(ue.b,{to:fe.past},r.a.createElement(Te,null,"History"))),r.a.createElement(xe,null))};function Ce(){var e=Object(l.a)(["\n  display: block;\n  border: 1px solid black;\n  padding: 5px 15px;\n  width: 350px;\n  margin: 10px 0;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return Ce=function(){return e},e}var De=u.b.input(Ce()),Se=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{value:n,onChange:t,placeholder:"search.."}))},Ae=function(e){var n=e.renderChildren,t=Object(a.useState)(""),i=Object(k.a)(t,2),o=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{filter:o,handleFilterChange:function(e){c(e.currentTarget.value)}}),n({filter:o}))},Fe=t(12),Me=t(80),Le=t(81);function Pe(){var e=Object(l.a)(["\n  flex-shrink: 0;\n  button {\n    margin-right: 12px;\n    @media (max-width: 768px) {\n      margin-right: 8px;\n    }\n  }\n"]);return Pe=function(){return e},e}function ze(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return ze=function(){return e},e}function _e(){var e=Object(l.a)(["\n  margin: 0 15px;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Ie=function(){return e},e}function Ke(){var e=Object(l.a)(["\n  width: 100px;\n  @media (max-width: 768px) {\n    width: 70px;\n  }\n"]);return Ke=function(){return e},e}function He(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  @media (max-width: 768px) {\n    margin-bottom: 10px;\n  }\n"]);return He=function(){return e},e}function Je(){var e=Object(l.a)(["\n  border: solid black 2px;\n  margin-bottom: 10px;\n  padding: 15px;\n  transition: opacity linear 300ms;\n\n  &.task-item-enter {\n    opacity: 0;\n  }\n  &.task-item-enter-active {\n    opacity: 1;\n  }\n  &.task-item-exit {\n    opacity: 1;\n  }\n  &.task-item-exit-active {\n    opacity: 0;\n  }\n\n  @media (max-width: 768px) {\n    padding: 10px;\n  }\n"]);return Je=function(){return e},e}var Re=u.b.li(Je()),Ne=u.b.div(He()),Be=u.b.div(Ke()),We=u.b.div(Ie()),qe=u.b.p(_e()),Ye=u.b.div(ze()),Ge=u.b.div(Pe()),Qe=function(e){var n=e.tasks,t=e.renderDelete,a=e.renderEdit,i=e.renderComplete,o=n.map(function(e){return r.a.createElement(Me.a,{timeout:300,key:e.id,classNames:"task-item"},r.a.createElement(Re,{key:e.id},r.a.createElement(Ne,null,e.date.toLocaleDateString(),r.a.createElement(Be,null,r.a.createElement(B,{priority:e.priority}))),r.a.createElement(We,null,r.a.createElement(Ye,null,t&&t(e),r.a.createElement(qe,null,e.description)),r.a.createElement(Ge,null,a&&a(e),i&&i(e)))))});return r.a.createElement("ul",null,r.a.createElement(Le.a,null,o))},Ue=function(e){var n=e.tasks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Completed Tasks"),r.a.createElement(Qe,{tasks:n,renderAction:function(e){return r.a.createElement(r.a.Fragment,null)}}))},Ve=Object(c.b)(null,{completeTask:function(e){return{type:m.completeTask,payload:e}},showModal:_})(function(e){var n=e.tasks,t=e.completeTask,a=e.showModal;return r.a.createElement(Qe,{tasks:n,renderDelete:function(e){return r.a.createElement(ge,{handleAction:function(){a({modalType:E.deleteTask,modalProps:{task:e}})},icon:de.c})},renderEdit:function(e){return r.a.createElement(ge,{handleAction:function(){a({modalType:E.createTask,modalProps:{task:e}})},icon:N.a})},renderComplete:function(e){return r.a.createElement(ge,{handleAction:function(){t(e.id)},icon:de.a})}})}),Xe=Object(c.b)(function(e,n){var t,a,r=n.filter;return r?{tasks:(t=e.tasks,a=r,t.filter(function(e){return e.description.toLocaleLowerCase().includes(a.toLowerCase())}))}:{tasks:e.tasks}},{addTasks:function(e){return{type:m.addTasks,payload:e}}})(function(e){var n=e.tasks,t=e.addTasks,i=Object(a.useRef)(!0);Object(a.useEffect)(function(){var e=function(){var e=localStorage.getItem("tasks"),n=[];return e&&(n=JSON.parse(e)).forEach(function(e){e.date=new Date(e.date)}),n}();t(e)},[t]),Object(a.useEffect)(function(){i.current?i.current=!1:localStorage.setItem("tasks",JSON.stringify(n))},[n]);var o=function(e){var n={completed:[],today:[],future:[]};return e.forEach(function(e){var t=new Date,a=new Date(e.date);e.completed?n.completed.push(e):a<=t?n.today.push(e):n.future.push(e)}),n}(function(e){return e.sort(function(e,n){return e.date.getTime()-n.date.getTime()}),e}(Object(h.a)(n)));return n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe.c,null,r.a.createElement(Fe.a,{exact:!0,path:fe.today,render:function(){return r.a.createElement(Ve,{tasks:o.today})}}),r.a.createElement(Fe.a,{path:fe.future,render:function(){return r.a.createElement("span",null,r.a.createElement(Ve,{tasks:o.future}))}}),r.a.createElement(Fe.a,{path:fe.past,render:function(){return r.a.createElement(Ue,{tasks:o.completed})}}))):r.a.createElement(r.a.Fragment,null)});function Ze(){var e=Object(l.a)(["\n  margin-top: 95px;\n  @media (max-width: 768px) {\n    margin-top: 64px;\n  }\n"]);return Ze=function(){return e},e}function $e(){var e=Object(l.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]);return $e=function(){return e},e}var en=u.b.div($e()),nn=u.b.main(Ze());o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(c.a,{store:v},r.a.createElement(le,null),r.a.createElement(function(){return r.a.createElement(ue.a,null,r.a.createElement(en,null,r.a.createElement(je,null),r.a.createElement(nn,null,r.a.createElement(Ae,{renderChildren:function(e){return r.a.createElement(Xe,e)}}))))},null))),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.1e27dc4a.chunk.js.map