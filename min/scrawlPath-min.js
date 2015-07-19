/*! scrawl-canvas 2015-07-19 */
if(window.scrawl&&window.scrawl.modules&&!window.scrawl.contains(window.scrawl.modules,"path"))var scrawl=function(a){"use strict";return a.pathDeleteEntity=function(b){var c,d,e,f,g,h;if("Path"===b.type){for(c=b.getFullPointList(),d=b.getFullLinkList(),g=0,h=c.length;h>g;g++)a.removeItem(a.pointnames,c[g]),delete a.point[c[g]];for(e=0,f=d.length;f>e;e++)a.removeItem(a.linknames,d[e]),delete a.link[d[e]]}},a.Base.prototype.clone=function(b){var c=a.mergeOver(this.parse(),a.safeObject(b));return delete c.context,"Path"===this.type?a.makePath(c):new a[this.type](c)},a.d.Position.pathPlace=0,a.d.Position.pathRoll=0,a.d.Position.addPathRoll=!1,a.d.Position.path="",a.mergeInto(a.d.Cell,a.d.Position),a.mergeInto(a.d.Entity,a.d.Position),a.xt(a.d.Block)&&a.mergeInto(a.d.Block,a.d.Entity),a.xt(a.d.Shape)&&a.mergeInto(a.d.Shape,a.d.Entity),a.xt(a.d.Wheel)&&a.mergeInto(a.d.Wheel,a.d.Entity),a.xt(a.d.Picture)&&a.mergeInto(a.d.Picture,a.d.Entity),a.xt(a.d.Phrase)&&a.mergeInto(a.d.Phrase,a.d.Entity),a.Position.prototype.pathPositionInit=function(b){this.path=a.xtGet(b.path,a.d[this.type].path),this.pathRoll=a.xtGet(b.pathRoll,a.d[this.type].pathRoll),this.addPathRoll=a.xtGet(b.addPathRoll,a.d[this.type].addPathRoll),this.pathPlace=a.xtGet(b.pathPlace,a.d[this.type].pathPlace)},a.Position.prototype.pathPositionSetDelta=function(a){a.pathPlace&&(this.pathPlace+=a.pathPlace)},a.Cell.prototype.pathPrepareToCopyCell=function(){var b;a.entity[this.path]&&"Path"===a.entity[this.path].type&&(b=a.entity[this.path].getPerimeterPosition(this.pathPlace,this.pathSpeedConstant,this.addPathRoll),this.start.x=this.lockX?this.start.x:b.x,this.start.y=this.lockY?this.start.y:b.y,this.pathRoll=b.r||0)},a.Entity.prototype.pathStamp=function(){var b;a.entity[this.path]&&"Path"===a.entity[this.path].type&&(b=a.entity[this.path].getPerimeterPosition(this.pathPlace,this.pathSpeedConstant,this.addPathRoll),this.start.x=this.lockX?this.start.x:b.x,this.start.y=this.lockY?this.start.y:b.y,this.pathRoll=b.r||0)},a.newPoint=function(b){return a.makePoint(b)},a.newLink=function(b){return a.makeLink(b)},a.makePoint=function(b){return new a.Point(b)},a.makeLink=function(b){return new a.Link(b)},a.newPathObject=function(b){return new a.Path(b)},a.makePath=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z=["C","c","S","s"],A=["Q","q","T","t"],B=new RegExp("_","g");b=a.isa(b,"obj")?b:{},c=999999,d=999999,e=-999999,f=-999999,p=0,q=0,r=0,s=0,t=0,u=0,v=a.xtGet(a.point[b.pivot],a.entity[b.pivot],!1),v?(w=a.xtGet(v.local,v.place,v.start,!1),w=a.safeObject(w),b.startX=a.xtGet(w.x,0),b.startY=a.xtGet(w.y,0)):(w=a.safeObject(b.start),b.startX=a.xtGet(b.startX,w.x,0),b.startY=a.xtGet(b.startY,w.y,0)),b.start=a.xt(b.start)?b.start:{},b.scaleX=b.scaleX||1,b.scaleY=b.scaleY||1,b.isLine=a.xtGet(b.isLine,!0);var C=function(a,b){c=c>a?a:c,d=d>b?b:d,e=a>e?a:e,f=b>f?b:f},D=function(a){var b,c,d=a.match(/(-?[0-9.]+\b)/g);if(d){for(b=0,c=d.length;c>b;b++)d[b]=parseFloat(d[b]);return d}return!1},E=function(b,c,d,e,f,g,h,i){a.makePoint({name:b+"_p"+c,entity:d,currentX:e*h,currentY:f*i,startLink:b+"_l"+g})},F=function(c,d,e,f,g,h,i,j,k){i=a.xt(i)?i:{},j=a.xt(j)?j:{},k=a.xt(k)?k:{},a.makeLink({name:c+"_l"+d,entity:e,species:f,startPoint:h.name,endPoint:i.name||!1,controlPoint1:j.name||!1,controlPoint2:k.name||!1,precision:b.precision||!1,action:g})};if(a.xt(b.data)&&(g=a.newPathObject(b),h=g.name,i=h.replace(B,"="),j=a.point,k=b.scaleX,l=b.scaleY,g)){for(m=b.data.match(/([A-Za-z][0-9. ,\-]*)/g),E(i,q,h,r,s,p,k,l),q++,x=0,y=m.length;y>x;x++)switch(o=m[x][0],n=D(m[x]),o){case"M":for(r=n[0],s=n[1],C(r,s),E(i,q,h,r,s,p+1,k,l),q++,F(i,p,h,!1,"move",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,t=2,u=n.length;u>t;t+=2)E(i,q,h,n[t],n[t+1],p+1,k,l),q++,F(i,p,h,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,r=n[t],s=n[t+1],C(r,s);break;case"m":for(0===x?(r=n[0],s=n[1]):(r+=n[0],s+=n[1]),C(r,s),E(i,q,h,r,s,p+1,k,l),q++,F(i,p,h,!1,"move",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,t=2,u=n.length;u>t;t+=2)E(i,q,h,r+n[t],s+n[t+1],p+1,k,l),q++,F(i,p,h,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,r+=n[t],s+=n[t+1],C(r,s);break;case"Z":case"z":E(i,q,h,g.start.x,g.start.y,p+1,k,l),q++,F(i,p,h,!1,"close",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++;break;case"L":for(t=0,u=n.length;u>t;t+=2)E(i,q,h,n[t],n[t+1],p+1,k,l),q++,F(i,p,h,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,r=n[t],s=n[t+1],C(r,s);break;case"l":for(t=0,u=n.length;u>t;t+=2)E(i,q,h,r+n[t],s+n[t+1],p+1,k,l),q++,F(i,p,h,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,r+=n[t],s+=n[t+1],C(r,s);break;case"H":for(t=0,u=n.length;u>t;t++)E(i,q,h,n[t],s,p+1,k,l),q++,F(i,p,h,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,r=n[t],C(r,s);break;case"h":for(t=0,u=n.length;u>t;t++)E(i,q,h,r+n[t],s,p+1,k,l),q++,F(i,p,h,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,r+=n[t],C(r,s);break;case"V":for(t=0,u=n.length;u>t;t++)E(i,q,snsn,r,n[t],p+1,k,l),q++,F(i,p,snsn,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,s=n[t],C(r,s);break;case"v":for(t=0,u=n.length;u>t;t++)E(i,q,snsn,r,s+n[t],p+1,k,l),q++,F(i,p,snsn,"line","add",j[i+"_p"+(q-2)],j[i+"_p"+(q-1)]),p++,s+=n[t],C(r,s);break;case"C":for(t=0,u=n.length;u>t;t+=6)E(i,q,snsn,n[t],n[t+1],p+1,k,l),q++,E(i,q,snsn,n[t+2],n[t+3],p+1,k,l),q++,E(i,q,snsn,n[t+4],n[t+5],p+1,k,l),q++,F(i,p,snsn,"bezier","add",j[i+"_p"+(q-4)],j[i+"_p"+(q-1)],j[i+"_p"+(q-3)],j[i+"_p"+(q-2)]),p++,r=n[t+4],s=n[t+5],C(r,s);break;case"c":for(t=0,u=n.length;u>t;t+=6)E(i,q,h,r+n[t],s+n[t+1],p+1,k,l),q++,E(i,q,h,r+n[t+2],s+n[t+3],p+1,k,l),q++,E(i,q,h,r+n[t+4],s+n[t+5],p+1,k,l),q++,F(i,p,h,"bezier","add",j[i+"_p"+(q-4)],j[i+"_p"+(q-1)],j[i+"_p"+(q-3)],j[i+"_p"+(q-2)]),p++,r+=n[t+4],s+=n[t+5],C(r,s);break;case"S":for(t=0,u=n.length;u>t;t+=4)x>0&&a.contains(z,m[x-1][0])?(j[i+"_p"+(q-2)].clone({name:i+"_p"+q,currentX:r+(r-j[i+"_p"+(q-2)].local.x),currentY:s+(s-j[i+"_p"+(q-2)].local.y),startLink:i+"_l"+(p+1)}),q++):(E(i,q,h,r,s,p+1,k,l),q++),E(i,q,h,n[t],n[t+1],p+1,k,l),q++,E(i,q,h,n[t+2],n[t+3],p+1,k,l),q++,F(i,p,h,"bezier","add",j[i+"_p"+(q-4)],j[i+"_p"+(q-1)],j[i+"_p"+(q-3)],j[i+"_p"+(q-2)]),p++,r=n[t+2],s=n[t+3],C(r,s);break;case"s":for(t=0,u=n.length;u>t;t+=4)x>0&&a.contains(z,m[x-1][0])?(j[i+"_p"+(q-2)].clone({name:i+"_p"+q,currentX:r+(r-j[i+"_p"+(q-2)].local.x),currentY:s+(s-j[i+"_p"+(q-2)].local.y),startLink:i+"_l"+(p+1)}),q++):(E(i,q,h,r,s,p+1,k,l),q++),E(i,q,h,r+n[t],s+n[t+1],p+1,k,l),q++,E(i,q,h,r+n[t+2],s+n[t+3],p+1,k,l),q++,F(i,p,h,"bezier","add",j[i+"_p"+(q-4)],j[i+"_p"+(q-1)],j[i+"_p"+(q-3)],j[i+"_p"+(q-2)]),p++,r+=n[t+2],s+=n[t+3],C(r,s);break;case"Q":for(t=0,u=n.length;u>t;t+=4)E(i,q,h,n[t],n[t+1],p+1,k,l),q++,E(i,q,h,n[t+2],n[t+3],p+1,k,l),q++,F(i,p,h,"quadratic","add",j[i+"_p"+(q-3)],j[i+"_p"+(q-1)],j[i+"_p"+(q-2)]),p++,r=n[t+2],s=n[t+3],C(r,s);break;case"q":for(t=0,u=n.length;u>t;t+=4)E(i,q,h,r+n[t],s+n[t+1],p+1,k,l),q++,E(i,q,h,r+n[t+2],s+n[t+3],p+1,k,l),q++,F(i,p,h,"quadratic","add",j[i+"_p"+(q-3)],j[i+"_p"+(q-1)],j[i+"_p"+(q-2)]),p++,r+=n[t+2],s+=n[t+3],C(r,s);break;case"T":for(t=0,u=n.length;u>t;t+=2)x>0&&a.contains(A,m[x-1][0])?(j[i+"_p"+(q-2)].clone({name:i+"_p"+q,currentX:r+(r-j[i+"_p"+(q-2)].local.x),currentY:s+(s-j[i+"_p"+(q-2)].local.y),startLink:i+"_l"+(p+1)}),q++):(E(i,q,h,r,s,p+1,k,l),q++),E(i,q,h,n[t],n[t+1],p+1,k,l),q++,F(i,p,h,"quadratic","add",j[i+"_p"+(q-3)],j[i+"_p"+(q-1)],j[i+"_p"+(q-2)]),p++,r=n[t],s=n[t+1],C(r,s);break;case"t":for(t=0,u=n.length;u>t;t+=2)x>0&&a.contains(A,m[x-1][0])?(j[i+"_p"+(q-2)].clone({name:i+"_p"+q,currentX:r+(r-j[i+"_p"+(q-2)].local.x),currentY:s+(s-j[i+"_p"+(q-2)].local.y),startLink:i+"_l"+(p+1)}),q++):(E(i,q,h,r,s,p+1,k,l),q++),E(i,q,h,r+n[t],s+n[t+1],p+1,k,l),q++,F(i,p,h,"quadratic","add",j[i+"_p"+(q-3)],j[i+"_p"+(q-1)],j[i+"_p"+(q-2)]),p++,r+=n[t],s+=n[t+1],C(r,s)}return F(i,p,h,!1,"end",j[i+"_p"+(q-1)],j[i+"_p"+q]),g.set({firstPoint:i+"_p0",width:(e-c)*b.scaleX,height:(f-d)*b.scaleY}),g.buildPositions(),g}return!1},a.pushUnique(a.sectionlist,"point"),a.pushUnique(a.nameslist,"pointnames"),a.pushUnique(a.sectionlist,"link"),a.pushUnique(a.nameslist,"linknames"),a.Path=function(b){return b=a.safeObject(b),a.Entity.call(this,b),a.Position.prototype.set.call(this,b),this.isLine=a.isa(b.isLine,"bool")?b.isLine:!0,this.linkList=[],this.linkDurations=[],this.pointList=[],this.perimeterLength=0,this.registerInLibrary(),a.pushUnique(a.group[this.group].entitys,this.name),this},a.Path.prototype=Object.create(a.Entity.prototype),a.Path.prototype.type="Path",a.Path.prototype.classname="entitynames",a.d.Path={firstPoint:"",isLine:!0,closed:!0,linkList:[],linkDurations:[],pointList:[],perimeterLength:0,markStart:"",markMid:"",markEnd:"",mark:"",method:"draw",precision:10},a.mergeInto(a.d.Path,a.d.Entity),a.Path.prototype.prepareShape=function(b,c){var d;return a.cell[c].setEngine(this),this.firstPoint&&(d=this.prepareStamp(),this.rotateCell(b,c),b.translate(d.x,d.y),b.beginPath(),a.link[a.point[this.firstPoint].startLink].sketch(b)),this},a.Path.prototype.getPivotOffsetVector=function(){return this.isLine?a.Entity.prototype.getPivotOffsetVector.call(this):this.getCenteredPivotOffsetVector()},a.Path.prototype.stampMark=function(a,b,c,d){var e,f,g,h,i={path:"",pathPlace:0,group:"",handle:null};return e=a.path,f=a.pathPlace,g=a.group,h=a.handle,i.path=this.name,i.pathPlace=b,i.group=d,i.handle=this.handle,a.set(i).forceStamp(),i.path=e,i.pathPlace=f,i.group=g,i.handle=h,a.set(i),this},a.Path.prototype.addMarks=function(b,c){var d,e,f,g,h;if(d=!1,a.xtGet(this.mark,this.markStart,this.markMid,this.markEnd)){if(this.buildPositions(),f=this.get("linkDurations"),d=a.xtGetTrue(this.markStart,this.mark),d&&a.entity[d]&&this.stampMark(a.entity[d],0,b,c),d=a.xtGetTrue(this.markMid,this.mark),d&&a.entity[d])for(e=a.entity[d],g=0,h=f.length-1;h>g;g++)this.stampMark(e,f[g],b,c);d=a.xtGetTrue(this.markEnd,this.mark),d&&a.entity[d]&&this.stampMark(a.entity[d],1,b,c)}return this},a.Path.prototype.clip=function(b,c){return this.closed&&(this.prepareShape(b,c),b.clip(a.ctx[this.context].get("winding"))),this},a.Path.prototype.clear=function(b,c){return this.prepareShape(b,c),b.globalCompositeOperation="destination-out",b.stroke(),b.fill(a.ctx[this.context].get("winding")),b.globalCompositeOperation=a.ctx[c].get("globalCompositeOperation"),this},a.Path.prototype.clearWithBackground=function(b,c){var d,e,f,g,h;return c=a.cell[c],e=c.get("backgroundColor"),d=a.ctx[c],f=d.get("fillStyle"),g=d.get("strokeStyle"),h=d.get("globalAlpha"),this.prepareShape(b,c),b.fillStyle=e,b.strokeStyle=e,b.globalAlpha=1,b.stroke(),b.fill(a.ctx[this.context].get("winding")),b.fillStyle=f,b.strokeStyle=g,b.globalAlpha=h,this},a.Path.prototype.fill=function(b,c){return this.get("closed")&&(this.prepareShape(b,c),b.fill(a.ctx[this.context].get("winding")),this.addMarks(b,c)),this},a.Path.prototype.draw=function(a,b){return this.prepareShape(a,b),a.stroke(),this.addMarks(a,b),this},a.Path.prototype.drawFill=function(b,c){return this.prepareShape(b,c),b.stroke(),this.get("closed")&&(this.clearShadow(b,c),b.fill(a.ctx[this.context].get("winding"))),this.addMarks(b,c),this},a.Path.prototype.fillDraw=function(b,c){return this.prepareShape(b,c),this.get("closed")&&(b.fill(a.ctx[this.context].get("winding")),this.clearShadow(b,c)),b.stroke(),this.addMarks(b,c),this},a.Path.prototype.sinkInto=function(b,c){return this.prepareShape(b,c),this.get("closed")&&b.fill(a.ctx[this.context].get("winding")),b.stroke(),this.addMarks(b,c),this},a.Path.prototype.floatOver=function(b,c){return this.prepareShape(b,c),b.stroke(),this.get("closed")&&b.fill(a.ctx[this.context].get("winding")),this.addMarks(b,c),this},a.Path.prototype.none=function(a,b){return this.prepareShape(a,b),this},a.Path.prototype.getFullPointList=function(){var b,c,d,e;for(c=[],b=new RegExp(this.name+"_.*"),d=0,e=a.pointnames.length;e>d;d++)b.test(a.pointnames[d])&&c.push(a.pointnames[d]);return c},a.Path.prototype.getFullLinkList=function(){var b,c,d,e;for(c=[],b=new RegExp(this.name+"_.*"),d=0,e=a.linknames.length;e>d;d++)b.test(a.linknames[d])&&c.push(a.linknames[d]);return c},a.Path.prototype.getPerimeterLength=function(a){return(a||!this.perimeterLength||0===this.get("linkDurations").length)&&this.buildPositions(),this.perimeterLength},a.Path.prototype.buildPositions=function(){var b,c,d,e,f,g,h,i;for(d=this.get("linkList"),e=[],g=0,b=0,c=d.length;c>b;b++)a.link[d[b]].setPositions();for(b=0,c=d.length;c>b;b++)h=a.link[d[b]],i=h.get("positionsCumulativeLength"),f=i[i.length-1],g+=f,e.push(g);for(b=0,c=d.length;c>b;b++)e[b]/=g;for(this.perimeterLength=g,this.linkDurations.length=0,b=0,c=e.length;c>b;b++)this.linkDurations.push(e[b]);return this},a.Path.prototype.getPerimeterPosition=function(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u={x:0,y:0,r:0};for(b=a.isa(b,"num")?b:1,c=a.isa(c,"bool")?c:!0,d=a.isa(d,"bool")?d:!1,e=a.isa(e,"bool")?e:!1,this.getPerimeterLength(),h=this.get("linkList"),k=this.get("linkDurations"),f=0,g=h.length;g>f;f++)if(i=a.link[h[f]],k[f]>=b)return j=0===f?b/k[f]:(b-k[f-1])/(k[f]-k[f-1]),j=0>j?0:j>1?1:j,n=0>j-1e-7?0:j-1e-7,q=j+1e-7>1?1:j+1e-7,c?d?(t=e?i.getLocalSteadyPositionOnLink(n):i.getSteadyPositionOnLink(n),l=t.x,m=t.y,t=e?i.getLocalSteadyPositionOnLink(q):i.getSteadyPositionOnLink(q),o=t.x,p=t.y,s=Math.atan2(p-m,o-l)/a.radian,r=e?i.getLocalSteadyPositionOnLink(j):i.getSteadyPositionOnLink(j),u.x=r.x,u.y=r.y,u.r=s,u):e?i.getLocalSteadyPositionOnLink(j):i.getSteadyPositionOnLink(j):d?(t=e?i.getLocalPositionOnLink(n):i.getPositionOnLink(n),l=t.x,m=t.y,t=e?i.getLocalPositionOnLink(q):i.getPositionOnLink(q),o=t.x,p=t.y,s=Math.atan2(p-m,o-l)/a.radian,r=e?i.getLocalPositionOnLink(j):i.getPositionOnLink(j),u.x=r.x,u.y=r.y,u.r=s,u):e?i.getLocalPositionOnLink(j):i.getPositionOnLink(j);return!1},a.Path.prototype.checkHit=function(b){var c,d,e,f,g,h,i={x:0,y:0};for(b=a.safeObject(b),e=a.xt(b.tests)?[].concat(b.tests):[b.x||!1,b.y||!1],f=!1,h=a.ctx[this.context].winding,a.cvx.mozFillRule=h,a.cvx.msFillRule=h,this.firstPoint&&(g=this.prepareStamp(),this.rotateCell(a.cvx,a.group[this.group].cell),a.cvx.translate(g.x,g.y),a.cvx.beginPath(),a.link[a.point[this.firstPoint].startLink].sketch(a.cvx)),c=0,d=e.length;d>c&&!(f=a.cvx.isPointInPath(e[c],e[c+1],a.ctx[this.context].get("winding")));c+=2);return f?(i.x=e[c],i.y=e[c+1],i):!1},a.Path.prototype.buildCollisionVectors=function(b){var c,d,e,f,g,h,i=[];if(a.xt(a.d.Path.fieldChannel))for(i=a.xt(b)?this.parseCollisionPoints(b):this.collisionPoints,this.collisionVectors.length=0,h=0,c=0,d=i.length;d>c;c++)if(a.isa(i[c],"num")&&i[c]>=0)if(i[c]>1)for(f=1/i[c],e=0;e<i[c];e++)g=this.getPerimeterPosition(h,!0,!1,!0),this.collisionVectors.push(g.x),this.collisionVectors.push(g.y),h+=f;else g=this.getPerimeterPosition(i[c],!0,!1,!0),this.collisionVectors.push(g.x),this.collisionVectors.push(g.y);else if(a.isa(i[c],"str"))switch(i[c]){case"start":this.collisionVectors.push(0),this.collisionVectors.push(0)}else a.isa(i[c],"vector")&&(this.collisionVectors.push(i[c].x),this.collisionVectors.push(i[c].y));return this},a.Point=function(b){var c;return b=a.safeObject(b),a.Base.call(this,b),c=a.safeObject(b.local),this.entity=a.xtGet(b.entity,""),this.local=a.makeVector({x:a.xtGet(b.startX,b.currentX,c.x,0),y:a.xtGet(b.startY,b.currentY,c.y,0)}),this.work.local=a.makeVector({name:this.type+"."+this.name+".work.local"}),this.work.local.name=this.type+"."+this.name+".work.local",this.startLink=a.xtGet(b.startLink,""),this.fixed=a.xtGet(b.fixed,!1),a.xto(b.angle,b.distance)&&this.setPolar(b),a.point[this.name]=this,a.pushUnique(a.pointnames,this.name),this.entity&&"Path"===a.entity[this.entity].type&&a.pushUnique(a.entity[this.entity].pointList,this.name),this},a.Point.prototype=Object.create(a.Base.prototype),a.Point.prototype.type="Point",a.Point.prototype.classname="pointnames",a.d.Point={entity:"",local:{x:0,y:0,z:0},startLink:"",fixed:!1},a.mergeInto(a.d.Point,a.d.Base),a.Point.prototype.set=function(b){var c;return a.Base.prototype.set.call(this,b),b=a.safeObject(b),c=a.safeObject(b.local),a.xto(b.distance,b.angle)?this.setPolar(b):a.xto(b.startX,b.startY,b.currentX,b.currentY,b.local)&&(this.local.x=a.xt(b.startX)?b.startX:a.xt(b.currentX)?b.currentX:a.xt(c.x)?c.x:this.local.x,this.local.y=a.xt(b.startY)?b.startY:a.xt(b.currentY)?b.currentY:a.xt(c.y)?c.y:this.local.y),this},a.Point.prototype.setDelta=function(b){var c,d,e,f;return b=a.safeObject(b),c=a.safeObject(b.local),a.xto(b.startX,b.startY,b.currentX,b.currentY,b.local)&&(this.local.x+=a.xt(b.startX)?b.startX:a.xt(b.currentX)?b.currentX:a.xt(c.x)?c.x:0,this.local.y+=a.xt(b.startY)?b.startY:a.xt(b.currentY)?b.currentY:a.xt(c.y)?c.y:0),a.xt(b.distance)&&(d=this.local.getMagnitude(),this.local.scalarMultiply((b.distance+d)/d)),a.xt(b.angle)&&(e=this.local.getMagnitude(),f=Math.atan2(this.local.y,this.local.x),f+=b.angle*a.radian,this.local.x=e*Math.cos(f),this.local.y=e*Math.sin(f)),this},a.Point.prototype.setPolar=function(b){var c,d,e;return b=a.safeObject(b),a.Base.prototype.set.call(this,b),a.xta(b.distance,b.angle)?(e=b.angle*a.radian,this.local.x=b.distance*Math.cos(e),this.local.y=b.distance*Math.sin(e)):(a.xt(b.distance)&&(c=this.local.getMagnitude(),c=a.xt(c)&&c>1e-7?c:1,this.local.scalarMultiply(b.distance/c)),a.xt(b.angle)&&(d=this.local.getMagnitude(),e=b.angle*a.radian,this.local.x=d*Math.cos(e),this.local.y=d*Math.sin(e))),this},a.Point.prototype.getData=function(){var b,c,d,e={name:"",current:null,startLink:null};return b=a.entity[this.entity],d=b.scale,this.resetWork(),a.xt(this.local)&&"Vector"===this.local.type?(a.isa(this.fixed,"str")&&(a.entity[this.fixed]||a.point[this.fixed])?(c=a.entity[this.fixed]||a.point[this.fixed],"Point"===c.type?(this.work.local.set(c.local),this.work.local.scalarMultiply(d||1)):this.work.local.set("Particle"===c.type?c.get("place"):c.start)):this.fixed?(this.work.local.vectorSubtract(b.start||a.o),this.work.local.scalarMultiply(d||1),this.work.local.rotate(-b.roll)):this.work.local.scalarMultiply(d||1),e.name=this.name,e.current=this.work.local,e.startLink=this.startLink,e):!1},a.Point.prototype.getCurrentCoordinates=function(){return this.getData().current},a.Point.prototype.setToFixed=function(b,c){var d;return a.isa(b,"str")?this.fixed=b:(d=a.isa(b,"obj")&&a.xt(b.x)?b.x:a.isa(b,"num")?b:0,c=a.isa(b,"obj")&&a.xt(b.y)?b.y:a.isa(c,"num")?c:0,this.local.x=d,this.local.y=c,this.fixed=!0),this},a.Link=function(b){return b=a.safeObject(b),a.Base.call(this,b),a.Base.prototype.set.call(this,b),this.startPoint=a.xtGet(b.startPoint,a.d.Link.startPoint),this.entity=a.xt(a.point[this.startPoint])?a.point[this.startPoint].entity:a.d.Link.entity,this.endPoint=a.xtGet(b.endPoint,a.d.Link.endPoint),this.species=a.xtGet(b.species,a.d.Link.species),this.action=a.xtGet(b.action,a.d.Link.action),a.link[this.name]=this,a.pushUnique(a.linknames,this.name),this.positionsX=[],this.positionsY=[],this.positionsLength=[],this.positionsCumulativeLength=[],this.startPoint&&this.entity&&"add"===this.action&&a.pushUnique(a.entity[this.entity].linkList,this.name),this},a.Link.prototype=Object.create(a.Base.prototype),a.Link.prototype.type="Link",a.Link.prototype.classname="linknames",a.xt(a.worklink)||(a.worklink={start:a.makeVector({name:"scrawl.worklink.start"}),end:a.makeVector({name:"scrawl.worklink.end"}),control1:a.makeVector({name:"scrawl.worklink.control1"}),control2:a.makeVector({name:"scrawl.worklink.control2"}),v1:a.makeVector({name:"scrawl.worklink.v1"}),v2:a.makeVector({name:"scrawl.worklink.v2"}),v3:a.makeVector({name:"scrawl.worklink.v3"})}),a.d.Link={species:"",startPoint:"",entity:"",endPoint:"",controlPoint1:"",controlPoint2:"",action:"add",length:0,positionsX:[],positionsY:[],positionsLength:[],positionsCumulativeLength:[]},a.mergeInto(a.d.Link,a.d.Base),a.Link.prototype.set=function(b){return a.Base.prototype.set.call(this,b),b=a.safeObject(b),a.isa(b.entity,"str")&&b.entity!==this.entity&&this.entity&&a.removeItem(a.entity[this.entity].linkList,this.name),a.isa(b.action,"str")&&this.entity&&a.entity[this.entity]&&("add"===b.action?a.pushUnique(a.entity[this.entity].linkList,this.name):a.removeItem(a.entity[this.entity].linkList,this.name)),this},a.Link.prototype.pointOnLine=function(b,c,d){return b&&c&&a.isa(d,"num")?c.vectorSubtract(b).scalarMultiply(d).vectorAdd(b):!1},a.Link.prototype.getPointCoordinates=function(){var b;return b=this.startPoint?a.point[this.startPoint].getCurrentCoordinates():a.o,a.worklink.start.x=b.x||0,a.worklink.start.y=b.y||0,a.worklink.start.z=b.z||0,b=this.endPoint?a.point[this.endPoint].getCurrentCoordinates():a.o,a.worklink.end.x=b.x||0,a.worklink.end.y=b.y||0,a.worklink.end.z=b.z||0,b=this.controlPoint1?a.point[this.controlPoint1].getCurrentCoordinates():a.o,a.worklink.control1.x=b.x||0,a.worklink.control1.y=b.y||0,a.worklink.control1.z=b.z||0,b=this.controlPoint2?a.point[this.controlPoint2].getCurrentCoordinates():a.o,a.worklink.control2.x=b.x||0,a.worklink.control2.y=b.y||0,a.worklink.control2.z=b.z||0,a.worklink},a.Link.prototype.getLocalPositionOnLink=function(b){var c,d,e,f,g,h,i,j={x:0,y:0,z:0};switch(b=a.isa(b,"num")?b:1,this.getPointCoordinates(),this.species){case"line":a.worklink.v1.set(this.pointOnLine(a.worklink.start,a.worklink.end,b));break;case"quadratic":d=this.pointOnLine(a.worklink.control1,a.worklink.end,b),c=this.pointOnLine(a.worklink.start,a.worklink.control1,b),a.worklink.v1.set(this.pointOnLine(c,d,b));break;case"bezier":g=this.pointOnLine(a.worklink.control2,a.worklink.end,b),f=this.pointOnLine(a.worklink.control1,a.worklink.control2,b),e=this.pointOnLine(a.worklink.start,a.worklink.control1,b),i=this.pointOnLine(f,g,b),h=this.pointOnLine(e,f,b),a.worklink.v1.set(this.pointOnLine(h,i,b));break;default:a.worklink.v1.set(j)}return a.worklink.v1},a.Link.prototype.getPositionOnLink=function(b){var c,d;return c=a.entity[this.entity],a.isa(b,"num")?(d=this.getLocalPositionOnLink(b),d.rotate(c.roll).vectorAdd(c.getStartValues())):!1},a.Link.prototype.getLocalSteadyPositionOnLink=function(b){var c,d,e,f;for(b=a.isa(b,"num")?b:1,d=a.entity[this.entity].get("precision"),e=this.length*b,e=e>this.positionsCumulativeLength[d]?this.positionsCumulativeLength[d]:0>e?0:e,f=1;d>=f;f++)if(e<=this.positionsCumulativeLength[f])return a.worklink.v1.x=this.positionsX[f-1],a.worklink.v1.y=this.positionsY[f-1],a.worklink.v2.x=this.positionsX[f],a.worklink.v2.y=this.positionsY[f],a.worklink.v2.vectorSubtract(a.worklink.v1),c=(e-this.positionsCumulativeLength[f-1])/this.positionsLength[f],a.worklink.v2.scalarMultiply(c).vectorAdd(a.worklink.v1);return!1},a.Link.prototype.getSteadyPositionOnLink=function(b){var c,d;return c=a.entity[this.entity],d=this.getLocalSteadyPositionOnLink(b),d.rotate(c.roll).vectorAdd(c.getStartValues()),d},a.Link.prototype.getLength=function(){return this.setPositions(),this.length},a.Link.prototype.setPositions=function(b){var c,d,e,f,g,h,i,j,k,l;if("add"===this.action){for(c=this.getPointCoordinates(),d=a.isa(b,"num")&&b>0?b:a.entity[this.entity].get("precision"),e=1/d,i=0,a.worklink.v2.set(c.start),j=a.entity[this.entity],k=j.roll,this.positionsX.length=0,this.positionsY.length=0,this.positionsLength.length=0,this.positionsCumulativeLength.length=0,this.positionsX[0]=a.worklink.v2.x,this.positionsY[0]=a.worklink.v2.y,this.positionsLength[0]=0,this.positionsCumulativeLength[0]=0,j.roll=0,l=1;d>=l;l++)f=e*(l-1+1),g=this.getPositionOnLink(f),g.vectorSubtract(j.getStartValues()),a.worklink.v3.set(g),h=g.vectorSubtract(a.worklink.v2).getMagnitude(),a.worklink.v2.set(a.worklink.v3),i+=h,this.positionsX[l]=a.worklink.v2.x,this.positionsY[l]=a.worklink.v2.y,this.positionsLength[l]=h,this.positionsCumulativeLength[l]=i;this.length=this.positionsCumulativeLength[d],j.roll=k}return this},a.Link.prototype.sketch=function(b){var c,d,e;switch(this.action){case"close":b.closePath();break;case"move":c=a.point[this.endPoint].getCurrentCoordinates(),b.moveTo(c.x,c.y);break;case"add":switch(this.species){case"line":c=a.point[this.endPoint].getCurrentCoordinates(),b.lineTo(c.x,c.y);break;case"quadratic":d=a.point[this.get("controlPoint1")].getCurrentCoordinates(),c=a.point[this.endPoint].getCurrentCoordinates(),b.quadraticCurveTo(d.x,d.y,c.x,c.y);break;case"bezier":d=a.point[this.get("controlPoint1")].getCurrentCoordinates(),e=a.point[this.get("controlPoint2")].getCurrentCoordinates(),c=a.point[this.endPoint].getCurrentCoordinates(),b.bezierCurveTo(d.x,d.y,e.x,e.y,c.x,c.y);break;default:return!0}break;default:return!0}return a.link[a.point[this.endPoint].startLink].sketch(b),!0},a}(scrawl);