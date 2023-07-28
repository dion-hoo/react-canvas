/*! For license information please see pages-Sticker-Sticker-stories.3934c3fd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_canvas=self.webpackChunkreact_canvas||[]).push([[350],{"./src/pages/Sticker/Sticker.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Sticker_stories},"스티커":function(){return 스티커}});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),react=__webpack_require__("./node_modules/react/index.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var _스티커$parameters,_스티커$parameters2,_스티커$parameters2$docs,kakao_dark_namespaceObject=__webpack_require__.p+"bebfaaf4a0639d3978d6.jpg",Back=function(){function Back(centerX,centerY,width,height){_classCallCheck(this,Back),this.centerX=void 0,this.centerY=void 0,this.width=void 0,this.height=void 0,this.image=void 0,this.point=void 0,this.centerX=centerX,this.centerY=centerY,this.width=width,this.height=height,this.image=new Image,this.image.src=kakao_dark_namespaceObject,this.point=[]}return _createClass(Back,[{key:"update",value:function update(frontPoint){this.point[0]=frontPoint[1],this.point[1]=frontPoint[2],this.point[2]=frontPoint[3],this.point[3]=frontPoint[4],this.point[4]=frontPoint[5],this.point[5]=frontPoint[6]}},{key:"backPath",value:function backPath(ctx){ctx.beginPath(),ctx.moveTo(this.point[0].x,this.point[0].y),ctx.quadraticCurveTo(this.point[1].x,this.point[1].y,this.point[2].x,this.point[2].y),ctx.lineTo(this.point[2].x,this.point[2].y),ctx.quadraticCurveTo(this.point[3].x,this.point[3].y,this.point[4].x,this.point[4].y),ctx.lineTo(this.point[4].x,this.point[4].y),ctx.closePath()}},{key:"drawImage",value:function drawImage(ctx){ctx.clip(),ctx.save(),ctx.translate(this.point[0].x,this.point[2].y),ctx.scale(-1,1),ctx.rotate(90*Math.PI/180),ctx.drawImage(this.image,-this.width,0,this.width,this.height),ctx.restore()}},{key:"drawShadow",value:function drawShadow(ctx){var gradient=ctx.createLinearGradient(this.point[3].x,this.point[3].y,this.point[3].x,this.point[4].y);gradient.addColorStop(0,"rgba(0, 0, 0, 1)"),gradient.addColorStop(.6,"rgba(0, 0, 0, 0.3)"),gradient.addColorStop(1,"rgba(255, 255, 255, 0.01)"),ctx.fillStyle=gradient,ctx.beginPath(),ctx.moveTo(this.point[2].x,this.point[2].y),ctx.quadraticCurveTo(this.point[3].x,this.point[3].y,this.point[4].x,this.point[4].y),ctx.lineTo(this.point[4].x,this.point[4].y),ctx.fill(),ctx.closePath()}},{key:"draw",value:function draw(ctx){ctx.save(),this.drawShadow(ctx),ctx.restore(),ctx.save(),this.backPath(ctx),this.drawImage(ctx),ctx.restore()}}]),Back}(),mousePoint=Array.from({length:8}).map((function(){return{moveX:0,moveY:0}})),minMaxBoundary=function minMaxBoundary(p,min,max){return p>max&&(p=max-1),p<min&&(p=min+1),p},updatePoint=function updatePoint(centerX,centerY,width,height,peelOffSize,moveX,moveY){var p=function Points(centerX,centerY,width,height,peelOffSize){return[{x:centerX+mousePoint[0].moveX,y:centerY+mousePoint[0].moveY,isAreaX:!1,isAreaY:!1},{x:centerX+width-peelOffSize+mousePoint[1].moveX,y:centerY+mousePoint[1].moveY,isAreaX:!1,isAreaY:!1},{x:centerX+width-.9*peelOffSize+mousePoint[2].moveX,y:centerY+.4*peelOffSize+mousePoint[2].moveY,isAreaX:!1,isAreaY:!1},{x:centerX+width-peelOffSize+mousePoint[3].moveX+10,y:centerY+peelOffSize+mousePoint[3].moveY-5,isAreaX:!1,isAreaY:!1},{x:centerX+width-peelOffSize+70+mousePoint[4].moveX,y:centerY+.7*peelOffSize+mousePoint[4].moveY,isAreaX:!1,isAreaY:!1},{x:centerX+width+mousePoint[5].moveX,y:centerY+peelOffSize+mousePoint[5].moveY,isAreaX:!1,isAreaY:!1},{x:centerX+width+mousePoint[6].moveX,y:centerY+height+mousePoint[6].moveY,isAreaX:!1,isAreaY:!1},{x:centerX+mousePoint[7].moveX,y:centerY+height+mousePoint[7].moveY,isAreaX:!1,isAreaY:!1}]}(centerX,centerY,width,height,peelOffSize),minX=centerX,maxX=centerX+width,minY=centerY,maxY=centerY+height,maxWidth=Math.abs(p[3].x-p[5].x),setPoint=function setPoint(_ref){var index=_ref.index,x=_ref.x,y=_ref.y;x&&(p[index].x=minMaxBoundary(p[index].x,minX,maxX),mousePoint[index].moveX+=3.5*moveX),y&&(p[index].y=minMaxBoundary(p[index].y,minY,maxY),mousePoint[index].moveY+=3.5*moveY)};return setPoint({index:1,x:maxWidth<height}),setPoint({index:2,x:maxWidth<height,y:!0}),setPoint({index:3,x:maxWidth<height,y:!0}),setPoint({index:4,x:maxWidth<height,y:!0}),setPoint({index:5,y:!0}),p},kakao_namespaceObject=__webpack_require__.p+"19a90905606aeb8443ae.jpg",Stickers=function(){function Stickers(centerX,centerY,width,height){_classCallCheck(this,Stickers),this.centerX=void 0,this.centerY=void 0,this.width=void 0,this.height=void 0,this.peelOffSize=void 0,this.image=void 0,this.back=void 0,this.centerX=centerX,this.centerY=centerY,this.width=width,this.height=height,this.peelOffSize=100,this.image=new Image,this.image.src=kakao_namespaceObject,this.back=new Back(this.centerX,this.centerY,this.width,this.height)}return _createClass(Stickers,[{key:"draw",value:function draw(ctx,moveX,moveY){var points=updatePoint(this.centerX,this.centerY,this.width,this.height,this.peelOffSize,moveX,moveY);ctx.save(),ctx.beginPath();for(var v=0;v<points.length;v++){var _points$v=points[v],x=_points$v.x,y=_points$v.y;0===v?ctx.moveTo(points[0].x,points[0].y):2===v||4===v?ctx.quadraticCurveTo(x,y,points[v+1].x,points[v+1].y):ctx.lineTo(x,y)}ctx.closePath(),ctx.clip(),ctx.drawImage(this.image,this.centerX,this.centerY,this.width,this.height),ctx.restore(),this.back&&(this.back.update(points),this.back.draw(ctx))}}]),Stickers}(),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cx=bind_default().bind({Sticker:"Sticker_Sticker__J80UA",Sticker__banner:"Sticker_Sticker__banner__q9XUS"}),Sticker_stories={title:"ANIMATION/Sticker",component:function Sticker(){var canvasRef=(0,react.useRef)(null),bannerRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(canvasRef.current&&bannerRef.current){var canvasElement=canvasRef.current,ctx=canvasElement.getContext("2d"),banner=bannerRef.current;if(ctx){var canvas=function Canvas(canvas,ctx,banner){var mouse={isDown:!1,offsetX:0,offsetY:0,moveX:0,moveY:0},stickers=null,onDown=function onDown(event){mouse.isDown=!0,mouse.offsetX=event.clientX,mouse.offsetY=event.clientY},onMove=function onMove(event){mouse.isDown&&(mouse.moveX=event.clientX-mouse.offsetX,mouse.moveY=event.clientY-mouse.offsetY,mouse.offsetX=event.clientX,mouse.offsetY=event.clientY)},onUp=function onUp(){mouse.isDown=!1},resize=function resize(){var width=banner.clientWidth,height=banner.clientHeight,cetnerX=window.innerWidth/2-width/2,centerY=window.innerHeight/2-height/2,ratio=devicePixelRatio;canvas.width=window.innerWidth*ratio,canvas.height=window.innerHeight*ratio,canvas.style.width="".concat(window.innerWidth,"px"),canvas.style.height="".concat(window.innerHeight,"px"),ctx.scale(ratio,ratio),stickers=new Stickers(cetnerX,centerY,width,height)};return function eventListener(){window.addEventListener("pointerdown",onDown),window.addEventListener("pointermove",onMove),window.addEventListener("pointerup",onUp),window.addEventListener("resize",resize)}(),{resize:resize,animate:function animate(){ctx.clearRect(0,0,canvas.width,canvas.height),mouse.moveX*=.5,mouse.moveY*=.5,stickers&&stickers.draw(ctx,mouse.moveX,mouse.moveY),requestAnimationFrame(animate.bind(void 0))},destroy:function destroy(){window.removeEventListener("pointerdown",onDown),window.removeEventListener("pointermove",onMove),window.removeEventListener("pointerup",onUp),window.removeEventListener("resize",resize)}}}(canvasElement,ctx,banner);return canvas.resize(),canvas.animate(),function(){canvas.destroy()}}}}),[]),(0,jsx_runtime.jsxs)("div",{className:cx("Sticker"),children:[(0,jsx_runtime.jsx)("div",{className:cx("Sticker__banner"),ref:bannerRef}),(0,jsx_runtime.jsx)("canvas",{ref:canvasRef})]})}},스티커={};스티커.parameters=_objectSpread2(_objectSpread2({},스티커.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_스티커$parameters=스티커.parameters)||void 0===_스티커$parameters?void 0:_스티커$parameters.docs),{},{source:_objectSpread2({originalSource:"{}"},null===(_스티커$parameters2=스티커.parameters)||void 0===_스티커$parameters2||null===(_스티커$parameters2$docs=_스티커$parameters2.docs)||void 0===_스티커$parameters2$docs?void 0:_스티커$parameters2$docs.source)})});var __namedExportsOrder=["스티커"]},"./node_modules/classnames/bind.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);