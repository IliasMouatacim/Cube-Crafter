(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="160",ll=0,Ao=1,hl=2,Ec=1,ul=2,Un=3,ti=0,Ze=1,fn=2,Zn=0,Hi=1,bo=2,wo=3,Ro=4,dl=5,hi=100,fl=101,pl=102,Co=103,Lo=104,ml=200,_l=201,gl=202,xl=203,Zr=204,Jr=205,vl=206,El=207,Sl=208,Ml=209,yl=210,Tl=211,Al=212,bl=213,wl=214,Rl=0,Cl=1,Ll=2,$s=3,Dl=4,Il=5,Pl=6,Ol=7,lo=0,Nl=1,Bl=2,Jn=0,Ul=1,Fl=2,kl=3,Hl=4,zl=5,Gl=6,Sc=300,Gi=301,Vi=302,Qr=303,to=304,nr=306,eo=1e3,Sn=1001,no=1002,qe=1003,Do=1004,lr=1005,un=1006,Vl=1007,ss=1008,Qn=1009,Wl=1010,Xl=1011,ho=1012,Mc=1013,jn=1014,$n=1015,rs=1016,yc=1017,Tc=1018,di=1020,ql=1021,Mn=1023,Kl=1024,Yl=1025,fi=1026,Wi=1027,jl=1028,Ac=1029,$l=1030,bc=1031,wc=1033,hr=33776,ur=33777,dr=33778,fr=33779,Io=35840,Po=35841,Oo=35842,No=35843,Rc=36196,Bo=37492,Uo=37496,Fo=37808,ko=37809,Ho=37810,zo=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,Ko=37817,Yo=37818,jo=37819,$o=37820,Zo=37821,pr=36492,Jo=36494,Qo=36495,Zl=36283,ta=36284,ea=36285,na=36286,Cc=3e3,pi=3001,Jl=3200,Ql=3201,Lc=0,th=1,pn="",Ue="srgb",kn="srgb-linear",uo="display-p3",ir="display-p3-linear",Zs="linear",fe="srgb",Js="rec709",Qs="p3",xi=7680,ia=519,eh=512,nh=513,ih=514,Dc=515,sh=516,rh=517,oh=518,ah=519,sa=35044,ra="300 es",io=1035,Fn=2e3,tr=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,so=180/Math.PI;function as(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function ch(i,t){return(i%t+t)%t}function mr(i,t,e){return(1-e)*i+e*t}function oa(i){return(i&i-1)===0&&i!==0}function ro(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],T=s[1],E=s[4],A=s[7],D=s[2],w=s[5],R=s[8];return r[0]=a*g+o*T+l*D,r[3]=a*m+o*E+l*w,r[6]=a*f+o*A+l*R,r[1]=c*g+h*T+u*D,r[4]=c*m+h*E+u*w,r[7]=c*f+h*A+u*R,r[2]=d*g+p*T+_*D,r[5]=d*m+p*E+_*w,r[8]=d*f+p*A+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=e*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Qt;function Ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=er("canvas");return i.style.display="block",i}const aa={};function is(i){i in aa||(aa[i]=!0,console.warn(i))}const ca=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),la=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[kn]:{transfer:Zs,primaries:Js,toReference:i=>i,fromReference:i=>i},[Ue]:{transfer:fe,primaries:Js,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ir]:{transfer:Zs,primaries:Qs,toReference:i=>i.applyMatrix3(la),fromReference:i=>i.applyMatrix3(ca)},[uo]:{transfer:fe,primaries:Qs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(la),fromReference:i=>i.applyMatrix3(ca).convertLinearToSRGB()}},hh=new Set([kn,ir]),le={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ps[t].toReference,s=ps[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ps[i].primaries},getTransfer:function(i){return i===pn?Zs:ps[i].transfer}};function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Pc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=er("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uh=0;class Oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=as(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xr(s[a].image)):r.push(xr(s[a]))}else r=xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class an extends qi{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Sn,s=Sn,r=un,a=ss,o=Mn,l=Qn,c=an.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=as(),this.name="",this.source=new Oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===pi?Ue:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?pi:Cc}set encoding(t){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===pi?Ue:pn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Sc;an.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,A=(p+1)/2,D=(f+1)/2,w=(h+d)/4,R=(u+g)/4,X=(_+m)/4;return E>A&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):A>D?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=w/s,r=X/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=X/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?Ue:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nc extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ph extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*g,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const D=Math.sqrt(E),w=Math.atan2(D,f*T);m=Math.sin(m*w)/D,o=Math.sin(o*w)/D}const A=o*T;if(l=l*m+d*A,c=c*m+p*A,h=h*m+_*A,u=u*m+g*A,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new I,ha=new cs;class ls{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),_s.subVectors(this.max,$i),Ei.subVectors(t.a,$i),Si.subVectors(t.b,$i),Mi.subVectors(t.c,$i),Hn.subVectors(Si,Ei),zn.subVectors(Mi,Si),ii.subVectors(Ei,Mi);let e=[0,-Hn.z,Hn.y,0,-zn.z,zn.y,0,-ii.z,ii.y,Hn.z,0,-Hn.x,zn.z,0,-zn.x,ii.z,0,-ii.x,-Hn.y,Hn.x,0,-zn.y,zn.x,0,-ii.y,ii.x,0];return!Er(e,Ei,Si,Mi,_s)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,Ei,Si,Mi,_s))?!1:(gs.crossVectors(Hn,zn),e=[gs.x,gs.y,gs.z],Er(e,Ei,Si,Mi,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,ms=new ls,Ei=new I,Si=new I,Mi=new I,Hn=new I,zn=new I,ii=new I,$i=new I,_s=new I,gs=new I,si=new I;function Er(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mh=new ls,Zi=new I,Sr=new I;class hs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Sr)),this.expandByPoint(Zi.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new I,Mr=new I,xs=new I,Gn=new I,yr=new I,vs=new I,Tr=new I;class fo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Mr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xs),o=Gn.dot(this.direction),l=-Gn.dot(xs),c=Gn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mr).addScaledVector(xs,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){yr.subVectors(e,t),vs.subVectors(n,t),Tr.crossVectors(yr,vs);let a=this.direction.dot(Tr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(vs.crossVectors(Gn,vs));if(l<0)return null;const c=o*this.direction.dot(yr.cross(Gn));if(c<0||l+c>a)return null;const h=-o*Gn.dot(Tr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,_,g,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,_,g,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,gh)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Vn.crossVectors(n,en),Vn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Vn.crossVectors(n,en)),Vn.normalize(),Es.crossVectors(en,Vn),s[0]=Vn.x,s[4]=Es.x,s[8]=en.x,s[1]=Vn.y,s[5]=Es.y,s[9]=en.y,s[2]=Vn.z,s[6]=Es.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],T=n[3],E=n[7],A=n[11],D=n[15],w=s[0],R=s[4],X=s[8],S=s[12],b=s[1],H=s[5],j=s[9],ot=s[13],L=s[2],O=s[6],V=s[10],Z=s[14],K=s[3],$=s[7],J=s[11],nt=s[15];return r[0]=a*w+o*b+l*L+c*K,r[4]=a*R+o*H+l*O+c*$,r[8]=a*X+o*j+l*V+c*J,r[12]=a*S+o*ot+l*Z+c*nt,r[1]=h*w+u*b+d*L+p*K,r[5]=h*R+u*H+d*O+p*$,r[9]=h*X+u*j+d*V+p*J,r[13]=h*S+u*ot+d*Z+p*nt,r[2]=_*w+g*b+m*L+f*K,r[6]=_*R+g*H+m*O+f*$,r[10]=_*X+g*j+m*V+f*J,r[14]=_*S+g*ot+m*Z+f*nt,r[3]=T*w+E*b+A*L+D*K,r[7]=T*R+E*H+A*O+D*$,r[11]=T*X+E*j+A*V+D*J,r[15]=T*S+E*ot+A*Z+D*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+g*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],T=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,E=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,A=h*g*c-_*u*c+_*o*p-a*g*p-h*o*f+a*u*f,D=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=e*T+n*E+s*A+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=T*R,t[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*R,t[4]=E*R,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=A*R,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*f-e*u*f)*R,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=D*R,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*m+e*u*m)*R,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,g=a*h,m=a*u,f=o*u,T=l*c,E=l*h,A=l*u,D=n.x,w=n.y,R=n.z;return s[0]=(1-(g+f))*D,s[1]=(p+A)*D,s[2]=(_-E)*D,s[3]=0,s[4]=(p-A)*w,s[5]=(1-(d+f))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(_+E)*R,s[9]=(m-T)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/r,h=1/a,u=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(o===Fn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===tr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let _,g;if(o===Fn)_=(a+r)*u,g=-2*u;else if(o===tr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new I,gn=new Me,_h=new I(0,0,0),gh=new I(1,1,1),Vn=new I,Es=new I,en=new I,ua=new Me,da=new cs;class us{constructor(t=0,e=0,n=0,s=us.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return da.setFromEuler(this),this.setFromQuaternion(da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const fa=new I,Ti=new cs,Pn=new Me,Ss=new I,Ji=new I,vh=new I,Eh=new cs,pa=new I(1,0,0),ma=new I(0,1,0),_a=new I(0,0,1),Sh={type:"added"},Mh={type:"removed"};class Ae extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new us,n=new cs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Qt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(pa,t)}rotateY(t){return this.rotateOnAxis(ma,t)}rotateZ(t){return this.rotateOnAxis(_a,t)}translateOnAxis(t,e){return fa.copy(t).applyQuaternion(this.quaternion),this.position.add(fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pa,t)}translateY(t){return this.translateOnAxis(ma,t)}translateZ(t){return this.translateOnAxis(_a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ji,Ss,this.up):Pn.lookAt(Ss,Ji,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,On=new I,Ar=new I,Nn=new I,Ai=new I,bi=new I,ga=new I,br=new I,wr=new I,Rr=new I;let Ms=!1;class dn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),On.subVectors(n,e),Ar.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(On),l=xn.dot(Ar),c=On.dot(On),h=On.dot(Ar),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(t,e,n,s,r,a,o,l){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),bi.subVectors(r,n),br.subVectors(t,n);const l=Ai.dot(br),c=bi.dot(br);if(l<=0&&c<=0)return e.copy(n);wr.subVectors(t,s);const h=Ai.dot(wr),u=bi.dot(wr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ai,a);Rr.subVectors(t,r);const p=Ai.dot(Rr),_=bi.dot(Rr);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(bi,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return ga.subVectors(r,s),o=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(ga,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=ch(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Cr(a,r,t+1/3),this.g=Cr(a,r,t),this.b=Cr(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return le.fromWorkingColorSpace(He.copy(this),t),Math.round($e(He.r*255,0,255))*65536+Math.round($e(He.g*255,0,255))*256+Math.round($e(He.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ue){le.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(ys);const n=mr(Wn.h,ys.h,e),s=mr(Wn.s,ys.s,e),r=mr(Wn.l,ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Dt;Dt.NAMES=Uc;let yh=0;class gi extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Hi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mn extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new I,Ts=new ne;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sa&&(t.usage=this.usage),t}}class Fc extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kc extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const ln=new Me,Lr=new Ae,wi=new I,nn=new ls,Qi=new ls,Le=new I;class Je extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?kc:Fc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(nn.min,Qi.min),nn.expandByPoint(Le),Le.addVectors(nn.max,Qi.max),nn.expandByPoint(Le)):(nn.expandByPoint(Qi.min),nn.expandByPoint(Qi.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),Le.add(wi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new I,h[b]=new I;const u=new I,d=new I,p=new I,_=new ne,g=new ne,m=new ne,f=new I,T=new I;function E(b,H,j){u.fromArray(s,b*3),d.fromArray(s,H*3),p.fromArray(s,j*3),_.fromArray(a,b*2),g.fromArray(a,H*2),m.fromArray(a,j*2),d.sub(u),p.sub(u),g.sub(_),m.sub(_);const ot=1/(g.x*m.y-m.x*g.y);isFinite(ot)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(ot),T.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(ot),c[b].add(f),c[H].add(f),c[j].add(f),h[b].add(T),h[H].add(T),h[j].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let b=0,H=A.length;b<H;++b){const j=A[b],ot=j.start,L=j.count;for(let O=ot,V=ot+L;O<V;O+=3)E(n[O+0],n[O+1],n[O+2])}const D=new I,w=new I,R=new I,X=new I;function S(b){R.fromArray(r,b*3),X.copy(R);const H=c[b];D.copy(H),D.sub(R.multiplyScalar(R.dot(H))).normalize(),w.crossVectors(X,H);const ot=w.dot(h[b])<0?-1:1;l[b*4]=D.x,l[b*4+1]=D.y,l[b*4+2]=D.z,l[b*4+3]=ot}for(let b=0,H=A.length;b<H;++b){const j=A[b],ot=j.start,L=j.count;for(let O=ot,V=ot+L;O<V;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new Me,ri=new fo,As=new hs,va=new I,Ri=new I,Ci=new I,Li=new I,Dr=new I,bs=new I,ws=new ne,Rs=new ne,Cs=new ne,Ea=new I,Sa=new I,Ma=new I,Ls=new I,Ds=new I;class at extends Ae{constructor(t=new Je,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Dr.fromBufferAttribute(u,t),a?bs.addScaledVector(Dr,h):bs.addScaledVector(Dr.sub(e),h))}e.add(bs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(As.containsPoint(ri.origin)===!1&&(ri.intersectSphere(As,va)===null||ri.origin.distanceToSquared(va)>(t.far-t.near)**2))&&(xa.copy(r).invert(),ri.copy(t.ray).applyMatrix4(xa),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,D=E;A<D;A+=3){const w=o.getX(A),R=o.getX(A+1),X=o.getX(A+2);s=Is(this,f,t,n,c,h,u,w,R,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const T=o.getX(m),E=o.getX(m+1),A=o.getX(m+2);s=Is(this,a,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,D=E;A<D;A+=3){const w=A,R=A+1,X=A+2;s=Is(this,f,t,n,c,h,u,w,R,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const T=m,E=m+1,A=m+2;s=Is(this,a,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ah(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:i}}function Is(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ri),i.getVertexPosition(l,Ci),i.getVertexPosition(c,Li);const h=Ah(i,t,e,n,Ri,Ci,Li,Ls);if(h){s&&(ws.fromBufferAttribute(s,o),Rs.fromBufferAttribute(s,l),Cs.fromBufferAttribute(s,c),h.uv=dn.getInterpolation(Ls,Ri,Ci,Li,ws,Rs,Cs,new ne)),r&&(ws.fromBufferAttribute(r,o),Rs.fromBufferAttribute(r,l),Cs.fromBufferAttribute(r,c),h.uv1=dn.getInterpolation(Ls,Ri,Ci,Li,ws,Rs,Cs,new ne),h.uv2=h.uv1),a&&(Ea.fromBufferAttribute(a,o),Sa.fromBufferAttribute(a,l),Ma.fromBufferAttribute(a,c),h.normal=dn.getInterpolation(Ls,Ri,Ci,Li,Ea,Sa,Ma,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};dn.getNormal(Ri,Ci,Li,u.normal),h.face=u}return h}class bt extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function _(g,m,f,T,E,A,D,w,R,X,S){const b=A/R,H=D/X,j=A/2,ot=D/2,L=w/2,O=R+1,V=X+1;let Z=0,K=0;const $=new I;for(let J=0;J<V;J++){const nt=J*H-ot;for(let st=0;st<O;st++){const G=st*b-j;$[g]=G*T,$[m]=nt*E,$[f]=L,c.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[f]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(st/R),u.push(1-J/X),Z+=1}}for(let J=0;J<X;J++)for(let nt=0;nt<R;nt++){const st=d+nt+O*J,G=d+nt+O*(J+1),Q=d+(nt+1)+O*(J+1),ht=d+(nt+1)+O*J;l.push(st,G,ht),l.push(G,Q,ht),K+=6}o.addGroup(p,K,S),p+=K,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function bh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){return i.getRenderTarget()===null?i.outputColorSpace:le.workingColorSpace}const wh={clone:Xi,merge:Xe};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Ii=1;class Lh extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Di,Ii,t,e);s.layers=this.layers,this.add(s);const r=new on(Di,Ii,t,e);r.layers=this.layers,this.add(r);const a=new on(Di,Ii,t,e);a.layers=this.layers,this.add(a);const o=new on(Di,Ii,t,e);o.layers=this.layers,this.add(o);const l=new on(Di,Ii,t,e);l.layers=this.layers,this.add(l);const c=new on(Di,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gc extends an{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dh extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===pi?Ue:pn),this.texture=new Gc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bt(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Zn});r.uniforms.tEquirect.value=e;const a=new at(s,r),o=e.minFilter;return e.minFilter===ss&&(e.minFilter=un),new Lh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ir=new I,Ih=new I,Ph=new Qt;class ci{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ir.subVectors(n,e).cross(Ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ph.getNormalMatrix(t),s=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new hs,Ps=new I;class po{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],T=s[13],E=s[14],A=s[15];if(n[0].setComponents(l-r,d-c,m-p,A-f).normalize(),n[1].setComponents(l+r,d+c,m+p,A+f).normalize(),n[2].setComponents(l+a,d+h,m+_,A+T).normalize(),n[3].setComponents(l-a,d-h,m-_,A-T).normalize(),n[4].setComponents(l-o,d-u,m-g,A-E).normalize(),e===Fn)n[5].setComponents(l+o,d+u,m+g,A+E).normalize();else if(e===tr)n[5].setComponents(o,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Oh(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class os extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const T=f*d-a;for(let E=0;E<c;E++){const A=E*u-r;_.push(A,-T,0),g.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const E=T+c*f,A=T+c*(f+1),D=T+1+c*(f+1),w=T+1+c*f;p.push(E,A,w),p.push(A,D,w)}this.setIndex(p),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ru=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$u=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,of=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Nh,alphahash_pars_fragment:Bh,alphamap_fragment:Uh,alphamap_pars_fragment:Fh,alphatest_fragment:kh,alphatest_pars_fragment:Hh,aomap_fragment:zh,aomap_pars_fragment:Gh,batching_pars_vertex:Vh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:qh,bsdfs:Kh,iridescence_fragment:Yh,bumpmap_pars_fragment:jh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:tu,color_pars_fragment:eu,color_pars_vertex:nu,color_vertex:iu,common:su,cube_uv_reflection_fragment:ru,defaultnormal_vertex:ou,displacementmap_pars_vertex:au,displacementmap_vertex:cu,emissivemap_fragment:lu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Ru,envmap_vertex:gu,fog_vertex:xu,fog_pars_vertex:vu,fog_fragment:Eu,fog_pars_fragment:Su,gradientmap_pars_fragment:Mu,lightmap_fragment:yu,lightmap_pars_fragment:Tu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:bu,lights_pars_begin:wu,lights_toon_fragment:Cu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Du,lights_phong_pars_fragment:Iu,lights_physical_fragment:Pu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Nu,lights_fragment_maps:Bu,lights_fragment_end:Uu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:zu,map_fragment:Gu,map_pars_fragment:Vu,map_particle_fragment:Wu,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Ku,morphcolor_vertex:Yu,morphnormal_vertex:ju,morphtarget_pars_vertex:$u,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:td,normal_pars_vertex:ed,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:od,iridescence_pars_fragment:ad,opaque_fragment:cd,packing:ld,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:gd,shadowmap_vertex:xd,shadowmask_pars_fragment:vd,skinbase_vertex:Ed,skinning_pars_vertex:Sd,skinning_vertex:Md,skinnormal_vertex:yd,specularmap_fragment:Td,specularmap_pars_fragment:Ad,tonemapping_fragment:bd,tonemapping_pars_fragment:wd,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Id,worldpos_vertex:Pd,background_vert:Od,background_frag:Nd,backgroundCube_vert:Bd,backgroundCube_frag:Ud,cube_vert:Fd,cube_frag:kd,depth_vert:Hd,depth_frag:zd,distanceRGBA_vert:Gd,distanceRGBA_frag:Vd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:Kd,meshbasic_vert:Yd,meshbasic_frag:jd,meshlambert_vert:$d,meshlambert_frag:Zd,meshmatcap_vert:Jd,meshmatcap_frag:Qd,meshnormal_vert:tf,meshnormal_frag:ef,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:of,meshtoon_vert:af,meshtoon_frag:cf,points_vert:lf,points_frag:hf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},lt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},wn={basic:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Xe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Xe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Xe([lt.points,lt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Xe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Xe([lt.common,lt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Xe([lt.sprite,lt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Xe([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Xe([lt.lights,lt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};wn.physical={uniforms:Xe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Os={r:0,b:0,g:0};function mf(i,t,e,n,s,r,a){const o=new Dt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let T=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?e:t).get(E)),E===null?g(o,l):E&&E.isColor&&(g(E,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===nr)?(h===void 0&&(h=new at(new bt(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Xi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=le.getTransfer(E.colorSpace)!==fe,(u!==E||d!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new at(new os(2,2),new _i({name:"BackgroundMaterial",uniforms:Xi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=le.getTransfer(E.colorSpace)!==fe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Os,Hc(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function _f(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(L,O,V,Z,K){let $=!1;if(a){const J=g(Z,V,O);c!==J&&(c=J,p(c.object)),$=f(L,Z,V,K),$&&T(L,Z,V,K)}else{const J=O.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=J,$=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,X(L,O,V,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,O,V){const Z=V.wireframe===!0;let K=o[L.id];K===void 0&&(K={},o[L.id]=K);let $=K[O.id];$===void 0&&($={},K[O.id]=$);let J=$[Z];return J===void 0&&(J=m(d()),$[Z]=J),J}function m(L){const O=[],V=[],Z=[];for(let K=0;K<s;K++)O[K]=0,V[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:Z,object:L,attributes:{},index:null}}function f(L,O,V,Z){const K=c.attributes,$=O.attributes;let J=0;const nt=V.getAttributes();for(const st in nt)if(nt[st].location>=0){const Q=K[st];let ht=$[st];if(ht===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),Q===void 0||Q.attribute!==ht||ht&&Q.data!==ht.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function T(L,O,V,Z){const K={},$=O.attributes;let J=0;const nt=V.getAttributes();for(const st in nt)if(nt[st].location>=0){let Q=$[st];Q===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const ht={};ht.attribute=Q,Q&&Q.data&&(ht.data=Q.data),K[st]=ht,J++}c.attributes=K,c.attributesNum=J,c.index=Z}function E(){const L=c.newAttributes;for(let O=0,V=L.length;O<V;O++)L[O]=0}function A(L){D(L,0)}function D(L,O){const V=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;V[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),K[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),K[L]=O)}function w(){const L=c.newAttributes,O=c.enabledAttributes;for(let V=0,Z=O.length;V<Z;V++)O[V]!==L[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function R(L,O,V,Z,K,$,J){J===!0?i.vertexAttribIPointer(L,O,V,K,$):i.vertexAttribPointer(L,O,V,Z,K,$)}function X(L,O,V,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const K=Z.attributes,$=V.getAttributes(),J=O.defaultAttributeValues;for(const nt in $){const st=$[nt];if(st.location>=0){let G=K[nt];if(G===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const Q=G.normalized,ht=G.itemSize,vt=e.get(G);if(vt===void 0)continue;const pt=vt.buffer,Vt=vt.type,Xt=vt.bytesPerElement,Pt=n.isWebGL2===!0&&(Vt===i.INT||Vt===i.UNSIGNED_INT||G.gpuType===Mc);if(G.isInterleavedBufferAttribute){const ee=G.data,N=ee.stride,Ge=G.offset;if(ee.isInstancedInterleavedBuffer){for(let Rt=0;Rt<st.locationSize;Rt++)D(st.location+Rt,ee.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Rt=0;Rt<st.locationSize;Rt++)A(st.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Rt=0;Rt<st.locationSize;Rt++)R(st.location+Rt,ht/st.locationSize,Vt,Q,N*Xt,(Ge+ht/st.locationSize*Rt)*Xt,Pt)}else{if(G.isInstancedBufferAttribute){for(let ee=0;ee<st.locationSize;ee++)D(st.location+ee,G.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ee=0;ee<st.locationSize;ee++)A(st.location+ee);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ee=0;ee<st.locationSize;ee++)R(st.location+ee,ht/st.locationSize,Vt,Q,ht*Xt,ht/st.locationSize*ee*Xt,Pt)}}else if(J!==void 0){const Q=J[nt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(st.location,Q);break;case 3:i.vertexAttrib3fv(st.location,Q);break;case 4:i.vertexAttrib4fv(st.location,Q);break;default:i.vertexAttrib1fv(st.location,Q)}}}}w()}function S(){j();for(const L in o){const O=o[L];for(const V in O){const Z=O[V];for(const K in Z)_(Z[K].object),delete Z[K];delete O[V]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const V in O){const Z=O[V];for(const K in Z)_(Z[K].object),delete Z[K];delete O[V]}delete o[L.id]}function H(L){for(const O in o){const V=o[O];if(V[L.id]===void 0)continue;const Z=V[L.id];for(const K in Z)_(Z[K].object),delete Z[K];delete V[L.id]}}function j(){ot(),h=!0,c!==l&&(c=l,p(c.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:j,resetDefaultState:ot,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:A,disableUnusedAttributes:w}}function gf(i,t,e,n){const s=n.isWebGL2;let r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,A=a||t.has("OES_texture_float"),D=E&&A,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:w}}function vf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ci,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,E=T*4;let A=f.clippingState||null;l.value=A,A=h(_,d,E,p);for(let D=0;D!==E;++D)A[D]=e[D];f.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,A=p;E!==g;++E,A+=4)a.copy(u[E]).applyMatrix4(T,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ef(i){let t=new WeakMap;function e(a,o){return o===Qr?a.mapping=Gi:o===to&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qr||o===to)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dh(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wc extends zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,ya=[.125,.215,.35,.446,.526,.582],ui=20,Pr=new Wc,Ta=new Dt;let Or=null,Nr=0,Br=0;const li=(1+Math.sqrt(5))/2,Pi=1/li,Aa=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,li,Pi),new I(0,li,-Pi),new I(Pi,0,li),new I(-Pi,0,li),new I(li,Pi,0),new I(-li,Pi,0)];class ba{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Or=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ra(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,Nr,Br),t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:rs,format:Mn,colorSpace:kn,depthBuffer:!1},s=wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(r)),this._blurMaterial=Mf(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,s){const o=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ta),h.toneMapping=Jn,h.autoClear=!1;const p=new mn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),_=new at(new bt,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ta),g=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;Ns(s,T*E,f>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ra());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Aa[(s-1)%Aa.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const f=[];let T=0;for(let R=0;R<ui;++R){const X=R/g,S=Math.exp(-X*X/2);f.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const A=this._sizeLods[s],D=3*A*(s>E-Fi?s-E+Fi:0),w=4*(this._cubeSize-A);Ns(e,D,w,3*A,2*A),l.setRenderTarget(e),l.render(u,Pr)}}function Sf(i){const t=[],e=[],n=[];let s=i;const r=i-Fi+1+ya.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fi?l=ya[a-i+Fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,T=new Float32Array(g*_*p),E=new Float32Array(m*_*p),A=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,X=w>2?0:-1,S=[R,X,0,R+2/3,X,0,R+2/3,X+1,0,R,X,0,R+2/3,X+1,0,R,X+1,0];T.set(S,g*_*w),E.set(d,m*_*w);const b=[w,w,w,w,w,w];A.set(b,f*_*w)}const D=new Je;D.setAttribute("position",new Tn(T,g)),D.setAttribute("uv",new Tn(E,m)),D.setAttribute("faceIndex",new Tn(A,f)),t.push(D),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wa(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mf(i,t,e){const n=new Float32Array(ui),s=new I(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ra(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ca(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qr||l===to,h=l===Gi||l===Vi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ba(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ba(i));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Af(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const T=p.array;g=p.version;for(let E=0,A=T.length;E<A;E+=3){const D=T[E+0],w=T[E+1],R=T[E+2];d.push(D,w,w,R,R,D)}}else if(_!==void 0){const T=_.array;g=_.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const D=E+0,w=E+1,R=E+2;d.push(D,w,w,R,R,D)}}else return;const m=new(Ic(d)?kc:Fc)(d,1);m.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bf(i,t,e,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){i.drawElements(r,_,o,p*l),e.update(_,r,1)}function u(p,_,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,g),e.update(_,r,g)}function d(p,_,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,g);let f=0;for(let T=0;T<g;T++)f+=_[T];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function wf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rf(i,t){return i[0]-t[0]}function Cf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Lf(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new Pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let O=function(){ot.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let S=0;E===!0&&(S=1),A===!0&&(S=2),D===!0&&(S=3);let b=h.attributes.position.count*S,H=1;b>t.maxTextureSize&&(H=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const j=new Float32Array(b*H*4*g),ot=new Nc(j,b,H,g);ot.type=$n,ot.needsUpdate=!0;const L=S*4;for(let V=0;V<g;V++){const Z=w[V],K=R[V],$=X[V],J=b*H*4*V;for(let nt=0;nt<Z.count;nt++){const st=nt*L;E===!0&&(a.fromBufferAttribute(Z,nt),j[J+st+0]=a.x,j[J+st+1]=a.y,j[J+st+2]=a.z,j[J+st+3]=0),A===!0&&(a.fromBufferAttribute(K,nt),j[J+st+4]=a.x,j[J+st+5]=a.y,j[J+st+6]=a.z,j[J+st+7]=0),D===!0&&(a.fromBufferAttribute($,nt),j[J+st+8]=a.x,j[J+st+9]=a.y,j[J+st+10]=a.z,j[J+st+11]=$.itemSize===4?a.w:1)}}m={count:g,texture:ot,size:new ne(b,H)},r.set(h,m),h.addEventListener("dispose",O)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const T=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",T),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let A=0;A<_;A++)g[A]=[A,0];n[h.id]=g}for(let A=0;A<_;A++){const D=g[A];D[0]=A,D[1]=d[A]}g.sort(Cf);for(let A=0;A<8;A++)A<_&&g[A][1]?(o[A][0]=g[A][0],o[A][1]=g[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(Rf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let T=0;for(let A=0;A<8;A++){const D=o[A],w=D[0],R=D[1];w!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+A)!==m[w]&&h.setAttribute("morphTarget"+A,m[w]),f&&h.getAttribute("morphNormal"+A)!==f[w]&&h.setAttribute("morphNormal"+A,f[w]),s[A]=R,T+=R):(m&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),f&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}const E=h.morphTargetsRelative?1:1-T;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Df(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Xc extends an{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:fi,h!==fi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fi&&(n=jn),n===void 0&&h===Wi&&(n=di),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qc=new an,Kc=new Xc(1,1);Kc.compareFunction=Dc;const Yc=new Nc,jc=new ph,$c=new Gc,La=[],Da=[],Ia=new Float32Array(16),Pa=new Float32Array(9),Oa=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=La[s];if(r===void 0&&(r=new Float32Array(s),La[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sr(i,t){let e=Da[t];e===void 0&&(e=new Int32Array(t),Da[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function If(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Oa.set(n),i.uniformMatrix2fv(this.addr,!1,Oa),we(e,n)}}function Uf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Pa.set(n),i.uniformMatrix3fv(this.addr,!1,Pa),we(e,n)}}function Ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Ia.set(n),i.uniformMatrix4fv(this.addr,!1,Ia),we(e,n)}}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Vf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Kc:qc;e.setTexture2D(t||r,s)}function Yf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jc,s)}function jf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$c,s)}function $f(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yc,s)}function Zf(i){switch(i){case 5126:return If;case 35664:return Pf;case 35665:return Of;case 35666:return Nf;case 35674:return Bf;case 35675:return Uf;case 35676:return Ff;case 5124:case 35670:return kf;case 35667:case 35671:return Hf;case 35668:case 35672:return zf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return $f}}function Jf(i,t){i.uniform1fv(this.addr,t)}function Qf(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function tp(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function ep(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function np(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ip(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sp(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rp(i,t){i.uniform1iv(this.addr,t)}function op(i,t){i.uniform2iv(this.addr,t)}function ap(i,t){i.uniform3iv(this.addr,t)}function cp(i,t){i.uniform4iv(this.addr,t)}function lp(i,t){i.uniform1uiv(this.addr,t)}function hp(i,t){i.uniform2uiv(this.addr,t)}function up(i,t){i.uniform3uiv(this.addr,t)}function dp(i,t){i.uniform4uiv(this.addr,t)}function fp(i,t,e){const n=this.cache,s=t.length,r=sr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qc,r[a])}function pp(i,t,e){const n=this.cache,s=t.length,r=sr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jc,r[a])}function mp(i,t,e){const n=this.cache,s=t.length,r=sr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$c,r[a])}function _p(i,t,e){const n=this.cache,s=t.length,r=sr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yc,r[a])}function gp(i){switch(i){case 5126:return Jf;case 35664:return Qf;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return op;case 35668:case 35672:return ap;case 35669:case 35673:return cp;case 5125:return lp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return _p}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zf(e.type)}}class vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gp(e.type)}}class Ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function Na(i,t){i.seq.push(t),i.map[t.id]=t}function Sp(i,t,e){const n=i.name,s=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),a=Ur.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Na(e,c===void 0?new xp(o,i,t):new vp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ep(o),Na(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ba(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Mp=37297;let yp=0;function Tp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ap(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===Qs&&e===Js?n="LinearDisplayP3ToLinearSRGB":t===Js&&e===Qs&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case ir:return[n,"LinearTransferOETF"];case Ue:case uo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ua(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Tp(i.getShaderSource(t),a)}else return s}function bp(i,t){const e=Ap(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wp(i,t){let e;switch(t){case Ul:e="Linear";break;case Fl:e="Reinhard";break;case kl:e="OptimizedCineon";break;case Hl:e="ACESFilmic";break;case Gl:e="AgX";break;case zl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function Cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ki).join(`
`)}function Lp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ki(i){return i!==""}function Fa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ka(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(Ip,Op)}const Pp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Op(i,t){let e=Kt[t];if(e===void 0){const n=Pp.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ha(i){return i.replace(Np,Bp)}function Bp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function za(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Up(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Fp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Nl:t="ENVMAP_BLENDING_MIX";break;case Bl:t="ENVMAP_BLENDING_ADD";break}return t}function zp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Up(e),c=Fp(e),h=kp(e),u=Hp(e),d=zp(e),p=e.isWebGL2?"":Rp(e),_=Cp(e),g=Lp(r),m=s.createProgram();let f,T,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),f.length>0&&(f+=`
`),T=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),T.length>0&&(T+=`
`)):(f=[za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),T=[p,za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?wp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,bp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),a=oo(a),a=Fa(a,e),a=ka(a,e),o=oo(o),o=Fa(o,e),o=ka(o,e),a=Ha(a),o=Ha(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const A=E+f+a,D=E+T+o,w=Ba(s,s.VERTEX_SHADER,A),R=Ba(s,s.FRAGMENT_SHADER,D);s.attachShader(m,w),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function X(j){if(i.debug.checkShaderErrors){const ot=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(R).trim();let V=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,R);else{const K=Ua(s,w,"vertex"),$=Ua(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+K+`
`+$)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(L===""||O==="")&&(Z=!1);Z&&(j.diagnostics={runnable:V,programLog:ot,vertexShader:{log:L,prefix:f},fragmentShader:{log:O,prefix:T}})}s.deleteShader(w),s.deleteShader(R),S=new Ys(s,m),b=Dp(s,m)}let S;this.getUniforms=function(){return S===void 0&&X(this),S};let b;this.getAttributes=function(){return b===void 0&&X(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,Mp)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let Vp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xp(t),e.set(t,n)),n}}class Xp{constructor(t){this.id=Vp++,this.code=t,this.usedTimes=0}}function qp(i,t,e,n,s,r,a){const o=new Bc,l=new Wp,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,b,H,j,ot){const L=j.fog,O=ot.geometry,V=S.isMeshStandardMaterial?j.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),K=Z&&Z.mapping===nr?Z.image.height:null,$=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=J!==void 0?J.length:0;let st=0;O.morphAttributes.position!==void 0&&(st=1),O.morphAttributes.normal!==void 0&&(st=2),O.morphAttributes.color!==void 0&&(st=3);let G,Q,ht,vt;if($){const Ve=wn[$];G=Ve.vertexShader,Q=Ve.fragmentShader}else G=S.vertexShader,Q=S.fragmentShader,l.update(S),ht=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const pt=i.getRenderTarget(),Vt=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,Pt=!!S.map,ee=!!S.matcap,N=!!Z,Ge=!!S.aoMap,Rt=!!S.lightMap,Ft=!!S.bumpMap,Et=!!S.normalMap,_e=!!S.displacementMap,Yt=!!S.emissiveMap,y=!!S.metalnessMap,v=!!S.roughnessMap,U=S.anisotropy>0,it=S.clearcoat>0,et=S.iridescence>0,rt=S.sheen>0,yt=S.transmission>0,ft=U&&!!S.anisotropyMap,gt=it&&!!S.clearcoatMap,It=it&&!!S.clearcoatNormalMap,jt=it&&!!S.clearcoatRoughnessMap,tt=et&&!!S.iridescenceMap,ce=et&&!!S.iridescenceThicknessMap,te=rt&&!!S.sheenColorMap,Bt=rt&&!!S.sheenRoughnessMap,wt=!!S.specularMap,xt=!!S.specularColorMap,qt=!!S.specularIntensityMap,oe=yt&&!!S.transmissionMap,ve=yt&&!!S.thicknessMap,Zt=!!S.gradientMap,ct=!!S.alphaMap,C=S.alphaTest>0,ut=!!S.alphaHash,dt=!!S.extensions,Ot=!!O.attributes.uv1,Ct=!!O.attributes.uv2,he=!!O.attributes.uv3;let ue=Jn;return S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ue=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:Q,defines:S.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Xt,instancing:Vt,instancingColor:Vt&&ot.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:kn,map:Pt,matcap:ee,envMap:N,envMapMode:N&&Z.mapping,envMapCubeUVHeight:K,aoMap:Ge,lightMap:Rt,bumpMap:Ft,normalMap:Et,displacementMap:d&&_e,emissiveMap:Yt,normalMapObjectSpace:Et&&S.normalMapType===th,normalMapTangentSpace:Et&&S.normalMapType===Lc,metalnessMap:y,roughnessMap:v,anisotropy:U,anisotropyMap:ft,clearcoat:it,clearcoatMap:gt,clearcoatNormalMap:It,clearcoatRoughnessMap:jt,iridescence:et,iridescenceMap:tt,iridescenceThicknessMap:ce,sheen:rt,sheenColorMap:te,sheenRoughnessMap:Bt,specularMap:wt,specularColorMap:xt,specularIntensityMap:qt,transmission:yt,transmissionMap:oe,thicknessMap:ve,gradientMap:Zt,opaque:S.transparent===!1&&S.blending===Hi,alphaMap:ct,alphaTest:C,alphaHash:ut,combine:S.combine,mapUv:Pt&&g(S.map.channel),aoMapUv:Ge&&g(S.aoMap.channel),lightMapUv:Rt&&g(S.lightMap.channel),bumpMapUv:Ft&&g(S.bumpMap.channel),normalMapUv:Et&&g(S.normalMap.channel),displacementMapUv:_e&&g(S.displacementMap.channel),emissiveMapUv:Yt&&g(S.emissiveMap.channel),metalnessMapUv:y&&g(S.metalnessMap.channel),roughnessMapUv:v&&g(S.roughnessMap.channel),anisotropyMapUv:ft&&g(S.anisotropyMap.channel),clearcoatMapUv:gt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(S.sheenRoughnessMap.channel),specularMapUv:wt&&g(S.specularMap.channel),specularColorMapUv:xt&&g(S.specularColorMap.channel),specularIntensityMapUv:qt&&g(S.specularIntensityMap.channel),transmissionMapUv:oe&&g(S.transmissionMap.channel),thicknessMapUv:ve&&g(S.thicknessMap.channel),alphaMapUv:ct&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Et||U),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Ct,vertexUv3s:he,pointsUvs:ot.isPoints===!0&&!!O.attributes.uv&&(Pt||ct),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ot.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:dt&&S.extensions.derivatives===!0,extensionFragDepth:dt&&S.extensions.fragDepth===!0,extensionDrawBuffers:dt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(T(b,S),E(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function T(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function A(S){const b=_[S.type];let H;if(b){const j=wn[b];H=wh.clone(j.uniforms)}else H=S.uniforms;return H}function D(S,b){let H;for(let j=0,ot=c.length;j<ot;j++){const L=c[j];if(L.cacheKey===b){H=L,++H.usedTimes;break}}return H===void 0&&(H=new Gp(i,b,S,r),c.push(H)),H}function w(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:D,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:X}}function Kp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ga(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Va(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,_,g,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Yp),n.length>1&&n.sort(d||Ga),s.length>1&&s.sort(d||Ga)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Va,i.set(n,[a])):s>=r.length?(a=new Va,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Dt};break;case"SpotLight":e={position:new I,direction:new I,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jp=0;function Qp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tm(i,t){const e=new $p,n=Zp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);const r=new I,a=new Me,o=new Me;function l(h,u){let d=0,p=0,_=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let g=0,m=0,f=0,T=0,E=0,A=0,D=0,w=0,R=0,X=0,S=0;h.sort(Qp);const b=u===!0?Math.PI:1;for(let j=0,ot=h.length;j<ot;j++){const L=h[j],O=L.color,V=L.intensity,Z=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*V*b,p+=O.g*V*b,_+=O.b*V*b;else if(L.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(L.sh.coefficients[$],V);S++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const J=L.shadow,nt=n.get(L);nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,s.directionalShadow[g]=nt,s.directionalShadowMap[g]=K,s.directionalShadowMatrix[g]=L.shadow.matrix,A++}s.directional[g]=$,g++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(O).multiplyScalar(V*b),$.distance=Z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,s.spot[f]=$;const J=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,J.updateMatrices(L),L.castShadow&&X++),s.spotLightMatrix[f]=J.matrix,L.castShadow){const nt=n.get(L);nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,s.spotShadow[f]=nt,s.spotShadowMap[f]=K,w++}f++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(O).multiplyScalar(V),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),s.rectArea[T]=$,T++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*b),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,nt=n.get(L);nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,s.pointShadow[m]=nt,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=L.shadow.matrix,D++}s.point[m]=$,m++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(V*b),$.groundColor.copy(L.groundColor).multiplyScalar(V*b),s.hemi[E]=$,E++}}T>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==g||H.pointLength!==m||H.spotLength!==f||H.rectAreaLength!==T||H.hemiLength!==E||H.numDirectionalShadows!==A||H.numPointShadows!==D||H.numSpotShadows!==w||H.numSpotMaps!==R||H.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=T,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=w+R-X,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=S,H.directionalLength=g,H.pointLength=m,H.spotLength=f,H.rectAreaLength=T,H.hemiLength=E,H.numDirectionalShadows=A,H.numPointShadows=D,H.numSpotShadows=w,H.numSpotMaps=R,H.numLightProbes=S,s.version=Jp++)}function c(h,u){let d=0,p=0,_=0,g=0,m=0;const f=u.matrixWorldInverse;for(let T=0,E=h.length;T<E;T++){const A=h[T];if(A.isDirectionalLight){const D=s.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),d++}else if(A.isSpotLight){const D=s.spot[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),_++}else if(A.isRectAreaLight){const D=s.rectArea[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const D=s.point[p];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){const D=s.hemi[m];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Wa(i,t){const e=new tm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function em(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Wa(i,t),e.set(r,[l])):a>=o.length?(l=new Wa(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class nm extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class im extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function om(i,t,e){let n=new po;const s=new ne,r=new ne,a=new Pe,o=new nm({depthPacking:Ql}),l=new im,c={},h=e.maxTextureSize,u={[ti]:Ze,[Ze]:ti,[fn]:fn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:sm,fragmentShader:rm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Je;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new at(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let f=this.type;this.render=function(w,R,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Zn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ot=f!==Un&&this.type===Un,L=f===Un&&this.type!==Un;for(let O=0,V=w.length;O<V;O++){const Z=w[O],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const $=K.getFrameExtents();if(s.multiply($),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,K.mapSize.y=r.y)),K.map===null||ot===!0||L===!0){const nt=this.type!==Un?{minFilter:qe,magFilter:qe}:{};K.map!==null&&K.map.dispose(),K.map=new mi(s.x,s.y,nt),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const J=K.getViewportCount();for(let nt=0;nt<J;nt++){const st=K.getViewport(nt);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),j.viewport(a),K.updateMatrices(Z,nt),n=K.getFrustum(),A(R,X,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Un&&T(K,X),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,H)};function T(w,R){const X=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,X,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,X,p,g,null)}function E(w,R,X,S){let b=null;const H=X.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)b=H;else if(b=X.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=b.uuid,ot=R.uuid;let L=c[j];L===void 0&&(L={},c[j]=L);let O=L[ot];O===void 0&&(O=b.clone(),L[ot]=O,R.addEventListener("dispose",D)),b=O}if(b.visible=R.visible,b.wireframe=R.wireframe,S===Un?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=i.properties.get(b);j.light=X}return b}function A(w,R,X,S,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld);const ot=t.update(w),L=w.material;if(Array.isArray(L)){const O=ot.groups;for(let V=0,Z=O.length;V<Z;V++){const K=O[V],$=L[K.materialIndex];if($&&$.visible){const J=E(w,$,S,b);w.onBeforeShadow(i,w,R,X,ot,J,K),i.renderBufferDirect(X,null,ot,J,w,K),w.onAfterShadow(i,w,R,X,ot,J,K)}}}else if(L.visible){const O=E(w,L,S,b);w.onBeforeShadow(i,w,R,X,ot,O,null),i.renderBufferDirect(X,null,ot,O,w,null),w.onAfterShadow(i,w,R,X,ot,O,null)}}const j=w.children;for(let ot=0,L=j.length;ot<L;ot++)A(j[ot],R,X,S,b)}function D(w){w.target.removeEventListener("dispose",D);for(const X in c){const S=c[X],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function am(i,t,e){const n=e.isWebGL2;function s(){let C=!1;const ut=new Pe;let dt=null;const Ot=new Pe(0,0,0,0);return{setMask:function(Ct){dt!==Ct&&!C&&(i.colorMask(Ct,Ct,Ct,Ct),dt=Ct)},setLocked:function(Ct){C=Ct},setClear:function(Ct,he,ue,Re,Ve){Ve===!0&&(Ct*=Re,he*=Re,ue*=Re),ut.set(Ct,he,ue,Re),Ot.equals(ut)===!1&&(i.clearColor(Ct,he,ue,Re),Ot.copy(ut))},reset:function(){C=!1,dt=null,Ot.set(-1,0,0,0)}}}function r(){let C=!1,ut=null,dt=null,Ot=null;return{setTest:function(Ct){Ct?Xt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Ct){ut!==Ct&&!C&&(i.depthMask(Ct),ut=Ct)},setFunc:function(Ct){if(dt!==Ct){switch(Ct){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Dl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Pl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Ct}},setLocked:function(Ct){C=Ct},setClear:function(Ct){Ot!==Ct&&(i.clearDepth(Ct),Ot=Ct)},reset:function(){C=!1,ut=null,dt=null,Ot=null}}}function a(){let C=!1,ut=null,dt=null,Ot=null,Ct=null,he=null,ue=null,Re=null,Ve=null;return{setTest:function(de){C||(de?Xt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(de){ut!==de&&!C&&(i.stencilMask(de),ut=de)},setFunc:function(de,We,An){(dt!==de||Ot!==We||Ct!==An)&&(i.stencilFunc(de,We,An),dt=de,Ot=We,Ct=An)},setOp:function(de,We,An){(he!==de||ue!==We||Re!==An)&&(i.stencilOp(de,We,An),he=de,ue=We,Re=An)},setLocked:function(de){C=de},setClear:function(de){Ve!==de&&(i.clearStencil(de),Ve=de)},reset:function(){C=!1,ut=null,dt=null,Ot=null,Ct=null,he=null,ue=null,Re=null,Ve=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,T=null,E=null,A=null,D=null,w=null,R=null,X=null,S=new Dt(0,0,0),b=0,H=!1,j=null,ot=null,L=null,O=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=$>=2);let nt=null,st={};const G=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ht=new Pe().fromArray(G),vt=new Pe().fromArray(Q);function pt(C,ut,dt,Ot){const Ct=new Uint8Array(4),he=i.createTexture();i.bindTexture(C,he),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<dt;ue++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(ut+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return he}const Vt={};Vt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Vt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Vt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Vt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Xt(i.DEPTH_TEST),l.setFunc($s),Yt(!1),y(Ao),Xt(i.CULL_FACE),Et(Zn);function Xt(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function Pt(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function ee(C,ut){return p[C]!==ut?(i.bindFramebuffer(C,ut),p[C]=ut,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ut),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function N(C,ut){let dt=g,Ot=!1;if(C)if(dt=_.get(ut),dt===void 0&&(dt=[],_.set(ut,dt)),C.isWebGLMultipleRenderTargets){const Ct=C.texture;if(dt.length!==Ct.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let he=0,ue=Ct.length;he<ue;he++)dt[he]=i.COLOR_ATTACHMENT0+he;dt.length=Ct.length,Ot=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Ot=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Ot=!0);Ot&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Ge(C){return m!==C?(i.useProgram(C),m=C,!0):!1}const Rt={[hi]:i.FUNC_ADD,[fl]:i.FUNC_SUBTRACT,[pl]:i.FUNC_REVERSE_SUBTRACT};if(n)Rt[Co]=i.MIN,Rt[Lo]=i.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(Rt[Co]=C.MIN_EXT,Rt[Lo]=C.MAX_EXT)}const Ft={[ml]:i.ZERO,[_l]:i.ONE,[gl]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[yl]:i.SRC_ALPHA_SATURATE,[Sl]:i.DST_COLOR,[vl]:i.DST_ALPHA,[xl]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[Ml]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[Tl]:i.CONSTANT_COLOR,[Al]:i.ONE_MINUS_CONSTANT_COLOR,[bl]:i.CONSTANT_ALPHA,[wl]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(C,ut,dt,Ot,Ct,he,ue,Re,Ve,de){if(C===Zn){f===!0&&(Pt(i.BLEND),f=!1);return}if(f===!1&&(Xt(i.BLEND),f=!0),C!==dl){if(C!==T||de!==H){if((E!==hi||w!==hi)&&(i.blendEquation(i.FUNC_ADD),E=hi,w=hi),de)switch(C){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,D=null,R=null,X=null,S.set(0,0,0),b=0,T=C,H=de}return}Ct=Ct||ut,he=he||dt,ue=ue||Ot,(ut!==E||Ct!==w)&&(i.blendEquationSeparate(Rt[ut],Rt[Ct]),E=ut,w=Ct),(dt!==A||Ot!==D||he!==R||ue!==X)&&(i.blendFuncSeparate(Ft[dt],Ft[Ot],Ft[he],Ft[ue]),A=dt,D=Ot,R=he,X=ue),(Re.equals(S)===!1||Ve!==b)&&(i.blendColor(Re.r,Re.g,Re.b,Ve),S.copy(Re),b=Ve),T=C,H=!1}function _e(C,ut){C.side===fn?Pt(i.CULL_FACE):Xt(i.CULL_FACE);let dt=C.side===Ze;ut&&(dt=!dt),Yt(dt),C.blending===Hi&&C.transparent===!1?Et(Zn):Et(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Ot=C.stencilWrite;c.setTest(Ot),Ot&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),U(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Xt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(C){j!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),j=C)}function y(C){C!==ll?(Xt(i.CULL_FACE),C!==ot&&(C===Ao?i.cullFace(i.BACK):C===hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),ot=C}function v(C){C!==L&&(K&&i.lineWidth(C),L=C)}function U(C,ut,dt){C?(Xt(i.POLYGON_OFFSET_FILL),(O!==ut||V!==dt)&&(i.polygonOffset(ut,dt),O=ut,V=dt)):Pt(i.POLYGON_OFFSET_FILL)}function it(C){C?Xt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function et(C){C===void 0&&(C=i.TEXTURE0+Z-1),nt!==C&&(i.activeTexture(C),nt=C)}function rt(C,ut,dt){dt===void 0&&(nt===null?dt=i.TEXTURE0+Z-1:dt=nt);let Ot=st[dt];Ot===void 0&&(Ot={type:void 0,texture:void 0},st[dt]=Ot),(Ot.type!==C||Ot.texture!==ut)&&(nt!==dt&&(i.activeTexture(dt),nt=dt),i.bindTexture(C,ut||Vt[C]),Ot.type=C,Ot.texture=ut)}function yt(){const C=st[nt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ft(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function jt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qt(C){ht.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ht.copy(C))}function oe(C){vt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),vt.copy(C))}function ve(C,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Ot=dt.get(C);Ot===void 0&&(Ot=i.getUniformBlockIndex(ut,C.name),dt.set(C,Ot))}function Zt(C,ut){const Ot=u.get(ut).get(C);h.get(ut)!==Ot&&(i.uniformBlockBinding(ut,Ot,C.__bindingPointIndex),h.set(ut,Ot))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},nt=null,st={},p={},_=new WeakMap,g=[],m=null,f=!1,T=null,E=null,A=null,D=null,w=null,R=null,X=null,S=new Dt(0,0,0),b=0,H=!1,j=null,ot=null,L=null,O=null,V=null,ht.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Xt,disable:Pt,bindFramebuffer:ee,drawBuffers:N,useProgram:Ge,setBlending:Et,setMaterial:_e,setFlipSided:Yt,setCullFace:y,setLineWidth:v,setPolygonOffset:U,setScissorTest:it,activeTexture:et,bindTexture:rt,unbindTexture:yt,compressedTexImage2D:ft,compressedTexImage3D:gt,texImage2D:wt,texImage3D:xt,updateUBOMapping:ve,uniformBlockBinding:Zt,texStorage2D:te,texStorage3D:Bt,texSubImage2D:It,texSubImage3D:jt,compressedTexSubImage2D:tt,compressedTexSubImage3D:ce,scissor:qt,viewport:oe,reset:ct}}function cm(i,t,e,n,s,r,a){const o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return p?new OffscreenCanvas(y,v):er("canvas")}function g(y,v,U,it){let et=1;if((y.width>it||y.height>it)&&(et=it/Math.max(y.width,y.height)),et<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const rt=v?ro:Math.floor,yt=rt(et*y.width),ft=rt(et*y.height);u===void 0&&(u=_(yt,ft));const gt=U?_(yt,ft):u;return gt.width=yt,gt.height=ft,gt.getContext("2d").drawImage(y,0,0,yt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+yt+"x"+ft+")."),gt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function m(y){return oa(y.width)&&oa(y.height)}function f(y){return o?!1:y.wrapS!==Sn||y.wrapT!==Sn||y.minFilter!==qe&&y.minFilter!==un}function T(y,v){return y.generateMipmaps&&v&&y.minFilter!==qe&&y.minFilter!==un}function E(y){i.generateMipmap(y)}function A(y,v,U,it,et=!1){if(o===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let rt=v;if(v===i.RED&&(U===i.FLOAT&&(rt=i.R32F),U===i.HALF_FLOAT&&(rt=i.R16F),U===i.UNSIGNED_BYTE&&(rt=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(rt=i.R8UI),U===i.UNSIGNED_SHORT&&(rt=i.R16UI),U===i.UNSIGNED_INT&&(rt=i.R32UI),U===i.BYTE&&(rt=i.R8I),U===i.SHORT&&(rt=i.R16I),U===i.INT&&(rt=i.R32I)),v===i.RG&&(U===i.FLOAT&&(rt=i.RG32F),U===i.HALF_FLOAT&&(rt=i.RG16F),U===i.UNSIGNED_BYTE&&(rt=i.RG8)),v===i.RGBA){const yt=et?Zs:le.getTransfer(it);U===i.FLOAT&&(rt=i.RGBA32F),U===i.HALF_FLOAT&&(rt=i.RGBA16F),U===i.UNSIGNED_BYTE&&(rt=yt===fe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function D(y,v,U){return T(y,U)===!0||y.isFramebufferTexture&&y.minFilter!==qe&&y.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function w(y){return y===qe||y===Do||y===lr?i.NEAREST:i.LINEAR}function R(y){const v=y.target;v.removeEventListener("dispose",R),S(v),v.isVideoTexture&&h.delete(v)}function X(y){const v=y.target;v.removeEventListener("dispose",X),H(v)}function S(y){const v=n.get(y);if(v.__webglInit===void 0)return;const U=y.source,it=d.get(U);if(it){const et=it[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(y),Object.keys(it).length===0&&d.delete(U)}n.remove(y)}function b(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const U=y.source,it=d.get(U);delete it[v.__cacheKey],a.memory.textures--}function H(y){const v=y.texture,U=n.get(y),it=n.get(v);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(U.__webglFramebuffer[et]))for(let rt=0;rt<U.__webglFramebuffer[et].length;rt++)i.deleteFramebuffer(U.__webglFramebuffer[et][rt]);else i.deleteFramebuffer(U.__webglFramebuffer[et]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[et])}else{if(Array.isArray(U.__webglFramebuffer))for(let et=0;et<U.__webglFramebuffer.length;et++)i.deleteFramebuffer(U.__webglFramebuffer[et]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let et=0;et<U.__webglColorRenderbuffer.length;et++)U.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[et]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let et=0,rt=v.length;et<rt;et++){const yt=n.get(v[et]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(v[et])}n.remove(v),n.remove(y)}let j=0;function ot(){j=0}function L(){const y=j;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),j+=1,y}function O(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function V(y,v){const U=n.get(y);if(y.isVideoTexture&&_e(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const it=y.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(U,y,v);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function Z(y,v){const U=n.get(y);if(y.version>0&&U.__version!==y.version){ht(U,y,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function K(y,v){const U=n.get(y);if(y.version>0&&U.__version!==y.version){ht(U,y,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function $(y,v){const U=n.get(y);if(y.version>0&&U.__version!==y.version){vt(U,y,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const J={[eo]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},nt={[qe]:i.NEAREST,[Do]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Vl]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},st={[eh]:i.NEVER,[ah]:i.ALWAYS,[nh]:i.LESS,[Dc]:i.LEQUAL,[ih]:i.EQUAL,[oh]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function G(y,v,U){if(U?(i.texParameteri(y,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,J[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,nt[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,nt[v.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Sn||v.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==qe&&v.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,st[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===qe||v.minFilter!==lr&&v.minFilter!==ss||v.type===$n&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===rs&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Q(y,v){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));const it=v.source;let et=d.get(it);et===void 0&&(et={},d.set(it,et));const rt=O(v);if(rt!==y.__cacheKey){et[rt]===void 0&&(et[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),et[rt].usedTimes++;const yt=et[y.__cacheKey];yt!==void 0&&(et[y.__cacheKey].usedTimes--,yt.usedTimes===0&&b(v)),y.__cacheKey=rt,y.__webglTexture=et[rt].texture}return U}function ht(y,v,U){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);const et=Q(y,v),rt=v.source;e.bindTexture(it,y.__webglTexture,i.TEXTURE0+U);const yt=n.get(rt);if(rt.version!==yt.__version||et===!0){e.activeTexture(i.TEXTURE0+U);const ft=le.getPrimaries(le.workingColorSpace),gt=v.colorSpace===pn?null:le.getPrimaries(v.colorSpace),It=v.colorSpace===pn||ft===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const jt=f(v)&&m(v.image)===!1;let tt=g(v.image,jt,!1,s.maxTextureSize);tt=Yt(v,tt);const ce=m(tt)||o,te=r.convert(v.format,v.colorSpace);let Bt=r.convert(v.type),wt=A(v.internalFormat,te,Bt,v.colorSpace,v.isVideoTexture);G(it,v,ce);let xt;const qt=v.mipmaps,oe=o&&v.isVideoTexture!==!0&&wt!==Rc,ve=yt.__version===void 0||et===!0,Zt=D(v,tt,ce);if(v.isDepthTexture)wt=i.DEPTH_COMPONENT,o?v.type===$n?wt=i.DEPTH_COMPONENT32F:v.type===jn?wt=i.DEPTH_COMPONENT24:v.type===di?wt=i.DEPTH24_STENCIL8:wt=i.DEPTH_COMPONENT16:v.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===fi&&wt===i.DEPTH_COMPONENT&&v.type!==ho&&v.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=jn,Bt=r.convert(v.type)),v.format===Wi&&wt===i.DEPTH_COMPONENT&&(wt=i.DEPTH_STENCIL,v.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=di,Bt=r.convert(v.type))),ve&&(oe?e.texStorage2D(i.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,wt,tt.width,tt.height,0,te,Bt,null));else if(v.isDataTexture)if(qt.length>0&&ce){oe&&ve&&e.texStorage2D(i.TEXTURE_2D,Zt,wt,qt[0].width,qt[0].height);for(let ct=0,C=qt.length;ct<C;ct++)xt=qt[ct],oe?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,te,Bt,xt.data):e.texImage2D(i.TEXTURE_2D,ct,wt,xt.width,xt.height,0,te,Bt,xt.data);v.generateMipmaps=!1}else oe?(ve&&e.texStorage2D(i.TEXTURE_2D,Zt,wt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,te,Bt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,wt,tt.width,tt.height,0,te,Bt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,wt,qt[0].width,qt[0].height,tt.depth);for(let ct=0,C=qt.length;ct<C;ct++)xt=qt[ct],v.format!==Mn?te!==null?oe?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,tt.depth,te,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,wt,xt.width,xt.height,tt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,tt.depth,te,Bt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,wt,xt.width,xt.height,tt.depth,0,te,Bt,xt.data)}else{oe&&ve&&e.texStorage2D(i.TEXTURE_2D,Zt,wt,qt[0].width,qt[0].height);for(let ct=0,C=qt.length;ct<C;ct++)xt=qt[ct],v.format!==Mn?te!==null?oe?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,te,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,wt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,te,Bt,xt.data):e.texImage2D(i.TEXTURE_2D,ct,wt,xt.width,xt.height,0,te,Bt,xt.data)}else if(v.isDataArrayTexture)oe?(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,wt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,te,Bt,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,te,Bt,tt.data);else if(v.isData3DTexture)oe?(ve&&e.texStorage3D(i.TEXTURE_3D,Zt,wt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,te,Bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,te,Bt,tt.data);else if(v.isFramebufferTexture){if(ve)if(oe)e.texStorage2D(i.TEXTURE_2D,Zt,wt,tt.width,tt.height);else{let ct=tt.width,C=tt.height;for(let ut=0;ut<Zt;ut++)e.texImage2D(i.TEXTURE_2D,ut,wt,ct,C,0,te,Bt,null),ct>>=1,C>>=1}}else if(qt.length>0&&ce){oe&&ve&&e.texStorage2D(i.TEXTURE_2D,Zt,wt,qt[0].width,qt[0].height);for(let ct=0,C=qt.length;ct<C;ct++)xt=qt[ct],oe?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,te,Bt,xt):e.texImage2D(i.TEXTURE_2D,ct,wt,te,Bt,xt);v.generateMipmaps=!1}else oe?(ve&&e.texStorage2D(i.TEXTURE_2D,Zt,wt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,Bt,tt)):e.texImage2D(i.TEXTURE_2D,0,wt,te,Bt,tt);T(v,ce)&&E(it),yt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function vt(y,v,U){if(v.image.length!==6)return;const it=Q(y,v),et=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+U);const rt=n.get(et);if(et.version!==rt.__version||it===!0){e.activeTexture(i.TEXTURE0+U);const yt=le.getPrimaries(le.workingColorSpace),ft=v.colorSpace===pn?null:le.getPrimaries(v.colorSpace),gt=v.colorSpace===pn||yt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const It=v.isCompressedTexture||v.image[0].isCompressedTexture,jt=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let ct=0;ct<6;ct++)!It&&!jt?tt[ct]=g(v.image[ct],!1,!0,s.maxCubemapSize):tt[ct]=jt?v.image[ct].image:v.image[ct],tt[ct]=Yt(v,tt[ct]);const ce=tt[0],te=m(ce)||o,Bt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),xt=A(v.internalFormat,Bt,wt,v.colorSpace),qt=o&&v.isVideoTexture!==!0,oe=rt.__version===void 0||it===!0;let ve=D(v,ce,te);G(i.TEXTURE_CUBE_MAP,v,te);let Zt;if(It){qt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ve,xt,ce.width,ce.height);for(let ct=0;ct<6;ct++){Zt=tt[ct].mipmaps;for(let C=0;C<Zt.length;C++){const ut=Zt[C];v.format!==Mn?Bt!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,0,0,ut.width,ut.height,Bt,wt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,xt,ut.width,ut.height,0,Bt,wt,ut.data)}}}else{Zt=v.mipmaps,qt&&oe&&(Zt.length>0&&ve++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ve,xt,tt[0].width,tt[0].height));for(let ct=0;ct<6;ct++)if(jt){qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,tt[ct].width,tt[ct].height,Bt,wt,tt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,tt[ct].width,tt[ct].height,0,Bt,wt,tt[ct].data);for(let C=0;C<Zt.length;C++){const dt=Zt[C].image[ct].image;qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,0,0,dt.width,dt.height,Bt,wt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,xt,dt.width,dt.height,0,Bt,wt,dt.data)}}else{qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt,wt,tt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,Bt,wt,tt[ct]);for(let C=0;C<Zt.length;C++){const ut=Zt[C];qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,0,0,Bt,wt,ut.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,xt,Bt,wt,ut.image[ct])}}}T(v,te)&&E(i.TEXTURE_CUBE_MAP),rt.__version=et.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function pt(y,v,U,it,et,rt){const yt=r.convert(U.format,U.colorSpace),ft=r.convert(U.type),gt=A(U.internalFormat,yt,ft,U.colorSpace);if(!n.get(v).__hasExternalTextures){const jt=Math.max(1,v.width>>rt),tt=Math.max(1,v.height>>rt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,rt,gt,jt,tt,v.depth,0,yt,ft,null):e.texImage2D(et,rt,gt,jt,tt,0,yt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Et(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,et,n.get(U).__webglTexture,0,Ft(v)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,et,n.get(U).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(y,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let it=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||Et(v)){const et=v.depthTexture;et&&et.isDepthTexture&&(et.type===$n?it=i.DEPTH_COMPONENT32F:et.type===jn&&(it=i.DEPTH_COMPONENT24));const rt=Ft(v);Et(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,it,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,it,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const it=Ft(v);U&&Et(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,v.width,v.height):Et(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const it=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let et=0;et<it.length;et++){const rt=it[et],yt=r.convert(rt.format,rt.colorSpace),ft=r.convert(rt.type),gt=A(rt.internalFormat,yt,ft,rt.colorSpace),It=Ft(v);U&&Et(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,gt,v.width,v.height):Et(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const it=n.get(v.depthTexture).__webglTexture,et=Ft(v);if(v.depthTexture.format===fi)Et(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===Wi)Et(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Pt(y){const v=n.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Xt(v.__webglFramebuffer,y)}else if(U){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]=i.createRenderbuffer(),Vt(v.__webglDepthbuffer[it],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Vt(v.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(y,v,U){const it=n.get(y);v!==void 0&&pt(it.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Pt(y)}function N(y){const v=y.texture,U=n.get(y),it=n.get(v);y.addEventListener("dispose",X),y.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,a.memory.textures++);const et=y.isWebGLCubeRenderTarget===!0,rt=y.isWebGLMultipleRenderTargets===!0,yt=m(y)||o;if(et){U.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ft]=[];for(let gt=0;gt<v.mipmaps.length;gt++)U.__webglFramebuffer[ft][gt]=i.createFramebuffer()}else U.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)U.__webglFramebuffer[ft]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){const ft=y.texture;for(let gt=0,It=ft.length;gt<It;gt++){const jt=n.get(ft[gt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&Et(y)===!1){const ft=rt?v:[v];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let gt=0;gt<ft.length;gt++){const It=ft[gt];U.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[gt]);const jt=r.convert(It.format,It.colorSpace),tt=r.convert(It.type),ce=A(It.internalFormat,jt,tt,It.colorSpace,y.isXRRenderTarget===!0),te=Ft(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,U.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(U.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),G(i.TEXTURE_CUBE_MAP,v,yt);for(let ft=0;ft<6;ft++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)pt(U.__webglFramebuffer[ft][gt],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else pt(U.__webglFramebuffer[ft],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);T(v,yt)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ft=y.texture;for(let gt=0,It=ft.length;gt<It;gt++){const jt=ft[gt],tt=n.get(jt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),G(i.TEXTURE_2D,jt,yt),pt(U.__webglFramebuffer,y,jt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),T(jt,yt)&&E(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?ft=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,it.__webglTexture),G(ft,v,yt),o&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)pt(U.__webglFramebuffer[gt],y,v,i.COLOR_ATTACHMENT0,ft,gt);else pt(U.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,ft,0);T(v,yt)&&E(ft),e.unbindTexture()}y.depthBuffer&&Pt(y)}function Ge(y){const v=m(y)||o,U=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let it=0,et=U.length;it<et;it++){const rt=U[it];if(T(rt,v)){const yt=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ft=n.get(rt).__webglTexture;e.bindTexture(yt,ft),E(yt),e.unbindTexture()}}}function Rt(y){if(o&&y.samples>0&&Et(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],U=y.width,it=y.height;let et=i.COLOR_BUFFER_BIT;const rt=[],yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(y),gt=y.isWebGLMultipleRenderTargets===!0;if(gt)for(let It=0;It<v.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let It=0;It<v.length;It++){rt.push(i.COLOR_ATTACHMENT0+It),y.depthBuffer&&rt.push(yt);const jt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(jt===!1&&(y.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[It]),jt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[yt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[yt])),gt){const tt=n.get(v[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,U,it,0,0,U,it,et,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<v.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,ft.__webglColorRenderbuffer[It]);const jt=n.get(v[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function Ft(y){return Math.min(s.maxSamples,y.samples)}function Et(y){const v=n.get(y);return o&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _e(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Yt(y,v){const U=y.colorSpace,it=y.format,et=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===io||U!==kn&&U!==pn&&(le.getTransfer(U)===fe?o===!1?t.has("EXT_sRGB")===!0&&it===Mn?(y.format=io,y.minFilter=un,y.generateMipmaps=!1):v=Pc.sRGBToLinear(v):(it!==Mn||et!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ot,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=ee,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Et}function lm(i,t,e){const n=e.isWebGL2;function s(r,a=pn){let o;const l=le.getTransfer(a);if(r===Qn)return i.UNSIGNED_BYTE;if(r===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wl)return i.BYTE;if(r===Xl)return i.SHORT;if(r===ho)return i.UNSIGNED_SHORT;if(r===Mc)return i.INT;if(r===jn)return i.UNSIGNED_INT;if(r===$n)return i.FLOAT;if(r===rs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ql)return i.ALPHA;if(r===Mn)return i.RGBA;if(r===Kl)return i.LUMINANCE;if(r===Yl)return i.LUMINANCE_ALPHA;if(r===fi)return i.DEPTH_COMPONENT;if(r===Wi)return i.DEPTH_STENCIL;if(r===io)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jl)return i.RED;if(r===Ac)return i.RED_INTEGER;if(r===$l)return i.RG;if(r===bc)return i.RG_INTEGER;if(r===wc)return i.RGBA_INTEGER;if(r===hr||r===ur||r===dr||r===fr)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===hr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===hr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Io||r===Po||r===Oo||r===No)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Po)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===No)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bo||r===Uo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Bo)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Uo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fo||r===ko||r===Ho||r===zo||r===Go||r===Vo||r===Wo||r===Xo||r===qo||r===Ko||r===Yo||r===jo||r===$o||r===Zo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ko)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ho)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Go)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ko)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$o)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zo)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pr||r===Jo||r===Qo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===pr)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zl||r===ta||r===ea||r===na)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===pr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ta)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ea)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===na)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===di?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class hm extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dm extends qi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=e.getContextAttributes();let m=null,f=null;const T=[],E=[],A=new ne;let D=null;const w=new on;w.layers.enable(1),w.viewport=new Pe;const R=new on;R.layers.enable(2),R.viewport=new Pe;const X=[w,R],S=new hm;S.layers.enable(1),S.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=T[G];return Q===void 0&&(Q=new Fr,T[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=T[G];return Q===void 0&&(Q=new Fr,T[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=T[G];return Q===void 0&&(Q=new Fr,T[G]=Q),Q.getHandSpace()};function j(G){const Q=E.indexOf(G.inputSource);if(Q===-1)return;const ht=T[Q];ht!==void 0&&(ht.update(G.inputSource,G.frame,c||a),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function ot(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",L);for(let G=0;G<T.length;G++){const Q=E[G];Q!==null&&(E[G]=null,T[G].disconnect(Q))}b=null,H=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new mi(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ht=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?Wi:fi,ht=g.stencil?di:jn);const pt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new mi(d.textureWidth,d.textureHeight,{format:Mn,type:Qn,depthTexture:new Xc(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Vt=t.properties.get(f);Vt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(G){for(let Q=0;Q<G.removed.length;Q++){const ht=G.removed[Q],vt=E.indexOf(ht);vt>=0&&(E[vt]=null,T[vt].disconnect(ht))}for(let Q=0;Q<G.added.length;Q++){const ht=G.added[Q];let vt=E.indexOf(ht);if(vt===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=E.length){E.push(ht),vt=Vt;break}else if(E[Vt]===null){E[Vt]=ht,vt=Vt;break}if(vt===-1)break}const pt=T[vt];pt&&pt.connect(ht)}}const O=new I,V=new I;function Z(G,Q,ht){O.setFromMatrixPosition(Q.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);const vt=O.distanceTo(V),pt=Q.projectionMatrix.elements,Vt=ht.projectionMatrix.elements,Xt=pt[14]/(pt[10]-1),Pt=pt[14]/(pt[10]+1),ee=(pt[9]+1)/pt[5],N=(pt[9]-1)/pt[5],Ge=(pt[8]-1)/pt[0],Rt=(Vt[8]+1)/Vt[0],Ft=Xt*Ge,Et=Xt*Rt,_e=vt/(-Ge+Rt),Yt=_e*-Ge;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Yt),G.translateZ(_e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const y=Xt+_e,v=Pt+_e,U=Ft-Yt,it=Et+(vt-Yt),et=ee*Pt/v*y,rt=N*Pt/v*y;G.projectionMatrix.makePerspective(U,it,et,rt,y,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;S.near=R.near=w.near=G.near,S.far=R.far=w.far=G.far,(b!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,H=S.far);const Q=G.parent,ht=S.cameras;K(S,Q);for(let vt=0;vt<ht.length;vt++)K(ht[vt],Q);ht.length===2?Z(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),$(G,S,Q)};function $(G,Q,ht){ht===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=so*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let J=null;function nt(G,Q){if(h=Q.getViewerPose(c||a),_=Q,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let vt=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,vt=!0);for(let pt=0;pt<ht.length;pt++){const Vt=ht[pt];let Xt=null;if(p!==null)Xt=p.getViewport(Vt);else{const ee=u.getViewSubImage(d,Vt);Xt=ee.viewport,pt===0&&(t.setRenderTargetTextures(f,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(f))}let Pt=X[pt];Pt===void 0&&(Pt=new on,Pt.layers.enable(pt),Pt.viewport=new Pe,X[pt]=Pt),Pt.matrix.fromArray(Vt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Vt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),pt===0&&(S.matrix.copy(Pt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),vt===!0&&S.cameras.push(Pt)}}for(let ht=0;ht<T.length;ht++){const vt=E[ht],pt=T[ht];vt!==null&&pt!==void 0&&pt.update(vt,Q,c||a)}J&&J(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const st=new Vc;st.setAnimationLoop(nt),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}}function fm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Hc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,E,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pm(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,E){const A=E.program;n.uniformBlockBinding(T,A)}function c(T,E){let A=s[T.id];A===void 0&&(_(T),A=h(T),s[T.id]=A,T.addEventListener("dispose",m));const D=E.program;n.updateUBOMapping(T,D);const w=t.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function h(T){const E=u();T.__bindingPointIndex=E;const A=i.createBuffer(),D=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=s[T.id],A=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=A.length;w<R;w++){const X=Array.isArray(A[w])?A[w]:[A[w]];for(let S=0,b=X.length;S<b;S++){const H=X[S];if(p(H,w,S,D)===!0){const j=H.__offset,ot=Array.isArray(H.value)?H.value:[H.value];let L=0;for(let O=0;O<ot.length;O++){const V=ot[O],Z=g(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,j+L,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,A,D){const w=T.value,R=E+"_"+A;if(D[R]===void 0)return typeof w=="number"||typeof w=="boolean"?D[R]=w:D[R]=w.clone(),!0;{const X=D[R];if(typeof w=="number"||typeof w=="boolean"){if(X!==w)return D[R]=w,!0}else if(X.equals(w)===!1)return X.copy(w),!0}return!1}function _(T){const E=T.uniforms;let A=0;const D=16;for(let R=0,X=E.length;R<X;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,H=S.length;b<H;b++){const j=S[b],ot=Array.isArray(j.value)?j.value:[j.value];for(let L=0,O=ot.length;L<O;L++){const V=ot[L],Z=g(V),K=A%D;K!==0&&D-K<Z.boundary&&(A+=D-K),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=Z.storage}}}const w=A%D;return w>0&&(A+=D-w),T.__size=A,T.__cache={},this}function g(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Zc{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const E=this;let A=!1,D=0,w=0,R=null,X=-1,S=null;const b=new Pe,H=new Pe;let j=null;const ot=new Dt(0);let L=0,O=e.width,V=e.height,Z=1,K=null,$=null;const J=new Pe(0,0,O,V),nt=new Pe(0,0,O,V);let st=!1;const G=new po;let Q=!1,ht=!1,vt=null;const pt=new Me,Vt=new ne,Xt=new I,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return R===null?Z:1}let N=n;function Ge(M,P){for(let F=0;F<M.length;F++){const k=M[F],B=e.getContext(k,P);if(B!==null)return B}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ut,!1),N===null){const P=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&P.shift(),N=Ge(P,M),N===null)throw Ge(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Rt,Ft,Et,_e,Yt,y,v,U,it,et,rt,yt,ft,gt,It,jt,tt,ce,te,Bt,wt,xt,qt,oe;function ve(){Rt=new Tf(N),Ft=new xf(N,Rt,t),Rt.init(Ft),xt=new lm(N,Rt,Ft),Et=new am(N,Rt,Ft),_e=new wf(N),Yt=new Kp,y=new cm(N,Rt,Et,Yt,Ft,xt,_e),v=new Ef(E),U=new yf(E),it=new Oh(N,Ft),qt=new _f(N,Rt,it,Ft),et=new Af(N,it,_e,qt),rt=new Df(N,et,it,_e),te=new Lf(N,Ft,y),jt=new vf(Yt),yt=new qp(E,v,U,Rt,Ft,qt,jt),ft=new fm(E,Yt),gt=new jp,It=new em(Rt,Ft),ce=new mf(E,v,U,Et,rt,d,l),tt=new om(E,rt,Ft),oe=new pm(N,_e,Ft,Et),Bt=new gf(N,Rt,_e,Ft),wt=new bf(N,Rt,_e,Ft),_e.programs=yt.programs,E.capabilities=Ft,E.extensions=Rt,E.properties=Yt,E.renderLists=gt,E.shadowMap=tt,E.state=Et,E.info=_e}ve();const Zt=new dm(E,N);this.xr=Zt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(O,V,!1))},this.getSize=function(M){return M.set(O,V)},this.setSize=function(M,P,F=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,V=P,e.width=Math.floor(M*Z),e.height=Math.floor(P*Z),F===!0&&(e.style.width=M+"px",e.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(O*Z,V*Z).floor()},this.setDrawingBufferSize=function(M,P,F){O=M,V=P,Z=F,e.width=Math.floor(M*F),e.height=Math.floor(P*F),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,P,F,k){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,P,F,k),Et.viewport(b.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,P,F,k){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,P,F,k),Et.scissor(H.copy(nt).multiplyScalar(Z).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){Et.setScissorTest(st=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){$=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(M=!0,P=!0,F=!0){let k=0;if(M){let B=!1;if(R!==null){const mt=R.texture.format;B=mt===wc||mt===bc||mt===Ac}if(B){const mt=R.texture.type,Tt=mt===Qn||mt===jn||mt===ho||mt===di||mt===yc||mt===Tc,Lt=ce.getClearColor(),Nt=ce.getClearAlpha(),$t=Lt.r,kt=Lt.g,Wt=Lt.b;Tt?(p[0]=$t,p[1]=kt,p[2]=Wt,p[3]=Nt,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=$t,_[1]=kt,_[2]=Wt,_[3]=Nt,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}P&&(k|=N.DEPTH_BUFFER_BIT),F&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),It.dispose(),Yt.dispose(),v.dispose(),U.dispose(),rt.dispose(),qt.dispose(),oe.dispose(),yt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ve),Zt.removeEventListener("sessionend",de),vt&&(vt.dispose(),vt=null),We.stop()};function ct(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=_e.autoReset,P=tt.enabled,F=tt.autoUpdate,k=tt.needsUpdate,B=tt.type;ve(),_e.autoReset=M,tt.enabled=P,tt.autoUpdate=F,tt.needsUpdate=k,tt.type=B}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function dt(M){const P=M.target;P.removeEventListener("dispose",dt),Ot(P)}function Ot(M){Ct(M),Yt.remove(M)}function Ct(M){const P=Yt.get(M).programs;P!==void 0&&(P.forEach(function(F){yt.releaseProgram(F)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,F,k,B,mt){P===null&&(P=Pt);const Tt=B.isMesh&&B.matrixWorld.determinant()<0,Lt=rl(M,P,F,k,B);Et.setMaterial(k,Tt);let Nt=F.index,$t=1;if(k.wireframe===!0){if(Nt=et.getWireframeAttribute(F),Nt===void 0)return;$t=2}const kt=F.drawRange,Wt=F.attributes.position;let Se=kt.start*$t,tn=(kt.start+kt.count)*$t;mt!==null&&(Se=Math.max(Se,mt.start*$t),tn=Math.min(tn,(mt.start+mt.count)*$t)),Nt!==null?(Se=Math.max(Se,0),tn=Math.min(tn,Nt.count)):Wt!=null&&(Se=Math.max(Se,0),tn=Math.min(tn,Wt.count));const Ce=tn-Se;if(Ce<0||Ce===1/0)return;qt.setup(B,k,Lt,F,Nt);let Ln,ge=Bt;if(Nt!==null&&(Ln=it.get(Nt),ge=wt,ge.setIndex(Ln)),B.isMesh)k.wireframe===!0?(Et.setLineWidth(k.wireframeLinewidth*ee()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(B.isLine){let Jt=k.linewidth;Jt===void 0&&(Jt=1),Et.setLineWidth(Jt*ee()),B.isLineSegments?ge.setMode(N.LINES):B.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else B.isPoints?ge.setMode(N.POINTS):B.isSprite&&ge.setMode(N.TRIANGLES);if(B.isBatchedMesh)ge.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ge.renderInstances(Se,Ce,B.count);else if(F.isInstancedBufferGeometry){const Jt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,rr=Math.min(F.instanceCount,Jt);ge.renderInstances(Se,Ce,rr)}else ge.render(Se,Ce)};function he(M,P,F){M.transparent===!0&&M.side===fn&&M.forceSinglePass===!1?(M.side=Ze,M.needsUpdate=!0,fs(M,P,F),M.side=ti,M.needsUpdate=!0,fs(M,P,F),M.side=fn):fs(M,P,F)}this.compile=function(M,P,F=null){F===null&&(F=M),m=It.get(F),m.init(),T.push(m),F.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),M!==F&&M.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(E._useLegacyLights);const k=new Set;return M.traverse(function(B){const mt=B.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){const Lt=mt[Tt];he(Lt,F,B),k.add(Lt)}else he(mt,F,B),k.add(mt)}),T.pop(),m=null,k},this.compileAsync=function(M,P,F=null){const k=this.compile(M,P,F);return new Promise(B=>{function mt(){if(k.forEach(function(Tt){Yt.get(Tt).currentProgram.isReady()&&k.delete(Tt)}),k.size===0){B(M);return}setTimeout(mt,10)}Rt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ue=null;function Re(M){ue&&ue(M)}function Ve(){We.stop()}function de(){We.start()}const We=new Vc;We.setAnimationLoop(Re),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(M){ue=M,Zt.setAnimationLoop(M),M===null?We.stop():We.start()},Zt.addEventListener("sessionstart",Ve),Zt.addEventListener("sessionend",de),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(P),P=Zt.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,P,R),m=It.get(M,T.length),m.init(),T.push(m),pt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G.setFromProjectionMatrix(pt),ht=this.localClippingEnabled,Q=jt.init(this.clippingPlanes,ht),g=gt.get(M,f.length),g.init(),f.push(g),An(M,P,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(K,$),this.info.render.frame++,Q===!0&&jt.beginShadows();const F=m.state.shadowsArray;if(tt.render(F,M,P),Q===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(g,M),m.setupLights(E._useLegacyLights),P.isArrayCamera){const k=P.cameras;for(let B=0,mt=k.length;B<mt;B++){const Tt=k[B];vo(g,M,Tt,Tt.viewport)}}else vo(g,M,P);R!==null&&(y.updateMultisampleRenderTarget(R),y.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(E,M,P),qt.resetDefaultState(),X=-1,S=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function An(M,P,F,k){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){k&&Xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pt);const Tt=rt.update(M),Lt=M.material;Lt.visible&&g.push(M,Tt,Lt,F,Xt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||G.intersectsObject(M))){const Tt=rt.update(M),Lt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xt.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Xt.copy(Tt.boundingSphere.center)),Xt.applyMatrix4(M.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const Nt=Tt.groups;for(let $t=0,kt=Nt.length;$t<kt;$t++){const Wt=Nt[$t],Se=Lt[Wt.materialIndex];Se&&Se.visible&&g.push(M,Tt,Se,F,Xt.z,Wt)}}else Lt.visible&&g.push(M,Tt,Lt,F,Xt.z,null)}}const mt=M.children;for(let Tt=0,Lt=mt.length;Tt<Lt;Tt++)An(mt[Tt],P,F,k)}function vo(M,P,F,k){const B=M.opaque,mt=M.transmissive,Tt=M.transparent;m.setupLightsView(F),Q===!0&&jt.setGlobalState(E.clippingPlanes,F),mt.length>0&&sl(B,mt,P,F),k&&Et.viewport(b.copy(k)),B.length>0&&ds(B,P,F),mt.length>0&&ds(mt,P,F),Tt.length>0&&ds(Tt,P,F),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function sl(M,P,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const mt=Ft.isWebGL2;vt===null&&(vt=new mi(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?rs:Qn,minFilter:ss,samples:mt?4:0})),E.getDrawingBufferSize(Vt),mt?vt.setSize(Vt.x,Vt.y):vt.setSize(ro(Vt.x),ro(Vt.y));const Tt=E.getRenderTarget();E.setRenderTarget(vt),E.getClearColor(ot),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear();const Lt=E.toneMapping;E.toneMapping=Jn,ds(M,F,k),y.updateMultisampleRenderTarget(vt),y.updateRenderTargetMipmap(vt);let Nt=!1;for(let $t=0,kt=P.length;$t<kt;$t++){const Wt=P[$t],Se=Wt.object,tn=Wt.geometry,Ce=Wt.material,Ln=Wt.group;if(Ce.side===fn&&Se.layers.test(k.layers)){const ge=Ce.side;Ce.side=Ze,Ce.needsUpdate=!0,Eo(Se,F,k,tn,Ce,Ln),Ce.side=ge,Ce.needsUpdate=!0,Nt=!0}}Nt===!0&&(y.updateMultisampleRenderTarget(vt),y.updateRenderTargetMipmap(vt)),E.setRenderTarget(Tt),E.setClearColor(ot,L),E.toneMapping=Lt}function ds(M,P,F){const k=P.isScene===!0?P.overrideMaterial:null;for(let B=0,mt=M.length;B<mt;B++){const Tt=M[B],Lt=Tt.object,Nt=Tt.geometry,$t=k===null?Tt.material:k,kt=Tt.group;Lt.layers.test(F.layers)&&Eo(Lt,P,F,Nt,$t,kt)}}function Eo(M,P,F,k,B,mt){M.onBeforeRender(E,P,F,k,B,mt),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(E,P,F,k,M,mt),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=Ze,B.needsUpdate=!0,E.renderBufferDirect(F,P,k,B,M,mt),B.side=ti,B.needsUpdate=!0,E.renderBufferDirect(F,P,k,B,M,mt),B.side=fn):E.renderBufferDirect(F,P,k,B,M,mt),M.onAfterRender(E,P,F,k,B,mt)}function fs(M,P,F){P.isScene!==!0&&(P=Pt);const k=Yt.get(M),B=m.state.lights,mt=m.state.shadowsArray,Tt=B.state.version,Lt=yt.getParameters(M,B.state,mt,P,F),Nt=yt.getProgramCacheKey(Lt);let $t=k.programs;k.environment=M.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(M.isMeshStandardMaterial?U:v).get(M.envMap||k.environment),$t===void 0&&(M.addEventListener("dispose",dt),$t=new Map,k.programs=$t);let kt=$t.get(Nt);if(kt!==void 0){if(k.currentProgram===kt&&k.lightsStateVersion===Tt)return Mo(M,Lt),kt}else Lt.uniforms=yt.getUniforms(M),M.onBuild(F,Lt,E),M.onBeforeCompile(Lt,E),kt=yt.acquireProgram(Lt,Nt),$t.set(Nt,kt),k.uniforms=Lt.uniforms;const Wt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Wt.clippingPlanes=jt.uniform),Mo(M,Lt),k.needsLights=al(M),k.lightsStateVersion=Tt,k.needsLights&&(Wt.ambientLightColor.value=B.state.ambient,Wt.lightProbe.value=B.state.probe,Wt.directionalLights.value=B.state.directional,Wt.directionalLightShadows.value=B.state.directionalShadow,Wt.spotLights.value=B.state.spot,Wt.spotLightShadows.value=B.state.spotShadow,Wt.rectAreaLights.value=B.state.rectArea,Wt.ltc_1.value=B.state.rectAreaLTC1,Wt.ltc_2.value=B.state.rectAreaLTC2,Wt.pointLights.value=B.state.point,Wt.pointLightShadows.value=B.state.pointShadow,Wt.hemisphereLights.value=B.state.hemi,Wt.directionalShadowMap.value=B.state.directionalShadowMap,Wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Wt.spotShadowMap.value=B.state.spotShadowMap,Wt.spotLightMatrix.value=B.state.spotLightMatrix,Wt.spotLightMap.value=B.state.spotLightMap,Wt.pointShadowMap.value=B.state.pointShadowMap,Wt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=kt,k.uniformsList=null,kt}function So(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=Ys.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Mo(M,P){const F=Yt.get(M);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function rl(M,P,F,k,B){P.isScene!==!0&&(P=Pt),y.resetTextureUnits();const mt=P.fog,Tt=k.isMeshStandardMaterial?P.environment:null,Lt=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kn,Nt=(k.isMeshStandardMaterial?U:v).get(k.envMap||Tt),$t=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,kt=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Wt=!!F.morphAttributes.position,Se=!!F.morphAttributes.normal,tn=!!F.morphAttributes.color;let Ce=Jn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ce=E.toneMapping);const Ln=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ge=Ln!==void 0?Ln.length:0,Jt=Yt.get(k),rr=m.state.lights;if(Q===!0&&(ht===!0||M!==S)){const cn=M===S&&k.id===X;jt.setState(k,M,cn)}let Ee=!1;k.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==rr.state.version||Jt.outputColorSpace!==Lt||B.isBatchedMesh&&Jt.batching===!1||!B.isBatchedMesh&&Jt.batching===!0||B.isInstancedMesh&&Jt.instancing===!1||!B.isInstancedMesh&&Jt.instancing===!0||B.isSkinnedMesh&&Jt.skinning===!1||!B.isSkinnedMesh&&Jt.skinning===!0||B.isInstancedMesh&&Jt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Jt.instancingColor===!1&&B.instanceColor!==null||Jt.envMap!==Nt||k.fog===!0&&Jt.fog!==mt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==jt.numPlanes||Jt.numIntersection!==jt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==kt||Jt.morphTargets!==Wt||Jt.morphNormals!==Se||Jt.morphColors!==tn||Jt.toneMapping!==Ce||Ft.isWebGL2===!0&&Jt.morphTargetsCount!==ge)&&(Ee=!0):(Ee=!0,Jt.__version=k.version);let ei=Jt.currentProgram;Ee===!0&&(ei=fs(k,P,B));let yo=!1,Yi=!1,or=!1;const Fe=ei.getUniforms(),ni=Jt.uniforms;if(Et.useProgram(ei.program)&&(yo=!0,Yi=!0,or=!0),k.id!==X&&(X=k.id,Yi=!0),yo||S!==M){Fe.setValue(N,"projectionMatrix",M.projectionMatrix),Fe.setValue(N,"viewMatrix",M.matrixWorldInverse);const cn=Fe.map.cameraPosition;cn!==void 0&&cn.setValue(N,Xt.setFromMatrixPosition(M.matrixWorld)),Ft.logarithmicDepthBuffer&&Fe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Fe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Yi=!0,or=!0)}if(B.isSkinnedMesh){Fe.setOptional(N,B,"bindMatrix"),Fe.setOptional(N,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(Ft.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Fe.setValue(N,"boneTexture",cn.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Fe.setOptional(N,B,"batchingTexture"),Fe.setValue(N,"batchingTexture",B._matricesTexture,y));const ar=F.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&Ft.isWebGL2===!0)&&te.update(B,F,ei),(Yi||Jt.receiveShadow!==B.receiveShadow)&&(Jt.receiveShadow=B.receiveShadow,Fe.setValue(N,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ni.envMap.value=Nt,ni.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Yi&&(Fe.setValue(N,"toneMappingExposure",E.toneMappingExposure),Jt.needsLights&&ol(ni,or),mt&&k.fog===!0&&ft.refreshFogUniforms(ni,mt),ft.refreshMaterialUniforms(ni,k,Z,V,vt),Ys.upload(N,So(Jt),ni,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ys.upload(N,So(Jt),ni,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Fe.setValue(N,"center",B.center),Fe.setValue(N,"modelViewMatrix",B.modelViewMatrix),Fe.setValue(N,"normalMatrix",B.normalMatrix),Fe.setValue(N,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const cn=k.uniformsGroups;for(let cr=0,cl=cn.length;cr<cl;cr++)if(Ft.isWebGL2){const To=cn[cr];oe.update(To,ei),oe.bind(To,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function ol(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function al(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,P,F){Yt.get(M.texture).__webglTexture=P,Yt.get(M.depthTexture).__webglTexture=F;const k=Yt.get(M);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,P){const F=Yt.get(M);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,F=0){R=M,D=P,w=F;let k=!0,B=null,mt=!1,Tt=!1;if(M){const Nt=Yt.get(M);Nt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):Nt.__webglFramebuffer===void 0?y.setupRenderTarget(M):Nt.__hasExternalTextures&&y.rebindTextures(M,Yt.get(M.texture).__webglTexture,Yt.get(M.depthTexture).__webglTexture);const $t=M.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Tt=!0);const kt=Yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(kt[P])?B=kt[P][F]:B=kt[P],mt=!0):Ft.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?B=Yt.get(M).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[F]:B=kt,b.copy(M.viewport),H.copy(M.scissor),j=M.scissorTest}else b.copy(J).multiplyScalar(Z).floor(),H.copy(nt).multiplyScalar(Z).floor(),j=st;if(Et.bindFramebuffer(N.FRAMEBUFFER,B)&&Ft.drawBuffers&&k&&Et.drawBuffers(M,B),Et.viewport(b),Et.scissor(H),Et.setScissorTest(j),mt){const Nt=Yt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,Nt.__webglTexture,F)}else if(Tt){const Nt=Yt.get(M.texture),$t=P||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,F||0,$t)}X=-1},this.readRenderTargetPixels=function(M,P,F,k,B,mt,Tt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){Et.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Nt=M.texture,$t=Nt.format,kt=Nt.type;if($t!==Mn&&xt.convert($t)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=kt===rs&&(Rt.has("EXT_color_buffer_half_float")||Ft.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(kt!==Qn&&xt.convert(kt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===$n&&(Ft.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-k&&F>=0&&F<=M.height-B&&N.readPixels(P,F,k,B,xt.convert($t),xt.convert(kt),mt)}finally{const Nt=R!==null?Yt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(M,P,F=0){const k=Math.pow(2,-F),B=Math.floor(P.image.width*k),mt=Math.floor(P.image.height*k);y.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,M.x,M.y,B,mt),Et.unbindTexture()},this.copyTextureToTexture=function(M,P,F,k=0){const B=P.image.width,mt=P.image.height,Tt=xt.convert(F.format),Lt=xt.convert(F.type);y.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,M.x,M.y,B,mt,Tt,Lt,P.image.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,M.x,M.y,P.mipmaps[0].width,P.mipmaps[0].height,Tt,P.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,k,M.x,M.y,Tt,Lt,P.image),k===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(M,P,F,k,B=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=M.max.x-M.min.x+1,Tt=M.max.y-M.min.y+1,Lt=M.max.z-M.min.z+1,Nt=xt.convert(k.format),$t=xt.convert(k.type);let kt;if(k.isData3DTexture)y.setTexture3D(k,0),kt=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)y.setTexture2DArray(k,0),kt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Wt=N.getParameter(N.UNPACK_ROW_LENGTH),Se=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ce=N.getParameter(N.UNPACK_SKIP_ROWS),Ln=N.getParameter(N.UNPACK_SKIP_IMAGES),ge=F.isCompressedTexture?F.mipmaps[B]:F.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?N.texSubImage3D(kt,B,P.x,P.y,P.z,mt,Tt,Lt,Nt,$t,ge.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(kt,B,P.x,P.y,P.z,mt,Tt,Lt,Nt,ge.data)):N.texSubImage3D(kt,B,P.x,P.y,P.z,mt,Tt,Lt,Nt,$t,ge),N.pixelStorei(N.UNPACK_ROW_LENGTH,Wt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ln),B===0&&k.generateMipmaps&&N.generateMipmap(kt),Et.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),Et.unbindTexture()},this.resetState=function(){D=0,w=0,R=null,Et.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===uo?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?pi:Cc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===pi?Ue:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class mm extends Zc{}mm.prototype.isWebGL1Renderer=!0;class _o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new _o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _m extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Jc extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xa=new I,qa=new I,Ka=new Me,kr=new fo,Bs=new hs;class gm extends Ae{constructor(t=new Je,e=new Jc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xa.fromBufferAttribute(e,s-1),qa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xa.distanceTo(qa);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;Ka.copy(s).invert(),kr.copy(t.ray).applyMatrix4(Ka);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),T=Math.min(_.count,a.start+a.count);for(let E=f,A=T-1;E<A;E+=p){const D=_.getX(E),w=_.getX(E+1);if(c.fromBufferAttribute(m,D),h.fromBufferAttribute(m,w),kr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const X=t.ray.origin.distanceTo(d);X<t.near||X>t.far||e.push({distance:X,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),T=Math.min(m.count,a.start+a.count);for(let E=f,A=T-1;E<A;E+=p){if(c.fromBufferAttribute(m,E),h.fromBufferAttribute(m,E+1),kr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ya=new I,ja=new I;class xm extends gm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ya.fromBufferAttribute(e,s),ja.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ya.distanceTo(ja);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qc extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $a=new Me,ao=new fo,Us=new hs,Fs=new I;class vm extends Ae{constructor(t=new Je,e=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;$a.copy(s).invert(),ao.copy(t.ray).applyMatrix4($a);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Fs.fromBufferAttribute(u,m),Za(Fs,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p;_<g;_++)Fs.fromBufferAttribute(u,_),Za(Fs,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Za(i,t,e,n,s,r,a){const o=ao.distanceSqToPoint(i);if(o<e){const l=new I;ao.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class go extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}const ks=new I,Hs=new I,Hr=new I,zs=new dn;class Em extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ks*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:f}=zs;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),zs.getNormal(Hr),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const E=(T+1)%3,A=u[T],D=u[E],w=zs[h[T]],R=zs[h[E]],X=`${A}_${D}`,S=`${D}_${A}`;S in d&&d[S]?(Hr.dot(d[S].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(R.x,R.y,R.z)),d[S]=null):X in d||(d[X]={index0:c[T],index1:c[E],normal:Hr.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];ks.fromBufferAttribute(o,g),Hs.fromBufferAttribute(o,m),p.push(ks.x,ks.y,ks.z),p.push(Hs.x,Hs.y,Hs.z)}this.setAttribute("position",new Te(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class re extends gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xo extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class tl extends xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zr=new Me,Ja=new I,Qa=new I;class Sm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mm extends Sm{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class el extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Mm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nl extends xo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const z=16,Mt=128,tc=128,ai=40,Oi=6,ec=-24,ym=9,Tm=5,Am=1.6,ts=1.7,bm=.6,nc=6,x={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,WATER:5,WOOD:6,LEAVES:7,COBBLESTONE:8,PLANKS:9,COAL_ORE:10,IRON_ORE:11,GOLD_ORE:12,DIAMOND_ORE:13,BEDROCK:14,SNOW:15,ICE:16,CLAY:17,GRAVEL:18,CRAFTING_TABLE:19,FURNACE:20,GLASS:21,BRICK:22,OBSIDIAN:23,TORCH:24,SANDSTONE:25,LAVA:26,MOSSY_COBBLESTONE:27,STONE_BRICK:28,MOSSY_STONE_BRICK:29,CRACKED_STONE_BRICK:30,JUNGLE_WOOD:31,JUNGLE_LEAVES:32,BIRCH_WOOD:33,BIRCH_LEAVES:34,SPRUCE_WOOD:35,SPRUCE_LEAVES:36,ACACIA_WOOD:37,ACACIA_LEAVES:38,MUSHROOM_BLOCK:39,MUSHROOM_STEM:40,MYCELIUM:41,PODZOL:42,RED_SAND:43,TERRACOTTA:44,PACKED_ICE:45,BLUE_ICE:46,SOUL_SAND:47,NETHERRACK:48,GLOWSTONE:49,CHEST:50,BOOKSHELF:51,COBWEB:52,IRON_BLOCK:53,GOLD_BLOCK:54,DIAMOND_BLOCK:55,EMERALD_ORE:56,EMERALD_BLOCK:57,WOOL:58,HAY_BALE:59,TNT:60,LADDER:61,FENCE:62,DOOR:63,REDSTONE_ORE:64,LAPIS_ORE:65,LAPIS_BLOCK:66,QUARTZ:67,PRISMARINE:68,SEA_LANTERN:69,CORAL:70,BAMBOO:71},yn={[x.AIR]:{name:"Air",color:0,hardness:0,transparent:!0,solid:!1},[x.GRASS]:{name:"Grass",color:5999678,hardness:.6,transparent:!1,solid:!0,topColor:5999678,sideColor:9136958,bottomColor:9136958},[x.DIRT]:{name:"Dirt",color:9136958,hardness:.5,transparent:!1,solid:!0},[x.STONE]:{name:"Stone",color:8421504,hardness:1.5,transparent:!1,solid:!0,drops:x.COBBLESTONE},[x.SAND]:{name:"Sand",color:14403195,hardness:.5,transparent:!1,solid:!0},[x.WATER]:{name:"Water",color:3368618,hardness:-1,transparent:!0,solid:!1},[x.WOOD]:{name:"Wood",color:7029286,hardness:2,transparent:!1,solid:!0,topColor:10189630,sideColor:7029286,bottomColor:10189630},[x.LEAVES]:{name:"Leaves",color:3833138,hardness:.2,transparent:!0,solid:!0},[x.COBBLESTONE]:{name:"Cobblestone",color:7039851,hardness:2,transparent:!1,solid:!0},[x.PLANKS]:{name:"Planks",color:12096602,hardness:2,transparent:!1,solid:!0},[x.COAL_ORE]:{name:"Coal Ore",color:4868682,hardness:3,transparent:!1,solid:!0},[x.IRON_ORE]:{name:"Iron Ore",color:10518640,hardness:3,transparent:!1,solid:!0},[x.GOLD_ORE]:{name:"Gold Ore",color:12623936,hardness:3,transparent:!1,solid:!0},[x.DIAMOND_ORE]:{name:"Diamond Ore",color:6340832,hardness:3,transparent:!1,solid:!0},[x.BEDROCK]:{name:"Bedrock",color:3355443,hardness:-1,transparent:!1,solid:!0},[x.SNOW]:{name:"Snow",color:15790320,hardness:.5,transparent:!1,solid:!0},[x.ICE]:{name:"Ice",color:10539248,hardness:.5,transparent:!0,solid:!0},[x.CLAY]:{name:"Clay",color:10526896,hardness:.6,transparent:!1,solid:!0},[x.GRAVEL]:{name:"Gravel",color:9474192,hardness:.6,transparent:!1,solid:!0},[x.CRAFTING_TABLE]:{name:"Crafting Table",color:10189630,hardness:2.5,transparent:!1,solid:!0,topColor:11569216,sideColor:10189630},[x.FURNACE]:{name:"Furnace",color:8026746,hardness:3.5,transparent:!1,solid:!0,sideColor:5921370},[x.GLASS]:{name:"Glass",color:13691120,hardness:.3,transparent:!0,solid:!0,thin:"z"},[x.BRICK]:{name:"Brick",color:10502192,hardness:2,transparent:!1,solid:!0},[x.OBSIDIAN]:{name:"Obsidian",color:1706542,hardness:10,transparent:!1,solid:!0},[x.TORCH]:{name:"Torch",color:16753920,hardness:0,transparent:!0,solid:!1},[x.SANDSTONE]:{name:"Sandstone",color:13943926,hardness:.8,transparent:!1,solid:!0},[x.LAVA]:{name:"Lava",color:16729088,hardness:-1,transparent:!0,solid:!1},[x.MOSSY_COBBLESTONE]:{name:"Mossy Cobblestone",color:5991243,hardness:2,transparent:!1,solid:!0},[x.STONE_BRICK]:{name:"Stone Brick",color:8026746,hardness:1.5,transparent:!1,solid:!0},[x.MOSSY_STONE_BRICK]:{name:"Mossy Stone Brick",color:5925466,hardness:1.5,transparent:!1,solid:!0},[x.CRACKED_STONE_BRICK]:{name:"Cracked Stone Brick",color:6974058,hardness:1.5,transparent:!1,solid:!0},[x.JUNGLE_WOOD]:{name:"Jungle Wood",color:7032880,hardness:2,transparent:!1,solid:!0,topColor:9138240,sideColor:7032880,bottomColor:9138240},[x.JUNGLE_LEAVES]:{name:"Jungle Leaves",color:2779938,hardness:.2,transparent:!0,solid:!0},[x.BIRCH_WOOD]:{name:"Birch Wood",color:13682864,hardness:2,transparent:!1,solid:!0,topColor:12630168,sideColor:13682864,bottomColor:12630168},[x.BIRCH_LEAVES]:{name:"Birch Leaves",color:5937730,hardness:.2,transparent:!0,solid:!0},[x.SPRUCE_WOOD]:{name:"Spruce Wood",color:4863264,hardness:2,transparent:!1,solid:!0,topColor:6968624,sideColor:4863264,bottomColor:6968624},[x.SPRUCE_LEAVES]:{name:"Spruce Leaves",color:2771490,hardness:.2,transparent:!0,solid:!0},[x.ACACIA_WOOD]:{name:"Acacia Wood",color:10115632,hardness:2,transparent:!1,solid:!0,topColor:9071168,sideColor:10115632,bottomColor:9071168},[x.ACACIA_LEAVES]:{name:"Acacia Leaves",color:6986290,hardness:.2,transparent:!0,solid:!0},[x.MUSHROOM_BLOCK]:{name:"Mushroom Block",color:11153456,hardness:.2,transparent:!1,solid:!0},[x.MUSHROOM_STEM]:{name:"Mushroom Stem",color:13682872,hardness:.2,transparent:!1,solid:!0},[x.MYCELIUM]:{name:"Mycelium",color:8022656,hardness:.6,transparent:!1,solid:!0,topColor:9075344,sideColor:9136958,bottomColor:9136958},[x.PODZOL]:{name:"Podzol",color:6967344,hardness:.6,transparent:!1,solid:!0,topColor:6967344,sideColor:9136958,bottomColor:9136958},[x.RED_SAND]:{name:"Red Sand",color:12875836,hardness:.5,transparent:!1,solid:!0},[x.TERRACOTTA]:{name:"Terracotta",color:12217156,hardness:1.25,transparent:!1,solid:!0},[x.PACKED_ICE]:{name:"Packed Ice",color:9091296,hardness:.5,transparent:!1,solid:!0},[x.BLUE_ICE]:{name:"Blue Ice",color:6328528,hardness:2.8,transparent:!1,solid:!0},[x.SOUL_SAND]:{name:"Soul Sand",color:5917242,hardness:.5,transparent:!1,solid:!0},[x.NETHERRACK]:{name:"Netherrack",color:9056304,hardness:.4,transparent:!1,solid:!0},[x.GLOWSTONE]:{name:"Glowstone",color:16768384,hardness:.3,transparent:!1,solid:!0},[x.CHEST]:{name:"Chest",color:10189630,hardness:2.5,transparent:!1,solid:!0,topColor:10520640,sideColor:10189630},[x.BOOKSHELF]:{name:"Bookshelf",color:12096602,hardness:1.5,transparent:!1,solid:!0,sideColor:9062954},[x.COBWEB]:{name:"Cobweb",color:14737632,hardness:4,transparent:!0,solid:!1},[x.IRON_BLOCK]:{name:"Iron Block",color:13684944,hardness:5,transparent:!1,solid:!0},[x.GOLD_BLOCK]:{name:"Gold Block",color:16766720,hardness:3,transparent:!1,solid:!0},[x.DIAMOND_BLOCK]:{name:"Diamond Block",color:6349040,hardness:5,transparent:!1,solid:!0},[x.EMERALD_ORE]:{name:"Emerald Ore",color:6332512,hardness:3,transparent:!1,solid:!0},[x.EMERALD_BLOCK]:{name:"Emerald Block",color:3199024,hardness:5,transparent:!1,solid:!0},[x.WOOL]:{name:"Wool",color:15790320,hardness:.8,transparent:!1,solid:!0},[x.HAY_BALE]:{name:"Hay Bale",color:13150256,hardness:.5,transparent:!1,solid:!0},[x.TNT]:{name:"TNT",color:13378082,hardness:0,transparent:!1,solid:!0,sideColor:13378082,topColor:11145489},[x.LADDER]:{name:"Ladder",color:10189630,hardness:.4,transparent:!0,solid:!1},[x.FENCE]:{name:"Fence",color:12096602,hardness:2,transparent:!0,solid:!0},[x.DOOR]:{name:"Door",color:9136958,hardness:3,transparent:!0,solid:!0,thin:"z",topColor:8018477,sideColor:7031325},[x.REDSTONE_ORE]:{name:"Redstone Ore",color:10502208,hardness:3,transparent:!1,solid:!0},[x.LAPIS_ORE]:{name:"Lapis Ore",color:4219040,hardness:3,transparent:!1,solid:!0},[x.LAPIS_BLOCK]:{name:"Lapis Block",color:2117792,hardness:3,transparent:!1,solid:!0},[x.QUARTZ]:{name:"Quartz",color:15788256,hardness:.8,transparent:!1,solid:!0},[x.PRISMARINE]:{name:"Prismarine",color:4889226,hardness:1.5,transparent:!1,solid:!0},[x.SEA_LANTERN]:{name:"Sea Lantern",color:11591912,hardness:.3,transparent:!1,solid:!0},[x.CORAL]:{name:"Coral",color:14696576,hardness:0,transparent:!0,solid:!0},[x.BAMBOO]:{name:"Bamboo",color:6986288,hardness:1,transparent:!0,solid:!0}},W={STICK:-1,WOODEN_PICKAXE:-2,STONE_PICKAXE:-3,IRON_PICKAXE:-4,DIAMOND_PICKAXE:-5,WOODEN_AXE:-6,STONE_AXE:-7,IRON_AXE:-8,DIAMOND_AXE:-9,WOODEN_SHOVEL:-10,STONE_SHOVEL:-11,IRON_SHOVEL:-12,DIAMOND_SHOVEL:-13,WOODEN_SWORD:-14,STONE_SWORD:-15,IRON_SWORD:-16,DIAMOND_SWORD:-17,IRON_INGOT:-18,GOLD_INGOT:-19,DIAMOND:-20,COAL:-21,WHEAT:-29,LEATHER_HELMET:-30,LEATHER_CHESTPLATE:-31,LEATHER_LEGGINGS:-32,LEATHER_BOOTS:-33,IRON_HELMET:-34,IRON_CHESTPLATE:-35,IRON_LEGGINGS:-36,IRON_BOOTS:-37,DIAMOND_HELMET:-38,DIAMOND_CHESTPLATE:-39,DIAMOND_LEGGINGS:-40,DIAMOND_BOOTS:-41,BOW:-42,ARROW:-43,LEATHER:-44,STRING:-45,FEATHER:-46,FLINT:-47,GUNPOWDER:-48,APPLE:-26,GOLDEN_APPLE:-54,MUSHROOM_STEW:-59,BOWL:-60,CAKE:-61,SUGAR:-62,QUARTZ_ITEM:-53,EMERALD:-51,LAPIS:-52,BREAD:-27},Ht=W.STICK,Ut=x.PLANKS,Oe=x.COBBLESTONE,zt=W.IRON_INGOT,Ne=W.GOLD_INGOT,Gt=W.DIAMOND,wm=x.WOOD,Rm=[{name:"Planks",pattern:[0,0,0,0,wm,0,0,0,0],result:Ut,count:4,resultIsBlock:!0,shapeless:!0},{name:"Sticks",pattern:[0,0,0,0,Ut,0,0,Ut,0],result:W.STICK,count:4,resultIsBlock:!1},{name:"Crafting Table",pattern:[0,0,0,Ut,Ut,0,Ut,Ut,0],result:x.CRAFTING_TABLE,count:1,resultIsBlock:!0},{name:"Furnace",pattern:[Oe,Oe,Oe,Oe,0,Oe,Oe,Oe,Oe],result:x.FURNACE,count:1,resultIsBlock:!0},{name:"Sandstone",pattern:[0,0,0,x.SAND,x.SAND,0,x.SAND,x.SAND,0],result:x.SANDSTONE,count:4,resultIsBlock:!0},{name:"Torch",pattern:[0,0,0,0,W.COAL,0,0,Ht,0],result:x.TORCH,count:4,resultIsBlock:!0},{name:"Chest",pattern:[Ut,Ut,Ut,Ut,0,Ut,Ut,Ut,Ut],result:x.CHEST,count:1,resultIsBlock:!0},{name:"Stone Brick",pattern:[0,0,0,x.STONE,x.STONE,0,x.STONE,x.STONE,0],result:x.STONE_BRICK,count:4,resultIsBlock:!0},{name:"Glass Pane (Glass)",pattern:[0,0,0,x.GLASS,x.GLASS,x.GLASS,x.GLASS,x.GLASS,x.GLASS],result:x.GLASS,count:16,resultIsBlock:!0},{name:"Bookshelf",pattern:[Ut,Ut,Ut,W.LEATHER,W.LEATHER,W.LEATHER,Ut,Ut,Ut],result:x.BOOKSHELF,count:1,resultIsBlock:!0},{name:"Wool",pattern:[0,0,0,W.STRING,W.STRING,0,W.STRING,W.STRING,0],result:x.WOOL,count:1,resultIsBlock:!0},{name:"Ladder",pattern:[Ht,0,Ht,Ht,Ht,Ht,Ht,0,Ht],result:x.LADDER,count:3,resultIsBlock:!0},{name:"Fence",pattern:[0,0,0,Ut,Ht,Ut,Ut,Ht,Ut],result:x.FENCE,count:3,resultIsBlock:!0},{name:"Door",pattern:[Ut,Ut,0,Ut,Ut,0,Ut,Ut,0],result:x.DOOR,count:3,resultIsBlock:!0},{name:"Iron Block",pattern:[zt,zt,zt,zt,zt,zt,zt,zt,zt],result:x.IRON_BLOCK,count:1,resultIsBlock:!0},{name:"Gold Block",pattern:[Ne,Ne,Ne,Ne,Ne,Ne,Ne,Ne,Ne],result:x.GOLD_BLOCK,count:1,resultIsBlock:!0},{name:"Diamond Block",pattern:[Gt,Gt,Gt,Gt,Gt,Gt,Gt,Gt,Gt],result:x.DIAMOND_BLOCK,count:1,resultIsBlock:!0},{name:"TNT",pattern:[W.GUNPOWDER,x.SAND,W.GUNPOWDER,x.SAND,W.GUNPOWDER,x.SAND,W.GUNPOWDER,x.SAND,W.GUNPOWDER],result:x.TNT,count:1,resultIsBlock:!0},{name:"Hay Bale",pattern:[W.WHEAT,W.WHEAT,W.WHEAT,W.WHEAT,W.WHEAT,W.WHEAT,W.WHEAT,W.WHEAT,W.WHEAT],result:x.HAY_BALE,count:1,resultIsBlock:!0},{name:"Wooden Pickaxe",pattern:[Ut,Ut,Ut,0,Ht,0,0,Ht,0],result:W.WOODEN_PICKAXE,count:1,resultIsBlock:!1},{name:"Wooden Axe",pattern:[Ut,Ut,0,Ut,Ht,0,0,Ht,0],result:W.WOODEN_AXE,count:1,resultIsBlock:!1},{name:"Wooden Shovel",pattern:[0,Ut,0,0,Ht,0,0,Ht,0],result:W.WOODEN_SHOVEL,count:1,resultIsBlock:!1},{name:"Wooden Sword",pattern:[0,Ut,0,0,Ut,0,0,Ht,0],result:W.WOODEN_SWORD,count:1,resultIsBlock:!1},{name:"Stone Pickaxe",pattern:[Oe,Oe,Oe,0,Ht,0,0,Ht,0],result:W.STONE_PICKAXE,count:1,resultIsBlock:!1},{name:"Stone Axe",pattern:[Oe,Oe,0,Oe,Ht,0,0,Ht,0],result:W.STONE_AXE,count:1,resultIsBlock:!1},{name:"Stone Shovel",pattern:[0,Oe,0,0,Ht,0,0,Ht,0],result:W.STONE_SHOVEL,count:1,resultIsBlock:!1},{name:"Stone Sword",pattern:[0,Oe,0,0,Oe,0,0,Ht,0],result:W.STONE_SWORD,count:1,resultIsBlock:!1},{name:"Iron Pickaxe",pattern:[zt,zt,zt,0,Ht,0,0,Ht,0],result:W.IRON_PICKAXE,count:1,resultIsBlock:!1},{name:"Iron Axe",pattern:[zt,zt,0,zt,Ht,0,0,Ht,0],result:W.IRON_AXE,count:1,resultIsBlock:!1},{name:"Iron Shovel",pattern:[0,zt,0,0,Ht,0,0,Ht,0],result:W.IRON_SHOVEL,count:1,resultIsBlock:!1},{name:"Iron Sword",pattern:[0,zt,0,0,zt,0,0,Ht,0],result:W.IRON_SWORD,count:1,resultIsBlock:!1},{name:"Diamond Pickaxe",pattern:[Gt,Gt,Gt,0,Ht,0,0,Ht,0],result:W.DIAMOND_PICKAXE,count:1,resultIsBlock:!1},{name:"Diamond Axe",pattern:[Gt,Gt,0,Gt,Ht,0,0,Ht,0],result:W.DIAMOND_AXE,count:1,resultIsBlock:!1},{name:"Diamond Shovel",pattern:[0,Gt,0,0,Ht,0,0,Ht,0],result:W.DIAMOND_SHOVEL,count:1,resultIsBlock:!1},{name:"Diamond Sword",pattern:[0,Gt,0,0,Gt,0,0,Ht,0],result:W.DIAMOND_SWORD,count:1,resultIsBlock:!1},{name:"Leather Helmet",pattern:[0,0,0,W.LEATHER,W.LEATHER,W.LEATHER,W.LEATHER,0,W.LEATHER],result:W.LEATHER_HELMET,count:1,resultIsBlock:!1},{name:"Leather Chestplate",pattern:[W.LEATHER,0,W.LEATHER,W.LEATHER,W.LEATHER,W.LEATHER,W.LEATHER,W.LEATHER,W.LEATHER],result:W.LEATHER_CHESTPLATE,count:1,resultIsBlock:!1},{name:"Leather Leggings",pattern:[W.LEATHER,W.LEATHER,W.LEATHER,W.LEATHER,0,W.LEATHER,W.LEATHER,0,W.LEATHER],result:W.LEATHER_LEGGINGS,count:1,resultIsBlock:!1},{name:"Leather Boots",pattern:[0,0,0,W.LEATHER,0,W.LEATHER,W.LEATHER,0,W.LEATHER],result:W.LEATHER_BOOTS,count:1,resultIsBlock:!1},{name:"Iron Helmet",pattern:[0,0,0,zt,zt,zt,zt,0,zt],result:W.IRON_HELMET,count:1,resultIsBlock:!1},{name:"Iron Chestplate",pattern:[zt,0,zt,zt,zt,zt,zt,zt,zt],result:W.IRON_CHESTPLATE,count:1,resultIsBlock:!1},{name:"Iron Leggings",pattern:[zt,zt,zt,zt,0,zt,zt,0,zt],result:W.IRON_LEGGINGS,count:1,resultIsBlock:!1},{name:"Iron Boots",pattern:[0,0,0,zt,0,zt,zt,0,zt],result:W.IRON_BOOTS,count:1,resultIsBlock:!1},{name:"Diamond Helmet",pattern:[0,0,0,Gt,Gt,Gt,Gt,0,Gt],result:W.DIAMOND_HELMET,count:1,resultIsBlock:!1},{name:"Diamond Chestplate",pattern:[Gt,0,Gt,Gt,Gt,Gt,Gt,Gt,Gt],result:W.DIAMOND_CHESTPLATE,count:1,resultIsBlock:!1},{name:"Diamond Leggings",pattern:[Gt,Gt,Gt,Gt,0,Gt,Gt,0,Gt],result:W.DIAMOND_LEGGINGS,count:1,resultIsBlock:!1},{name:"Diamond Boots",pattern:[0,0,0,Gt,0,Gt,Gt,0,Gt],result:W.DIAMOND_BOOTS,count:1,resultIsBlock:!1},{name:"Bow",pattern:[0,Ht,W.STRING,Ht,0,W.STRING,0,Ht,W.STRING],result:W.BOW,count:1,resultIsBlock:!1},{name:"Arrow",pattern:[0,W.FLINT,0,0,Ht,0,0,W.FEATHER,0],result:W.ARROW,count:4,resultIsBlock:!1},{name:"Bread",pattern:[0,0,0,W.WHEAT,W.WHEAT,W.WHEAT,0,0,0],result:W.BREAD,count:1,resultIsBlock:!1},{name:"Golden Apple",pattern:[Ne,Ne,Ne,Ne,W.APPLE,Ne,Ne,Ne,Ne],result:W.GOLDEN_APPLE,count:1,resultIsBlock:!1},{name:"Mushroom Stew",pattern:[0,0,0,x.MUSHROOM_BLOCK,x.MUSHROOM_BLOCK,0,0,W.BOWL,0],result:W.MUSHROOM_STEW,count:1,resultIsBlock:!1,shapeless:!0},{name:"Bowl",pattern:[0,0,0,Ut,0,Ut,0,Ut,0],result:W.BOWL,count:4,resultIsBlock:!1},{name:"Cake",pattern:[W.WHEAT,W.WHEAT,W.WHEAT,W.SUGAR,W.APPLE,W.SUGAR,0,0,0],result:W.CAKE,count:1,resultIsBlock:!1},{name:"Quartz Block",pattern:[0,0,0,W.QUARTZ_ITEM,W.QUARTZ_ITEM,0,W.QUARTZ_ITEM,W.QUARTZ_ITEM,0],result:x.QUARTZ,count:1,resultIsBlock:!0},{name:"Emerald Block",pattern:[W.EMERALD,W.EMERALD,W.EMERALD,W.EMERALD,W.EMERALD,W.EMERALD,W.EMERALD,W.EMERALD,W.EMERALD],result:x.EMERALD_BLOCK,count:1,resultIsBlock:!0},{name:"Lapis Block",pattern:[W.LAPIS,W.LAPIS,W.LAPIS,W.LAPIS,W.LAPIS,W.LAPIS,W.LAPIS,W.LAPIS,W.LAPIS],result:x.LAPIS_BLOCK,count:1,resultIsBlock:!0}],At={PLAINS:0,DESERT:1,FOREST:2,MOUNTAINS:3,TUNDRA:4,OCEAN:5,JUNGLE:6,SAVANNA:7,TAIGA:8,MUSHROOM_ISLAND:9,BIRCH_FOREST:10,MESA:11,FROZEN_OCEAN:12,SWAMP:13},Gr={[At.PLAINS]:{name:"Plains",baseHeight:42,heightVariation:4,surfaceBlock:x.GRASS,subBlock:x.DIRT,treeChance:.005},[At.DESERT]:{name:"Desert",baseHeight:41,heightVariation:3,surfaceBlock:x.SAND,subBlock:x.SANDSTONE,treeChance:.001},[At.FOREST]:{name:"Forest",baseHeight:43,heightVariation:5,surfaceBlock:x.GRASS,subBlock:x.DIRT,treeChance:.03},[At.MOUNTAINS]:{name:"Mountains",baseHeight:55,heightVariation:25,surfaceBlock:x.STONE,subBlock:x.STONE,treeChance:.002},[At.TUNDRA]:{name:"Tundra",baseHeight:42,heightVariation:3,surfaceBlock:x.SNOW,subBlock:x.DIRT,treeChance:.003},[At.OCEAN]:{name:"Ocean",baseHeight:30,heightVariation:5,surfaceBlock:x.SAND,subBlock:x.SAND,treeChance:0},[At.JUNGLE]:{name:"Jungle",baseHeight:44,heightVariation:6,surfaceBlock:x.GRASS,subBlock:x.DIRT,treeChance:.06},[At.SAVANNA]:{name:"Savanna",baseHeight:42,heightVariation:3,surfaceBlock:x.GRASS,subBlock:x.DIRT,treeChance:.008},[At.TAIGA]:{name:"Taiga",baseHeight:43,heightVariation:5,surfaceBlock:x.PODZOL,subBlock:x.DIRT,treeChance:.025},[At.MUSHROOM_ISLAND]:{name:"Mushroom Island",baseHeight:44,heightVariation:4,surfaceBlock:x.MYCELIUM,subBlock:x.DIRT,treeChance:.015},[At.BIRCH_FOREST]:{name:"Birch Forest",baseHeight:43,heightVariation:4,surfaceBlock:x.GRASS,subBlock:x.DIRT,treeChance:.03},[At.MESA]:{name:"Mesa",baseHeight:48,heightVariation:12,surfaceBlock:x.RED_SAND,subBlock:x.TERRACOTTA,treeChance:0},[At.FROZEN_OCEAN]:{name:"Frozen Ocean",baseHeight:30,heightVariation:5,surfaceBlock:x.SAND,subBlock:x.SAND,treeChance:0},[At.SWAMP]:{name:"Swamp",baseHeight:40,heightVariation:2,surfaceBlock:x.GRASS,subBlock:x.DIRT,treeChance:.015}},Cm=.5*(Math.sqrt(3)-1),es=(3-Math.sqrt(3))/6,Lm=1/3,bn=1/6,De=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];class Xn{constructor(t=0){this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);const e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;let n=t;for(let s=255;s>0;s--){n=n*1664525+1013904223&4294967295;const r=(n>>>0)%(s+1);[e[s],e[r]]=[e[r],e[s]]}for(let s=0;s<512;s++)this.perm[s]=e[s&255],this.permMod12[s]=this.perm[s]%12}noise2D(t,e){const{perm:n,permMod12:s}=this;let r,a,o;const l=(t+e)*Cm,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*es,d=c-u,p=h-u,_=t-d,g=e-p;let m,f;_>g?(m=1,f=0):(m=0,f=1);const T=_-m+es,E=g-f+es,A=_-1+2*es,D=g-1+2*es,w=c&255,R=h&255;let X=.5-_*_-g*g;if(X<0)r=0;else{X*=X;const H=s[w+n[R]];r=X*X*(De[H][0]*_+De[H][1]*g)}let S=.5-T*T-E*E;if(S<0)a=0;else{S*=S;const H=s[w+m+n[R+f]];a=S*S*(De[H][0]*T+De[H][1]*E)}let b=.5-A*A-D*D;if(b<0)o=0;else{b*=b;const H=s[w+1+n[R+1]];o=b*b*(De[H][0]*A+De[H][1]*D)}return 70*(r+a+o)}noise3D(t,e,n){const{perm:s,permMod12:r}=this;let a,o,l,c;const h=(t+e+n)*Lm,u=Math.floor(t+h),d=Math.floor(e+h),p=Math.floor(n+h),_=(u+d+p)*bn,g=u-_,m=d-_,f=p-_,T=t-g,E=e-m,A=n-f;let D,w,R,X,S,b;T>=E?E>=A?(D=1,w=0,R=0,X=1,S=1,b=0):T>=A?(D=1,w=0,R=0,X=1,S=0,b=1):(D=0,w=0,R=1,X=1,S=0,b=1):E<A?(D=0,w=0,R=1,X=0,S=1,b=1):T<A?(D=0,w=1,R=0,X=0,S=1,b=1):(D=0,w=1,R=0,X=1,S=1,b=0);const H=T-D+bn,j=E-w+bn,ot=A-R+bn,L=T-X+2*bn,O=E-S+2*bn,V=A-b+2*bn,Z=T-1+3*bn,K=E-1+3*bn,$=A-1+3*bn,J=u&255,nt=d&255,st=p&255;let G=.6-T*T-E*E-A*A;if(G<0)a=0;else{G*=G;const pt=r[J+s[nt+s[st]]];a=G*G*(De[pt][0]*T+De[pt][1]*E+De[pt][2]*A)}let Q=.6-H*H-j*j-ot*ot;if(Q<0)o=0;else{Q*=Q;const pt=r[J+D+s[nt+w+s[st+R]]];o=Q*Q*(De[pt][0]*H+De[pt][1]*j+De[pt][2]*ot)}let ht=.6-L*L-O*O-V*V;if(ht<0)l=0;else{ht*=ht;const pt=r[J+X+s[nt+S+s[st+b]]];l=ht*ht*(De[pt][0]*L+De[pt][1]*O+De[pt][2]*V)}let vt=.6-Z*Z-K*K-$*$;if(vt<0)c=0;else{vt*=vt;const pt=r[J+1+s[nt+1+s[st+1]]];c=vt*vt*(De[pt][0]*Z+De[pt][1]*K+De[pt][2]*$)}return 32*(a+o+l+c)}fractal2D(t,e,n=4,s=2,r=.5){let a=0,o=1,l=1,c=0;for(let h=0;h<n;h++)a+=this.noise2D(t*o,e*o)*l,c+=l,l*=r,o*=s;return a/c}fractal3D(t,e,n,s=3,r=2,a=.5){let o=0,l=1,c=1,h=0;for(let u=0;u<s;u++)o+=this.noise3D(t*l,e*l,n*l)*c,h+=c,c*=a,l*=r;return o/h}}class js{constructor(t=42){this.seed=t,this.terrainNoise=new Xn(t),this.biomeNoise=new Xn(t+1),this.caveNoise=new Xn(t+2),this.oreNoise=new Xn(t+3),this.detailNoise=new Xn(t+4),this.treeNoise=new Xn(t+5),this.cavernNoise=new Xn(t+6),this.structureNoise=new Xn(t+7)}getBiome(t,e){const n=this.biomeNoise.fractal2D(t*.003,e*.003,3),s=this.biomeNoise.fractal2D(t*.003+500,e*.003+500,3),r=this.terrainNoise.fractal2D(t*.005,e*.005,2),a=this.detailNoise.fractal2D(t*.004+1e3,e*.004+1e3,2);return a>.55&&s>.3&&r<-.2?At.MUSHROOM_ISLAND:n<-.4?r<-.35?At.FROZEN_OCEAN:At.TUNDRA:n<-.15?s>.1?At.TAIGA:r>.4?At.MOUNTAINS:At.TUNDRA:n>.4?s>.3?At.JUNGLE:s<-.2?a>.2?At.MESA:At.DESERT:At.SAVANNA:n>.1?s>.3?At.BIRCH_FOREST:s>.05?At.FOREST:s<-.2?At.DESERT:At.PLAINS:s>.2?At.FOREST:r>.4?At.MOUNTAINS:r<-.35?At.OCEAN:s>0&&r<-.1?At.SWAMP:At.PLAINS}getHeight(t,e,n){const s=Gr[n],r=this.terrainNoise.fractal2D(t*.01,e*.01,4),a=this.detailNoise.fractal2D(t*.05,e*.05,2)*.3;let o=s.baseHeight+(r+a)*s.heightVariation;if(n===At.MOUNTAINS){const l=Math.abs(this.terrainNoise.fractal2D(t*.015,e*.015,3));o+=l*20}return n===At.MESA&&Math.abs(this.detailNoise.fractal2D(t*.02,e*.02,2))>.3&&(o+=8),Math.floor(Math.max(1,Math.min(o,tc-2)))}isCave(t,e,n){if(e<=1||e>=tc-1)return!1;const s=this.caveNoise.noise3D(t*.05,e*.07,n*.05),r=this.caveNoise.noise3D(t*.08,e*.05,n*.08);return Math.abs(s)<.08&&Math.abs(r)<.08}isCavern(t,e,n){if(e<=2||e>45)return!1;const s=this.cavernNoise.noise3D(t*.02,e*.03,n*.02),r=this.cavernNoise.noise3D(t*.01,e*.015,n*.01);return s>.55&&r>.3}isUndergroundLake(t,e,n){if(e<=5||e>35)return!1;const s=this.cavernNoise.noise3D(t*.02,e*.02,n*.02),r=this.cavernNoise.noise3D(t*.015,.5,n*.015);return s>.55&&r>.35&&e<25}getOre(t,e,n){const s=this.oreNoise.noise3D(t*.1,e*.1,n*.1);return e<16&&s>.78?x.DIAMOND_ORE:e<16&&s>.75?x.EMERALD_ORE:e<32&&s>.72?x.GOLD_ORE:e<32&&s>.69?x.LAPIS_ORE:e<48&&s>.66?x.REDSTONE_ORE:e<64&&s>.65?x.IRON_ORE:e<80&&s>.6?x.COAL_ORE:null}generateChunkData(t,e){const n=new Uint8Array(z*Mt*z);for(let s=0;s<z;s++)for(let r=0;r<z;r++){const a=t*z+s,o=e*z+r,l=this.getBiome(a,o),c=this.getHeight(a,o,l),h=Gr[l];for(let u=0;u<Mt;u++){const d=s*Mt*z+u*z+r;if(u===0){n[d]=x.BEDROCK;continue}const p=u<c-5&&this.isCave(a,u,o),_=this.isCavern(a,u,o);if(p||_){_&&this.isUndergroundLake(a,u,o)?n[d]=x.WATER:n[d]=x.AIR;continue}if(u>c)u<=ai?l===At.FROZEN_OCEAN&&u===ai?n[d]=x.ICE:n[d]=x.WATER:n[d]=x.AIR;else if(u===c)c<=ai+1&&l!==At.OCEAN&&l!==At.FROZEN_OCEAN&&l!==At.SWAMP?n[d]=x.SAND:l===At.MOUNTAINS&&c>70?n[d]=x.SNOW:l===At.MESA?u%4===0?n[d]=x.TERRACOTTA:u%4===2?n[d]=x.RED_SAND:n[d]=x.TERRACOTTA:n[d]=h.surfaceBlock;else if(u>c-4)l===At.MESA?n[d]=x.TERRACOTTA:n[d]=h.subBlock;else{const g=this.getOre(a,u,o);n[d]=g||x.STONE}}}return this._generateTrees(n,t,e),this._generateStructures(n,t,e),n}_generateTrees(t,e,n){for(let s=2;s<z-2;s++)for(let r=2;r<z-2;r++){const a=e*z+s,o=n*z+r,l=this.getBiome(a,o),c=Gr[l];if(c.treeChance<=0||(this.treeNoise.noise2D(a*.5,o*.5)+1)/2>c.treeChance*10)continue;let u=-1;for(let d=Mt-1;d>ai;d--){const p=s*Mt*z+d*z+r,_=t[p];if(_===x.GRASS||_===x.DIRT||_===x.SNOW||_===x.PODZOL||_===x.MYCELIUM){u=d;break}}if(!(u<ai+2))switch(l){case At.DESERT:this._placeCactus(t,s,u+1,r);break;case At.JUNGLE:this._placeJungleTree(t,s,u+1,r);break;case At.BIRCH_FOREST:this._placeBirchTree(t,s,u+1,r);break;case At.TAIGA:this._placeSpruceTree(t,s,u+1,r);break;case At.SAVANNA:this._placeAcaciaTree(t,s,u+1,r);break;case At.MUSHROOM_ISLAND:this._placeGiantMushroom(t,s,u+1,r);break;case At.SWAMP:this._placeSwampTree(t,s,u+1,r);break;default:this._placeTree(t,s,u+1,r);break}}}_placeTree(t,e,n,s){const r=4+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const l=n+o;if(l>=Mt)break;const c=e*Mt*z+l*z+s;t[c]=x.WOOD}const a=n+r-2;for(let o=0;o<4;o++){const l=a+o;if(l>=Mt)break;const c=o<3?2:1;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){if(h===0&&u===0&&o<2)continue;const d=e+h,p=s+u;if(d<0||d>=z||p<0||p>=z||Math.abs(h)===c&&Math.abs(u)===c&&o<3)continue;const _=d*Mt*z+l*z+p;t[_]===x.AIR&&(t[_]=x.LEAVES)}}}_placeJungleTree(t,e,n,s){const r=7+Math.floor(Math.random()*5);for(let o=0;o<r;o++){const l=n+o;if(l>=Mt)break;const c=e*Mt*z+l*z+s;t[c]=x.JUNGLE_WOOD}const a=n+r-3;for(let o=0;o<5;o++){const l=a+o;if(l>=Mt)break;const c=o<4?3:1;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){if(h===0&&u===0&&o<3)continue;const d=e+h,p=s+u;if(d<0||d>=z||p<0||p>=z||Math.abs(h)===c&&Math.abs(u)===c)continue;const _=d*Mt*z+l*z+p;t[_]===x.AIR&&(t[_]=x.JUNGLE_LEAVES)}}for(let o=-2;o<=2;o++)for(let l=-2;l<=2;l++){const c=e+o,h=s+l;if(!(c<0||c>=z||h<0||h>=z)&&!(Math.abs(o)<2&&Math.abs(l)<2)&&!(Math.random()>.3))for(let u=0;u<3;u++){const d=a-u;if(d<n)break;const p=c*Mt*z+d*z+h;t[p]===x.AIR&&(t[p]=x.BAMBOO)}}}_placeBirchTree(t,e,n,s){const r=5+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const l=n+o;if(l>=Mt)break;t[e*Mt*z+l*z+s]=x.BIRCH_WOOD}const a=n+r-2;for(let o=0;o<4;o++){const l=a+o;if(l>=Mt)break;const c=o<3?2:1;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){if(h===0&&u===0&&o<2)continue;const d=e+h,p=s+u;if(d<0||d>=z||p<0||p>=z||Math.abs(h)===c&&Math.abs(u)===c&&o<3)continue;const _=d*Mt*z+l*z+p;t[_]===x.AIR&&(t[_]=x.BIRCH_LEAVES)}}}_placeSpruceTree(t,e,n,s){const r=6+Math.floor(Math.random()*4);for(let a=0;a<r;a++){const o=n+a;if(o>=Mt)break;t[e*Mt*z+o*z+s]=x.SPRUCE_WOOD}for(let a=1;a<r;a++){const o=n+a;if(o>=Mt)break;const l=Math.max(0,Math.floor((r-a)/2));if(l===0){const c=e*Mt*z+(n+r)*z+s;n+r<Mt&&t[c]===x.AIR&&(t[c]=x.SPRUCE_LEAVES);continue}for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++){if(c===0&&h===0)continue;const u=e+c,d=s+h;if(u<0||u>=z||d<0||d>=z||Math.abs(c)===l&&Math.abs(h)===l)continue;const p=u*Mt*z+o*z+d;t[p]===x.AIR&&(t[p]=x.SPRUCE_LEAVES)}}}_placeAcaciaTree(t,e,n,s){const r=4+Math.floor(Math.random()*2);for(let o=0;o<r;o++){const l=n+o;if(l>=Mt)break;t[e*Mt*z+l*z+s]=x.ACACIA_WOOD}const a=n+r;for(let o=0;o<2;o++){const l=a+o;if(l>=Mt)break;const c=o===0?3:2;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){const d=e+h,p=s+u;if(d<0||d>=z||p<0||p>=z||Math.abs(h)+Math.abs(u)>c+1)continue;const _=d*Mt*z+l*z+p;t[_]===x.AIR&&(t[_]=x.ACACIA_LEAVES)}}}_placeGiantMushroom(t,e,n,s){const r=5+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const l=n+o;if(l>=Mt)break;t[e*Mt*z+l*z+s]=x.MUSHROOM_STEM}const a=n+r;for(let o=0;o<2;o++){const l=a+o;if(l>=Mt)break;const c=o===0?3:2;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){const d=e+h,p=s+u;if(d<0||d>=z||p<0||p>=z||Math.abs(h)===c&&Math.abs(u)===c)continue;const _=d*Mt*z+l*z+p;t[_]===x.AIR&&(t[_]=x.MUSHROOM_BLOCK)}}}_placeSwampTree(t,e,n,s){const r=3+Math.floor(Math.random()*2);for(let o=0;o<r;o++){const l=n+o;if(l>=Mt)break;t[e*Mt*z+l*z+s]=x.WOOD}const a=n+r-1;for(let o=0;o<3;o++){const l=a+o;if(l>=Mt)break;const c=o===0?2:o===1?3:1;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){if(h===0&&u===0&&o===0)continue;const d=e+h,p=s+u;if(d<0||d>=z||p<0||p>=z)continue;const _=d*Mt*z+l*z+p;t[_]===x.AIR&&(t[_]=x.LEAVES)}}}_placeCactus(t,e,n,s){const r=2+Math.floor(Math.random()*2);for(let a=0;a<r;a++){const o=n+a;if(o>=Mt)break;const l=e*Mt*z+o*z+s;t[l]=x.LEAVES}}_generateStructures(t,e,n){const s=e*z+8,r=n*z+8,a=this.structureNoise.noise2D(s*.02,r*.02),o=this.structureNoise.noise2D(s*.008,r*.008);a>.72&&o>.3&&this._placeDungeon(t,e,n),a<-.7&&o<-.2&&this._placeRuin(t,e,n);const l=this.getBiome(s,r);(l===At.PLAINS||l===At.SAVANNA)&&o>.55&&this._placeVillageHouse(t,e,n,l)}_placeDungeon(t,e,n){const s=20+Math.floor(Math.random()*10),r=4,a=4,o=5,l=5,c=4;for(let d=0;d<o;d++)for(let p=0;p<l;p++)for(let _=0;_<c;_++){const g=r+d,m=a+p,f=s+_;if(g>=z||m>=z||f>=Mt)continue;const T=g*Mt*z+f*z+m;d===0||d===o-1||p===0||p===l-1||_===0?t[T]=(d+_+p)%3===0?x.MOSSY_COBBLESTONE:x.COBBLESTONE:_===c-1?t[T]=x.CRACKED_STONE_BRICK:t[T]=x.AIR}const h=(r+2)*Mt*z+(s+1)*z+(a+2);h<t.length&&(t[h]=x.CHEST);const u=(r+1)*Mt*z+(s+2)*z+(a+1);u<t.length&&(t[u]=x.TORCH)}_placeRuin(t,e,n){const s=e*z+5,r=n*z+5,a=this.getBiome(s,r),o=this.getHeight(s,r,a);if(o<=ai)return;const l=o+1,c=4,h=4,u=3;for(let p=0;p<c;p++)for(let _=0;_<h;_++){const g=5+p,m=5+_;if(!(g>=z||m>=z))for(let f=0;f<u;f++){const T=l+f;if(T>=Mt)continue;const E=g*Mt*z+T*z+m;(p===0||p===c-1||_===0||_===h-1)&&Math.random()>.3&&(t[E]=Math.random()>.5?x.MOSSY_STONE_BRICK:x.CRACKED_STONE_BRICK)}}const d=6*Mt*z+l*z+6;d<t.length&&(t[d]=x.CHEST)}_placeVillageHouse(t,e,n,s){const r=e*z+6,a=n*z+6,o=this.getHeight(r,a,s);if(o<=ai)return;const l=o+1,c=5,h=5,u=4,d=s===At.SAVANNA?x.ACACIA_WOOD:x.PLANKS,p=s===At.SAVANNA?x.ACACIA_LEAVES:x.COBBLESTONE;for(let m=0;m<c;m++)for(let f=0;f<h;f++){const T=6+m,E=6+f;if(!(T>=z||E>=z))for(let A=0;A<u;A++){const D=l+A;if(D>=Mt)continue;const w=T*Mt*z+D*z+E;A===0?t[w]=x.COBBLESTONE:A===u-1?t[w]=p:m===0||m===c-1||f===0||f===h-1?m===2&&f===0&&A<=2?t[w]=x.AIR:t[w]=d:t[w]=x.AIR}}const _=8*Mt*z+(l+2)*z+8;_<t.length&&(t[_]=x.TORCH);const g=7*Mt*z+(l+1)*z+9;g<t.length&&(t[g]=x.CHEST)}static blockIndex(t,e,n){return t*Mt*z+e*z+n}}const qn=new Dt,Dm=[{dir:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uvRow:0},{dir:[-1,0,0],corners:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],uvRow:1},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvRow:2},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvRow:3},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvRow:4},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvRow:5}];class ic{constructor(t,e,n){this.cx=t,this.cz=e,this.world=n,this.blocks=null,this.mesh=null,this.waterMesh=null,this.dirty=!0,this.generated=!1}generate(t){this.blocks=t.generateChunkData(this.cx,this.cz),this.generated=!0,this.dirty=!0}getBlock(t,e,n){return t<0||t>=z||n<0||n>=z||e<0||e>=Mt?this.world.getBlock(this.cx*z+t,e,this.cz*z+n):this.blocks?this.blocks[js.blockIndex(t,e,n)]:x.AIR}setBlock(t,e,n,s){this.blocks&&(t<0||t>=z||n<0||n>=z||e<0||e>=Mt||(this.blocks[js.blockIndex(t,e,n)]=s,this.dirty=!0))}buildMesh(t){if(!this.blocks)return;const e=[],n=[],s=[],r=[],a=[],o=[],l=[],c=[];let h=0,u=0;for(let d=0;d<z;d++)for(let p=0;p<Mt;p++)for(let _=0;_<z;_++){const g=this.blocks[js.blockIndex(d,p,_)];if(g===x.AIR)continue;const m=yn[g];if(!m)continue;const f=g===x.WATER,T=this.cx*z+d,E=this.cz*z+_;for(const A of Dm){const D=d+A.dir[0],w=p+A.dir[1],R=_+A.dir[2],X=this.getBlock(D,w,R),S=yn[X];if(!(f?X!==x.WATER&&(!S||!S.solid):!S||S.transparent))continue;A.dir[1]===1&&m.topColor!==void 0?qn.set(m.topColor):A.dir[1]===-1&&m.bottomColor!==void 0?qn.set(m.bottomColor):A.dir[1]===0&&m.sideColor!==void 0?qn.set(m.sideColor):qn.set(m.color);const H=A.dir[1]===1?1:A.dir[1]===-1?.6:.8;qn.multiplyScalar(H);const j=f?a:e,ot=f?o:n,L=f?l:s,O=f?c:r,V=f?u:h;let Z=0,K=1,$=0,J=1;if(m.thin){const st=g===x.DOOR&&this.world.isDoorOpen(T,p,E)?"x":m.thin;st==="z"?(Z=.4,K=.6):st==="x"&&($=.4,J=.6)}for(const nt of A.corners){const st=nt[0]===0?$:J,G=nt[2]===0?Z:K;j.push(T+st,p+nt[1]-(f?.1:0),E+G),ot.push(A.dir[0],A.dir[1],A.dir[2]),L.push(qn.r,qn.g,qn.b)}O.push(V,V+1,V+2,V,V+2,V+3),f?u+=4:h+=4}}if(this._removeMeshes(t),e.length>0){const d=new Je;d.setAttribute("position",new Te(e,3)),d.setAttribute("normal",new Te(n,3)),d.setAttribute("color",new Te(s,3)),d.setIndex(r);const p=new re({vertexColors:!0});this.mesh=new at(d,p),this.mesh.userData.isChunk=!0,t.add(this.mesh)}if(a.length>0){const d=new Je;d.setAttribute("position",new Te(a,3)),d.setAttribute("normal",new Te(o,3)),d.setAttribute("color",new Te(l,3)),d.setIndex(c);const p=new re({vertexColors:!0,transparent:!0,opacity:.6,side:fn});this.waterMesh=new at(d,p),this.waterMesh.userData.isChunk=!0,t.add(this.waterMesh)}this.dirty=!1}_removeMeshes(t){this.mesh&&(t.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.waterMesh&&(t.remove(this.waterMesh),this.waterMesh.geometry.dispose(),this.waterMesh.material.dispose(),this.waterMesh=null)}dispose(t){this._removeMeshes(t),this.blocks=null}}class Im{constructor(t,e=42){this.scene=t,this.generator=new js(e),this.chunks=new Map,this.seed=e,this.loadQueue=[],this.meshQueue=[],this.maxChunkLoadsPerFrame=4,this.maxMeshBuildsPerFrame=3,this.doorStates=new Map}chunkKey(t,e){return`${t},${e}`}getChunk(t,e){return this.chunks.get(this.chunkKey(t,e))}getBlock(t,e,n){if(e<0||e>=Mt)return x.AIR;const s=Math.floor(t/z),r=Math.floor(n/z),a=this.getChunk(s,r);if(!a||!a.blocks)return x.AIR;const o=(t%z+z)%z,l=(n%z+z)%z;return a.getBlock(o,e,l)}setBlock(t,e,n,s){if(e<0||e>=Mt)return;const r=Math.floor(t/z),a=Math.floor(n/z),o=this.getChunk(r,a);if(!o||!o.blocks)return;const l=(t%z+z)%z,c=(n%z+z)%z;o.setBlock(l,e,c,s),l===0&&this._markDirty(r-1,a),l===z-1&&this._markDirty(r+1,a),c===0&&this._markDirty(r,a-1),c===z-1&&this._markDirty(r,a+1)}_markDirty(t,e){const n=this.getChunk(t,e);n&&(n.dirty=!0)}isSolid(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(n),o=this.getBlock(s,r,a),l=yn[o];return!(!l||!l.solid||o===x.DOOR&&this.isDoorOpen(s,r,a))}isDoorOpen(t,e,n){return!!this.doorStates.get(`${t},${e},${n}`)}toggleDoor(t,e,n){const s=`${t},${e},${n}`,r=!this.doorStates.get(s);this.doorStates.set(s,r);const a=Math.floor(t/z),o=Math.floor(n/z),l=this.getChunk(a,o);return l&&(l.dirty=!0),this._markDirty(a-1,o),this._markDirty(a+1,o),this._markDirty(a,o-1),this._markDirty(a,o+1),r}update(t,e,n){const s=new Set,r=[{x:t,z:e}];if(n)for(const l of n)r.push(l);for(const l of r){const c=Math.floor(l.x/z),h=Math.floor(l.z/z);for(let u=-Oi;u<=Oi;u++)for(let d=-Oi;d<=Oi;d++){if(u*u+d*d>Oi*Oi)continue;const p=c+u,_=h+d,g=this.chunkKey(p,_);if(s.add(g),!this.chunks.has(g)){const m=new ic(p,_,this);this.chunks.set(g,m),this.loadQueue.push(m)}}}for(const[l,c]of this.chunks)s.has(l)||(c.dispose(this.scene),this.chunks.delete(l));let a=0;for(;this.loadQueue.length>0&&a<this.maxChunkLoadsPerFrame;){const l=this.loadQueue.shift();this.chunks.has(this.chunkKey(l.cx,l.cz))&&(l.generated||(l.generate(this.generator),this.meshQueue.push(l),a++))}let o=0;for(;this.meshQueue.length>0&&o<this.maxMeshBuildsPerFrame;){const l=this.meshQueue.shift();this.chunks.has(this.chunkKey(l.cx,l.cz))&&(l.buildMesh(this.scene),o++)}for(const l of this.chunks.values())l.dirty&&l.generated&&o<this.maxMeshBuildsPerFrame+2&&(l.buildMesh(this.scene),o++)}raycast(t,e,n=8){let s=Math.floor(t.x),r=Math.floor(t.y),a=Math.floor(t.z);const o=e.x>0?1:-1,l=e.y>0?1:-1,c=e.z>0?1:-1,h=e.x!==0?Math.abs(1/e.x):1/0,u=e.y!==0?Math.abs(1/e.y):1/0,d=e.z!==0?Math.abs(1/e.z):1/0;let p=e.x!==0?(e.x>0?s+1-t.x:t.x-s)*h:1/0,_=e.y!==0?(e.y>0?r+1-t.y:t.y-r)*u:1/0,g=e.z!==0?(e.z>0?a+1-t.z:t.z-a)*d:1/0,m=s,f=r,T=a,E=0;for(;E<n;){const A=this.getBlock(s,r,a);if(A!==x.AIR&&A!==x.WATER)return{hit:!0,blockPos:{x:s,y:r,z:a},normal:{x:m-s,y:f-r,z:T-a},blockType:A,distance:E};m=s,f=r,T=a,p<_?p<g?(E=p,s+=o,p+=h):(E=g,a+=c,g+=d):_<g?(E=_,r+=l,_+=u):(E=g,a+=c,g+=d)}return{hit:!1}}getSpawnPoint(){const n=Math.floor(0/z),s=Math.floor(0/z),r=this.chunkKey(n,s);if(!this.chunks.has(r)){const a=new ic(n,s,this);a.generate(this.generator),this.chunks.set(r,a)}for(let a=Mt-1;a>0;a--){const o=this.getBlock(0,a,0),l=yn[o];if(l&&l.solid)return{x:0+.5,y:a+2,z:0+.5}}return{x:0+.5,y:60,z:0+.5}}}const _t={TOOL:0,FOOD:1,MATERIAL:2},ae={PICKAXE:1,AXE:2,SHOVEL:3,SWORD:4,BOW:5},hn={HELMET:0,CHESTPLATE:1,LEGGINGS:2,BOOTS:3},q={STICK:-1,WOODEN_PICKAXE:-2,STONE_PICKAXE:-3,IRON_PICKAXE:-4,DIAMOND_PICKAXE:-5,WOODEN_AXE:-6,STONE_AXE:-7,IRON_AXE:-8,DIAMOND_AXE:-9,WOODEN_SHOVEL:-10,STONE_SHOVEL:-11,IRON_SHOVEL:-12,DIAMOND_SHOVEL:-13,WOODEN_SWORD:-14,STONE_SWORD:-15,IRON_SWORD:-16,DIAMOND_SWORD:-17,IRON_INGOT:-18,GOLD_INGOT:-19,DIAMOND:-20,COAL:-21,RAW_BEEF:-22,COOKED_BEEF:-23,RAW_PORK:-24,COOKED_PORK:-25,APPLE:-26,BREAD:-27,BERRIES:-28,WHEAT:-29,LEATHER_HELMET:-30,LEATHER_CHESTPLATE:-31,LEATHER_LEGGINGS:-32,LEATHER_BOOTS:-33,IRON_HELMET:-34,IRON_CHESTPLATE:-35,IRON_LEGGINGS:-36,IRON_BOOTS:-37,DIAMOND_HELMET:-38,DIAMOND_CHESTPLATE:-39,DIAMOND_LEGGINGS:-40,DIAMOND_BOOTS:-41,BOW:-42,ARROW:-43,LEATHER:-44,STRING:-45,FEATHER:-46,FLINT:-47,GUNPOWDER:-48,BONE:-49,ENDER_PEARL:-50,EMERALD:-51,LAPIS:-52,QUARTZ_ITEM:-53,GOLDEN_APPLE:-54,RAW_CHICKEN:-55,COOKED_CHICKEN:-56,RAW_MUTTON:-57,COOKED_MUTTON:-58,MUSHROOM_STEW:-59,BOWL:-60,CAKE:-61,SUGAR:-62,NETHER_STAR:-63,DRAGON_SCALE:-64,BOSS_KEY:-65},St={STONE:"stone",WOOD:"wood",DIRT:"dirt",OTHER:"other"},xe={[q.STICK]:{name:"Stick",category:_t.MATERIAL,stackSize:64,color:9136958,icon:"/"},[q.WOODEN_PICKAXE]:{name:"Wooden Pickaxe",category:_t.TOOL,stackSize:1,durability:60,miningSpeed:1,attackDamage:2,toolType:ae.PICKAXE,color:12096602,icon:"⛏"},[q.STONE_PICKAXE]:{name:"Stone Pickaxe",category:_t.TOOL,stackSize:1,durability:132,miningSpeed:1.5,attackDamage:3,toolType:ae.PICKAXE,color:8421504,icon:"⛏"},[q.IRON_PICKAXE]:{name:"Iron Pickaxe",category:_t.TOOL,stackSize:1,durability:250,miningSpeed:2,attackDamage:4,toolType:ae.PICKAXE,color:12632256,icon:"⛏"},[q.DIAMOND_PICKAXE]:{name:"Diamond Pickaxe",category:_t.TOOL,stackSize:1,durability:1562,miningSpeed:3,attackDamage:5,toolType:ae.PICKAXE,color:6340832,icon:"⛏"},[q.WOODEN_AXE]:{name:"Wooden Axe",category:_t.TOOL,stackSize:1,durability:60,miningSpeed:1,attackDamage:3,toolType:ae.AXE,color:12096602,icon:"🪓"},[q.STONE_AXE]:{name:"Stone Axe",category:_t.TOOL,stackSize:1,durability:132,miningSpeed:1.5,attackDamage:4,toolType:ae.AXE,color:8421504,icon:"🪓"},[q.IRON_AXE]:{name:"Iron Axe",category:_t.TOOL,stackSize:1,durability:250,miningSpeed:2,attackDamage:5,toolType:ae.AXE,color:12632256,icon:"🪓"},[q.DIAMOND_AXE]:{name:"Diamond Axe",category:_t.TOOL,stackSize:1,durability:1562,miningSpeed:3,attackDamage:6,toolType:ae.AXE,color:6340832,icon:"🪓"},[q.WOODEN_SHOVEL]:{name:"Wooden Shovel",category:_t.TOOL,stackSize:1,durability:60,miningSpeed:1,attackDamage:1,toolType:ae.SHOVEL,color:12096602,icon:"🔨"},[q.STONE_SHOVEL]:{name:"Stone Shovel",category:_t.TOOL,stackSize:1,durability:132,miningSpeed:1.5,attackDamage:2,toolType:ae.SHOVEL,color:8421504,icon:"🔨"},[q.IRON_SHOVEL]:{name:"Iron Shovel",category:_t.TOOL,stackSize:1,durability:250,miningSpeed:2,attackDamage:3,toolType:ae.SHOVEL,color:12632256,icon:"🔨"},[q.DIAMOND_SHOVEL]:{name:"Diamond Shovel",category:_t.TOOL,stackSize:1,durability:1562,miningSpeed:3,attackDamage:4,toolType:ae.SHOVEL,color:6340832,icon:"🔨"},[q.WOODEN_SWORD]:{name:"Wooden Sword",category:_t.TOOL,stackSize:1,durability:60,miningSpeed:.5,attackDamage:5,toolType:ae.SWORD,color:12096602,icon:"🗡"},[q.STONE_SWORD]:{name:"Stone Sword",category:_t.TOOL,stackSize:1,durability:132,miningSpeed:.5,attackDamage:6,toolType:ae.SWORD,color:8421504,icon:"🗡"},[q.IRON_SWORD]:{name:"Iron Sword",category:_t.TOOL,stackSize:1,durability:250,miningSpeed:.5,attackDamage:7,toolType:ae.SWORD,color:12632256,icon:"🗡"},[q.DIAMOND_SWORD]:{name:"Diamond Sword",category:_t.TOOL,stackSize:1,durability:1562,miningSpeed:.5,attackDamage:8,toolType:ae.SWORD,color:6340832,icon:"🗡"},[q.IRON_INGOT]:{name:"Iron Ingot",category:_t.MATERIAL,stackSize:64,color:12632256,icon:"▬"},[q.GOLD_INGOT]:{name:"Gold Ingot",category:_t.MATERIAL,stackSize:64,color:16766720,icon:"▬"},[q.DIAMOND]:{name:"Diamond",category:_t.MATERIAL,stackSize:64,color:6340832,icon:"◆"},[q.COAL]:{name:"Coal",category:_t.MATERIAL,stackSize:64,color:2763306,icon:"●"},[q.WHEAT]:{name:"Wheat",category:_t.MATERIAL,stackSize:64,color:14329120,icon:"🌾"},[q.RAW_BEEF]:{name:"Raw Beef",category:_t.FOOD,stackSize:64,foodValue:3,color:11154227,icon:"🥩"},[q.COOKED_BEEF]:{name:"Cooked Beef",category:_t.FOOD,stackSize:64,foodValue:8,color:9127187,icon:"🥩"},[q.RAW_PORK]:{name:"Raw Pork",category:_t.FOOD,stackSize:64,foodValue:3,color:15636889,icon:"🍖"},[q.COOKED_PORK]:{name:"Cooked Pork",category:_t.FOOD,stackSize:64,foodValue:8,color:13468991,icon:"🍖"},[q.APPLE]:{name:"Apple",category:_t.FOOD,stackSize:64,foodValue:4,color:13378082,icon:"🍎"},[q.BREAD]:{name:"Bread",category:_t.FOOD,stackSize:64,foodValue:5,color:14329120,icon:"🍞"},[q.BERRIES]:{name:"Berries",category:_t.FOOD,stackSize:64,foodValue:2,color:9109504,icon:"🫐"},[q.LEATHER_HELMET]:{name:"Leather Helmet",category:_t.TOOL,stackSize:1,durability:56,armorSlot:hn.HELMET,armorPoints:1,color:9136958,icon:"⛑"},[q.LEATHER_CHESTPLATE]:{name:"Leather Chestplate",category:_t.TOOL,stackSize:1,durability:81,armorSlot:hn.CHESTPLATE,armorPoints:3,color:9136958,icon:"🦺"},[q.LEATHER_LEGGINGS]:{name:"Leather Leggings",category:_t.TOOL,stackSize:1,durability:76,armorSlot:hn.LEGGINGS,armorPoints:2,color:9136958,icon:"👖"},[q.LEATHER_BOOTS]:{name:"Leather Boots",category:_t.TOOL,stackSize:1,durability:66,armorSlot:hn.BOOTS,armorPoints:1,color:9136958,icon:"👢"},[q.IRON_HELMET]:{name:"Iron Helmet",category:_t.TOOL,stackSize:1,durability:166,armorSlot:hn.HELMET,armorPoints:2,color:12632256,icon:"⛑"},[q.IRON_CHESTPLATE]:{name:"Iron Chestplate",category:_t.TOOL,stackSize:1,durability:241,armorSlot:hn.CHESTPLATE,armorPoints:6,color:12632256,icon:"🦺"},[q.IRON_LEGGINGS]:{name:"Iron Leggings",category:_t.TOOL,stackSize:1,durability:226,armorSlot:hn.LEGGINGS,armorPoints:5,color:12632256,icon:"👖"},[q.IRON_BOOTS]:{name:"Iron Boots",category:_t.TOOL,stackSize:1,durability:196,armorSlot:hn.BOOTS,armorPoints:2,color:12632256,icon:"👢"},[q.DIAMOND_HELMET]:{name:"Diamond Helmet",category:_t.TOOL,stackSize:1,durability:364,armorSlot:hn.HELMET,armorPoints:3,color:6340832,icon:"⛑"},[q.DIAMOND_CHESTPLATE]:{name:"Diamond Chestplate",category:_t.TOOL,stackSize:1,durability:529,armorSlot:hn.CHESTPLATE,armorPoints:8,color:6340832,icon:"🦺"},[q.DIAMOND_LEGGINGS]:{name:"Diamond Leggings",category:_t.TOOL,stackSize:1,durability:496,armorSlot:hn.LEGGINGS,armorPoints:6,color:6340832,icon:"👖"},[q.DIAMOND_BOOTS]:{name:"Diamond Boots",category:_t.TOOL,stackSize:1,durability:430,armorSlot:hn.BOOTS,armorPoints:3,color:6340832,icon:"👢"},[q.BOW]:{name:"Bow",category:_t.TOOL,stackSize:1,durability:384,attackDamage:6,toolType:ae.BOW,color:9136958,icon:"🏹"},[q.ARROW]:{name:"Arrow",category:_t.MATERIAL,stackSize:64,color:9136958,icon:"➜"},[q.LEATHER]:{name:"Leather",category:_t.MATERIAL,stackSize:64,color:9136958,icon:"🟫"},[q.STRING]:{name:"String",category:_t.MATERIAL,stackSize:64,color:14737632,icon:"〰"},[q.FEATHER]:{name:"Feather",category:_t.MATERIAL,stackSize:64,color:15790320,icon:"🪶"},[q.FLINT]:{name:"Flint",category:_t.MATERIAL,stackSize:64,color:4210752,icon:"◆"},[q.GUNPOWDER]:{name:"Gunpowder",category:_t.MATERIAL,stackSize:64,color:6316128,icon:"✦"},[q.BONE]:{name:"Bone",category:_t.MATERIAL,stackSize:64,color:14736584,icon:"🦴"},[q.ENDER_PEARL]:{name:"Ender Pearl",category:_t.MATERIAL,stackSize:16,color:1727066,icon:"⬤"},[q.EMERALD]:{name:"Emerald",category:_t.MATERIAL,stackSize:64,color:3199024,icon:"◆"},[q.LAPIS]:{name:"Lapis Lazuli",category:_t.MATERIAL,stackSize:64,color:2117792,icon:"●"},[q.QUARTZ_ITEM]:{name:"Quartz",category:_t.MATERIAL,stackSize:64,color:15788256,icon:"◇"},[q.SUGAR]:{name:"Sugar",category:_t.MATERIAL,stackSize:64,color:15790320,icon:"⁎"},[q.BOWL]:{name:"Bowl",category:_t.MATERIAL,stackSize:64,color:9136958,icon:"🥣"},[q.GOLDEN_APPLE]:{name:"Golden Apple",category:_t.FOOD,stackSize:64,foodValue:4,color:16766720,icon:"🍎"},[q.RAW_CHICKEN]:{name:"Raw Chicken",category:_t.FOOD,stackSize:64,foodValue:2,color:15645627,icon:"🍗"},[q.COOKED_CHICKEN]:{name:"Cooked Chicken",category:_t.FOOD,stackSize:64,foodValue:6,color:13474367,icon:"🍗"},[q.RAW_MUTTON]:{name:"Raw Mutton",category:_t.FOOD,stackSize:64,foodValue:2,color:13404296,icon:"🥩"},[q.COOKED_MUTTON]:{name:"Cooked Mutton",category:_t.FOOD,stackSize:64,foodValue:6,color:10121280,icon:"🥩"},[q.MUSHROOM_STEW]:{name:"Mushroom Stew",category:_t.FOOD,stackSize:1,foodValue:6,color:10119754,icon:"🍲"},[q.CAKE]:{name:"Cake",category:_t.FOOD,stackSize:1,foodValue:14,color:15786192,icon:"🎂"},[q.NETHER_STAR]:{name:"Nether Star",category:_t.MATERIAL,stackSize:64,color:16777184,icon:"⭐"},[q.DRAGON_SCALE]:{name:"Dragon Scale",category:_t.MATERIAL,stackSize:64,color:4857952,icon:"🐉"},[q.BOSS_KEY]:{name:"Boss Key",category:_t.MATERIAL,stackSize:1,color:16766720,icon:"🔑"}},Pm={[x.STONE]:St.STONE,[x.COBBLESTONE]:St.STONE,[x.COAL_ORE]:St.STONE,[x.IRON_ORE]:St.STONE,[x.GOLD_ORE]:St.STONE,[x.DIAMOND_ORE]:St.STONE,[x.OBSIDIAN]:St.STONE,[x.SANDSTONE]:St.STONE,[x.BRICK]:St.STONE,[x.FURNACE]:St.STONE,[x.BEDROCK]:St.STONE,[x.ICE]:St.STONE,[x.MOSSY_COBBLESTONE]:St.STONE,[x.STONE_BRICK]:St.STONE,[x.MOSSY_STONE_BRICK]:St.STONE,[x.CRACKED_STONE_BRICK]:St.STONE,[x.PACKED_ICE]:St.STONE,[x.BLUE_ICE]:St.STONE,[x.NETHERRACK]:St.STONE,[x.IRON_BLOCK]:St.STONE,[x.GOLD_BLOCK]:St.STONE,[x.DIAMOND_BLOCK]:St.STONE,[x.EMERALD_ORE]:St.STONE,[x.EMERALD_BLOCK]:St.STONE,[x.REDSTONE_ORE]:St.STONE,[x.LAPIS_ORE]:St.STONE,[x.LAPIS_BLOCK]:St.STONE,[x.QUARTZ]:St.STONE,[x.PRISMARINE]:St.STONE,[x.TERRACOTTA]:St.STONE,[x.WOOD]:St.WOOD,[x.PLANKS]:St.WOOD,[x.CRAFTING_TABLE]:St.WOOD,[x.JUNGLE_WOOD]:St.WOOD,[x.BIRCH_WOOD]:St.WOOD,[x.SPRUCE_WOOD]:St.WOOD,[x.ACACIA_WOOD]:St.WOOD,[x.CHEST]:St.WOOD,[x.BOOKSHELF]:St.WOOD,[x.FENCE]:St.WOOD,[x.DOOR]:St.WOOD,[x.BAMBOO]:St.WOOD,[x.GRASS]:St.DIRT,[x.DIRT]:St.DIRT,[x.SAND]:St.DIRT,[x.GRAVEL]:St.DIRT,[x.CLAY]:St.DIRT,[x.SNOW]:St.DIRT,[x.MYCELIUM]:St.DIRT,[x.PODZOL]:St.DIRT,[x.RED_SAND]:St.DIRT,[x.SOUL_SAND]:St.DIRT},Om={[ae.PICKAXE]:St.STONE,[ae.AXE]:St.WOOD,[ae.SHOVEL]:St.DIRT,[ae.SWORD]:null};function Nm(i,t){if(!i||i.isBlock)return .25;const e=xe[i.id];if(!e||e.category!==_t.TOOL)return .25;const n=Pm[t]||St.OTHER,s=Om[e.toolType];return s&&s===n?e.miningSpeed:.25}function Gs(i){if(!i||i.isBlock)return 1;const t=xe[i.id];return t&&t.attackDamage||1}const sc=[{input:x.IRON_ORE,inputIsBlock:!0,output:q.IRON_INGOT,outputIsBlock:!1,time:10},{input:x.GOLD_ORE,inputIsBlock:!0,output:q.GOLD_INGOT,outputIsBlock:!1,time:10},{input:x.SAND,inputIsBlock:!0,output:x.GLASS,outputIsBlock:!0,time:10},{input:x.CLAY,inputIsBlock:!0,output:x.BRICK,outputIsBlock:!0,time:10},{input:x.COBBLESTONE,inputIsBlock:!0,output:x.STONE,outputIsBlock:!0,time:10},{input:x.WOOD,inputIsBlock:!0,output:q.COAL,outputIsBlock:!1,time:10},{input:x.COAL_ORE,inputIsBlock:!0,output:q.COAL,outputIsBlock:!1,time:10},{input:x.DIAMOND_ORE,inputIsBlock:!0,output:q.DIAMOND,outputIsBlock:!1,time:10},{input:q.RAW_BEEF,inputIsBlock:!1,output:q.COOKED_BEEF,outputIsBlock:!1,time:8},{input:q.RAW_PORK,inputIsBlock:!1,output:q.COOKED_PORK,outputIsBlock:!1,time:8},{input:q.RAW_CHICKEN,inputIsBlock:!1,output:q.COOKED_CHICKEN,outputIsBlock:!1,time:8},{input:q.RAW_MUTTON,inputIsBlock:!1,output:q.COOKED_MUTTON,outputIsBlock:!1,time:8},{input:x.EMERALD_ORE,inputIsBlock:!0,output:q.EMERALD,outputIsBlock:!1,time:10},{input:x.REDSTONE_ORE,inputIsBlock:!0,output:q.GUNPOWDER,outputIsBlock:!1,time:10},{input:x.LAPIS_ORE,inputIsBlock:!0,output:q.LAPIS,outputIsBlock:!1,time:10},{input:x.NETHERRACK,inputIsBlock:!0,output:x.BRICK,outputIsBlock:!0,time:10}],Bm={[x.WOOD]:15,[x.PLANKS]:15,[x.LEAVES]:5,[x.JUNGLE_WOOD]:15,[x.BIRCH_WOOD]:15,[x.SPRUCE_WOOD]:15,[x.ACACIA_WOOD]:15,[x.BOOKSHELF]:15,[x.FENCE]:10,[x.BAMBOO]:5,[q.STICK]:5,[q.COAL]:80,[q.BOW]:10};function Um(i){let t=0;for(const e of i)if(e){const n=xe[e.id];n&&n.armorPoints&&(t+=n.armorPoints)}return Math.min(.8,t*.04)}const Fm={Zombie:[{item:q.LEATHER,isBlock:!1,chance:.5,min:0,max:2}],Skeleton:[{item:q.BONE,isBlock:!1,chance:.8,min:0,max:2},{item:q.ARROW,isBlock:!1,chance:.5,min:0,max:2}],Spider:[{item:q.STRING,isBlock:!1,chance:.7,min:0,max:2}],Creeper:[{item:q.GUNPOWDER,isBlock:!1,chance:.8,min:0,max:2}],Enderman:[{item:q.ENDER_PEARL,isBlock:!1,chance:.5,min:0,max:1}],Cow:[{item:q.RAW_BEEF,isBlock:!1,chance:1,min:1,max:3},{item:q.LEATHER,isBlock:!1,chance:.8,min:0,max:2}],Pig:[{item:q.RAW_PORK,isBlock:!1,chance:1,min:1,max:3}],Sheep:[{item:q.RAW_MUTTON,isBlock:!1,chance:1,min:1,max:2},{item:x.WOOL,isBlock:!0,chance:.8,min:1,max:1}],Chicken:[{item:q.RAW_CHICKEN,isBlock:!1,chance:1,min:1,max:1},{item:q.FEATHER,isBlock:!1,chance:.7,min:0,max:2}],Witch:[{item:q.GUNPOWDER,isBlock:!1,chance:.5,min:0,max:2},{item:q.SUGAR,isBlock:!1,chance:.5,min:0,max:2}],Rabbit:[{item:q.LEATHER,isBlock:!1,chance:.5,min:0,max:1}]},Vr={},Wr={};function vn(i,t){return Vr[i]||(Vr[i]=t()),Vr[i]}function Bn(i,t){return Wr[i]||(Wr[i]=t()),Wr[i]}const rc=[{skin:13935988,shirt:3900150,pants:1981023,shoes:4863784,hair:4859920,eye:2450411},{skin:13012570,shirt:15680580,pants:3621201,shoes:3811870,hair:1710638,eye:1483594}];class km{constructor(t=0){this.playerIndex=t;const e=rc[t]||rc[0];this.group=new rn,this.animTime=0,this.isMoving=!1,this.isSprinting=!1,this.isSwimming=!1,this.punchTimer=0,this.bodyContainer=new rn,this.group.add(this.bodyContainer);const n=vn("torso",()=>new bt(.5,.65,.28)),s=Bn(`shirt${t}`,()=>new re({color:e.shirt}));this.torso=new at(n,s),this.torso.position.y=.95,this.bodyContainer.add(this.torso),this.headGroup=new rn,this.headGroup.position.y=1.28;const r=vn("head",()=>new bt(.42,.42,.42)),a=Bn(`skin${t}`,()=>new re({color:e.skin}));this.head=new at(r,a),this.head.position.y=.21,this.headGroup.add(this.head);const o=vn("hair",()=>new bt(.44,.12,.44)),l=Bn(`hair${t}`,()=>new re({color:e.hair}));this.hair=new at(o,l),this.hair.position.y=.44,this.headGroup.add(this.hair);const c=vn("eye",()=>new bt(.06,.06,.02)),h=vn("eyeW",()=>new bt(.1,.08,.02)),u=Bn("eyeWhite",()=>new mn({color:16777215})),d=Bn(`eye${t}`,()=>new mn({color:e.eye})),p=new at(h,u);p.position.set(-.09,.24,.215),this.headGroup.add(p);const _=new at(c,d);_.position.set(-.09,.24,.225),this.headGroup.add(_);const g=new at(h,u);g.position.set(.09,.24,.215),this.headGroup.add(g);const m=new at(c,d);m.position.set(.09,.24,.225),this.headGroup.add(m);const f=vn("mouth",()=>new bt(.12,.03,.02)),T=Bn("mouth",()=>new mn({color:9127187}));this.mouth=new at(f,T),this.mouth.position.set(0,.14,.225),this.headGroup.add(this.mouth),this.bodyContainer.add(this.headGroup);const E=vn("arm",()=>new bt(.18,.6,.22)),A=vn("hand",()=>new bt(.18,.14,.22));this.leftArmPivot=new rn,this.leftArmPivot.position.set(-.34,1.22,0);const D=new at(E,s);D.position.y=-.3,this.leftArmPivot.add(D);const w=new at(A,a);w.position.y=-.67,this.leftArmPivot.add(w),this.bodyContainer.add(this.leftArmPivot),this.rightArmPivot=new rn,this.rightArmPivot.position.set(.34,1.22,0);const R=new at(E,s);R.position.y=-.3,this.rightArmPivot.add(R);const X=new at(A,a);X.position.y=-.67,this.rightArmPivot.add(X),this.heldItemGroup=new rn,this.heldItemGroup.position.set(0,-.5,.2),this.heldItemGroup.rotation.x=-Math.PI*.75,this.heldItemGroup.visible=!1,this.rightArmPivot.add(this.heldItemGroup),this._currentHeldType=null,this.bodyContainer.add(this.rightArmPivot);const S=vn("leg",()=>new bt(.22,.6,.24)),b=Bn(`pants${t}`,()=>new re({color:e.pants})),H=vn("shoe",()=>new bt(.24,.12,.3)),j=Bn(`shoe${t}`,()=>new re({color:e.shoes}));this.leftLegPivot=new rn,this.leftLegPivot.position.set(-.13,.62,0);const ot=new at(S,b);ot.position.y=-.3,this.leftLegPivot.add(ot);const L=new at(H,j);L.position.set(0,-.62,.03),this.leftLegPivot.add(L),this.bodyContainer.add(this.leftLegPivot),this.rightLegPivot=new rn,this.rightLegPivot.position.set(.13,.62,0);const O=new at(S,b);O.position.y=-.3,this.rightLegPivot.add(O);const V=new at(H,j);V.position.set(0,-.62,.03),this.rightLegPivot.add(V),this.bodyContainer.add(this.rightLegPivot),this.nameTag=null;const Z=vn("shadow",()=>new go(.35,16)),K=Bn("shadow",()=>new mn({color:0,transparent:!0,opacity:.25,depthWrite:!1}));this.shadow=new at(Z,K),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.01,this.group.add(this.shadow),this.group.traverse($=>{$.isMesh&&($.castShadow=!0)})}update(t,e,n,s,r,a,o,l){if(this.isMoving=r,this.isSprinting=a,this.isSwimming=o,this.group.position.copy(e),this.group.rotation.y=n+Math.PI,this.headGroup.rotation.x=s*.8,o?this._animateSwim(t):r?this._animateWalk(t,a):this._animateIdle(t),this.punchTimer>0){this.punchTimer-=t;const c=Math.max(0,this.punchTimer/.3),h=Math.sin(c*Math.PI)*-1.8;this.rightArmPivot.rotation.x=h}}triggerPunch(){this.punchTimer=.3}_animateWalk(t,e){const n=e?12:8,s=e?.7:.5;this.animTime+=t*n;const r=Math.sin(this.animTime)*s;this.leftArmPivot.rotation.x=r,this.rightArmPivot.rotation.x=-r,this.leftLegPivot.rotation.x=-r,this.rightLegPivot.rotation.x=r,this.torso.position.y=.95+Math.abs(Math.sin(this.animTime*2))*.02,this.torso.rotation.x=0,this.bodyContainer.rotation.x*=.85,this.bodyContainer.position.y*=.85,this.leftArmPivot.rotation.z*=.85,this.rightArmPivot.rotation.z*=.85}_animateIdle(t){this.animTime+=t*1.5;const e=Math.sin(this.animTime)*.01;this.torso.position.y=.95+e,this.torso.rotation.x=0,this.leftArmPivot.rotation.x*=.9,this.rightArmPivot.rotation.x*=.9,this.leftLegPivot.rotation.x*=.9,this.rightLegPivot.rotation.x*=.9,this.leftArmPivot.rotation.z=Math.sin(this.animTime*.7)*.03,this.rightArmPivot.rotation.z=-Math.sin(this.animTime*.7)*.03,this.bodyContainer.rotation.x*=.85,this.bodyContainer.position.y*=.85}_animateSwim(t){this.animTime+=t*5;const e=this.animTime,n=Math.sin(e),s=Math.PI/2*.85;this.bodyContainer.rotation.x+=(s-this.bodyContainer.rotation.x)*.08,this.bodyContainer.position.y+=(.6-this.bodyContainer.position.y)*.08,this.torso.rotation.x=0,this.leftArmPivot.rotation.x=-2+n*.8,this.rightArmPivot.rotation.x=-2-n*.8,this.leftArmPivot.rotation.z=.1+Math.abs(n)*.1,this.rightArmPivot.rotation.z=-.1-Math.abs(n)*.1,this.leftLegPivot.rotation.x=Math.sin(e*2)*.3,this.rightLegPivot.rotation.x=-Math.sin(e*2)*.3}addToScene(t){t.add(this.group)}removeFromScene(t){t.remove(this.group)}setFirstPerson(t){this.headGroup.visible=!t}setHeldItem(t){const e=t&&!t.isBlock?xe[t.id]:null,n=(e==null?void 0:e.toolType)??null;if(n===this._currentHeldType)return;for(this._currentHeldType=n;this.heldItemGroup.children.length>0;)this.heldItemGroup.remove(this.heldItemGroup.children[0]);if(n==null){this.heldItemGroup.visible=!1;return}const s=e.color||13421772,r=new re({color:s}),a=new re({color:9136958});if(n===ae.SWORD){const o=new at(new bt(.06,.55,.12),r);o.position.y=-.1,this.heldItemGroup.add(o);const l=new at(new bt(.06,.2,.06),a);l.position.y=.28,this.heldItemGroup.add(l);const c=new re({color:5592405}),h=new at(new bt(.04,.04,.2),c);h.position.y=.16,this.heldItemGroup.add(h)}else if(n===ae.PICKAXE){const o=new at(new bt(.06,.6,.06),a);this.heldItemGroup.add(o);const l=new at(new bt(.3,.08,.08),r);l.position.y=-.28,this.heldItemGroup.add(l)}else if(n===ae.AXE){const o=new at(new bt(.06,.6,.06),a);this.heldItemGroup.add(o);const l=new at(new bt(.2,.22,.08),r);l.position.set(.08,-.25,0),this.heldItemGroup.add(l)}else if(n===ae.SHOVEL){const o=new at(new bt(.06,.6,.06),a);this.heldItemGroup.add(o);const l=new at(new bt(.14,.18,.06),r);l.position.y=-.28,this.heldItemGroup.add(l)}else if(n===ae.BOW){const o=new at(new bt(.04,.6,.04),a);this.heldItemGroup.add(o);const l=new mn({color:14540253}),c=new at(new bt(.02,.5,.02),l);c.position.z=.08,this.heldItemGroup.add(c)}else{const o=new at(new bt(.1,.4,.1),r);this.heldItemGroup.add(o)}this.heldItemGroup.visible=!0}dispose(){}}const Vs=new I,Ws=new I,Be=new I,oc=new us(0,0,0,"YXZ"),Ye=new I,Xr=new I,ac=new I,Kn=new I,qr=new I,Hm=new I,cc=4,zm=1.8,Gm=1.3,il={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",sprint:"ShiftLeft",lookUp:null,lookDown:null,lookLeft:null,lookRight:null,useMouse:!0},Vm={forward:"ArrowUp",back:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",jump:"Numpad0",sprint:"ShiftRight",lookUp:"KeyI",lookDown:"KeyK",lookLeft:"KeyJ",lookRight:"KeyL",useMouse:!1};class lc{constructor(t,e,n=il,s=0){this.camera=t,this.world=e,this.keyBindings=n,this.playerIndex=s,this.position=new I(0,60,0),this.velocity=new I(0,0,0),this.pitch=0,this.yaw=0,this.facingYaw=0,this.thirdPerson=!0,this.onGround=!1,this.health=20,this.maxHealth=20,this.inWater=!1,this.feetInWater=!1,this.headUnderwater=!1,this.sprinting=!1,this.hunger=20,this.maxHunger=20,this.hungerTimer=0,this.starvationTimer=0,this.regenTimer=0,this.armorSlots=[null,null,null,null],this.creativeMode=!1,this.flying=!1,this._lastJumpTime=0,this._jumpReleased=!0,this._stepTimer=0,this._waterOverlay=document.getElementById(s===0?"water-overlay":"water-overlay-p2"),this.fallStartY=0,this.wasFalling=!1,this.keys={},this.mouseLocked=!1,this.highlightMesh=this._createHighlight(),this.characterModel=new km(s),this.gamepadIndex=null,this.gamepadDeadzone=.15,this.gamepadLookSpeed=3,this.gamepadPrevButtons=[],this.coopMode=!1,this._setupInput()}_createHighlight(){const t=new bt(1.005,1.005,1.005),e=new Em(t),n=new Jc({color:0,linewidth:2}),s=new xm(e,n);return s.visible=!1,s}_setupInput(){document.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="KeyV"&&this.keyBindings.useMouse&&(this.thirdPerson=!this.thirdPerson)}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),this.keyBindings.useMouse&&document.addEventListener("mousemove",t=>{if(!this.mouseLocked)return;const e=.002;this.yaw-=t.movementX*e,this.pitch-=t.movementY*e,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch))})}spawn(t){this.position.set(t.x,t.y,t.z),this.velocity.set(0,0,0),this.health=this.maxHealth,this.fallStartY=t.y}update(t){t>.1&&(t=.1);const e=this.keyBindings;e.useMouse||(e.lookLeft&&this.keys[e.lookLeft]&&(this.yaw+=2.5*t),e.lookRight&&this.keys[e.lookRight]&&(this.yaw-=2.5*t),e.lookUp&&this.keys[e.lookUp]&&(this.pitch+=2.5*t,this.pitch=Math.min(Math.PI/2-.01,this.pitch)),e.lookDown&&this.keys[e.lookDown]&&(this.pitch-=2.5*t,this.pitch=Math.max(-Math.PI/2+.01,this.pitch))),this._pollGamepad(t),Vs.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),Ws.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.sprinting=(!!this.keys[e.sprint]||!!this.keys._gp_sprint)&&this.hunger>=6;const n=Tm*(this.sprinting?Am:1);this.hungerTimer+=t;const s=this.sprinting?15:30;if(this.hungerTimer>=s&&(this.hungerTimer=0,this.hunger=Math.max(0,this.hunger-1)),this.hunger<=0&&(this.starvationTimer+=t,this.starvationTimer>=2&&(this.starvationTimer=0,this.takeDamage(1))),this.hunger>=18&&this.health<this.maxHealth?(this.regenTimer+=t,this.regenTimer>=3&&(this.regenTimer=0,this.heal(1))):this.regenTimer=0,Be.set(0,0,0),(this.keys[e.forward]||this.keys._gp_forward)&&Be.add(Vs),(this.keys[e.back]||this.keys._gp_back)&&Be.sub(Vs),(this.keys[e.left]||this.keys._gp_left)&&Be.sub(Ws),(this.keys[e.right]||this.keys._gp_right)&&Be.add(Ws),Be.lengthSq()>.01&&this.thirdPerson){let _=Math.atan2(-Be.x,-Be.z)-this.facingYaw;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;this.facingYaw+=_*Math.min(1,t*12)}else this.thirdPerson||(this.facingYaw=this.yaw);const r=Math.floor(this.position.x),a=Math.floor(this.position.z),o=this.world.getBlock(r,Math.floor(this.position.y),a),l=this.world.getBlock(r,Math.floor(this.position.y+ts*.5),a),c=this.world.getBlock(r,Math.floor(this.position.y+ts*.8),a);this.feetInWater=o===x.WATER,this.headUnderwater=c===x.WATER,this.inWater=this.feetInWater||l===x.WATER||this.headUnderwater,this._waterOverlay&&(this._waterOverlay.style.display=this.headUnderwater?"block":"none");const h=this.inWater?.55:1;Be.lengthSq()>0&&Be.normalize().multiplyScalar(n*h);const u=!!(this.keys[e.jump]||this.keys._gp_jump);if(this.creativeMode&&u&&this._jumpReleased){const p=performance.now();p-this._lastJumpTime<300?(this.flying=!this.flying,this.velocity.y=0,this._lastJumpTime=0):this._lastJumpTime=p,this._jumpReleased=!1}if(u||(this._jumpReleased=!0),this.creativeMode||(this.flying=!1),this.flying){this.velocity.x=Be.x,this.velocity.z=Be.z,this.velocity.y=0;const p=10;u&&(this.velocity.y=p),(this.keys[e.sprint]||this.keys._gp_sprint)&&(this.velocity.y=-p),this.wasFalling=!1,this.onGround=!1}else this.inWater?(this.velocity.x=Be.x,this.velocity.z=Be.z,this.velocity.y*=.85,this.velocity.y+=ec*.15*t,(this.keys[e.jump]||this.keys._gp_jump)&&(this.velocity.y=3.5),this.keys[e.sprint]&&(this.velocity.y=-3.5),this.keys[e.forward]&&Math.abs(this.pitch)>.3&&(this.velocity.y+=-Math.sin(this.pitch)*n*h*.5,this.velocity.y=Math.max(-5,Math.min(5,this.velocity.y))),this.wasFalling=!1):(this.velocity.x=Be.x,this.velocity.z=Be.z,this.velocity.y+=ec*t,(this.keys[e.jump]||this.keys._gp_jump)&&this.onGround&&(this.velocity.y=ym,this.onGround=!1));if(!this.inWater&&!this.flying&&!this.onGround&&this.velocity.y<0&&!this.wasFalling&&(this.fallStartY=this.position.y,this.wasFalling=!0),this._moveWithCollision(t),this.onGround&&this.wasFalling){if(!this.inWater){const p=this.fallStartY-this.position.y;if(p>3){const _=Math.floor(p-3);this.takeDamage(_)}}this.wasFalling=!1}const d=Be.lengthSq()>.01;this.characterModel.update(t,this.position,this.facingYaw,this.pitch,d,this.sprinting,this.inWater,this.onGround),this.thirdPerson?this._updateThirdPersonCamera():(this.camera.position.copy(this.position),this.camera.position.y+=ts*.9,oc.set(this.pitch,this.yaw,0),this.camera.quaternion.setFromEuler(oc)),this._updateHighlight()}_moveWithCollision(t){const e=bm/2;Ye.copy(this.position),Ye.x+=this.velocity.x*t,this._collides(Ye.x,this.position.y,this.position.z,e)&&(Ye.x=this.position.x,this.velocity.x=0),Ye.z+=this.velocity.z*t,this._collides(Ye.x,this.position.y,Ye.z,e)&&(Ye.z=this.position.z,this.velocity.z=0),Ye.y+=this.velocity.y*t,this.onGround=!1,this._collides(Ye.x,Ye.y,Ye.z,e)&&(this.velocity.y<0&&(this.onGround=!0),Ye.y=this.position.y,this.velocity.y=0),this.position.copy(Ye)}_collides(t,e,n,s){for(let r=-1;r<=1;r+=2)for(let a=-1;a<=1;a+=2){const o=t+r*s,l=n+a*s;for(let c=0;c<ts;c+=.5){const h=e+c;if(this.world.isSolid(o,h,l))return!0}if(this.world.isSolid(o,e+ts,l))return!0}return!1}_pollGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[];let n=null;if(e[this.playerIndex])n=e[this.playerIndex],this.gamepadIndex=this.playerIndex;else if(this.gamepadIndex!==null&&e[this.gamepadIndex])this.coopMode?this.gamepadIndex=null:n=e[this.gamepadIndex];else if(this.gamepadIndex=null,!this.coopMode&&this.playerIndex===0){for(let d=0;d<e.length;d++)if(e[d]){n=e[d],this.gamepadIndex=d;break}}if(!n){for(const d of Object.keys(this.keys))d.startsWith("_gp_")&&(this.keys[d]=!1);return}const s=this.gamepadDeadzone,r=Math.abs(n.axes[0])>s?n.axes[0]:0,a=Math.abs(n.axes[1])>s?n.axes[1]:0;r!==0||a!==0?(Vs.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),Ws.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.keys._gp_forward=-a>s,this.keys._gp_back=a>s,this.keys._gp_left=-r>s,this.keys._gp_right=r>s):(this.keys._gp_forward=!1,this.keys._gp_back=!1,this.keys._gp_left=!1,this.keys._gp_right=!1);const o=Math.abs(n.axes[2])>s?n.axes[2]:0,l=Math.abs(n.axes[3])>s?n.axes[3]:0;o!==0&&(this.yaw-=o*this.gamepadLookSpeed*t),l!==0&&(this.pitch-=l*this.gamepadLookSpeed*t,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)));const c=n.buttons,h=this.gamepadPrevButtons,u=d=>c[d]&&c[d].pressed&&!(h[d]&&h[d].pressed);this.keys._gp_jump=c[0]&&c[0].pressed,this.keys._gp_sprint=c[4]&&c[4].pressed,this.keys._gp_attack=u(2),this.keys._gp_place=u(3),this.keys._gp_drop=u(1),this.keys._gp_inventory=u(5),this.keys._gp_camera=u(8),this.keys._gp_creative=u(9),this.keys._gp_hotbar_left=u(14),this.keys._gp_hotbar_right=u(15),this.gamepadPrevButtons=c.length?Array.from(c,d=>({pressed:d.pressed})):[]}gpPressed(t){return this.keys[t]?(this.keys[t]=!1,!0):!1}_updateThirdPersonCamera(){Kn.copy(this.position),Kn.y+=Gm;const t=cc*Math.cos(this.pitch*.8),e=zm+cc*Math.sin(-this.pitch*.8)*.7;ac.set(Math.sin(this.yaw)*t,e,Math.cos(this.yaw)*t);const n=Hm.copy(Kn).add(ac);qr.copy(n).sub(Kn).normalize();const s=n.distanceTo(Kn),r=this.world.raycast(Kn,qr,s);if(r.hit){const a=Math.max(.5,r.distance-.3);this.camera.position.copy(Kn).addScaledVector(qr,a)}else this.camera.position.copy(n);this.camera.lookAt(Kn)}_updateHighlight(){Xr.set(0,0,-1),Xr.applyQuaternion(this.camera.quaternion);let t=nc;this.thirdPerson&&(t+=this.camera.position.distanceTo(this.position));const e=this.world.raycast(this.camera.position,Xr,t);if(e.hit){const n=e.blockPos.x+.5,s=e.blockPos.y+.5,r=e.blockPos.z+.5,a=n-this.position.x,o=s-(this.position.y+1.5),l=r-this.position.z;Math.sqrt(a*a+o*o+l*l)<=nc?(this.highlightMesh.visible=!0,this.highlightMesh.position.set(n,s,r),this.targetBlock=e):(this.highlightMesh.visible=!1,this.targetBlock=null)}else this.highlightMesh.visible=!1,this.targetBlock=null}takeDamage(t){if(!this.creativeMode){const e=Um(this.armorSlots);t=Math.max(1,Math.round(t*(1-e)));for(let n=0;n<4;n++)this.armorSlots[n]&&(this.armorSlots[n].durability--,this.armorSlots[n].durability<=0&&(this.armorSlots[n]=null))}this.health=Math.max(0,this.health-t)}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}getDebugInfo(){const t=this.world.generator.getBiome(Math.floor(this.position.x),Math.floor(this.position.z)),e=["Plains","Desert","Forest","Mountains","Tundra","Ocean","Jungle","Savanna","Taiga","Mushroom Island","Birch Forest","Mesa","Frozen Ocean","Swamp"];return{x:this.position.x.toFixed(1),y:this.position.y.toFixed(1),z:this.position.z.toFixed(1),chunks:this.world.chunks.size,biome:e[t]||"Unknown",health:this.health}}}class hc{constructor(t=36){this.size=t,this.hotbarSize=9,this.selectedSlot=0,this.slots=new Array(t).fill(null),this.craftingGrid=new Array(9).fill(null),this.craftingResult=null,this.furnaceInput=null,this.furnaceFuel=null,this.furnaceOutput=null,this.furnaceBurnTime=0,this.furnaceMaxBurnTime=0,this.furnaceSmeltTime=0,this.furnaceSmeltTotal=3}giveStarterKit(){this.addBlock(x.WOOD,8),this.addBlock(x.PLANKS,4),this.addBlock(x.TORCH,4)}_maxStack(t,e){if(e)return 64;const n=xe[t];return n?n.stackSize:64}addBlock(t,e=1){return this._addSlotItem(t,!0,e)}addItem(t,e=1,n=void 0){return t>0?this.addBlock(t,e):this._addSlotItem(t,!1,e,n)}_addSlotItem(t,e,n,s){var a;if(e&&(t===x.AIR||!yn[t])||!e&&!xe[t])return n;const r=this._maxStack(t,e);if(r===1){for(let o=0;o<this.size&&!(n<=0);o++)if(!this.slots[o]){const l=s!==void 0?s:e?void 0:((a=xe[t])==null?void 0:a.durability)||void 0;this.slots[o]={id:t,isBlock:e,count:1,durability:l},n--}return n}for(let o=0;o<this.size&&!(n<=0);o++){const l=this.slots[o];if(l&&l.id===t&&l.isBlock===e){const c=r-l.count,h=Math.min(c,n);l.count+=h,n-=h}}for(let o=0;o<this.size&&!(n<=0);o++)if(!this.slots[o]){const l=Math.min(r,n);this.slots[o]={id:t,isBlock:e,count:l},n-=l}return n}removeFromSlot(t,e=1){const n=this.slots[t];if(!n)return null;const s={id:n.id,isBlock:n.isBlock};return n.count-=e,n.count<=0&&(this.slots[t]=null),s}getHeldSlot(){return this.slots[this.selectedSlot]||null}getHeldItem(){const t=this.slots[this.selectedSlot];return t&&t.isBlock?t.id:x.AIR}useHeldItem(){return this.removeFromSlot(this.selectedSlot,1)}damageHeldTool(){const t=this.slots[this.selectedSlot];!t||t.isBlock||t.durability===void 0||(t.durability--,t.durability<=0&&(this.slots[this.selectedSlot]=null))}selectSlot(t){this.selectedSlot=Math.max(0,Math.min(this.hotbarSize-1,t))}setCraftingSlot(t,e){t<0||t>=9||(this.craftingGrid[t]=e?{id:e.id,isBlock:e.isBlock,count:1}:null,this._checkCrafting())}_checkCrafting(){this.craftingResult=null;for(const t of Rm)if(t.shapeless){if(this._matchShapeless(t)){this.craftingResult={id:t.result,isBlock:t.resultIsBlock!==!1,count:t.count,recipe:t};return}}else if(this._matchShaped(t)){this.craftingResult={id:t.result,isBlock:t.resultIsBlock!==!1,count:t.count,recipe:t};return}}_matchShaped(t){for(let e=0;e<=2;e++)for(let n=0;n<=2;n++)if(this._matchAtOffset(t.pattern,e,n))return!0;return!1}_matchAtOffset(t,e,n){let s=3,r=0,a=3,o=0;for(let h=0;h<3;h++)for(let u=0;u<3;u++)t[h*3+u]!==0&&(s=Math.min(s,h),r=Math.max(r,h),a=Math.min(a,u),o=Math.max(o,u));const l=r-s+1,c=o-a+1;if(e+l>3||n+c>3)return!1;for(let h=0;h<3;h++)for(let u=0;u<3;u++){const d=this.craftingGrid[h*3+u],p=d?d.id:0,_=h-e+s,g=u-n+a;if(_>=s&&_<=r&&g>=a&&g<=o){const m=t[_*3+g];if(p!==m)return!1}else if(p!==0)return!1}return!0}_matchShapeless(t){const e={};for(const a of t.pattern)a!==0&&(e[a]=(e[a]||0)+1);const n={};for(const a of this.craftingGrid)a&&(n[a.id]=(n[a.id]||0)+1);const s=Object.keys(e),r=Object.keys(n);if(s.length!==r.length)return!1;for(const a of s)if(Number(n[a])!==Number(e[a]))return!1;return!0}craft(){if(!this.craftingResult)return null;const t={...this.craftingResult};for(let e=0;e<9;e++)this.craftingGrid[e]=null;return this.craftingResult=null,t.isBlock?this.addBlock(t.id,t.count):this.addItem(t.id,t.count),t}dropHeldItem(){return this.removeFromSlot(this.selectedSlot,1)}updateFurnace(t){if(this.furnaceBurnTime>0&&(this.furnaceBurnTime-=t),this.furnaceBurnTime<=0&&this.furnaceInput&&this.furnaceFuel&&sc.find(n=>n.input===this.furnaceInput.id)){const n=Bm[this.furnaceFuel.id];n&&(this.furnaceBurnTime=n,this.furnaceMaxBurnTime=n,this.furnaceFuel.count--,this.furnaceFuel.count<=0&&(this.furnaceFuel=null))}if(this.furnaceBurnTime>0&&this.furnaceInput){const e=sc.find(n=>n.input===this.furnaceInput.id);if(e&&(this.furnaceSmeltTime+=t,this.furnaceSmeltTime>=this.furnaceSmeltTotal)){this.furnaceSmeltTime=0;const n=e.result,s=e.resultIsBlock!==!1;if(!this.furnaceOutput)this.furnaceOutput={id:n,isBlock:s,count:1};else if(this.furnaceOutput.id===n&&this.furnaceOutput.count<64)this.furnaceOutput.count++;else return;this.furnaceInput.count--,this.furnaceInput.count<=0&&(this.furnaceInput=null)}}else this.furnaceSmeltTime=0}takeFurnaceOutput(){if(!this.furnaceOutput)return null;const t=this.furnaceOutput;return this.furnaceOutput=null,t.isBlock?this.addBlock(t.id,t.count):this.addItem(t.id,t.count),t}setFurnaceInput(t){this.furnaceInput=t?{id:t.id,isBlock:t.isBlock,count:t.count||1}:null}setFurnaceFuel(t){this.furnaceFuel=t?{id:t.id,isBlock:t.isBlock,count:t.count||1}:null}equipArmor(t,e){const n=this.slots[t];if(!n||n.isBlock)return!1;const s=xe[n.id];if(!s||s.armorSlot===void 0)return!1;const r=s.armorSlot,a=e[r];return e[r]={id:n.id,durability:n.durability||s.durability},this.slots[t]=null,a&&this.addItem(a.id,1,a.durability),!0}}class uc{constructor(t,e=""){this.inventory=t,this.inventoryOpen=!1,this.furnaceOpen=!1,this.creativeOpen=!1,this.debugVisible=!0,this.prefix=e;const n=e?e+"-":"";this.hotbarEl=document.getElementById(n+"hotbar"),this.healthBarEl=document.getElementById(n+"health-bar"),this.hungerBarEl=document.getElementById(n+"hunger-bar"),this.debugEl=document.getElementById(n+"debug-info"),this.crosshairEl=document.getElementById(n+"crosshair"),this.inventoryScreen=document.getElementById(n+"inventory-screen"),this.inventoryGrid=document.getElementById(n+"inventory-grid"),this.craftingGrid=document.getElementById(n+"crafting-grid"),this.craftingOutput=document.getElementById(n+"crafting-output"),this.timeDisplay=document.getElementById(n+"time-display"),this.furnaceScreen=document.getElementById(n+"furnace-screen"),this.armorSlotsEl=document.getElementById(n+"armor-slots"),this.minimapEl=document.getElementById(n+"minimap"),this._buildHotbar(),this._buildHealthBar(),this._buildHungerBar(),this.inventoryGrid&&this._buildInventoryGrid(),this.craftingGrid&&this._buildCraftingGrid()}show(){this.hotbarEl&&this.hotbarEl.classList.add("active"),this.healthBarEl&&this.healthBarEl.classList.add("active"),this.hungerBarEl&&this.hungerBarEl.classList.add("active"),this.crosshairEl&&(this.prefix?this.crosshairEl.classList.add("active"):this.crosshairEl.style.display="block"),this.timeDisplay&&this.timeDisplay.classList.add("active"),this.debugVisible&&this.debugEl&&this.debugEl.classList.add("active")}updateTimeDisplay(t){if(!this.timeDisplay)return;const e=t.getTimeString(),n=t.isNight?"🌙":t.isDawn||t.isDusk?"🌅":"☀️";this.timeDisplay.innerHTML=`${n} Day ${t.dayCount} - ${e}`}_createSlotIcon(t){const e=document.createElement("div");if(e.className="block-icon",!t)return e;if(t.isBlock){const n=yn[t.id];if(n){const s=n.topColor||n.color;e.style.background=`#${s.toString(16).padStart(6,"0")}`}}else{const n=xe[t.id];n&&(e.style.background=`#${n.color.toString(16).padStart(6,"0")}30`,e.style.border=`1px solid #${n.color.toString(16).padStart(6,"0")}`,e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.fontSize="16px",e.textContent=n.icon||"?")}return e}_getSlotName(t){if(!t)return"";if(t.isBlock){const n=yn[t.id];return n?n.name:""}const e=xe[t.id];return e?e.name:""}_buildHotbar(){if(this.hotbarEl){this.hotbarEl.innerHTML="";for(let t=0;t<this.inventory.hotbarSize;t++){const e=document.createElement("div");e.className="hotbar-slot",e.dataset.index=t;const n=document.createElement("span");n.className="slot-number",n.textContent=t+1,e.appendChild(n),this.hotbarEl.appendChild(e)}}}_buildHealthBar(){if(this.healthBarEl){this.healthBarEl.innerHTML="";for(let t=0;t<10;t++){const e=document.createElement("span");e.className="heart",e.textContent="❤",this.healthBarEl.appendChild(e)}}}_buildHungerBar(){if(this.hungerBarEl){this.hungerBarEl.innerHTML="";for(let t=0;t<10;t++){const e=document.createElement("span");e.className="hunger-icon",e.textContent="🍗",this.hungerBarEl.appendChild(e)}}}_buildInventoryGrid(){this.inventoryGrid.innerHTML="";for(let t=0;t<this.inventory.size;t++){const e=document.createElement("div");e.className="inv-slot",e.dataset.index=t,e.addEventListener("click",()=>this._onInventorySlotClick(t)),this.inventoryGrid.appendChild(e)}}_buildCraftingGrid(){this.craftingGrid.innerHTML="";for(let t=0;t<9;t++){const e=document.createElement("div");e.className="inv-slot",e.dataset.craftIndex=t,e.addEventListener("click",()=>this._onCraftingSlotClick(t)),this.craftingGrid.appendChild(e)}this.craftingOutput.addEventListener("click",()=>this._onCraftOutputClick())}_onInventorySlotClick(t){const e=this.inventory.slots[t];if(e){for(let n=0;n<9;n++)if(!this.inventory.craftingGrid[n]){this.inventory.setCraftingSlot(n,e),this.inventory.removeFromSlot(t,1),this.updateAll();return}}}_onCraftingSlotClick(t){const e=this.inventory.craftingGrid[t];e&&(e.isBlock?this.inventory.addBlock(e.id,1):this.inventory.addItem(e.id,1),this.inventory.setCraftingSlot(t,null),this.updateAll())}_onCraftOutputClick(){this.inventory.craftingResult&&(this.inventory.craft(),this.updateAll())}toggleInventory(){if(!this.inventoryScreen)return!1;if(this.inventoryOpen=!this.inventoryOpen,this.inventoryOpen)this.inventoryScreen.classList.remove("hidden"),this.updateAll();else{this.inventoryScreen.classList.add("hidden");for(let t=0;t<9;t++){const e=this.inventory.craftingGrid[t];e&&(e.isBlock?this.inventory.addBlock(e.id,1):this.inventory.addItem(e.id,1),this.inventory.setCraftingSlot(t,null))}}return this.inventoryOpen}toggleDebug(){this.debugVisible=!this.debugVisible,this.debugEl&&this.debugEl.classList.toggle("active",this.debugVisible)}toggleFurnace(){return this.furnaceScreen?(this.furnaceOpen=!this.furnaceOpen,this.furnaceOpen?(this.furnaceScreen.classList.remove("hidden"),this.updateFurnaceUI()):(this.furnaceScreen.classList.add("hidden"),this.inventory.furnaceInput&&(this.inventory.furnaceInput.isBlock?this.inventory.addBlock(this.inventory.furnaceInput.id,this.inventory.furnaceInput.count):this.inventory.addItem(this.inventory.furnaceInput.id,this.inventory.furnaceInput.count),this.inventory.furnaceInput=null),this.inventory.furnaceFuel&&(this.inventory.furnaceFuel.isBlock?this.inventory.addBlock(this.inventory.furnaceFuel.id,this.inventory.furnaceFuel.count):this.inventory.addItem(this.inventory.furnaceFuel.id,this.inventory.furnaceFuel.count),this.inventory.furnaceFuel=null)),this.furnaceOpen):!1}updateFurnaceUI(){if(!this.furnaceScreen)return;const t=this.furnaceScreen.querySelector(".furnace-input"),e=this.furnaceScreen.querySelector(".furnace-fuel"),n=this.furnaceScreen.querySelector(".furnace-output"),s=this.furnaceScreen.querySelector(".furnace-progress"),r=this.furnaceScreen.querySelector(".furnace-fire");if(t&&(t.innerHTML="",this.inventory.furnaceInput)){const a=this._createSlotIcon(this.inventory.furnaceInput);if(t.appendChild(a),this.inventory.furnaceInput.count>1){const o=document.createElement("span");o.className="slot-count",o.textContent=this.inventory.furnaceInput.count,t.appendChild(o)}}if(e&&(e.innerHTML="",this.inventory.furnaceFuel)){const a=this._createSlotIcon(this.inventory.furnaceFuel);if(e.appendChild(a),this.inventory.furnaceFuel.count>1){const o=document.createElement("span");o.className="slot-count",o.textContent=this.inventory.furnaceFuel.count,e.appendChild(o)}}if(n&&(n.innerHTML="",this.inventory.furnaceOutput)){const a=this._createSlotIcon(this.inventory.furnaceOutput);if(n.appendChild(a),this.inventory.furnaceOutput.count>1){const o=document.createElement("span");o.className="slot-count",o.textContent=this.inventory.furnaceOutput.count,n.appendChild(o)}}if(s){const a=this.inventory.furnaceSmeltTotal>0?this.inventory.furnaceSmeltTime/this.inventory.furnaceSmeltTotal*100:0;s.style.width=`${a}%`}if(r){const a=this.inventory.furnaceMaxBurnTime>0?this.inventory.furnaceBurnTime/this.inventory.furnaceMaxBurnTime*100:0;r.style.opacity=a>0?"1":"0.3"}}updateArmorSlots(t){if(!this.armorSlotsEl)return;const e=["Helmet","Chestplate","Leggings","Boots"];this.armorSlotsEl.innerHTML="";for(let n=0;n<4;n++){const s=document.createElement("div");if(s.className="armor-slot",s.title=e[n],t[n]){const r=xe[t[n].id];r&&(s.textContent=r.icon||"?",s.style.background=`#${r.color.toString(16).padStart(6,"0")}30`)}else s.textContent=["🪖","🦺","👖","👢"][n],s.style.opacity="0.3";this.armorSlotsEl.appendChild(s)}}updateMinimap(t,e){if(!this.minimapEl)return;const n=this.minimapEl.querySelector("canvas");if(!n)return;const s=n.getContext("2d"),r=n.width,a=Math.floor(r/2),o=Math.floor(t.x),l=Math.floor(t.z);for(let c=-a;c<a;c++)for(let h=-a;h<a;h++){const u=o+c*2,d=l+h*2,p=e.getBiome(u,d),g=[8308816,12759680,2263842,8421504,14474460,4286945,25600,10145074,3100463,9109504,9498256,13468991,8900331,5597999][p]||8421504,m=g>>16&255,f=g>>8&255,T=g&255;s.fillStyle=`rgb(${m},${f},${T})`,s.fillRect(a+c,a+h,1,1)}s.fillStyle="#ff0000",s.fillRect(a-1,a-1,3,3)}updateHotbar(){if(!this.hotbarEl)return;const t=this.hotbarEl.children;for(let e=0;e<this.inventory.hotbarSize;e++){const n=t[e];if(!n)continue;n.className=`hotbar-slot${e===this.inventory.selectedSlot?" selected":""}`;const s=n.querySelector(".block-icon");s&&s.remove();const r=n.querySelector(".slot-count");r&&r.remove();const a=n.querySelector(".durability-bar");a&&a.remove();const o=n.querySelector(".slot-name");o&&o.remove();const l=this.inventory.slots[e];if(l){const c=this._createSlotIcon(l);if(n.appendChild(c),l.count>1){const h=document.createElement("span");h.className="slot-count",h.textContent=l.count,n.appendChild(h)}if(!l.isBlock&&l.durability!==void 0){const h=xe[l.id];if(h&&h.durability){const u=l.durability/h.durability,d=document.createElement("div");d.className="durability-bar";const p=document.createElement("div");p.className="durability-fill",p.style.width=`${u*100}%`,p.style.background=u>.5?"#0f0":u>.25?"#ff0":"#f00",d.appendChild(p),n.appendChild(d)}}if(e===this.inventory.selectedSlot){const h=document.createElement("div");h.className="slot-name",h.textContent=this._getSlotName(l),n.appendChild(h)}}}}updateHealth(t){if(!this.healthBarEl)return;const e=this.healthBarEl.children;for(let n=0;n<10;n++){const s=(n+1)*2;t>=s?(e[n].textContent="❤",e[n].style.color="#e00"):t>=s-1?(e[n].textContent="❤",e[n].style.color="#a00"):(e[n].textContent="❤",e[n].style.color="#444")}}updateHunger(t){if(!this.hungerBarEl)return;const e=this.hungerBarEl.children;for(let n=0;n<10;n++){const s=(n+1)*2;t>=s?e[n].style.opacity="1":t>=s-1?e[n].style.opacity="0.5":e[n].style.opacity="0.2"}}updateDebug(t){!this.debugVisible||!this.debugEl||(this.debugEl.innerHTML=`
      XYZ: ${t.x} / ${t.y} / ${t.z}<br>
      Biome: ${t.biome}<br>
      Chunks: ${t.chunks}<br>
      Health: ${t.health}/20<br>
      Hunger: ${t.hunger}/20<br>
      FPS: ${t.fps||"?"}<br>
      Time: ${t.time||"?"} (${t.period||"?"})<br>
      Day: ${t.day||1}<br>
      Mobs: ${t.mobs||"0"}<br>
      Mode: ${t.mode||"Survival"}
    `)}updateInventoryScreen(){const t=this.inventoryGrid.children;for(let r=0;r<this.inventory.size;r++){const a=t[r],o=a.querySelector(".block-icon");o&&o.remove();const l=a.querySelector(".slot-count");l&&l.remove();const c=this.inventory.slots[r];if(c){const h=this._createSlotIcon(c);if(a.appendChild(h),c.count>1){const u=document.createElement("span");u.className="slot-count",u.textContent=c.count,a.appendChild(u)}}}const e=this.craftingGrid.children;for(let r=0;r<9;r++){const a=e[r],o=a.querySelector(".block-icon");o&&o.remove();const l=this.inventory.craftingGrid[r];if(l){const c=this._createSlotIcon(l);a.appendChild(c)}}const n=this.craftingOutput.querySelector(".block-icon");n&&n.remove();const s=this.craftingOutput.querySelector(".slot-count");if(s&&s.remove(),this.inventory.craftingResult){const r=this._createSlotIcon(this.inventory.craftingResult);if(this.craftingOutput.appendChild(r),this.inventory.craftingResult.count>1){const a=document.createElement("span");a.className="slot-count",a.textContent=this.inventory.craftingResult.count,this.craftingOutput.appendChild(a)}}}updateAll(){this.updateHotbar(),this.inventoryOpen&&this.updateInventoryScreen()}}const Wm=600,Ni=.2,Xs=.3,Bi=.7,qs=.8;class Xm{constructor(t){this.scene=t,this.time=.25,this.dayCount=1,this.weather="clear",this.weatherTimer=0,this.weatherDuration=0,this.nextWeatherCheck=60+Math.random()*120,this._weatherOverlay=document.getElementById("weather-overlay"),this.ambientLight=null,this.sunLight=null,this.hemiLight=null,t.traverse(e=>{e instanceof nl&&(this.ambientLight=e),e instanceof el&&(this.sunLight=e),e instanceof tl&&(this.hemiLight=e)}),this.skyColors={night:new Dt(657946),dawn:new Dt(16742212),day:new Dt(8900331),dusk:new Dt(16733491)},this.fogColors={night:new Dt(526360),dawn:new Dt(13395524),day:new Dt(8900331),dusk:new Dt(13386803)},this.stars=this._createStars(),this.scene.add(this.stars),this._tmpSky=new Dt,this._tmpFog=new Dt}_createStars(){const t=new Je,e=400,n=new Float32Array(e*3);for(let a=0;a<e;a++){const o=Math.random()*Math.PI*2,l=Math.acos(Math.random()*.8+.2),c=180;n[a*3]=c*Math.sin(l)*Math.cos(o),n[a*3+1]=c*Math.cos(l),n[a*3+2]=c*Math.sin(l)*Math.sin(o)}t.setAttribute("position",new Tn(n,3));const s=new Qc({color:16777215,size:1.5,sizeAttenuation:!1}),r=new vm(t,s);return r.visible=!1,r}get isNight(){return this.time<Ni||this.time>qs}get isDawn(){return this.time>=Ni&&this.time<Xs}get isDusk(){return this.time>=Bi&&this.time<=qs}get isDay(){return this.time>=Xs&&this.time<Bi}get sunIntensity(){return this.isDay?1:this.isNight?0:this.isDawn?(this.time-Ni)/(Xs-Ni):1-(this.time-Bi)/(qs-Bi)}update(t){this.time+=t/Wm,this.time>=1&&(this.time-=1,this.dayCount++),this._updateWeather(t);const e=this.sunIntensity;let n,s;if(this.isNight)n=this.skyColors.night,s=this.fogColors.night;else if(this.isDawn){const r=(this.time-Ni)/(Xs-Ni);n=this._tmpSky.copy(this.skyColors.night).lerp(this.skyColors.day,r);const a=Math.sin(r*Math.PI);n.lerp(this.skyColors.dawn,a*.4),s=this._tmpFog.copy(this.fogColors.night).lerp(this.fogColors.day,r),s.lerp(this.fogColors.dawn,a*.3)}else if(this.isDusk){const r=(this.time-Bi)/(qs-Bi);n=this._tmpSky.copy(this.skyColors.day).lerp(this.skyColors.night,r);const a=Math.sin(r*Math.PI);n.lerp(this.skyColors.dusk,a*.4),s=this._tmpFog.copy(this.fogColors.day).lerp(this.fogColors.night,r),s.lerp(this.fogColors.dusk,a*.3)}else n=this.skyColors.day,s=this.fogColors.day;if(this.scene.background=n,this.scene.fog&&this.scene.fog.color.copy(s),this.ambientLight&&(this.ambientLight.intensity=.15+e*.65,this.ambientLight.color.setHex(this.isNight?3162208:8421520)),this.sunLight){this.sunLight.intensity=e*1;const r=(this.time-.25)*Math.PI*2;this.sunLight.position.set(Math.cos(r)*100,Math.sin(r)*200,50),this.isDawn||this.isDusk?this.sunLight.color.setHex(16755302):this.sunLight.color.setHex(16777181)}this.hemiLight&&(this.hemiLight.intensity=.1+e*.3),this.stars.visible=e<.5,this.stars.visible&&(this.stars.material.opacity=1-e*2)}_updateWeather(t){if(this.weatherTimer+=t,this.nextWeatherCheck-=t,this.weather!=="clear"&&(this.weatherDuration-=t,this.weatherDuration<=0&&(this.weather="clear",this._applyWeatherOverlay())),this.nextWeatherCheck<=0&&(this.nextWeatherCheck=60+Math.random()*180,Math.random()<.3&&this.weather==="clear")){const e=["rain","rain","snow","thunder"];this.weather=e[Math.floor(Math.random()*e.length)],this.weatherDuration=30+Math.random()*120,this._applyWeatherOverlay()}(this.weather==="rain"||this.weather==="thunder")&&(this.ambientLight&&(this.ambientLight.intensity*=.85),this.sunLight&&(this.sunLight.intensity*=.6))}_applyWeatherOverlay(){this._weatherOverlay&&(this._weatherOverlay.className="weather-overlay",this.weather==="rain"||this.weather==="thunder"?this._weatherOverlay.classList.add("rain"):this.weather==="snow"&&this._weatherOverlay.classList.add("snow"))}getTimeString(){const t=Math.floor(this.time*24),e=Math.floor((this.time*24-t)*60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}}const je={MONSTER:0,ANIMAL:1},qm=[{name:"Zombie",color:4880954,hp:20,speed:3,damage:3,w:.6,h:1.8,xp:5},{name:"Skeleton",color:13684928,hp:16,speed:3.2,damage:3,w:.5,h:1.8,xp:5},{name:"Spider",color:4862e3,hp:14,speed:4,damage:2,w:.9,h:.6,xp:5},{name:"Creeper",color:3189296,hp:20,speed:2.8,damage:8,w:.5,h:1.5,xp:5},{name:"Enderman",color:1706542,hp:40,speed:4.5,damage:7,w:.5,h:2.8,xp:8},{name:"Witch",color:6961802,hp:22,speed:2.5,damage:4,w:.5,h:1.8,xp:7},{name:"Phantom",color:4482730,hp:16,speed:5,damage:3,w:.8,h:.4,xp:6},{name:"Slime",color:5622869,hp:12,speed:2,damage:2,w:.8,h:.8,xp:3},{name:"Blaze",color:16746496,hp:18,speed:3.5,damage:5,w:.5,h:1.6,xp:8},{name:"Wither Skeleton",color:2763310,hp:24,speed:3,damage:5,w:.6,h:2.2,xp:7},{name:"Wraith",color:8421520,hp:18,speed:4.2,damage:4,w:.5,h:1.8,xp:6},{name:"Goblin",color:6982192,hp:10,speed:4.8,damage:2,w:.4,h:1,xp:3},{name:"Ogre",color:9071162,hp:40,speed:1.8,damage:8,w:1,h:2.5,xp:10},{name:"Dark Knight",color:2105376,hp:30,speed:2.8,damage:6,w:.6,h:1.9,xp:9},{name:"Banshee",color:13684991,hp:14,speed:5.5,damage:3,w:.5,h:1.6,xp:6},{name:"Werewolf",color:5917242,hp:28,speed:5,damage:5,w:.7,h:1.6,xp:8},{name:"Vampire",color:3803658,hp:25,speed:4.5,damage:4,w:.5,h:1.8,xp:7},{name:"Troll",color:5933658,hp:50,speed:1.5,damage:10,w:1.2,h:2.8,xp:12},{name:"Shadow",color:1052704,hp:15,speed:6,damage:3,w:.5,h:1.2,xp:5},{name:"Demon",color:11149344,hp:35,speed:3.5,damage:7,w:.7,h:2,xp:10}],Km=[{name:"Cow",color:9071178,hp:10,speed:1.5,w:.8,h:1.2,xp:1},{name:"Pig",color:15636889,hp:8,speed:1.8,w:.6,h:.8,xp:1},{name:"Sheep",color:14737632,hp:8,speed:1.5,w:.7,h:1,xp:1},{name:"Chicken",color:15790320,hp:4,speed:2,w:.3,h:.5,xp:1},{name:"Horse",color:9067050,hp:20,speed:4,w:.9,h:1.5,xp:2},{name:"Rabbit",color:12624e3,hp:3,speed:3.5,w:.3,h:.3,xp:1},{name:"Fox",color:13395490,hp:8,speed:3,w:.5,h:.6,xp:1},{name:"Deer",color:10123850,hp:12,speed:4.5,w:.7,h:1.4,xp:2}],dc=[{name:"Wither Boss",color:1710618,hp:300,speed:3,damage:12,w:1.5,h:3.5,xp:50,boss:!0},{name:"Dragon",color:2755146,hp:200,speed:5,damage:10,w:2,h:2.5,xp:100,boss:!0},{name:"Elder Guardian",color:5933690,hp:150,speed:2,damage:8,w:1.2,h:1.2,xp:40,boss:!0}],Ym={name:"Villager",color:9071178,hp:20,speed:1,w:.6,h:1.8,xp:0},jm=40,fc=20,$m=50,Zm=70,Jm=2,Qm=1,t0=.4,e0=4,pc=4,n0=8,Ie=new I,Yn=new I,i0=new I,Kr=new Map,Yr=new Map;function pe(i,t){return Kr.has(i)||Kr.set(i,t()),Kr.get(i)}function me(i,t){return Yr.has(i)||Yr.set(i,t()),Yr.get(i)}function Y(i,t,e,n,s){const r=pe(i,()=>new bt(t,e,n)),a=me(i,()=>new re({color:s}));return new at(r,a)}function ie(i,t,e,n,s,r){const a=pe(`meye${s}`,()=>new bt(s,s,s*.5)),o=me(`meye${r}`,()=>new mn({color:r}));i.add(new at(a,o).translateX(-t).translateY(e).translateZ(n)),i.add(new at(a,o).translateX(t).translateY(e).translateZ(n))}function Rn(i,t,e,n,s,r,a,o){const l=pe(`mleg${n}${e}`,()=>new bt(n,e,n)),c=me(`mleg${o}`,()=>new re({color:o})),h=t*.3;for(const[u,d]of[[-h,s],[h,s],[-h,r],[h,r]])i.add(new at(l,c).translateX(u).translateY(a).translateZ(d))}function Qe(i,t,e,n,s,r){const a=pe(`mleg2_${n}${e}`,()=>new bt(n,e,n)),o=me(`mleg2_${r}`,()=>new re({color:r}));i.add(new at(a,o).translateX(-t).translateY(s)),i.add(new at(a,o).translateX(t).translateY(s))}function Cn(i,t,e,n,s,r){const a=pe(`marm_${n}${e}`,()=>new bt(n,e,n)),o=me(`marm_${r}`,()=>new re({color:r}));i.add(new at(a,o).translateX(-t).translateY(s)),i.add(new at(a,o).translateX(t).translateY(s))}function s0(i,t,e){const{w:n,h:s,color:r}=t,a=Y(`gen_b_${t.name}`,n,s*.6,n*.6,r);a.position.y=s*.3,i.add(a);const o=Math.min(n*.5,.4),l=Y(`gen_h_${t.name}`,o,o,o,r);l.position.y=s*.6+o*.5,i.add(l);const c=e===je.MONSTER?16711680:1118481;ie(i,o*.2,s*.6+o*.55,o*.5,o*.15,c);const h=new Dt(r).multiplyScalar(.7).getHex();e===je.ANIMAL?Rn(i,n,s*.25,n*.15,-n*.15,n*.15,s*.25/2,h):Qe(i,n*.15,s*.25,n*.15,s*.25/2,h)}const se={};se.Cow=i=>{const t=Y("cow_body",.9,.55,.5,7029286);t.position.set(0,.72,0),i.add(t);const e=Y("cow_patch",.4,.3,.52,15788240);e.position.set(.1,.75,0),i.add(e);const n=Y("cow_head",.4,.38,.35,7029286);n.position.set(0,1.05,.35),i.add(n);const s=Y("cow_snout",.25,.15,.1,13934714);s.position.set(0,.95,.55),i.add(s);const r=pe("cow_horn",()=>new bt(.05,.15,.05)),a=me("cow_horn",()=>new re({color:16117980}));i.add(new at(r,a).translateX(-.18).translateY(1.28).translateZ(.35)),i.add(new at(r,a).translateX(.18).translateY(1.28).translateZ(.35)),ie(i,.12,1.08,.53,.04,1118481),Rn(i,.7,.45,.12,.18,-.18,.22,4861462);const o=Y("cow_udder",.2,.1,.15,16758465);o.position.set(0,.42,-.1),i.add(o)};se.Pig=i=>{const t=Y("pig_body",.6,.4,.45,15769760);t.position.set(0,.5,0),i.add(t);const e=Y("pig_head",.35,.3,.3,15769760);e.position.set(0,.7,.3),i.add(e);const n=Y("pig_snout",.18,.12,.08,14708848);n.position.set(0,.63,.46),i.add(n);const s=pe("pig_nos",()=>new bt(.04,.04,.02)),r=me("pig_nos",()=>new mn({color:9125952}));i.add(new at(s,r).translateX(-.04).translateY(.63).translateZ(.51)),i.add(new at(s,r).translateX(.04).translateY(.63).translateZ(.51)),ie(i,.1,.75,.45,.035,1118481),Rn(i,.45,.28,.1,.15,-.15,.14,13664384);const a=Y("pig_tail",.06,.06,.12,15769760);a.position.set(0,.6,-.28),i.add(a)};se.Sheep=i=>{const t=Y("sheep_wool",.75,.5,.55,15263976);t.position.set(0,.65,0),i.add(t);const e=Y("sheep_head",.3,.28,.25,12628128);e.position.set(0,.85,.35),i.add(e),ie(i,.09,.88,.48,.035,1118481);const n=pe("sheep_ear",()=>new bt(.12,.06,.04)),s=me("sheep_ear",()=>new re({color:12628128}));i.add(new at(n,s).translateX(-.2).translateY(.88).translateZ(.32)),i.add(new at(n,s).translateX(.2).translateY(.88).translateZ(.32)),Rn(i,.55,.38,.1,.18,-.18,.19,9075306)};se.Chicken=i=>{const t=Y("chk_body",.25,.22,.3,16119280);t.position.set(0,.28,0),i.add(t);const e=Y("chk_head",.15,.15,.12,16119280);e.position.set(0,.48,.12),i.add(e);const n=Y("chk_comb",.06,.08,.06,14492194);n.position.set(0,.58,.14),i.add(n);const s=Y("chk_beak",.06,.04,.08,16755200);s.position.set(0,.45,.2),i.add(s);const r=Y("chk_wat",.04,.06,.03,14492194);r.position.set(0,.4,.18),i.add(r),ie(i,.06,.5,.18,.025,1118481),Qe(i,.06,.16,.04,.08,14526976);const a=Y("chk_tail",.08,.12,.06,13684928);a.position.set(0,.38,-.18),a.rotation.x=-.4,i.add(a)};se.Horse=i=>{const t=Y("hrs_body",.7,.55,.9,9067050);t.position.set(0,.9,0),i.add(t);const e=Y("hrs_head",.25,.4,.25,9067050);e.position.set(0,1.25,.5),i.add(e);const n=Y("hrs_muz",.2,.15,.12,10514496);n.position.set(0,1.1,.6),i.add(n);const s=Y("hrs_mane",.08,.35,.5,3811856);s.position.set(0,1.35,.15),i.add(s),ie(i,.1,1.3,.63,.04,1118481);const r=pe("hrs_ear",()=>new bt(.06,.12,.04)),a=me("hrs_ear",()=>new re({color:9067050}));i.add(new at(r,a).translateX(-.08).translateY(1.5).translateZ(.48)),i.add(new at(r,a).translateX(.08).translateY(1.5).translateZ(.48)),Rn(i,.5,.6,.1,.3,-.3,.3,6963232);const o=Y("hrs_tail",.06,.4,.06,3811856);o.position.set(0,.7,-.48),i.add(o)};se.Rabbit=i=>{const t=Y("rab_body",.2,.15,.25,12624e3);t.position.set(0,.18,0),i.add(t);const e=Y("rab_head",.16,.14,.14,12624e3);e.position.set(0,.3,.12),i.add(e);const n=pe("rab_ear",()=>new bt(.04,.16,.03)),s=me("rab_ear",()=>new re({color:12624e3}));me("rab_eari",()=>new re({color:15644856})),i.add(new at(n,s).translateX(-.05).translateY(.45).translateZ(.12)),i.add(new at(n,s).translateX(.05).translateY(.45).translateZ(.12)),ie(i,.05,.33,.19,.025,1118481);const r=Y("rab_tail",.08,.08,.08,15788256);r.position.set(0,.2,-.14),i.add(r),Rn(i,.14,.1,.05,.08,-.08,.05,10518624)};se.Fox=i=>{const t=Y("fox_body",.4,.28,.55,13395490);t.position.set(0,.38,0),i.add(t);const e=Y("fox_chest",.25,.2,.15,16115920);e.position.set(0,.35,.2),i.add(e);const n=Y("fox_head",.25,.2,.22,13395490);n.position.set(0,.55,.3),i.add(n);const s=Y("fox_snout",.12,.1,.12,2236962);s.position.set(0,.5,.44),i.add(s);const r=pe("fox_ear",()=>new bt(.06,.1,.04)),a=me("fox_ear",()=>new re({color:13395490}));i.add(new at(r,a).translateX(-.08).translateY(.68).translateZ(.28)),i.add(new at(r,a).translateX(.08).translateY(.68).translateZ(.28)),ie(i,.07,.57,.42,.03,3385907),Rn(i,.3,.22,.06,.18,-.18,.11,2236962);const o=Y("fox_tail",.12,.12,.3,13395490);o.position.set(0,.4,-.38),i.add(o);const l=Y("fox_tailtip",.1,.1,.08,16119280);l.position.set(0,.4,-.52),i.add(l)};se.Deer=i=>{const t=Y("deer_body",.6,.45,.7,10123850);t.position.set(0,.85,0),i.add(t);const e=Y("deer_belly",.45,.15,.6,15260872);e.position.set(0,.68,0),i.add(e);const n=Y("deer_head",.22,.25,.2,10123850);n.position.set(0,1.2,.4),i.add(n);const s=Y("deer_nose",.14,.1,.08,5914656);s.position.set(0,1.12,.52),i.add(s);const r=pe("deer_antler",()=>new bt(.03,.25,.03)),a=me("deer_antler",()=>new re({color:9072720}));i.add(new at(r,a).translateX(-.1).translateY(1.45).translateZ(.38)),i.add(new at(r,a).translateX(.1).translateY(1.45).translateZ(.38));const o=pe("deer_abranch",()=>new bt(.1,.03,.03));i.add(new at(o,a).translateX(-.14).translateY(1.5).translateZ(.38)),i.add(new at(o,a).translateX(.14).translateY(1.5).translateZ(.38)),ie(i,.08,1.23,.5,.03,1118481),Rn(i,.4,.6,.08,.25,-.25,.3,8018480);const l=Y("deer_tail",.08,.06,.1,16117984);l.position.set(0,1,-.38),i.add(l)};se.Zombie=i=>{const t=Y("zom_torso",.5,.6,.28,3828282);t.position.set(0,1,0),i.add(t);const e=Y("zom_shirt",.52,.3,.29,2771562);e.position.set(0,1.1,0),i.add(e);const n=Y("zom_head",.4,.4,.4,4880954);n.position.set(0,1.5,0),i.add(n),ie(i,.1,1.55,.21,.06,1118481),Cn(i,.35,.55,.16,1,4880954),Qe(i,.13,.55,.18,.28,2763322)};se.Skeleton=i=>{const t=Y("skel_torso",.35,.55,.2,13684928);t.position.set(0,1,0),i.add(t);const e=Y("skel_rib",.36,.04,.21,10526864);e.position.set(0,1.05,0),i.add(e);const n=Y("skel_rib2",.36,.04,.21,10526864);n.position.set(0,.9,0),i.add(n);const s=Y("skel_head",.35,.35,.35,13684928);s.position.set(0,1.48,0),i.add(s),ie(i,.08,1.52,.18,.06,1118481),Cn(i,.28,.5,.1,1,12632240),Qe(i,.1,.55,.1,.28,12632240)};se.Spider=i=>{const t=Y("spi_body",.7,.3,.5,4862e3);t.position.set(0,.3,0),i.add(t);const e=Y("spi_head",.35,.25,.3,3809312);e.position.set(0,.35,.35),i.add(e),ie(i,.08,.4,.5,.05,16711680),ie(i,.04,.35,.5,.04,16711680);const n=pe("spi_leg",()=>new bt(.5,.06,.06)),s=me("spi_leg",()=>new re({color:3809312}));for(let r=0;r<4;r++){const a=-.15+r*.1,o=new at(n,s);o.position.set(-.5,.2,a),o.rotation.z=.4,i.add(o);const l=new at(n,s);l.position.set(.5,.2,a),l.rotation.z=-.4,i.add(l)}};se.Creeper=i=>{const t=Y("crp_body",.4,.8,.3,3189296);t.position.set(0,.7,0),i.add(t);const e=Y("crp_head",.42,.42,.42,3189296);e.position.set(0,1.32,0),i.add(e),ie(i,.08,1.38,.22,.07,1118481);const n=Y("crp_mouth",.1,.12,.02,1118481);n.position.set(0,1.22,.21),i.add(n),Rn(i,.3,.3,.12,.1,-.1,.15,2132e3)};se.Enderman=i=>{const t=Y("end_body",.35,1,.2,1706542);t.position.set(0,1.4,0),i.add(t);const e=Y("end_head",.4,.35,.4,1706542);e.position.set(0,2.3,0),i.add(e),ie(i,.1,2.32,.21,.08,13387007),Cn(i,.28,.9,.1,1.3,1706542),Qe(i,.1,.8,.1,.4,1706542)};se.Witch=i=>{const t=Y("wit_body",.45,.7,.3,6961802);t.position.set(0,.9,0),i.add(t);const e=Y("wit_head",.35,.35,.35,13935988);e.position.set(0,1.45,0),i.add(e);const n=Y("wit_hat",.4,.08,.4,2236962);n.position.set(0,1.66,0),i.add(n);const s=Y("wit_hattop",.2,.25,.2,2236962);s.position.set(0,1.78,0),i.add(s);const r=Y("wit_nose",.08,.1,.1,13935988);r.position.set(0,1.4,.2),i.add(r),ie(i,.08,1.48,.18,.05,4521796),Qe(i,.12,.5,.15,.25,4860506)};se.Phantom=i=>{const t=Y("pha_body",.3,.15,.6,4482730);t.position.set(0,.2,0),i.add(t);const e=pe("pha_wing",()=>new bt(.6,.04,.35)),n=me("pha_wing",()=>new re({color:3364266,transparent:!0,opacity:.8}));i.add(new at(e,n).translateX(-.4).translateY(.22)),i.add(new at(e,n).translateX(.4).translateY(.22)),ie(i,.06,.24,.3,.04,4521796)};se.Slime=i=>{const t=Y("slm_body",.7,.7,.7,5622869);t.position.set(0,.35,0),t.material.transparent=!0,t.material.opacity=.7,i.add(t);const e=Y("slm_core",.3,.3,.3,3377203);e.position.set(0,.3,0),i.add(e),ie(i,.12,.45,.36,.08,1118481);const n=Y("slm_mouth",.2,.06,.02,1118481);n.position.set(0,.3,.36),i.add(n)};se.Blaze=i=>{const t=Y("blz_head",.4,.4,.4,16746496);t.position.set(0,1.2,0),i.add(t),ie(i,.1,1.25,.21,.06,16776960);const e=pe("blz_rod",()=>new bt(.08,.4,.08)),n=me("blz_rod",()=>new re({color:16755200}));for(let r=0;r<4;r++){const a=r/4*Math.PI*2,o=new at(e,n);o.position.set(Math.cos(a)*.3,.8+r%2*.3,Math.sin(a)*.3),i.add(o)}const s=Y("blz_smoke",.25,.5,.25,13395456);s.position.set(0,.8,0),s.material.transparent=!0,s.material.opacity=.5,i.add(s)};se["Wither Skeleton"]=i=>{const t=Y("wskel_torso",.4,.7,.22,2763310);t.position.set(0,1.2,0),i.add(t);const e=Y("wskel_head",.38,.38,.38,2763310);e.position.set(0,1.75,0),i.add(e),ie(i,.09,1.78,.2,.06,16729156),Cn(i,.32,.6,.12,1.2,2763310),Qe(i,.12,.7,.12,.35,1710622);const n=Y("wskel_sword",.06,.6,.06,5592405);n.position.set(.4,1,.15),i.add(n)};se.Wraith=i=>{const t=Y("wra_body",.4,.9,.25,8421520);t.position.set(0,.9,0),t.material.transparent=!0,t.material.opacity=.6,i.add(t);const e=Y("wra_head",.35,.35,.35,10526896);e.position.set(0,1.55,0),e.material.transparent=!0,e.material.opacity=.7,i.add(e),ie(i,.08,1.58,.18,.06,6750207)};se.Goblin=i=>{const t=Y("gob_body",.3,.35,.2,6982192);t.position.set(0,.5,0),i.add(t);const e=Y("gob_head",.28,.25,.25,8034880);e.position.set(0,.8,0),i.add(e);const n=pe("gob_ear",()=>new bt(.15,.06,.04)),s=me("gob_ear",()=>new re({color:8034880}));i.add(new at(n,s).translateX(-.2).translateY(.82)),i.add(new at(n,s).translateX(.2).translateY(.82));const r=Y("gob_nose",.08,.08,.06,9087568);r.position.set(0,.76,.14),i.add(r),ie(i,.07,.83,.13,.04,16729156),Qe(i,.08,.3,.1,.15,5929504)};se.Ogre=i=>{const t=Y("ogr_body",.9,1,.6,9071162);t.position.set(0,1.2,0),i.add(t);const e=Y("ogr_head",.55,.5,.5,9071162);e.position.set(0,2,0),i.add(e);const n=Y("ogr_jaw",.45,.15,.2,8018474);n.position.set(0,1.78,.2),i.add(n),ie(i,.12,2.05,.26,.08,16755200),Cn(i,.6,.8,.2,1.3,8018474),Qe(i,.2,.6,.22,.3,6965802)};se["Dark Knight"]=i=>{const t=Y("dk_body",.5,.65,.3,2105376);t.position.set(0,1,0),i.add(t);const e=Y("dk_head",.38,.38,.38,3158064);e.position.set(0,1.5,0),i.add(e);const n=Y("dk_visor",.3,.08,.04,1118481);n.position.set(0,1.5,.2),i.add(n),ie(i,.08,1.53,.2,.04,16711680),Cn(i,.35,.55,.15,1,2434341),Qe(i,.13,.55,.16,.28,1710618);const s=Y("dk_sword",.05,.7,.05,8947848);s.position.set(.42,1,.1),i.add(s);const r=Y("dk_shield",.04,.4,.3,3355443);r.position.set(-.4,1,.05),i.add(r)};se.Banshee=i=>{const t=Y("ban_body",.4,.8,.25,13684991);t.position.set(0,.8,0),t.material.transparent=!0,t.material.opacity=.5,i.add(t);const e=Y("ban_head",.35,.35,.32,14737663);e.position.set(0,1.38,0),e.material.transparent=!0,e.material.opacity=.6,i.add(e);const n=Y("ban_hair",.38,.3,.34,11184844);n.position.set(0,1.35,-.05),n.material.transparent=!0,n.material.opacity=.4,i.add(n),ie(i,.08,1.42,.17,.06,8947967);const s=Y("ban_mouth",.12,.1,.02,1118481);s.position.set(0,1.28,.17),i.add(s)};se.Werewolf=i=>{const t=Y("ww_body",.55,.65,.35,5917242);t.position.set(0,.9,0),i.add(t);const e=Y("ww_head",.38,.32,.35,5917242);e.position.set(0,1.35,.05),i.add(e);const n=Y("ww_snout",.18,.14,.18,4864554);n.position.set(0,1.28,.22),i.add(n);const s=pe("ww_ear",()=>new bt(.06,.12,.04)),r=me("ww_ear",()=>new re({color:5917242}));i.add(new at(s,r).translateX(-.14).translateY(1.55).translateZ(.05)),i.add(new at(s,r).translateX(.14).translateY(1.55).translateZ(.05)),ie(i,.1,1.38,.23,.05,16755200),Cn(i,.38,.55,.16,.9,5917242),Qe(i,.14,.5,.16,.25,4864554);const a=Y("ww_tail",.08,.08,.25,5917242);a.position.set(0,.8,-.25),i.add(a)};se.Vampire=i=>{const t=Y("vam_body",.45,.65,.28,1710618);t.position.set(0,.95,0),i.add(t);const e=Y("vam_cape",.55,.7,.05,9046538);e.position.set(0,.95,-.15),i.add(e);const n=Y("vam_head",.35,.35,.35,13676704);n.position.set(0,1.5,0),i.add(n);const s=Y("vam_hair",.36,.15,.36,1706506);s.position.set(0,1.68,-.02),i.add(s),ie(i,.08,1.53,.18,.05,16711680);const r=pe("vam_fang",()=>new bt(.03,.06,.02)),a=me("vam_fang",()=>new mn({color:16777215}));i.add(new at(r,a).translateX(-.05).translateY(1.4).translateZ(.18)),i.add(new at(r,a).translateX(.05).translateY(1.4).translateZ(.18)),Qe(i,.12,.55,.15,.28,1710618)};se.Troll=i=>{const t=Y("trl_body",1,1.2,.7,5933658);t.position.set(0,1.4,0),i.add(t);const e=Y("trl_head",.6,.5,.5,5933658);e.position.set(0,2.3,0),i.add(e);const n=Y("trl_nose",.15,.2,.15,6986346);n.position.set(0,2.2,.28),i.add(n),ie(i,.14,2.35,.26,.08,11184640),Cn(i,.65,1,.22,1.5,4880970),Qe(i,.25,.7,.25,.35,4880970);const s=Y("trl_club",.12,.8,.12,6967344);s.position.set(.7,1.4,.1),i.add(s)};se.Shadow=i=>{const t=Y("shd_body",.4,.6,.25,1052704);t.position.set(0,.6,0),t.material.transparent=!0,t.material.opacity=.5,i.add(t);const e=Y("shd_head",.3,.3,.3,1052704);e.position.set(0,1.05,0),e.material.transparent=!0,e.material.opacity=.6,i.add(e),ie(i,.07,1.08,.16,.05,11158783)};se.Demon=i=>{const t=Y("dem_body",.6,.8,.4,11149344);t.position.set(0,1,0),i.add(t);const e=Y("dem_head",.42,.4,.4,11149344);e.position.set(0,1.6,0),i.add(e);const n=pe("dem_horn",()=>new bt(.06,.2,.06)),s=me("dem_horn",()=>new re({color:2236962}));i.add(new at(n,s).translateX(-.15).translateY(1.88)),i.add(new at(n,s).translateX(.15).translateY(1.88)),ie(i,.1,1.65,.21,.06,16776960),Cn(i,.42,.65,.18,1,8919064),Qe(i,.16,.55,.18,.28,6688784);const r=Y("dem_tail",.06,.06,.35,11149344);r.position.set(0,.7,-.3),i.add(r);const a=Y("dem_tailtip",.1,.1,.06,6688784);a.position.set(0,.7,-.5),i.add(a)};se["Wither Boss"]=i=>{const t=Y("wb_body",1.2,1.5,.8,1710618);t.position.set(0,1.8,0),i.add(t);for(let e=-1;e<=1;e++){const n=Y(`wb_head${e}`,.5,.5,.5,2763306);n.position.set(e*.5,3,.1),i.add(n),ie(i,.12,3.05,.36+0,.06,4508927)}for(let e=0;e<3;e++){const n=Y(`wb_rib${e}`,1.3,.06,.82,3355443);n.position.set(0,1.5+e*.25,0),i.add(n)}Cn(i,.75,1,.2,2,2763306)};se.Dragon=i=>{const t=Y("drg_body",1.8,1,1.5,2755146);t.position.set(0,1.3,0),i.add(t);const e=Y("drg_head",.6,.5,.7,3807834);e.position.set(0,2,.9),i.add(e);const n=Y("drg_snout",.3,.2,.4,4860522);n.position.set(0,1.9,1.3),i.add(n),ie(i,.18,2.1,1.2,.1,16711935);const s=pe("drg_wing",()=>new bt(1.5,.05,1)),r=me("drg_wing",()=>new re({color:3803738,transparent:!0,opacity:.7}));i.add(new at(s,r).translateX(-1.2).translateY(1.8)),i.add(new at(s,r).translateX(1.2).translateY(1.8));const a=Y("drg_tail",.3,.3,1,2755146);a.position.set(0,1.1,-1),i.add(a),Rn(i,1.2,.7,.25,.5,-.5,.35,1706554)};se["Elder Guardian"]=i=>{const t=Y("eg_body",1,1,1,5933690);t.position.set(0,.6,0),i.add(t);for(let r=0;r<8;r++){const a=r/8*Math.PI*2,o=Y(`eg_spike${r}`,.08,.3,.08,8039066);o.position.set(Math.cos(a)*.5,.6,Math.sin(a)*.5),i.add(o)}const e=Y("eg_eye",.3,.3,.05,4500223);e.position.set(0,.7,.51),i.add(e);const n=Y("eg_pupil",.12,.12,.06,1118481);n.position.set(0,.7,.53),i.add(n);const s=Y("eg_tail",.5,.4,.1,5933690);s.position.set(0,.5,-.55),i.add(s)};class jr{constructor(t,e,n,s){this.type=t,this.category=e,this.world=s,this.hp=t.hp,this.maxHp=t.hp,this.alive=!0,this.deathTimer=0,this.position=n.clone(),this.velocity=new I(0,0,0),this.onGround=!1,this.aiTimer=0,this.wanderDir=new I(Math.random()*2-1,0,Math.random()*2-1).normalize(),this.wanderTime=2+Math.random()*3,this.idleTime=0,this.attackCooldown=0,this.hurtTimer=0,this._flashing=!1,this.shootCooldown=0,this.fuseTimer=0,this.fusing=!1,this.isBoss=!!t.boss,this.specialTimer=0,this.mesh=this._buildMesh(),this.mesh.position.copy(this.position),this.label=null,this.fleeing=!1,this.fleeTimer=0,this.isNPC=!1}_buildMesh(){const{w:t,h:e,name:n}=this.type,s=new rn,r=se[n];r?r(s,this.type,this.category):s0(s,this.type,this.category);const a=t,o=pe(`hpbg_${n}`,()=>new os(a,.08)),l=new at(o,me("hpbg",()=>new mn({color:3355443,side:fn})));l.position.y=e+.3,s.add(l),this._hpBarBg=l;const c=pe(`hp_${n}`,()=>new os(a,.08)),h=this.category===je.MONSTER?16724787:3407667,u=new at(c,me(`hp_${this.category}`,()=>new mn({color:h,side:fn})));return u.position.y=e+.3,s.add(u),this._hpBar=u,this._hpBarWidth=a,s}takeDamage(t,e){this.hp=Math.max(0,this.hp-t),this.hurtTimer=.2,e&&(Ie.copy(e).normalize().multiplyScalar(n0),this.velocity.x+=Ie.x,this.velocity.y+=4,this.velocity.z+=Ie.z),this._flashing||(this._flashing=!0,this.mesh.traverse(n=>{n.isMesh&&n.material&&n!==this._hpBar&&n!==this._hpBarBg&&(n.material._origColor||(n.material._origColor=n.material.color.getHex()),n.material.color.setHex(16711680))})),this.hp<=0&&(this.alive=!1,this.deathTimer=.5,this._drops=this._generateDrops()),this.category===je.ANIMAL&&this.alive&&(this.fleeing=!0,this.fleeTimer=4,e&&this.wanderDir.copy(e).normalize())}_generateDrops(){const t=[],e=Fm[this.type.name];if(!e)return t;for(const n of e)if(Math.random()<=n.chance){const s=n.min+Math.floor(Math.random()*(n.max-n.min+1));s>0&&t.push({id:n.item,count:s})}return t}update(t,e,n){if(!this.alive)return this.deathTimer-=t,this.mesh.position.y-=t*2,this.mesh.rotation.z+=t*3,this.deathTimer>0;this.hurtTimer>0&&(this.hurtTimer-=t,this.hurtTimer<=0&&this._flashing&&(this._flashing=!1,this.mesh.traverse(a=>{a.isMesh&&a.material&&a.material._origColor!==void 0&&a.material.color.setHex(a.material._origColor)}))),this.attackCooldown=Math.max(0,this.attackCooldown-t),Ie.subVectors(e,this.position),Ie.y=0;const s=Ie.length();this.category===je.MONSTER?this._monsterAI(t,Ie,s,e):this.isNPC?this._npcAI(t):this._animalAI(t,Ie,s),this.velocity.y+=-24*t,this._moveWithCollision(t),this.mesh.position.copy(this.position),(Math.abs(this.velocity.x)>.1||Math.abs(this.velocity.z)>.1)&&(this.mesh.rotation.y=Math.atan2(this.velocity.x,this.velocity.z));const r=this.hp/this.maxHp;return this._hpBar.scale.x=Math.max(.01,r),this._hpBar.position.x=-this._hpBarWidth*(1-r)/2,this._hpBarBg.visible=this.hp<this.maxHp,this._hpBar.visible=this.hp<this.maxHp,!0}_monsterAI(t,e,n,s){if(this.shootCooldown=Math.max(0,this.shootCooldown-t),this.type.name==="Skeleton"&&n<20&&n>5&&this.shootCooldown<=0){this.shootCooldown=2.5,this.velocity.x*=.3,this.velocity.z*=.3,this._pendingProjectile={target:s.clone(),damage:this.type.damage};return}if(this.type.name==="Creeper")if(n<3){this.fusing=!0,this.fuseTimer+=t,this.velocity.x*=.2,this.velocity.z*=.2,Math.floor(this.fuseTimer*4)%2===0&&!this._flashing&&this.mesh.traverse(r=>{r.isMesh&&r.material&&r!==this._hpBar&&r!==this._hpBarBg&&(r.material._origColor||(r.material._origColor=r.material.color.getHex()),r.material.color.setHex(16777215))}),this.fuseTimer>=1.5&&(this._pendingExplosion={radius:3,damage:this.type.damage},this.alive=!1,this.deathTimer=.1);return}else this.fusing&&(this.fuseTimer=Math.max(0,this.fuseTimer-t*2),this.fuseTimer<=0&&(this.fusing=!1));if(n<40&&n>1.2){Yn.copy(e).normalize();const r=this.isBoss?.8:1;this.velocity.x=Yn.x*this.type.speed*r,this.velocity.z=Yn.z*this.type.speed*r,this.onGround&&this._isBlockedAhead(Yn)&&(this.velocity.y=7)}else n<=1.2?(this.velocity.x*=.5,this.velocity.z*=.5):this._wander(t)}_animalAI(t,e,n){if(this.fleeing)if(this.fleeTimer-=t,this.fleeTimer<=0)this.fleeing=!1;else{this.velocity.x=this.wanderDir.x*this.type.speed*2,this.velocity.z=this.wanderDir.z*this.type.speed*2,this.onGround&&this._isBlockedAhead(this.wanderDir)&&(this.velocity.y=7);return}if(n<5){Yn.copy(e).negate().normalize(),this.velocity.x=Yn.x*this.type.speed*1.5,this.velocity.z=Yn.z*this.type.speed*1.5,this.onGround&&this._isBlockedAhead(Yn)&&(this.velocity.y=7);return}this._wander(t)}_npcAI(t){this._wander(t)}_wander(t){this.aiTimer+=t,this.aiTimer>this.wanderTime&&(this.aiTimer=0,this.wanderTime=2+Math.random()*4,Math.random()<.4?this.wanderDir.set(0,0,0):this.wanderDir.set(Math.random()*2-1,0,Math.random()*2-1).normalize()),this.velocity.x=this.wanderDir.x*this.type.speed*.4,this.velocity.z=this.wanderDir.z*this.type.speed*.4,this.onGround&&this.wanderDir.lengthSq()>0&&this._isBlockedAhead(this.wanderDir)&&(this.velocity.y=7)}_isBlockedAhead(t){const e=Math.floor(this.position.x+t.x*.8),n=Math.floor(this.position.y+.5),s=Math.floor(this.position.z+t.z*.8);return this.world.isSolid(e,n,s)}_moveWithCollision(t){const e=this.type.w/2,n=this.type.h,s=i0.copy(this.position);s.x+=this.velocity.x*t,this._collides(s.x,this.position.y,this.position.z,e,n)&&(s.x=this.position.x,this.velocity.x=0),s.z+=this.velocity.z*t,this._collides(s.x,this.position.y,s.z,e,n)&&(s.z=this.position.z,this.velocity.z=0),s.y+=this.velocity.y*t,this.onGround=!1,this._collides(s.x,s.y,s.z,e,n)&&(this.velocity.y<0&&(this.onGround=!0),s.y=this.position.y,this.velocity.y=0),this.position.copy(s)}_collides(t,e,n,s,r){for(let a=-1;a<=1;a+=2)for(let o=-1;o<=1;o+=2){const l=t+a*s,c=n+o*s;for(let h=0;h<r;h+=.5)if(this.world.isSolid(l,e+h,c))return!0;if(this.world.isSolid(l,e+r,c))return!0}return!1}dispose(t){t.remove(this.mesh)}}class r0{constructor(t,e){this.scene=t,this.world=e,this.mobs=[],this.spawnTimer=0,this.playerAttackCooldown=0,this.burnTimer=0,this.projectiles=[],this.pendingDrops=[],this.pendingExplosionDamage=0,this.bossSpawnTimer=0,this._npcSpawnedChunks=new Set}update(t,e,n,s){this.spawnTimer+=t,this.playerAttackCooldown=Math.max(0,this.playerAttackCooldown-t),this.burnTimer+=t,this.bossSpawnTimer+=t;const r=this.burnTimer>=.5;r&&(this.burnTimer=0),this.spawnTimer>=Jm&&(this.spawnTimer=0,this._trySpawn(e,n)),n&&this.bossSpawnTimer>=300&&(this.bossSpawnTimer=0,this._trySpawnBoss(e)),this.pendingExplosionDamage=0;for(let a=this.mobs.length-1;a>=0;a--){const o=this.mobs[a],l=o.position.distanceTo(e);if(l>Zm&&!o.isBoss&&!o.isNPC){o.dispose(this.scene),this.mobs.splice(a,1);continue}if(!n&&o.category===je.MONSTER&&o.alive&&!o.isBoss&&r&&o.takeDamage(1,null),n&&o.category===je.ANIMAL&&o.alive&&l>40){o.dispose(this.scene),this.mobs.splice(a,1);continue}const c=o.update(t,e,n);if(o._pendingProjectile&&(this._createProjectile(o.position,o._pendingProjectile),o._pendingProjectile=null),o._pendingExplosion){const h=o._pendingExplosion;o.position.distanceTo(e)<h.radius&&(this.pendingExplosionDamage+=h.damage),this._explodeBlocks(o.position,h.radius),o._pendingExplosion=null}if(!o.alive&&o._drops&&o._drops.length>0){for(const h of o._drops)this.pendingDrops.push(h);o._drops=null}if(!c){o.dispose(this.scene),this.mobs.splice(a,1);continue}o.category===je.MONSTER&&o.alive&&o.attackCooldown<=0&&(Ie.subVectors(e,o.position),Ie.length()<1.5&&(o.attackCooldown=Qm,o._pendingAttack=o.type.damage)),s&&(o._hpBar.visible||o._hpBarBg.visible)&&(o._hpBar.lookAt(s.position),o._hpBarBg.lookAt(s.position))}}getPlayerDamage(){let t=0;for(const e of this.mobs)e._pendingAttack&&(t+=e._pendingAttack,e._pendingAttack=0);return t}playerAttack(t,e,n=e0){if(this.playerAttackCooldown>0)return!1;this.playerAttackCooldown=t0;let s=null,r=pc;for(const a of this.mobs){if(!a.alive)continue;Ie.subVectors(a.position,t),Ie.y+=a.type.h*.5;const o=Ie.length();o>pc||Ie.normalize().dot(e)<.25||o<r&&(r=o,s=a)}return s?(Ie.subVectors(s.position,t),Ie.y=0,s.takeDamage(n,Ie),!0):!1}_trySpawn(t,e){if(this.mobs.length>=jm)return;const n=e?je.MONSTER:je.ANIMAL,s=n===je.MONSTER?qm:Km,r=s[Math.floor(Math.random()*s.length)],a=Math.random()*Math.PI*2,o=fc+Math.random()*($m-fc),l=t.x+Math.cos(a)*o,c=t.z+Math.sin(a)*o,h=this._findGround(l,c);if(h<0)return;const u=new jr(r,n,new I(l,h,c),this.world);this.mobs.push(u),this.scene.add(u.mesh)}_findGround(t,e){const n=Math.floor(t),s=Math.floor(e);for(let r=100;r>0;r--)if(this.world.isSolid(n,r,s)&&!this.world.isSolid(n,r+1,s)&&!this.world.isSolid(n,r+2,s))return r+1;return-1}getMobCount(){let t=0,e=0;for(const n of this.mobs)n.alive&&(n.category===je.MONSTER?t++:e++);return{total:this.mobs.length,monsters:t,animals:e}}collectDrops(){const t=this.pendingDrops.slice();return this.pendingDrops=[],t}getExplosionDamage(){return this.pendingExplosionDamage}updateProjectiles(t,e){for(let s=this.projectiles.length-1;s>=0;s--){const r=this.projectiles[s];if(r.position.addScaledVector(r.velocity,t),r.velocity.y-=9.8*t,r.life-=t,r.mesh.position.copy(r.position),r.position.distanceTo(e)<1){this.projectiles[s]._hitPlayer=r.damage,this.scene.remove(r.mesh),this.projectiles.splice(s,1);continue}const o=this.world.getBlock(Math.floor(r.position.x),Math.floor(r.position.y),Math.floor(r.position.z));if(o!==0&&o!==void 0){this.scene.remove(r.mesh),this.projectiles.splice(s,1);continue}r.life<=0&&(this.scene.remove(r.mesh),this.projectiles.splice(s,1))}return 0}getArrowDamage(){let t=0;for(let e=this.projectiles.length-1;e>=0;e--)this.projectiles[e]._hitPlayer&&(t+=this.projectiles[e]._hitPlayer,this.scene.remove(this.projectiles[e].mesh),this.projectiles.splice(e,1));return t}_createProjectile(t,e){const n=Ie.copy(e.target).sub(t).normalize(),s=15,r=pe("arrow_proj",()=>new bt(.1,.1,.5)),a=me("arrow_proj",()=>new re({color:9136404})),o=new at(r,a);o.position.copy(t),o.position.y+=1,this.scene.add(o),this.projectiles.push({position:o.position.clone(),velocity:n.clone().multiplyScalar(s).add(new I(0,2,0)),mesh:o,damage:e.damage,life:5})}_explodeBlocks(t,e){const n=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z),a=Math.ceil(e);for(let o=-a;o<=a;o++)for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++){if(o*o+l*l+c*c>e*e)continue;const h=this.world.getBlock(n+o,s+l,r+c);h!==x.AIR&&h!==x.BEDROCK&&this.world.setBlock(n+o,s+l,r+c,x.AIR)}}_trySpawnBoss(t){if(this.mobs.some(h=>h.isBoss&&h.alive))return;const n=dc[Math.floor(Math.random()*dc.length)],s=Math.random()*Math.PI*2,r=30+Math.random()*20,a=t.x+Math.cos(s)*r,o=t.z+Math.sin(s)*r,l=this._findGround(a,o);if(l<0)return;const c=new jr(n,je.MONSTER,new I(a,l,o),this.world);this.mobs.push(c),this.scene.add(c.mesh)}dispose(){for(const t of this.mobs)t.dispose(this.scene);this.mobs=[]}spawnNPC(t,e){const n=`${Math.floor(t/16)},${Math.floor(e/16)}`;if(this._npcSpawnedChunks.has(n))return;this._npcSpawnedChunks.add(n);const s=this._findGround(t,e);if(s<0)return;const r=new jr(Ym,je.ANIMAL,new I(t,s,e),this.world);r.isNPC=!0,r.mesh.traverse(a=>{a.isMesh&&a.material&&(a.material=a.material.clone(),a.material.color.setHex(9071178))}),this.mobs.push(r),this.scene.add(r.mesh)}}let ns=null;function En(){return ns||(ns=new(window.AudioContext||window.webkitAudioContext)),ns.state==="suspended"&&ns.resume(),ns}function Ui(i,t){const e=i.sampleRate*t,n=i.createBuffer(1,e,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}const ze={blockBreak(){const i=En(),t=i.createBufferSource();t.buffer=Ui(i,.12);const e=i.createBiquadFilter();e.type="bandpass",e.frequency.value=800,e.Q.value=1;const n=i.createGain();n.gain.setValueAtTime(.25,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.12),t.connect(e).connect(n).connect(i.destination),t.start()},blockPlace(){const i=En(),t=i.createBufferSource();t.buffer=Ui(i,.08);const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=1200;const n=i.createGain();n.gain.setValueAtTime(.2,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.08),t.connect(e).connect(n).connect(i.destination),t.start()},hit(){const i=En(),t=i.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(300,i.currentTime),t.frequency.exponentialRampToValueAtTime(100,i.currentTime+.1);const e=i.createGain();e.gain.setValueAtTime(.15,i.currentTime),e.gain.exponentialRampToValueAtTime(.001,i.currentTime+.1),t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.1)},playerHurt(){const i=En(),t=i.createOscillator();t.type="square",t.frequency.setValueAtTime(400,i.currentTime),t.frequency.exponentialRampToValueAtTime(150,i.currentTime+.2);const e=i.createGain();e.gain.setValueAtTime(.15,i.currentTime),e.gain.exponentialRampToValueAtTime(.001,i.currentTime+.2),t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.2)},jump(){const i=En(),t=i.createOscillator();t.type="sine",t.frequency.setValueAtTime(200,i.currentTime),t.frequency.exponentialRampToValueAtTime(400,i.currentTime+.08);const e=i.createGain();e.gain.setValueAtTime(.1,i.currentTime),e.gain.exponentialRampToValueAtTime(.001,i.currentTime+.08),t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.1)},bowShoot(){const i=En(),t=i.createBufferSource();t.buffer=Ui(i,.15);const e=i.createBiquadFilter();e.type="bandpass",e.frequency.value=2e3,e.Q.value=3;const n=i.createGain();n.gain.setValueAtTime(.2,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.15),t.connect(e).connect(n).connect(i.destination),t.start()},explosion(){const i=En(),t=i.createBufferSource();t.buffer=Ui(i,.5);const e=i.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(400,i.currentTime),e.frequency.exponentialRampToValueAtTime(50,i.currentTime+.5);const n=i.createGain();n.gain.setValueAtTime(.4,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.5),t.connect(e).connect(n).connect(i.destination),t.start()},pickup(){const i=En(),t=i.createOscillator();t.type="sine",t.frequency.setValueAtTime(500,i.currentTime),t.frequency.exponentialRampToValueAtTime(800,i.currentTime+.06);const e=i.createGain();e.gain.setValueAtTime(.1,i.currentTime),e.gain.exponentialRampToValueAtTime(.001,i.currentTime+.06),t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.08)},trade(){const i=En(),t=i.createOscillator();t.type="sine",t.frequency.setValueAtTime(600,i.currentTime),t.frequency.setValueAtTime(800,i.currentTime+.08),t.frequency.setValueAtTime(1e3,i.currentTime+.16);const e=i.createGain();e.gain.setValueAtTime(.1,i.currentTime),e.gain.setValueAtTime(.1,i.currentTime+.16),e.gain.exponentialRampToValueAtTime(.001,i.currentTime+.24),t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.25)},mining(){const i=En(),t=i.createBufferSource();t.buffer=Ui(i,.06);const e=i.createBiquadFilter();e.type="bandpass",e.frequency.value=1200+Math.random()*400,e.Q.value=2;const n=i.createGain();n.gain.setValueAtTime(.12,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.06),t.connect(e).connect(n).connect(i.destination),t.start()},step(){const i=En(),t=i.createBufferSource();t.buffer=Ui(i,.04);const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=600;const n=i.createGain();n.gain.setValueAtTime(.05,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.04),t.connect(e).connect(n).connect(i.destination),t.start()}},mc=200,_c=.6,gc=new bt(.08,.08,.08),$r=new Map;function xc(i){return $r.has(i)||$r.set(i,new re({color:i})),$r.get(i)}class o0{constructor(t){this.scene=t,this.particles=[]}spawnBlockBreak(t,e,n,s,r=12){for(let a=0;a<r&&this.particles.length<mc;a++){const o=new at(gc,xc(s));o.position.set(t+.5+(Math.random()-.5)*.6,e+.5+(Math.random()-.5)*.6,n+.5+(Math.random()-.5)*.6),this.scene.add(o),this.particles.push({mesh:o,vx:(Math.random()-.5)*4,vy:Math.random()*4+2,vz:(Math.random()-.5)*4,life:_c})}}spawnMiningTick(t,e,n,s){if(this.particles.length>=mc)return;const r=new at(gc,xc(s));r.position.set(t+.5+(Math.random()-.5)*.3,e+.5+(Math.random()-.5)*.3,n+.5+(Math.random()-.5)*.3),this.scene.add(r),this.particles.push({mesh:r,vx:(Math.random()-.5)*2,vy:Math.random()*2+1,vz:(Math.random()-.5)*2,life:.35})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),this.particles.splice(e,1);continue}n.vy-=15*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const s=Math.max(.01,n.life/_c);n.mesh.scale.setScalar(s)}}}class a0{constructor(){this.isMobile=this._detectMobile(),this.isMobile&&(this.moveX=0,this.moveY=0,this._joystickActive=!1,this._joystickTouchId=null,this._joystickOrigin={x:0,y:0},this._lookTouchId=null,this._lookLastPos={x:0,y:0},this.lookDeltaX=0,this.lookDeltaY=0,this.jumpPressed=!1,this.attackPressed=!1,this.attackHeld=!1,this.placePressed=!1,this.inventoryPressed=!1,this.sprintActive=!1,this.hotbarDelta=0,this._buildUI(),this._bindEvents())}_detectMobile(){return"ontouchstart"in window||navigator.maxTouchPoints>0||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)}_buildUI(){const t=document.createElement("div");t.id="touch-controls",t.innerHTML=`
      <div id="touch-joystick-zone">
        <div id="touch-joystick-base">
          <div id="touch-joystick-thumb"></div>
        </div>
      </div>
      <div id="touch-look-zone"></div>
      <div id="touch-buttons">
        <button id="touch-jump" class="touch-btn">⬆</button>
        <button id="touch-attack" class="touch-btn touch-btn-attack">⛏</button>
        <button id="touch-place" class="touch-btn touch-btn-place">◼</button>
        <button id="touch-inventory" class="touch-btn touch-btn-small">☰</button>
        <button id="touch-sprint" class="touch-btn touch-btn-small touch-btn-sprint">🏃</button>
      </div>
      <div id="touch-hotbar-arrows">
        <button id="touch-hotbar-left" class="touch-btn touch-btn-tiny">◀</button>
        <button id="touch-hotbar-right" class="touch-btn touch-btn-tiny">▶</button>
      </div>
    `,document.getElementById("app").appendChild(t),this._joystickBase=document.getElementById("touch-joystick-base"),this._joystickThumb=document.getElementById("touch-joystick-thumb"),this._joystickZone=document.getElementById("touch-joystick-zone"),this._lookZone=document.getElementById("touch-look-zone")}_bindEvents(){document.addEventListener("touchstart",a=>{a.preventDefault()},{passive:!1}),this._joystickZone.addEventListener("touchstart",a=>this._onJoystickStart(a),{passive:!1}),this._joystickZone.addEventListener("touchmove",a=>this._onJoystickMove(a),{passive:!1}),this._joystickZone.addEventListener("touchend",a=>this._onJoystickEnd(a),{passive:!1}),this._joystickZone.addEventListener("touchcancel",a=>this._onJoystickEnd(a),{passive:!1}),this._lookZone.addEventListener("touchstart",a=>this._onLookStart(a),{passive:!1}),this._lookZone.addEventListener("touchmove",a=>this._onLookMove(a),{passive:!1}),this._lookZone.addEventListener("touchend",a=>this._onLookEnd(a),{passive:!1}),this._lookZone.addEventListener("touchcancel",a=>this._onLookEnd(a),{passive:!1});const t=document.getElementById("touch-jump");t.addEventListener("touchstart",a=>{a.preventDefault(),this.jumpPressed=!0}),t.addEventListener("touchend",a=>{a.preventDefault(),this.jumpPressed=!1}),t.addEventListener("touchcancel",a=>{a.preventDefault(),this.jumpPressed=!1});const e=document.getElementById("touch-attack");e.addEventListener("touchstart",a=>{a.preventDefault(),this.attackPressed=!0,this.attackHeld=!0}),e.addEventListener("touchend",a=>{a.preventDefault(),this.attackHeld=!1}),e.addEventListener("touchcancel",a=>{a.preventDefault(),this.attackHeld=!1});const n=document.getElementById("touch-place");n.addEventListener("touchstart",a=>{a.preventDefault(),this.placePressed=!0}),n.addEventListener("touchend",a=>{a.preventDefault()}),n.addEventListener("touchcancel",a=>{a.preventDefault()}),document.getElementById("touch-inventory").addEventListener("touchstart",a=>{a.preventDefault(),this.inventoryPressed=!0});const r=document.getElementById("touch-sprint");r.addEventListener("touchstart",a=>{a.preventDefault(),this.sprintActive=!this.sprintActive,r.classList.toggle("active",this.sprintActive)}),document.getElementById("touch-hotbar-left").addEventListener("touchstart",a=>{a.preventDefault(),this.hotbarDelta=-1}),document.getElementById("touch-hotbar-right").addEventListener("touchstart",a=>{a.preventDefault(),this.hotbarDelta=1})}_onJoystickStart(t){if(this._joystickTouchId!==null)return;const e=t.changedTouches[0];this._joystickTouchId=e.identifier,this._joystickOrigin.x=e.clientX,this._joystickOrigin.y=e.clientY;const n=this._joystickZone.getBoundingClientRect();this._joystickBase.style.left=e.clientX-n.left+"px",this._joystickBase.style.top=e.clientY-n.top+"px",this._joystickBase.style.display="block",this._joystickActive=!0}_onJoystickMove(t){for(const e of t.changedTouches){if(e.identifier!==this._joystickTouchId)continue;const n=e.clientX-this._joystickOrigin.x,s=e.clientY-this._joystickOrigin.y,r=50,a=Math.sqrt(n*n+s*s),o=Math.min(a,r),l=Math.atan2(s,n),c=Math.cos(l)*o,h=Math.sin(l)*o;this.moveX=c/r,this.moveY=h/r,this._joystickThumb.style.transform=`translate(${c}px, ${h}px)`}}_onJoystickEnd(t){for(const e of t.changedTouches)e.identifier===this._joystickTouchId&&(this._joystickTouchId=null,this._joystickActive=!1,this.moveX=0,this.moveY=0,this._joystickThumb.style.transform="translate(0, 0)",this._joystickBase.style.display="none")}_onLookStart(t){if(this._lookTouchId!==null)return;const e=t.changedTouches[0];this._lookTouchId=e.identifier,this._lookLastPos.x=e.clientX,this._lookLastPos.y=e.clientY}_onLookMove(t){for(const e of t.changedTouches)e.identifier===this._lookTouchId&&(this.lookDeltaX+=e.clientX-this._lookLastPos.x,this.lookDeltaY+=e.clientY-this._lookLastPos.y,this._lookLastPos.x=e.clientX,this._lookLastPos.y=e.clientY)}_onLookEnd(t){for(const e of t.changedTouches)e.identifier===this._lookTouchId&&(this._lookTouchId=null)}applyToPlayer(t){if(!this.isMobile)return;const e=t.keyBindings,n=.2;t.keys[e.forward]=this.moveY<-n,t.keys[e.back]=this.moveY>n,t.keys[e.left]=this.moveX<-n,t.keys[e.right]=this.moveX>n,t.keys[e.sprint]=this.sprintActive,t.keys[e.jump]=this.jumpPressed;const s=.004;t.yaw-=this.lookDeltaX*s,t.pitch-=this.lookDeltaY*s,t.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,t.pitch)),this.lookDeltaX=0,this.lookDeltaY=0}consumeAttack(){return this.attackPressed?(this.attackPressed=!1,!0):!1}consumePlace(){return this.placePressed?(this.placePressed=!1,!0):!1}consumeInventory(){return this.inventoryPressed?(this.inventoryPressed=!1,!0):!1}consumeHotbarDelta(){const t=this.hotbarDelta;return this.hotbarDelta=0,t}show(){if(!this.isMobile)return;const t=document.getElementById("touch-controls");t&&(t.style.display="block")}hide(){const t=document.getElementById("touch-controls");t&&(t.style.display="none")}}const sn=new I,vc=[{costId:q.EMERALD,costCount:1,costIsBlock:!1,resultId:q.BREAD,resultCount:6,resultIsBlock:!1},{costId:q.EMERALD,costCount:3,costIsBlock:!1,resultId:q.IRON_PICKAXE,resultCount:1,resultIsBlock:!1},{costId:q.EMERALD,costCount:5,costIsBlock:!1,resultId:q.DIAMOND,resultCount:1,resultIsBlock:!1},{costId:q.EMERALD,costCount:2,costIsBlock:!1,resultId:q.GOLDEN_APPLE,resultCount:2,resultIsBlock:!1},{costId:q.EMERALD,costCount:1,costIsBlock:!1,resultId:q.ARROW,resultCount:16,resultIsBlock:!1},{costId:q.COAL,costCount:10,costIsBlock:!1,resultId:q.EMERALD,resultCount:1,resultIsBlock:!1},{costId:q.IRON_INGOT,costCount:4,costIsBlock:!1,resultId:q.EMERALD,resultCount:1,resultIsBlock:!1},{costId:q.WHEAT,costCount:20,costIsBlock:!1,resultId:q.EMERALD,resultCount:1,resultIsBlock:!1}];class c0{constructor(){this.running=!1,this.coopMode=!1,this.lastTime=0,this.frameCount=0,this.fpsTime=0,this.fps=0,this.scene=new _m,this.scene.background=new Dt(8900331),this.scene.fog=new _o(8900331,60,120),this.camera=new on(70,window.innerWidth/window.innerHeight,.1,200),this.camera2=new on(70,window.innerWidth/2/window.innerHeight,.1,200),this.renderer=new Zc({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setScissorTest(!1),document.body.insertBefore(this.renderer.domElement,document.body.firstChild);const t=new nl(8421520,.8);this.scene.add(t);const e=new el(16777181,1);e.position.set(100,200,100),this.scene.add(e);const n=new tl(8900331,5597999,.4);this.scene.add(n),this.seed=Math.floor(Math.random()*1e5),this.world=new Im(this.scene,this.seed),this.dayNight=new Xm(this.scene),this.mobs=new r0(this.scene,this.world),this.particles=new o0(this.scene),this.touch=new a0,this.inventory=new hc(36),this.player=new lc(this.camera,this.world,il,0),this.ui=new uc(this.inventory),this.inventory2=null,this.player2=null,this.ui2=null,this.scene.add(this.player.highlightMesh),this.player.characterModel.addToScene(this.scene),this.inventory.giveStarterKit(),this._cheatBuffer="",this._cheatTimer=0,this._cheatCodes={day:()=>{this.dayNight.time=.3},night:()=>{this.dayNight.time=.8},sword:()=>{this.inventory.addItem(q.DIAMOND_SWORD,1),this.ui.updateHotbar()},house:()=>{this._spawnHouse()},doors:()=>{this.inventory.addBlock(x.DOOR,64),this.ui.updateHotbar()}},this._maxCheatLen=Math.max(...Object.keys(this._cheatCodes).map(s=>s.length)),this.breaking=!1,this.breakProgress=0,this.breakTarget=null,this._breakProgressEl=document.getElementById("break-progress"),this._breakFill=this._breakProgressEl?this._breakProgressEl.querySelector(".break-progress-fill"):null,this._miningSoundTimer=0,this.placing=!1,this._placeCooldown=0,this.playerArrows=[],this.chestStorage={},this.tradeOpen=!1,this._tradeScreen=document.getElementById("trade-screen"),this._tradeList=document.getElementById("trade-list"),this._setupEvents(),document.getElementById("play-btn").addEventListener("click",()=>this.start(!1)),document.getElementById("coop-btn").addEventListener("click",()=>this.start(!0))}_initPlayer2(){this.inventory2=new hc(36),this.player2=new lc(this.camera2,this.world,Vm,1),this.ui2=new uc(this.inventory2,"p2"),this.scene.add(this.player2.highlightMesh),this.player2.characterModel.addToScene(this.scene),this.inventory2.giveStarterKit(),this.player.coopMode=!0,this.player2.coopMode=!0}_setupEvents(){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;this.coopMode?(this.camera.aspect=t/2/e,this.camera2.aspect=t/2/e,this.camera2.updateProjectionMatrix()):this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}),document.addEventListener("pointerlockchange",()=>{this.player.mouseLocked=!!document.pointerLockElement}),document.addEventListener("mousedown",t=>{if(!(!this.running||this.touch.isMobile)&&!this.tradeOpen){if(!this.player.mouseLocked&&!this.ui.inventoryOpen){this.renderer.domElement.requestPointerLock();return}if(this.player.mouseLocked)if(t.button===0){this.player.characterModel.triggerPunch(),ze.hit();const e=this.player.position.clone();e.y+=1.5,sn.set(0,0,-1).applyQuaternion(this.camera.quaternion);const n=this.inventory.getHeldSlot();if(n&&!n.isBlock&&xe[n.id]&&xe[n.id].toolType===ae.BOW){this._shootBow(this.player,this.inventory,this.ui);return}const s=Gs(n);this.mobs.playerAttack(e,sn,s)?this.inventory.damageHeldTool():this.breaking=!0}else t.button===2&&(this._handleRightClick(this.player,this.inventory,this.ui),this.placing=!0,this._placeCooldown=.25)}}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mouseup",t=>{t.button===0&&(this.breaking=!1,this.breakProgress=0,this.breakTarget=null,this._breakProgressEl&&(this._breakProgressEl.style.display="none")),t.button===2&&(this.placing=!1)}),document.addEventListener("keydown",t=>{if(this.running){if(!this.ui.inventoryOpen&&!this.tradeOpen&&t.key.length===1&&/^[a-z]$/i.test(t.key)){this._cheatBuffer+=t.key.toLowerCase(),this._cheatTimer=1.5,this._cheatBuffer.length>this._maxCheatLen&&(this._cheatBuffer=this._cheatBuffer.slice(-this._maxCheatLen));for(const[e,n]of Object.entries(this._cheatCodes))if(this._cheatBuffer.endsWith(e)){n(),this._cheatBuffer="";break}}if(t.code>="Digit1"&&t.code<="Digit9"){const e=parseInt(t.code.replace("Digit",""))-1;this.inventory.selectSlot(e),this.ui.updateHotbar()}if(t.code==="KeyE"&&(this.ui.toggleInventory()?(document.exitPointerLock(),this.player.mouseLocked=!1):this.renderer.domElement.requestPointerLock()),t.code==="F3"&&(t.preventDefault(),this.ui.toggleDebug(),this.ui2&&this.ui2.toggleDebug()),t.code==="KeyQ"&&(this.inventory.dropHeldItem(),this.ui.updateHotbar()),t.code==="KeyG"&&(this.player.creativeMode=!this.player.creativeMode,this.player.creativeMode&&(this.player.health=this.player.maxHealth,this.player.hunger=this.player.maxHunger)),t.code==="KeyR"&&this.inventory.equipArmor(this.inventory.selectedSlot,this.player.armorSlots)&&(this.ui.updateHotbar(),this.ui.updateArmorSlots(this.player.armorSlots)),t.code==="KeyF"&&this.ui.furnaceOpen&&(this.ui.toggleFurnace(),this.renderer.domElement.requestPointerLock()),(t.code==="KeyT"||t.code==="Escape"&&this.tradeOpen)&&(this.tradeOpen?this._closeTrade():t.code==="KeyT"&&this._checkNPCInteraction()&&this._openTrade()),this.coopMode&&this.player2){if(t.code>="Numpad1"&&t.code<="Numpad9"){const e=parseInt(t.code.replace("Numpad",""))-1;this.inventory2.selectSlot(e),this.ui2.updateHotbar()}if(t.code==="KeyU"){this.player2.characterModel.triggerPunch();const e=this.player2.position.clone();e.y+=1.5,sn.set(0,0,-1).applyQuaternion(this.camera2.quaternion),this.mobs.playerAttack(e,sn)||this._breakBlock(this.player2,this.inventory2,this.ui2)}t.code==="KeyO"&&this._placeBlock(this.player2,this.inventory2,this.ui2),t.code==="KeyP"&&this.ui2.toggleInventory()}}}),document.addEventListener("wheel",t=>{if(!this.running||this.ui.inventoryOpen)return;const e=t.deltaY>0?1:-1;let n=this.inventory.selectedSlot+e;n<0&&(n=this.inventory.hotbarSize-1),n>=this.inventory.hotbarSize&&(n=0),this.inventory.selectSlot(n),this.ui.updateHotbar()})}_breakBlock(t,e,n){if(!t.targetBlock)return;const{blockPos:s,blockType:r}=t.targetBlock,a=yn[r];if(!a||a.hardness<0)return;const o=a.drops!==void 0?a.drops:r;this.world.setBlock(s.x,s.y,s.z,x.AIR),ze.blockBreak(),this.particles.spawnBlockBreak(s.x,s.y,s.z,a.topColor||a.color),o!==x.AIR&&(e.addBlock(o,1),ze.pickup()),t.creativeMode||e.damageHeldTool(),n.updateHotbar()}_updateMining(t){if(!this.breaking||this.ui.inventoryOpen||this.tradeOpen){this.breakProgress=0,this.breakTarget=null,this._breakProgressEl&&(this._breakProgressEl.style.display="none");return}const e=this.player.targetBlock;if(!e){this.breakProgress=0,this.breakTarget=null,this._breakProgressEl&&(this._breakProgressEl.style.display="none");return}const{blockPos:n,blockType:s}=e,r=yn[s];if(!r||r.hardness<0)return;if(this.player.creativeMode){this._breakBlock(this.player,this.inventory,this.ui);return}const a=`${n.x},${n.y},${n.z}`;this.breakTarget!==a&&(this.breakTarget=a,this.breakProgress=0);const o=this.inventory.getHeldSlot(),l=Nm(o,s);this.breakProgress+=l/Math.max(.05,r.hardness)*t,this._miningSoundTimer-=t,this._miningSoundTimer<=0&&(ze.mining(),this.particles.spawnMiningTick(n.x,n.y,n.z,r.topColor||r.color),this._miningSoundTimer=.25),this._breakProgressEl&&this._breakFill&&(this._breakProgressEl.style.display="block",this._breakFill.style.width=`${Math.min(100,this.breakProgress*100)}%`),this.breakProgress>=1&&(this._breakBlock(this.player,this.inventory,this.ui),this.breakProgress=0,this.breakTarget=null,this._breakProgressEl&&(this._breakProgressEl.style.display="none"))}_updatePlacing(t){!this.placing||this.ui.inventoryOpen||this.tradeOpen||(this._placeCooldown-=t,!(this._placeCooldown>0)&&(this._placeCooldown=.2,this._placeBlock(this.player,this.inventory,this.ui)))}_handleRightClick(t,e,n){if(t.targetBlock&&t.targetBlock.blockType===x.FURNACE){const r=n.toggleFurnace();t===this.player&&(r?(document.exitPointerLock(),t.mouseLocked=!1):this.renderer.domElement.requestPointerLock());return}if(t.targetBlock&&t.targetBlock.blockType===x.CHEST){const r=t.targetBlock.blockPos,a=`${r.x},${r.y},${r.z}`;this._openChest(a,e,n);return}if(t.targetBlock&&t.targetBlock.blockType===x.DOOR){const r=t.targetBlock.blockPos;this.world.toggleDoor(r.x,r.y,r.z)?ze.blockBreak():ze.blockPlace();return}const s=e.getHeldSlot();s&&!s.isBlock&&xe[s.id]&&xe[s.id].category===_t.FOOD?t.hunger<t.maxHunger&&(t.hunger=Math.min(t.maxHunger,t.hunger+(xe[s.id].foodValue||0)),e.useHeldItem(),n.updateHotbar()):this._placeBlock(t,e,n)}_placeBlock(t,e,n){if(!t.targetBlock)return;const{blockPos:s,normal:r}=t.targetBlock,a=e.getHeldSlot();if(!a||!a.isBlock)return;const o=a.id;if(o===x.AIR)return;const l=s.x+r.x,c=s.y+r.y,h=s.z+r.z,u=[this.player];this.player2&&u.push(this.player2);for(const d of u){const p=d.position.x-.3,_=d.position.x+.3,g=d.position.y,m=d.position.y+1.7,f=d.position.z-.3,T=d.position.z+.3;if(l+1>p&&l<_&&c+1>g&&c<m&&h+1>f&&h<T)return}this.world.getBlock(l,c,h)===x.AIR&&(this.world.setBlock(l,c,h,o),ze.blockPlace(),t.creativeMode||e.useHeldItem(),n.updateHotbar())}_shootBow(t,e,n){let s=-1;for(let h=0;h<e.size;h++){const u=e.slots[h];if(u&&!u.isBlock&&u.id===q.ARROW&&u.count>0){s=h;break}}if(s<0&&!t.creativeMode)return;ze.bowShoot(),e.damageHeldTool(),t.creativeMode||e.removeFromSlot(s,1),n.updateHotbar();const r=t.position.clone();r.y+=1.5,sn.set(0,0,-1).applyQuaternion(t.camera.quaternion);const a=25,o=new bt(.08,.08,.5),l=new re({color:9136404}),c=new at(o,l);c.position.copy(r),this.scene.add(c),this.playerArrows.push({position:r.clone(),velocity:sn.clone().multiplyScalar(a).add(new I(0,2,0)),mesh:c,damage:Gs(e.getHeldSlot())||6,life:5})}_updatePlayerArrows(t){for(let e=this.playerArrows.length-1;e>=0;e--){const n=this.playerArrows[e];n.position.addScaledVector(n.velocity,t),n.velocity.y-=9.8*t,n.life-=t,n.mesh.position.copy(n.position);let s=!1;for(const c of this.mobs.mobs){if(!c.alive)continue;if(n.position.distanceTo(c.position)<1.2){const u=sn.copy(n.velocity).normalize();c.takeDamage(n.damage,u),this.scene.remove(n.mesh),this.playerArrows.splice(e,1),s=!0;break}}if(s)continue;const r=Math.floor(n.position.x),a=Math.floor(n.position.y),o=Math.floor(n.position.z),l=this.world.getBlock(r,a,o);if(l!==void 0&&l!==x.AIR&&l!==x.WATER){this.scene.remove(n.mesh),this.playerArrows.splice(e,1);continue}n.life<=0&&(this.scene.remove(n.mesh),this.playerArrows.splice(e,1))}}_openChest(t,e,n){if(!this.chestStorage[t]){const r=[{id:x.IRON_ORE,isBlock:!0,count:1+Math.floor(Math.random()*4)},{id:x.GOLD_ORE,isBlock:!0,count:1+Math.floor(Math.random()*3)},{id:x.DIAMOND_ORE,isBlock:!0,count:Math.random()<.3?1:0},{id:x.TORCH,isBlock:!0,count:2+Math.floor(Math.random()*4)},{id:x.PLANKS,isBlock:!0,count:4+Math.floor(Math.random()*8)},{id:q.BREAD,isBlock:!1,count:Math.floor(Math.random()*4)},{id:q.IRON_INGOT,isBlock:!1,count:Math.floor(Math.random()*3)},{id:q.ARROW,isBlock:!1,count:Math.floor(Math.random()*8)}];this.chestStorage[t]=r.filter(a=>a.count>0)}const s=this.chestStorage[t];for(const r of s)r.isBlock?e.addBlock(r.id,r.count):e.addItem(r.id,r.count);ze.pickup(),this.chestStorage[t]=[],n.updateHotbar()}_openTrade(){this.tradeOpen||(this.tradeOpen=!0,document.exitPointerLock(),this.player.mouseLocked=!1,this._tradeScreen.classList.remove("hidden"),this._buildTradeUI())}_closeTrade(){this.tradeOpen=!1,this._tradeScreen.classList.add("hidden"),this.renderer.domElement.requestPointerLock()}_buildTradeUI(){var t,e,n,s;if(this._tradeList){this._tradeList.innerHTML="";for(let r=0;r<vc.length;r++){const a=vc[r],o=a.costIsBlock?((t=yn[a.costId])==null?void 0:t.name)||"?":((e=xe[a.costId])==null?void 0:e.name)||"?",l=a.resultIsBlock?((n=yn[a.resultId])==null?void 0:n.name)||"?":((s=xe[a.resultId])==null?void 0:s.name)||"?",c=this._canAffordTrade(a),h=document.createElement("div");h.className="trade-row"+(c?"":" disabled"),h.innerHTML=`<span>${a.costCount}× ${o}</span><span class="trade-arrow">→</span><span>${a.resultCount}× ${l}</span>`,c&&h.addEventListener("click",()=>{this._executeTrade(a),this._buildTradeUI()}),this._tradeList.appendChild(h)}}}_canAffordTrade(t){let e=0;for(let n=0;n<this.inventory.size;n++){const s=this.inventory.slots[n];s&&s.id===t.costId&&s.isBlock===t.costIsBlock&&(e+=s.count)}return e>=t.costCount}_executeTrade(t){let e=t.costCount;for(let n=0;n<this.inventory.size&&e>0;n++){const s=this.inventory.slots[n];if(s&&s.id===t.costId&&s.isBlock===t.costIsBlock){const r=Math.min(s.count,e);s.count-=r,e-=r,s.count<=0&&(this.inventory.slots[n]=null)}}t.resultIsBlock?this.inventory.addBlock(t.resultId,t.resultCount):this.inventory.addItem(t.resultId,t.resultCount),ze.trade(),this.ui.updateHotbar()}_trySpawnVillageNPCs(){const t=this.player.position.x,e=this.player.position.z,n=Math.floor(t/z),s=Math.floor(e/z),r=3;for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++){const l=n+a,c=s+o,h=`${l},${c}`;if(this.mobs._npcSpawnedChunks.has(h))continue;this.mobs._npcSpawnedChunks.add(h);const u=l*z+8,d=c*z+8,p=this.world.generator.getBiome(u,d);if(p!==At.PLAINS&&p!==At.SAVANNA)continue;this.world.generator.structureNoise.noise2D(u*.008,d*.008)>.55&&this.mobs.spawnNPC(u,d)}}_checkNPCInteraction(){for(const t of this.mobs.mobs){if(!t.alive||!t.isNPC)continue;if(this.player.position.distanceTo(t.position)<3.5)return!0}return!1}_spawnHouse(){const t=Math.floor(this.player.position.x),e=Math.floor(this.player.position.y),n=Math.floor(this.player.position.z),s=Math.round(-Math.sin(this.player.yaw)),r=Math.round(-Math.cos(this.player.yaw)),a=t+s*5,o=e-1,l=n+r*5,c=x,h=this.world,u=(f,T,E,A)=>h.setBlock(a+f,o+T,l+E,A),d=(f,T,E,A,D,w,R)=>{for(let X=f;X<=A;X++)for(let S=T;S<=D;S++)for(let b=E;b<=w;b++)u(X,S,b,R)},p=20,_=6,g=15;d(-1,0,-1,p+1,_+3,g+1,c.AIR),d(0,0,0,p,0,g,c.STONE_BRICK),d(1,1,1,p-1,1,g-1,c.PLANKS),d(0,1,0,p,_,0,c.STONE_BRICK),d(0,1,g,p,_,g,c.STONE_BRICK),d(0,1,0,0,_,g,c.STONE_BRICK),d(p,1,0,p,_,g,c.STONE_BRICK),d(0,_+1,0,p,_+1,g,c.SPRUCE_WOOD);for(let f=0;f<=3;f++)d(f,_+2,0,p-f,_+2,g,f<3?c.SPRUCE_WOOD:c.AIR);const m=Math.floor(p/2);u(m,2,0,c.DOOR),u(m,3,0,c.AIR),u(m,4,0,c.AIR),d(m-2,_+1,-1,m+2,_+1,-1,c.PLANKS),u(m-2,_,-1,c.TORCH),u(m+2,_,-1,c.TORCH),u(m,1,-1,c.WOOL);for(let f of[3,5,p-5,p-3])u(f,3,0,c.GLASS),u(f,4,0,c.GLASS);for(let f of[3,7,11])u(0,3,f,c.GLASS),u(0,4,f,c.GLASS),u(p,3,f,c.GLASS),u(p,4,f,c.GLASS);for(let f of[4,8,12,16])u(f,3,g,c.GLASS),u(f,4,g,c.GLASS);d(1,2,8,p-1,_,8,c.PLANKS),u(m,2,8,c.AIR),u(m,3,8,c.AIR),u(m,4,8,c.AIR),u(5,2,8,c.AIR),u(5,3,8,c.AIR),u(15,2,8,c.AIR),u(15,3,8,c.AIR),d(10,2,1,10,_,7,c.PLANKS),u(10,2,4,c.AIR),u(10,3,4,c.AIR),d(10,2,9,10,_,g-1,c.PLANKS),u(10,2,11,c.AIR),u(10,3,11,c.AIR);for(let f of[3,7,13,17])for(let T of[4,12])u(f,_,T,c.GLOWSTONE);d(2,1,2,8,1,6,c.WOOL),d(1,2,6,4,2,6,c.PLANKS),d(1,3,7,4,3,7,c.WOOL),u(3,2,4,c.PLANKS),u(1,2,1,c.COBBLESTONE),u(1,3,1,c.COBBLESTONE),u(1,4,1,c.COBBLESTONE),u(1,2,2,c.TORCH),u(1,2,5,c.BOOKSHELF),u(1,3,5,c.BOOKSHELF),d(11,2,1,15,2,1,c.COBBLESTONE),u(13,2,1,c.FURNACE),u(15,2,1,c.CRAFTING_TABLE),u(12,2,1,c.WATER),d(13,2,4,15,2,4,c.PLANKS),u(p-1,2,1,c.CHEST),u(p-1,2,2,c.CHEST),u(14,_,3,c.GLOWSTONE),d(1,2,10,2,2,11,c.PLANKS),d(1,3,10,2,3,11,c.WOOL),d(1,2,13,2,2,14,c.PLANKS),d(1,3,13,2,3,14,c.WOOL),u(3,2,10,c.PLANKS),u(3,3,10,c.TORCH),d(8,2,g-1,9,4,g-1,c.PLANKS),d(3,1,10,8,1,13,c.WOOL),d(11,2,g-1,18,2,g-1,c.BOOKSHELF),d(11,3,g-1,18,3,g-1,c.BOOKSHELF),d(11,4,g-1,18,4,g-1,c.BOOKSHELF),d(p-1,2,9,p-1,4,13,c.BOOKSHELF),u(14,2,11,c.CRAFTING_TABLE),u(15,2,11,c.PLANKS),u(14,2,12,c.PLANKS),u(12,2,9,c.TORCH),u(16,2,12,c.DIAMOND_BLOCK),d(-3,1,-1,-1,1,-1,c.FENCE),d(p+1,1,-1,p+3,1,-1,c.FENCE),d(-3,1,-1,-3,1,-5,c.FENCE),d(p+3,1,-1,p+3,1,-5,c.FENCE),d(-3,1,-5,p+3,1,-5,c.FENCE),d(-2,0,-2,p+2,0,-4,c.GRASS);for(let f=-1;f<=p+1;f+=3)u(f,1,-3,c.LEAVES),u(f+1,1,-4,c.BIRCH_LEAVES);u(-2,2,-2,c.TORCH),u(p+2,2,-2,c.TORCH),d(m-1,0,-1,m+1,0,-4,c.COBBLESTONE),d(3,0,g+2,p-3,0,g+8,c.QUARTZ),d(4,-1,g+3,p-4,-1,g+7,c.QUARTZ),d(4,-2,g+3,p-4,-2,g+7,c.QUARTZ),d(5,-3,g+4,p-5,-3,g+6,c.PRISMARINE),d(5,-2,g+4,p-5,-2,g+6,c.PRISMARINE);for(let f=-2;f<=-1;f++)d(4,f,g+3,p-4,f,g+3,c.QUARTZ),d(4,f,g+7,p-4,f,g+7,c.QUARTZ),d(4,f,g+3,4,f,g+7,c.QUARTZ),d(p-4,f,g+3,p-4,f,g+7,c.QUARTZ);d(5,-1,g+4,p-5,-1,g+6,c.WATER),d(5,0,g+4,p-5,0,g+6,c.WATER),u(3,1,g+3,c.PLANKS),u(3,1,g+5,c.PLANKS),u(p-3,1,g+3,c.PLANKS),u(p-3,1,g+5,c.PLANKS),u(6,-3,g+5,c.SEA_LANTERN),u(p-6,-3,g+5,c.SEA_LANTERN),d(2,1,g+1,p-2,1,g+1,c.FENCE),u(m,1,g+1,c.AIR),u(m,2,g,c.DOOR),u(m,3,g,c.AIR),u(m,4,g,c.AIR);for(let f=0;f<5;f++)u(9,2+f,9+f,c.COBBLESTONE)}start(t){this.coopMode=t,document.getElementById("start-screen").style.display="none",this.running=!0,this.touch.isMobile||this.renderer.domElement.requestPointerLock();const e=this.world.getSpawnPoint();this.player.spawn(e),this.coopMode&&(this.camera.aspect=window.innerWidth/2/window.innerHeight,this.camera.updateProjectionMatrix(),this.camera2.aspect=window.innerWidth/2/window.innerHeight,this.camera2.updateProjectionMatrix(),this.renderer.setScissorTest(!0),this._initPlayer2(),this.player2.spawn({x:e.x+2,y:e.y,z:e.z+2}),document.getElementById("split-divider").style.display="block",document.getElementById("p2-hud").style.display="block",document.body.classList.add("coop-mode"),this.ui2.show(),this.ui2.updateHotbar(),this.ui2.updateHealth(this.player2.health)),this.ui.show(),this.ui.updateHotbar(),this.ui.updateHealth(this.player.health),this.touch.show(),this.touch.isMobile&&(this.player.mouseLocked=!0),this.lastTime=performance.now(),this._loop()}_loop(){if(!this.running)return;requestAnimationFrame(()=>this._loop());const t=performance.now(),e=Math.min((t-this.lastTime)/1e3,.1);this.lastTime=t,this.frameCount++,this.fpsTime+=e,this.fpsTime>=1&&(this.fps=Math.round(this.frameCount/this.fpsTime),this.frameCount=0,this.fpsTime=0),this._cheatTimer>0&&(this._cheatTimer-=e,this._cheatTimer<=0&&(this._cheatBuffer="")),this.touch.isMobile&&this.touch.applyToPlayer(this.player),!this.ui.inventoryOpen&&!this.tradeOpen&&this.player.update(e),this.player.characterModel.setHeldItem(this.inventory.getHeldSlot()),this.touch.isMobile&&this._handleTouchActions(e),this._updateMining(e),this._updatePlacing(e),this._handleGamepadActions(this.player,this.inventory,this.ui),this.coopMode&&this.player2&&(this.ui2.inventoryOpen||this.player2.update(e),this.player2.characterModel.setHeldItem(this.inventory2.getHeldSlot()),this._handleGamepadActions(this.player2,this.inventory2,this.ui2)),this.dayNight.update(e),this.mobs.update(e,this.player.position,this.dayNight.isNight,this.camera),this.mobs.updateProjectiles(e,this.player.position);const n=this.mobs.getPlayerDamage(),s=this.mobs.getExplosionDamage();n+s>0&&!this.player.creativeMode&&(this.player.takeDamage(n+s),ze.playerHurt()),s>0&&ze.explosion();let r=0;for(let h=this.mobs.projectiles.length-1;h>=0;h--)this.mobs.projectiles[h]._hitPlayer&&(r+=this.mobs.projectiles[h]._hitPlayer,this.mobs.projectiles.splice(h,1));r>0&&!this.player.creativeMode&&(this.player.takeDamage(r),ze.playerHurt());const a=this.mobs.collectDrops();for(const h of a)this.inventory.addItem(h.id,h.count);a.length>0&&(ze.pickup(),this.ui.updateHotbar()),this.particles.update(e),this._updatePlayerArrows(e),this.inventory.updateFurnace(e),this.ui.furnaceOpen&&this.ui.updateFurnaceUI(),this.coopMode&&this.player2&&this._applyMobDamageToP2();const o=this.coopMode&&this.player2?[{x:this.player2.position.x,z:this.player2.position.z}]:void 0;this.world.update(this.player.position.x,this.player.position.z,o),this._trySpawnVillageNPCs(),this.ui.updateHealth(this.player.health),this.ui.updateHunger(this.player.hunger),this.ui.updateTimeDisplay(this.dayNight);const l=this.player.getDebugInfo();l.fps=this.fps,l.hunger=this.player.hunger,l.time=this.dayNight.getTimeString(),l.day=this.dayNight.dayCount,l.period=this.dayNight.isNight?"Night":this.dayNight.isDawn?"Dawn":this.dayNight.isDusk?"Dusk":"Day";const c=this.mobs.getMobCount();if(l.mobs=`${c.monsters}M / ${c.animals}A`,l.mode=this.player.creativeMode?"Creative":"Survival",this.ui.updateDebug(l),this.ui.updateArmorSlots(this.player.armorSlots),this.frameCount%10===0&&this.ui.updateMinimap(this.player.position,this.world.generator),this.coopMode&&this.player2&&this.ui2){this.ui2.updateHealth(this.player2.health),this.ui2.updateHunger(this.player2.hunger);const h=this.player2.getDebugInfo();h.fps=this.fps,h.time=this.dayNight.getTimeString(),h.day=this.dayNight.dayCount,h.period=l.period,h.mobs=l.mobs,this.ui2.updateDebug(h)}if(this.player.health<=0&&!this.player.creativeMode){const h=this.world.getSpawnPoint();this.player.spawn(h),this.player.hunger=this.player.maxHunger,this.ui.updateHealth(this.player.health)}if(this.coopMode&&this.player2&&this.player2.health<=0){const h=this.world.getSpawnPoint();this.player2.spawn({x:h.x+2,y:h.y,z:h.z+2}),this.player2.hunger=this.player2.maxHunger,this.ui2.updateHealth(this.player2.health)}if(this.coopMode){const h=window.innerWidth,u=window.innerHeight,d=Math.floor(h/2);this.player.characterModel.setFirstPerson(!0),this.player2&&this.player2.characterModel.setFirstPerson(!1),this.renderer.setViewport(0,0,d,u),this.renderer.setScissor(0,0,d,u),this.renderer.render(this.scene,this.camera),this.player.characterModel.setFirstPerson(!1),this.player2&&this.player2.characterModel.setFirstPerson(!0),this.renderer.setViewport(d,0,h-d,u),this.renderer.setScissor(d,0,h-d,u),this.renderer.render(this.scene,this.camera2)}else this.player.characterModel.setFirstPerson(!this.player.thirdPerson),this.renderer.render(this.scene,this.camera)}_handleGamepadActions(t,e,n){if(t.gpPressed("_gp_attack")){t.characterModel.triggerPunch(),ze.hit();const s=t.position.clone();s.y+=1.5,sn.set(0,0,-1).applyQuaternion(t.camera.quaternion);const r=e.getHeldSlot();if(r&&!r.isBlock&&xe[r.id]&&xe[r.id].toolType===ae.BOW)this._shootBow(t,e,n);else{const a=Gs(r);this.mobs.playerAttack(s,sn,a)?e.damageHeldTool():this._breakBlock(t,e,n)}}if(t.gpPressed("_gp_place")&&this._handleRightClick(t,e,n),t.gpPressed("_gp_drop")&&(e.dropHeldItem(),n.updateHotbar()),t.gpPressed("_gp_inventory")){const s=n.toggleInventory();t===this.player&&(s?(document.exitPointerLock(),t.mouseLocked=!1):this.renderer.domElement.requestPointerLock())}if(t.gpPressed("_gp_camera")&&(t.thirdPerson=!t.thirdPerson),t.gpPressed("_gp_creative")&&(t.creativeMode=!t.creativeMode,t.creativeMode&&(t.health=t.maxHealth,t.hunger=t.maxHunger)),t.gpPressed("_gp_hotbar_right")){let s=e.selectedSlot+1;s>=e.hotbarSize&&(s=0),e.selectSlot(s),n.updateHotbar()}if(t.gpPressed("_gp_hotbar_left")){let s=e.selectedSlot-1;s<0&&(s=e.hotbarSize-1),e.selectSlot(s),n.updateHotbar()}}_applyMobDamageToP2(){for(const t of this.mobs.mobs)!t.alive||t.category!==0||(sn.subVectors(this.player2.position,t.position),sn.length()<1.5&&t.attackCooldown<=0&&(this.player2.takeDamage(t.type.damage),t.attackCooldown=1))}_handleTouchActions(t){const e=this.touch;if(e.consumeAttack()){this.player.characterModel.triggerPunch(),ze.hit();const s=this.player.position.clone();s.y+=1.5,sn.set(0,0,-1).applyQuaternion(this.camera.quaternion);const r=this.inventory.getHeldSlot();if(r&&!r.isBlock&&xe[r.id]&&xe[r.id].toolType===ae.BOW)this._shootBow(this.player,this.inventory,this.ui);else{const a=Gs(r);this.mobs.playerAttack(s,sn,a)?this.inventory.damageHeldTool():this.breaking=!0}}!e.attackHeld&&this.breaking&&(this.breaking=!1,this.breakProgress=0,this.breakTarget=null,this._breakProgressEl&&(this._breakProgressEl.style.display="none")),e.consumePlace()&&this._handleRightClick(this.player,this.inventory,this.ui),e.consumeInventory()&&this.ui.toggleInventory();const n=e.consumeHotbarDelta();if(n!==0){let s=this.inventory.selectedSlot+n;s<0&&(s=this.inventory.hotbarSize-1),s>=this.inventory.hotbarSize&&(s=0),this.inventory.selectSlot(s),this.ui.updateHotbar()}}}new c0;
