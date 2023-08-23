/*! For license information please see pages-MetaBall-MetaBall-stories.bf0a731d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_canvas=self.webpackChunkreact_canvas||[]).push([[653],{"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}__webpack_require__.d(__webpack_exports__,{Z:function(){return _classCallCheck}})},"./node_modules/@babel/runtime/helpers/esm/createClass.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _createClass}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var toPropertyKey=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,toPropertyKey.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}})},"./src/pages/MetaBall/MetaBall.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MetaBall1:function(){return MetaBall1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return MetaBall_stories}});var _MetaBall1$parameters,_MetaBall1$parameters2,_MetaBall1$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),GetMetaBall=function(){function GetMetaBall(p1,p2,distance){(0,classCallCheck.Z)(this,GetMetaBall),this.p1=void 0,this.p2=void 0,this.radius1=void 0,this.radius2=void 0,this.distance=void 0,this.p1=p1,this.p2=p2,this.distance=distance,this.radius1=p1.radius,this.radius2=p2.radius}return(0,createClass.Z)(GetMetaBall,[{key:"init",value:function init(ctx,fillStyle){var angle1,angle2,p1=this.p1,p2=this.p2,distance=this.distance;if(distance>200||distance<=Math.abs(p1.radius-p2.radius))return null;distance<p1.radius+p2.radius?(angle1=Math.acos((p1.radius*p1.radius+distance*distance-p2.radius*p2.radius)/(2*p1.radius*distance)),angle2=Math.acos((p2.radius*p2.radius+distance*distance-p1.radius*p1.radius)/(2*p2.radius*distance))):(angle1=0,angle2=0);var v=.5,angle=Math.atan2(p2.y-p1.y,p2.x-p1.x),angleofDistance=Math.acos((p1.radius-p2.radius)/distance),a1=angle+angle1+(angleofDistance-angle1)*v,a2=angle-angle1-(angleofDistance-angle1)*v,a3=angle+Math.PI-angle2-(Math.PI-angleofDistance-angle2)*v,a4=angle-Math.PI+angle2+(Math.PI-angleofDistance-angle2)*v,edge1={x:p1.x+Math.cos(a1)*p1.radius,y:p1.y+Math.sin(a1)*p1.radius},edge2={x:p1.x+Math.cos(a2)*p1.radius,y:p1.y+Math.sin(a2)*p1.radius},edge3={x:p2.x+Math.cos(a3)*p2.radius,y:p2.y+Math.sin(a3)*p2.radius},edge4={x:p2.x+Math.cos(a4)*p2.radius,y:p2.y+Math.sin(a4)*p2.radius},totalRadius=p1.radius+p2.radius,edgeDx=edge1.x-edge3.x,edgeDy=edge1.y-edge3.y,edgeDistance=Math.sqrt(edgeDx*edgeDx+edgeDy*edgeDy),d=Math.min(1.15,edgeDistance/totalRadius),HALF=Math.PI/2;this.radius1*=d,this.radius2*=d;var edge5={x:edge1.x+Math.cos(a1-HALF)*this.radius1,y:edge1.y+Math.sin(a1-HALF)*this.radius1},edge6={x:edge3.x+Math.cos(HALF+a3)*this.radius2,y:edge3.y+Math.sin(HALF+a3)*this.radius2},edge7={x:edge4.x+Math.cos(a4-HALF)*this.radius2,y:edge4.y+Math.sin(a4-HALF)*this.radius2},edge8={x:edge2.x+Math.cos(a2+HALF)*this.radius1,y:edge2.y+Math.sin(a2+HALF)*this.radius1};ctx.save(),ctx.fillStyle=fillStyle,ctx.beginPath(),ctx.moveTo(edge1.x,edge1.y),ctx.bezierCurveTo(edge5.x,edge5.y,edge6.x,edge6.y,edge3.x,edge3.y),ctx.lineTo(edge4.x,edge4.y),ctx.bezierCurveTo(edge7.x,edge7.y,edge8.x,edge8.y,edge2.x,edge2.y),ctx.fill(),ctx.closePath(),ctx.restore()}}]),GetMetaBall}(),Circle=function(){function Circle(ctx,index,x,y,radius){(0,classCallCheck.Z)(this,Circle),this.ctx=void 0,this.index=void 0,this.x=void 0,this.y=void 0,this.radius=void 0,this.vx=void 0,this.vy=void 0,this.vx2=void 0,this.vy2=void 0,this.fillStyle=void 0,this.ctx=ctx,this.index=index,this.x=x,this.y=y,this.vx=1*Math.random()-.5,this.vy=1*Math.random()-.5,this.vx2=8*Math.random()-4,this.vy2=8*Math.random()-4,this.fillStyle="#fff",this.radius=radius}return(0,createClass.Z)(Circle,[{key:"update",value:function update(isClick){isClick?(this.x+=this.vx2,this.y+=this.vy2):(this.x+=this.vx,this.y+=this.vy),(this.x<this.radius||this.x>window.innerWidth-this.radius)&&(this.vx*=-1,this.vx2*=-1),(this.y<this.radius||this.y>window.innerHeight-this.radius)&&(this.vy*=-1,this.vy2*=-1)}},{key:"stickness",value:function stickness(circles){for(var i=this.index;i<circles.length-1;i++){var c1=circles[this.index],c2=circles[i+1],dx=c2.x-c1.x,dy=c2.y-c1.y,distance=Math.sqrt(dx*dx+dy*dy);new GetMetaBall(c1,c2,distance).init(this.ctx,this.fillStyle)}}},{key:"draw",value:function draw(ctx){ctx.beginPath(),ctx.fillStyle=this.fillStyle,ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),ctx.fill(),ctx.closePath()}}]),Circle}(),Font=function(){function Font(ctx,word){(0,classCallCheck.Z)(this,Font),this.ctx=void 0,this.word=void 0,this.colorIndex=void 0,this.fps=void 0,this.fpsTime=void 0,this.currentframe=void 0,this.positionFrame=void 0,this.ctx=ctx,this.word=word,this.colorIndex=0,this.fps=3.4,this.fpsTime=1e3/this.fps,this.currentframe=0,this.positionFrame=0}return(0,createClass.Z)(Font,[{key:"font",value:function font(isClick){isClick&&(this.positionFrame+=.003),this.ctx.fillText(this.word[this.colorIndex].text,window.innerWidth*(.4+this.positionFrame),.5*window.innerHeight),this.ctx.fillText(this.word[this.colorIndex].text,window.innerWidth*(.5+this.positionFrame),.5*window.innerHeight),this.ctx.fillText(this.word[this.colorIndex].text,window.innerWidth*(.6+this.positionFrame),.5*window.innerHeight),this.ctx.fillText(this.word[this.colorIndex].text,window.innerWidth*(.4-this.positionFrame),.5*window.innerHeight),this.ctx.fillText(this.word[this.colorIndex].text,window.innerWidth*(.5-this.positionFrame),.5*window.innerHeight),this.ctx.fillText(this.word[this.colorIndex].text,window.innerWidth*(.6-this.positionFrame),.5*window.innerHeight),this.ctx.fillText(this.word[this.colorIndex].text,.4*window.innerWidth,window.innerHeight*(.5+this.positionFrame)),this.ctx.fillText(this.word[this.colorIndex].text,.5*window.innerWidth,window.innerHeight*(.5+this.positionFrame)),this.ctx.fillText(this.word[this.colorIndex].text,.6*window.innerWidth,window.innerHeight*(.5+this.positionFrame)),this.ctx.fillText(this.word[this.colorIndex].text,.4*window.innerWidth,window.innerHeight*(.5-this.positionFrame)),this.ctx.fillText(this.word[this.colorIndex].text,.5*window.innerWidth,window.innerHeight*(.5-this.positionFrame)),this.ctx.fillText(this.word[this.colorIndex].text,.6*window.innerWidth,window.innerHeight*(.5-this.positionFrame))}},{key:"draw",value:function draw(isClick){this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="900 ".concat(.3*window.innerHeight,"px system-ui"),isClick?(this.ctx.shadowColor=this.word[this.colorIndex].color,this.ctx.shadowBlur=10,this.ctx.fillStyle=this.word[this.colorIndex].color):this.ctx.fillStyle="#222",this.currentframe>this.fpsTime&&(this.colorIndex+=1,this.colorIndex%=this.word.length,this.currentframe=0),this.font(isClick),this.currentframe++,this.ctx.restore()}}]),Font}(),webfontloader=__webpack_require__("./node_modules/webfontloader/webfontloader.js"),webfontloader_default=__webpack_require__.n(webfontloader),Canvas=function(){function Canvas(canvas,ctx){(0,classCallCheck.Z)(this,Canvas),this.canvas=void 0,this.ctx=void 0,this.mouse=void 0,this.circles=void 0,this.fonts=void 0,this.fps2=void 0,this.fps=void 0,this.fpsTime=void 0,this.fpsTime2=void 0,this.currentframe=void 0,this.currentframe2=void 0,this.word=void 0,this.colorIndex=void 0,this.canvas=canvas,this.ctx=ctx,this.mouse={index:null,isDown:!1,isClick:!1,offsetX:0,offsetY:0},this.circles=[],this.fonts=null,this.fps=10,this.fps2=3.4,this.fpsTime=1e3/this.fps,this.fpsTime2=1e3/this.fps2,this.currentframe=0,this.currentframe2=0,this.colorIndex=0,this.word=[{text:"A",color:"#bb254a"},{text:"B",color:"#dd4851"},{text:"C",color:"#f38138"},{text:"D",color:"#e35b8f"},{text:"E",color:"#922f6e"},{text:"F",color:"#66648b"},{text:"G",color:"#896b70"},{text:"H",color:"#939597"}],webfontloader_default().load({google:{families:["Hind:700"]}})}return(0,createClass.Z)(Canvas,[{key:"bind",value:function bind(){window.addEventListener("click",this.onClick.bind(this)),window.addEventListener("mousedown",this.onDown.bind(this)),window.addEventListener("mousemove",this.onMove.bind(this)),window.addEventListener("mouseup",this.onUp.bind(this)),window.addEventListener("resize",this.resize.bind(this))}},{key:"destroy",value:function destroy(){window.removeEventListener("click",this.onClick.bind(this)),window.removeEventListener("mousedown",this.onDown.bind(this)),window.removeEventListener("mousemove",this.onMove.bind(this)),window.removeEventListener("mouseup",this.onUp.bind(this)),window.removeEventListener("resize",this.resize.bind(this))}},{key:"init",value:function init(){this.circles=[],this.makeFont(),this.makeCircle(25)}},{key:"makeFont",value:function makeFont(){this.fonts=new Font(this.ctx,this.word)}},{key:"makeCircle",value:function makeCircle(length){for(var i=0;i<length;i++){var radius=40*Math.random()+60,x=Math.random()*(this.canvas.width-2*radius)+radius,y=Math.random()*(this.canvas.height-2*radius)+radius,circle=new Circle(this.ctx,i,x,y,radius);this.circles.push(circle)}}},{key:"resize",value:function resize(){var ratio=window.devicePixelRatio;this.canvas.width=window.innerWidth*ratio,this.canvas.height=window.innerHeight*ratio,this.canvas.style.width="".concat(window.innerWidth,"px"),this.canvas.style.height="".concat(window.innerHeight,"px"),this.ctx.scale(ratio,ratio)}},{key:"onClick",value:function onClick(){this.mouse.isClick=!0}},{key:"onDown",value:function onDown(event){var _this=this;this.mouse.isDown=!0,this.mouse.offsetX=event.clientX,this.mouse.offsetY=event.clientY,this.circles.forEach((function(c){var dx=c.x-_this.mouse.offsetX,dy=c.y-_this.mouse.offsetY;Math.sqrt(dx*dx+dy*dy)<c.radius&&(_this.mouse.index=c.index,c.vx2=0,c.vy2=0,c.fillStyle=_this.word[_this.fonts.colorIndex].color)}))}},{key:"onMove",value:function onMove(event){if(this.mouse.isDown){var index=this.mouse.index;(index||0===index)&&(this.circles[index].x=this.circles[index].x+event.clientX-this.mouse.offsetX,this.circles[index].y=this.circles[index].y+event.clientY-this.mouse.offsetY,this.mouse.offsetX=event.clientX,this.mouse.offsetY=event.clientY)}}},{key:"onUp",value:function onUp(){var index=this.mouse.index;this.mouse.isDown=!1,(index||0===index)&&(this.circles[index].vx2=8*Math.random()-4,this.circles[index].vy2=8*Math.random()-4)}},{key:"draw",value:function draw(){var _this$fonts,_this2=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),null===(_this$fonts=this.fonts)||void 0===_this$fonts||_this$fonts.draw(this.mouse.isClick),this.circles.forEach((function(circle){_this2.mouse.isClick&&(circle.update(_this2.mouse.isClick),circle.stickness(_this2.circles)),_this2.mouse.isDown||(circle.fillStyle=_this2.mouse.isClick?"#eee":"#222"),circle.draw(_this2.ctx)})),this.currentframe++,this.currentframe2++,requestAnimationFrame(this.draw.bind(this))}}]),Canvas}(),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MetaBall_stories={title:"ANIMATION/MetaBall",component:function MetaBall(){var canvasRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(canvasRef.current){var canvas=canvasRef.current,context=canvas.getContext("2d"),c=new Canvas(canvas,context);return c.bind(),c.resize(),c.init(),c.draw(),function(){return c.destroy()}}}),[]),(0,jsx_runtime.jsx)("div",{className:"wrap",children:(0,jsx_runtime.jsx)("canvas",{ref:canvasRef})})}},MetaBall1={};MetaBall1.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MetaBall1.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_MetaBall1$parameters=MetaBall1.parameters)||void 0===_MetaBall1$parameters?void 0:_MetaBall1$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_MetaBall1$parameters2=MetaBall1.parameters)||void 0===_MetaBall1$parameters2||null===(_MetaBall1$parameters3=_MetaBall1$parameters2.docs)||void 0===_MetaBall1$parameters3?void 0:_MetaBall1$parameters3.source)})});var __namedExportsOrder=["MetaBall1"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/webfontloader/webfontloader.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba).apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a,this.o=b||a,this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){if(b=a.c.createElement(b),c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));return d&&b.appendChild(a.c.createTextNode(d)),b}function u(a,b,c){(a=a.c.getElementsByTagName(b)[0])||(a=document.documentElement),a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}function w(a,b,c){b=b||[],c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}for(b=[],e=0;e<d.length;e+=1){for(f=!1,g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0,d()},b.onerror=function(){e=!0,g=Error("Stylesheet failed to load"),d()}):setTimeout((function(){e=!0,d()}),0),u(a,"head",b)}function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;return f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))},e.appendChild(f),setTimeout((function(){g||(g=!0,c&&c(Error("Script load timeout")))}),d||5e3),f}return null}function B(){this.a=0,this.c=null}function C(a){return a.a++,function(){a.a--,D(a)}}function E(a,b){a.c=b,D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)}function F(a){this.a=a||"-"}function G(a,b){this.c=a,this.f=4,this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";return"o"===a.a?b="oblique":"i"===a.a&&(b="italic"),b}function ga(a){var b=4,c="n",d=null;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function ha(a,b){this.c=a,this.f=a.o.document.documentElement,this.h=b,this.a=new F("-"),this.j=!1!==b.events,this.g=!1!==b.classes}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive")),w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){a.j&&a.h[b]&&(c?a.h[b](c.c,J(c)):a.h[b]())}function ja(){this.c={}}function M(a,b){this.c=a,this.f=b,this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";font-style:"+H(a)+";font-weight:"+a.f+"00;"}function P(a,b,c,d,e,f){this.g=a,this.j=b,this.a=d,this.c=c,this.f=e||3e3,this.h=f||void 0}function Q(a,b,c,d,e,f,g){this.v=a,this.B=b,this.c=c,this.a=d,this.s=g||"BESbswy",this.f={},this.w=e||3e3,this.u=f||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),a=O(a=new G(this.a.c+",serif",J(this.a))),this.g.a.style.cssText=a,a=O(a=new G(this.a.c+",sans-serif",J(this.a))),this.h.a.style.cssText=a,a=O(a=new G("serif",J(this.a))),this.j.a.style.cssText=a,a=O(a=new G("sans-serif",J(this.a))),this.m.a.style.cssText=a,N(this.g),N(this.h),N(this.j),N(this.m)}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)},P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise((function(d,e){!function f(){q()-c>=b.f?e():a.fonts.load(function fa(a){return H(a)+" "+a.f+"00 300px "+I(a.c)}(b.a),b.h).then((function(a){1<=a.length?d():setTimeout(f,25)}),(function(){e()}))}()})),e=null,f=new Promise((function(a,d){e=setTimeout(d,b.f)}));Promise.race([f,d]).then((function(){e&&(clearTimeout(e),e=null),b.g(b.a)}),(function(){b.j(b.a)}))};var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var d,b=a.g.a.offsetWidth,c=a.h.a.offsetWidth;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c)),d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):function ma(a){setTimeout(p((function(){U(this)}),a),50)}(a):V(a,a.v)}function V(a,b){setTimeout(p((function(){v(this.g.a),v(this.h.a),v(this.j.a),v(this.m.a),b(this.a)}),a),0)}function W(a,b,c){this.c=a,this.a=b,this.f=0,this.m=this.j=!1,this.s=c}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=q(),U(this)};var X=null;function na(a){0==--a.f&&a.j&&(a.m?((a=a.a).g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))}function oa(a){this.j=a,this.a=new ja,this.h=0,this.f=this.g=!0}function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout((function(){var a=e||null,m=d||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length,f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;if(r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]),K(r,"fontloading",x),r=null,null===X)if(window.FontFace){x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);X=x?42<parseInt(x[1],10):!xa}else X=!1;r=X?new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n),l.push(r)}for(h=0;h<l.length;h++)l[h].start()}}),0)}function ra(a,b){this.c=a,this.a=b}function sa(a,b){this.c=a,this.a=b}function ta(a,b){this.c=a||ua,this.a=[],this.f=[],this.g=b||""}W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]),K(b,"fontactive",a),this.m=!0,na(this)},W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive")),w(b.f,d,e)}K(b,"fontinactive",a),na(this)},oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j),this.g=!1!==a.events,this.f=!1!==a.classes,function pa(a,b,c){var d=[],e=c.timeout;!function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]),K(a,"loading")}(b);d=function ka(a,b,c){var e,d=[];for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d}(a.a,c,a.c);var f=new W(a.c,b,e);for(a.h=d.length,b=0,c=d.length;b<c;b++)d[b].load((function(b,d,c){qa(a,f,b,d,c)}))}(this,new ha(this.c,a),a)},ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var h,c=f["__mti_fntLst"+d](),e=[];if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;null!=c[l].fontStyle&&null!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout((function(){b()}),50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),(function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())})).id="__MonotypeAPIScript__"+d}else a([])},sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;for(b=0,c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];for(b=0,c=e.length;b<c;b++)if((d=e[b].split(":"))[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,(function(){a(m,f)}))};var ua="https://fonts.googleapis.com/css";function ya(a){this.f=a,this.a=[],this.c={}}var za={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Ea(a,b){this.c=a,this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};function Ga(a,b){this.c=a,this.a=b}function Ha(a,b){this.c=a,this.f=b,this.a=[]}Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;!function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":"),a.a.push(e.join(f))}}(d,e);var f=new ya(e);!function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;if(g=[],m=d[1])for(var m,h=(m=m.split(",")).length,l=0;l<h;l++){var k;if((k=m[l]).match(/^[\w-]+$/))if(null==(n=Ca.exec(k.toLowerCase())))k="";else{if(k=null==(k=n[2])||""==k?"n":Ba[k],null==(n=n[1])||""==n)n="4";else var n=Aa[n]||(isNaN(n)?"4":n.substr(0,1));k=[k,n].join("")}else k="";k&&g.push(k)}0<g.length&&(f=g),3==d.length&&(g=[],0<(d=(d=d[2])?d.split(","):g).length&&(d=za[d[0]])&&(a.c[e]=d))}for(a.c[e]||(d=za[e])&&(a.c[e]=d),d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}}(f),z(c,function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));return b=a.c+"?family="+c.join("%7C"),0<a.f.length&&(b+="&subset="+a.f.join(",")),0<a.g.length&&(b+="&text="+encodeURIComponent(a.g)),b}(d),C(b)),E(b,(function(){a(f.a,f.c,Fa)}))},Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",(function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}}),2e3):a([])},Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function ea(a){return a.o.location.hostname||a.a.location.hostname}(this.c)+"/"+b+".js",(function(b){b&&a([])}))):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)},Y.a.c.fontdeck=function(a,b){return new Ha(b,a)},Y.a.c.monotype=function(a,b){return new ra(b,a)},Y.a.c.typekit=function(a,b){return new Ga(b,a)},Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Z}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);