/*! wmf.js (C) 2020-present SheetJS LLC -- https://sheetjs.com */
module.exports=function(r){var i={};function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=r,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r,c=!("undefined"==typeof Buffer||"undefined"==typeof process||void 0===process.versions||!process.versions.node);if(s.has_buf=c,s.Buffer_from=r,"undefined"!=typeof Buffer){var i=!Buffer.from;if(!i)try{Buffer.from("foo","utf8")}catch(t){i=!0}s.Buffer_from=r=i?function(t,e){return e?new Buffer(t,e):new Buffer(t)}:Buffer.from.bind(Buffer),Buffer.alloc||(Buffer.alloc=function(t){return new Buffer(t)}),Buffer.allocUnsafe||(Buffer.allocUnsafe=function(t){return new Buffer(t)})}s.new_raw_buf=function(t){return c?Buffer.alloc(t):new Array(t)},s.new_unsafe_buf=function(t){return c?Buffer.allocUnsafe(t):new Array(t)},s._chr=function(t){return String.fromCharCode(t)},s.chr0=/\u0000/g,s.chr1=/[\u0001-\u0006]/g;var u,a,l=function(t,e){return t[e]},d=function(t,e){return 256*t[e+1]+t[e]},_=function(t,e){var r=256*t[e+1]+t[e];return r<32768?r:-1*(65535-r+1)},p=function(t,e){return t[e+3]*(1<<24)+(t[e+2]<<16)+(t[e+1]<<8)+t[e]},E=function(t,e){return t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]},g=function(t,e){return t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]},b=function(t,e,r){for(var i=[],a=e;a<r;a+=2)i.push(String.fromCharCode(d(t,a)));return i.join("").replace(s.chr0,"")},n=s.__utf16le=b,v=function(t,e,r){for(var i=[],a=e;a<e+r;++a)i.push(("0"+t[a].toString(16)).slice(-2));return i.join("")},f=v,T=function(t,e,r){for(var i=[],a=e;a<r;a++)i.push(String.fromCharCode(l(t,a)));return i.join("")},h=T,S=function(t,e){var r=p(t,e);return 0<r?T(t,e+4,e+4+r-1):""},o=S,M=function(t,e){var r=p(t,e);return 0<r?T(t,e+4,e+4+r-1):""},C=M,w=function(t,e){var r=2*p(t,e);return 0<r?T(t,e+4,e+4+r-1):""},A=w;u=a=function(t,e){var r=p(t,e);return 0<r?b(t,e+4,e+4+r):""};function y(t,e){var r=p(t,e);return 0<r?T(t,e+4,e+4+r):""}function B(t,e){return function(t,e){for(var r=1-2*(t[e+7]>>>7),i=((127&t[e+7])<<4)+(t[e+6]>>>4&15),a=15&t[e+6],s=5;0<=s;--s)a=256*a+t[e+s];return 2047==i?0==a?1/0*r:NaN:(0==i?i=-1022:(i-=1023,a+=Math.pow(2,52)),r*Math.pow(2,i-52)*a)}(t,e)}var m=y,k=B;function O(t,e){var r,i,a,s,n,f="",h=0,o=[];switch(e){case"dbcs":if(n=this.l,c&&Buffer.isBuffer(this))f=this.slice(this.l,this.l+2*t).toString("utf16le");else for(s=0;s<t;++s)f+=String.fromCharCode(d(this,n)),n+=2;t*=2;break;case"utf8":f=T(this,this.l,this.l+t);break;case"utf16le":t*=2,f=b(this,this.l,this.l+t);break;case"wstr":return O.call(this,t,"dbcs");case"lpstr-ansi":f=S(this,this.l),t=4+p(this,this.l);break;case"lpstr-cp":f=M(this,this.l),t=4+p(this,this.l);break;case"lpwstr":f=w(this,this.l),t=4+2*p(this,this.l);break;case"lpp4":t=4+p(this,this.l),f=u(this,this.l),2&t&&(t+=2);break;case"8lpp4":t=4+p(this,this.l),f=m(this,this.l),3&t&&(t+=4-(3&t));break;case"cstr":for(t=0,f="";0!==(i=l(this,this.l+t++));)o.push(String.fromCharCode(i));f=o.join("");break;case"_wstr":for(t=0,f="";0!==(i=d(this,this.l+t));)o.push(String.fromCharCode(i)),t+=2;t+=2,f=o.join("");break;case"dbcs-cont":for(f="",n=this.l,s=0;s<t;++s){if(this.lens&&-1!==this.lens.indexOf(n))return i=l(this,n),this.l=n+1,a=O.call(this,t-s,i?"dbcs-cont":"sbcs-cont"),o.join("")+a;o.push(String.fromCharCode(d(this,n))),n+=2}f=o.join(""),t*=2;break;case"cpstr":case"sbcs-cont":for(f="",n=this.l,s=0;s!=t;++s){if(this.lens&&-1!==this.lens.indexOf(n))return i=l(this,n),this.l=n+1,a=O.call(this,t-s,i?"dbcs-cont":"sbcs-cont"),o.join("")+a;o.push(String.fromCharCode(l(this,n))),n+=1}f=o.join("");break;default:switch(t){case 1:return h=l(this,this.l),this.l++,h;case 2:return h=("i"===e?_:d)(this,this.l),this.l+=2,h;case 4:case-4:return"i"===e||0==(128&this[this.l+3])?(h=(0<t?E:g)(this,this.l),this.l+=4,h):(r=p(this,this.l),this.l+=4,r);case 8:case-8:if("f"===e)return r=8==t?k(this,this.l):k([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,r;t=8;case 16:f=v(this,this.l,t)}}return this.l+=t,f}c&&(s.__utf16le=b=function(t,e,r){return Buffer.isBuffer(t)?t.toString("utf16le",e,r).replace(s.chr0,""):n(t,e,r)},v=function(t,e,r){return Buffer.isBuffer(t)?t.toString("hex",e,e+r):f(t,e,r)},S=function(t,e){if(!Buffer.isBuffer(t))return o(t,e);var r=t.readUInt32LE(e);return 0<r?t.toString("utf8",e+4,e+4+r-1):""},M=function(t,e){if(!Buffer.isBuffer(t))return C(t,e);var r=t.readUInt32LE(e);return 0<r?t.toString("utf8",e+4,e+4+r-1):""},w=function(t,e){if(!Buffer.isBuffer(t))return A(t,e);var r=2*t.readUInt32LE(e);return t.toString("utf16le",e+4,e+4+r-1)},u=function(t,e){if(!Buffer.isBuffer(t))return a(t,e);var r=t.readUInt32LE(e);return t.toString("utf16le",e+4,e+4+r)},m=function(t,e){if(!Buffer.isBuffer(t))return y(t,e);var r=t.readUInt32LE(e);return t.toString("utf8",e+4,e+4+r)},T=function(t,e,r){return Buffer.isBuffer(t)?t.toString("utf8",e,r):h(t,e,r)},k=function(t,e){return Buffer.isBuffer(t)?t.readDoubleLE(e):B(t,e)}),s.ReadShift=O;function x(t,e,r){var i,a,s,n,f,h,o,c,u,l=0,d=0;if("dbcs"===r){if("string"!=typeof e)throw new Error("expected string");for(d=0;d!=e.length;++d)o=this,c=e.charCodeAt(d),u=this.l+2*d,o[u]=255&c,o[u+1]=c>>>8&255;l=2*e.length}else if("sbcs"===r){for(e=e.replace(/[^\x00-\x7F]/g,"_"),d=0;d!=e.length;++d)this[this.l+d]=255&e.charCodeAt(d);l=e.length}else{if("hex"===r){for(;d<t;++d)this[this.l++]=parseInt(e.slice(2*d,2*d+2),16)||0;return this}if("utf16le"===r){var _=Math.min(this.l+t,this.length);for(d=0;d<Math.min(e.length,t);++d){var p=e.charCodeAt(d);this[this.l++]=255&p,this[this.l++]=p>>8}for(;this.l<_;)this[this.l++]=0;return this}if("number"==typeof e)switch(t){case 1:l=1,this[this.l]=255&e;break;case 2:l=2,this[this.l]=255&e,e>>>=8,this[this.l+1]=255&e;break;case 3:l=3,this[this.l]=255&e,e>>>=8,this[this.l+1]=255&e,e>>>=8,this[this.l+2]=255&e;break;case 4:l=4,f=e,h=(n=this).l,n[h]=255&f,n[h+1]=f>>>8&255,n[h+2]=f>>>16&255,n[h+3]=f>>>24&255;break;case 8:if(l=8,"f"===r){!function(t,e,r){var i=(e<0||1/e==-1/0?1:0)<<7,a=0,s=0,n=i?-e:e;isFinite(n)?0==n?a=s=0:(a=Math.floor(Math.log(n)/Math.LN2),s=n*Math.pow(2,52-a),a<=-1023&&(!isFinite(s)||s<Math.pow(2,52))?a=-1022:(s-=Math.pow(2,52),a+=1023)):(a=2047,s=isNaN(e)?26985:0);for(var f=0;f<=5;++f,s/=256)t[r+f]=255&s;t[r+6]=(15&a)<<4|15&s,t[r+7]=a>>4|i}(this,e,this.l);break}case 16:break;case-4:l=4,a=e,s=(i=this).l,i[s]=255&a,i[s+1]=a>>8&255,i[s+2]=a>>16&255,i[s+3]=a>>24&255}}return this.l+=l,this}function I(t,e){var r=v(this,this.l,t.length>>1);if(r!==t)throw new Error(e+"Expected "+t+" saw "+r);this.l+=t.length>>1}s.WriteShift=x,s.CheckField=I;function F(t,e){t.l=e,t.read_shift=O,t.chk=I,t.write_shift=x}s.prep_blob=F;s.new_buf=function(t){var e=s.new_raw_buf(t);return F(e,0),e};var N=function(t){for(var e=!0,r=0;r<t.length;++r)Array.isArray(t[r])||(e=!1);if(e)return[].concat.apply([],t);var i=0,a=0;for(a=0;a<t.length;++a)i+=t[a].length;var s=new Uint8Array(i);for(i=a=0;a<t.length;i+=t[a].length,++a)s.set(t[a],i);return s};s.bconcat=N,c&&(s.bconcat=N=function(t){return Buffer.isBuffer(t[0])?Buffer.concat(t):[].concat.apply([],t)})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function tt(t){if(0==t.length)return null;rt.prep_blob(t,0);var e,r=t.read_shift(4),i=0,a=0,s=0,n=0;a=12==r?(i=t.read_shift(2),t.read_shift(2)):(i=t.read_shift(4,"i"),t.read_shift(4,"i")),t.read_shift(2);var f={Width:i,Height:a,BitCount:e=t.read_shift(2)};return 12!=r&&(s=t.read_shift(4),n=t.read_shift(4),t.read_shift(4,"i"),t.read_shift(4,"i"),t.read_shift(4),t.read_shift(4),f.Compression=s,24==e&&3*a*i<n&&(i=f.Width=n/(3*a))),n==t.length-t.l&&(f.ImageData=t.slice(t.l,t.length),rt.prep_blob(f.ImageData,0)),f}function et(t,e){for(var r=!1,i=0;i<t.length;++i)t[i]||(t[i]=e,r=!0);r||t.push(e)}var rt=r(0),it=r(4);e.get_actions_prepped_bytes=function(t){var e=[],r=t.read_shift(2);if(1!=r&&2!=r)throw"Header: Type "+r+" must be 1 or 2";if(9!=(r=t.read_shift(2)))throw"Header: HeaderSize "+r+" must be 9";if(256!=(r=t.read_shift(2))&&768!=r)throw"Header: Version "+r+" must be 0x0100 or 0x0300";t.l=18;for(var i=0,a=0,s=0,n=0,f=0,h=[],o=[],c=[],u={},l=-1;t.l<t.length;){r=t.read_shift(4);var d=t.l+2*r-4;i=t.read_shift(2);var _=it.WMFRecords[i];if(0==i)break;switch(i){case 1574:var p=t.read_shift(2);it.WMFEscapes[p];switch(p){case 15:var E=t.read_shift(2),g=t.read_shift(4);if(1128680791!=g)throw"Escape: Comment ID 0x"+g.toString(16)+" != 0x43464D57";if(1!=(g=t.read_shift(4)))throw"Escape: Comment Type 0x"+g.toString(16)+" != 0x00000001";if(65536!=(g=t.read_shift(4)))throw"Escape: Version 0x"+g.toString(16)+" != 0x00010000";t.read_shift(2);if(t.l+=4,0==a)s=t.read_shift(4);else{var b=t.read_shift(4);if(b!=s)throw"Escape: CommentRecordCount "+b+" != "+s}var v=t.read_shift(4),T=t.read_shift(4);if(0<a&&v+T!=n)throw"Escape: "+n+" != "+v+" + "+T;n=T;var S=t.read_shift(4);if(0==a){if(S!=v+T)throw"Escape: "+S+" != "+v+" + "+T;f=S}else if(f!=S)throw"Escape: "+f+" != "+S;if(E!=d-t.l+34)throw"Escape: Sizes "+E+" != "+(d-t.l)+" + 34";if(d-t.l!=v)throw"Escape: CRSize "+v+" != "+(d-t.l);if(h.push(t.slice(t.l,d)),++a==s){var M=rt.bconcat(h);rt.prep_blob(M,0)}break;default:throw"Escape: Unrecognized META_ESCAPE Type 0x"+p.toString(16)}break;case 2368:var C=r!=3+(i>>8),w=t.read_shift(4),A=t.read_shift(2,"i"),y=t.read_shift(2,"i");C||(t.l+=2);var B=t.read_shift(2,"i"),m=t.read_shift(2,"i"),k=t.read_shift(2,"i"),O={t:"cpy",src:[[y,m],[A,B]],dst:[t.read_shift(2,"i"),k],rop:w,s:Object.assign({},u)};if(C){var x=tt(t.slice(t.l,d));O.data=x}e.push(O);break;case 2881:C=r!=3+(i>>8),w=t.read_shift(4);var I=t.read_shift(2,"i"),F=t.read_shift(2,"i");A=t.read_shift(2,"i"),y=t.read_shift(2,"i");C||(t.l+=2);var N=t.read_shift(2,"i"),R=t.read_shift(2,"i");k=t.read_shift(2,"i"),O={t:"str",src:[[y,F],[A,I]],dst:[[t.read_shift(2,"i"),R],[k,N]],rop:w,s:Object.assign({},u)};if(C){x=tt(t.slice(t.l,d));O.data=x}e.push(O);break;case 2610:var L=t.read_shift(2),P=t.read_shift(2),D=t.read_shift(2);6&t.read_shift(2)&&(t.l+=8);var j=t.read_shift(D,"cpstr");t.l,e.push({t:"text",v:j,p:[P,L],s:Object.assign({},u)});break;case 805:case 804:for(var H=t.read_shift(2),W=[],U=0;U<H;++U)W.push([t.read_shift(2),t.read_shift(2)]);e.push({t:"poly",p:W,g:805!==i,s:u});break;case 1336:var z=t.read_shift(2),G=[],J=[];for(U=0;U<z;++U)J[U]=t.read_shift(2);for(U=0;U<J.length;++U){G[U]=[];for(var X=0;X<J[U];++X)G[U].push([t.read_shift(2),t.read_shift(2)]);e.push({t:"poly",p:G[U],g:!0,s:u})}break;case 764:(Y={}).Brush={Style:t.read_shift(2),Color:t.read_shift(4),Hatch:t.read_shift(2)},et(o,Y);break;case 763:var Y={Font:{}},V=(B=t.read_shift(2,"i"),m=t.read_shift(2,"i"),t.read_shift(2,"i")),K=(t.read_shift(2,"i"),t.read_shift(2,"i")),Z=!!t.read_shift(1),q=(t.read_shift(1),t.read_shift(1),t.read_shift(1),t.read_shift(1),t.read_shift(1),t.read_shift(1),t.read_shift(1),t.read_shift(32,"cstr"));Y.Font.Name=q,Y.Font.Height=B,Y.Font.Weight=K,Y.Font.Italic=Z,Y.Font.Angle=V/10,et(o,Y);break;case 762:(Y={}).Pen={Style:t.read_shift(2),Width:255&t.read_shift(4),Color:t.read_shift(4)},et(o,Y);break;case 496:o[Q=t.read_shift(2)]=null;break;case 300:t.read_shift(2);break;case 301:var Q=t.read_shift(2);Object.assign(u,o[Q]);break;case 1046:u.ClipRect=[[0,0],[0,0]],u.ClipRect[1][1]=t.read_shift(2),u.ClipRect[1][0]=t.read_shift(2),u.ClipRect[0][1]=t.read_shift(2),u.ClipRect[0][0]=t.read_shift(2);break;case 295:var $=t.read_shift(2,"i");u=c[l=0<=$?$:l+$];break;case 30:c.push(u),l=c.length-1,u=JSON.parse(JSON.stringify(u));break;case 258:u.BkMode=t.read_shift(2);break;case 259:u.MapMode=t.read_shift(2);break;case 262:u.PolyFillMode=t.read_shift(2);break;case 263:u.StretchMode=t.read_shift(2);break;case 302:u.TextAlignmentMode=t.read_shift(2);break;case 521:u.TextColor=t.read_shift(4);break;case 524:u.Extent=[0,0],u.Extent[1]=t.read_shift(2),u.Extent[0]=t.read_shift(2);break;case 523:u.Origin=[0,0],u.Origin[1]=t.read_shift(2),u.Origin[0]=t.read_shift(2);break;default:if(!_)throw"Record: Unrecognized type 0x"+i.toString(16);console.log(_)}t.l=d}if(0!==i)throw"Record: Last Record Type "+i+" is not EOF type";return e},e.image_size_prepped_bytes=function(t){var e=[NaN,NaN],r=[NaN,NaN],i=t.read_shift(2);if(1!=i&&2!=i)throw"Header: Type "+i+" must be 1 or 2";if(9!=(i=t.read_shift(2)))throw"Header: HeaderSize "+i+" must be 9";if(256!=(i=t.read_shift(2))&&768!=i)throw"Header: Version "+i+" must be 0x0100 or 0x0300";t.l=18;for(var a=0;t.l<t.length;){i=t.read_shift(4);var s=t.l+2*i-4;if(0==(a=t.read_shift(2)))break;switch(a){case 524:r[1]=t.read_shift(2),r[0]=t.read_shift(2);break;case 523:e[1]=t.read_shift(2),e[0]=t.read_shift(2)}t.l=s}return[r[0]-e[0],r[1]-e[1]]}},function(t,e,r){var i=r(3);t.exports=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1),s=r(5);e.draw_canvas=s.draw_canvas,e.render_canvas=s.render_canvas,e.get_actions=function(t){return t instanceof ArrayBuffer?e.get_actions(new Uint8Array(t)):(i.prep_blob(t,0),a.get_actions_prepped_bytes(t))},e.image_size=function(t){return t instanceof ArrayBuffer?e.image_size(new Uint8Array(t)):(i.prep_blob(t,0),a.image_size_prepped_bytes(t))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WMFRecords={0:{n:"META_EOF"},1574:{n:"META_ESCAPE"},2368:{n:"META_DIBBITBLT"},2881:{n:"META_DIBSTRETCHBLT"},2610:{n:"META_EXTTEXTOUT"},805:{n:"META_POLYLINE"},804:{n:"META_POLYGON"},1336:{n:"META_POLYPOLYGON"},764:{n:"META_CREATEBRUSHINDIRECT"},763:{n:"META_CREATEFONTINDIRECT"},762:{n:"META_CREATEPENINDIRECT"},496:{n:"META_DELETEOBJECT"},300:{n:"META_SELECTCLIPREGION"},301:{n:"META_SELECTOBJECT"},1046:{n:"META_INTERSECTCLIPRECT"},53:{n:"META_REALIZEPALETTE"},295:{n:"META_RESTOREDC"},30:{n:"META_SAVEDC"},258:{n:"META_SETBKMODE"},259:{n:"META_SETMAPMODE"},55:{n:"META_SETPALENTRIES"},262:{n:"META_SETPOLYFILLMODE"},263:{n:"META_SETSTRETCHBLTMODE"},302:{n:"META_SETTEXTALIGN"},521:{n:"META_SETTEXTCOLOR"},524:{n:"META_SETWINDOWEXT"},523:{n:"META_SETWINDOWORG"},65535:{n:"META_SHEETJS"}},e.WMFEscapes={15:{n:"META_ESCAPE_ENHANCED_METAFILE"}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),a=e(1);n.css_color=function(t){return"#"+(255&t).toString(16).padStart(2,"0")+(t>>8&255).toString(16).padStart(2,"0")+(t>>16&255).toString(16).padStart(2,"0")},n.set_ctx_state=function(t,e){if(e){var r="";if(e.Font){e.Font.Italic&&(r+=" italic"),e.Font.Weight&&(r+=" "+(700==e.Font.Weight?"bold":400==e.Font.Weight?"":e.Font.Weight)),e.Font.Height<0?r+=" "+-e.Font.Height+"px":0<e.Font.Height&&(r+=" "+e.Font.Height+"px");var i=e.Font.Name||"";"System"==i&&(i="Calibri"),i&&(r+=" '"+i+"', sans-serif"),t.font=r.trim()}}},n.render_actions_to_context=function(t,s){t.forEach(function(t){switch(s.save(),n.set_ctx_state(s,t.s),t.t){case"poly":s.beginPath(),s.moveTo(t.p[0][0],t.p[0][1]),t.p.slice(1).forEach(function(t){var e=t[0],r=t[1];s.lineTo(e,r)}),t.g&&s.closePath(),s.stroke();break;case"text":t.s&&t.s.TextColor&&(s.fillStyle=n.css_color(t.s.TextColor)),0!=t.s.Font.Angle?(s.translate(t.p[0],t.p[1]),s.rotate(-t.s.Font.Angle*Math.PI/180),s.fillText(t.v,0,0),s.translate(-t.p[0],-t.p[1])):s.fillText(t.v,t.p[0],t.p[1]);break;case"cpy":var e=s.getImageData(t.src[0][0],t.src[1][0],t.src[0][1],t.src[1][1]);s.putImageData(e,t.dst[0],t.dst[1]);break;case"str":if(t.data&&24==t.data.BitCount&&t.data.ImageData){for(var r=new Uint8ClampedArray(t.data.Width*t.data.Height*4),i=0;i<t.data.Width*t.data.Height;++i){var a=i%t.data.Width+t.data.Width*(t.data.Height-1-Math.floor(i/t.data.Width));r[4*i]=t.data.ImageData[3*a+2],r[4*i+1]=t.data.ImageData[3*a+1],r[4*i+2]=t.data.ImageData[3*a],r[4*i+3]=255}e=new ImageData(r,t.data.Width,t.data.Height);s.putImageData(e,t.dst[0][0],t.dst[1][0])}}s.restore()})},n.render_canvas=function(t,e){var r;t.forEach(function(t){r||t.s&&t.s.Extent&&t.s.Origin&&(e.width=t.s.Extent[0]-t.s.Origin[0],e.height=t.s.Extent[1]-t.s.Origin[1],(r=e.getContext("2d")).save(),r.fillStyle="rgb(255,255,255)",r.fillRect(0,0,t.s.Extent[0]-t.s.Origin[0],t.s.Extent[1]-t.s.Origin[1]),r.restore())}),r=r||e.getContext("2d"),n.render_actions_to_context(t,r)},n.draw_canvas=function(t,e){if(t instanceof ArrayBuffer)return n.draw_canvas(new Uint8Array(t),e);i.prep_blob(t,0);var r=a.get_actions_prepped_bytes(t);return n.render_canvas(r,e)}}]);