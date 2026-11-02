import{C as ze,D as Qu,E as ju,F as pr,H as td,I as Ko,a as us,b as ds,f as Gu,h as wi,i as Vu,j as Wu,k as Xu,l as $o,m as qu,n as Yu,o as fs,p as $u,q as ps,r as Zu,s as Zo,t as Jo,u as Ju,v as Hc,w as Gc,x as Ku,y as fr,z as Vc}from"./lightwake-RKJFKDMV.js";var Od=0,Ah=1,Bd=2;var uo=1,kd=2,$s=3,Kn=0,Ne=1,We=2,gi=0,Zs=1,fn=2,Rh=3,Ch=4,cl=5;var Qi=100,zd=101,Hd=102,Gd=103,hl=104,Vd=200,Wd=201,Xd=202,qd=203,Ph=204,Ih=205,Yd=206,$d=207,Zd=208,Jd=209,Kd=210,Qd=211,jd=212,tf=213,ef=214,Ra=0,Ca=1,Pa=2,Ns=3,Ia=4,La=5,Da=6,Na=7,ul=0,nf=1,sf=2,Qn=0,fo=1,po=2,mo=3,ji=4,go=5,xo=6,_o=7;var Lh=300,ts=301,Js=302,dl=303,fl=304,Ua=1e3,$n=1001,Fa=1002,Re=1003,rf=1004;var vo=1005;var hn=1006,pl=1007;var xi=1008;var je=1009,Dh=1010,Nh=1011,Ks=1012,ml=1013,Hn=1014,Rn=1015,Ce=1016,gl=1017,xl=1018,es=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,Gn=1023,di=1026,_i=1027,Qs=1028,_l=1029,Fi=1030,vl=1031;var yl=1033,yo=33776,Mo=33777,So=33778,bo=33779,Ml=35840,Sl=35841,bl=35842,Tl=35843,wl=36196,El=37492,Al=37496,Rl=37488,Cl=37489,To=37490,Pl=37491,Il=37808,Ll=37809,Dl=37810,Nl=37811,Ul=37812,Fl=37813,Ol=37814,Bl=37815,kl=37816,zl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,$l=36283,Zl=36284,wo=36285,Jl=36286;var Rr=2300,Oa=2301,Ea=2302,gh=2303,xh=2400,_h=2401,vh=2402;var of=3200;var Eo=0,af=1,vi="",ln="srgb",Cr="srgb-linear",Pr="linear",ue="srgb";var Aa=7680;var lf=519,cf=512,hf=513,uf=514,kh=515,df=516,ff=517,zh=518,Hh=519,Gh=35044,Cn=35048;var Vh="300 es",Tn=2e3,Us=2001;function Tm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){let i=Ir("canvas");return i.style.display="block",i}var ed={},Fs=null;function Lr(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function mf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=mf(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=mf(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wr(...i){let t=i.join(" ");t in ed||(ed[t]=!0,Ht(...i))}function gf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xf={[Ra]:Ra,[Pa]:Da,[Ia]:Ia,[Ns]:La,[Ca]:Ca,[Da]:Pa,[Na]:Na,[La]:Ns},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wc=Math.PI/180,Ba=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Em(i,t){return(i%t+t)%t}function Xc(i,t,e){return(1-e)*i+e*t}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vf(i,t){if(t.constructor===Float32Array)return i;let e=Kl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function yf(i,t){if(t.constructor===Float32Array)return i;let e=Kl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var st=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(h!==v||l!==d||c!==f||u!==m){let p=l*d+c*f+u*m+h*v;p<0&&(d=-d,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),T=Math.sin(M);g=Math.sin(g*M)/T,a=Math.sin(a*M)/T,l=l*g+d*a,c=c*g+f*a,u=u*g+m*a,h=h*g+v*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+m*a,h=h*g+v*a;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qc.copy(this).projectOnVector(t),this.sub(qc)}reflect(t){return this.sub(qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new C,nd=new un,Wt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],v=s[0],p=s[3],g=s[6],M=s[1],T=s[4],y=s[7],E=s[2],w=s[5],x=s[8];return r[0]=o*v+a*M+l*E,r[3]=o*p+a*T+l*w,r[6]=o*g+a*y+l*x,r[1]=c*v+u*M+h*E,r[4]=c*p+u*T+h*w,r[7]=c*g+u*y+h*x,r[2]=d*v+f*M+m*E,r[5]=d*p+f*T+m*w,r[8]=d*g+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=e*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new Wt,id=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:id,fromXYZ:sd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:id,fromXYZ:sd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var ee=Am();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=Ir("canvas")),ms.width=t.width,ms.height=t.height;let s=ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rm=0,Os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($c(s[o].image)):r.push($c(s[o]))}else r=$c(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Cm=0,Zc=new C,dn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=hn,o=xi,a=Gn,l=je,c=i.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Oi(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Lh;dn.DEFAULT_ANISOTROPY=1;var _e=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,E=(g+1)/2,w=(u+d)/4,x=(h+v)/4,b=(m+p)/4;return T>y&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=x/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Se=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Dr=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $t=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,v,p)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,v,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,m=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,v=c*h;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*h,m=a*u,v=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-v*h}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Im)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ei.crossVectors(n,gn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ei.crossVectors(n,gn)),Ei.normalize(),Qo.crossVectors(gn,Ei),s[0]=Ei.x,s[4]=Qo.x,s[8]=gn.x,s[1]=Ei.y,s[5]=Qo.y,s[9]=gn.y,s[2]=Ei.z,s[6]=Qo.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],M=n[3],T=n[7],y=n[11],E=n[15],w=s[0],x=s[4],b=s[8],D=s[12],R=s[1],U=s[5],O=s[9],X=s[13],I=s[2],q=s[6],Z=s[10],L=s[14],$=s[3],B=s[7],k=s[11],W=s[15];return r[0]=o*w+a*R+l*I+c*$,r[4]=o*x+a*U+l*q+c*B,r[8]=o*b+a*O+l*Z+c*k,r[12]=o*D+a*X+l*L+c*W,r[1]=u*w+h*R+d*I+f*$,r[5]=u*x+h*U+d*q+f*B,r[9]=u*b+h*O+d*Z+f*k,r[13]=u*D+h*X+d*L+f*W,r[2]=m*w+v*R+p*I+g*$,r[6]=m*x+v*U+p*q+g*B,r[10]=m*b+v*O+p*Z+g*k,r[14]=m*D+v*X+p*L+g*W,r[3]=M*w+T*R+y*I+E*$,r[7]=M*x+T*U+y*q+E*B,r[11]=M*b+T*O+y*Z+E*k,r[15]=M*D+T*X+y*L+E*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15],M=l*f-c*d,T=a*f-c*h,y=a*d-l*h,E=o*f-c*u,w=o*d-l*u,x=o*h-a*u;return e*(v*M-p*T+g*y)-n*(m*M-p*E+g*w)+s*(m*T-v*E+g*x)-r*(m*y-v*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],M=e*a-n*o,T=e*l-s*o,y=e*c-r*o,E=n*l-s*a,w=n*c-r*a,x=s*c-r*l,b=u*v-h*m,D=u*p-d*m,R=u*g-f*m,U=h*p-d*v,O=h*g-f*v,X=d*g-f*p,I=M*X-T*O+y*U+E*R-w*D+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return t[0]=(a*X-l*O+c*U)*q,t[1]=(s*O-n*X-r*U)*q,t[2]=(v*x-p*w+g*E)*q,t[3]=(d*w-h*x-f*E)*q,t[4]=(l*R-o*X-c*D)*q,t[5]=(e*X-s*R+r*D)*q,t[6]=(p*y-m*x-g*T)*q,t[7]=(u*x-d*y+f*T)*q,t[8]=(o*O-a*R+c*b)*q,t[9]=(n*R-e*O-r*b)*q,t[10]=(m*w-v*y+g*M)*q,t[11]=(h*y-u*w-f*M)*q,t[12]=(a*D-o*U-l*b)*q,t[13]=(e*U-n*D+s*b)*q,t[14]=(v*T-m*E-p*M)*q,t[15]=(u*E-h*T+d*M)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,v=o*u,p=o*h,g=a*h,M=l*c,T=l*u,y=l*h,E=n.x,w=n.y,x=n.z;return s[0]=(1-(v+g))*E,s[1]=(f+y)*E,s[2]=(m-T)*E,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+g))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(m+T)*x,s[9]=(p-M)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);let c=1/o,u=1/a,h=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Tn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Us)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Tn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Us)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new C,Un=new $t,Pm=new C(0,0,0),Im=new C(1,1,1),Ei=new C,Qo=new C,gn=new C,rd=new $t,od=new un,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return od.setFromEuler(this),this.setFromQuaternion(od,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lm=0,ad=new C,xs=new un,ri=new $t,jo=new C,mr=new C,Dm=new C,Nm=new un,ld=new C(1,0,0),cd=new C(0,1,0),hd=new C(0,0,1),ud={type:"added"},Um={type:"removed"},_s={type:"childadded",child:null},Jc={type:"childremoved",child:null},Ge=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new wn,n=new un,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Wt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(ld,t)}rotateY(t){return this.rotateOnAxis(cd,t)}rotateZ(t){return this.rotateOnAxis(hd,t)}translateOnAxis(t,e){return ad.copy(t).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ld,t)}translateY(t){return this.translateOnAxis(cd,t)}translateZ(t){return this.translateOnAxis(hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jo.copy(t):jo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(mr,jo,this.up):ri.lookAt(jo,mr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ri),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ud),_s.child=t,this.dispatchEvent(_s),_s.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Um),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ud),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new C(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fm={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Kc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Em(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Kc(o,r,t+1/3),this.g=Kc(o,r,t),this.b=Kc(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ee.workingToColorSpace(Ke.copy(this),t),Math.round(se(Ke.r*255,0,255))*65536+Math.round(se(Ke.g*255,0,255))*256+Math.round(se(Ke.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=ln){ee.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(ta);let n=Xc(Ai.h,ta.h,e),s=Xc(Ai.s,ta.s,e),r=Xc(Ai.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new bt;bt.NAMES=Mf;var Ur=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yi=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new C,oi=new C,Qc=new C,ai=new C,vs=new C,ys=new C,dd=new C,jc=new C,th=new C,eh=new C,nh=new _e,ih=new _e,sh=new _e,hi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),oi.subVectors(n,e),Qc.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(oi),l=Fn.dot(Qc),c=oi.dot(oi),u=oi.dot(Qc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return nh.setScalar(0),ih.setScalar(0),sh.setScalar(0),nh.fromBufferAttribute(t,e),ih.fromBufferAttribute(t,n),sh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(nh,r.x),o.addScaledVector(ih,r.y),o.addScaledVector(sh,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),oi.subVectors(t,e),Fn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),jc.subVectors(t,n);let l=vs.dot(jc),c=ys.dot(jc);if(l<=0&&c<=0)return e.copy(n);th.subVectors(t,s);let u=vs.dot(th),h=ys.dot(th);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(vs,o);eh.subVectors(t,r);let f=vs.dot(eh),m=ys.dot(eh);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ys,a);let p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return dd.subVectors(r,s),a=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(dd,a);let g=1/(p+v+d);return o=v*g,a=d*g,e.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),na.subVectors(this.max,gr),Ms.subVectors(t.a,gr),Ss.subVectors(t.b,gr),bs.subVectors(t.c,gr),Ri.subVectors(Ss,Ms),Ci.subVectors(bs,Ss),Gi.subVectors(Ms,bs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Gi.z,Gi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Gi.z,0,-Gi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Gi.y,Gi.x,0];return!rh(e,Ms,Ss,bs,na)||(e=[1,0,0,0,1,0,0,0,1],!rh(e,Ms,Ss,bs,na))?!1:(ia.crossVectors(Ri,Ci),e=[ia.x,ia.y,ia.z],rh(e,Ms,Ss,bs,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new C,new C,new C,new C,new C,new C,new C,new C],On=new C,ea=new Jn,Ms=new C,Ss=new C,bs=new C,Ri=new C,Ci=new C,Gi=new C,gr=new C,na=new C,ia=new C,Vi=new C;function rh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new C,sa=new st,Om=0,Ae=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?Kl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):yf(t,this.array)}};var Fr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Or=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bm=new Jn,xr=new C,oh=new C,fi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(oh)),this.expandByPoint(xr.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},km=0,bn=new $t,ah=new Ge,Ts=new C,xn=new Jn,_r=new Jn,He=new C,fe=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?Or:Fr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return ah.lookAt(t),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(xn.min,_r.min),xn.expandByPoint(He),He.addVectors(xn.max,_r.max),xn.expandByPoint(He)):(xn.expandByPoint(_r.min),xn.expandByPoint(_r.max))}xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)He.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),He.add(Ts)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new C,l[D]=new C;let u=new C,h=new C,d=new C,f=new st,m=new st,v=new st,p=new C,g=new C;function M(D,R,U){c[D]=c[R]=c[U]=1,u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,R),v.fromBufferAttribute(r,U),h.sub(u),d.sub(u),m.sub(f),v.sub(f);let O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(p.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(O),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(O),a[D].add(p),a[R].add(p),a[U].add(p),l[D].add(g),l[R].add(g),l[U].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,R=T.length;D<R;++D){let U=T[D],O=U.start,X=U.count;for(let I=O,q=O+X;I<q;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new C,E=new C,w=new C,x=new C;function b(D){w.fromBufferAttribute(s,D),x.copy(w);let R=a[D];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),E.crossVectors(x,R);let O=E.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,O)}for(let D=0,R=n.count;D<R;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new Ae(d,u,h)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var an=new C,Br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Kl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):yf(t,this.data.array)}},lh=new C,zm=new C,Hm=new Wt,_n=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=lh.subVectors(n,e).cross(zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(lh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hm.getNormalMatrix(t),s=this.coplanarPoint(lh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gm=0,Bn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Zs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ks=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ws,vr=new C,Es=new C,As=new C,Rs=new st,yr=new st,Sf=new $t,ra=new C,Mr=new C,oa=new C,pd=new st,ch=new st,md=new st,kr=class extends Ge{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ga(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Br(n,3,0,!1)),ws.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Sf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;aa(ra.set(-.5,-.5,0),As,o,Es,s,r),aa(Mr.set(.5,-.5,0),As,o,Es,s,r),aa(oa.set(.5,.5,0),As,o,Es,s,r),pd.set(0,0),ch.set(1,0),md.set(1,1);let a=t.ray.intersectTriangle(ra,Mr,oa,!1,vr);if(a===null&&(aa(Mr.set(-.5,.5,0),As,o,Es,s,r),ch.set(0,1),a=t.ray.intersectTriangle(ra,oa,Mr,!1,vr),a===null))return;let l=t.ray.origin.distanceTo(vr);l<t.near||l>t.far||e.push({distance:l,point:vr.clone(),uv:hi.getInterpolation(vr,ra,Mr,oa,pd,ch,md,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function aa(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(yr.x=r*Rs.x-s*Rs.y,yr.y=s*Rs.x+r*Rs.y):yr.copy(Rs),i.copy(t),i.x+=yr.x,i.y+=yr.y,i.applyMatrix4(Sf)}var ci=new C,hh=new C,la=new C,ca=new C,zr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hh.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(hh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=ca.dot(this.direction),l=-ca.dot(la),c=ca.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hh).addScaledVector(la,d),f}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,v=e.y-o.y,p=e.z-o.z,g=n.x-o.x,M=n.y-o.y,T=n.z-o.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(u),x,b,D,R,U,O,X,I,q,Z,L,$;if(y>=E&&y>=w?(D=l,O=h,q=m,$=g,l>=0?(x=c,b=u,R=d,U=f,X=v,I=p,Z=M,L=T):(x=u,b=c,R=f,U=d,X=p,I=v,Z=T,L=M)):E>=w?(D=c,O=d,q=v,$=M,c>=0?(x=u,b=l,R=f,U=h,X=p,I=m,Z=T,L=g):(x=l,b=u,R=h,U=f,X=m,I=p,Z=g,L=T)):(D=u,O=f,q=p,$=T,u>=0?(x=l,b=c,R=h,U=d,X=m,I=v,Z=g,L=M):(x=c,b=l,R=d,U=h,X=v,I=m,Z=M,L=g)),D===0)return null;let B=x/D,k=b/D,W=1/D,et=R-B*O,lt=U-k*O,z=X-B*q,at=I-k*q,ut=Z-B*$,At=L-k*$,rt=ut*at-At*z,Ot=et*At-lt*ut,ye=z*lt-at*et;if(s){if(rt<0||Ot<0||ye<0)return null}else if((rt<0||Ot<0||ye<0)&&(rt>0||Ot>0||ye>0))return null;let zt=rt+Ot+ye;if(zt===0)return null;let jt=W*(rt*O+Ot*q+ye*$);return(zt>0?jt<0:jt>0)?null:this.at(jt/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gd=new $t,Wi=new zr,ha=new fi,xd=new C,ua=new C,da=new C,fa=new C,uh=new C,pa=new C,_d=new C,ma=new C,Zt=class extends Ge{constructor(t=new fe,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(uh.fromBufferAttribute(h,t),o?pa.addScaledVector(uh,u):pa.addScaledVector(uh.sub(e),u))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(ha.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ha,xd)===null||Wi.origin.distanceToSquared(xd)>(t.far-t.near)**2))&&(gd.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(gd),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,E=T;y<E;y+=3){let w=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);s=ga(this,g,t,n,c,u,h,w,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let M=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);s=ga(this,o,t,n,c,u,h,M,T,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,E=T;y<E;y+=3){let w=y,x=y+1,b=y+2;s=ga(this,g,t,n,c,u,h,w,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let M=p,T=p+1,y=p+2;s=ga(this,o,t,n,c,u,h,M,T,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Vm(i,t,e,n,s,r,o,a){let l;if(t.side===Ne?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Kn,a),l===null)return null;ma.copy(a),ma.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ma);return c<e.near||c>e.far?null:{distance:c,point:ma.clone(),object:i}}function ga(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ua),i.getVertexPosition(l,da),i.getVertexPosition(c,fa);let u=Vm(i,t,e,n,ua,da,fa,_d);if(u){let h=new C;hi.getBarycoord(_d,ua,da,fa,h),s&&(u.uv=hi.getInterpolatedAttribute(s,a,l,c,h,new st)),r&&(u.uv1=hi.getInterpolatedAttribute(r,a,l,c,h,new st)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};hi.getNormal(ua,da,fa,d.normal),u.face=d,u.barycoord=h}return u}var $i=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Re,u=Re,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new $t,vd=new $t,xa=[],yd=new Jn,Wm=new $t,Sr=new Zt,br=new fi,Ve=class extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new En(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),yd.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),br.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),vd.multiplyMatrices(n,Cs),Sr.matrixWorld=vd,Sr.raycast(t,xa);for(let o=0,a=xa.length;o<a;o++){let l=xa[o];l.instanceId=r,l.object=this,e.push(l)}xa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new En(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,Qs,Rn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new fi,Xm=new st(.5,.5),_a=new C,Ii=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],M=r[12],T=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,f-u,g-m,E-M).normalize(),s[1].setComponents(c+o,f+u,g+m,E+M).normalize(),s[2].setComponents(c+a,f+h,g+v,E+T).normalize(),s[3].setComponents(c-a,f-h,g-v,E-T).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,g-p,E-y).normalize();else if(s[4].setComponents(c-l,f-d,g-p,E-y).normalize(),e===Tn)s[5].setComponents(c+l,f+d,g+p,E+y).normalize();else if(e===Us)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Xm.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_a.x=s.normal.x>0?t.max.x:t.min.x,_a.y=s.normal.y>0?t.max.y:t.min.y,_a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Md=new $t,Va=class i{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Md.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ii),n[s].setFromProjectionMatrix(Md,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ii),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Li=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sd=new $t,yh=new zr,va=new fi,ya=new C,Zi=class extends Ge{constructor(t=new fe,e=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Sd.copy(s).invert(),yh.copy(t.ray).applyMatrix4(Sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let p=c.getX(m);ya.fromBufferAttribute(h,p),bd(ya,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,v=f;m<v;m++)ya.fromBufferAttribute(h,m),bd(ya,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bd(i,t,e,n,s,r,o){let a=yh.distanceSqToPoint(i);if(a<e){let l=new C;yh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hr=class extends dn{constructor(t=[],e=ts,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gr=class extends dn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends dn{constructor(t,e,n=Hn,s,r,o,a=Re,l=Re,c,u=di,h=1){if(u!==di&&u!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vr=class extends pi{constructor(t,e=Hn,n=ts,s,r,o=Re,a=Re,l,c=di){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},we=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function m(v,p,g,M,T,y,E,w,x,b,D){let R=y/x,U=E/b,O=y/2,X=E/2,I=w/2,q=x+1,Z=b+1,L=0,$=0,B=new C;for(let k=0;k<Z;k++){let W=k*U-X;for(let et=0;et<q;et++){let lt=et*R-O;B[v]=lt*M,B[p]=W*T,B[g]=I,c.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[g]=w>0?1:-1,u.push(B.x,B.y,B.z),h.push(et/x),h.push(1-k/b),L+=1}}for(let k=0;k<b;k++)for(let W=0;W<x;W++){let et=d+W+q*k,lt=d+W+q*(k+1),z=d+(W+1)+q*(k+1),at=d+(W+1)+q*k;l.push(et,lt,at),l.push(lt,z,at),$+=6}a.addGroup(f,$,D),f+=$,d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zs=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,m=n*2+r,v=s+1,p=new C,g=new C;for(let M=0;M<=m;M++){let T=0,y=0,E=0,w=0;if(M<=n){let D=M/n,R=D*Math.PI/2;y=-u-t*Math.cos(R),E=t*Math.sin(R),w=-t*Math.cos(R),T=D*h}else if(M<=n+r){let D=(M-n)/r;y=-u+D*e,E=t,w=0,T=h+D*d}else{let D=(M-n-r)/n,R=D*Math.PI/2;y=u+t*Math.sin(R),E=t*Math.cos(R),w=t*Math.sin(R),T=h+d+D*h}let x=Math.max(0,Math.min(1,T/f)),b=0;M===0?b=.5/s:M===m&&(b=-.5/s);for(let D=0;D<=s;D++){let R=D/s,U=R*Math.PI*2,O=Math.sin(U),X=Math.cos(U);g.x=-E*X,g.y=y,g.z=E*O,a.push(g.x,g.y,g.z),p.set(-E*X,w,E*O),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+b,x)}if(M>0){let D=(M-1)*v;for(let R=0;R<s;R++){let U=D+R,O=D+R+1,X=M*v+R,I=M*v+R+1;o.push(U,O,X),o.push(O,I,X)}}}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Xr=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,u=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hs=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,v=[],p=n/2,g=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function M(){let y=new C,E=new C,w=0,x=(e-t)/n;for(let b=0;b<=r;b++){let D=[],R=b/r,U=R*(e-t)+t;for(let O=0;O<=s;O++){let X=O/s,I=X*l+a,q=Math.sin(I),Z=Math.cos(I);E.x=U*q,E.y=-R*n+p,E.z=U*Z,h.push(E.x,E.y,E.z),y.set(q,x,Z).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-R),D.push(m++)}v.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let R=v[D][b],U=v[D+1][b],O=v[D+1][b+1],X=v[D][b+1];(t>0||D!==0)&&(u.push(R,U,X),w+=3),(e>0||D!==r-1)&&(u.push(U,O,X),w+=3)}c.addGroup(g,w,0),g+=w}function T(y){let E=m,w=new st,x=new C,b=0,D=y===!0?t:e,R=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let U=m;for(let O=0;O<=s;O++){let I=O/s*l+a,q=Math.cos(I),Z=Math.sin(I);x.x=D*Z,x.y=p*R,x.z=D*q,h.push(x.x,x.y,x.z),d.push(0,R,0),w.x=q*.5+.5,w.y=Z*.5*R+.5,f.push(w.x,w.y),m++}for(let O=0;O<s;O++){let X=E+O,I=U+O;y===!0?u.push(I,I+1,X):u.push(I+1,I,X),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new $t;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Gs=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends Gs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Td=new C,wd=new C,dh=new Wh,fh=new Wh,ph=new Wh,Vs=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),c=wd);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Td.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Td),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),dh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,p),fh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,p),ph.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,p)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),fh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ph.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(dh.calc(l),fh.calc(l),ph.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ed(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function qm(i,t){let e=1-i;return e*e*t}function Ym(i,t){return 2*(1-i)*i*t}function $m(i,t){return i*i*t}function Er(i,t,e,n){return qm(i,t)+Ym(i,e)+$m(i,n)}function Zm(i,t){let e=1-i;return e*e*e*t}function Jm(i,t){let e=1-i;return 3*e*e*i*t}function Km(i,t){return 3*(1-i)*i*i*t}function Qm(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return Zm(i,t)+Jm(i,e)+Km(i,n)+Qm(i,s)}var qr=class extends vn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends vn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y),Ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends vn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends vn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends vn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends vn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y),Er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Ed(a,l.x,c.x,u.x,h.x),Ed(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Ya=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:Vs,CubicBezierCurve:qr,CubicBezierCurve3:Xa,EllipseCurve:Gs,LineCurve:Yr,LineCurve3:qa,QuadraticBezierCurve:$r,QuadraticBezierCurve3:Zr,SplineCurve:Jr}),$a=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ya[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Kr=class extends $a{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Yr(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $r(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new qr(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Gs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mi=class extends Kr{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Kr().fromJSON(s))}return this}};function jm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sg(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Qr(r,o,e,a,l,c,0),o}function bf(i,t,e,n,s){let r;if(s===mg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ad(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ad(o/n|0,i[o],i[o+1],r);return r&&Ws(r,r.next)&&(to(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Te(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?eg(i,n,s,r):tg(i)){t.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ng(Ji(i),t),Qr(i,t,e,n,s,r,2)):o===2&&ig(i,t,e,n,s,r):Qr(Ji(i),t,e,n,s,r,1);break}}}function tg(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Tr(s,a,r,l,o,c,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function eg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(u,h,d),v=Math.max(a,l,c),p=Math.max(u,h,d),g=Mh(f,m,t,e,n),M=Mh(v,p,t,e,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=g&&y&&y.z<=M;){if(T.x>=f&&T.x<=v&&T.y>=m&&T.y<=p&&T!==s&&T!==o&&Tr(a,u,l,h,c,d,T.x,T.y)&&Te(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Tr(a,u,l,h,c,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=g;){if(T.x>=f&&T.x<=v&&T.y>=m&&T.y<=p&&T!==s&&T!==o&&Tr(a,u,l,h,c,d,T.x,T.y)&&Te(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Tr(a,u,l,h,c,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ng(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ws(n,s)&&wf(n,e,e.next,s)&&jr(n,s)&&jr(s,n)&&(t.push(n.i,e.i,s.i),to(e),to(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function ig(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dg(o,a)){let l=Ef(o,a);o=Ji(o,o.next),l=Ji(l,l.next),Qr(o,t,e,n,s,r,0),Qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=bf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ug(c))}s.sort(rg);for(let r=0;r<s.length;r++)e=og(s[r],e);return e}function rg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function og(i,t){let e=ag(i,t);if(!e)return t;let n=Ef(e,i);return Ji(n,n.next),Ji(e,e.next)}function ag(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ws(i,e))return e;do{if(Ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Tf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);jr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&lg(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function lg(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function cg(i,t,e,n){let s=i;do s.z===0&&(s.z=Mh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hg(s)}function hg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Mh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ug(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Tf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Tr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Tf(i,t,e,n,s,r,o,a)}function dg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fg(i,t)&&(jr(i,t)&&jr(t,i)&&pg(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Ws(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ws(i,t){return i.x===t.x&&i.y===t.y}function wf(i,t,e,n){let s=Sa(Te(i,t,e)),r=Sa(Te(i,t,n)),o=Sa(Te(e,n,i)),a=Sa(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Ma(i,e,t)||r===0&&Ma(i,n,t)||o===0&&Ma(e,i,n)||a===0&&Ma(e,t,n))}function Ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Sa(i){return i>0?1:i<0?-1:0}function fg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function pg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ef(i,t){let e=Sh(i.i,i.x,i.y),n=Sh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ad(i,t,e,n){let s=Sh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bh=class{static triangulate(t,e,n=2){return jm(t,e,n)}},qi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Rd(t),Cd(n,t);let o=t.length;e.forEach(Rd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Cd(n,e[l]);let a=bh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var eo=class i extends fe{constructor(t=new mi([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:gg,T,y=!1,E,w,x,b;if(g){T=g.getSpacedPoints(u),y=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(u,it),w=new C,x=new C,b=new C}d||(p=0,f=0,m=0,v=0);let D=a.extractPoints(c),R=D.shape,U=D.holes;if(!qi.isClockWise(R)){R=R.reverse();for(let it=0,gt=U.length;it<gt;it++){let ft=U[it];qi.isClockWise(ft)&&(U[it]=ft.reverse())}}function X(it){let ft=10000000000000001e-36,Pt=it[0];for(let Tt=1;Tt<=it.length;Tt++){let Yt=Tt%it.length,Ut=it[Yt],ie=Ut.x-Pt.x,oe=Ut.y-Pt.y,he=ie*ie+oe*oe,F=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(Pt.x),Math.abs(Pt.y)),Pe=ft*F*F;if(he<=Pe){it.splice(Yt,1),Tt--;continue}Pt=Ut}}X(R),U.forEach(X);let I=U.length,q=R;for(let it=0;it<I;it++){let gt=U[it];R=R.concat(gt)}function Z(it,gt,ft){return gt||Gt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(gt,ft)}let L=R.length;function $(it,gt,ft){let Pt,Tt,Yt,Ut=it.x-gt.x,ie=it.y-gt.y,oe=ft.x-it.x,he=ft.y-it.y,F=Ut*Ut+ie*ie,Pe=Ut*he-ie*oe;if(Math.abs(Pe)>Number.EPSILON){let te=Math.sqrt(F),ge=Math.sqrt(oe*oe+he*he),yt=gt.x-ie/te,Ee=gt.y+Ut/te,kt=ft.x-he/ge,Vt=ft.y+oe/ge,A=((kt-yt)*he-(Vt-Ee)*oe)/(Ut*he-ie*oe);Pt=yt+Ut*A-it.x,Tt=Ee+ie*A-it.y;let _=Pt*Pt+Tt*Tt;if(_<=2)return new st(Pt,Tt);Yt=Math.sqrt(_/2)}else{let te=!1;Ut>Number.EPSILON?oe>Number.EPSILON&&(te=!0):Ut<-Number.EPSILON?oe<-Number.EPSILON&&(te=!0):Math.sign(ie)===Math.sign(he)&&(te=!0),te?(Pt=-ie,Tt=Ut,Yt=Math.sqrt(F)):(Pt=Ut,Tt=ie,Yt=Math.sqrt(F/2))}return new st(Pt/Yt,Tt/Yt)}let B=[];for(let it=0,gt=q.length,ft=gt-1,Pt=it+1;it<gt;it++,ft++,Pt++)ft===gt&&(ft=0),Pt===gt&&(Pt=0),B[it]=$(q[it],q[ft],q[Pt]);let k=[],W,et=B.concat();for(let it=0,gt=I;it<gt;it++){let ft=U[it];W=[];for(let Pt=0,Tt=ft.length,Yt=Tt-1,Ut=Pt+1;Pt<Tt;Pt++,Yt++,Ut++)Yt===Tt&&(Yt=0),Ut===Tt&&(Ut=0),W[Pt]=$(ft[Pt],ft[Yt],ft[Ut]);k.push(W),et=et.concat(W)}let lt;if(p===0)lt=qi.triangulateShape(q,U);else{let it=[],gt=[];for(let ft=0;ft<p;ft++){let Pt=ft/p,Tt=f*Math.cos(Pt*Math.PI/2),Yt=m*Math.sin(Pt*Math.PI/2)+v;for(let Ut=0,ie=q.length;Ut<ie;Ut++){let oe=Z(q[Ut],B[Ut],Yt);Ot(oe.x,oe.y,-Tt),Pt===0&&it.push(oe)}for(let Ut=0,ie=I;Ut<ie;Ut++){let oe=U[Ut];W=k[Ut];let he=[];for(let F=0,Pe=oe.length;F<Pe;F++){let te=Z(oe[F],W[F],Yt);Ot(te.x,te.y,-Tt),Pt===0&&he.push(te)}Pt===0&&gt.push(he)}}lt=qi.triangulateShape(it,gt)}let z=lt.length,at=m+v;for(let it=0;it<L;it++){let gt=d?Z(R[it],et[it],at):R[it];y?(x.copy(E.normals[0]).multiplyScalar(gt.x),w.copy(E.binormals[0]).multiplyScalar(gt.y),b.copy(T[0]).add(x).add(w),Ot(b.x,b.y,b.z)):Ot(gt.x,gt.y,0)}for(let it=1;it<=u;it++)for(let gt=0;gt<L;gt++){let ft=d?Z(R[gt],et[gt],at):R[gt];y?(x.copy(E.normals[it]).multiplyScalar(ft.x),w.copy(E.binormals[it]).multiplyScalar(ft.y),b.copy(T[it]).add(x).add(w),Ot(b.x,b.y,b.z)):Ot(ft.x,ft.y,h/u*it)}for(let it=p-1;it>=0;it--){let gt=it/p,ft=f*Math.cos(gt*Math.PI/2),Pt=m*Math.sin(gt*Math.PI/2)+v;for(let Tt=0,Yt=q.length;Tt<Yt;Tt++){let Ut=Z(q[Tt],B[Tt],Pt);Ot(Ut.x,Ut.y,h+ft)}for(let Tt=0,Yt=U.length;Tt<Yt;Tt++){let Ut=U[Tt];W=k[Tt];for(let ie=0,oe=Ut.length;ie<oe;ie++){let he=Z(Ut[ie],W[ie],Pt);y?Ot(he.x,he.y+T[u-1].y,T[u-1].x+ft):Ot(he.x,he.y,h+ft)}}}ut(),At();function ut(){let it=s.length/3;if(d){let gt=0,ft=L*gt;for(let Pt=0;Pt<z;Pt++){let Tt=lt[Pt];ye(Tt[2]+ft,Tt[1]+ft,Tt[0]+ft)}gt=u+p*2,ft=L*gt;for(let Pt=0;Pt<z;Pt++){let Tt=lt[Pt];ye(Tt[0]+ft,Tt[1]+ft,Tt[2]+ft)}}else{for(let gt=0;gt<z;gt++){let ft=lt[gt];ye(ft[2],ft[1],ft[0])}for(let gt=0;gt<z;gt++){let ft=lt[gt];ye(ft[0]+L*u,ft[1]+L*u,ft[2]+L*u)}}n.addGroup(it,s.length/3-it,0)}function At(){let it=s.length/3,gt=0;rt(q,gt),gt+=q.length;for(let ft=0,Pt=U.length;ft<Pt;ft++){let Tt=U[ft];rt(Tt,gt),gt+=Tt.length}n.addGroup(it,s.length/3-it,1)}function rt(it,gt){let ft=it.length;for(;--ft>=0;){let Pt=ft,Tt=ft-1;Tt<0&&(Tt=it.length-1);for(let Yt=0,Ut=u+p*2;Yt<Ut;Yt++){let ie=L*Yt,oe=L*(Yt+1),he=gt+Pt+ie,F=gt+Tt+ie,Pe=gt+Tt+oe,te=gt+Pt+oe;zt(he,F,Pe,te)}}}function Ot(it,gt,ft){l.push(it),l.push(gt),l.push(ft)}function ye(it,gt,ft){jt(it),jt(gt),jt(ft);let Pt=s.length/3,Tt=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ne(Tt[0]),ne(Tt[1]),ne(Tt[2])}function zt(it,gt,ft,Pt){jt(it),jt(gt),jt(Pt),jt(gt),jt(ft),jt(Pt);let Tt=s.length/3,Yt=M.generateSideWallUV(n,s,Tt-6,Tt-3,Tt-2,Tt-1);ne(Yt[0]),ne(Yt[1]),ne(Yt[3]),ne(Yt[1]),ne(Yt[2]),ne(Yt[3])}function jt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function ne(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ya[s.type]().fromJSON(s)),new i(n,t.options)}},gg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-h),new st(d,1-m),new st(v,1-g)]:[new st(a,1-l),new st(u,1-h),new st(f,1-m),new st(p,1-g)]}};function xg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var An=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],v=[],p=[];for(let g=0;g<u;g++){let M=g*d-o;for(let T=0;T<c;T++){let y=T*h-r;m.push(y,-M,0),v.push(0,0,1),p.push(T/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let T=M+c*g,y=M+c*(g+1),E=M+1+c*(g+1),w=M+1+c*g;f.push(T,y,w),f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},no=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/s,f=new C,m=new st;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let g=r+p/n*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let v=0;v<s;v++){let p=v*(n+1);for(let g=0;g<n;g++){let M=g+p,T=M,y=M+n+1,E=M+n+2,w=M+1;a.push(T,y,w),a.push(y,E,w)}}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ki=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,d=new C,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){let M=[],T=g/n,y=o+T*a,E=t*Math.cos(y),w=Math.sqrt(t*t-E*E),x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let D=b/e,R=s+D*r;h.x=-w*Math.cos(R),h.y=E,h.z=w*Math.sin(R),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(D+x,1-T),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let T=u[g][M+1],y=u[g][M],E=u[g+1][M],w=u[g+1][M+1];(g!==0||o>0)&&f.push(T,y,w),(g!==n-1||l<Math.PI)&&f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kn=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new C,f=new C,m=new C;for(let v=0;v<=n;v++){let p=o+v/n*a;for(let g=0;g<=s;g++){let M=g/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(g/s),h.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let g=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,T=(s+1)*(v-1)+p,y=(s+1)*v+p;l.push(g,M,y),l.push(M,T,y)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var io=class i extends fe{constructor(t=new Zr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new st,u=new C,h=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function v(){for(let T=0;T<e;T++)p(T);p(r===!1?e:0),M(),g()}function p(T){u=t.getPointAt(T/e,u);let y=o.normals[T],E=o.binormals[T];for(let w=0;w<=s;w++){let x=w/s*Math.PI*2,b=Math.sin(x),D=-Math.cos(x);l.x=D*y.x+b*E.x,l.y=D*y.y+b*E.y,l.z=D*y.z+b*E.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function g(){for(let T=1;T<=e;T++)for(let y=1;y<=s;y++){let E=(s+1)*(T-1)+(y-1),w=(s+1)*T+(y-1),x=(s+1)*T+y,b=(s+1)*(T-1)+y;m.push(E,w,b),m.push(w,x,b)}}function M(){for(let T=0;T<=e;T++)for(let y=0;y<=s;y++)c.x=T/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Pd(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Pd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Pd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _g(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Mn={clone:ns,merge:tn},vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=_g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xs=class extends re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zn=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var so=class extends Bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Za=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ps(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ba(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends Di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _h:r=t,a=2*e-n;break;case vh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _h:o=t,l=2*n-e;break;case vh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,T=(-1-f)*p+(1.5+f)*v+.5*m,y=f*p-f*v;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+M*o[c+E]+T*o[l+E]+y*o[h+E];return r}},Qa=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},ja=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tl=class extends Di{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),v=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*m;return r}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let v=o[c+m],p=o[l+m],g=f*d+m*2,M=h[g],T=h[g+1],y=t*d+m*2,E=u[y],w=u[y+1],x=Sg(n,e,M,E,s);r[m]=Af(x,v,T,w,p)}return r}};function Af(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Mg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Af(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Mg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ba(t.settings)&&(n.settings={inTangents:Ps(t.settings.inTangents,Array),outTangents:Ps(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ba(this.settings)&&(Id(this.settings.inTangents,t),Id(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ba(this.settings)&&(Ld(this.settings.inTangents,t),Ld(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&wm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let v=e[h+m];if(v!==e[d+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ba(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Id(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ld(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Oa;var Ni=class extends yn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Rr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};el.prototype.ValueTypeName="color";var nl=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};nl.prototype.ValueTypeName="number";var il=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},ro=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends yn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Rr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="vector";var rl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rf=new rl,ol=class{constructor(t){this.manager=t!==void 0?t:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var oo=class extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ao=class extends oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mh=new $t,Dd=new C,Nd=new C,al=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dd),Nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Us||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ta=new C,wa=new un,Yn=new C,lo=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ta,wa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,wa,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ta,wa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,wa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new C,Ud=new st,Fd=new st,Qe=class extends lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Ud,Fd),e.subVectors(Fd,Ud)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Th=class extends al{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}},co=class extends oo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qs=class extends lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Is=-90,Ls=1,Ys=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Is,Ls,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Is,Ls,t,e);r.layers=this.layers,this.add(r);let o=new Qe(Is,Ls,t,e);o.layers=this.layers,this.add(o);let a=new Qe(Is,Ls,t,e);a.layers=this.layers,this.add(a);let l=new Qe(Is,Ls,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Is,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ll=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},ho=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=bg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function bg(){this._document.hidden===!1&&this.reset()}var qh="\\[\\]\\.:\\/",Tg=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",wg="[^"+qh.replace("\\.","")+"]",Eg=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Ag=/(WCOD+)?/.source.replace("WCOD",wg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),Pg=new RegExp("^"+Eg+Ag+Rg+Cg+"$"),Ig=["material","materials","bones","map"],wh=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(t){let e=Pg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=wh;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UM=new Float32Array(1);var Eh=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function $h(i,t,e,n){let s=Lg(n);switch(e){case Oh:return i*t;case Qs:return i*t/s.components*s.byteLength;case _l:return i*t/s.components*s.byteLength;case Fi:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:case Tl:return Math.max(i,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case El:case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:case To:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $l:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(i){switch(i){case je:case Dh:return{byteLength:1,components:1};case Ks:case Nh:case Ce:return{byteLength:2,components:1};case gl:case xl:return{byteLength:2,components:4};case Hn:case ml:case Rn:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ng(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,E0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,L0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gx=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Zx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jx=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qx=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,jx=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,t_=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,e_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n_=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,i_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,s_=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,r_=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,o_=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,l_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,c_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,u_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,f_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qt={alphahash_fragment:Ug,alphahash_pars_fragment:Fg,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:zg,aomap_fragment:Hg,aomap_pars_fragment:Gg,batching_pars_vertex:Vg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:qg,bsdfs:Yg,iridescence_fragment:$g,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:jg,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:E0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:w0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:I0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:N0,lights_fragment_end:U0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:$0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:Q0,normal_fragment_maps:j0,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:xx,shadowmap_vertex:_x,shadowmask_pars_fragment:vx,skinbase_vertex:yx,skinning_pars_vertex:Mx,skinning_vertex:Sx,skinnormal_vertex:bx,specularmap_fragment:Tx,specularmap_pars_fragment:wx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Ix,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Nx,background_frag:Ux,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:kx,depth_vert:zx,depth_frag:Hx,distance_vert:Gx,distance_frag:Vx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:$x,meshbasic_frag:Zx,meshlambert_vert:Jx,meshlambert_frag:Kx,meshmatcap_vert:Qx,meshmatcap_frag:jx,meshnormal_vert:t_,meshnormal_frag:e_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:r_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:l_,points_frag:c_,shadow_vert:h_,shadow_frag:u_,sprite_vert:d_,sprite_frag:f_},Et={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ti={basic:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:tn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:tn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new bt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:tn([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:tn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:tn([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:tn([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:tn([Et.common,Et.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:tn([Et.lights,Et.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Ql={r:0,b:0,g:0},p_=new $t,Kf=new Wt;Kf.set(-1,0,0,0,1,0,0,0,1);function m_(i,t,e,n,s,r){let o=new bt(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let y=M.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(M){let T=!1,y=f(M);y===null?p(o,a):y&&y.isColor&&(p(y,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new Zt(new we(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:ns(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ue,(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Zt(new An(2,2),new re({name:"BackgroundMaterial",uniforms:ns(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(Ql,Xh(i)),e.buffers.color.setClear(Ql.r,Ql.g,Ql.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:v,dispose:g}}function g_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(U,O,X,I,q){let Z=!1,L=h(U,I,X,O);r!==L&&(r=L,c(r.object)),Z=f(U,I,X,q),Z&&m(U,I,X,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(U,O,X,I),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function h(U,O,X,I){let q=I.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let L=U.isInstancedMesh===!0?U.id:0,$=Z[L];$===void 0&&($={},Z[L]=$);let B=$[X.id];B===void 0&&(B={},$[X.id]=B);let k=B[q];return k===void 0&&(k=d(l()),B[q]=k),k}function d(U){let O=[],X=[],I=[];for(let q=0;q<e;q++)O[q]=0,X[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,O,X,I){let q=r.attributes,Z=O.attributes,L=0,$=X.getAttributes();for(let B in $)if($[B].location>=0){let W=q[B],et=Z[B];if(et===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),W===void 0||W.attribute!==et||et&&W.data!==et.data)return!0;L++}return r.attributesNum!==L||r.index!==I}function m(U,O,X,I){let q={},Z=O.attributes,L=0,$=X.getAttributes();for(let B in $)if($[B].location>=0){let W=Z[B];W===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));let et={};et.attribute=W,W&&W.data&&(et.data=W.data),q[B]=et,L++}r.attributes=q,r.attributesNum=L,r.index=I}function v(){let U=r.newAttributes;for(let O=0,X=U.length;O<X;O++)U[O]=0}function p(U){g(U,0)}function g(U,O){let X=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;X[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),q[U]!==O&&(i.vertexAttribDivisor(U,O),q[U]=O)}function M(){let U=r.newAttributes,O=r.enabledAttributes;for(let X=0,I=O.length;X<I;X++)O[X]!==U[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function T(U,O,X,I,q,Z,L){L===!0?i.vertexAttribIPointer(U,O,X,q,Z):i.vertexAttribPointer(U,O,X,I,q,Z)}function y(U,O,X,I){v();let q=I.attributes,Z=X.getAttributes(),L=O.defaultAttributeValues;for(let $ in Z){let B=Z[$];if(B.location>=0){let k=q[$];if(k===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(k=U.instanceColor)),k!==void 0){let W=k.normalized,et=k.itemSize,lt=t.get(k);if(lt===void 0)continue;let z=lt.buffer,at=lt.type,ut=lt.bytesPerElement,At=at===i.INT||at===i.UNSIGNED_INT||k.gpuType===ml;if(k.isInterleavedBufferAttribute){let rt=k.data,Ot=rt.isInterleavedBuffer===!0?rt.stride:rt.itemSize,ye=k.offset;if(rt.isInstancedInterleavedBuffer||rt.isInstancedBufferAttribute){for(let zt=0;zt<B.locationSize;zt++)g(B.location+zt,rt.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let zt=0;zt<B.locationSize;zt++)p(B.location+zt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let zt=0;zt<B.locationSize;zt++)T(B.location+zt,et/B.locationSize,at,W,Ot*ut,(ye+et/B.locationSize*zt)*ut,At)}else{if(k.isInstancedBufferAttribute){for(let rt=0;rt<B.locationSize;rt++)g(B.location+rt,k.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let rt=0;rt<B.locationSize;rt++)p(B.location+rt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let rt=0;rt<B.locationSize;rt++)T(B.location+rt,et/B.locationSize,at,W,et*ut,et/B.locationSize*rt*ut,At)}}else if(L!==void 0){let W=L[$];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(B.location,W);break;case 3:i.vertexAttrib3fv(B.location,W);break;case 4:i.vertexAttrib4fv(B.location,W);break;default:i.vertexAttrib1fv(B.location,W)}}}}M()}function E(){D();for(let U in n){let O=n[U];for(let X in O){let I=O[X];for(let q in I){let Z=I[q];for(let L in Z)u(Z[L].object),delete Z[L];delete I[q]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let X in O){let I=O[X];for(let q in I){let Z=I[q];for(let L in Z)u(Z[L].object),delete Z[L];delete I[q]}}delete n[U.id]}function x(U){for(let O in n){let X=n[O];for(let I in X){let q=X[I];if(q[U.id]===void 0)continue;let Z=q[U.id];for(let L in Z)u(Z[L].object),delete Z[L];delete q[U.id]}}}function b(U){for(let O in n){let X=n[O],I=U.isInstancedMesh===!0?U.id:0,q=X[I];if(q!==void 0){for(let Z in q){let L=q[Z];for(let $ in L)u(L[$].object),delete L[$];delete q[Z]}delete X[I],Object.keys(X).length===0&&delete n[O]}}}function D(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function x_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function __(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Gn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Ce&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==je&&x!==Rn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:E,samples:w}}function v_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new _n,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,T=M*4,y=g.clippingState||null;l.value=y,y=u(m,d,T,f);for(let E=0;E!==T;++E)y[E]=e[E];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let v=h!==null?h.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=f;T!==v;++T,y+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var Co=class extends Se{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new re({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:gi});r.uniforms.tEquirect.value=e;let o=new Zt(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=hn),new Ys(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Cf=256,y_=3,M_=20,Qf=256,jf=16,S_=3,b_=new C,T_=new bt,tr=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ys(1,10,null),this._boxMesh=new Zt(new we(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=b_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(T_));let p=new Ys(n,s,u);return p.position.copy(a),p.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Cf,_f(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===Js?this._setSize(t.image.length===0?Cf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Pf(t,!1,!1),n=Math.log2(t)-y_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Pf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===Js?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=If()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=w_(),this._integrationMaterial=E_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/jf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-S_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Qf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=A_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Pf(i,t,e){return new Co(i,{minFilter:xi,generateMipmaps:t,type:Ce,colorSpace:Cr,depthBuffer:e})}function Po(i,t,e){return new re({name:i,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:Ne,blending:gi,depthTest:!1,depthWrite:!1})}function w_(){return Po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function E_(){return Po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function A_(){return Po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${M_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function If(){return Po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Lf(){return Po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function R_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===dl||f===fl)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new Co(m.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===dl||f===fl,v=f===ts||f===Js;if(m||v){let p=e.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new tr(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new tr(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function a(d,f){return f===dl?d.mapping=ts:f===fl&&(d.mapping=Js),d}function l(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function C_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wr("WebGLRenderer: "+n+" extension not supported."),s}}}function P_(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let v=r.get(m);v&&(t.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function u(m){let v=m.attributes;for(let p in v)t.update(v[p],i.ARRAY_BUFFER)}function h(m){let v=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?Or:Fr,y=new T(Math.ceil(M/3)*6,1),E=y.array;if(v!==null){let x=v.array;g=v.version;for(let b=0,D=0;b<M;b+=3){let R=x[b+0],U=x[b+1],O=x[b+2];E[D++]=R,E[D++]=U,E[D++]=U,E[D++]=O,E[D++]=O,E[D++]=R}}else{g=p.version;for(let x=0,b=0;x<M;x+=3){let D=x+0,R=x+1,U=x+2;E[b++]=D,E[b++]=R,E[b++]=R,E[b++]=U,E[b++]=U,E[b++]=D}}y.version=g;let w=r.get(m);w&&t.remove(w),r.set(m,y)}function d(m){let v=r.get(m);if(v){let p=m.index;p!==null&&v.version<p.version&&h(m)}else h(m);return r.get(m)}function f(){for(let m in s){let v=s[m].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function I_(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function L_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function D_(i,t,e){let n=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let D=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),v===!0&&(T=3);let y=a.attributes.position.count*T,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*E*4*h),x=new Dr(w,y,E,h);x.type=Rn,x.needsUpdate=!0;let b=T*4;for(let R=0;R<h;R++){let U=p[R],O=g[R],X=M[R],I=y*E*4*R;for(let q=0;q<U.count;q++){let Z=q*b;f===!0&&(s.fromBufferAttribute(U,q),w[I+Z+0]=s.x,w[I+Z+1]=s.y,w[I+Z+2]=s.z,w[I+Z+3]=0),m===!0&&(s.fromBufferAttribute(O,q),w[I+Z+4]=s.x,w[I+Z+5]=s.y,w[I+Z+6]=s.z,w[I+Z+7]=0),v===!0&&(s.fromBufferAttribute(X,q),w[I+Z+8]=s.x,w[I+Z+9]=s.y,w[I+Z+10]=s.z,w[I+Z+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new st(y,E)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function N_(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var U_={[fo]:"LINEAR_TONE_MAPPING",[po]:"REINHARD_TONE_MAPPING",[mo]:"CINEON_TONE_MAPPING",[ji]:"ACES_FILMIC_TONE_MAPPING",[xo]:"AGX_TONE_MAPPING",[_o]:"NEUTRAL_TONE_MAPPING",[go]:"CUSTOM_TONE_MAPPING"};function F_(i,t,e,n,s,r){let o=new Se(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new fe;u.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new Xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zt(u,h),f=new qs(-1,1,1,-1,0,1),m=null,v=null,p=!1,g,M=null,T=[],y=!1;this.setSize=function(E,w){o.setSize(E,w),a!==null&&a.setSize(E,w),l!==null&&l.setSize(E,w);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(E,w)}},this.setEffects=function(E){T=E,y=T.length>0&&T[0].isRenderPass===!0;let w=o.width,x=o.height;T.length>0&&a===null&&(a=new Se(w,x,{type:Ce,depthBuffer:!1,stencilBuffer:!1}),l=new Se(w,x,{type:Ce,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(D=>D.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new pi(w,x),r===!0&&(c.format=_i,c.type=es)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let D=0;D<T.length;D++){let R=T[D];R.setSize&&R.setSize(w,x),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,w){if(p||E.toneMapping===Qn&&T.length===0)return!1;if(M=w,w!==null){let x=w.width,b=w.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Qn,!0},this.hasRenderPass=function(){return y},this.end=function(E,w){E.toneMapping=g,p=!0;let x=o,b=a;for(let D=0;D<T.length;D++){let R=T[D];R.enabled!==!1&&(R.render(E,b,x,w),R.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==E.outputColorSpace||v!==E.toneMapping){m=E.outputColorSpace,v=E.toneMapping,h.defines={},ee.getTransfer(m)===ue&&(h.defines.SRGB_TRANSFER="");let D=U_[v];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(M),E.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var tp=new dn,ep=new pi(1,1),np=new Vr(1),ip=new Dr,sp=new Ha,rp=new Hr,Df=[],Nf=[],Uf=new Float32Array(16),Ff=new Float32Array(9),Of=new Float32Array(4);function er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ec(i,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function B_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function H_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),Fe(e,n)}}function G_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Ff.set(n),i.uniformMatrix3fv(this.addr,!1,Ff),Fe(e,n)}}function V_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Uf.set(n),i.uniformMatrix4fv(this.addr,!1,Uf),Fe(e,n)}}function W_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function $_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function J_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function nc(i){return i.version===0&&(i.compareFunction=Hh,i.needsUpdate=!0),i}function Q_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=nc(ep):r=tp,e.setTexture2D(t||r,s)}function j_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sp,s)}function tv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=nc(np):r=rp,e.setTextureCube(t||r,s)}function ev(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ip,s)}function nv(i){switch(i){case 5126:return O_;case 35664:return B_;case 35665:return k_;case 35666:return z_;case 35674:return H_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return $_;case 36294:return Z_;case 36295:return J_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}function iv(i,t){i.uniform1fv(this.addr,t)}function sv(i,t){let e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function rv(i,t){let e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function ov(i,t){let e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function av(i,t){let e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lv(i,t){let e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cv(i,t){let e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hv(i,t){i.uniform1iv(this.addr,t)}function uv(i,t){i.uniform2iv(this.addr,t)}function dv(i,t){i.uniform3iv(this.addr,t)}function fv(i,t){i.uniform4iv(this.addr,t)}function pv(i,t){i.uniform1uiv(this.addr,t)}function mv(i,t){i.uniform2uiv(this.addr,t)}function gv(i,t){i.uniform3uiv(this.addr,t)}function xv(i,t){i.uniform4uiv(this.addr,t)}function _v(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=nc(ep):o=tp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function vv(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sp,r[o])}function yv(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=nc(np):o=rp;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Mv(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ip,r[o])}function Sv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}var Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nv(e.type)}},Qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sv(e.type)}},jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function Bf(i,t){i.seq.push(t),i.map[t.id]=t}function bv(i,t,e){let n=i.name,s=n.length;for(Zh.lastIndex=0;;){let r=Zh.exec(n),o=Zh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bf(e,c===void 0?new Kh(a,i,t):new Qh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new jh(a),Bf(e,h)),e=h}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);bv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function kf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tv=37297,wv=0;function Ev(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zf=new Wt;function Av(i){ee._getMatrix(zf,ee.workingColorSpace,i);let t=`mat3( ${zf.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ev(i.getShaderSource(t),a)}else return r}function Rv(i,t){let e=Av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Cv={[fo]:"Linear",[po]:"Reinhard",[mo]:"Cineon",[ji]:"ACESFilmic",[xo]:"AgX",[_o]:"Neutral",[go]:"Custom"};function Pv(i,t){let e=Cv[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jl=new C;function Iv(){ee.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),t=jl.y.toFixed(4),e=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Dv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ro(i){return i!==""}function Gf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(Uv,Fv)}function Fv(i,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return tu(e)}var Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(i){return i.replace(Ov,Bv)}function Bv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var kv={[uo]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function zv(i){return kv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hv={[Js]:"ENVMAP_MODE_REFRACTION"};function Gv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vv={[ul]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function Wv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vv[i.combine]||"ENVMAP_BLENDING_NONE"}function Xv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Gv(e),h=Wv(e),d=Lv(e),f=Dv(r),m=s.createProgram(),v,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ro).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(v=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Rv("linearToOutputTexel",e.outputColorSpace),Iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=tu(o),o=Gf(o,e),o=Vf(o,e),a=tu(a),a=Gf(a,e),a=Vf(a,e),o=Wf(o),a=Wf(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=g+v+o,T=g+p+a,y=kf(s,s.VERTEX_SHADER,M),E=kf(s,s.FRAGMENT_SHADER,T);s.attachShader(m,y),s.attachShader(m,E),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(y)||"",X=s.getShaderInfoLog(E)||"",I=U.trim(),q=O.trim(),Z=X.trim(),L=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,E);else{let B=Hf(s,y,"vertex"),k=Hf(s,E,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+B+`
`+k)}else I!==""?Ht("WebGLProgram: Program Info Log:",I):(q===""||Z==="")&&($=!1);$&&(R.diagnostics={runnable:L,programLog:I,vertexShader:{log:q,prefix:v},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(y),s.deleteShader(E),x=new js(s,m),b=Nv(s,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,Tv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}var qv=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=qv++,this.code=t,this.usedTimes=0}};function Yv(i){return i===Fi||i===To||i===wo}function $v(i,t,e,n,s,r){let o=new Nr,a=new eu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,D,R,U,O){let X=R.fog,I=U.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=t.get(x.envMap||q,Z),$=d[x.type],B=n.precision;x.precision!==null&&(B=n.getMaxPrecision(x.precision),B!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=k!==void 0?k.length:0,et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let lt,z,at,ut;if($){let wt=ti[$];lt=wt.vertexShader,z=wt.fragmentShader}else{lt=x.vertexShader,z=x.fragmentShader;let wt=a.getVertexShaderStage(x),pe=a.getFragmentShaderStage(x);a.update(x,wt,pe),at=wt.id,ut=pe.id}let At=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,ye=U.isBatchedMesh===!0,zt=!!x.map,jt=!!x.matcap,ne=!!L,it=ne&&L.isPMREMTexture===!0,gt=!!x.aoMap,ft=!!x.lightMap,Pt=!!x.bumpMap&&x.wireframe===!1,Tt=!!x.normalMap,Yt=!!x.displacementMap,Ut=!!x.emissiveMap,ie=!!x.metalnessMap,oe=!!x.roughnessMap,he=x.anisotropy>0,F=x.clearcoat>0,Pe=x.diffuseRoughness>0,te=x.dispersion>0,ge=x.retroreflectivity>0,yt=x.iridescence>0,Ee=x.sheen>0,kt=x.transmission>0,Vt=he&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,_=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,ot=Pe&&!!x.diffuseRoughnessMap,nt=yt&&!!x.iridescenceMap,pt=yt&&!!x.iridescenceThicknessMap,Mt=Ee&&!!x.sheenColorMap,Q=Ee&&!!x.sheenRoughnessMap,j=!!x.specularMap,xt=!!x.specularColorMap,P=!!x.specularIntensityMap,tt=kt&&!!x.transmissionMap,K=kt&&!!x.thicknessMap,_t=!!x.gradientMap,dt=!!x.alphaMap,mt=x.alphaTest>0,Ft=!!x.alphaHash,Kt=!!x.extensions,ct=Qn;x.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ct=i.toneMapping);let Bt=it?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,Jt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:z,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:ye,batchingColor:ye&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:jt,envMap:ne,envMapMode:ne&&L.mapping,envMapPMREM:it,envMapMaxLod:it?Bt.length-1:null,envMapSize:it?Bt[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Pt,normalMap:Tt,displacementMap:Yt,emissiveMap:Ut,normalMapObjectSpace:Tt&&x.normalMapType===af,normalMapTangentSpace:Tt&&x.normalMapType===Eo,packedNormalMap:Tt&&x.normalMapType===Eo&&Yv(x.normalMap.format),metalnessMap:ie,roughnessMap:oe,anisotropy:he,anisotropyMap:Vt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:G,diffuseRoughness:Pe,diffuseRoughnessMap:ot,dispersion:te,retroreflection:ge,iridescence:yt,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:Ee,sheenColorMap:Mt,sheenRoughnessMap:Q,specularMap:j,specularColorMap:xt,specularIntensityMap:P,transmission:kt,transmissionMap:tt,thicknessMap:K,gradientMap:_t,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:Ft,combine:x.combine,mapUv:zt&&f(x.map.channel),aoMapUv:gt&&f(x.aoMap.channel),lightMapUv:ft&&f(x.lightMap.channel),bumpMapUv:Pt&&f(x.bumpMap.channel),normalMapUv:Tt&&f(x.normalMap.channel),displacementMapUv:Yt&&f(x.displacementMap.channel),emissiveMapUv:Ut&&f(x.emissiveMap.channel),metalnessMapUv:ie&&f(x.metalnessMap.channel),roughnessMapUv:oe&&f(x.roughnessMap.channel),anisotropyMapUv:Vt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:xt&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:tt&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:dt&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Tt||he),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(zt||dt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:et,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===We,flipSided:x.side===Ne,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)b.push(D),b.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let b=d[x.type],D;if(b){let R=ti[b];D=Mn.clone(R.uniforms)}else D=x.uniforms;return D}function T(x,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Xv(i,b,x,s),c.push(D),u.set(b,D)),D}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:w}}function Zv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function qf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,v,p,g){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=g),t++,M}function l(d,f,m,v,p,g,M){M.reversedDepth===!0&&(p=-p);let T=a(d,f,m,v,p,g);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function c(d,f,m,v,p,g){let M=a(d,f,m,v,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function u(d,f){e.length>1&&e.sort(d||Jv),n.length>1&&n.sort(f||qf),s.length>1&&s.sort(f||qf)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Kv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Yf,i.set(n,[o])):s>=r.length?(o=new Yf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new bt};break;case"SpotLight":e={position:new C,direction:new C,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function jv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ty=0;function ey(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ny(i){let t=new Qv,e=jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new $t,o=new $t;function a(c){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,M=0,T=0,y=0,E=0,w=0,x=0,b=0,D=0,R=0;c.sort(ey);for(let O=0,X=c.length;O<X;O++){let I=c[O],q=I.color,Z=I.intensity,L=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fi?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=q.r*Z,h+=q.g*Z,d+=q.b*Z;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],Z);R++}else if(I.isSunLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,W=e.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=W,n.sunShadowMap[m]=$;let et=k.getViewportCount();for(let lt=0;lt<et;lt++)n.sunShadowMatrix[v+lt]=k.getMatrix(lt),n.sunShadowCascade[v+lt]=k._cascadeData[lt];v+=et,m++}n.sun[f]=B,f++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,W=e.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=B,p++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(q).multiplyScalar(Z),B.distance=L,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[M]=B;let k=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,k.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[M]=k.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=$,x++}M++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(q).multiplyScalar(Z),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=B,T++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let k=I.shadow,W=e.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=B,g++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(Z),B.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[y]=B,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==g||U.spotLength!==M||U.rectAreaLength!==T||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,U.sunLength=f,U.directionalLength=p,U.pointLength=g,U.spotLength=M,U.rectAreaLength=T,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=R,n.version=ty++)}function l(c,u){let h=0,d=0,f=0,m=0,v=0,p=0,g=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let y=c[M];if(y.isSunLight){let E=n.sun[h];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),h++}else if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function $f(i){let t=new ny(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function l(){t.setup(e),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function iy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new $f(i),t.set(s,[a])):r>=o.length?(a=new $f(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oy=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],ay=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Zf=new $t,Ao=new C,Jh=new C;function ly(i,t,e){let n=new Ii,s=new st,r=new st,o=new _e,a=new Za,l=new Ja,c={},u=e.maxTextureSize,h={[Kn]:Ne,[Ne]:Kn,[We]:We},d=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new fe;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let g=this.type;this.render=function(w,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===kd&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=g!==this.type;X&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=w.length;I<q;I++){let Z=w[I],L=Z.shadow;if(L===void 0){Ht("WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let $=L.getFrameExtents();s.multiply($),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,L.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=B,L.map===null||X===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===$s){if(Z.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Se(s.x,s.y,{format:Fi,type:Ce,minFilter:hn,magFilter:hn,generateMipmaps:!1}),L.map.texture.name=Z.name+".shadowMap",L.map.depthTexture=new pi(s.x,s.y,Rn),L.map.depthTexture.name=Z.name+".shadowMapDepth",L.map.depthTexture.format=di,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Re,L.map.depthTexture.magFilter=Re}else Z.isPointLight?(L.map=new Co(s.x),L.map.depthTexture=new Vr(s.x,Hn)):(L.map=new Se(s.x,s.y),L.map.depthTexture=new pi(s.x,s.y,Hn)),L.map.depthTexture.name=Z.name+".shadowMap",L.map.depthTexture.format=di,this.type===uo?(L.map.depthTexture.compareFunction=B?zh:kh,L.map.depthTexture.minFilter=hn,L.map.depthTexture.magFilter=hn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Re,L.map.depthTexture.magFilter=Re);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==s.x||L.map.height!==s.y)&&L.map.setSize(s.x,s.y);let k=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();Z.isPointLight!==!0&&L.updateMatrices(Z,b);let W=(L.camera.layers.mask&4294967294)!==0?L.camera.layers:b.layers;for(let et=0;et<k;et++){let lt=L.getCamera(et);if(Z.isPointLight){let z=L.camera,at=L.matrix,ut=Z.distance||z.far;ut!==z.far&&(z.far=ut,z.updateProjectionMatrix()),Ao.setFromMatrixPosition(Z.matrixWorld),z.position.copy(Ao),Jh.copy(z.position),Jh.add(oy[et]),z.up.copy(ay[et]),z.lookAt(Jh),z.updateMatrixWorld(),at.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Zf.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Zf,z.coordinateSystem,z.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,et),i.clear();else{et===0&&(i.setRenderTarget(L.map),i.clear());let z=L.getViewport(et);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),O.viewport(o)}n=L.getFrustum(et),y(x,b,lt,Z,W,this.type)}L.isPointLightShadow!==!0&&this.type===$s&&M(L,b),L.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(D,R,U)};function M(w,x){let b=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Se(s.x,s.y,{format:Fi,type:Ce}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,b,f,v,null)}function T(w,x,b,D){let R=null,U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=R.uuid,X=x.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let q=I[X];q===void 0&&(q=R.clone(),I[X]=q,x.addEventListener("dispose",E)),R=q}if(R.visible=x.visible,R.wireframe=x.wireframe,D===$s?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:h[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=b}return R}function y(w,x,b,D,R,U){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===$s)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),q=w.material;if(Array.isArray(q)){let Z=I.groups;for(let L=0,$=Z.length;L<$;L++){let B=Z[L],k=q[B.materialIndex];if(k&&k.visible){let W=T(w,k,D,U);w.onBeforeShadow(i,w,x,b,I,W,B),i.renderBufferDirect(b,null,I,W,w,B),w.onAfterShadow(i,w,x,b,I,W,B)}}}else if(q.visible){let Z=T(w,q,D,U);w.onBeforeShadow(i,w,x,b,I,Z,null),i.renderBufferDirect(b,null,I,Z,w,null),w.onAfterShadow(i,w,x,b,I,Z,null)}}let X=w.children;for(let I=0,q=X.length;I<q;I++)y(X[I],x,b,D,R,U)}function E(w){w.target.removeEventListener("dispose",E);for(let b in c){let D=c[b],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function cy(i,t){function e(){let P=!1,tt=new _e,K=null,_t=new _e(0,0,0,0);return{setMask:function(dt){K!==dt&&!P&&(i.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){P=dt},setClear:function(dt,mt,Ft,Kt,ct){ct===!0&&(dt*=Kt,mt*=Kt,Ft*=Kt),tt.set(dt,mt,Ft,Kt),_t.equals(tt)===!1&&(i.clearColor(dt,mt,Ft,Kt),_t.copy(tt))},reset:function(){P=!1,K=null,_t.set(-1,0,0,0)}}}function n(){let P=!1,tt=!1,K=null,_t=null,dt=null;return{setReversed:function(mt){if(tt!==mt){let Ft=t.get("EXT_clip_control");mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),tt=mt;let Kt=dt;dt=null,this.setClear(Kt)}},getReversed:function(){return tt},setTest:function(mt){mt?rt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(mt){K!==mt&&!P&&(i.depthMask(mt),K=mt)},setFunc:function(mt){if(tt&&(mt=xf[mt]),_t!==mt){switch(mt){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=mt}},setLocked:function(mt){P=mt},setClear:function(mt){dt!==mt&&(dt=mt,tt&&(mt=1-mt),i.clearDepth(mt))},reset:function(){P=!1,K=null,_t=null,dt=null,tt=!1}}}function s(){let P=!1,tt=null,K=null,_t=null,dt=null,mt=null,Ft=null,Kt=null,ct=null;return{setTest:function(Bt){P||(Bt?rt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(Bt){tt!==Bt&&!P&&(i.stencilMask(Bt),tt=Bt)},setFunc:function(Bt,Jt,wt){(K!==Bt||_t!==Jt||dt!==wt)&&(i.stencilFunc(Bt,Jt,wt),K=Bt,_t=Jt,dt=wt)},setOp:function(Bt,Jt,wt){(mt!==Bt||Ft!==Jt||Kt!==wt)&&(i.stencilOp(Bt,Jt,wt),mt=Bt,Ft=Jt,Kt=wt)},setLocked:function(Bt){P=Bt},setClear:function(Bt){ct!==Bt&&(i.clearStencil(Bt),ct=Bt)},reset:function(){P=!1,tt=null,K=null,_t=null,dt=null,mt=null,Ft=null,Kt=null,ct=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],v=null,p=!1,g=null,M=null,T=null,y=null,E=null,w=null,x=null,b=new bt(0,0,0),D=0,R=!1,U=null,O=null,X=null,I=null,q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,$=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=$>=2);let k=null,W={},et=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),z=new _e().fromArray(et),at=new _e().fromArray(lt);function ut(P,tt,K,_t){let dt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(P,mt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<K;Ft++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(tt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return mt}let At={};At[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Ns),Pt(!1),Tt(Ah),rt(i.CULL_FACE),gt(gi);function rt(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ot(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ye(P,tt){return d[P]!==tt?(i.bindFramebuffer(P,tt),d[P]=tt,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function zt(P,tt){let K=m,_t=!1;if(P){K=f.get(tt),K===void 0&&(K=[],f.set(tt,K));let dt=P.textures;if(K.length!==dt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Ft=dt.length;mt<Ft;mt++)K[mt]=i.COLOR_ATTACHMENT0+mt;K.length=dt.length,_t=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,_t=!0);_t&&i.drawBuffers(K)}function jt(P){return v!==P?(i.useProgram(P),v=P,!0):!1}let ne={[Qi]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};ne[Gd]=i.MIN,ne[hl]=i.MAX;let it={[Vd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[Kd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[qd]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(P,tt,K,_t,dt,mt,Ft,Kt,ct,Bt){if(P===gi){p===!0&&(Ot(i.BLEND),p=!1);return}if(p===!1&&(rt(i.BLEND),p=!0),P!==cl){if(P!==g||Bt!==R){if((M!==Qi||E!==Qi)&&(i.blendEquation(i.FUNC_ADD),M=Qi,E=Qi),Bt)switch(P){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",P);break}else switch(P){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rh:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",P);break}T=null,y=null,w=null,x=null,b.set(0,0,0),D=0,g=P,R=Bt}return}dt=dt||tt,mt=mt||K,Ft=Ft||_t,(tt!==M||dt!==E)&&(i.blendEquationSeparate(ne[tt],ne[dt]),M=tt,E=dt),(K!==T||_t!==y||mt!==w||Ft!==x)&&(i.blendFuncSeparate(it[K],it[_t],it[mt],it[Ft]),T=K,y=_t,w=mt,x=Ft),(Kt.equals(b)===!1||ct!==D)&&(i.blendColor(Kt.r,Kt.g,Kt.b,ct),b.copy(Kt),D=ct),g=P,R=!1}function ft(P,tt){P.side===We?Ot(i.CULL_FACE):rt(i.CULL_FACE);let K=P.side===Ne;tt&&(K=!K),Pt(K),P.blending===Zs&&P.transparent===!1?gt(gi):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let _t=P.stencilWrite;a.setTest(_t),_t&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(P){U!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),U=P)}function Tt(P){P!==Od?(rt(i.CULL_FACE),P!==O&&(P===Ah?i.cullFace(i.BACK):P===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),O=P}function Yt(P){P!==X&&(L&&i.lineWidth(P),X=P)}function Ut(P,tt,K){P?(rt(i.POLYGON_OFFSET_FILL),(I!==tt||q!==K)&&(I=tt,q=K,o.getReversed()&&(tt=-tt,K=-K),i.polygonOffset(tt,K))):Ot(i.POLYGON_OFFSET_FILL)}function ie(P){P?rt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function oe(P){P===void 0&&(P=i.TEXTURE0+Z-1),k!==P&&(i.activeTexture(P),k=P)}function he(P,tt,K){K===void 0&&(k===null?K=i.TEXTURE0+Z-1:K=k);let _t=W[K];_t===void 0&&(_t={type:void 0,texture:void 0},W[K]=_t),(_t.type!==P||_t.texture!==tt)&&(k!==K&&(i.activeTexture(K),k=K),i.bindTexture(P,tt||At[P]),_t.type=P,_t.texture=tt)}function F(){let P=W[k];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(P){Gt("WebGLState:",P)}}function te(){try{i.compressedTexImage3D(...arguments)}catch(P){Gt("WebGLState:",P)}}function ge(){try{i.texSubImage2D(...arguments)}catch(P){Gt("WebGLState:",P)}}function yt(){try{i.texSubImage3D(...arguments)}catch(P){Gt("WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Gt("WebGLState:",P)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Gt("WebGLState:",P)}}function Vt(){try{i.texStorage2D(...arguments)}catch(P){Gt("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){Gt("WebGLState:",P)}}function _(){try{i.texImage2D(...arguments)}catch(P){Gt("WebGLState:",P)}}function G(){try{i.texImage3D(...arguments)}catch(P){Gt("WebGLState:",P)}}function ot(P){return h[P]!==void 0?h[P]:i.getParameter(P)}function nt(P,tt){h[P]!==tt&&(i.pixelStorei(P,tt),h[P]=tt)}function pt(P){z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),z.copy(P))}function Mt(P){at.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),at.copy(P))}function Q(P,tt){let K=c.get(tt);K===void 0&&(K=new WeakMap,c.set(tt,K));let _t=K.get(P);_t===void 0&&(_t=i.getUniformBlockIndex(tt,P.name),i.uniformBlockBinding(tt,_t,_t),K.set(P,_t))}function j(P,tt,K){let dt=c.get(tt).get(P);l[dt]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,dt,K),l[dt]=K)}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},k=null,W={},d={},l={},f=new WeakMap,m=[],v=null,p=!1,g=null,M=null,T=null,y=null,E=null,w=null,x=null,b=new bt(0,0,0),D=0,R=!1,U=null,O=null,X=null,I=null,q=null,z.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Ot,bindFramebuffer:ye,drawBuffers:zt,useProgram:jt,setBlending:gt,setMaterial:ft,setFlipSided:Pt,setCullFace:Tt,setLineWidth:Yt,setPolygonOffset:Ut,setScissorTest:ie,activeTexture:oe,bindTexture:he,unbindTexture:F,compressedTexImage2D:Pe,compressedTexImage3D:te,texImage2D:_,texImage3D:G,pixelStorei:nt,getParameter:ot,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Vt,texStorage3D:A,texSubImage2D:ge,texSubImage3D:yt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:kt,scissor:pt,viewport:Mt,reset:xt}}function hy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,h=new Set,d,f=new WeakMap,m=new Set,v=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):Ir("canvas")}function M(A,_,G){let ot=1,nt=Vt(A);if((nt.width>G||nt.height>G)&&(ot=G/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pt=Math.floor(ot*nt.width),Mt=Math.floor(ot*nt.height);d===void 0&&(d=g(pt,Mt));let Q=_?g(pt,Mt):d;return Q.width=pt,Q.height=Mt,Q.getContext("2d").drawImage(A,0,0,pt,Mt),Ht("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+pt+"x"+Mt+")."),Q}else return"data"in A&&Ht("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function T(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,_,G,ot,nt,pt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Mt;ot&&(Mt=t.get("EXT_texture_norm16"),Mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.R16_EXT),G===i.SHORT&&Mt&&(Q=Mt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),_===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.RG16_EXT),G===i.SHORT&&Mt&&(Q=Mt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.RGB16_EXT),G===i.SHORT&&Mt&&(Q=Mt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let j=pt?Pr:ee.getTransfer(nt);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=j===ue?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.RGBA16_EXT),G===i.SHORT&&Mt&&(Q=Mt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(A,_){let G;return A?_===null||_===Hn||_===es?G=i.DEPTH24_STENCIL8:_===Rn?G=i.DEPTH32F_STENCIL8:_===Ks&&(G=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hn||_===es?G=i.DEPTH_COMPONENT24:_===Rn?G=i.DEPTH_COMPONENT32F:_===Ks&&(G=i.DEPTH_COMPONENT16),G}function b(A,_){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function D(A){let _=new WeakRef(A);n.get(A).__ref=_,m.add(_),v.register(A,_,_)}function R(A){let _=n.get(A).__ref;_!==void 0&&(m.delete(_),v.unregister(_))}function U(A){X(A.target)}function O(A){I(A.target)}function X(A){A.removeEventListener("dispose",U),R(A),Z(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function I(A){A.removeEventListener("dispose",O),R(A),$(A)}function q(){for(let A of m){let _=A.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):X(_))}m.clear(),h.clear()}function Z(A){let _=n.get(A);if(_.__webglInit===void 0)return;let G=A.source,ot=f.get(G);if(ot){let nt=ot[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(A),Object.keys(ot).length===0&&f.delete(G)}n.remove(A)}function L(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let G=A.source,ot=f.get(G);delete ot[_.__cacheKey],o.memory.textures--}function $(A){let _=n.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&X(G),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(_.__webglFramebuffer[nt]))for(let pt=0;pt<_.__webglFramebuffer[nt].length;pt++)i.deleteFramebuffer(_.__webglFramebuffer[nt][pt]);else i.deleteFramebuffer(_.__webglFramebuffer[nt]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[nt])}else{if(Array.isArray(_.__webglFramebuffer))for(let nt=0;nt<_.__webglFramebuffer.length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[nt]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let nt=0;nt<_.__webglColorRenderbuffer.length;nt++)_.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[nt]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ot=A.textures;for(let nt=0,pt=ot.length;nt<pt;nt++){let Mt=n.get(ot[nt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ot[nt])}n.remove(A)}let B=0;function k(){B=0}function W(){return B}function et(A){B=A}function lt(){let A=B;return A>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function z(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function at(A,_){let G=n.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let ot=A.image;if(ot===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(G,A,_);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+_)}function ut(A,_){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ft(G,A,_);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+_)}function At(A,_){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ft(G,A,_);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+_)}function rt(A,_){let G=n.get(A);if(A.version>0&&G.__version!==A.version){Pt(G,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+_)}let Ot={[Ua]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},ye={[Re]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},zt={[cf]:i.NEVER,[Hh]:i.ALWAYS,[hf]:i.LESS,[kh]:i.LEQUAL,[uf]:i.EQUAL,[zh]:i.GEQUAL,[df]:i.GREATER,[ff]:i.NOTEQUAL};function jt(A,_){if(_.type===Rn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===pl||_.magFilter===vo||_.magFilter===xi||_.minFilter===hn||_.minFilter===pl||_.minFilter===vo||_.minFilter===xi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ot[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ot[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ot[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ye[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Re||_.minFilter!==vo&&_.minFilter!==xi||_.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ne(A,_){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",U),D(_));let ot=_.source,nt=f.get(ot);nt===void 0&&(nt={},f.set(ot,nt));let pt=z(_);if(pt!==A.__cacheKey){nt[pt]===void 0&&(nt[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[pt].usedTimes++;let Mt=nt[A.__cacheKey];Mt!==void 0&&(nt[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&L(_)),A.__cacheKey=pt,A.__webglTexture=nt[pt].texture}return G}function it(A,_,G){return Math.floor(Math.floor(A/G)/_)}function gt(A,_,G,ot){let pt=A.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,G,ot,_.data);else{pt.sort((P,tt)=>P.start-tt.start);let Mt=0;for(let P=1;P<pt.length;P++){let tt=pt[Mt],K=pt[P],_t=tt.start+tt.count,dt=it(K.start,_.width,4),mt=it(tt.start,_.width,4);K.start<=_t+1&&dt===mt&&it(K.start+K.count-1,_.width,4)===dt?tt.count=Math.max(tt.count,K.start+K.count-tt.start):(++Mt,pt[Mt]=K)}pt.length=Mt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let P=0,tt=pt.length;P<tt;P++){let K=pt[P],_t=Math.floor(K.start/4),dt=Math.ceil(K.count/4),mt=_t%_.width,Ft=Math.floor(_t/_.width),Kt=dt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft),e.texSubImage2D(i.TEXTURE_2D,0,mt,Ft,Kt,ct,G,ot,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function ft(A,_,G){let ot=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ot=i.TEXTURE_3D);let nt=ne(A,_),pt=_.source;e.bindTexture(ot,A.__webglTexture,i.TEXTURE0+G);let Mt=n.get(pt);if(pt.version!==Mt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ct=ee.getPrimaries(ee.workingColorSpace),Bt=_.colorSpace===vi?null:ee.getPrimaries(_.colorSpace),Jt=_.colorSpace===vi||ct===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=M(_.image,!1,s.maxTextureSize);j=kt(_,j);let xt=r.convert(_.format,_.colorSpace),P=r.convert(_.type),tt=w(_.internalFormat,xt,P,_.normalized,_.colorSpace,_.isVideoTexture);jt(ot,_);let K,_t=_.mipmaps,dt=_.isVideoTexture!==!0,mt=Mt.__version===void 0||nt===!0,Ft=pt.dataReady,Kt=b(_,j);if(_.isDepthTexture)tt=x(_.format===_i,_.type),mt&&(dt?e.texStorage2D(i.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,xt,P,null));else if(_.isDataTexture)if(_t.length>0){dt&&mt&&e.texStorage2D(i.TEXTURE_2D,Kt,tt,_t[0].width,_t[0].height);for(let ct=0,Bt=_t.length;ct<Bt;ct++)K=_t[ct],dt?Ft&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,K.width,K.height,xt,P,K.data):e.texImage2D(i.TEXTURE_2D,ct,tt,K.width,K.height,0,xt,P,K.data);_.generateMipmaps=!1}else dt?(mt&&e.texStorage2D(i.TEXTURE_2D,Kt,tt,j.width,j.height),Ft&&gt(_,j,xt,P)):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,xt,P,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){dt&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,tt,_t[0].width,_t[0].height,j.depth);for(let ct=0,Bt=_t.length;ct<Bt;ct++)if(K=_t[ct],_.format!==Gn)if(xt!==null)if(dt){if(Ft)if(_.layerUpdates.size>0){let Jt=$h(K.width,K.height,_.format,_.type);for(let wt of _.layerUpdates){let pe=K.data.subarray(wt*Jt/K.data.BYTES_PER_ELEMENT,(wt+1)*Jt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,wt,K.width,K.height,1,xt,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,K.width,K.height,j.depth,xt,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,tt,K.width,K.height,j.depth,0,K.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,K.width,K.height,j.depth,xt,P,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,tt,K.width,K.height,j.depth,0,xt,P,K.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{dt&&mt&&e.texStorage2D(i.TEXTURE_2D,Kt,tt,_t[0].width,_t[0].height);for(let ct=0,Bt=_t.length;ct<Bt;ct++)K=_t[ct],_.format!==Gn?xt!==null?dt?Ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,K.width,K.height,xt,K.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,tt,K.width,K.height,0,K.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Ft&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,K.width,K.height,xt,P,K.data):e.texImage2D(i.TEXTURE_2D,ct,tt,K.width,K.height,0,xt,P,K.data)}else if(_.isDataArrayTexture)if(dt){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,tt,j.width,j.height,j.depth),Ft)if(_.layerUpdates.size>0){let ct=$h(j.width,j.height,_.format,_.type);for(let Bt of _.layerUpdates){let Jt=j.data.subarray(Bt*ct/j.data.BYTES_PER_ELEMENT,(Bt+1)*ct/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,j.width,j.height,1,xt,P,Jt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,xt,P,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,xt,P,j.data);else if(_.isData3DTexture)dt?(mt&&e.texStorage3D(i.TEXTURE_3D,Kt,tt,j.width,j.height,j.depth),Ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,xt,P,j.data)):e.texImage3D(i.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,xt,P,j.data);else if(_.isFramebufferTexture){if(mt)if(dt)e.texStorage2D(i.TEXTURE_2D,Kt,tt,j.width,j.height);else{let ct=j.width,Bt=j.height;for(let Jt=0;Jt<Kt;Jt++)e.texImage2D(i.TEXTURE_2D,Jt,tt,ct,Bt,0,xt,P,null),ct>>=1,Bt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),j.parentNode!==ct){ct.appendChild(j),h.add(_),ct.onpaint=Bt=>{let Jt=Bt.changedElements;for(let wt of h)Jt.includes(wt.image)&&(wt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Jt=i.RGBA,wt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Jt,wt,pe,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_t.length>0){if(dt&&mt){let ct=Vt(_t[0]);e.texStorage2D(i.TEXTURE_2D,Kt,tt,ct.width,ct.height)}for(let ct=0,Bt=_t.length;ct<Bt;ct++)K=_t[ct],dt?Ft&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt,P,K):e.texImage2D(i.TEXTURE_2D,ct,tt,xt,P,K);_.generateMipmaps=!1}else if(dt){if(mt){let ct=Vt(j);e.texStorage2D(i.TEXTURE_2D,Kt,tt,ct.width,ct.height)}Ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,P,j)}else e.texImage2D(i.TEXTURE_2D,0,tt,xt,P,j);T(_)&&_.mipmapsAutoUpdate===!0&&y(ot),Mt.__version=pt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Pt(A,_,G){if(_.image.length!==6)return;let ot=ne(A,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let pt=n.get(nt);if(nt.version!==pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+G);let Mt=ee.getPrimaries(ee.workingColorSpace),Q=_.colorSpace===vi?null:ee.getPrimaries(_.colorSpace),j=_.colorSpace===vi||Mt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let xt=_.isCompressedTexture||_.image[0].isCompressedTexture,P=_.image[0]&&_.image[0].isDataTexture,tt=[];for(let wt=0;wt<6;wt++)!xt&&!P?tt[wt]=M(_.image[wt],!0,s.maxCubemapSize):tt[wt]=P?_.image[wt].image:_.image[wt],tt[wt]=kt(_,tt[wt]);let K=tt[0],_t=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),mt=w(_.internalFormat,_t,dt,_.normalized,_.colorSpace),Ft=_.isVideoTexture!==!0,Kt=pt.__version===void 0||ot===!0,ct=nt.dataReady,Bt=b(_,K);jt(i.TEXTURE_CUBE_MAP,_);let Jt;if(_.isDepthTexture){if(mt=x(_.format===_i,_.type),Kt)if(Ft)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,mt,K.width,K.height);else for(let wt=0;wt<6;wt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,mt,K.width,K.height,0,_t,dt,null)}else if(xt){Ft&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,mt,K.width,K.height);for(let wt=0;wt<6;wt++){Jt=tt[wt].mipmaps;for(let pe=0;pe<Jt.length;pe++){let Be=Jt[pe];_.format!==Gn?_t!==null?Ft?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,0,0,Be.width,Be.height,_t,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,mt,Be.width,Be.height,0,Be.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,0,0,Be.width,Be.height,_t,dt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,mt,Be.width,Be.height,0,_t,dt,Be.data)}}}else{if(Jt=_.mipmaps,Ft&&Kt){Jt.length>0&&Bt++;let wt=Vt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,mt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(P){Ft?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,tt[wt].width,tt[wt].height,_t,dt,tt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,mt,tt[wt].width,tt[wt].height,0,_t,dt,tt[wt].data);for(let pe=0;pe<Jt.length;pe++){let bi=Jt[pe].image[wt].image;Ft?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,0,0,bi.width,bi.height,_t,dt,bi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,mt,bi.width,bi.height,0,_t,dt,bi.data)}}else{Ft?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,_t,dt,tt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,mt,_t,dt,tt[wt]);for(let pe=0;pe<Jt.length;pe++){let Be=Jt[pe];Ft?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,0,0,_t,dt,Be.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,mt,_t,dt,Be.image[wt])}}}T(_)&&_.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),pt.__version=nt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Tt(A,_,G,ot,nt,pt){let Mt=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),j=w(G.internalFormat,Mt,Q,G.normalized,G.colorSpace),xt=n.get(_),P=n.get(G);if(P.__renderTarget=_,!xt.__hasExternalTextures){let tt=Math.max(1,_.width>>pt),K=Math.max(1,_.height>>pt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,pt,j,tt,K,_.depth,0,Mt,Q,null):e.texImage2D(nt,pt,j,tt,K,0,Mt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,P.__webglTexture,0,ge(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,P.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,_,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let ot=_.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,pt=x(_.stencilBuffer,nt),Mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(_),pt,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(_),pt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{let ot=_.textures;for(let nt=0;nt<ot.length;nt++){let pt=ot[nt],Mt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),j=w(pt.internalFormat,Mt,Q,pt.normalized,pt.colorSpace);yt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(_),j,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,_,G){let ot=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(_.depthTexture);nt.__renderTarget=_;let pt=ot?_.depthTexture.image[0]:_.depthTexture.image;(!nt.__webglTexture||pt.width!==_.width||pt.height!==_.height)&&(pt.width=_.width,pt.height=_.height,_.depthTexture.needsUpdate=!0),ot?rt(_.depthTexture,0):at(_.depthTexture,0);let Mt=nt.__webglTexture,Q=ge(_),j=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,xt=_.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===di)yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,j,Mt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,xt,j,Mt,0);else if(_.depthTexture.format===_i)yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,j,Mt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,xt,j,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){let _=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let ot=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ot){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=ot}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let ot=0;ot<6;ot++)Ut(_.__webglFramebuffer[ot],A,ot);else A.texture.mipmaps.length>0?Ut(_.__webglFramebuffer[0],A,0):Ut(_.__webglFramebuffer,A,0);else if(G){_.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ot]),_.__webglDepthbuffer[ot]===void 0)_.__webglDepthbuffer[ot]=i.createRenderbuffer(),Yt(_.__webglDepthbuffer[ot],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,pt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Yt(_.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,_,G){let ot=n.get(A);_!==void 0&&Tt(ot.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ie(A)}function he(A){let _=A.texture,G=n.get(A),ot=n.get(_);A.addEventListener("dispose",O),D(A);let nt=A.textures,pt=A.isWebGLCubeRenderTarget===!0,Mt=nt.length>1;if(Mt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=_.version,o.memory.textures++),pt){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let j=0;j<_.mipmaps.length;j++)G.__webglFramebuffer[Q][j]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let Q=0,j=nt.length;Q<j;Q++){let xt=n.get(nt[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&yt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<nt.length;Q++){let j=nt[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let xt=r.convert(j.format,j.colorSpace),P=r.convert(j.type),tt=w(j.internalFormat,xt,P,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),K=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),jt(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Tt(G.__webglFramebuffer[Q][j],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else Tt(G.__webglFramebuffer[Q],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);T(_)?y(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let Q=0,j=nt.length;Q<j;Q++){let xt=nt[Q],P=n.get(xt),tt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,P.__webglTexture),jt(tt,xt),Tt(G.__webglFramebuffer,A,xt,i.COLOR_ATTACHMENT0+Q,tt,0),T(xt)&&y(tt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,ot.__webglTexture),jt(Q,_),_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Tt(G.__webglFramebuffer[j],A,_,i.COLOR_ATTACHMENT0,Q,j);else Tt(G.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Q,0);T(_)?y(Q):_.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ie(A)}function F(A){let _=A.textures;for(let G=0,ot=_.length;G<ot;G++){let nt=_[G];if(T(nt)&&nt.mipmapsAutoUpdate===!0){let pt=E(A),Mt=n.get(nt).__webglTexture;e.bindTexture(pt,Mt),y(pt),e.unbindTexture()}}}let Pe=[];function te(A){if(A.samples>0){if(yt(A)===!1){let _=A.textures,G=A.width,ot=A.height,nt=i.COLOR_BUFFER_BIT,pt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),Q=_.length>1;if(Q)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let P=n.get(_[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,G,ot,0,0,G,ot,nt,i.NEAREST),l===!0&&(Pe.length=0,Pe.push(i.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Pe.push(pt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let P=n.get(_[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function yt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(A){let _=o.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function kt(A,_){let G=A.colorSpace,ot=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Cr&&G!==vi&&(ee.getTransfer(G)===ue?(ot!==Gn||nt!==je)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",G)),_}function Vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=lt,this.resetTextureUnits=k,this.getTextureUnits=W,this.setTextureUnits=et,this.setTexture2D=at,this.setTexture2DArray=ut,this.setTexture3D=At,this.setTextureCube=rt,this.rebindTextures=oe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=yt,this.dispose=q}function uy(i,t){function e(n,s=vi){let r,o=ee.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Ce)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===Gn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Qs)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===yo||n===Mo||n===So||n===bo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===bl||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===El||n===Al||n===Rl||n===Cl||n===To||n===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===El)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return r.COMPRESSED_R11_EAC;if(n===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===To)return r.COMPRESSED_RG11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Zl||n===wo||n===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new re({vertexShader:dy,fragmentShader:fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",p=new iu,g={},M=e.getContextAttributes(),T=null,y=null,E=[],w=[],x=new st,b=null,D=null,R=new Qe;R.viewport=new _e;let U=new Qe;U.viewport=new _e;let O=[R,U],X=new ll,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let at=E[z];return at===void 0&&(at=new Bs,E[z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(z){let at=E[z];return at===void 0&&(at=new Bs,E[z]=at),at.getGripSpace()},this.getHand=function(z){let at=E[z];return at===void 0&&(at=new Bs,E[z]=at),at.getHandSpace()};function Z(z){let at=w.indexOf(z.inputSource);if(at===-1)return;let ut=E[at];ut!==void 0&&(ut.update(z.inputSource,z.frame,c||o),ut.dispatchEvent({type:z.type,data:z.inputSource}))}function L(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",$);for(let z=0;z<E.length;z++){let at=w[z];at!==null&&(w[z]=null,E[z].disconnect(at))}I=null,q=null,p.reset();for(let z in g)delete g[z];if(t.setRenderTarget(T),f=null,d=null,h=null,s=null,y=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),D!==null){let z=D.camera;z.fov=D.fov,z.zoom=D.zoom,z.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",L),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,At=null,rt=null;M.depth&&(rt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=M.stencil?_i:di,At=M.stencil?es:Hn);let Ot={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Se(d.textureWidth,d.textureHeight,{format:Gn,type:je,depthTexture:new pi(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Se(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(z){for(let at=0;at<z.removed.length;at++){let ut=z.removed[at],At=w.indexOf(ut);At>=0&&(w[At]=null,E[At].disconnect(ut))}for(let at=0;at<z.added.length;at++){let ut=z.added[at],At=w.indexOf(ut);if(At===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=w.length){w.push(ut),At=Ot;break}else if(w[Ot]===null){w[Ot]=ut,At=Ot;break}if(At===-1)break}let rt=E[At];rt&&rt.connect(ut)}}function B(z,at){at===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(at.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let at=z.near,ut=z.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(ut=p.depthFar)),X.near=U.near=R.near=at,X.far=U.far=R.far=ut,(I!==X.near||q!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,q=X.far),X.layers.mask=z.layers.mask|6,R.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let At=z.parent,rt=X.cameras;B(X,At);for(let Ot=0;Ot<rt.length;Ot++)B(rt[Ot],At);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&z.isPerspectiveCamera&&(D={camera:z,fov:z.fov,zoom:z.zoom}),k(z,X,At)};function k(z,at,ut){ut===null?z.matrix.copy(at.matrixWorld):(z.matrix.copy(ut.matrixWorld),z.matrix.invert(),z.matrix.multiply(at.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(at.projectionMatrix),z.projectionMatrixInverse.copy(at.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ba*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(z){return g[z]};let W=null;function et(z,at){if(u=at.getViewerPose(c||o),m=at,u!==null){let ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let At=!1;ut.length!==X.cameras.length&&(X.cameras.length=0,At=!0);for(let zt=0;zt<ut.length;zt++){let jt=ut[zt],ne=null;if(f!==null)ne=f.getViewport(jt);else{let gt=h.getViewSubImage(d,jt);ne=gt.viewport,zt===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let it=O[zt];it===void 0&&(it=new Qe,it.layers.enable(zt),it.viewport=new _e,O[zt]=it),it.matrix.fromArray(jt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(jt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ne.x,ne.y,ne.width,ne.height),zt===0&&(X.matrix.copy(it.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),At===!0&&X.cameras.push(it)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let zt=h.getDepthInformation(ut[0]);zt&&zt.isValid&&zt.texture&&p.init(zt,s.renderState)}if(rt&&rt.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let zt=0;zt<ut.length;zt++){let jt=ut[zt].camera;if(jt){let ne=g[jt];ne||(ne=new Wr,g[jt]=ne);let it=h.getCameraImage(jt);ne.sourceTexture=it}}}}for(let ut=0;ut<E.length;ut++){let At=w[ut],rt=E[ut];At!==null&&rt!==void 0&&rt.update(At,at,c||o)}W&&W(z,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let lt=new Jf;lt.setAnimationLoop(et),this.setAnimationLoop=function(z){W=z},this.dispose=function(){}}},py=new $t,op=new Wt;op.set(-1,0,0,0,1,0,0,0,1);function my(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Xh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ne&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ne&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),T=M.envMap,y=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(py.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(op),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=T*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ne&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gy(i,t,e,n){let s={},r={};function o(M,T){let y=T.program;n.uniformBlockBinding(M,y,s[M.id])}function a(M,T){let y=s[M.id];y===void 0&&(m(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",p));let E=T.program;n.updateUBOMapping(M,E);let w=t.render.frame;r[M.id]!==w&&(c(M),r[M.id]=w)}function l(M){let T=i.createBuffer(),y=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],y=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,x=y.length;w<x;w++){let b=y[w];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)u(b[D],w,D,E);else u(b,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,T,y,E){if(d(M,T,y,E)===!0){let w=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let D=0;D<x.length;D++){let R=x[D],U=v(R,!0);h(R,M.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,M.__data)}}function h(M,T,y){typeof M=="number"||typeof M=="boolean"?T[y]=M:M.isMatrix3?(T[y]=M.elements[0],T[y+1]=M.elements[1],T[y+2]=M.elements[2],T[y+3]=0,T[y+4]=M.elements[3],T[y+5]=M.elements[4],T[y+6]=M.elements[5],T[y+7]=0,T[y+8]=M.elements[6],T[y+9]=M.elements[7],T[y+10]=M.elements[8],T[y+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-y),y):M.toArray(T,y)}function d(M,T,y,E){let w=M.value,x=T+"_"+y;if(Array.isArray(w)){E[x]===void 0&&(E[x]=[]);let b=E[x],D=!1;for(let R=0;R<w.length;R++)f(w[R],b,R)===!0&&(D=!0);return D}return f(w,E,x)}function f(M,T,y){if(T[y]===void 0)return typeof M=="number"||typeof M=="boolean"?T[y]=M:ArrayBuffer.isView(M)?T[y]=M.slice():T[y]=M.clone(),!0;{let E=T[y];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return T[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function m(M){let T=M.uniforms,y=0,E=16;for(let x=0,b=T.length;x<b;x++){let D=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,U=D.length;R<U;R++){let O=D[R],X=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(T[x])||Array.isArray(O.value),q=y;for(let L=0,$=X.length;L<$;L++){let B=X[L],k=v(B,I),W=y%E,et=W%k.boundary,lt=W+et;y+=et,lt!==0&&E-lt<k.storage&&(y+=E-lt),L===0&&(q=y),y+=k.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((y-q)/Float32Array.BYTES_PER_ELEMENT),O.__offset=q}}let w=y%E;return w>0&&(y+=E-w),M.__size=y,M.__cache={},this}function v(M,T){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){let T=M.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}var xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function _y(){return jn===null&&(jn=new $i(xy,16,16,Fi,Ce),jn.name="DFG_LUT",jn.minFilter=hn,jn.magFilter=hn,jn.wrapS=$n,jn.wrapT=$n,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var tc=class{constructor(t={}){let{canvas:e=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=f,p=new Set([yl,vl,_l]),g=new Set([je,Hn,Ks,es,gl,xl]),M=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,w=null,x=[],b=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,O=null,X=null,I=null,q=null;this._outputColorSpace=ln;let Z=0,L=0,$=null,B=-1,k=null,W=new _e,et=new _e,lt=null,z=new bt(0),at=0,ut=e.width,At=e.height,rt=1,Ot=null,ye=null,zt=new _e(0,0,ut,At),jt=new _e(0,0,ut,At),ne=!1,it=new Ii,gt=new Va,ft=!1,Pt=!1,Tt=new $t,Yt=new C,Ut=new _e,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function he(){return $===null?rt:1}let F=n;function Pe(S,N){return e.getContext(S,N)}let te,ge,yt,Ee,kt,Vt,A,_,G,ot,nt,pt,Mt,Q,j,xt,P,tt,K,_t,dt,mt,Ft;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),F===null){let N="webgl2";if(F=Pe(N,S),F===null)throw Pe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(S){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Gt("WebGLRenderer: "+S.message),S}function Kt(){te=new C_(F),te.init(),dt=new uy(F,te),ge=new __(F,te,t,dt),yt=new cy(F,te),ge.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),X=F.createFramebuffer(),I=F.createFramebuffer(),q=F.createFramebuffer(),Ee=new L_(F),kt=new Zv,Vt=new hy(F,te,yt,kt,ge,dt,Ee),A=new R_(R),_=new Ng(F),mt=new g_(F,_),G=new P_(F,_,Ee,mt),ot=new N_(F,G,_,mt,Ee),tt=new D_(F,ge,Vt),j=new v_(kt),nt=new $v(R,A,te,ge,mt,j),pt=new my(R,kt),Mt=new Kv,Q=new iy(te),P=new m_(R,A,yt,ot,m,l),xt=new ly(R,ot,ge),Ft=new gy(F,Ee,ge,yt),K=new x_(F,te,Ee),_t=new I_(F,te,Ee),Ee.programs=nt.programs,R.capabilities=ge,R.extensions=te,R.properties=kt,R.renderLists=Mt,R.shadowMap=xt,R.state=yt,R.info=Ee}v!==je&&(D=new F_(v,e.width,e.height,a,s,r));let ct=new su(R,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(S){S!==void 0&&(rt=S,this.setSize(ut,At,!1))},this.getSize=function(S){return S.set(ut,At)},this.setSize=function(S,N,Y=!0){if(ct.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=S,At=N,e.width=Math.floor(S*rt),e.height=Math.floor(N*rt),Y===!0&&(e.style.width=S+"px",e.style.height=N+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(ut*rt,At*rt).floor()},this.setDrawingBufferSize=function(S,N,Y){ut=S,At=N,rt=Y,e.width=Math.floor(S*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===je){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(W)},this.getViewport=function(S){return S.copy(zt)},this.setViewport=function(S,N,Y,H){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,N,Y,H),yt.viewport(W.copy(zt).multiplyScalar(he()).round())},this.getScissor=function(S){return S.copy(jt)},this.setScissor=function(S,N,Y,H){S.isVector4?jt.set(S.x,S.y,S.z,S.w):jt.set(S,N,Y,H),yt.scissor(et.copy(jt).multiplyScalar(he()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){yt.setScissorTest(ne=S)},this.setOpaqueSort=function(S){Ot=S},this.setTransparentSort=function(S){ye=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,Y=!0){let H=0;if(S){let V=!1;if($!==null){let St=$.texture.format;V=p.has(St)}if(V){let St=$.texture.type,It=g.has(St),vt=P.getClearColor(),Rt=P.getClearAlpha(),Nt=vt.r,Xt=vt.g,ae=vt.b;It?(M[0]=Nt,M[1]=Xt,M[2]=ae,M[3]=Rt,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=Nt,T[1]=Xt,T[2]=ae,T[3]=Rt,F.clearBufferiv(F.COLOR,0,T))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),P.dispose(),Mt.dispose(),Q.dispose(),Vt.dispose(),kt.dispose(),A.dispose(),ot.dispose(),G.dispose(),mt.dispose(),Ft.dispose(),nt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Lu),ct.removeEventListener("sessionend",Du),ki.stop()};function Bt(S){S.preventDefault(),Lr("WebGLRenderer: Context Lost."),U=!0}function Jt(){Lr("WebGLRenderer: Context Restored."),U=!1;let S=Ee.autoReset,N=xt.enabled,Y=xt.autoUpdate,H=xt.needsUpdate,V=xt.type;Kt(),Ee.autoReset=S,xt.enabled=N,xt.autoUpdate=Y,xt.needsUpdate=H,xt.type=V}function wt(S){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){let N=S.target;N.removeEventListener("dispose",pe),Be(N)}function Be(S){bi(S),kt.remove(S)}function bi(S){let N=kt.get(S).programs;N!==void 0&&(N.forEach(function(Y){nt.releaseProgram(Y)}),S.isShaderMaterial&&nt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,Y,H,V,St){N===null&&(N=ie);let It=V.isMesh&&V.matrixWorld.determinantAffine()<0,vt=Mm(S,N,Y,H,V);yt.setMaterial(H,It);let Rt=Y.index,Nt=1;if(H.wireframe===!0){if(Rt=G.getWireframeAttribute(Y),Rt===void 0)return;Nt=2}let Xt=Y.drawRange,ae=Y.attributes.position,Lt=Xt.start*Nt,le=(Xt.start+Xt.count)*Nt;St!==null&&(Lt=Math.max(Lt,St.start*Nt),le=Math.min(le,(St.start+St.count)*Nt)),Rt!==null?(Lt=Math.max(Lt,0),le=Math.min(le,Rt.count)):ae!=null&&(Lt=Math.max(Lt,0),le=Math.min(le,ae.count));let Ie=le-Lt;if(Ie<0||Ie===1/0)return;mt.setup(V,H,vt,Y,Rt);let ve,xe=K;if(Rt!==null&&(ve=_.get(Rt),xe=_t,xe.setIndex(ve)),V.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*he()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(V.isLine){let $e=H.linewidth;$e===void 0&&($e=1),yt.setLineWidth($e*he()),V.isLineSegments?xe.setMode(F.LINES):V.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else V.isPoints?xe.setMode(F.POINTS):V.isSprite&&xe.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(te.get("WEBGL_multi_draw"))xe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let $e=V._multiDrawStarts,Dt=V._multiDrawCounts,on=V._multiDrawCount,de=Rt?_.get(Rt).bytesPerElement:1,zi=kt.get(H).currentProgram.getUniforms();for(let Ze=0;Ze<on;Ze++)zi.setValue(F,"_gl_DrawID",Ze),xe.render($e[Ze]/de,Dt[Ze])}else if(V.isInstancedMesh)xe.renderInstances(Lt,Ie,V.count);else if(Y.isInstancedBufferGeometry){let $e=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Dt=Math.min(Y.instanceCount,$e);xe.renderInstances(Lt,Ie,Dt)}else xe.render(Lt,Ie)};function Iu(S,N,Y,H){O!==null&&S.isNodeMaterial&&O.setObject(H,S),ft===!0&&j.setState(S,Y,!1),S.transparent===!0&&S.side===We&&S.forceSinglePass===!1?(S.side=Ne,S.needsUpdate=!0,dr(S,N,H),S.side=Kn,S.needsUpdate=!0,dr(S,N,H),S.side=We):dr(S,N,H)}this.compile=function(S,N,Y=null){Y===null&&(Y=S),O!==null&&O.renderStart(S,N,Y),w=Q.get(Y),w.init(N),b.push(w),Y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),S!==Y&&S.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Pt=this.localClippingEnabled,ft=j.init(this.clippingPlanes,Pt),ft===!0&&j.setGlobalState(this.clippingPlanes,N),O!==null&&xt.render(w.state.shadowsArray,Y,N);let H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let St=V.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let vt=St[It];Iu(vt,Y,N,V),H.add(vt)}else Iu(St,Y,N,V),H.add(St)}),w=b.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(S,N,Y=null){let H=this.compile(S,N,Y);return new Promise(V=>{function St(){if(H.forEach(function(It){let Rt=kt.get(It).currentProgram;(Rt===void 0||Rt.isReady())&&H.delete(It)}),H.size===0){V(S);return}setTimeout(St,10)}te.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let kc=null;function vm(S){kc&&kc(S)}function Lu(){ki.stop()}function Du(){ki.start()}let ki=new Jf;ki.setAnimationLoop(vm),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(S){kc=S,ct.setAnimationLoop(S),S===null?ki.stop():ki.start()},ct.addEventListener("sessionstart",Lu),ct.addEventListener("sessionend",Du),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(S,N);let Y=ct.enabled===!0&&ct.isPresenting===!0,H=D!==null&&($===null||Y)&&D.begin(R,$);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(N),N=ct.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,$),w=Q.get(S,b.length),w.init(N),w.state.textureUnits=Vt.getTextureUnits(),b.push(w),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?gt.setFromArrayCamera(N):it.setFromProjectionMatrix(Tt,Tn,N.reversedDepth),Pt=this.localClippingEnabled,ft=j.init(this.clippingPlanes,Pt),E=Mt.get(S,x.length),E.init(),x.push(E),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&zc(It,N,-1/0,R.sortObjects)}zc(S,N,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(w.state.lightsArray),R.sortObjects===!0&&E.sort(Ot,ye),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&P.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),ft===!0&&j.beginShadows();let V=w.state.shadowsArray;if(xt.render(V,S,N),ft===!0&&j.endShadows(),(H&&D.hasRenderPass())===!1){let It=E.opaque,vt=E.transmissive;if(w.setupLights(),N.isArrayCamera){let Rt=N.cameras;if(vt.length>0)for(let Nt=0,Xt=Rt.length;Nt<Xt;Nt++){let ae=Rt[Nt];Uu(It,vt,S,ae)}oe&&P.render(S);for(let Nt=0,Xt=Rt.length;Nt<Xt;Nt++){let ae=Rt[Nt];Nu(E,S,ae,ae.viewport)}}else vt.length>0&&Uu(It,vt,S,N),oe&&P.render(S),Nu(E,S,N)}$!==null&&L===0&&(Vt.updateMultisampleRenderTarget($),Vt.updateRenderTargetMipmap($)),H&&D.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),mt.resetDefaultState(),B=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],Vt.setTextureUnits(w.state.textureUnits),ft===!0&&j.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,O!==null&&O.renderEnd()};function zc(S,N,Y,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){let It=N.isArrayCamera?gt:it;if(!S.frustumCulled||S.intersectsFrustum(It)){H&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Tt);let vt=ot.update(S),Rt=S.material;Rt.visible&&E.push(S,vt,Rt,Y,Ut.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){let It=N.isArrayCamera?gt:it;if(!S.frustumCulled||S.intersectsFrustum(It)){let vt=ot.update(S),Rt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ut.copy(vt.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(Tt)),Array.isArray(Rt)){let Nt=vt.groups;for(let Xt=0,ae=Nt.length;Xt<ae;Xt++){let Lt=Nt[Xt],le=Rt[Lt.materialIndex];le&&le.visible&&E.push(S,vt,le,Y,Ut.z,Lt,N)}}else Rt.visible&&E.push(S,vt,Rt,Y,Ut.z,null,N)}}}let St=S.children;for(let It=0,vt=St.length;It<vt;It++)zc(St[It],N,Y,H)}function Nu(S,N,Y,H){let{opaque:V,transmissive:St,transparent:It}=S;w.setupLightsView(Y),ft===!0&&j.setGlobalState(R.clippingPlanes,Y),H&&yt.viewport(W.copy(H)),V.length>0&&qo(V,N,Y),St.length>0&&qo(St,N,Y),It.length>0&&qo(It,N,Y),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Uu(S,N,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Lt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Se(1,1,{generateMipmaps:!0,type:Lt?Ce:je,minFilter:xi,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let St=w.state.transmissionRenderTarget[H.id],It=H.viewport||W;St.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let vt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(z),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),oe&&P.render(Y);let Xt=R.toneMapping;R.toneMapping=Qn;let ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),ft===!0&&j.setGlobalState(R.clippingPlanes,H),qo(S,Y,H),Vt.updateMultisampleRenderTarget(St),Vt.updateRenderTargetMipmap(St),te.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let le=0,Ie=N.length;le<Ie;le++){let ve=N[le],{object:xe,geometry:$e,material:Dt,group:on}=ve;if(Dt.side===We&&xe.layers.test(H.layers)){let de=Dt.side;Dt.side=Ne,Dt.needsUpdate=!0,Fu(xe,Y,H,$e,Dt,on),Dt.side=de,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Vt.updateMultisampleRenderTarget(St),Vt.updateRenderTargetMipmap(St))}R.setRenderTarget(vt,Rt,Nt),R.setClearColor(z,at),ae!==void 0&&(H.viewport=ae),R.toneMapping=Xt}function qo(S,N,Y){let H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,St=S.length;V<St;V++){let It=S[V],{object:vt,geometry:Rt,group:Nt}=It,Xt=It.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),vt.layers.test(Y.layers)&&Fu(vt,N,Y,Rt,Xt,Nt)}}function Fu(S,N,Y,H,V,St){O!==null&&V.isNodeMaterial&&O.setObject(S,V),S.onBeforeRender(R,N,Y,H,V,St),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(R,N,Y,H,S,St),V.transparent===!0&&V.side===We&&V.forceSinglePass===!1?(V.side=Ne,V.needsUpdate=!0,R.renderBufferDirect(Y,N,H,V,S,St),V.side=Kn,V.needsUpdate=!0,R.renderBufferDirect(Y,N,H,V,S,St),V.side=We):R.renderBufferDirect(Y,N,H,V,S,St),S.onAfterRender(R,N,Y,H,V,St)}function Ou(S){let N=0;for(let Y of S)Y.texture!==null&&N++;return N}function dr(S,N,Y){N.isScene!==!0&&(N=ie);let H=kt.get(S),V=w.state.lights,St=w.state.shadowsArray,It=V.state.version,vt=nt.getParameters(S,V.state,St,N,Y,w.state.lightProbeGridArray),Rt=nt.getProgramCacheKey(vt),Nt=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Xt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=A.get(S.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",pe),Nt=new Map,H.programs=Nt,H.programVariants=new Map);let ae=Nt.get(Rt);if(ae!==void 0){if(H.currentProgram===ae&&H.lightsStateVersion===It)return ku(S,vt),ae}else vt.uniforms=nt.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,Y,vt),S.onBeforeCompile(vt,R),ae=nt.acquireProgram(vt,Rt),Nt.set(Rt,ae),H.uniforms=vt.uniforms;let Lt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=j.uniform),ku(S,vt),H.needsLights=bm(S),H.lightsStateVersion=It,H.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.sunLights.value=V.state.sun,Lt.sunLightShadows.value=V.state.sunShadow,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.sunShadowMatrix.value=V.state.sunShadowMatrix,Lt.sunShadowCascade.value=V.state.sunShadowCascade,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Ou(w.state.lightProbeGridArray),H.currentProgram=ae,H.uniformsList=null,ae}function ym(S,N,Y,H,V){let St=kt.get(S),It=St.currentProgram.id+","+H+","+V,vt=St.programVariants.get(It);return vt===void 0?(vt=dr(S,N,Y),St.programVariants.set(It,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=H,St.toneMapping=V),vt}function Bu(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ku(S,N){let Y=kt.get(S);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Mm(S,N,Y,H,V){N.isScene!==!0&&(N=ie),Vt.resetTextureUnits();let St=N.fog,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,vt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ee.workingColorSpace,Rt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Nt=A.get(H.envMap||It,Rt),Xt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ae=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!Y.morphAttributes.position,le=!!Y.morphAttributes.normal,Ie=!!Y.morphAttributes.color,ve=Qn;H.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ve=R.toneMapping);let xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$e=xe!==void 0?xe.length:0,Dt=kt.get(H),on=w.state.lights;if(ft===!0&&(Pt===!0||S!==k)){let be=S===k&&H.id===B;j.setState(H,S,be)}let de=!1,zi=!1;H.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==on.state.version||V.isBatchedMesh&&Dt.batching===!1||!V.isBatchedMesh&&Dt.batching===!0||V.isBatchedMesh&&Dt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Dt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Dt.instancing===!1||!V.isInstancedMesh&&Dt.instancing===!0||V.isSkinnedMesh&&Dt.skinning===!1||!V.isSkinnedMesh&&Dt.skinning===!0||V.isInstancedMesh&&Dt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Dt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Dt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Dt.instancingMorph===!1&&V.morphTexture!==null||Dt.envMap!==Nt||H.fog===!0&&Dt.fog!==St||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==j.numPlanes||Dt.numIntersection!==j.numIntersection)||Dt.vertexAlphas!==Xt||Dt.vertexTangents!==ae||Dt.morphTargets!==Lt||Dt.morphNormals!==le||Dt.morphColors!==Ie||Dt.morphTargetsCount!==$e||Dt.numLightProbeGrids!==Ou(w.state.lightProbeGridArray)?de=!0:(Dt.outputColorSpace!==vt||Dt.toneMapping!==ve)&&(zi=!0):(de=!0,Dt.__version=H.version);let Ze=Dt.currentProgram;(de===!0||zi===!0)&&(Ze=zi===!0?ym(H,N,V,vt,ve):dr(H,N,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Ze,Dt));let Yo=!1,Ti=!1,Hi=!1,ce=Ze.getUniforms(),qe=Dt.uniforms;if(yt.useProgram(Ze.program)&&(Yo=!0,Ti=!0,Hi=!0),H.id!==B&&(B=H.id,Ti=!0),Yo||k!==S){yt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(F,"projectionMatrix",S.projectionMatrix),ce.setValue(F,"viewMatrix",S.matrixWorldInverse);let ke=ce.map.cameraPosition;ke!==void 0&&ke.setValue(F,Yt.setFromMatrixPosition(S.matrixWorld)),ge.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,Ti=!0,Hi=!0)}if(Dt.needsLights&&(on.state.sunShadowMap.length>0&&ce.setValue(F,"sunShadowMap",on.state.sunShadowMap,Vt),on.state.directionalShadowMap.length>0&&ce.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,Vt),on.state.spotShadowMap.length>0&&ce.setValue(F,"spotShadowMap",on.state.spotShadowMap,Vt),on.state.pointShadowMap.length>0&&ce.setValue(F,"pointShadowMap",on.state.pointShadowMap,Vt)),V.isSkinnedMesh){ce.setOptional(F,V,"bindMatrix"),ce.setOptional(F,V,"bindMatrixInverse");let be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ce.setValue(F,"boneTexture",be.boneTexture,Vt))}V.isBatchedMesh&&(ce.setOptional(F,V,"batchingTexture"),ce.setValue(F,"batchingTexture",V._matricesTexture,Vt),ce.setOptional(F,V,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",V._indirectTexture,Vt),ce.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",V._colorsTexture,Vt));let Nn=Y.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&tt.update(V,Y,Ze),(Ti||Dt.receiveShadow!==V.receiveShadow)&&(Dt.receiveShadow=V.receiveShadow,ce.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(qe.envMapIntensity.value=N.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=_y()),Ti){if(ce.setValue(F,"toneMappingExposure",R.toneMappingExposure),Dt.needsLights&&Sm(qe,Hi),St&&H.fog===!0&&pt.refreshFogUniforms(qe,St),pt.refreshMaterialUniforms(qe,H,rt,At,w.state.transmissionRenderTarget[S.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let be=y,ke=0;for(let si of w.state.lightProbeGridArray)si.texture!==null&&(be.textures[ke]=si.texture,be.min[ke]=si.boundingBox.min,be.max[ke]=si.boundingBox.max,be.resolution[ke]=si.resolution,ke++);for(let si in be)be[si].length=ke;qe.probesSH.value=be.textures,qe.probesMin.value=be.min,qe.probesMax.value=be.max,qe.probesResolution.value=be.resolution}js.upload(F,Bu(Dt),qe,Vt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(js.upload(F,Bu(Dt),qe,Vt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(F,"center",V.center),ce.setValue(F,"modelViewMatrix",V.modelViewMatrix),ce.setValue(F,"normalMatrix",V.normalMatrix),ce.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let be=H.uniformsGroups;for(let ke=0,si=be.length;ke<si;ke++){let Hu=be[ke];Ft.update(Hu,Ze),Ft.bind(Hu,Ze)}}return Ze}function Sm(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function bm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(S,N,Y){let H=kt.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),kt.get(S.texture).__webglTexture=N,kt.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let Y=kt.get(S);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,Y=0){$=S,Z=N,L=Y;let H=null,V=!1,St=!1;if(S){let vt=kt.get(S);if(vt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(F.FRAMEBUFFER,vt.__webglFramebuffer),W.copy(S.viewport),et.copy(S.scissor),lt=S.scissorTest,yt.viewport(W),yt.scissor(et),yt.setScissorTest(lt),B=-1;return}else if(vt.__webglFramebuffer===void 0)Vt.setupRenderTarget(S);else if(vt.__hasExternalTextures)Vt.rebindTextures(S,kt.get(S.texture).__webglTexture,kt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xt=S.depthTexture;if(vt.__boundDepthTexture!==Xt){if(Xt!==null&&kt.has(Xt)&&(S.width!==Xt.image.width||S.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(S)}}let Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Nt=kt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?H=Nt[N][Y]:H=Nt[N],V=!0):S.samples>0&&Vt.useMultisampledRTT(S)===!1?H=kt.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?H=Nt[Y]:H=Nt,W.copy(S.viewport),et.copy(S.scissor),lt=S.scissorTest}else W.copy(zt).multiplyScalar(rt).floor(),et.copy(jt).multiplyScalar(rt).floor(),lt=ne;if(Y!==0&&(H=X),yt.bindFramebuffer(F.FRAMEBUFFER,H)&&yt.drawBuffers(S,H),yt.viewport(W),yt.scissor(et),yt.setScissorTest(lt),V){let vt=kt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,vt.__webglTexture,Y)}else if(St){let vt=N;for(let Rt=0;Rt<S.textures.length;Rt++){let Nt=kt.get(S.textures[Rt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Rt,Nt.__webglTexture,Y,vt)}}else if(S!==null&&Y!==0){let vt=kt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,Y)}B=-1};function zu(S){let N=kt.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ge.textureFormatReadable(S.format),N.__typeReadable=ge.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,Y,H,V,St,It,vt=0){if(!(S&&S.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=kt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&It!==void 0&&(Rt=Rt[It],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){yt.bindFramebuffer(F.FRAMEBUFFER,Rt);try{let Nt=S.textures[vt],Xt=Nt.format,ae=Nt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+vt);let Lt=zu(Nt);if(Lt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&Y>=0&&Y<=S.height-V&&F.readPixels(N,Y,H,V,dt.convert(Xt),dt.convert(ae),St)}finally{let Nt=$!==null?kt.get($).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(S,N,Y,H,V,St,It,vt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=kt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&It!==void 0&&(Rt=Rt[It],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(N>=0&&N<=S.width-H&&Y>=0&&Y<=S.height-V){yt.bindFramebuffer(F.FRAMEBUFFER,Rt);let Nt=S.textures[vt],Xt=Nt.format,ae=Nt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+vt);let Lt=zu(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(N,Y,H,V,dt.convert(Xt),dt.convert(ae),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ie=$!==null?kt.get($).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,Ie);let ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gf(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(le),F.deleteSync(ve),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,Y=0){let H=Math.pow(2,-Y),V=Math.floor(S.image.width*H),St=Math.floor(S.image.height*H),It=N!==null?N.x:0,vt=N!==null?N.y:0;Vt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,It,vt,V,St),yt.unbindTexture()},this.copyTextureToTexture=function(S,N,Y=null,H=null,V=0,St=0){let It,vt,Rt,Nt,Xt,ae,Lt,le,Ie,ve=S.isCompressedTexture?S.mipmaps[St]:S.image;if(Y!==null)It=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,Rt=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,Xt=Y.min.y,ae=Y.isBox3?Y.min.z:0;else{let ce=Math.pow(2,-V);It=Math.floor(ve.width*ce),vt=Math.floor(ve.height*ce),S.isDataArrayTexture?Rt=ve.depth:S.isData3DTexture?Rt=Math.floor(ve.depth*ce):Rt=1,Nt=0,Xt=0,ae=0}H!==null?(Lt=H.x,le=H.y,Ie=H.z):(Lt=0,le=0,Ie=0);let xe=dt.convert(N.format),$e=dt.convert(N.type),Dt;N.isData3DTexture?(Vt.setTexture3D(N,0),Dt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Vt.setTexture2DArray(N,0),Dt=F.TEXTURE_2D_ARRAY):(Vt.setTexture2D(N,0),Dt=F.TEXTURE_2D),yt.activeTexture(F.TEXTURE0),yt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),yt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),yt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let on=yt.getParameter(F.UNPACK_ROW_LENGTH),de=yt.getParameter(F.UNPACK_IMAGE_HEIGHT),zi=yt.getParameter(F.UNPACK_SKIP_PIXELS),Ze=yt.getParameter(F.UNPACK_SKIP_ROWS),Yo=yt.getParameter(F.UNPACK_SKIP_IMAGES);yt.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),yt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),yt.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),yt.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),yt.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);let Ti=S.isDataArrayTexture||S.isData3DTexture,Hi=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let ce=kt.get(S),qe=kt.get(N),Nn=kt.get(ce.__renderTarget),be=kt.get(qe.__renderTarget);yt.bindFramebuffer(F.READ_FRAMEBUFFER,Nn.__webglFramebuffer),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<Rt;ke++)Ti&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(S).__webglTexture,V,ae+ke),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(N).__webglTexture,St,Ie+ke)),F.blitFramebuffer(Nt,Xt,Nt+It,Xt+vt,Lt,le,Lt+It,le+vt,F.DEPTH_BUFFER_BIT,F.NEAREST);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||kt.has(S)){let ce=kt.get(S),qe=kt.get(N);yt.bindFramebuffer(F.READ_FRAMEBUFFER,I),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,q);for(let Nn=0;Nn<Rt;Nn++)Ti?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ce.__webglTexture,V,ae+Nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce.__webglTexture,V),Hi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,St,Ie+Nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,St),V!==0?F.blitFramebuffer(Nt,Xt,Nt+It,Xt+vt,Lt,le,Lt+It,le+vt,F.COLOR_BUFFER_BIT,F.NEAREST):Hi?F.copyTexSubImage3D(Dt,St,Lt,le,Ie+Nn,Nt,Xt,It,vt):F.copyTexSubImage2D(Dt,St,Lt,le,Nt,Xt,It,vt);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Hi?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Dt,St,Lt,le,Ie,It,vt,Rt,xe,$e,ve.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Dt,St,Lt,le,Ie,It,vt,Rt,xe,ve.data):F.texSubImage3D(Dt,St,Lt,le,Ie,It,vt,Rt,xe,$e,ve):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Lt,le,It,vt,xe,$e,ve.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Lt,le,ve.width,ve.height,xe,ve.data):F.texSubImage2D(F.TEXTURE_2D,St,Lt,le,It,vt,xe,$e,ve);yt.pixelStorei(F.UNPACK_ROW_LENGTH,on),yt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),yt.pixelStorei(F.UNPACK_SKIP_PIXELS,zi),yt.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),yt.pixelStorei(F.UNPACK_SKIP_IMAGES,Yo),St===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Dt),yt.unbindTexture()},this.initRenderTarget=function(S){kt.get(S).__webglFramebuffer===void 0&&Vt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Vt.setTextureCube(S,0):S.isData3DTexture?Vt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Vt.setTexture2DArray(S,0):Vt.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){Z=0,L=0,$=null,yt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var en=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vy=new qs(-1,1,1,-1,0,1),ru=class extends fe{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},yy=new ru,Vn=class{constructor(t){this._mesh=new Zt(yy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ic=class extends en{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mn.clone(t.uniforms),this.material=new re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Io=class extends en{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sc=class extends en{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var rc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ce}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ic(nr),this.copyPass.material.blending=gi,this.timer=new ho}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Io!==void 0&&(o instanceof Io?n=!0:o instanceof sc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oc=class extends en{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new bt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var ap={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ir=class i extends en{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(r,o,{type:Ce,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Se(r,o,{type:Ce,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Se(r,o,{type:Ce,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ap;this.highPassUniforms=Mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new re({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mn.clone(nr.uniforms),this.blendMaterial=new re({uniforms:this.copyUniforms,vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,premultipliedAlpha:!0,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new bt,this._oldClearAlpha=1,this._basic=new Ye,this._fsQuad=new Vn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new re({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ir.BlurDirectionX=new st(1,0);ir.BlurDirectionY=new st(0,1);var Lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ac=class extends en{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mn.clone(Lo.uniforms),this.material=new Xs({name:Lo.name,uniforms:this.uniforms,vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader}),this._fsQuad=new Vn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===po?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ji?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===go&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Do=class i extends Zt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new bt(e.color):new bt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new _n,h=new C,d=new C,f=new C,m=new $t,v=new C(0,0,-1),p=new _e,g=new C,M=new C,T=new _e,y=new $t,E=new Se(r,o,{samples:c,type:Ce}),w=new re({name:l.name!==void 0?l.name:"unspecified",uniforms:Mn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=E.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=y,this.material=w,this.onBeforeRender=function(x,b,D){let R=this.getReflectionCamera(D);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(D.matrixWorld),m.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),g.subVectors(d,f),g.dot(h)>0===!0&&this.forceUpdate===!1)return;g.reflect(h).negate(),g.add(d),m.extractRotation(D.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(f),M.subVectors(d,v),M.reflect(h).negate(),M.add(d),R.position.copy(g),R.up.set(0,1,0),R.up.applyMatrix4(m),R.up.reflect(h),R.lookAt(M),R.far=D.far,R.updateMatrixWorld(),R.projectionMatrix.copy(D.projectionMatrix),R.projectionMatrix.elements[8]*=-1,R.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(R.projectionMatrix),y.multiply(R.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(R.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let O=R.projectionMatrix;R.isOrthographicCamera?(T.x=(Math.sign(p.x)+O.elements[8])/O.elements[0],T.y=(Math.sign(p.y)+O.elements[9])/O.elements[5],T.z=-D.far,T.w=1):(T.x=(Math.sign(p.x)+O.elements[8])/O.elements[0],T.y=(Math.sign(p.y)+O.elements[9])/O.elements[5],T.z=-1,T.w=(1+O.elements[10])/O.elements[14]),p.multiplyScalar(2/p.dot(T)),O.elements[2]=p.x,O.elements[6]=p.y,R.isOrthographicCamera?(O.elements[10]=p.z-a,O.elements[14]=p.w-1):(O.elements[10]=p.z+1-a,O.elements[14]=p.w),n.visible=!1;let X=x.getRenderTarget(),I=x.xr.enabled,q=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(E),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(b,R),x.xr.enabled=I,x.shadowMap.autoUpdate=q,x.setRenderTarget(X);let Z=D.viewport;Z!==void 0&&x.state.viewport(Z),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let b=this._reflectionCameras.get(x);return b===void 0&&(b=x.clone(),this._reflectionCameras.set(x,b)),b}}};Do.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var lc=class extends Yi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new we;t.deleteAttribute("uv");let e=new zn({side:Ne}),n=new zn,s=new co(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ve(t,n,6),a=new Ge;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Zt(t,sr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Zt(t,sr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Zt(t,sr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Zt(t,sr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Zt(t,sr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Zt(t,sr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sr(i){return new so({color:0,emissive:16777215,emissiveIntensity:i})}var me=.5,No=1.15,cc=.08,My=3.7,Pn=.0105,ss=new bt(132623),Wn=3.4,or=1.4,Sy=1.6,by=2.6,lp=new Map;function Xn(i){let t=lp.get(i);return t||(t=new bt(i),lp.set(i,t)),t}function Uo(i,t,e,n){let s=i.x+.5,r=i.y+.5;if(i.alive){if(i.moving){let o=i.p+t.speedOf(i)*e;o>1200&&(i.queue.length||i.bot)&&(o=1200),s+=us[i.dir]*o/1200,r+=ds[i.dir]*o/1200}}else i.killer!==$o&&(s+=us[i.dir]*.94,r+=ds[i.dir]*.94);return n[0]=s,n[1]=r,n}function Ty(i,t){return(t-i.ground)*Wn}function rr(i,t,e,n){let s=(t-i.ground)*Wn;if(i.T(t,e,n)!==3)return s;let r=i.rampOf(e,n),o=r.dir===0?e-r.x0:r.dir===1?n-r.y0:r.dir===2?r.x1-e:r.y1-n;return s+(o+.5)/r.len*(r.kick?or:Wn)}function ou(i,t,e,n){return i===Yu?t+(e-t)*n*n:t+(e-t)*n+4*(i===fs?by:Sy)*n*(1-n)}function hp(i,t,e){return i.alive&&i.moving?Math.min(1,(i.p+t.speedOf(i)*e)/1200):0}function lu(i,t,e,n){let s=hp(i,t,e);if(i.alive&&i.air>0){let o=i.airMax||1,a=Math.max(0,Math.min(1,(o-i.air+s)/o)),l=Ty(t,i.l)+(i.airKind===fs?or:0),c=rr(t,i.tl,i.x+us[i.dir]*i.air,i.y+ds[i.dir]*i.air),u=Math.max(0,a-.5/o),h=Math.min(1,a+.5/o);return n.h=ou(i.airKind,l,c,a),n.pitch=Math.atan2(ou(i.airKind,l,c,h)-ou(i.airKind,l,c,u),(h-u)*o*me),n.ground=c,n.air=a,n}let r=rr(t,i.l,i.x,i.y);if(s>0){let o=rr(t,i.tl,i.tx,i.ty);n.h=r+(o-r)*s,n.pitch=Math.atan2(o-r,me)}else n.h=r,n.pitch=0;return n.ground=n.h,n.air=-1,n}function wy(i,t){for(;t>0&&i.length>=8;){let e=i.length,n=i[e-4]-i[e-8],s=i[e-3]-i[e-7],r=Math.abs(n)+Math.abs(s);if(r>t){let o=(r-t)/r;i[e-4]=i[e-8]+n*o,i[e-3]=i[e-7]+s*o,i[e-2]=i[e-6]+(i[e-2]-i[e-6])*o,i[e-1]=i[e-5]+(i[e-1]-i[e-5])*o;return}i.length=e-4,t-=r}}function Ey(i,t){let e=0;for(;e<i.length&&!(i[e+3]>t);)e+=4;if(e>=i.length){i.length=0;return}let n=e;if(e>=4&&!Number.isNaN(i[e-4])){let s=e-4,r=(t-i[s+3])/(i[e+3]-i[s+3]);if(r>0){for(let o=0;o<3;o++)i[s+o]+=(i[e+o]-i[s+o])*r;i[s+3]=t}n=s}n>0&&i.splice(0,n)}var au=[0,0],cp={h:0,pitch:0,ground:0,air:-1};function hc(i,t,e,n){n.length=0;let s=i.corners;for(let r=0;r<s.length;r+=4)s[r]===qu?n.push(NaN,NaN,NaN,NaN):n.push(s[r]+.5,s[r+1]+.5,rr(t,s[r+2],s[r],s[r+1]),s[r+3]);return i.air?n.length-=4:(Uo(i,t,e,au),lu(i,t,e,cp),n.push(au[0],au[1],cp.h,i.dist+hp(i,t,e))),i.alive&&wy(n,My),t.rules.fade&&Ey(n,i.fadeHead<i.claims.length?i.claims[i.fadeHead+2]-.5:1/0),n}function rs(i=128){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);let s=new Gr(t);return s.colorSpace=ln,s}function os(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function qn(i,t){return 1-Math.exp(-i*t)}var In=.34,Ay=[-.42,-1.58],as=.24,gp=.32;function Ry(){let i=new mi;return i.moveTo(0,.2),i.quadraticCurveTo(-.06,.46,-.36,.5),i.lineTo(-.78,.58),i.quadraticCurveTo(-.95,.77,-1.18,.75),i.lineTo(-1.6,.66),i.quadraticCurveTo(-1.92,.62,-2,.42),i.lineTo(-1.98,.24),i.quadraticCurveTo(-1.6,.16,-1.2,.2),i.lineTo(-.7,.2),i.quadraticCurveTo(-.3,.12,0,.2),i}function Cy(){let i=new mi;return i.moveTo(0,.2),i.quadraticCurveTo(.03,.52,-.32,.62),i.lineTo(-.66,.68),i.quadraticCurveTo(-.92,1.02,-1.28,1),i.quadraticCurveTo(-1.62,.98,-1.82,.74),i.quadraticCurveTo(-2.04,.62,-2.06,.38),i.lineTo(-2,.2),i.lineTo(0,.2),i}function Py(){let i=new mi;return i.moveTo(0,.16),i.lineTo(-.06,.3),i.quadraticCurveTo(-.5,.4,-.95,.43),i.quadraticCurveTo(-1.2,.68,-1.55,.66),i.quadraticCurveTo(-1.9,.62,-2.12,.46),i.lineTo(-2.2,.3),i.lineTo(-2.14,.16),i.lineTo(0,.16),i}function Iy(){let i=new mi;return i.moveTo(0,.02),i.quadraticCurveTo(-.55,.22,-1.15,.3),i.lineTo(-1.85,.33),i.lineTo(-2,.2),i.lineTo(-1.95,0),i.quadraticCurveTo(-1,-.05,0,.02),i}function uc(i,t){let e=new eo(i,{depth:t,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:10});return e.translate(0,0,-t/2),e}function Ln(i,t,e=.022){let n=new Vs(i.map(([s,r])=>new C(s,r,t)));return new io(n,48,e,6)}var up=[[-.04,.25],[-.34,.45],[-.8,.52],[-1.2,.55],[-1.64,.5],[-1.96,.36]],dp=[[-.05,.3],[-.4,.46],[-.9,.52],[-1.3,.52],[-1.75,.46],[-2.02,.32]],fp=[[-.66,.7],[-.9,.95],[-1.28,.99],[-1.6,.95],[-1.8,.76]],pp=[[-.1,.24],[-.9,.26],[-1.5,.27],[-2.1,.26]],Ly=[[-.95,.45],[-1.2,.69],[-1.55,.69],[-1.9,.63],[-2.12,.48]],Dy=[[-.15,.09],[-.6,.23],[-1.15,.32],[-1.85,.35]],mp=[[0,.03],[-1,0],[-1.95,.02]],dc=class{constructor(){let t=(e,n,s)=>new we(e,n,s);this.geo={ring:new kn(In,.034,8,44),tire:new Hs(In-.02,In-.02,.34,28).rotateX(Math.PI/2),arc:new kn(.22,.016,6,20,Math.PI*.55),head:t(.05,.06,.22),tail:t(.04,.12,.24),under:new An(2.8,1.3).rotateX(-Math.PI/2),pool:new An(1,1).rotateX(-Math.PI/2),body:uc(Ry(),.3),stripL:Ln(up,.183),stripR:Ln(up,-.183),helmet:new Ki(.15,18,12).scale(1.3,1,.95),torso:new zs(.12,.3,4,10),visor:t(.2,.025,.26),shell:uc(Cy(),.44),shellL:Ln(dp,.253),shellR:Ln(dp,-.253),canopyL:Ln(fp,.16),canopyR:Ln(fp,-.16),disc:new kn(.3,.03,8,40),hubRing:new kn(.1,.022,6,24),car:uc(Py(),.86),carTire:new Hs(as,as,.18,24).rotateX(Math.PI/2),carRing:new kn(as,.026,8,36),carArc:new kn(.15,.014,6,16,Math.PI*.55),carSideL:Ln(pp,.46),carSideR:Ln(pp,-.46),carTop:Ln(Ly,0,.026),lightBar:t(.04,.05,.62),tailBar:t(.04,.07,.7),wedge:uc(Iy(),.58),pod:new zs(.1,.9,4,12).rotateZ(Math.PI/2),podRing:new kn(.105,.016,6,24).rotateY(Math.PI/2),exhaust:new Xr(.085,20).rotateY(-Math.PI/2),spine:Ln(Dy,0,.024),edgeL:Ln(mp,.31),edgeR:Ln(mp,-.31),fin:t(.45,.16,.025)},this.bodyMat=new zn({color:461328,metalness:.88,roughness:.32}),this.darkMat=new zn({color:66051,metalness:.3,roughness:.7}),this.glowTex=rs(),this.mats=new Map}materials(t){let e=this.mats.get(t);if(!e){let n=Xn(t),s=(r,o)=>new Ye({map:this.glowTex,color:r,transparent:!0,opacity:o,blending:fn,depthWrite:!1});e={glow:new Ye({color:n.clone().multiplyScalar(2.6)}),beam:new Ye({color:n.clone().lerp(new bt(1,1,1),.5).multiplyScalar(9)}),ring:new Ye({color:n.clone().multiplyScalar(1.9)}),dim:new Ye({color:n.clone().multiplyScalar(.9)}),under:s(n,.5),hoverGlow:s(n,.85),pool:s(n.clone().lerp(new bt(1,1,1),.55),.22)},this.mats.set(t,e)}return e}build(t,e="cycle"){let n=this.materials(t),s=new cn,r=(l,c,u=0,h=0,d=0,f=s)=>{let m=new Zt(l,c);return m.position.set(u,h,d),f.add(m),m},o={model:s,spinners:[],hover:null,wheelR:In};e==="classic"?this.classic(r,n,o):e==="runner"?this.runner(r,n,o):e==="glider"?this.glider(r,n,o):this.cycle(r,n,o);let a=this.geo;return o.under=r(a.under,e==="glider"?n.hoverGlow:n.under,-1,.012,0),o.under.renderOrder=1,e==="runner"&&o.under.scale.set(1.1,1,1.5),e==="glider"&&o.under.scale.set(1.15,1,1.3),o.pool=r(a.pool,n.pool,1.9,.016,0),o.pool.scale.set(3.4,1,e==="runner"?2.1:1.6),o.pool.renderOrder=1,o}hubs(t,e,n,s,r,o,a=this.geo.arc){let l=new cn;l.position.set(s,r,o);let c=new Zt(a,e.dim),u=new Zt(a,e.dim);u.rotation.z=Math.PI,l.add(c,u),n.model.add(l),n.spinners.push(l)}cycle(t,e,n){let s=this.geo;t(s.body,this.bodyMat),t(s.stripL,e.glow),t(s.stripR,e.glow);for(let o of Ay){t(s.tire,this.darkMat,o,In,0),t(s.ring,e.ring,o,In,.2),t(s.ring,e.ring,o,In,-.2);for(let a of[.19,-.19])this.hubs(t,e,n,o,In,a)}t(s.helmet,this.bodyMat,-.93,.86,0),t(s.visor,e.glow,-.86,.9,0);let r=t(s.torso,this.bodyMat,-1.16,.8,0);r.rotation.z=1.05,t(s.head,e.beam,-.01,.25,0),t(s.tail,e.beam,-1.99,.42,0)}classic(t,e,n){let s=this.geo;t(s.shell,this.bodyMat);for(let r of[s.shellL,s.shellR,s.canopyL,s.canopyR])t(r,e.glow);for(let r of[-.42,-1.62]){t(s.tire,this.darkMat,r,In,0);for(let o of[.255,-.255])t(s.disc,e.ring,r,In,o),t(s.hubRing,e.dim,r,In,o),this.hubs(t,e,n,r,In,o*1.01)}t(s.head,e.beam,0,.32,0).scale.set(1,1.2,1.4),t(s.tail,e.beam,-2.05,.46,0)}runner(t,e,n){let s=this.geo;t(s.car,this.bodyMat);for(let r of[s.carSideL,s.carSideR,s.carTop])t(r,e.glow);for(let r of[-.42,-1.78])for(let o of[1,-1])t(s.carTire,this.darkMat,r,as,o*.5),t(s.carRing,e.ring,r,as,o*.59),this.hubs(t,e,n,r,as,o*.6,s.carArc);t(s.lightBar,e.beam,-.04,.25,0),t(s.tailBar,e.beam,-2.19,.34,0),n.wheelR=as}glider(t,e,n){let s=this.geo,r=new cn;r.position.y=gp,n.model.add(r),n.hover=r,t(s.wedge,this.bodyMat,0,0,0,r);for(let o of[s.spine,s.edgeL,s.edgeR])t(o,e.glow,0,0,0,r);for(let o of[1,-1]){t(s.pod,this.bodyMat,-1.38,.1,o*.38,r),t(s.podRing,e.ring,-1.78,.1,o*.38,r),t(s.exhaust,e.beam,-1.89,.1,o*.38,r);let a=t(s.fin,this.bodyMat,-1.65,.4,o*.17,r);a.rotation.x=o*.35}t(s.head,e.beam,0,.04,0,r)}},cu=[0,0],ar={h:0,pitch:0,ground:0,air:-1},fc=class{constructor(t,e,n,s="cycle"){let{model:r,spinners:o,under:a,pool:l,hover:c,wheelR:u}=t.build(e,s);this.under=a,this.pool=l,this.hover=c,this.wheelR=u,this.hex=e,this.color=Xn(e),this.root=new cn,this.lean=new cn,this.lean.add(r),this.root.add(this.lean),this.spinners=o,this.scene=n,n.add(this.root),this.yaw=NaN,this.leanAmt=0,this.spin=0,this.bob=Math.random()*6,this.lastX=NaN,this.lastZ=NaN,this.exploded=!1,this.world=new C,this.pitch=0}update(t,e,n,s,r,o){Uo(t,e,n,cu),lu(t,e,n,ar);let a=(cu[0]-r)*me,l=(cu[1]-o)*me;this.world.set(a,ar.h,l),this.root.position.copy(this.world);let c=Math.max(-.7,Math.min(.7,ar.pitch));this.pitch+=(c-this.pitch)*qn(ar.air>=0?30:18,s),this.lean.rotation.z=this.pitch;let u=ar.h-ar.ground;this.under.position.y=.012-u,this.under.visible=u<5,this.pool.position.y=.016-u,this.pool.visible=t.alive&&u<2.5,this.hover&&(this.bob+=s*3.1,this.hover.position.y=gp+Math.sin(this.bob)*.035);let h=-t.dir*Math.PI/2;Number.isNaN(this.yaw)&&(this.yaw=h);let d=os(h-this.yaw)*qn(20,s);this.yaw=os(this.yaw+d);let f=s>0?d/s:0,m=Math.max(-.5,Math.min(.5,-f*.045));this.leanAmt+=(m-this.leanAmt)*qn(10,s),this.root.rotation.y=this.yaw,this.lean.rotation.x=this.leanAmt;let v=Number.isNaN(this.lastX)?0:Math.hypot(a-this.lastX,l-this.lastZ);this.lastX=a,this.lastZ=l,v<2&&(this.spin-=v/this.wheelR);for(let p of this.spinners)p.rotation.z=this.spin}get yawNow(){return this.yaw}dispose(){this.scene.remove(this.root)}};var Ny=`
  varying vec3 vColor;
  varying float vH;
  varying float vTop;
  varying float vAlong;
  varying float vDepth;
  void main() {
    #ifdef USE_INSTANCING_COLOR
      vColor = instanceColor;
    #else
      vColor = vec3(1.0);
    #endif
    vH = position.y + 0.5;
    vTop = step(0.5, normal.y);
    vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vAlong = wp.x + wp.z; // walls are axis-aligned, so this runs along each wall
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Uy=`
  uniform float uFogDensity;
  uniform float uTime;
  uniform float uNearMin;
  varying vec3 vColor;
  varying float vH;
  varying float vTop;
  varying float vAlong;
  varying float vDepth;
  void main() {
    // Side faces: see-through body with a bright line along the top edge. The flat
    // top face glows less, or a wall seen from just above would flood the screen.
    float side = 1.0 - vTop;
    float edge = smoothstep(0.86, 0.995, vH) * side;
    float foot = smoothstep(0.14, 0.0, vH) * side;
    float body = (0.09 + 0.15 * vH + 0.04 * sin(vH * 24.0 - uTime * 4.0)) * side;
    float pulse = smoothstep(0.9, 1.0, fract(vAlong * 0.07 - uTime * 0.5)) * side; // energy running along the wall
    // Highlights ease off right in front of the camera, where a wall fills half the
    // screen and the glow pass would flood it (uNearMin is 1 when there is no glow).
    float near = mix(uNearMin, 1.0, smoothstep(0.5, 7.0, vDepth));
    vec3 col = vColor * (body + foot * 0.5 + (edge * 2.6 + vTop * 1.1) * near + pulse * 0.3);
    float fog = exp(-uFogDensity * uFogDensity * vDepth * vDepth);
    gl_FragColor = vec4(col * fog, 1.0);
  }
`,Fy=`
  varying vec3 vColor;
  varying float vAcross;
  varying float vEnd;
  varying float vDepth;
  void main() {
    #ifdef USE_INSTANCING_COLOR
      vColor = instanceColor;
    #else
      vColor = vec3(1.0);
    #endif
    float lx = length(instanceMatrix[0].xyz);
    float lz = length(instanceMatrix[2].xyz);
    bool alongX = lx > lz;
    vAcross = (alongX ? position.z : position.x) * 2.0;
    vEnd = (0.5 - abs(alongX ? position.x : position.z)) * max(lx, lz);
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Oy=`
  uniform float uFogDensity;
  varying vec3 vColor;
  varying float vAcross;
  varying float vEnd;
  varying float vDepth;
  void main() {
    float a = exp(-vAcross * vAcross * 7.0) * smoothstep(0.0, 1.0, vEnd);
    float fog = exp(-uFogDensity * uFogDensity * vDepth * vDepth);
    gl_FragColor = vec4(vColor * a * 0.2 * fog, 1.0);
  }
`,hu=2,By=1.5,pc=class{constructor(t,e=8192){this.capacity=e;let n={transparent:!0,depthWrite:!1,blending:cl,blendEquation:hl};this.material=new re({uniforms:{uFogDensity:{value:Pn},uTime:{value:0},uNearMin:{value:.4}},vertexShader:Ny,fragmentShader:Uy,...n}),this.mesh=new Ve(new we(1,1,1),this.material,e),this.mesh.instanceMatrix.setUsage(Cn),this.mesh.instanceColor=new En(new Float32Array(e*3),3),this.mesh.instanceColor.setUsage(Cn),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,t.add(this.mesh),this.glowMaterial=new re({uniforms:{uFogDensity:{value:Pn}},vertexShader:Fy,fragmentShader:Oy,...n}),this.glow=new Ve(new An(1,1).rotateX(-Math.PI/2),this.glowMaterial,e),this.glow.instanceMatrix.setUsage(Cn),this.glow.instanceColor=new En(new Float32Array(e*3),3),this.glow.instanceColor.setUsage(Cn),this.glow.frustumCulled=!1,this.glow.count=0,this.glow.renderOrder=1,t.add(this.glow),this.pts=[],this.n=0}setNearFade(t){this.material.uniforms.uNearMin.value=t?.4:1}put(t,e,n,s,r,o,a,l,c,u){let h=this.n;if(h>=this.capacity)return;let d=(t-c)*me,f=(e-u)*me,m=(s-c)*me,v=(r-u)*me,p=e===r,g=Math.abs(p?m-d:v-f);if(g<.005)return;(p&&m<d||!p&&v<f)&&([d,m,f,v,n,o]=[m,d,v,f,o,n]);let M=o-n,T=(d+m)/2,y=(f+v)/2,E=(n+o)/2,w=h*16,x=this.mesh.instanceMatrix.array,b=this.glow.instanceMatrix.array,D=g+cc,R=g+hu*.5;p?(x.set([D,M*D/g,0,0,0,No,0,0,0,0,cc,0,T,E+No/2,y,1],w),b.set([R,M*R/g,0,0,0,1,0,0,0,0,hu,0,T,E+.02,y,1],w)):(x.set([cc,0,0,0,0,No,0,0,0,M*D/g,D,0,T,E+No/2,y,1],w),b.set([hu,0,0,0,0,1,0,0,0,M*R/g,R,0,T,E+.02,y,1],w));let U=this.mesh.instanceColor.array,O=this.glow.instanceColor.array,X=h*3;U[X]=O[X]=a.r*l,U[X+1]=O[X+1]=a.g*l,U[X+2]=O[X+2]=a.b*l,this.n=h+1}update(t,e,n,s,r,o){this.material.uniforms.uTime.value=o;let a=this.pts,l=t.tick+e;this.n=0;for(let u of t.bikes){let h=1;if(!u.alive){if(u.gone)continue;if(t.rules.vanish){let m=(l-u.deathTick)/t.rules.vanishDelay;if(h=Math.max(0,1-m)*(.7+.3*Math.sin(l*1.7+u.slot)),h<=.01)continue}}hc(u,t,e,a);let d=n[u.slot],f=t.rules.fade>0&&u.fadeHead>0;for(let m=0;m+7<a.length;m+=4){let v=a[m],p=a[m+1],g=a[m+2],M=a[m+4],T=a[m+5],y=a[m+6];if(!(v===M&&p===T||Number.isNaN(v+p+M+T))){if(f){f=!1;let E=Math.min(1,By/(Math.abs(M-v)+Math.abs(T-p))),w=v+(M-v)*E,x=p+(T-p)*E,b=g+(y-g)*E;this.put(v,p,g,w,x,b,d,h*.35,s,r),E<1&&this.put(w,x,b,M,T,y,d,h,s,r);continue}this.put(v,p,g,M,T,y,d,h,s,r)}}}let c=this.n;this.mesh.count=c,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.glow.count=c,this.glow.instanceMatrix.needsUpdate=!0,this.glow.instanceColor.needsUpdate=!0}clear(){this.mesh.count=0,this.glow.count=0}};var uu=1600,du=600,xp=-9.5,mc=class{constructor(t){this.scene=t;let e=new Ye({color:16777215});this.shardMesh=new Ve(new we(1,1,1),e,uu),this.shardMesh.instanceMatrix.setUsage(Cn),this.shardMesh.instanceColor=new En(new Float32Array(uu*3),3),this.shardMesh.frustumCulled=!1,this.shardMesh.count=0,t.add(this.shardMesh),this.shards=[];let n=new fe;this.sparkPos=new Float32Array(du*3),this.sparkCol=new Float32Array(du*3),n.setAttribute("position",new Ae(this.sparkPos,3).setUsage(Cn)),n.setAttribute("color",new Ae(this.sparkCol,3).setUsage(Cn)),this.sparkPoints=new Zi(n,new Li({size:.1,map:rs(64),vertexColors:!0,transparent:!0,blending:fn,depthWrite:!1})),this.sparkPoints.frustumCulled=!1,t.add(this.sparkPoints),this.sparks=[],this.ringGeo=new no(.85,1,64).rotateX(-Math.PI/2),this.flashTex=rs(),this.rings=[],this.flashes=[],this.tmpM=new $t,this.tmpQ=new un,this.tmpS=new C,this.tmpE=new wn}explode(t,e,n,s,r){let o=e.y;for(let u=0;u<170&&this.shards.length<uu;u++){let h=Math.random()*Math.PI*2,d=1.5+Math.random()*6.5;this.shards.push({owner:t,floor:o,p:new C(e.x-s*Math.random()*1.8,o+.2+Math.random()*.8,e.z-r*Math.random()*1.8),v:new C(Math.cos(h)*d+s*2,2+Math.random()*6,Math.sin(h)*d+r*2),r:new C(Math.random()*6,Math.random()*6,Math.random()*6),w:new C((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),s:.05+Math.random()*.11,life:0,max:1.1+Math.random()*1.3,c:n,k:1.4+Math.random()*1.6})}let a=new Ye({color:n.clone().multiplyScalar(2),transparent:!0,blending:fn,depthWrite:!1,side:We}),l=new Zt(this.ringGeo,a);l.position.set(e.x,o+.03,e.z),this.scene.add(l),this.rings.push({owner:t,mesh:l,life:0,max:.75});let c=new kr(new ks({map:this.flashTex,color:n.clone().multiplyScalar(3),transparent:!0,blending:fn,depthWrite:!1}));c.position.set(e.x,o+.6,e.z),this.scene.add(c),this.flashes.push({owner:t,sprite:c,life:0,max:.45}),this.spark(e,n,40,0,0,6,t)}spark(t,e,n,s,r,o=3,a=-1){let l=t.y||0;for(let c=0;c<n&&this.sparks.length<du;c++)this.sparks.push({owner:a,floor:l,p:new C(t.x,l+.15+Math.random()*.4,t.z),v:new C((Math.random()-.5)*o+s,Math.random()*o*.8,(Math.random()-.5)*o+r),life:0,max:.25+Math.random()*.45,c:e})}cancel(t){this.shards=this.shards.filter(e=>e.owner!==t),this.sparks=this.sparks.filter(e=>e.owner!==t);for(let e of this.rings)e.owner===t&&(e.life=e.max);for(let e of this.flashes)e.owner===t&&(e.life=e.max)}clear(){this.shards.length=0,this.sparks.length=0;for(let t of this.rings)t.life=t.max;for(let t of this.flashes)t.life=t.max}update(t){let e=this.shardMesh.instanceMatrix.array,n=this.shardMesh.instanceColor.array,s=0,r=[];for(let h of this.shards){if(h.life+=t,h.life>=h.max)continue;h.v.y+=xp*t,h.p.addScaledVector(h.v,t),h.p.y<h.floor+h.s/2&&(h.p.y=h.floor+h.s/2,h.v.y*=-.35,h.v.x*=.7,h.v.z*=.7,h.w.multiplyScalar(.7)),h.r.addScaledVector(h.w,t);let d=h.life/h.max,f=h.s*(d>.7?(1-d)/.3:1);this.tmpQ.setFromEuler(this.tmpE.set(h.r.x,h.r.y,h.r.z)),this.tmpS.set(f,f,f*1.6),this.tmpM.compose(h.p,this.tmpQ,this.tmpS),this.tmpM.toArray(e,s*16);let m=h.k*(1-d*.6);n[s*3]=h.c.r*m,n[s*3+1]=h.c.g*m,n[s*3+2]=h.c.b*m,s++,r.push(h)}this.shards=r,this.shardMesh.count=s,this.shardMesh.instanceMatrix.needsUpdate=!0,this.shardMesh.instanceColor.needsUpdate=!0;let o=this.sparkPos,a=this.sparkCol,l=0,c=[];for(let h of this.sparks){if(h.life+=t,h.life>=h.max)continue;h.v.y+=xp*.6*t,h.p.addScaledVector(h.v,t),h.p.y<h.floor+.02&&(h.p.y=h.floor+.02,h.v.y*=-.3);let d=1-h.life/h.max;o[l*3]=h.p.x,o[l*3+1]=h.p.y,o[l*3+2]=h.p.z,a[l*3]=h.c.r*2.5*d,a[l*3+1]=h.c.g*2.5*d,a[l*3+2]=h.c.b*2.5*d,l++,c.push(h)}this.sparks=c;let u=this.sparkPoints.geometry;u.setDrawRange(0,l),u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0,this.rings=this.rings.filter(h=>{h.life+=t;let d=h.life/h.max;if(d>=1)return this.scene.remove(h.mesh),h.mesh.material.dispose(),!1;let f=.5+d*7;return h.mesh.scale.set(f,1,f),h.mesh.material.opacity=(1-d)*(1-d),!0}),this.flashes=this.flashes.filter(h=>{h.life+=t;let d=h.life/h.max;if(d>=1)return this.scene.remove(h.sprite),h.sprite.material.dispose(),!1;let f=2+d*6;return h.sprite.scale.set(f,f,f),h.sprite.material.opacity=1-d,!0})}};var Fo=["chase","overhead","cockpit"],Oo={chase:"Chase cam",overhead:"Top-down",cockpit:"Cockpit"},gc=class{constructor(t){this.camera=t,this.pos=new C(0,30,60),this.look=new C,this.wantPos=new C,this.wantLook=new C,this.yaw=0,this.fovTarget=70,this.fovKick=0,this.shake=0,this.orbitAngle=.6,this.circle=0,this.circleTime=0,this.snapNext=!0,this.roll=0,this.rollTarget=0,this.guard=null}snap(){this.snapNext=!0}addShake(t){this.shake=Math.min(1.2,this.shake+t)}kick(t){this.fovKick=Math.max(this.fovKick,t)}follow(t,e,n,s,r,o=0,a=!1,l=0){let c=s==="cockpit"?16:7.5,u=this.yaw;this.yaw=this.snapNext?e:os(this.yaw+os(e-this.yaw)*qn(c,r));let h=this.snapNext||!(r>0)?0:os(this.yaw-u)/r;this.rollTarget=s==="overhead"?0:Math.max(-.12,Math.min(.12,h*.03));let d=Math.cos(this.yaw),f=-Math.sin(this.yaw),m=t.y,v=Math.tan(Math.max(-.6,Math.min(.6,o)));if(s==="overhead")this.wantPos.set(t.x,m+38,t.z+13),this.wantLook.set(t.x,m,t.z-1),this.fovTarget=60;else if(s==="cockpit")this.wantPos.set(t.x-d*.95,m+1.02,t.z-f*.95),this.wantLook.set(t.x+d*12,m+.55+v*12,t.z+f*12),this.fovTarget=n?88:78;else{let p=a?6.3:4.7;this.wantPos.set(t.x-d*p,m+(a?2.9:2.05)+l,t.z-f*p),this.wantLook.set(t.x+d*5,m+.75+v*5,t.z+f*5),this.fovTarget=(n?82:71)+(a?7:0),this.guard&&this.guard(t,this.wantPos)}this.settle(s==="cockpit"?40:14,r)}orbit(t,e,n){this.orbitAngle+=n*.07,this.wantPos.set(Math.cos(this.orbitAngle)*t,e,Math.sin(this.orbitAngle)*t),this.wantLook.set(0,0,0),this.fovTarget=55,this.rollTarget=0,this.settle(2.5,n)}intro(t,e,n,s){let r=s*s*(3-2*s),o=1-r,a=Math.cos(e),l=-Math.sin(e),c=e+Math.PI*.8,u=Math.cos(c)*n*1.1,h=n*.8+12,d=-Math.sin(c)*n*1.1,f=t.x-a*26,m=Math.max(16,n*.45)+t.y,v=t.z-l*26,p=t.x-a*4.7,g=t.y+2.05,M=t.z-l*4.7;this.pos.set(o*o*u+2*o*r*f+r*r*p,o*o*h+2*o*r*m+r*r*g,o*o*d+2*o*r*v+r*r*M);let T=r*r;this.look.set(T*(t.x+a*5),T*(t.y+.75),T*(t.z+l*5)),this.wantPos.copy(this.pos),this.wantLook.copy(this.look),this.fovTarget=50+21*r,this.snapNext&&(this.camera.fov=this.fovTarget,this.snapNext=!1),this.yaw=e,this.rollTarget=0}startCircling(t){this.circle=Math.atan2(this.pos.z-t.z,this.pos.x-t.x),this.circleTime=0}crashCam(t,e){this.circleTime+=e,this.circle+=e*.5;let n=6+Math.min(this.circleTime,2)*1.4;this.wantPos.set(t.x+Math.cos(this.circle)*n,t.y+2.4+Math.min(this.circleTime,3)*.5,t.z+Math.sin(this.circle)*n),this.wantLook.set(t.x,t.y+.6,t.z),this.fovTarget=58,this.rollTarget=0,this.guard&&this.guard(t,this.wantPos),this.settle(3,e)}showcase(t,e){this.circle+=e*.35,this.wantPos.set(t.x+Math.cos(this.circle)*5.5,t.y+1.3,t.z+Math.sin(this.circle)*5.5),this.wantLook.set(t.x,t.y+.7,t.z),this.fovTarget=50,this.rollTarget=0,this.guard&&this.guard(t,this.wantPos),this.settle(4,e)}settle(t,e){if(this.snapNext)this.pos.copy(this.wantPos),this.look.copy(this.wantLook),this.camera.fov=this.fovTarget,this.snapNext=!1;else{let n=qn(t,e);this.pos.lerp(this.wantPos,n),this.look.lerp(this.wantLook,n)}}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let r=this.shake*.25;e.position.x+=(Math.random()-.5)*r,e.position.y+=(Math.random()-.5)*r,e.position.z+=(Math.random()-.5)*r,this.shake*=Math.exp(-t*6)}e.lookAt(this.look),this.roll+=(this.rollTarget-this.roll)*qn(6,t),Math.abs(this.roll)>1e-4&&e.rotateZ(this.roll),this.fovKick*=Math.exp(-t*3);let n=this.fovTarget+this.fovKick,s=e.fov+(n-e.fov)*qn(5,t);Math.abs(s-e.fov)>.01&&(e.fov=s,e.updateProjectionMatrix())}};var xc=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_c=class extends en{constructor({threshold:t=6,strength:e=.35,tint:n=new bt(.45,.72,1)}={}){super();let s={type:Ce,depthBuffer:!1};this.rtA=new Se(1,1,s),this.rtB=new Se(1,1,s),this.texelX=1,this.bright=new re({uniforms:{tDiffuse:{value:null},uThreshold:{value:t}},vertexShader:xc,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uThreshold;
        varying vec2 vUv;
        void main() {
          vec3 c = texture2D(tDiffuse, vUv).rgb;
          float l = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c * (max(l - uThreshold, 0.0) / max(l, 1e-4)), 1.0);
        }`}),this.blur=new re({uniforms:{tDiffuse:{value:null},uStep:{value:0}},vertexShader:xc,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uStep;
        varying vec2 vUv;
        void main() {
          vec3 sum = vec3(0.0);
          float wsum = 0.0;
          for (int i = -6; i <= 6; i++) {
            float w = exp(-abs(float(i)) * 0.3);
            sum += texture2D(tDiffuse, vUv + vec2(float(i) * uStep, 0.0)).rgb * w;
            wsum += w;
          }
          gl_FragColor = vec4(sum / wsum, 1.0);
        }`}),this.comp=new re({uniforms:{tDiffuse:{value:null},tStreak:{value:null},uStrength:{value:e},uTint:{value:n}},vertexShader:xc,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tStreak;
        uniform float uStrength;
        uniform vec3 uTint;
        varying vec2 vUv;
        void main() {
          vec4 base = texture2D(tDiffuse, vUv);
          vec3 s = texture2D(tStreak, vUv).rgb;
          gl_FragColor = vec4(base.rgb + uTint * max(s.r, max(s.g, s.b)) * uStrength, base.a);
        }`}),this.quad=new Vn}setSize(t,e){let n=Math.max(1,Math.round(t/4)),s=Math.max(1,Math.round(e/4));this.rtA.setSize(n,s),this.rtB.setSize(n,s),this.texelX=1/n}render(t,e,n){let s=this.quad;s.material=this.bright,this.bright.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.rtA),s.render(t),s.material=this.blur;for(let[r,o,a]of[[this.rtA,this.rtB,1],[this.rtB,this.rtA,4],[this.rtA,this.rtB,13]])this.blur.uniforms.tDiffuse.value=r.texture,this.blur.uniforms.uStep.value=this.texelX*a,t.setRenderTarget(o),s.render(t);s.material=this.comp,this.comp.uniforms.tDiffuse.value=n.texture,this.comp.uniforms.tStreak.value=this.rtB.texture,t.setRenderTarget(this.renderToScreen?null:e),s.render(t)}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.bright.dispose(),this.blur.dispose(),this.comp.dispose(),this.quad.dispose()}},vc=class extends en{constructor(){super(),this.material=new re({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new st(1,1)},uSpeed:{value:0}},vertexShader:xc,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform vec2 uRes;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vec2 c = vUv - 0.5;
          float r2 = dot(c, c);
          vec2 off = c * r2 * (0.014 + uSpeed * 0.02);
          vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
          if (uSpeed > 0.01) {
            // zoom blur, nothing in the middle and strongest at the edges
            float s = uSpeed * smoothstep(0.015, 0.3, r2) * 0.07;
            vec3 acc = col;
            for (int i = 1; i <= 6; i++) acc += texture2D(tDiffuse, vUv - c * s * float(i) / 6.0).rgb;
            col = acc / 7.0;
          }
          float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
          col = mix(col * vec3(0.9, 1.0, 1.1), col, smoothstep(0.0, 0.45, l));
          col *= 1.0 - smoothstep(0.2, 0.75, r2) * 0.5;
          float g = fract(sin(dot(floor(vUv * uRes) + fract(uTime * 7.0) * 113.0, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
          col += g * 0.03;
          gl_FragColor = vec4(col, 1.0);
        }`}),this.quad=new Vn(this.material)}setSize(t,e){this.material.uniforms.uRes.value.set(t,e)}render(t,e,n,s){this.material.uniforms.tDiffuse.value=n.texture,this.material.uniforms.uTime.value+=s||1/60,t.setRenderTarget(this.renderToScreen?null:e),this.quad.render(t)}dispose(){this.material.dispose(),this.quad.dispose()}};function _p(){let i=new re({side:Ne,depthWrite:!1,fog:!1,uniforms:{uHorizon:{value:new bt(335935)},uZenith:{value:new bt(261)},uCloud:{value:new bt(726566)},uTime:{value:0},uFlash:{value:0},uFlashDir:{value:new C(.3,.5,-.8).normalize()}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uHorizon;
      uniform vec3 uZenith;
      uniform vec3 uCloud;
      uniform float uTime;
      uniform float uFlash;
      uniform vec3 uFlashDir;
      varying vec3 vDir;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
        return v;
      }
      void main() {
        vec3 d = normalize(vDir);
        float h = max(d.y, 0.0);
        vec3 col = mix(uHorizon, uZenith, pow(h, 0.45));
        col += uHorizon * 0.8 * exp(-abs(d.y) * 28.0);
        if (d.y > 0.0) {
          vec2 cp = d.xz / (d.y + 0.12) * 1.6 + vec2(uTime * 0.012, uTime * 0.004);
          float cover = smoothstep(0.42, 0.85, fbm(cp));
          float lit = 0.35 + 0.65 * fbm(cp * 2.1 + 7.0);
          float flash = uFlash * pow(max(dot(d, uFlashDir), 0.0), 9.0);
          vec3 cloud = uCloud * lit + vec3(0.45, 0.65, 1.0) * flash * 0.9;
          col = mix(col, cloud, cover * smoothstep(0.0, 0.22, d.y) * 0.9);
          col += vec3(0.1, 0.2, 0.4) * uFlash * 0.03;
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),t=new Zt(new Ki(700,32,16),i);return t.renderOrder=-1,t}var yc=class{constructor(t){this.u=t.material.uniforms,this.next=4+Math.random()*6,this.t=-1}update(t){if(this.u.uTime.value=t,this.t<0&&t>this.next){this.t=0;let e=Math.random()*Math.PI*2;this.u.uFlashDir.value.set(Math.cos(e),.25+Math.random()*.35,Math.sin(e)).normalize(),this.start=t}if(this.t>=0){let e=t-this.start,n=Math.max(0,1-e/.12)+(e>.18?Math.max(0,.7-(e-.18)/.25):0);this.u.uFlash.value=n,e>.5&&(this.t=-1,this.u.uFlash.value=0,this.next=t+6+Math.random()*12)}}};function vp(){let e=[],n=[],s=[];for(let a=0;a<=240;a++){let l=a/240*Math.PI*2,c=70+34*Math.sin(l*3+1)+22*Math.sin(l*7+2)+12*Math.sin(l*17+.5)+7*Math.abs(Math.sin(l*41)),u=560+25*Math.sin(l*5);if(e.push(Math.cos(l)*u,-12,Math.sin(l)*u,Math.cos(l)*u,c,Math.sin(l)*u),n.push(0,1),a<240){let h=a*2;s.push(h,h+1,h+2,h+1,h+3,h+2)}}let r=new fe;r.setAttribute("position",new qt(e,3)),r.setAttribute("aTop",new qt(n,1)),r.setIndex(s);let o=new re({side:We,uniforms:{uRidge:{value:new bt(2784767)},uFog:{value:new bt(335935)}},vertexShader:`
      attribute float aTop;
      varying float vTop;
      void main() {
        vTop = aTop;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uRidge;
      uniform vec3 uFog;
      varying float vTop;
      void main() {
        vec3 col = mix(uFog * 0.5, vec3(0.004, 0.008, 0.016), smoothstep(0.0, 0.5, vTop));
        col += uRidge * smoothstep(0.965, 1.0, vTop) * 1.3;
        gl_FragColor = vec4(col, 1.0);
      }`});return new Zt(r,o)}var Mc=class{constructor(t,e=900){this.max=e,this.half=new C(30,9,30);let n=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()*2-1)*this.half.x,n[r*3+1]=Math.random()*this.half.y*2,n[r*3+2]=(Math.random()*2-1)*this.half.z,this.vel[r*3]=(Math.random()-.5)*.3,this.vel[r*3+1]=.05+Math.random()*.15,this.vel[r*3+2]=(Math.random()-.5)*.3;let s=new fe;s.setAttribute("position",new Ae(n,3).setUsage(Cn)),this.points=new Zi(s,new Li({size:.08,map:rs(32),color:10476799,transparent:!0,opacity:.55,blending:fn,depthWrite:!1})),this.points.frustumCulled=!1,t.add(this.points),this.setCount(e)}setCount(t){this.count=Math.min(t,this.max),this.points.geometry.setDrawRange(0,this.count),this.points.visible=this.count>0}update(t,e){if(!this.count)return;let n=this.points.geometry.attributes.position,s=n.array,r=this.vel,o=t.position,{x:a,y:l,z:c}=this.half;for(let u=0;u<this.count;u++){let h=u*3,d=s[h]+r[h]*e,f=s[h+1]+r[h+1]*e,m=s[h+2]+r[h+2]*e;d-o.x>a?d-=a*2:o.x-d>a&&(d+=a*2),m-o.z>c?m-=c*2:o.z-m>c&&(m+=c*2),f>l*2&&(f-=l*2),s[h]=d,s[h+1]=f,s[h+2]=m}n.needsUpdate=!0}};var Sc=.4,fu=.36,ky=`
  varying vec3 vLocal;
  varying vec3 vSize;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying float vDepth;
  void main() {
    vLocal = position;
    vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
    vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vNormalW = normal;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,zy=`
  uniform vec3 uColor;
  uniform vec3 uFog;
  uniform float uFogDensity;
  uniform float uWindows;
  uniform float uEdge;
  varying vec3 vLocal;
  varying vec3 vSize;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying float vDepth;
  void main() {
    vec3 d = (0.5 - abs(vLocal)) * vSize;
    float lo = min(d.x, min(d.y, d.z));
    float hi = max(d.x, max(d.y, d.z));
    float mid = d.x + d.y + d.z - lo - hi;
    float edge = 1.0 - smoothstep(uEdge * 0.3, uEdge, mid);
    float halo = 1.0 - smoothstep(0.0, uEdge * 7.5, mid);
    vec3 col = vec3(0.005, 0.009, 0.016) + uColor * (edge * 2.3 + halo * 0.1);
    if (uWindows > 0.5 && abs(vNormalW.y) < 0.5) {
      vec2 cellId = floor(vec2((vWorld.x + vWorld.z) * 0.9, vWorld.y * 1.4));
      float lit = step(0.62, fract(sin(dot(cellId, vec2(12.9898, 78.233))) * 43758.5453));
      float wy = step(0.55, fract(vWorld.y * 1.4));
      float wx = step(0.4, fract((vWorld.x + vWorld.z) * 0.9));
      col += uColor * wy * wx * lit * 0.4;
    }
    float f = 1.0 - exp(-uFogDensity * uFogDensity * vDepth * vDepth);
    gl_FragColor = vec4(mix(col, uFog, clamp(f, 0.0, 1.0)), 1.0);
  }
`;function ko(i,t,e=Pn,n=.08){return new re({uniforms:{uColor:{value:Xn(i)},uFog:{value:ss},uFogDensity:{value:e},uWindows:{value:t?1:0},uEdge:{value:n}},vertexShader:ky,fragmentShader:zy})}var Hy=`
  varying vec3 vWorld;
  varying float vDepth;
  #ifdef EXTRA
    attribute vec2 aExtra;
    varying vec2 vExtra;
  #endif
  void main() {
    #ifdef EXTRA
      vExtra = aExtra;
    #endif
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,wc=`
  uniform vec3 uFog;
  uniform float uFogDensity;
  vec3 fogged(vec3 col, float depth) {
    float f = 1.0 - exp(-uFogDensity * uFogDensity * depth * depth);
    return mix(col, uFog, clamp(f, 0.0, 1.0));
  }
`,Sp=`
  float grid(vec2 p, float spacing, float width) {
    vec2 q = p / spacing;
    vec2 d = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-5));
    return 1.0 - smoothstep(width - 0.5, width + 0.5, min(d.x, d.y));
  }
`,yp=`
  uniform vec3 uLine;
  uniform vec3 uBase;
  varying vec3 vWorld;
  varying float vDepth;
  ${wc}
  ${Sp}
  void main() {
    vec2 p = vWorld.xz;
    float near = exp(-vDepth * 0.016);
    vec3 col = uBase + uLine * (grid(p, 2.0, 0.55) * 0.32 + grid(p, 10.0, 1.0) * 0.85) * (0.3 + 0.7 * near);
    gl_FragColor = vec4(fogged(col, vDepth), 1.0);
  }
`,Gy=`
  uniform vec3 uLine;
  uniform vec3 uBase;
  uniform vec3 uAccent;
  uniform float uTime;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vExtra;
  ${wc}
  ${Sp}
  void main() {
    float across = abs(vExtra.y - 0.5) * 2.0;
    float v = fract((vExtra.x + across * 0.9) * 0.45 - uTime * 0.8);
    float chev = smoothstep(0.0, 0.05, v) * smoothstep(0.3, 0.22, v) * (1.0 - smoothstep(0.8, 0.9, across));
    float side = smoothstep(0.9, 0.99, across);
    vec3 col = uBase + uLine * grid(vWorld.xz, 2.0, 0.55) * 0.25 + uAccent * (chev * 0.6 + side * 1.4);
    gl_FragColor = vec4(fogged(col, vDepth), 1.0);
  }
`,Vy=`
  uniform vec3 uColor;
  uniform float uTime;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vExtra;
  ${wc}
  void main() {
    vec2 q = abs(vExtra - 0.5) * 2.0;
    float r = max(q.x, q.y);
    float rim = smoothstep(0.8, 0.96, r);
    float rings = smoothstep(0.55, 1.0, sin((r * 2.5 - uTime * 3.0) * 6.2832) * 0.5 + 0.5);
    vec3 col = uColor * (0.22 + rim * 1.5 + rings * 0.55);
    gl_FragColor = vec4(fogged(col, vDepth), 1.0);
  }
`,Wy=`
  uniform vec3 uColor;
  uniform float uTop;
  uniform float uBottom;
  uniform float uTime;
  varying vec3 vWorld;
  varying float vDepth;
  ${wc}
  void main() {
    float t = clamp((vWorld.y - uBottom) / (uTop - uBottom), 0.0, 1.0);
    float lip = smoothstep(0.93, 1.0, t);
    float foot = smoothstep(0.07, 0.0, t);
    float band = smoothstep(0.96, 1.0, abs(fract(t * 1.5 - uTime * 0.1) * 2.0 - 1.0)) * 0.3;
    float upright = smoothstep(0.93, 1.0, abs(fract((vWorld.x + vWorld.z) * 0.125) * 2.0 - 1.0)) * 0.35;
    vec3 col = vec3(0.004, 0.008, 0.016) + uColor * (lip * 1.4 + foot * 0.5 + band + upright);
    gl_FragColor = vec4(fogged(col, vDepth), 1.0);
  }
`;function Bo(i,t,e=!1,n=Kn){return new re({uniforms:{uFog:{value:ss},uFogDensity:{value:Pn},...t},vertexShader:(e?`#define EXTRA
`:"")+Hy,fragmentShader:i,side:n})}function bc(i,t,e){let n=new Uint8Array(i*t),s=[];for(let r=0;r<t;r++)for(let o=0;o<i;o++){if(n[r*i+o]||!e(o,r))continue;let a=o;for(;a+1<i&&!n[r*i+a+1]&&e(a+1,r);)a++;let l=r;t:for(;l+1<t;){for(let c=o;c<=a;c++)if(n[(l+1)*i+c]||!e(c,l+1))break t;l++}for(let c=r;c<=l;c++)for(let u=o;u<=a;u++)n[c*i+u]=1;s.push([o,r,a,l])}return s}function Mp(i,t,e,n,s=()=>0){for(let r=0;r<=t;r++){let o=-1,a=0,l=-1,c=0;for(let u=0;u<=i;u++){let h=u<i&&r<t&&e(u,r),d=u<i&&r>0&&e(u,r-1),f=h&&!d?s(u,r):-1;o>=0&&f!==a&&(n(o,r,u,r,a),o=-1),f>=0&&o<0&&(o=u,a=f);let m=d&&!h?s(u,r-1):-1;l>=0&&m!==c&&(n(l,r,u,r,c),l=-1),m>=0&&l<0&&(l=u,c=m)}}for(let r=0;r<=i;r++){let o=-1,a=0,l=-1,c=0;for(let u=0;u<=t;u++){let h=u<t&&r<i&&e(r,u),d=u<t&&r>0&&e(r-1,u),f=h&&!d?s(r,u):-1;o>=0&&f!==a&&(n(r,o,r,u,a),o=-1),f>=0&&o<0&&(o=u,a=f);let m=d&&!h?s(r-1,u):-1;l>=0&&m!==c&&(n(r,l,r,u,c),l=-1),m>=0&&l<0&&(l=u,c=m)}}}function pu(i,t=null){let e=new Float32Array(i.length*12),n=t?new Float32Array(i.length*8):null,s=[];i.forEach(([o,a,l,c,u],h)=>{e.set([o,u,a,o,u,c,l,u,c,l,u,a],h*12),n&&n.set([0,0,0,1,1,1,1,0],h*8);let d=h*4;s.push(d,d+1,d+2,d,d+2,d+3)});let r=new fe;return r.setAttribute("position",new Ae(e,3)),n&&r.setAttribute("aExtra",new Ae(n,2)),r.setIndex(s),r}function Xy(i,t,e,n,s,r,o,a,l,c){let u=(e+r)/2,h=(n+o)/2,d=(s+a)/2;if(Math.abs(r-e)>=Math.abs(a-s)){let f=r>=e?1:-1;i.set([(r-e)*f,(o-n)*f,0,0,0,c,0,0,0,0,l,0,u,h,d,1],t)}else{let f=a>=s?1:-1;i.set([l,0,0,0,0,c,0,0,0,(o-n)*f,(a-s)*f,0,u,h,d,1],t)}}function bp(i){let{w:t,h:e,ground:n}=i,s=new Uint8Array(t*e).fill(255),r=!1;for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=i.rampOf(l,a);(i.T(n,l,a)===0||c&&c.lo<n)&&(s[a*t+l]=0,r=!0)}if(!r)return null;let o=new $i(s,t,e,Qs,je);return o.unpackAlignment=1,o.magFilter=Re,o.minFilter=Re,o.needsUpdate=!0,o}var Tc=class{constructor(t,e,n,s){this.time={value:0};let{w:r,h:o,L:a,ground:l}=e,c=(L,$,B)=>e.T(L,$,B),u=L=>(L-n)*me,h=L=>(L-s)*me,d=L=>(L-l)*Wn,f=L=>L===1||L===4,m=[],v=[],p=[],g=[],M=[],T=[],y=[],E=[],w=Xn("#3fc4ff").clone().multiplyScalar(1.15),x=Xn("#1f6fd6").clone().multiplyScalar(.6),b=Xn("#5fd8ff").clone().multiplyScalar(.9),D=Xn("#8fefff").clone().multiplyScalar(1.05),R=(L,$,B,k,W,et,lt,z,at)=>T.push([L,$,B,k,W,et,lt,z,at]);for(let L=l+1;L<a;L++){let $=(k,W)=>{let et=c(L,k,W);return f(et)||et===3},B=d(L);for(let[k,W,et,lt]of bc(r,o,$))m.push([u(k),h(W),u(et+1),h(lt+1),B]),p.push([u(k),B-Sc,h(W),u(et+1),B-.01,h(lt+1)]);Mp(r,o,$,(k,W,et,lt)=>{R(u(k),B+.03,h(W),u(et),B+.03,h(lt),.09,.07,w),R(u(k),B-Sc,h(W),u(et),B-Sc,h(lt),.06,.05,x)})}if(l>0){let L=l-1,$=(k,W)=>{let et=c(L,k,W);return f(et)||et===3},B=(k,W)=>$(k,W)&&f(c(l,k,W));for(let[k,W,et,lt]of bc(r,o,(z,at)=>f(c(L,z,at))))v.push([u(k),h(W),u(et+1),h(lt+1),d(L)]);Mp(r,o,$,(k,W,et,lt,z)=>{g.push([u(k),h(W),u(et),h(lt)]);let at=z?-fu-.03:.03;R(u(k),at,h(W),u(et),at,h(lt),.09,.07,z?x:w),R(u(k),d(L)+.03,h(W),u(et),d(L)+.03,h(lt),.06,.05,x)},(k,W)=>B(k,W)?1:0);for(let[k,W,et,lt]of bc(r,o,B)){p.push([u(k),-fu,h(W),u(et+1),-.01,h(lt+1)]);let z=et-k>=lt-W,at=z?u(k):h(W),ut=z?u(et+1):h(lt+1),At=-fu-.04;for(let rt=at+1.25;rt<ut-.5;rt+=2.5)z?R(rt,At,h(W)+.35,rt,At,h(lt+1)-.35,.16,.04,D):R(u(k)+.35,At,rt,u(et+1)-.35,At,rt,.16,.04,D)}}for(let L of e.ramps){let $=d(L.lo),B=L.kick?or:Wn,k=u(L.x0),W=u(L.x1+1),et=h(L.y0),lt=h(L.y1+1),z=(ut,At,rt)=>L.dir===0?[k+(W-k)*ut,rt,et+(lt-et)*At]:L.dir===2?[W-(W-k)*ut,rt,et+(lt-et)*At]:L.dir===1?[k+(W-k)*At,rt,et+(lt-et)*ut]:[k+(W-k)*At,rt,lt-(lt-et)*ut],at=L.len*me;if(y.push([[0,0],[0,1],[1,1],[1,0]].map(([ut,At])=>[...z(ut,At,$+B*ut),ut*at,At])),!(L.lo<l)){for(let ut of[0,1])E.push(...z(0,ut,$),...z(1,ut,$),...z(1,ut,$+B)),R(...z(0,ut,$+.1),...z(1,ut,$+B+.1),.07,.14,b);E.push(...z(1,0,$),...z(1,1,$),...z(1,1,$+B)),E.push(...z(1,0,$),...z(1,1,$+B),...z(1,0,$+B)),R(...z(0,0,$+.03),...z(0,1,$+.03),.07,.05,x),L.kick&&R(...z(1,0,$+B),...z(1,1,$+B),.12,.08,b)}}for(let L=0;L<a;L++)for(let[$,B,k,W]of bc(r,o,(et,lt)=>c(L,et,lt)===4))M.push([u($),h(B),u(k+1),h(W+1),d(L)+.025]);let U=this.time,O=(L,$=0)=>(L.renderOrder=$,t.add(L),L);m.length&&O(new Zt(pu(m),Bo(yp,{uLine:{value:new bt(1413350)},uBase:{value:new bt(67086)}}))),v.length&&O(new Zt(pu(v),Bo(yp,{uLine:{value:new bt(675732)},uBase:{value:new bt(517)}})));let X=new zn({color:263949,metalness:.85,roughness:.42}),I=X.clone();I.side=We;let q=new $t;if(p.length){let L=O(new Ve(new we(1,1,1),X,p.length));p.forEach(([$,B,k,W,et,lt],z)=>{L.setMatrixAt(z,q.makeScale(W-$,et-B,lt-k).setPosition(($+W)/2,(B+et)/2,(k+lt)/2))}),L.frustumCulled=!1}if(E.length){let L=new fe;L.setAttribute("position",new qt(E,3)),L.computeVertexNormals(),O(new Zt(L,I))}if(g.length){let L=[],$=d(l-1);for(let[k,W,et,lt]of g)L.push(k,$,W,et,$,lt,et,0,lt,k,$,W,et,0,lt,k,0,W);let B=new fe;B.setAttribute("position",new qt(L,3)),O(new Zt(B,Bo(Wy,{uColor:{value:new bt(3120639)},uTop:{value:0},uBottom:{value:$},uTime:U},!1,We)))}if(y.length){let L=new Float32Array(y.length*12),$=new Float32Array(y.length*8),B=[];y.forEach((W,et)=>{W.forEach(([lt,z,at,ut,At],rt)=>{L.set([lt,z,at],et*12+rt*3),$.set([ut,At],et*8+rt*2)}),B.push(et*4,et*4+1,et*4+2,et*4,et*4+2,et*4+3)});let k=new fe;k.setAttribute("position",new Ae(L,3)),k.setAttribute("aExtra",new Ae($,2)),k.setIndex(B),O(new Zt(k,Bo(Gy,{uLine:{value:new bt(1413350)},uBase:{value:new bt(133654)},uAccent:{value:new bt(6547199)},uTime:U},!0,We)))}M.length&&O(new Zt(pu(M,!0),Bo(Vy,{uColor:{value:new bt(16763197)},uTime:U},!0)),1);let Z=e.arena.pillars||[];if(Z.length){let L=O(new Ve(new we(1,1,1),ko("#38d6ff",!1),Z.length));Z.forEach(({rect:[$,B,k,W],from:et,to:lt},z)=>{let at=Math.max((k-$)*me,me*.6),ut=Math.max((W-B)*me,me*.6),At=d(et),rt=d(lt)-Sc;L.setMatrixAt(z,q.makeScale(at,rt-At,ut).setPosition(u(($+k)/2+.5),(At+rt)/2,h((B+W)/2+.5)))}),L.frustumCulled=!1}if(T.length){let L=O(new Ve(new we(1,1,1),new Ye({color:16777215}),T.length),2),$=L.instanceMatrix.array,B=new Float32Array(T.length*3);T.forEach(([k,W,et,lt,z,at,ut,At,rt],Ot)=>{Xy($,Ot*16,k,W,et,lt,z,at,ut,At),B.set([rt.r,rt.g,rt.b],Ot*3)}),L.instanceColor=new En(B,3),L.frustumCulled=!1}}update(t){this.time.value=t}};var Mi={high:{label:"High",ratio:1.5,bloom:!0,reflect:.5,film:!0,dust:900},medium:{label:"Medium",ratio:1.25,bloom:!0,reflect:.3,film:!0,dust:500},low:{label:"Low",ratio:1,bloom:!1,reflect:0,film:!1,dust:200}},qy=`
  uniform mat4 textureMatrix;
  varying vec4 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vUv = textureMatrix * vec4(position, 1.0);
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Yy=`
  uniform vec3 color;
  uniform sampler2D tDiffuse;
  uniform float uHalf;
  uniform vec3 uLine;
  uniform vec3 uBase;
  uniform vec3 uFog;
  uniform float uFogDensity;
  uniform float uReflect;
  uniform vec2 uTexel;
  uniform sampler2D uMask;
  uniform vec2 uMaskSize;
  uniform vec2 uOrigin;
  uniform float uTime;
  varying vec4 vUv;
  varying vec3 vWorld;
  varying float vDepth;

  // NaN anywhere in the frame gets smeared over the whole screen by the bloom blur,
  // so every division and exponent here is guarded.
  float grid(vec2 p, float spacing, float width) {
    vec2 q = p / spacing;
    vec2 d = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-5));
    return 1.0 - smoothstep(width - 0.5, width + 0.5, min(d.x, d.y));
  }

  // One family of grid lines (constant x, or constant z).
  float line1(float v, float spacing, float width) {
    float q = v / spacing;
    float d = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), 1e-5);
    return 1.0 - smoothstep(width - 0.5, width + 0.5, d);
  }

  void main() {
    vec2 p = vWorld.xz;
    #ifdef HOLES
      // Trench openings: one mask texel per cell, 0 where the floor is cut away.
      vec2 cell = p / ${me.toFixed(2)} + uOrigin;
      if (cell.x > 0.0 && cell.y > 0.0 && cell.x < uMaskSize.x && cell.y < uMaskSize.y
        && texture2D(uMask, cell / uMaskSize).r < 0.5) discard;
    #endif
    float edgeDist = uHalf - max(abs(p.x), abs(p.y));
    float inside = step(0.0, edgeDist);
    float minor = grid(p, 2.0, 0.55);
    float major = grid(p, 10.0, 1.0);
    float near = exp(-vDepth * 0.016);
    vec3 col = uBase;
    col += uLine * (minor * 0.32 + major * 0.85) * mix(0.12, 1.0, inside) * (0.3 + 0.7 * near);
    col += uLine * 0.5 * inside * exp(-max(edgeDist, 0.0) * 0.6);
    // Pulses of energy running along the major lines, each line on its own timing.
    float onX = line1(p.x, 10.0, 1.3);
    float onZ = line1(p.y, 10.0, 1.3);
    float seedX = fract(sin(floor(p.x / 10.0 + 0.5) * 12.9898) * 43758.5453) * 6.2832;
    float seedZ = fract(sin(floor(p.y / 10.0 + 0.5) * 78.233) * 43758.5453) * 6.2832;
    float pulseX = pow(max(0.0, sin(p.y * 0.035 - uTime * 0.55 + seedX)), 28.0);
    float pulseZ = pow(max(0.0, sin(p.x * 0.035 - uTime * 0.55 + seedZ)), 28.0);
    col += uLine * 2.2 * (onX * pulseX + onZ * pulseZ) * inside * (0.35 + 0.65 * near);
    #ifdef REFLECT
      // Glossy black floor: a softly blurred mirror, stronger at low viewing angles.
      vec2 r = vUv.xy / max(vUv.w, 1e-4);
      vec2 o = uTexel * 1.5;
      vec3 refl = texture2D(tDiffuse, r).rgb * 0.4
        + (texture2D(tDiffuse, r + vec2(o.x, 0.0)).rgb + texture2D(tDiffuse, r - vec2(o.x, 0.0)).rgb
        + texture2D(tDiffuse, r + vec2(0.0, o.y)).rgb + texture2D(tDiffuse, r - vec2(0.0, o.y)).rgb) * 0.15;
      vec3 view = normalize(cameraPosition - vWorld);
      float fresnel = 0.3 + 0.7 * pow(1.0 - clamp(view.y, 0.0, 1.0), 3.0);
      col += min(refl, vec3(2.5)) * uReflect * fresnel * mix(0.45, 1.0, inside);
    #endif
    float f = 1.0 - exp(-uFogDensity * uFogDensity * vDepth * vDepth);
    gl_FragColor = vec4(mix(col, uFog, clamp(f, 0.0, 1.0)), 1.0);
  }
`;function Tp(i,t){return{name:"GridFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:new $t},uHalf:{value:40},uLine:{value:new bt(748200)},uBase:{value:new bt(518)},uFog:{value:ss},uFogDensity:{value:Pn},uReflect:{value:.6},uTexel:{value:new st(1/512,1/512)},uMask:{value:null},uMaskSize:{value:new st(1,1)},uOrigin:{value:new st},uTime:{value:0}},vertexShader:qy,fragmentShader:(i?`#define REFLECT
`:"")+(t?`#define HOLES
`:"")+Yy}}var $y=`
  varying float vH;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vH = position.y + 0.5;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Zy=`
  uniform vec3 uColor;
  uniform float uFogDensity;
  uniform float uTime;
  uniform float uNearMin;
  varying float vH;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    // A thin hot line along the top with a soft glow under it. Close to the camera
    // the line eases off; riding beside the wall, the glow pass would otherwise turn
    // it into a blinding wedge across the screen (uNearMin is 1 when there is no glow).
    float line = smoothstep(0.965, 0.995, vH);
    float glow = smoothstep(0.6, 1.0, vH);
    float near = mix(uNearMin, 1.0, smoothstep(1.0, 10.0, vDepth));
    float foot = smoothstep(0.08, 0.0, vH);
    float stripe = smoothstep(0.93, 1.0, abs(fract((vWorld.x + vWorld.z) * 0.25) * 2.0 - 1.0));
    float band = smoothstep(0.97, 1.0, abs(fract(vH * 2.0 - uTime * 0.12) * 2.0 - 1.0));
    float body = 0.04 + 0.09 * (1.0 - vH);
    vec3 col = uColor * (body + (line * 1.9 + glow * 0.18) * near + foot * 0.7 + stripe * 0.22 + band * 0.12);
    float fog = exp(-uFogDensity * uFogDensity * vDepth * vDepth);
    gl_FragColor = vec4(col * fog, 1.0);
  }
`,Ec=class{constructor(t,e="medium"){this.canvas=t;let n=new tc({canvas:t,antialias:!0,powerPreference:"high-performance"});n.toneMapping=ji,n.toneMappingExposure=1,this.renderer=n;let s=new Yi;s.background=ss.clone(),s.fog=new Ur(ss.getHex(),Pn),this.scene=s;let r=new tr(n);s.environment=r.fromScene(new lc,.04).texture,s.environmentIntensity=.55,r.dispose(),s.add(new ao(4160767,0,.35));let o=_p();s.add(o),this.lightning=new yc(o),s.add(vp()),this.dust=new Mc(s),this.camera=new Qe(70,1,.1,1500),this.rig=new gc(this.camera),this.composer=new rc(n),this.composer.addPass(new oc(s,this.camera)),this.bloom=new ir(new st(256,256),.8,.22,.8),this.composer.addPass(this.bloom),this.streaks=new _c,this.composer.addPass(this.streaks),this.composer.addPass(new ac),this.cinema=new vc,this.composer.addPass(this.cinema),this.kit=new dc,this.trails=new pc(s),this.fx=new mc(s),this.views=[],this.colors=[],this.sim=null,this.arenaKey="",this.arenaGroup=new cn,s.add(this.arenaGroup),this.floor=null,this.mask=null,this.terrain=null,this.hw=0,this.hh=0,this.half=40,this.events=[],this.followSlot=-1,this.shot="orbit",this.watched={slot:-1,air:0,surge:0,drop:0},this.tmpFwd=new C,this.rig.guard=(a,l)=>this.guardCamera(a,l),this.speedBlur=0,this.addTowers(),this.addShips(),this.quality=null,this.setQuality(e),this.resize(),window.addEventListener("resize",()=>this.resize())}setQuality(t){let e=Mi[t]?t:"medium";if(e===this.quality)return;this.quality=e;let n=Mi[e];this.streaks.enabled=n.film,this.cinema.enabled=n.film,this.dust.setCount(n.dust),this.trails.setNearFade(n.bloom),this.arenaKey="",this.sim&&this.buildArena(this.sim),this.resize()}reflectSize(){let t=Mi[this.quality],e=this.renderer.getPixelRatio();return[Math.max(64,Math.round(window.innerWidth*e*t.reflect)),Math.max(64,Math.round(window.innerHeight*e*t.reflect))]}resize(){let t=window.innerWidth,e=window.innerHeight,n=Mi[this.quality],s=Math.min(window.devicePixelRatio||1,n.ratio);if(this.renderer.setPixelRatio(s),this.renderer.setSize(t,e),this.composer.setPixelRatio(s),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.floor&&this.floor.isReflector){let[r,o]=this.reflectSize();this.floor.getRenderTarget().setSize(r,o),this.floor.material.uniforms.uTexel.value.set(1/r,1/o)}}addTowers(){let e=new Ve(new we(1,1,1),ko("#1f8fff",!0,Pn*.55),46),n=new $t,s=new un,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<46;a++){let l=a/46*Math.PI*2+o()*.1,c=170+o()*160,u=6+o()*14,h=25+o()*110;s.setFromAxisAngle(new C(0,1,0),o()*Math.PI),n.compose(new C(Math.cos(l)*c,h/2,Math.sin(l)*c),s,new C(u,h,u*(.6+o()))),e.setMatrixAt(a,n)}e.frustumCulled=!1,this.scene.add(e)}addShips(){this.ships=[0,1,2].map(t=>({a:t*2.1+.4,r:125+t*30,h:38+t*9,w:(t%2?-1:1)*(.02+t*.006)})),this.shipParts=[[0,0,0,16,2.6,4.5],[-6.6,-4.6,0,2.8,7,4.5],[6.6,-4.6,0,2.8,7,4.5]],this.shipMesh=new Ve(new we(1,1,1),ko("#ff7a1a",!1,Pn*.45,.7),this.ships.length*this.shipParts.length),this.shipMesh.frustumCulled=!1,this.scene.add(this.shipMesh),this.shipM=new $t,this.partM=new $t,this.shipQ=new un,this.shipP=new C,this.shipS=new C(1,1,1),this.shipUp=new C(0,1,0)}updateShips(t){let e=0;for(let n of this.ships){let s=n.a+t*n.w;this.shipP.set(Math.cos(s)*n.r,n.h+Math.sin(t*.4+n.r)*2.5,Math.sin(s)*n.r),this.shipQ.setFromAxisAngle(this.shipUp,-s),this.shipM.compose(this.shipP,this.shipQ,this.shipS);for(let[r,o,a,l,c,u]of this.shipParts)this.partM.makeScale(l,c,u).setPosition(r,o,a).premultiply(this.shipM),this.shipMesh.setMatrixAt(e++,this.partM)}this.shipMesh.instanceMatrix.needsUpdate=!0}clearArena(){for(let t of[...this.arenaGroup.children])this.arenaGroup.remove(t),t.isReflector?t.dispose():t.material&&t.material.dispose(),t.geometry&&t.geometry.dispose();this.mask&&this.mask.dispose(),this.mask=null,this.floor=null,this.terrain=null}buildArena(t){let e=t.arena,n=`${e.id}:${e.size}:${this.quality}`;if(n===this.arenaKey)return;this.arenaKey=n,this.clearArena(),this.hw=t.w/2,this.hh=t.h/2;let s=(e.size+1)/2*me;this.half=s;let r=Mi[this.quality];this.mask=bp(t);let o=new An(s*12,s*12),a;if(r.reflect){let[d,f]=this.reflectSize();a=new Do(o,{shader:Tp(!0,!!this.mask),textureWidth:d,textureHeight:f,clipBias:.003,multisample:0}),a.material.uniforms.uTexel.value.set(1/d,1/f)}else{let d=Tp(!1,!!this.mask);a=new Zt(o,new re({uniforms:Mn.clone(d.uniforms),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}))}a.rotation.x=-Math.PI/2;let l=a.material.uniforms;l.uHalf.value=s,l.uMask.value=this.mask,l.uMaskSize.value.set(t.w,t.h),l.uOrigin.value.set(this.hw,this.hh),this.arenaGroup.add(a),this.floor=a;let c=new re({uniforms:{uColor:{value:new bt(6280447)},uFogDensity:{value:Pn},uTime:{value:0},uNearMin:{value:r.bloom?.3:1}},vertexShader:$y,fragmentShader:Zy,transparent:!0,depthWrite:!1,blending:fn});this.wallMat=c;let u=2.6,h=s*2+.2;for(let[d,f,m,v]of[[0,-s,h,.12],[0,s,h,.12],[-s,0,.12,h],[s,0,.12,h]]){let p=new Zt(new we(1,1,1),c);p.scale.set(m,u,v),p.position.set(d,u/2,f),p.renderOrder=3,this.arenaGroup.add(p)}if(e.rects.length){let d=new Ve(new we(1,1,1),ko(e.id==="metro"?"#2aa8ff":"#38d6ff",e.id==="metro"),e.rects.length),f=new $t,m=t.ground?-Wn*t.ground:0;e.rects.forEach(([v,p,g,M],T)=>{let y=Math.max((g-v)*me,me*.6),E=Math.max((M-p)*me,me*.6),w=e.heights[T]||3,x=((v+g)/2+.5-this.hw)*me,b=((p+M)/2+.5-this.hh)*me;f.makeScale(y,w-m,E).setPosition(x,(w+m)/2,b),d.setMatrixAt(T,f)}),d.frustumCulled=!1,this.arenaGroup.add(d)}this.terrain=new Tc(this.arenaGroup,t,this.hw,this.hh)}setupRound(t,e){for(let n of this.views)n.dispose();this.views=[],this.trails.clear(),this.fx.clear(),this.sim=e,e&&(this.buildArena(e),this.colors=e.bikes.map((n,s)=>Xn(ze(t.slots[s]?t.slots[s].color:"cyan"))),this.views=e.bikes.map((n,s)=>{let r=t.slots[s];return new fc(this.kit,ze(r?r.color:"cyan"),this.scene,r&&r.vehicle)}),this.watched.slot=-1,this.rig.snap())}solidAt(t,e,n){let s=this.sim,r=Math.floor(t/me+this.hw),o=Math.floor(n/me+this.hh);if(r<1||o<1||r>s.w-2||o>s.h-2)return!1;let a=Math.floor(e/Wn)+s.ground;if(a<0)return!0;if(a>=s.L)return!1;let l=s.T(a,r,o);if(l===2)return!0;if(l===3)return e<rr(s,a,r,o)-.1;let c=s.T(a+1,r,o);return a+1<s.L&&(c===1||c===4||c===3)&&e>(a+1-s.ground)*Wn-.5}guardCamera(t,e){if(!this.sim)return;let n=t.x,s=t.y+1.1,r=t.z;if(this.solidAt(n,s,r))return;let o=e.x-n,a=e.y-s,l=e.z-r,c=Math.ceil(Math.hypot(o,a,l)/.2),u=0;for(let d=1;d<=c;d++){let f=d/c;if(this.solidAt(n+o*f,s+a*f,r+l*f))break;u=f}if(u>=1)return;let h=Math.max(.22,u-.06);e.set(n+o*h,s+a*h,r+l*h)}watch(t,e){let n=e>=0?t.bikes[e]:null,s=this.watched;n&&n.alive&&s.slot===e&&(n.air&&!s.air&&n.airKind===fs&&this.events.push({type:"kick",slot:e}),!n.air&&s.air&&this.events.push({type:"land",slot:e,drop:s.drop}),n.surge>s.surge+1&&this.events.push({type:"pad",slot:e})),s.slot=e,s.air=n&&n.alive?n.air:0,s.surge=n&&n.alive?n.surge:0,n&&n.air&&(s.drop=(n.l-n.tl)*Wn+(n.airKind===fs?or:0))}update(t,e,n,s,r,o=!1){let a=t?t.sim:null;a!==this.sim&&this.setupRound(t,a),this.events.length=0;let l=n/1e3;if(a){let c=t.frac();this.trails.update(a,c,this.colors,this.hw,this.hh,l),this.wallMat&&(this.wallMat.uniforms.uTime.value=l),this.floor&&(this.floor.material.uniforms.uTime.value=l),this.terrain&&this.terrain.update(l);let u=t.confirmDelay;for(let p=0;p<a.bikes.length;p++){let g=a.bikes[p],M=this.views[p];M.update(g,a,c,e,this.hw,this.hh);let T=Math.cos(M.yaw),y=-Math.sin(M.yaw);g.alive?(M.exploded&&(M.exploded=!1,M.root.visible=!0,this.fx.cancel(p),this.events.push({type:"revive",slot:p})),g.grinding&&Math.random()<e*40&&(this.tmpFwd.set(M.world.x-T*1.7,M.world.y,M.world.z-y*1.7),this.fx.spark(this.tmpFwd,this.colors[p],2,-T*2,-y*2,2.5,p))):!M.exploded&&a.tick-g.deathTick>=u&&(M.exploded=!0,M.root.visible=!1,this.fx.explode(p,M.world,this.colors[p],T,y),this.events.push({type:"crash",slot:p,killer:g.killer,pos:M.world.clone()}),p===s&&this.rig.addShake(.9))}this.watch(a,s);let h=s>=0?a.bikes[s]:null,d=h?this.views[s]:null,f=a.rules,m=a.tick<f.countdown?t.tickF/(f.countdown*.8):1;if(d&&o&&m<1)this.shot="intro",this.rig.intro(d.world,d.yaw,this.half,Math.max(0,m));else if(d&&o&&!h.alive)this.shot!=="crash"&&this.rig.startCircling(d.world),this.shot="crash",this.rig.crashCam(d.world,e);else if(d&&o&&t.result&&h.alive)this.shot!=="show"&&this.rig.startCircling(d.world),this.shot="show",this.rig.showcase(d.world,e);else if(d){this.shot="follow";let p=h.alive&&a.speedOf(h)>f.speed,g=a.T(a.ground,h.x,h.y),M=h.alive&&!h.air&&h.l<a.ground&&g!==1&&g!==4?2.2:0;this.rig.follow(d.world,d.yaw,p,r,e,d.pitch,h.alive&&h.air>0,M)}else this.shot="orbit",this.rig.orbit(this.half*1.55,this.half*.75,e);let v=this.shot==="follow"&&h.alive&&a.speedOf(h)>f.speed?1:0;this.speedBlur+=(v-this.speedBlur)*qn(v?4:2.5,e)}else this.shot="orbit",this.rig.orbit(60,26,e),this.speedBlur=0;this.cinema.material.uniforms.uSpeed.value=this.speedBlur,this.followSlot=s,this.updateShips(l),this.fx.update(e),this.lightning.update(l),this.dust.update(this.camera,e),this.rig.apply(e)}render(){Mi[this.quality].bloom?this.composer.render():this.renderer.render(this.scene,this.camera)}};var Ac=.13392857142857142,Jy=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],cs=i=>440*2**((i-69)/12),wp=3,Ky=55,gu=70;function Qy(i){let e=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n/1023*2-1;e[n]=Math.tanh(s*i)/Math.tanh(i)}return e}function jy(i){let e=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n/1023*2-1;e[n]=Math.round(s*i)/i}return e}function tM(i,t){let e=Math.floor(i.sampleRate*t),n=i.createBuffer(1,e,i.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}function eM(i,t,e){let n=i.sampleRate,s=Math.floor(n*t),r=i.createBuffer(2,s,n);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++){let c=l/n;a[l]=(Math.random()*2-1)*Math.exp(-c*e)*Math.min(1,c/.008)}}return r}var Ep=[0,.3,.65,.8,.7,.55,.45,.36,.3];function nM(i){let e=new Float32Array(28),n=new Float32Array(28);for(let s=1;s<28;s++)n[s]=s<Ep.length?Ep[s]:.3*(s/8)**-1.8;return i.createPeriodicWave(e,n)}var Rc=class{constructor(t,e){let n=t.ctx;this.ctx=n,this.id=null,this.osc=n.createOscillator(),this.osc.setPeriodicWave(t.wave),this.osc2=n.createOscillator(),this.osc2.setPeriodicWave(t.wave),this.osc2.detune.value=9,this.whine=n.createOscillator(),this.whine.type="sine",this.whineGain=n.createGain(),this.whineGain.gain.value=0,this.toneGain=n.createGain(),this.toneGain.gain.value=.42,this.shaper=n.createWaveShaper(),this.shaper.curve=Qy(1.7),this.shaper.oversample="2x",this.tone=n.createBiquadFilter(),this.tone.type="lowpass",this.tone.Q.value=.5,this.tone.frequency.value=800,this.am=n.createGain(),this.am.gain.value=1,this.lfo=n.createOscillator(),this.lfo.type="sine",this.lfoDepth=n.createGain(),this.lfoDepth.gain.value=0,this.lfo.connect(this.lfoDepth).connect(this.am.gain),this.air=n.createBufferSource(),this.air.buffer=t.noise,this.air.loop=!0,this.airFilter=n.createBiquadFilter(),this.airFilter.type="bandpass",this.airFilter.Q.value=.6,this.airGain=n.createGain(),this.airGain.gain.value=0,this.grind=n.createBufferSource(),this.grind.buffer=t.noise,this.grind.loop=!0,this.grindFilter=n.createBiquadFilter(),this.grindFilter.type="bandpass",this.grindFilter.frequency.value=4200,this.grindFilter.Q.value=1.4,this.grindGain=n.createGain(),this.grindGain.gain.value=0,this.out=n.createGain(),this.out.gain.value=0,this.osc.connect(this.toneGain),this.osc2.connect(this.toneGain),this.toneGain.connect(this.shaper).connect(this.tone).connect(this.am),this.whine.connect(this.whineGain).connect(this.am),this.am.connect(this.out),this.air.connect(this.airFilter).connect(this.airGain).connect(this.out),this.grind.connect(this.grindFilter).connect(this.grindGain).connect(this.out),e?(this.panner=n.createPanner(),this.panner.panningModel="equalpower",this.panner.distanceModel="inverse",this.panner.refDistance=6,this.panner.rolloffFactor=1.3,this.panner.maxDistance=400,this.out.connect(this.panner).connect(t.engineBus)):this.out.connect(t.engineBus);let s=n.createGain();s.gain.value=.08,this.out.connect(s).connect(t.reverb);let r=n.currentTime;for(let o of[this.osc,this.osc2,this.whine,this.lfo])o.start(r);this.air.start(r,Math.random()*1.5),this.grind.start(r,Math.random()*1.5)}set(t,e){let n=t.boost?.2:.1,s=(28+t.rate*24+t.boost*10)*(t.doppler||1)*(t.tone||1);this.osc.frequency.setTargetAtTime(s,e,n),this.osc2.frequency.setTargetAtTime(s,e,n),this.whine.frequency.setTargetAtTime(s*11.3,e,n),this.whineGain.gain.setTargetAtTime(.008+.016*t.rate+.03*t.boost,e,.15),this.tone.frequency.setTargetAtTime(380+620*t.rate+900*t.boost,e,.15),this.lfo.frequency.setTargetAtTime(s/3.2,e,.1),this.lfoDepth.gain.setTargetAtTime(.1+.08*t.boost,e,.2),this.airFilter.frequency.setTargetAtTime(600+800*t.rate+900*t.boost,e,.2),this.airGain.gain.setTargetAtTime(.02+.045*t.rate+.05*t.boost,e,.2),this.grindGain.gain.setTargetAtTime(t.grind?.035+Math.random()*.045:0,e,.025),this.out.gain.setTargetAtTime(t.level,e,.08)}place(t,e,n,s,r){if(!this.panner)return;let o=this.panner;o.positionX?r?(o.positionX.setValueAtTime(t,s),o.positionY.setValueAtTime(e,s),o.positionZ.setValueAtTime(n,s)):(o.positionX.setTargetAtTime(t,s,.03),o.positionY.setTargetAtTime(e,s,.03),o.positionZ.setTargetAtTime(n,s,.03)):o.setPosition(t,e,n)}silence(t,e=!1){this.out.gain.setTargetAtTime(0,t,e?.03:.08),this.grindGain.gain.setTargetAtTime(0,t,.03)}},Cc=class{constructor({volume:t=.8,music:e=.45,engine:n=.8}={}){this.ctx=null,this.volume=t,this.musicVolume=e,this.musicOn=e>0,this.engineVolume=n,this.own=null,this.rivals=[],this.assigned=new Map,this.tracks=new Map,this.listenerPrev=null,this.nextRev=0,this.revUntil=0,this.ownWasAlive=!1,this.nextStep=0,this.stepIndex=0,this.musicTimer=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.init(new t),this.nextStep=this.ctx.currentTime+.1,this.musicTimer=setInterval(()=>this.scheduleMusic(),50))}init(t){this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.volume;let e=t.createDynamicsCompressor();e.threshold.value=-8,e.knee.value=6,e.ratio.value=8,e.attack.value=.003,e.release.value=.25,this.master.connect(e).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=eM(t,2.2,3.2);let n=t.createGain();n.gain.value=.9,this.reverb.connect(n).connect(this.master),this.sfx=t.createGain(),this.sfx.connect(this.master),this.engineBus=t.createGain(),this.engineBus.gain.value=this.engineVolume,this.engineBus.connect(this.master),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicOn?this.musicVolume:0,this.musicBus.connect(this.master);let s=t.createGain();s.gain.value=.12,this.musicBus.connect(s).connect(this.reverb),this.noise=tM(t,2),this.wave=nM(t),this.crush=jy(6),this.own=new Rc(this,!1),this.rivals=Array.from({length:wp},()=>new Rc(this,!0))}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setEngineVolume(t){this.engineVolume=t,this.engineBus&&this.engineBus.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setMusic(t){this.musicVolume=t,this.musicOn=t>0,this.musicBus&&this.musicBus.gain.setTargetAtTime(t,this.ctx.currentTime,.2)}toggleMusic(){return this.musicOn=!this.musicOn,this.musicBus&&this.musicBus.gain.setTargetAtTime(this.musicOn?this.musicVolume||.45:0,this.ctx.currentTime,.2),this.musicOn}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=performance.now()/1e3;if(!t){this.own.silence(e);for(let h of this.rivals)h.silence(e);this.ownWasAlive=!1;return}let s=t.listener,r=this.ctx.listener;r.positionX?(r.positionX.setTargetAtTime(s.x,e,.02),r.positionY.setTargetAtTime(s.y,e,.02),r.positionZ.setTargetAtTime(s.z,e,.02),r.forwardX.setTargetAtTime(s.fx,e,.02),r.forwardY.setTargetAtTime(s.fy,e,.02),r.forwardZ.setTargetAtTime(s.fz,e,.02),r.upX.value=0,r.upY.value=1,r.upZ.value=0):(r.setPosition(s.x,s.y,s.z),r.setOrientation(s.fx,s.fy,s.fz,0,1,0));let o=0,a=0;if(this.listenerPrev&&n>this.listenerPrev.t){let h=n-this.listenerPrev.t;o=(s.x-this.listenerPrev.x)/h,a=(s.z-this.listenerPrev.z)/h}this.listenerPrev={x:s.x,z:s.z,t:n};let l=t.own;if(l){let h=l.rate;l.idle&&(n>this.nextRev&&(this.revUntil=n+.22,this.nextRev=n+.7+Math.random()*1.2),h=n<this.revUntil?.8:.25),this.own.set({level:l.idle?.22:.3,rate:h,boost:l.boost,grind:l.grind,doppler:1,tone:l.tone},e),this.ownWasAlive=!0}else this.own.silence(e,this.ownWasAlive),this.ownWasAlive=!1;let c=t.others.map(h=>({b:h,d:Math.hypot(h.x-s.x,h.z-s.z)})).filter(h=>h.d<Ky).sort((h,d)=>h.d-d.d).slice(0,wp),u=new Set(c.map(h=>h.b.id));for(let[h,d]of this.assigned)u.has(h)||(d.silence(e),d.id=null,this.assigned.delete(h));for(let{b:h}of c){let d=this.assigned.get(h.id),f=!1;if(!d){if(d=this.rivals.find(w=>w.id===null),!d)continue;d.id=h.id,this.assigned.set(h.id,d),f=!0}let m=this.tracks.get(h.id),v=0,p=0;if(m&&n>m.t&&n-m.t<.5){let w=n-m.t;v=m.vx*.7+(h.x-m.x)/w*.3,p=m.vz*.7+(h.z-m.z)/w*.3}this.tracks.set(h.id,{x:h.x,z:h.z,vx:v,vz:p,t:n});let g=s.x-h.x,M=s.z-h.z,T=Math.hypot(g,M)||1,y=((v-o)*g+(p-a)*M)/T,E=Math.min(1.4,Math.max(.7,gu/(gu-Math.min(y,gu*.6))));d.place(h.x,(h.y||0)+.5,h.z,e,f),d.set({level:.26,rate:h.rate,boost:h.boost,grind:0,doppler:E,tone:h.tone},e)}for(let h of this.tracks.keys())t.others.some(d=>d.id===h)||this.tracks.delete(h)}shot(t=0,e=.2){let n=this.ctx,s=n.createGain(),r=n.createStereoPanner();if(r.pan.value=Math.max(-1,Math.min(1,t)),s.connect(r).connect(this.sfx),e>0){let o=n.createGain();o.gain.value=e,r.connect(o).connect(this.reverb)}return s}tone(t,e,n,s,r,o,a,l=.005){let c=this.ctx,u=c.createOscillator(),h=c.createGain();return u.type=e,u.frequency.setValueAtTime(n,r),s!==n&&u.frequency.exponentialRampToValueAtTime(s,r+o),h.gain.setValueAtTime(1e-4,r),h.gain.exponentialRampToValueAtTime(a,r+l),h.gain.exponentialRampToValueAtTime(1e-4,r+o),u.connect(h).connect(t),u.start(r),u.stop(r+o+.05),u}noiseSweep(t,e,n,s,r,o,a,l,c=.01){let u=this.ctx,h=u.createBufferSource();h.buffer=this.noise;let d=u.createBiquadFilter();d.type=e,d.Q.value=r,d.frequency.setValueAtTime(n,o),d.frequency.exponentialRampToValueAtTime(s,o+a);let f=u.createGain();f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(l,o+c),f.gain.exponentialRampToValueAtTime(1e-4,o+a),h.connect(d).connect(f).connect(t),h.start(o,Math.random()*1.5),h.stop(o+a+.05)}turn(t=0){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.shot(t*.35,.05);this.noiseSweep(n,"bandpass",3200,1300,.9,e,.13,1.5,.012),this.tone(n,"sine",1300,640,e,.08,.3)}boost(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.shot(0,.18);t?(this.noiseSweep(n,"bandpass",320,2800,1.1,e,.42,2.5,.05),this.tone(n,"sine",210,640,e,.34,.45,.03)):this.noiseSweep(n,"bandpass",1500,380,1,e,.3,1,.02)}jump(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.shot(0,.15);this.tone(e,"sine",190,560,t,.22,.55,.01),this.noiseSweep(e,"bandpass",500,3e3,1.3,t,.26,1.3,.02)}kick(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.shot(0,.3);this.tone(e,"sawtooth",120,360,t,.5,.18,.03),this.noiseSweep(e,"bandpass",300,4200,.9,t,.7,2,.05)}land(t=0){if(!this.ctx)return;let e=this.ctx.currentTime,n=Math.min(1,.3+t*.12),s=this.shot(0,.2);this.tone(s,"sine",130,42,e,.28,1.8*n,.004),this.noiseSweep(s,"lowpass",2e3,180,.7,e,.2,1.3*n,.003)}pad(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.shot(0,.2);this.noiseSweep(e,"bandpass",900,6e3,1.8,t,.32,1.5,.008),this.tone(e,"triangle",440,1480,t,.26,.4,.008)}slowmo(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.shot(0,.5);this.tone(e,"sine",240,50,t,.9,.9,.02),this.noiseSweep(e,"lowpass",2600,140,.8,t,.9,1.1,.05)}crash(t,e=0){if(!this.ctx)return;let n=this.ctx,s=n.currentTime,r=.15+.85*Math.max(0,Math.min(1,t)),o=this.shot(e*.8,.4);this.tone(o,"sine",150,36,s,.42,2.8*r,.004),this.tone(o,"triangle",300,90,s,.25,1*r,.003),this.noiseSweep(o,"lowpass",3200,240,.7,s,.55,2.4*r,.004);for(let u=0;u<14;u++){let h=s+.02+Math.random()*.45,d=1800+Math.random()*3400,f=this.shot(e*.8+(Math.random()-.5)*.9,.5);this.tone(f,"sine",d,d*(.92+Math.random()*.06),h,.05+Math.random()*.1,.3*r,.002)}let a=n.createWaveShaper();a.curve=this.crush;let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2800;let c=n.createGain();c.gain.value=.6,a.connect(l).connect(c).connect(o),this.tone(a,"sine",900,55,s+.04,.85,.75*r,.01)}countdown(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.shot(0,.25);if(t>0)this.tone(n,"sine",660,660,e,.22,1.75,.004),this.tone(n,"sine",1320,1320,e,.12,.45,.004);else{for(let s of[880,1318.5,1760])this.tone(n,"triangle",s*.94,s,e,.75,.72,.01);this.noiseSweep(n,"bandpass",600,4e3,1.2,e,.35,1.2,.02)}}win(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.shot(0,.35);[69,73,76,80,81].forEach((n,s)=>this.tone(e,"triangle",cs(n),cs(n),t+s*.085,.45,.55,.008))}lose(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=this.shot(0,.3),s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=1e3,s.connect(n),[64,60,57].forEach((r,o)=>this.tone(s,"sawtooth",cs(r),cs(r),e+o*.16,.5,.54,.02))}scheduleMusic(){let t=this.ctx;if(!(!t||t.state!=="running"))for(this.nextStep<t.currentTime-.5&&(this.nextStep=t.currentTime+.05);this.nextStep<t.currentTime+.2;)this.musicOn&&this.playStep(this.stepIndex,this.nextStep),this.nextStep+=Ac,this.stepIndex=(this.stepIndex+1)%128}voice(t,e,n,s,r,o){let a=this.ctx,l=a.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let c=a.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(o,n);let u=a.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(r,n+.008),u.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(c).connect(u).connect(this.musicBus),l.start(n),l.stop(n+s+.02)}playStep(t,e){let n=this.ctx,s=Math.floor(t/16)%4,r=t%16,o=Jy[s];r%2===0&&this.voice("sawtooth",cs(o[0]-24),e,Ac*1.8,.16,520);let a=o[[0,1,2,1][r%4]]+(r>=8?12:0);if(this.voice("sawtooth",cs(a),e,Ac*.9,.03,1100+500*Math.sin(t/10)),r===0)for(let l of o)this.voice("sawtooth",cs(l),e,Ac*15,.02,900);if(r%4===0){let l=n.createOscillator(),c=n.createGain();l.frequency.setValueAtTime(130,e),l.frequency.exponentialRampToValueAtTime(40,e+.18),c.gain.setValueAtTime(.32,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.22),l.connect(c).connect(this.musicBus),l.start(e),l.stop(e+.25)}if(r%2===1){let l=n.createBufferSource();l.buffer=this.noise;let c=n.createBiquadFilter();c.type="highpass",c.frequency.value=7e3;let u=n.createGain();u.gain.setValueAtTime(.04,e),u.gain.exponentialRampToValueAtTime(1e-4,e+.05),l.connect(c).connect(u).connect(this.musicBus),l.start(e,Math.random()*1.5),l.stop(e+.06)}}};var Rp=new Set(["ArrowLeft","KeyA","KeyQ"]),Cp=new Set(["ArrowRight","KeyD","KeyE"]),Pp=new Set(["ArrowUp","KeyW","ShiftLeft","ShiftRight"]),Ip=new Set(["Space"]),Ap={ArrowRight:0,KeyD:0,ArrowDown:1,KeyS:1,ArrowLeft:2,KeyA:2,ArrowUp:3,KeyW:3},iM=new Set(["ShiftLeft","ShiftRight"]),sM=new Set([...Rp,...Cp,...Pp,...Ip,"ArrowDown","KeyS","Tab"]),Pc=class{constructor(t){this.h=t,this.enabled=!1,this.absolute=!1,this.held=new Set,this.touchBoost=!1,this.padPrev=[],this.padAxis=0,window.addEventListener("keydown",e=>this.down(e)),window.addEventListener("keyup",e=>this.up(e)),window.addEventListener("blur",()=>this.releaseAll())}typing(t){let e=t.target;return e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable)}down(t){if(!this.typing(t)){if(t.code==="Escape"){t.preventDefault(),this.h.pause();return}if(this.enabled){if(sM.has(t.code)&&t.preventDefault(),t.code==="Tab"){this.h.board(!0);return}t.repeat||(t.code==="KeyC"?this.h.camera():t.code==="KeyM"?this.h.music():t.code==="Enter"||t.code==="KeyT"?(t.preventDefault(),this.h.chat()):Ip.has(t.code)?this.h.jump():this.absolute?t.code in Ap?this.h.steer(Ap[t.code]):iM.has(t.code)&&this.boostKey(t.code,!0):Rp.has(t.code)?this.h.turn("L"):Cp.has(t.code)?this.h.turn("R"):Pp.has(t.code)&&this.boostKey(t.code,!0))}}}up(t){t.code==="Tab"&&this.h.board(!1),this.held.has(t.code)&&this.boostKey(t.code,!1)}boostKey(t,e){let n=this.held.size>0||this.touchBoost;e?this.held.add(t):this.held.delete(t);let s=this.held.size>0||this.touchBoost;n!==s&&this.h.boost(s)}releaseAll(){let t=this.held.size>0||this.touchBoost;this.held.clear(),this.touchBoost=!1,t&&this.h.boost(!1),this.h.board(!1)}bindTouch(t){for(let e of t.querySelectorAll("[data-act]")){let n=e.dataset.act;if(e.addEventListener("pointerdown",s=>{if(s.preventDefault(),n==="B"){let r=this.held.size>0||this.touchBoost;this.touchBoost=!0,r||this.h.boost(!0)}else n==="J"?this.h.jump():this.h.turn(n)}),n==="B"){let s=()=>{this.touchBoost&&(this.touchBoost=!1,this.held.size===0&&this.h.boost(!1))};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("pointerleave",s)}}}pollGamepad(){let t=navigator.getGamepads?navigator.getGamepads():[],e=t&&[...t].find(r=>r&&r.connected);if(!e)return;let n=e.buttons.map(r=>r.pressed),s=r=>n[r]&&!this.padPrev[r];if(s(9)&&this.h.pause(),this.enabled){(s(14)||s(4))&&this.h.turn("L"),(s(15)||s(5))&&this.h.turn("R");let r=e.axes[0]||0,o=r<-.6?-1:r>.6?1:0;o!==this.padAxis&&o!==0&&this.h.turn(o<0?"L":"R"),this.padAxis=o,s(0)&&this.h.jump();let a=n[1]||n[7],l=this.padPrev[1]||this.padPrev[7];a!==!!l&&this.boostKey("pad",a)}this.padPrev=n}};var rM=900,Ic=class{constructor(){this.rb=null,this.slots=[],this.mySlot=-1,this.start=0,this.standings=[],this.target=3,this.roundNo=0,this.phase="idle",this.result=null,this.tickF=0,this.handlers={},this.stats={resyncs:0,checked:0}}on(t,e){return(this.handlers[t]||(this.handlers[t]=[])).push(e),this}emit(t,e){for(let n of this.handlers[t]||[])n(e)}get sim(){return this.rb?this.rb.sim:null}get me(){return this.rb&&this.mySlot>=0?this.rb.sim.bikes[this.mySlot]:null}get confirmDelay(){return 0}frac(){return this.rb?Math.min(1,Math.max(0,this.tickF-this.rb.tick)):0}advance(t){if(!this.rb)return!0;this.tickF=(this.clock(t)-this.start)*60/1e3;let e=Math.max(0,Math.floor(this.tickF));return this.rb.advanceTo(Math.min(e,this.rb.tick+rM))}},Lc=class extends Ic{constructor(t){super(),this.net=t,this.seq=0,this.pending=new Map,this.checks=[],this.awaitingSnap=!1}clock(t){return this.net.serverNow(t)}get confirmDelay(){return Math.min(12,Math.max(2,Math.round(this.net.rtt*.06)+2))}handle(t){switch(t.t){case"round":this.seq=0,this.adopt(t,new Ko(t.cfg)),this.phase="round",this.result=null,this.emit("round");break;case"snap":this.loadSnapshot(t);break;case"in":this.onInput(t);break;case"chk":this.checks.push(t);break;case"over":this.phase=t.champion?"final":"break",this.result={winner:t.winner,champion:t.champion,next:t.next},this.standings=t.standings,this.emit("over",this.result);break;default:break}}adopt(t,e){this.rb=e,this.slots=t.slots,this.mySlot=t.you,this.start=t.start,this.standings=t.standings,this.target=t.target,this.roundNo=t.n,this.pending.clear(),this.checks.length=0,this.awaitingSnap=!1}loadSnapshot(t){let e=new Ko($u.deserialize(t.state));for(let s of t.inputs)e.addInput({k:s.k,p:s.p,a:s.a,n:s.n});let n=this.roundNo!==t.n;this.adopt(t,e),this.phase=t.phase==="lobby"?"idle":t.phase,n&&this.emit("round")}onInput(t){if(!this.rb)return;let e=t.p===this.mySlot?this.pending.get(t.n):null;if(e){this.pending.delete(t.n),e.k!==t.k&&this.rb.moveInput(e,t.k);return}if(t.k<this.rb.floor){this.requestSnapshot();return}this.rb.addInput({k:t.k,p:t.p,a:t.a,n:t.n})}input(t){let e=this.me;if(!e||!e.alive||this.awaitingSnap)return!1;let n=Math.floor((this.clock(performance.now())-this.start)*60/1e3),s={k:Math.max(this.rb.tick,n),p:this.mySlot,a:t,n:++this.seq};return this.rb.addInput(s),this.pending.set(s.n,s),this.net.send({t:"in",k:s.k,a:t,n:s.n}),!0}requestSnapshot(){this.awaitingSnap||(this.awaitingSnap=!0,this.stats.resyncs++,this.net.send({t:"sync"}))}pendingUpTo(t){for(let e of this.pending.values())if(e.k<=t)return!0;return!1}update(t){if(this.rb){this.advance(t)||this.requestSnapshot();for(let[e,n]of this.pending)n.k<this.rb.tick-Gu&&this.pending.delete(e);for(;this.checks.length&&this.checks[0].k<this.rb.tick&&!this.pendingUpTo(this.checks[0].k);){let e=this.checks.shift(),n=this.rb.hashAt(e.k);if(n!==null&&(this.stats.checked++,n!==e.h)){this.requestSnapshot();break}}}}leaveRound(){this.rb=null,this.phase="idle",this.result=null}},Ho=class extends Ic{constructor({settings:t,player:e=null,breakMs:n=3500,finalMs:s=6e3}){super(),this.settings=fr(t),this.player=e,this.breakMs=n,this.finalMs=s,this.scores=new Map,this.seq=0,this.pausedAt=0,this.nextAt=0,this.lastNow=0,this.slowUntil=0,this.slowScale=1}slowMo(t,e,n){this.slowScale=e,this.slowUntil=t+n}clock(t){return this.pausedAt||t}get paused(){return this.pausedAt!==0}pause(t){this.pausedAt||(this.pausedAt=t)}resume(t){if(!this.pausedAt)return;let e=t-this.pausedAt;this.start+=e,this.nextAt+=e,this.slowUntil+=e,this.pausedAt=0,this.lastNow=t}begin(t){this.scores.clear(),this.roundNo=0,this.target=this.settings.rounds,this.startRound(t)}startRound(t){let e=this.settings,n=[];this.player&&n.push({pid:"me",name:this.player.name,color:this.player.color,vehicle:Jo(this.player.vehicle),bot:0,skill:0});let s=this.player?Math.min(e.bots,7):Math.max(2,e.bots),r=Qu([this.player?this.player.color:null,...new Array(s).fill(null)]);for(let a=0;a<s;a++)n.push({pid:`bot${a}`,name:Zu[a],color:r[n.length],vehicle:Ju(a),bot:1,skill:e.botSkill});let o=ju(e,n,Math.random()*4294967296>>>0,this.roundNo+1);this.rb=new Ko(o),this.slots=n,this.mySlot=this.player?0:-1,this.start=t+400,this.slowUntil=0,this.roundNo++,this.seq=0;for(let a of n)this.scores.has(a.pid)||this.scores.set(a.pid,0);this.refreshStandings(),this.phase="round",this.result=null,this.emit("round")}refreshStandings(){this.standings=this.slots.map(t=>({pid:t.pid,name:t.name,color:t.color,bot:t.bot,score:this.scores.get(t.pid)||0})).sort((t,e)=>e.score-t.score)}update(t){if(!(this.pausedAt||!this.rb))if(t<this.slowUntil&&this.lastNow&&(this.start+=Math.min(100,t-this.lastNow)*(1-this.slowScale)),this.lastNow=t,this.advance(t),this.phase==="round"){let e=pr(this.rb.sim);e&&this.rb.tick-e.endTick>30&&this.finish(e.winner,t)}else(this.phase==="break"||this.phase==="final")&&t>=this.nextAt&&(this.phase==="break"?this.startRound(t):this.player?(this.phase="idle",this.emit("matchEnd")):this.begin(t))}finish(t,e){let n=null;if(t>=0){let r=this.slots[t].pid,o=(this.scores.get(r)||0)+1;this.scores.set(r,o),o>=this.settings.rounds&&(n=r)}this.refreshStandings(),this.phase=n?"final":"break";let s=n?this.finalMs:this.breakMs;this.nextAt=e+s,this.result={winner:t,champion:n,next:s},this.emit("over",this.result)}input(t){let e=this.me;return!e||!e.alive||this.pausedAt?!1:(this.rb.addInput({k:this.rb.tick,p:this.mySlot,a:t,n:++this.seq}),!0)}};var oM=[2,10,22],aM=[0,2,6],lM=[8,30,52],cM=[[18,70,112],[34,112,168]],Lp=[52,150,214],Dp=[90,210,255],xu=[255,201,61],Np=[40,128,186],Dc=new Map;function hM(i,t,e){let n=i.w*i.h,s=e*i.w+t,r=l=>i.terrain[l*n+s];for(let l=i.levels-1;l>i.ground;l--){let c=r(l);if(c===4)return xu;if(c===1)return cM[Math.min(l-i.ground,2)-1];if(c===3)return i.ramps[i.rampAt[s]-1].kick?Dp:Lp;if(c===2&&r(l-1)!==2&&r(l-1)!==3)return Np}let o=i.rampAt[s]?i.ramps[i.rampAt[s]-1]:null;if(o)return o.kick?Dp:Lp;let a=r(i.ground);if(a===4)return xu;if(a===2)return Np;if(i.ground>0){let l=r(i.ground-1);if(a===0)return l===4?xu:aM;if(l===1||l===4)return lM}return oM}function Nc(i,t){let e=`${i.id}:${i.size}:${t}`,n=Dc.get(e);if(n)return n;let s=document.createElement("canvas");s.width=i.w,s.height=i.h;let r=s.getContext("2d"),o=r.createImageData(i.w,i.h);for(let l=0;l<i.h;l++)for(let c=0;c<i.w;c++){let[u,h,d]=hM(i,c,l),f=(l*i.w+c)*4;o.data[f]=u,o.data[f+1]=h,o.data[f+2]=d,o.data[f+3]=255}r.putImageData(o,0,0),n=document.createElement("canvas"),n.width=n.height=t;let a=n.getContext("2d");return a.imageSmoothingEnabled=!1,a.drawImage(s,0,0,t,t),Dc.size>16&&Dc.clear(),Dc.set(e,n),n}var Xe=i=>document.getElementById(i),uM=9.6;function Go(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Uc=class{constructor(){this.root=Xe("hud"),this.el={round:Xe("hud-round"),sub:Xe("hud-sub"),net:Xe("hud-net"),room:Xe("hud-room"),board:Xe("hud-board"),feed:Xe("hud-feed"),boost:Xe("hud-boost"),boostBox:Xe("hud-boostbox"),speed:Xe("hud-speed"),grind:Xe("hud-grind"),jump:Xe("hud-jump"),center:Xe("hud-center"),hint:Xe("hud-hint"),results:Xe("results")},this.map=Xe("minimap"),this.mapCtx=this.map.getContext("2d"),this.cache={},this.count=null,this.goUntil=0,this.feedItems=[],this.pt=[0,0],this.pts=[],this.boardOpen=!1,this.card=Xe("title-card"),this.callEl=Xe("callout"),this.callTimer=0,this.cine=!1}setCine(t){t!==this.cine&&(this.cine=t,document.body.classList.toggle("cine",t))}titleCard(t,e){this.card.querySelector(".tc-name").textContent=t,this.card.querySelector(".tc-blurb").textContent=e,this.card.classList.remove("show"),this.card.offsetWidth,this.card.classList.add("show")}callout(t,e=""){let n=this.callEl;n.textContent=t,n.style.color=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),clearTimeout(this.callTimer),this.callTimer=setTimeout(()=>n.classList.remove("show"),1800)}show(t){this.root.classList.toggle("hidden",!t),t||(this.hideResults(),this.setCine(!1),this.card.classList.remove("show"))}set(t,e,n,s="textContent"){this.cache[t]!==n&&(this.cache[t]=n,e[s]=n)}reset(){this.feedItems=[],this.el.feed.innerHTML="",this.count=null,this.goUntil=0,this.el.center.className="center-msg",this.el.center.textContent="",this.cache={}}onEvent(t,e){if(t.type==="revive"){this.feedItems=this.feedItems.filter(a=>a.slot!==t.slot),this.renderFeed();return}if(t.type!=="crash")return;let n=e.slots;if(!n[t.slot])return;let r=a=>`<b style="color:${ze(n[a].color)}">${Go(n[a].name)}</b>`,o;t.killer===$o?o=`${r(t.slot)} left the arena`:t.killer===Xu?o=`${r(t.slot)} hit the wall`:t.killer===t.slot?o=`${r(t.slot)} hit their own line`:t.killer>=0&&n[t.killer]?o=`${r(t.slot)} crashed into ${r(t.killer)}'s line`:o=`${r(t.slot)} crashed`,this.feedItems.push({slot:t.slot,html:o,at:performance.now()}),this.feedItems.length>5&&this.feedItems.shift(),this.renderFeed()}renderFeed(){this.el.feed.innerHTML=this.feedItems.map(t=>`<div class="feed-item">${t.html}</div>`).join("")}update(t,e,n){let s=t&&t.sim;if(!s)return;let r=performance.now();this.feedItems.length&&r-this.feedItems[0].at>7e3&&(this.feedItems.shift(),this.renderFeed()),this.set("round",this.el.round,`ROUND ${t.roundNo}`),this.set("sub",this.el.sub,t.target>1?`FIRST TO ${t.target} WINS`:"ONE ROUND"),this.set("net",this.el.net,e.online?`PING ${Math.round(e.ping)} ms`:"PRACTICE"),this.set("room",this.el.room,e.room?`ROOM CODE ${e.room}`:"");let o=s.rules.countdown-t.tickF,a="",l="center-msg";if(o>0){let d=Math.ceil(o/60);d!==this.count&&d<=3&&(this.count=d,n.countdown(d)),a=String(Math.min(3,d)),l+=" count"}else this.count!==0&&this.count!==null&&(this.count=0,this.goUntil=r+900,n.countdown(0));o<=0&&r<this.goUntil&&(a="GO!",l+=" count go"),this.set("centerCls",this.el.center,l,"className"),this.set("center",this.el.center,a);let c=e.follow>=0?s.bikes[e.follow]:null,u=s.rules;if(this.set("boostVis",this.el.boostBox.style,u.boost&&c?"":"none","display"),c){let d=Math.round(c.energy/u.boostMax*100);this.set("boost",this.el.boost.style,`${d}%`,"width");let f=c.alive?s.speedOf(c)*60/1200:0;this.set("speed",this.el.speed,String(Math.round(f*uM))),this.set("grind",this.el.grind.style,c.alive&&c.grinding?"visible":"hidden","visibility"),this.set("boostCol",this.el.boost.style,ze(t.slots[e.follow].color),"background")}let h=!c||!u.jump||!c.alive?"none":c.air?"air":c.jumpCd||c.jumpReq?"cool":"ready";this.set("jump",this.el.jump,`jump-ind ${h}`,"className"),this.set("hint",this.el.hint,e.hint||""),this.renderBoard(t,s),this.drawMinimap(t,s,e.follow)}renderBoard(t,e){let n=new Map(t.slots.map((r,o)=>[r.pid,e.bikes[o]?e.bikes[o].alive:0])),s=t.standings.map(r=>{let a=n.has(r.pid)&&!n.get(r.pid),l=Array.from({length:Math.min(t.target,9)},(u,h)=>`<i class="${h<r.score?"on":""}"></i>`).join(""),c=t.mySlot>=0&&t.slots[t.mySlot].pid===r.pid;return`<li class="${a?"dead":""}${c?" me":""}"><span class="dot" style="background:${ze(r.color)}"></span><span class="nm">${Go(r.name)}${r.bot?" <small>BOT</small>":""}</span><span class="pips">${l}</span></li>`}).join("");this.set("board",this.el.board,s,"innerHTML")}drawMinimap(t,e,n){let s=this.mapCtx,r=this.map.width,o=r/e.w,a=t.frac();s.clearRect(0,0,r,r),s.globalAlpha=.82,s.drawImage(Nc(e.arena,r),0,0),s.globalAlpha=1,s.strokeStyle="rgba(95, 212, 255, 0.85)",s.lineWidth=1.5,s.strokeRect(o*.5,o*.5,r-o,r-o),s.lineWidth=Math.max(1.2,o*.9),s.lineJoin="round";for(let l of e.bikes){if(l.gone)continue;let c=ze(t.slots[l.slot].color);s.strokeStyle=c,s.globalAlpha=l.alive?.95:.35,s.beginPath();let u=hc(l,e,a,this.pts),h=!1;for(let d=0;d<u.length;d+=4){if(Number.isNaN(u[d])){h=!1;continue}h?s.lineTo(u[d]*o,u[d+1]*o):s.moveTo(u[d]*o,u[d+1]*o),h=!0}if(s.stroke(),Uo(l,e,a,this.pt),l.alive){s.globalAlpha=1,s.fillStyle=l.slot===n?"#ffffff":c,s.beginPath(),s.arc(this.pt[0]*o,this.pt[1]*o,l.slot===n?3.6:2.6,0,Math.PI*2),s.fill();let d=(l.air?l.tl:l.l)-e.ground;d>0?(s.strokeStyle="#ffffff",s.lineWidth=1.2,s.beginPath(),s.arc(this.pt[0]*o,this.pt[1]*o,5.5,0,Math.PI*2),s.stroke(),s.lineWidth=Math.max(1.2,o*.9)):d<0&&(s.fillStyle="rgba(0, 0, 0, 0.55)",s.beginPath(),s.arc(this.pt[0]*o,this.pt[1]*o,1.6,0,Math.PI*2),s.fill())}}s.globalAlpha=1}showResults(t,e,n,s="",r=""){let o=t.slots,a=e.winner>=0?o[e.winner]:null,l=a&&t.mySlot===e.winner,c;if(n){let d=t.standings[0];c=`<div class="res-kicker">MATCH OVER</div><div class="res-title" style="color:${ze(d.color)}">${Go(d.name)} WINS THE MATCH</div>`}else a?c=`<div class="res-kicker">ROUND ${t.roundNo}</div><div class="res-title" style="color:${ze(a.color)}">${l?"YOU WIN THE ROUND":`${Go(a.name)} WINS THE ROUND`}</div>`:c=`<div class="res-kicker">ROUND ${t.roundNo}</div><div class="res-title">DRAW</div>`;let u=t.standings.map((d,f)=>`<li><span class="rank">${f+1}</span><span class="dot" style="background:${ze(d.color)}"></span><span class="nm">${Go(d.name)}${d.bot?" <small>BOT</small>":""}</span><span class="score">${d.score}</span></li>`).join(""),h=n?"":`<div class="res-next">Next round in <span id="res-count">${Math.ceil(e.next/1e3)}</span>s</div>`;this.el.results.innerHTML=`<div class="res-card">${c}<ol class="res-board">${u}</ol>${r}${h}${s}</div>`,this.el.results.classList.remove("hidden"),this.resultsUntil=performance.now()+e.next}tickResults(){let t=document.getElementById("res-count");t&&(t.textContent=String(Math.max(0,Math.ceil((this.resultsUntil-performance.now())/1e3))))}hideResults(){this.el.results.classList.add("hidden"),this.el.results.innerHTML=""}};var ht=i=>document.getElementById(i),Mu=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Hp="lightwake.prefs",Gp="lightwake.token";function Vp(i,t){try{return i.getItem(t)}catch{return null}}function Wp(i,t,e){try{i.setItem(t,e)}catch{}}function dM(){let i=Vp(localStorage,Hp);if(!i)return{};try{return JSON.parse(i)||{}}catch{return{}}}var Ct={name:"",color:ps[Math.floor(Math.random()*ps.length)].id,vehicle:"cycle",quality:"medium",camera:"chase",slowmo:!0,steering:"screen",volume:.8,music:.4,engine:.8,practice:{...Gc},...dM()};Ct.practice=fr(Ct.practice);Ct.vehicle=Jo(Ct.vehicle);var _u=Ct.records&&typeof Ct.records=="object"?Ct.records:{};Ct.records={ride:Number(_u.ride)||0,cuts:Number(_u.cuts)||0,wins:Number(_u.wins)||0};Ct.name||(Ct.name=`Rider${Math.floor(100+Math.random()*900)}`);var pn=()=>Wp(localStorage,Hp,JSON.stringify(Ct)),Up=0;function rn(i,t=3200){let e=ht("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Up),Up=setTimeout(()=>e.classList.remove("show"),t)}var Su=["title","online","practice","lobby","help","settings","pause"],J={screen:"title",backTo:"title",mode:"menu",session:null,attract:null,online:null,room:null,share:{publicUrl:null,lanUrls:[]},spectate:-1,attractFollow:-1,attractSwitch:0,invite:null};function mn(i,t="title"){for(let e of Su)ht(`screen-${e}`).classList.toggle("hidden",e!==i);J.screen=i,J.backTo=t,document.body.classList.toggle("in-menu",J.mode!=="menu")}function Xp(){for(let i of Su)ht(`screen-${i}`).classList.add("hidden");J.screen="game",document.body.classList.remove("in-menu")}function fM(i){for(let t of Su)ht(`screen-${t}`).classList.add("hidden");ht("fatal-msg").textContent=i,ht("fatal").classList.remove("hidden")}var nn;try{nn=new Ec(ht("view"),Ct.quality)}catch(i){throw console.error(i),fM('Your browser could not start 3D graphics (WebGL). Update Chrome or Edge, or switch on "hardware acceleration" in the browser settings, then reload.'),i}var De=new Cc({volume:Ct.volume,music:Ct.music,engine:Ct.engine}),sn=new Uc,cr=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);cr&&document.body.classList.add("touch-ui");window.addEventListener("pointerdown",i=>{cr||i.pointerType!=="touch"||(cr=!0,document.body.classList.add("touch-ui"),J.mode!=="menu"&&ht("touch").classList.remove("hidden"))});var qp=()=>De.unlock();window.addEventListener("pointerdown",qp);window.addEventListener("keydown",qp);var Dn=document.documentElement.dataset.net==="p2p",Vo=Dn?typeof RTCPeerConnection<"u":location.protocol==="http:"||location.protocol==="https:",bu=()=>({name:Ct.name,color:Ct.color,vehicle:Ct.vehicle,token:Vp(sessionStorage,Gp)}),Oe=null,hr=null,lr=null,vu=null,ii=i=>{Oe&&Oe.send(i)};!Dn&&Vo&&(Oe=new td({url:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`,getHello:bu,onMessage:i=>wu(i),onStatus:i=>Zp(i)}));async function Yp(){if(!vu){let[i,t]=await Promise.all([import("./lightwake-KYR5BTEQ.js"),import("./lightwake-XE3DDR2G.js")]);vu={joinRoom:i.joinRoom,selfId:i.selfId,...t}}return vu}function Tu(){Dn&&(Oe&&Oe.close(),Oe=null,hr=null,lr=null)}async function pM(){let i=await Yp();Tu(),hr=new i.PeerHost(i.newRoomCode(),{joinRoom:i.joinRoom,selfId:i.selfId,log:t=>console.warn(t)}),Oe=new i.LocalNet(hr,{getHello:bu,onMessage:t=>wu(t)}),lr={t:"create"},Oe.connect()}async function mM(i){let t=await Yp();Tu();let e=t.normalizeCode(i);Oe=new t.PeerNet({code:e,joinRoom:t.joinRoom,getHello:bu,onMessage:n=>wu(n),log:n=>console.warn(n)}),lr={t:"join",code:e},rn(`Looking for game ${e}\u2026`,2e4),Oe.connect()}function $p(i){console.error(i),rn(`Online play could not start: ${i.message}`,6e3)}function Zp(i){let t=ht("net-status");t.classList.toggle("online",i==="online"),t.classList.toggle("offline",i==="reconnecting"||i==="offline"),t.textContent={connecting:"Connecting to server\u2026",online:"Online: ready to play with friends",reconnecting:"Server not reachable. Practice still works. Retrying\u2026",offline:"Offline"}[i]||i,i==="reconnecting"&&J.room&&rn("Connection lost. Reconnecting\u2026")}function wu(i){switch(i.t){case"welcome":Dn||Wp(sessionStorage,Gp,i.token),J.room?ii({t:"join",code:J.room.code}):lr&&(ii(lr),lr=null);break;case"share":J.share={publicUrl:i.publicUrl,lanUrls:i.lanUrls||[]},J.room&&im();break;case"room":gM(i);break;case"round":case"snap":if(!J.online)return;J.online.handle(i),J.mode!=="online"&&cm(J.online,"online");break;case"in":case"chk":case"over":J.online&&J.online.handle(i);break;case"pings":if(J.room){for(let[t,e]of i.list){let n=J.room.members.find(s=>s.pid===t);n&&(n.ping=e)}J.screen==="lobby"&&sm()}break;case"chat":lm(i);break;case"error":rn(i.msg,6e3),(i.code==="nohost"||i.code==="hostleft"||Dn&&i.code==="version")&&om(i.code==="nohost"?"online":"title");break;default:break}}function gM(i){let t=!J.room;if(J.room=i,!J.online){let e=new Lc(Oe);J.online=e,e.on("round",()=>hm(e)).on("over",n=>um(e,n))}if(t){Dn&&rn(hr?"Room ready. Send your friends the invite link.":`Joined room ${i.code}`,3e3),ht("invite-banner").classList.add("hidden"),ht("chat-log").innerHTML="",lm({sys:!0,text:`You joined room ${i.code}.`});let e=new URL(location.href);e.searchParams.set("room",i.code),history.replaceState(null,"",e)}i.phase==="lobby"&&(J.mode==="online"&&Bc(),J.online.leaveRound(),J.screen==="settings"||J.screen==="help"?(J.backTo="lobby",document.body.classList.remove("in-menu")):mn("lobby"),yM())}var Wo=ht("name");Wo.value=Ct.name;var Fp=0;Wo.addEventListener("input",()=>{Ct.name=Vc(Wo.value),pn(),clearTimeout(Fp),Fp=setTimeout(Xo,400)});function Xo(){ii({t:"profile",name:Ct.name,color:Ct.color,vehicle:Ct.vehicle})}var xM={cycle:'<circle cx="16" cy="18" r="6"/><circle cx="48" cy="18" r="6"/><path d="M5 15 Q13 9 24 10 L32 6 Q39 4 44 8 L56 12 Q60 14 60 17"/>',classic:'<path d="M4 20 Q4 14 10 12 L22 11 Q30 2 40 3 Q50 4 54 11 L60 14 Q62 18 60 20 Z"/><circle cx="16" cy="19" r="4"/><circle cx="48" cy="19" r="4"/>',runner:'<path d="M3 19 L4 13 Q12 11 20 10 Q28 4 38 5 Q46 7 56 12 L61 15 L60 19 Z"/><circle cx="15" cy="20" r="4"/><circle cx="49" cy="20" r="4"/>',glider:'<path d="M4 12 L8 8 Q30 6 44 11 Q54 14 61 16 Q40 18 6 16 Z"/><path d="M12 23 L52 23" opacity="0.55"/>'};function Eu(){let i=ht("vehicles");i.innerHTML="";for(let t of Zo){let e=document.createElement("button");e.type="button",e.className=`vehicle${t.id===Ct.vehicle?" on":""}`,e.style.color=ze(Ct.color),e.title=t.name,e.innerHTML=`<svg viewBox="0 0 64 26" aria-hidden="true">${xM[t.id]}</svg><span>${t.name}</span>`,e.onclick=()=>{Ct.vehicle=t.id,pn(),Eu(),Xo()},i.append(e)}}function Jp(){let i=ht("swatches");i.innerHTML="";for(let t of ps){let e=document.createElement("button");e.className=`swatch${t.id===Ct.color?" on":""}`,e.style.background=t.hex,e.style.color=t.hex,e.title=t.name,e.setAttribute("aria-label",`${t.name} bike`),e.onclick=()=>{Ct.color=t.id,pn(),Jp(),Eu(),Xo()},i.append(e)}}Jp();Eu();function Au(){Ct.name=Vc(Wo.value),Wo.value=Ct.name,pn()}function Kp(){return Vo?!Dn&&!Oe.online?(rn("Not connected to the game server yet. Is it still running?",4500),!1):!0:(rn(Dn?"This browser cannot do online play. Try the latest Chrome, Edge, Firefox or Safari.":'Online play needs the game server. Start it with "Start Game.bat".',5e3),!1)}ht("btn-online").onclick=()=>{Au(),mn("online"),ht("join-code").focus()};ht("btn-practice").onclick=()=>{Au(),tm(),mn("practice")};ht("btn-help").onclick=()=>mn("help","title");ht("btn-settings").onclick=()=>{gm(),mn("settings","title")};for(let i of document.querySelectorAll("button[data-back]"))i.onclick=()=>mn(J.backTo);ht("btn-create").onclick=()=>{if(Kp()){if(Dn){pM().catch($p);return}Xo(),ii({t:"create"})}};var hs=ht("join-code");hs.addEventListener("input",()=>{hs.value=hs.value.toUpperCase().replace(/[^A-Z0-9]/g,"")});var Ru=i=>{if(Kp()){if(!i){rn("Type the room code your friend sent you.");return}if(Dn){mM(i).catch($p);return}Xo(),ii({t:"join",code:i})}};ht("btn-join").onclick=()=>Ru(hs.value);hs.addEventListener("keydown",i=>{i.key==="Enter"&&Ru(hs.value)});J.invite=new URLSearchParams(location.search).get("room");J.invite&&(J.invite=J.invite.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6),ht("invite-code").textContent=J.invite,ht("invite-banner").classList.remove("hidden"),hs.value=J.invite,ht("btn-accept").onclick=()=>{Au(),Ru(J.invite)});var _M=new Set(["bots","botSkill","rounds"]);function Qp(i,t,e,n){i.innerHTML="";let s=(c,u,h=!1)=>{let d=document.createElement("label");d.className="field",h&&(d.style.gridColumn="1 / -1");let f=document.createElement("span");f.textContent=c,d.append(f,u),i.append(d)},r=(c,u)=>{let h=document.createElement("select");for(let[d,f]of u){let m=document.createElement("option");m.value=String(d),m.textContent=f,h.append(m)}return h.value=String(t[c]),h.disabled=!e,h.onchange=()=>n({...t,[c]:_M.has(c)?Number(h.value):h.value}),h},o=(c,u)=>{let h=document.createElement("label");h.className="toggle";let d=document.createElement("input");d.type="checkbox",d.checked=t[c],d.disabled=!e,d.onchange=()=>n({...t,[c]:d.checked}),h.append(d,document.createTextNode(u)),i.append(h)};s("Arena",r("map",wi.map(c=>[c.id,c.name]))),s("Arena size",r("size",[["auto","Auto"],["small","Small"],["medium","Medium"],["large","Large"]]));let a=document.createElement("div");a.className="map-blurb";let l=wi.find(c=>c.id===t.map)||wi[0];a.textContent=t.rotate?`A new arena every round, starting with ${l.name}.`:l.blurb,i.append(a),s("Bots",r("bots",Array.from({length:8},(c,u)=>[u,u===0?"None":String(u)]))),s("Bot skill",r("botSkill",Hc.map((c,u)=>[u,c]))),s("Rounds to win",r("rounds",Ku.map(c=>[c,String(c)]))),s("Speed",r("speed",[["normal","Normal"],["fast","Fast"],["insane","Insane"]])),o("vanish","Lines vanish after a crash"),o("boost","Boost on"),o("fade","Lines fade after 4 s (always on Afterglow)"),o("rotate","Change arena every round")}function jp(i,t,e){let n=Math.max(1,Math.min(8,e)),s=Wu(t.map,Vu(t.size,n),n,0),r=i.getContext("2d"),o=i.width,a=o/s.w;r.clearRect(0,0,o,o),r.drawImage(Nc(s,o),0,0),r.strokeStyle="rgba(24,232,255,0.12)",r.lineWidth=1;for(let l=0;l<=s.w;l+=10)r.beginPath(),r.moveTo(l*a,0),r.lineTo(l*a,o),r.stroke(),r.beginPath(),r.moveTo(0,l*a),r.lineTo(o,l*a),r.stroke();r.strokeStyle="#5fd4ff",r.lineWidth=2,r.strokeRect(a*.5,a*.5,o-a,o-a),s.spawns.forEach((l,c)=>{let u=ps[c%ps.length].hex,h=(l.x+.5)*a,d=(l.y+.5)*a;r.strokeStyle=u,r.lineWidth=2,r.beginPath(),r.moveTo(h,d),r.lineTo(h+us[l.dir]*14,d+ds[l.dir]*14),r.stroke(),r.fillStyle=u,r.beginPath(),r.arc(h,d,3.5,0,Math.PI*2),r.fill()}),r.fillStyle="rgba(217,246,255,0.7)",r.font="600 11px Orbitron, sans-serif",r.fillText(`${s.size} x ${s.size}`,8,o-9)}function tm(){let i=Ct.practice;Qp(ht("practice-settings"),i,!0,t=>{Ct.practice=fr(t),pn(),tm()}),jp(ht("practice-preview"),i,1+i.bots)}ht("btn-practice-start").onclick=()=>em();function em(){let i=new Ho({settings:Ct.practice,player:{name:Ct.name,color:Ct.color,vehicle:Ct.vehicle}});i.on("round",()=>hm(i)).on("over",t=>um(i,t)).on("matchEnd",()=>TM(i)),cm(i,"practice"),i.begin(performance.now())}function nm(){return Oe?Oe.pid:null}function vM(){return J.room&&J.room.leader===nm()}function im(){let i=J.room.code;if(Dn){ht("invite-link").value=`${location.origin}${location.pathname}?room=${i}`,ht("invite-note").textContent=hr?"You are the host: keep this tab open while you play. Friends just open the link.":"Friends just open this link. The match runs in the host's browser.";return}let t=["localhost","127.0.0.1","[::1]"].includes(location.hostname),e=location.origin,n="Friends just open this link in their browser.";J.share.publicUrl?(e=J.share.publicUrl,n="Works for friends anywhere, as long as this PC keeps the game running."):t&&J.share.lanUrls.length?(e=J.share.lanUrls[0],n='Works for friends on your Wi-Fi. For friends elsewhere, start the game with "Start Game.bat" (it makes an internet link).'):t&&(n='This link only works on this PC. Start the game with "Start Game.bat" to get an internet link.'),ht("invite-link").value=`${e}/?room=${i}`,ht("invite-note").textContent=n}function sm(){let i=J.room,t=ht("lobby-members"),e=i.members.map(s=>{let r=s.pid===nm()?" <small>YOU</small>":"",o=s.pid===i.leader?'<span class="tag">LEADER</span>':"",a=(Zo.find(l=>l.id===s.vehicle)||Zo[0]).name;return`<li style="--c:${ze(s.color)}"><span class="dot" style="background:${ze(s.color)};color:${ze(s.color)}"></span><span class="nm">${Mu(s.name)}${r}<span class="veh">${a}</span></span>${o}<span class="ping">${s.ping?`${s.ping} ms`:""}</span></li>`}),n=Math.min(i.settings.bots,8-i.members.length);n>0&&e.push(`<li class="bot"><span class="nm">+ ${n} bot${n>1?"s":""} (${Hc[i.settings.botSkill]})</span></li>`),t.innerHTML=e.join(""),ht("lobby-count").textContent=`${i.members.length} / 8`}function yM(){let i=J.room;ht("lobby-code").textContent=i.code,im(),sm();let t=vM();Qp(ht("lobby-settings"),i.settings,t,e=>ii({t:"settings",settings:e})),jp(ht("lobby-preview"),i.settings,i.members.length+Math.min(i.settings.bots,8-i.members.length)),ht("lobby-leader-note").textContent=t?"":"(the leader picks)",ht("btn-start").classList.toggle("hidden",!t),ht("lobby-wait").classList.toggle("hidden",t)}async function rm(i){let t=ht("invite-link");try{await navigator.clipboard.writeText(t.value),rn("Invite link copied. Paste it to your friends!")}catch{i?(t.select(),rn("Press Ctrl+C to copy the selected link.")):rn(`Invite link: ${t.value}`,9e3)}}ht("btn-copy").onclick=()=>rm(!0);ht("btn-pause-copy").onclick=()=>rm(!1);ht("btn-start").onclick=()=>ii({t:"start"});ht("btn-leave").onclick=()=>am();function om(i){J.mode==="online"&&Bc(),J.room=null,J.online=null,Tu();let t=new URL(location.href);t.searchParams.delete("room"),history.replaceState(null,"",t),mn(i)}function am(){ii({t:"leave"}),om("title")}function lm(i){let t=document.createElement("div");i.sys?(t.className="sys",t.textContent=i.text):t.innerHTML=`<b style="color:${ze(i.color)}">${Mu(i.name)}:</b> ${Mu(i.text)}`;let e=ht("chat-log");for(e.append(t);e.children.length>80;)e.firstChild.remove();if(e.scrollTop=e.scrollHeight,J.mode==="online"&&!i.sys){let n=ht("chat-overlay"),s=t.cloneNode(!0);for(n.append(s);n.children.length>5;)n.firstChild.remove();setTimeout(()=>s.remove(),9e3)}}ht("chat-form").addEventListener("submit",i=>{i.preventDefault();let t=ht("chat-input"),e=t.value.trim();e&&ii({t:"chat",text:e}),t.value=""});var Oc=ht("game-chat"),ur=ht("game-chat-input");function MM(){J.mode==="online"&&(Oc.classList.remove("hidden"),ur.value="",ur.focus())}function Cu(){Oc.classList.add("hidden"),ur.blur()}Oc.addEventListener("submit",i=>{i.preventDefault();let t=ur.value.trim();t&&ii({t:"chat",text:t}),Cu()});ur.addEventListener("keydown",i=>{i.key==="Escape"&&Cu()});ur.addEventListener("blur",()=>Oc.classList.add("hidden"));function cm(i,t){J.attract&&J.attract.pause(performance.now()),J.session=i,J.mode=t,J.spectate=-1,Si.enabled=!0,Xp(),sn.show(!0),sn.reset(),ht("touch").classList.toggle("hidden",!cr)}function Bc(){Si.enabled=!1,Si.releaseAll(),Cu(),sn.show(!1),J.mode="menu",J.session=J.attract,J.attract&&J.attract.resume(performance.now())}function hm(i){sn.hideResults(),sn.reset(),J.spectate=-1,J.fadeWarned=!1;let t=i.sim;if(t){let e=wi.find(n=>n.id===t.arena.id)||wi[0];sn.titleCard(e.name,e.blurb)}}function SM(i,t){let e=i.sim;if(!e||i.mySlot<0)return"";let n=e.bikes[i.mySlot],s=pr(e),r=n.alive?s?s.endTick:e.tick:n.deathTick,o=Math.max(0,(r-e.rules.countdown)/60),a=Ct.records,l=[];o>a.ride+.05&&(a.ride=o,l.push("longest ride")),n.kills>a.cuts&&(a.cuts=n.kills,l.push("most cut-offs")),t.winner===i.mySlot&&a.wins++,pn();let c=l.length?`<span class="res-best">NEW BEST: ${l.join(" and ").toUpperCase()}</span>`:`<span class="res-rec">Your best: ${a.ride.toFixed(1)} s</span>`;return`<div class="res-stats">You rode <b>${o.toFixed(1)} s</b> and cut off <b>${n.kills}</b> ${n.kills===1?"rider":"riders"}. ${c}</div>`}function bM(){let i=Ct.records;return`<div class="res-stats">Your records: longest ride <b>${i.ride.toFixed(1)} s</b>, most cut-offs in a round <b>${i.cuts}</b>, rounds won <b>${i.wins}</b>.</div>`}function um(i,t){J.session===i&&(sn.showResults(i,t,!!t.champion,"",SM(i,t)),i.mySlot>=0&&(t.winner===i.mySlot?De.win():De.lose()))}function TM(i){J.session===i&&(sn.showResults(i,{winner:-1,champion:!0,next:0},!0,'<div class="res-actions"><button class="btn primary" id="res-again">Ride again</button><button class="btn" id="res-menu">Menu</button></div>',bM()),ht("res-again").onclick=()=>em(),ht("res-menu").onclick=()=>{Bc(),mn("title")})}function wM(i){let t=i.me,e=t.dir;for(let n of t.queue)e+=n;for(let[n,s]of i.rb.inputs)if(!(n<i.rb.tick))for(let r of s)r.p===i.mySlot&&(r.a==="L"?e+=3:r.a==="R"&&(e+=1));return e&3}function Op(i){let t=J.session;if(!t||!t.sim)return;let e=t.sim.bikes,n=e.length,s=J.spectate<0?t.mySlot>=0?t.mySlot:0:J.spectate;for(let r=0;r<n;r++)if(s=(s+i+n)%n,e[s].alive){J.spectate=s;return}}function Fc(){let i=J.session;return i&&i.me&&i.me.alive&&!i.paused}var yu=!1,Si=new Pc({turn:i=>{if(J.mode!=="menu"){if(!Fc()){Op(i==="L"?-1:1);return}J.session.input(i)&&De.turn(i==="L"?-1:1)}},steer:i=>{if(J.mode==="menu")return;if(!Fc()){Op(i===2||i===3?-1:1);return}let t=wM(J.session);if(i===t||i===(t+2&3))return;let e=i===(t+1&3)?"R":"L";J.session.input(e)&&De.turn(e==="L"?-1:1)},boost:i=>{if(J.mode==="menu"||!Fc()||!J.session.input(i?"B":"b"))return;let t=J.session.me;i&&J.session.sim.rules.boost&&t.energy>0?(De.boost(!0),yu=!0):!i&&yu&&(De.boost(!1),yu=!1)},jump:()=>{if(J.mode==="menu"||!Fc())return;let i=J.session;i.sim.tick<i.sim.rules.countdown||!i.sim.canJump(i.me)||i.input("J")&&De.jump()},camera:()=>dm(),music:()=>rn(De.toggleMusic()?"Music on":"Music off",1200),board:i=>document.body.classList.toggle("board-open",i),chat:()=>MM(),pause:()=>EM()});Si.bindTouch(ht("touch"));function dm(){let i=Fo.indexOf(Ct.camera);Ct.camera=Fo[(i+1)%Fo.length],pn(),ht("btn-camera").textContent=`Camera: ${Oo[Ct.camera]}`,rn(Oo[Ct.camera],1e3)}function EM(){if(J.mode==="menu"){J.screen!=="title"&&J.screen!=="lobby"&&mn(J.backTo);return}J.screen==="pause"?fm():J.screen==="settings"||J.screen==="help"?mn("pause"):Pu()}function Pu(){let i=J.mode==="online";i||J.session.pause(performance.now()),ht("pause-title").textContent=i?"Menu":"Paused",ht("pause-note").textContent=i?"The match keeps running while this menu is open.":"",ht("pause-room").classList.toggle("hidden",!(i&&J.room)),i&&J.room&&(ht("pause-code").textContent=J.room.code),ht("btn-quit").textContent=i?"Leave room":"Quit to menu",ht("btn-camera").textContent=`Camera: ${Oo[Ct.camera]}`,Si.releaseAll(),mn("pause","pause")}function fm(){Xp(),J.mode==="practice"&&J.session.resume(performance.now())}ht("btn-resume").onclick=()=>fm();ht("btn-menu").onclick=()=>Pu();var AM=document.fullscreenEnabled===!0;function pm(){let i=document.fullscreenElement?"Exit fullscreen":"Fullscreen";for(let t of["btn-fullscreen","btn-pause-fullscreen"])ht(t).textContent=i,ht(t).classList.toggle("hidden",!AM)}async function mm(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(i){rn(`Fullscreen is not available here: ${i.message}`,4e3)}}ht("btn-fullscreen").onclick=()=>mm();ht("btn-pause-fullscreen").onclick=()=>mm();document.addEventListener("fullscreenchange",pm);pm();document.documentElement.dataset.home&&(ht("back-link").href=document.documentElement.dataset.home,ht("back-link").classList.remove("hidden"));ht("btn-camera").onclick=()=>dm();ht("btn-pause-settings").onclick=()=>{gm(),mn("settings","pause")};ht("btn-quit").onclick=()=>{J.mode==="online"?am():(Bc(),mn("title"))};document.addEventListener("visibilitychange",()=>{document.hidden&&J.mode==="practice"&&J.screen!=="pause"&&Pu()});function gm(){let i=ht("set-quality");i.innerHTML=Object.entries(Mi).map(([e,n])=>`<option value="${e}">${n.label}</option>`).join(""),i.value=Ct.quality;let t=ht("set-camera");t.innerHTML=Fo.map(e=>`<option value="${e}">${Oo[e]}</option>`).join(""),t.value=Ct.camera,ht("set-slowmo").value=Ct.slowmo?"on":"off",ht("set-steering").value=Ct.steering,ht("set-volume").value=Ct.volume,ht("set-engine").value=Ct.engine,ht("set-music").value=Ct.music}ht("set-quality").onchange=i=>{Ct.quality=i.target.value,pn(),nn.setQuality(Ct.quality)};ht("set-camera").onchange=i=>{Ct.camera=i.target.value,pn()};ht("set-slowmo").onchange=i=>{Ct.slowmo=i.target.value==="on",pn()};ht("set-steering").onchange=i=>{Ct.steering=i.target.value,pn()};ht("set-volume").oninput=i=>{Ct.volume=Number(i.target.value),pn(),De.setVolume(Ct.volume)};ht("set-music").oninput=i=>{Ct.music=Number(i.target.value),pn(),De.setMusic(Ct.music)};ht("set-engine").oninput=i=>{Ct.engine=Number(i.target.value),pn(),De.setEngineVolume(Ct.engine)};function RM(i,t){if(!i||!i.sim)return-1;let e=i.sim.bikes;if(J.mode==="menu"){if(t>J.attractSwitch||J.attractFollow>=0&&!e[J.attractFollow]){let o=e.filter(a=>a.alive);J.attractFollow=J.attractFollow<0&&o.length?o[Math.floor(Math.random()*o.length)].slot:-1,J.attractSwitch=t+(J.attractFollow<0?6e3:9e3)}let r=J.attractFollow;return r>=0&&(e[r].alive||i.sim.tick-e[r].deathTick<90)?r:-1}if(i.mySlot>=0){let r=e[i.mySlot];if(r.alive||i.sim.tick-r.deathTick<80)return i.mySlot}if(J.spectate>=0&&e[J.spectate]&&e[J.spectate].alive)return J.spectate;let n=i.mySlot>=0?e[i.mySlot].killer:-1;if(n>=0&&e[n]&&e[n].alive)return J.spectate=n,n;let s=e.find(r=>r.alive);return s?(J.spectate=s.slot,s.slot):-1}function CM(i,t){if(!i||!i.sim)return"";let e=i.sim;return e.tick<e.rules.countdown?cr?"":Si.absolute?"ARROWS / WASD STEER  \xB7  SHIFT BOOST  \xB7  SPACE JUMP  \xB7  C CAMERA":"A / D OR \u2190 / \u2192 TURN  \xB7  W BOOST  \xB7  SPACE JUMP  \xB7  C CAMERA":i.mySlot>=0&&!e.bikes[i.mySlot].alive&&t>=0&&t!==i.mySlot?`SPECTATING ${i.slots[t].name.toUpperCase()}  \xB7  ${cr?"TAP \u25C0 / \u25B6":"\u2190 / \u2192"} TO SWITCH`:""}var PM={cycle:1,classic:.88,runner:.72,glider:1.4};function IM(i,t){if(!i||!i.sim||J.mode==="menu"||i.paused)return null;let e=i.sim,n=e.rules,s=e.tick<n.countdown,r=nn.camera,o=r.matrixWorld.elements,a={x:r.position.x,y:r.position.y,z:r.position.z,fx:-o[8],fy:-o[9],fz:-o[10]},l=h=>{let d=e.speedOf(h),f=i.slots[h.slot];return{idle:s,rate:s?.25:d/n.speed,boost:d>n.speed?1:0,tone:PM[f&&f.vehicle]||1}},c=null;t>=0&&e.bikes[t].alive&&(c={...l(e.bikes[t]),grind:e.bikes[t].grinding?1:0});let u=[];for(let h of e.bikes){if(!h.alive||h.slot===t||!nn.views[h.slot])continue;let d=nn.views[h.slot].world;u.push({id:h.slot,x:d.x,y:d.y,z:d.z,...l(h)})}return{listener:a,own:c,others:u}}function Bp(i,t){let e=J.session;J.mode!=="practice"||!Ct.slowmo||!e.slowMo||(e.slowMo(performance.now(),i,t),De.slowmo())}function LM(i,t){if(J.mode==="menu")return;sn.onEvent(i,t);let e=t.mySlot;if(i.type==="crash"){let n=nn.camera,s=n.position.distanceTo(i.pos),r=i.pos.clone().applyMatrix4(n.matrixWorldInverse),o=Math.max(-1,Math.min(1,r.x/Math.max(6,-r.z)));if(De.crash(Math.max(0,1-s/70),o),e>=0&&i.killer===e&&i.slot!==e){let l=performance.now();J.streak=J.streak&&l-J.streak.at<4e3?{n:J.streak.n+1,at:l}:{n:1,at:l};let c=J.streak.n,u=c>=4?"UNSTOPPABLE":c===3?"TRIPLE CUT":c===2?"DOUBLE CUT":`CUT OFF: ${t.slots[i.slot].name.toUpperCase()}`;sn.callout(u,ze(t.slots[i.slot].color))}let a=pr(t.sim);(i.slot===e||a&&t.sim.bikes[i.slot].deathTick===a.endTick)&&Bp(.3,1100)}else i.type==="kick"?(De.kick(),i.slot===e&&(sn.callout("BIG AIR"),Bp(.5,650))):i.type==="land"?(nn.rig.addShake(Math.min(.8,.1+i.drop*.09)),De.land(i.drop)):i.type==="pad"&&(nn.rig.kick(9),De.pad())}var Sn={time:0,frames:0,lastDrop:0,strikes:0};function DM(i,t){if(J.mode==="menu"||document.hidden||(Sn.time+=i,Sn.frames++,Sn.time<4))return;let e=Sn.frames/Sn.time;Sn.time=0,Sn.frames=0,Sn.strikes=e<38?Sn.strikes+1:0,Sn.strikes>=2&&t-Sn.lastDrop>15e3&&Ct.quality!=="low"&&(Sn.strikes=0,Sn.lastDrop=t,Ct.quality=Ct.quality==="high"?"medium":"low",pn(),nn.setQuality(Ct.quality),rn(`Graphics set to ${Mi[Ct.quality].label} to keep the game smooth (change it in Settings).`,5e3))}function NM(){let i=wi[Math.floor(Math.random()*wi.length)].id;J.attract=new Ho({settings:{...Gc,map:i,size:"medium",bots:6,botSkill:2,rounds:99,rotate:!0},player:null,breakMs:1500}),J.attract.on("round",()=>{J.attractFollow=-1,J.attractSwitch=0}),J.attract.begin(performance.now()),J.session=J.attract}NM();mn("title");if(Dn){let i=ht("net-status");i.classList.toggle("online",Vo),i.classList.toggle("offline",!Vo),i.textContent=Vo?"Online: one player hosts, friends join with a link":"This browser cannot do online play",ht("online-hint").textContent="Create a room to host the match in this browser, then send your friends the invite link."}else Oe?Oe.connect():Zp("offline");var kp=performance.now(),zp=0;function xm(){_m(performance.now()),requestAnimationFrame(xm)}function _m(i){let t=Math.min(.1,Math.max(0,(i-kp)/1e3));kp=i;try{Si.pollGamepad();let e=J.session;e&&e.update(i);let n=RM(e,i),s=e&&n>=0&&n===e.mySlot,r=J.mode==="menu"?"chase":s?Ct.camera:"chase";Si.absolute=s&&Ct.camera==="overhead"&&Ct.steering==="screen",nn.update(e,t,i,n,r,J.mode!=="menu");for(let o of nn.events)LM(o,e);if(J.mode!=="menu"&&e&&e.sim){let o=J.mode==="online"&&J.room?J.room.code:"";sn.update(e,{follow:n,ping:Oe?Oe.rtt:0,online:J.mode==="online",hint:CM(e,n),room:o},De),sn.tickResults(),sn.setCine(nn.shot==="intro"||nn.shot==="crash"||nn.shot==="show");let a=e.sim.rules;a.fade&&!J.fadeWarned&&e.sim.tick>a.fadeStop&&(J.fadeWarned=!0,sn.callout("LINES STAY FROM NOW ON"))}De.update(IM(e,n)),nn.render(),DM(t,i)}catch(e){zp++<5&&console.error(e),zp===1&&rn("Something went wrong in the game view. Details are in the browser console (F12).",6e3)}}requestAnimationFrame(xm);window.lightwake={app:J,world:nn,prefs:Ct,hud:sn,controls:Si,sound:De,step:_m,TICK_RATE:60,get net(){return Oe},get host(){return hr}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
