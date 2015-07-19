/*! scrawl-canvas 2015-07-19 */
if(window.scrawl&&window.scrawl.modules&&!window.scrawl.contains(window.scrawl.modules,"factories"))var scrawl=function(a){"use strict";return a.makeEllipse=function(b){var c,d,e,f,g,h,i,j,k,l;return b=a.safeObject(b),b.closed=!0,c=a.Entity.prototype.getEntityCell(b),d=a.isa(b.startX,"str")?a.convertPercentage(b.startX,c,!0):b.startX||0,e=a.isa(b.startY,"str")?a.convertPercentage(b.startY,c,!1):b.startY||0,f=a.isa(b.radiusX,"str")?a.convertPercentage(b.radiusX,c,!0):b.radiusX||0,g=a.isa(b.radiusY,"str")?a.convertPercentage(b.radiusY,c,!1):b.radiusY||0,h="m",i=d,j=e,k=d,l=e-g,h+=i-k+","+(j-l),i=k,j=l,k=d+.55*f,l=e-g,h+="c"+(i-k)+","+(j-l),k=d+f,l=e-.55*g,h+=" "+(i-k)+","+(j-l),k=d+f,l=e,h+=" "+(i-k)+","+(j-l),i=k,j=l,k=d+f,l=e+.55*g,h+="c"+(i-k)+","+(j-l),k=d+.55*f,l=e+g,h+=" "+(i-k)+","+(j-l),k=d,l=e+g,h+=" "+(i-k)+","+(j-l),i=k,j=l,k=d-.55*f,l=e+g,h+="c"+(i-k)+","+(j-l),k=d-f,l=e+.55*g,h+=" "+(i-k)+","+(j-l),k=d-f,l=e,h+=" "+(i-k)+","+(j-l),i=k,j=l,k=d-f,l=e-.55*g,h+="c"+(i-k)+","+(j-l),k=d-.55*f,l=e-g,h+=" "+(i-k)+","+(j-l),k=d,l=e-g,h+=" "+(i-k)+","+(j-l),h+="z",b.isLine=!1,b.data=h,b.shape?a.makeShape(b):a.makePath(b)},a.makeRectangle=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;return b=a.safeObject(b),b.closed=!0,c=a.Entity.prototype.getEntityCell(b),d=a.isa(b.startX,"str")?a.convertPercentage(b.startX,c,!0):b.startX||0,e=a.isa(b.startY,"str")?a.convertPercentage(b.startY,c,!1):b.startY||0,f=a.isa(b.width,"str")?a.convertPercentage(b.width,c,!0):b.width||0,g=a.isa(b.height,"str")?a.convertPercentage(b.height,c,!1):b.height||0,j=a.xtGet(b.radiusTopLeftX,b.radiusTopLeft,b.radiusTopX,b.radiusLeftX,b.radiusTop,b.radiusLeft,b.radiusX,b.radius,0),k=a.xtGet(b.radiusTopLeftY,b.radiusTopLeft,b.radiusTopY,b.radiusLeftY,b.radiusTop,b.radiusLeft,b.radiusY,b.radius,0),l=a.xtGet(b.radiusTopRightX,b.radiusTopRight,b.radiusTopX,b.radiusRightX,b.radiusTop,b.radiusRight,b.radiusX,b.radius,0),m=a.xtGet(b.radiusTopRightY,b.radiusTopRight,b.radiusTopY,b.radiusRightY,b.radiusTop,b.radiusRight,b.radiusY,b.radius,0),n=a.xtGet(b.radiusBottomRightX,b.radiusBottomRight,b.radiusBottomX,b.radiusRightX,b.radiusBottom,b.radiusRight,b.radiusX,b.radius,0),o=a.xtGet(b.radiusBottomRightY,b.radiusBottomRight,b.radiusBottomY,b.radiusRightY,b.radiusBottom,b.radiusRight,b.radiusY,b.radius,0),p=a.xtGet(b.radiusBottomLeftX,b.radiusBottomLeft,b.radiusBottomX,b.radiusLeftX,b.radiusBottom,b.radiusLeft,b.radiusX,b.radius,0),q=a.xtGet(b.radiusBottomLeftY,b.radiusBottomLeft,b.radiusBottomY,b.radiusLeftY,b.radiusBottom,b.radiusLeft,b.radiusY,b.radius,0),h=f/2,i=g/2,r="m",s=d,t=e,u=d-h+n,v=e-i,r+=s-u+","+(t-v),s=u,t=v,u=d+h-p,v=e-i,r+="l"+(s-u)+","+(t-v),s=u,t=v,u=d+h-p+.55*p,v=e-i,r+="c"+(s-u)+","+(t-v),u=d+h,v=e-i+q-.55*q,r+=" "+(s-u)+","+(t-v),u=d+h,v=e-i+q,r+=" "+(s-u)+","+(t-v),s=u,t=v,u=d+h,v=e+i-k,r+="l"+(s-u)+","+(t-v),s=u,t=v,u=d+h,v=e+i-k+.55*k,r+="c"+(s-u)+","+(t-v),u=d+h-j+.55*j,v=e+i,r+=" "+(s-u)+","+(t-v),u=d+h-j,v=e+i,r+=" "+(s-u)+","+(t-v),s=u,t=v,u=d-h+l,v=e+i,r+="l"+(s-u)+","+(t-v),s=u,t=v,u=d-h+l-.55*l,v=e+i,r+="c"+(s-u)+","+(t-v),u=d-h,v=e+i-m+.55*m,r+=" "+(s-u)+","+(t-v),u=d-h,v=e+i-m,r+=" "+(s-u)+","+(t-v),s=u,t=v,u=d-h,v=e-i+o,r+="l"+(s-u)+","+(t-v),s=u,t=v,u=d-h,v=e-i+o-.55*o,r+="c"+(s-u)+","+(t-v),u=d-h+n-.55*n,v=e-i,r+=" "+(s-u)+","+(t-v),u=d-h+n,v=e-i,r+=" "+(s-u)+","+(t-v),r+="z",b.isLine=!1,b.data=r,b.shape?a.makeShape(b):a.makePath(b)},a.makeBezier=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;if(b=a.safeObject(b),b.closed=!1,b.handleX=b.handleX||"left",b.handleY=b.handleY||"top",b.isLine=!0,c=a.Entity.prototype.getEntityCell(b),d=a.isa(b.startX,"str")?a.convertPercentage(b.startX,c,!0):b.startX||0,e=a.isa(b.startY,"str")?a.convertPercentage(b.startY,c,!1):b.startY||0,f=a.isa(b.startControlX,"str")?a.convertPercentage(b.startControlX,c,!0):b.startControlX||0,g=a.isa(b.startControlY,"str")?a.convertPercentage(b.startControlY,c,!1):b.startControlY||0,h=a.isa(b.endControlX,"str")?a.convertPercentage(b.endControlX,c,!0):b.endControlX||0,i=a.isa(b.endControlY,"str")?a.convertPercentage(b.endControlY,c,!1):b.endControlY||0,j=a.isa(b.endX,"str")?a.convertPercentage(b.endX,c,!0):b.endX||0,k=a.isa(b.endY,"str")?a.convertPercentage(b.endY,c,!1):b.endY||0,m=b.fixed||"none",b.fixed=!1,l="m0,0c"+(f-d)+","+(g-e)+" "+(h-d)+","+(i-e)+" "+(j-d)+","+(k-e),b.data=l,b.shape)n=a.makeShape(b);else switch(n=a.makePath(b),o=n.name.replace("~","_","g"),m){case"all":a.point[o+"_p1"].setToFixed(d,e),a.point[o+"_p2"].setToFixed(f,g),a.point[o+"_p3"].setToFixed(h,i),a.point[o+"_p4"].setToFixed(j,k);break;case"both":a.point[o+"_p1"].setToFixed(d,e),a.point[o+"_p4"].setToFixed(j,k);break;case"start":a.point[o+"_p1"].setToFixed(d,e);break;case"startControl":a.point[o+"_p2"].setToFixed(f,g);break;case"endControl":a.point[o+"_p3"].setToFixed(h,i);break;case"end":a.point[o+"_p4"].setToFixed(j,k)}return n},a.makeQuadratic=function(b){var c,d,e,f,g,h,i,j,k,l,m;if(b=a.safeObject(b),b.closed=!1,b.handleX=b.handleX||"left",b.handleY=b.handleY||"top",b.isLine=!0,c=a.Entity.prototype.getEntityCell(b),d=a.isa(b.startX,"str")?a.convertPercentage(b.startX,c,!0):b.startX||0,e=a.isa(b.startY,"str")?a.convertPercentage(b.startY,c,!1):b.startY||0,f=a.isa(b.controlX,"str")?a.convertPercentage(b.controlX,c,!0):b.controlX||0,g=a.isa(b.controlY,"str")?a.convertPercentage(b.controlY,c,!1):b.controlY||0,h=a.isa(b.endX,"str")?a.convertPercentage(b.endX,c,!0):b.endX||0,i=a.isa(b.endY,"str")?a.convertPercentage(b.endY,c,!1):b.endY||0,k=b.fixed||"none",j="m0,0q"+(f-d)+","+(g-e)+" "+(h-d)+","+(i-e),b.fixed=!1,b.data=j,b.shape)l=a.makeShape(b);else switch(l=a.makePath(b),m=l.name.replace("~","_","g"),k){case"all":a.point[m+"_p1"].setToFixed(d,e),a.point[m+"_p2"].setToFixed(f,g),a.point[m+"_p3"].setToFixed(h,i);break;case"both":a.point[m+"_p1"].setToFixed(d,e),a.point[m+"_p3"].setToFixed(h,i);break;case"start":a.point[m+"_p1"].setToFixed(d,e);break;case"control":a.point[m+"_p2"].setToFixed(f,g);break;case"end":a.point[m+"_p3"].setToFixed(h,i)}return l},a.makeLine=function(b){var c,d,e,f,g,h,i,j,k;if(b=a.safeObject(b),b.isLine=!0,b.closed=!1,b.handleX=b.handleX||"left",b.handleY=b.handleY||"top",c=a.Entity.prototype.getEntityCell(b),d=a.isa(b.startX,"str")?a.convertPercentage(b.startX,c,!0):b.startX||0,e=a.isa(b.startY,"str")?a.convertPercentage(b.startY,c,!1):b.startY||0,f=a.isa(b.endX,"str")?a.convertPercentage(b.endX,c,!0):b.endX||0,g=a.isa(b.endY,"str")?a.convertPercentage(b.endY,c,!1):b.endY||0,i=b.fixed||"none",h="m0,0 "+(f-d)+","+(g-e),b.fixed=!1,b.data=h,b.shape)j=a.makeShape(b);else switch(j=a.makePath(b),k=j.name.replace("~","_","g"),i){case"both":a.point[k+"_p1"].setToFixed(d,e),a.point[k+"_p2"].setToFixed(f,g);break;case"start":a.point[k+"_p1"].setToFixed(d,e);break;case"end":a.point[k+"_p2"].setToFixed(f,g)}return j},a.makeRegularShape=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o=["c","s","q","t","l"],p=["s","t"],q=["c","s","q","t"],r=["c","q"];if(b=a.safeObject(b),c=a.Entity.prototype.getEntityCell(b),a.xto(b.sides,b.angle)){b.closed=!0,b.isLine=!1,j=a.xtGet(b.startControlX,b.controlX,0),k=a.xtGet(b.startControlY,b.controlY,0),l=b.endControlX||0,m=b.endControlY||0,j=a.isa(j,"str")?a.convertPercentage(j,c,!0):j,k=a.isa(k,"str")?a.convertPercentage(k,c,!1):k,l=a.isa(l,"str")?a.convertPercentage(l,c,!0):l,m=a.isa(m,"str")?a.convertPercentage(m,c,!1):m,i=a.contains(o,b.lineType)?b.lineType:"l",d=b.radius||20,e=a.isa(b.sides,"num")&&b.sides>1?360/b.sides:a.isa(b.angle,"num")&&b.angle>0?b.angle:4,f=0,g=0,a.worklink.v1.x=d,a.worklink.v1.y=0,a.worklink.v1.z=0,a.worklink.v2.set(a.worklink.v1),a.worklink.control1.x=j,a.worklink.control1.y=k,a.worklink.control1.z=0,a.worklink.control2.x=l,a.worklink.control2.y=m,a.worklink.control2.z=0,n="m"+a.worklink.v1.x.toFixed(4)+","+a.worklink.v1.y.toFixed(4),n+=a.contains(p,i)?"s"===i?"c":"q":i;do g++,f+=e,f%=360,h=f.toFixed(0),a.worklink.v1.rotate(e),a.worklink.control1.rotate(e),a.worklink.control2.rotate(e),a.contains(q,i)&&(1===g&&a.contains(p,i)?n+="s"===i?a.worklink.control1.x.toFixed(4)+","+a.worklink.control1.y.toFixed(4)+" "+a.worklink.control2.x.toFixed(4)+","+a.worklink.control2.y.toFixed(4)+" ":a.worklink.control1.x.toFixed(4)+","+a.worklink.control1.y.toFixed(4)+" ":"s"===i?n+=a.worklink.control2.x.toFixed(4)+","+a.worklink.control2.y.toFixed(4)+" ":a.contains(r,i)&&(n+=a.worklink.control1.x.toFixed(4)+","+a.worklink.control1.y.toFixed(4)+" ")),"c"===i&&(n+=a.worklink.control2.x.toFixed(4)+","+a.worklink.control2.y.toFixed(4)+" "),n+=(a.worklink.v1.x-a.worklink.v2.x).toFixed(4)+","+(a.worklink.v1.y-a.worklink.v2.y).toFixed(4)+" ",1===g&&a.contains(p,i)&&(n+="s"===i?"s":"t"),a.worklink.v2.set(a.worklink.v1);while("0"!==h&&1e3>g);return n+="z",b.data=n,b.shape?a.makeShape(b):a.makePath(b)}return!1},a.xt(a.worklink)||(a.worklink={start:a.makeVector({name:"scrawl.worklink.start"}),end:a.makeVector({name:"scrawl.worklink.end"}),control1:a.makeVector({name:"scrawl.worklink.control1"}),control2:a.makeVector({name:"scrawl.worklink.control2"}),v1:a.makeVector({name:"scrawl.worklink.v1"}),v2:a.makeVector({name:"scrawl.worklink.v2"}),v3:a.makeVector({name:"scrawl.worklink.v3"})}),a.convertPercentage=function(a,b,c){return c?parseFloat(a)/100*b.actualWidth:parseFloat(a)/100*b.actualHeight},a}(scrawl);