"use strict";!function(){function e(e,t,n){return Number(e.getAttribute(t))||n}var o,i,a,t=document.getElementById("ribbon"),t={zIndex:e(t,"zIndex",-1),alpha:e(t,"alpha",.6),ribbon_width:e(t,"size",90)},n=document.createElement("canvas"),c="opacity:".concat(t.alpha,";position:fixed;top:0;left:0;z-index:").concat(t.zIndex),d=(n.style.cssText=c,document.getElementsByTagName("body")[0].appendChild(n),n),l=d.getContext("2d"),r=window.devicePixelRatio||1,h=t.ribbon_width,c=Math,u=0,x=2*c.PI,s=c.cos,m=c.random;function y(){for(o=window.innerWidth,i=window.innerHeight,d.width=o*r,d.height=i*r,l.clearRect(0,0,o,i),a=[{x:0,y:.7*i+h},{x:0,y:.7*i-h}];a[1].x<o+h;){n=t=e=void 0;for(var e=a[0],t=a[1],e=(l.beginPath(),l.moveTo(e.x,e.y),l.lineTo(t.x,t.y),t.x+(2*m()-.25)*h),t=function e(t){var n=t+(2*m()-1.1)*h;return i<n||n<0?e(t):n}(t.y),n=(l.lineTo(e,t),l.closePath(),(127*s(u-=x/-50)+128<<16|127*s(u+x/3)+128<<8|127*s(u+x/3*2)+128).toString(16));n.length<6;)n="0"+n;l.fillStyle="#"+n,l.fill(),a[0]=a[1],a[1]={x:e,y:t}}}l.scale(r,r),l.globalAlpha=t.alpha,document.onclick=y,document.ontouchstart=y,(window.onresize=y)()}();