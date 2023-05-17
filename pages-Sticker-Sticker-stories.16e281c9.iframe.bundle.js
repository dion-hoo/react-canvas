/*! For license information please see pages-Sticker-Sticker-stories.16e281c9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_canvas=self.webpackChunkreact_canvas||[]).push([[350],{"./src/pages/Sticker/Sticker.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Sticker_stories},"스티커":function(){return 스티커}});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),react=__webpack_require__("./node_modules/react/index.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var _스티커$parameters,_스티커$parameters2,_스티커$parameters2$docs,Back=function(){function Back(x,y,width,height,image){_classCallCheck(this,Back),this.x=void 0,this.y=void 0,this.width=void 0,this.height=void 0,this.image=void 0,this.v0=void 0,this.v1=void 0,this.v2=void 0,this.v3=void 0,this.v4=void 0,this.v5=void 0,this.x=x,this.y=y,this.width=width,this.height=height,this.image=image,this.v0=null,this.v1=null,this.v2=null,this.v3=null,this.v4=null,this.v5=null}return _createClass(Back,[{key:"update",value:function update(v0,v1,v2,v3,v4){this.v0=v0,this.v1=v1,this.v2=v2,this.v3=v3,this.v4=v4,this.v5={x:this.v4.x,y:this.y+this.height}}},{key:"drawImage",value:function drawImage(ctx){ctx.clip(),ctx.save(),ctx.translate(this.v0.x,this.v2.y),ctx.scale(-1,1),ctx.rotate(90*Math.PI/180),ctx.drawImage(this.image,-this.width,0,this.width,this.height),ctx.restore()}},{key:"backPath",value:function backPath(ctx){ctx.beginPath(),ctx.moveTo(this.v0.x,this.v0.y),ctx.quadraticCurveTo(this.v1.x,this.v1.y,this.v2.x,this.v2.y),ctx.lineTo(this.v2.x,this.v2.y),ctx.quadraticCurveTo(this.v3.x,this.v3.y,this.v4.x,this.v4.y),ctx.lineTo(this.v4.x,this.v4.y),this.v4.overY&&ctx.lineTo(this.v5.x,this.v5.y),ctx.closePath()}},{key:"drawShadow",value:function drawShadow(ctx){var gradient=ctx.createLinearGradient(this.v3.x,this.v3.y,this.v3.x,this.v4.y);gradient.addColorStop(0,"rgba(0, 0, 0, 1)"),gradient.addColorStop(.6,"rgba(0, 0, 0, 0.3)"),gradient.addColorStop(1,"rgba(255, 255, 255, 0.01)"),ctx.fillStyle=gradient,ctx.beginPath(),ctx.moveTo(this.v2.x,this.v2.y),ctx.quadraticCurveTo(this.v3.x,this.v3.y,this.v4.x,this.v4.y),ctx.lineTo(this.v4.x,this.v4.y),ctx.fill(),ctx.closePath()}},{key:"draw",value:function draw(ctx){ctx.save(),this.drawShadow(ctx),ctx.restore(),ctx.save(),this.backPath(ctx),this.drawImage(ctx),ctx.restore()}}]),Back}(),StickerClass=function(){function StickerClass(x,y,width,height,frontImage,backImage){_classCallCheck(this,StickerClass),this.x=void 0,this.y=void 0,this.width=void 0,this.height=void 0,this.edge=void 0,this.ground=void 0,this.frontImage=void 0,this.backImage=void 0,this.back=void 0,this.moveX0=void 0,this.moveY0=void 0,this.moveX1=void 0,this.moveY1=void 0,this.moveX2=void 0,this.moveY2=void 0,this.moveX3=void 0,this.moveY3=void 0,this.moveX4=void 0,this.moveY4=void 0,this.moveX5=void 0,this.moveY5=void 0,this.moveX6=void 0,this.moveY6=void 0,this.moveX7=void 0,this.moveY7=void 0,this.x=x,this.y=y,this.width=width,this.height=height,this.edge=80,this.ground=!1,this.frontImage=frontImage,this.backImage=backImage,this.back=new Back(this.x,this.y,this.width,this.height,this.backImage),this.moveX0=0,this.moveY0=0,this.moveX1=0,this.moveY1=0,this.moveX2=0,this.moveY2=0,this.moveX3=0,this.moveY3=0,this.moveX4=0,this.moveY4=0,this.moveX5=0,this.moveY5=0,this.moveX6=0,this.moveY6=0,this.moveX7=0,this.moveY7=0}return _createClass(StickerClass,[{key:"draw",value:function draw(ctx,moveX,moveY){var vertex=[{x:this.x+this.moveX0,y:this.y+this.moveY0},{x:this.x+this.width-this.edge+this.moveX1,y:this.y+this.moveY1},{x:this.x+this.width-.77*this.edge+this.moveX2,y:this.y+this.edge/2+this.moveY2},{x:this.x+this.width-this.edge+20+this.moveX3,y:this.y+this.edge+10+this.moveY3},{x:this.x+this.width-.7*this.edge+this.moveX4,y:this.y+.6*this.edge+this.moveY4},{x:this.x+this.width+this.moveX5,y:this.y+this.edge+this.moveY5,overY:!1},{x:this.x+this.width+this.moveX6,y:this.y+this.height+this.moveY6},{x:this.x+this.moveX7,y:this.y+this.height+this.moveY7}];this.moveX2+=3.5*moveX,this.moveX3+=3.5*moveX,this.moveY3+=3.5*moveY,vertex[1].x<=this.x?(this.moveY0+=3.5*moveY,this.moveY1+=3.5*moveY,this.moveY2+=3.5*moveY):this.moveX1+=3.5*moveX,vertex[5].y>=this.y+this.height?(this.moveX4+=3.5*moveX,this.moveY4+=3.5*moveY,this.moveX5+=3.5*moveX,this.moveY5+=3.5*moveY,vertex[5].overY=!0,this.moveX6+=3.5*moveX):(this.moveY4+=3.5*moveY,this.moveY5+=3.5*moveY),vertex[6].x<=this.x&&(this.moveY6+=3.5*moveY,this.moveX7+=3.5*moveX,this.moveY7+=3.5*moveY),vertex[0].y>=this.y+this.height&&(this.moveX7+=3.5*moveX,this.moveY7+=3.5*moveY),ctx.save(),ctx.beginPath();for(var v=0;v<vertex.length;v++){var _vertex$v=vertex[v],x=_vertex$v.x,y=_vertex$v.y;0===v?ctx.moveTo(vertex[0].x,vertex[0].y):2===v||4===v?ctx.quadraticCurveTo(x,y,vertex[v+1].x,vertex[v+1].y):ctx.lineTo(x,y)}return ctx.closePath(),ctx.clip(),ctx.drawImage(this.frontImage,this.x,this.y,this.width,this.height),ctx.restore(),this.back.update(vertex[1],vertex[2],vertex[3],vertex[4],vertex[5]),this.back.draw(ctx),this.ground}}]),StickerClass}(),kakao_namespaceObject=__webpack_require__.p+"19a90905606aeb8443ae.jpg",kakao_dark_namespaceObject=__webpack_require__.p+"bebfaaf4a0639d3978d6.jpg",Canvas=function(){function Canvas(canvas,ctx,banner){_classCallCheck(this,Canvas),this.canvas=void 0,this.ctx=void 0,this.banner=void 0,this.mouse=void 0,this.frontImage=void 0,this.backImage=void 0,this.sticker=void 0,this.canvas=canvas,this.ctx=ctx,this.banner=banner,this.mouse={isDown:!1,offsetX:0,offsetY:0,moveX:0,moveY:0},this.frontImage=new Image,this.backImage=new Image,this.sticker=null}return _createClass(Canvas,[{key:"eventListener",value:function eventListener(){window.addEventListener("pointerdown",this.onDown.bind(this)),window.addEventListener("pointermove",this.onMove.bind(this)),window.addEventListener("pointerup",this.onUp.bind(this)),window.addEventListener("resize",this.resize.bind(this)),this.frontImage.src=kakao_namespaceObject,this.backImage.src=kakao_dark_namespaceObject}},{key:"onDown",value:function onDown(event){this.mouse.isDown=!0,this.mouse.offsetX=event.clientX,this.mouse.offsetY=event.clientY}},{key:"onMove",value:function onMove(event){this.mouse.isDown&&(this.mouse.moveX=event.clientX-this.mouse.offsetX,this.mouse.moveY=event.clientY-this.mouse.offsetY,this.mouse.offsetX=event.clientX,this.mouse.offsetY=event.clientY)}},{key:"onUp",value:function onUp(){this.mouse.isDown=!1}},{key:"resize",value:function resize(){var width=this.banner.clientWidth,height=this.banner.clientHeight,cetnerX=window.innerWidth/2-width/2,centerY=window.innerHeight/2-height/2,ratio=devicePixelRatio;this.canvas.width=window.innerWidth*ratio,this.canvas.height=window.innerHeight*ratio,this.canvas.style.width="".concat(window.innerWidth,"px"),this.canvas.style.height="".concat(window.innerHeight,"px"),this.ctx.scale(ratio,ratio),this.sticker=new StickerClass(cetnerX,centerY,width,height,this.frontImage,this.backImage)}},{key:"animate",value:function animate(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.mouse.moveX*=.5,this.mouse.moveY*=.5,0===this.mouse.moveX&&(this.mouse.moveX=-.2),this.sticker.draw(this.ctx,this.mouse.moveX,this.mouse.moveY)||requestAnimationFrame(this.animate.bind(this))}},{key:"destroy",value:function destroy(){window.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("resize",this.resize)}}]),Canvas}(),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cx=bind_default().bind({Sticker:"Sticker_Sticker__J80UA",Sticker__banner:"Sticker_Sticker__banner__q9XUS"}),Sticker_stories={title:"ANIMATION/Sticker",component:function Sticker(){var canvasRef=(0,react.useRef)(null),bannerRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(canvasRef.current&&bannerRef.current){var canvasElement=canvasRef.current,ctx=canvasElement.getContext("2d"),banner=bannerRef.current;if(ctx){var canvas=new Canvas(canvasElement,ctx,banner);return canvas.eventListener(),canvas.resize(),canvas.animate(),function(){canvas.destroy()}}}}),[]),(0,jsx_runtime.jsxs)("div",{className:cx("Sticker"),children:[(0,jsx_runtime.jsx)("div",{className:cx("Sticker__banner"),ref:bannerRef}),(0,jsx_runtime.jsx)("canvas",{ref:canvasRef})]})}},스티커={};스티커.parameters=_objectSpread2(_objectSpread2({},스티커.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_스티커$parameters=스티커.parameters)||void 0===_스티커$parameters?void 0:_스티커$parameters.docs),{},{source:_objectSpread2({originalSource:"{}"},null===(_스티커$parameters2=스티커.parameters)||void 0===_스티커$parameters2||null===(_스티커$parameters2$docs=_스티커$parameters2.docs)||void 0===_스티커$parameters2$docs?void 0:_스티커$parameters2$docs.source)})});var __namedExportsOrder=["스티커"]},"./node_modules/classnames/bind.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);