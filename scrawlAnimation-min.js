/*! scrawl 2014-04-30 */
"use strict";window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();var scrawl=function(a){return a.animationInit=function(){a.doAnimation=!0,a.animationLoop()},a.d.Position.delta={x:0,y:0,z:0},a.d.Position.deltaPathPlace=0,a.d.Position.pathSpeedConstant=!0,a.mergeInto(a.d.Cell,a.d.Position),a.mergeInto(a.d.Sprite,a.d.Position),a.xt(a.d.Block)&&a.mergeInto(a.d.Block,a.d.Sprite),a.xt(a.d.Shape)&&a.mergeInto(a.d.Shape,a.d.Sprite),a.xt(a.d.Wheel)&&a.mergeInto(a.d.Wheel,a.d.Sprite),a.xt(a.d.Picture)&&a.mergeInto(a.d.Picture,a.d.Sprite),a.xt(a.d.Phrase)&&a.mergeInto(a.d.Phrase,a.d.Sprite),a.xt(a.d.Path)&&a.mergeInto(a.d.Path,a.d.Sprite),a.Position.prototype.animationPositionInit=function(b){var c=a.safeObject(b.delta);this.delta=a.newVector({x:a.xt(b.deltaX)?b.deltaX:a.xt(c.x)?c.x:0,y:a.xt(b.deltaY)?b.deltaY:a.xt(c.y)?c.y:0}),this.work.delta=a.newVector({name:this.type+"."+this.name+".work.delta"}),this.pathSpeedConstant=a.isa(b.pathSpeedConstant,"bool")?b.pathSpeedConstant:a.d[this.type].pathSpeedConstant,this.deltaPathPlace=b.deltaPathPlace||a.d[this.type].deltaPathPlace},a.Position.prototype.animationPositionGet=function(b){if(a.contains(["deltaX","deltaY"],b))switch(b){case"deltaX":return this.delta.x;case"deltaY":return this.delta.y}return"delta"===b?(console.log(this.name,"get delta vector"),this.delta.getVector()):!1},a.Position.prototype.animationPositionSet=function(b){a.isa(this.delta,"vector")||(this.delta=a.newVector(b.delta||this.delta)),a.xto([b.deltaX,b.deltaY])&&(this.delta.x=a.xt(b.deltaX)?b.deltaX:this.delta.x,this.delta.y=a.xt(b.deltaY)?b.deltaY:this.delta.y)},a.Position.prototype.animationPositionClone=function(b,c){var d=a.safeObject(c.delta);return b.delta=a.newVector({x:a.xt(c.deltaX)?c.deltaX:a.xt(d.x)?d.x:b.delta.x,y:a.xt(c.deltaY)?c.deltaY:a.xt(d.y)?d.y:b.delta.y}),b},a.Position.prototype.updateStart=function(a){switch(a){case"x":this.start.x+=this.delta.x||0;break;case"y":this.start.y+=this.delta.y||0;break;case"path":this.pathPlace+=this.deltaPathPlace,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1);break;default:this.pathPlace+=this.deltaPathPlace,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1),this.start.vectorAdd(this.delta)}return this},a.Position.prototype.revertStart=function(a){switch(a){case"x":this.start.x-=this.delta.x||0;break;case"y":this.start.y-=this.delta.y||0;break;case"path":this.pathPlace-=this.deltaPathPlace,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1);break;default:this.pathPlace+=this.deltaPathPlace,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1),this.start.vectorSubtract(this.delta)}return this},a.Position.prototype.exchange=function(b,c){if(a.isa(b,"obj")){var d=this[c]||this.get(c);this[c]=b[c]||b.get(c),b[c]=d}return this},a.Position.prototype.reverse=function(a){switch(a){case"deltaX":this.delta.x=-this.delta.x;break;case"deltaY":this.delta.y=-this.delta.y;break;case"delta":this.delta.reverse();break;case"deltaPathPlace":this.deltaPathPlace=-this.deltaPathPlace;break;default:this.deltaPathPlace=-this.deltaPathPlace,this.delta.reverse()}return this},a.d.Cell.sourceDelta={x:0,y:0,z:0},a.d.Cell.sourceMinWidth=0,a.d.Cell.sourceMaxWidth=0,a.d.Cell.sourceMinHeight=0,a.d.Cell.sourceMaxHeight=0,a.Cell.prototype.animationCellInit=function(b){var c=a.safeObject(b.sourceDelta);this.sourceDelta=a.newVector({x:a.xt(b.sourceDeltaX)?b.sourceDeltaX:a.xt(c.x)?c.x:0,y:a.xt(b.sourceDeltaY)?b.sourceDeltaY:a.xt(c.y)?c.y:0}),this.work.sourceDelta=a.newVector()},a.Cell.prototype.animationCellGet=function(b){if(a.contains(["sourceDeltaX","sourceDeltaY"],b))switch(b){case"sourceDeltaX":return this.sourceDelta.x;case"sourceDeltaY":return this.sourceDelta.y}return a.Base.prototype.get.call(this,b)},a.Cell.prototype.animationCellSet=function(b){var c;a.xto([b.sourceDelta,b.sourceDeltaX,b.sourceDeltaY])&&(c=a.safeObject(b.sourceDelta),this.sourceDelta.x=b.sourceDeltaX||c.x||this.sourceDelta.x,this.sourceDelta.y=b.sourceDeltaY||c.y||this.sourceDelta.y)},a.Cell.prototype.updateStart=function(b){switch(b){case"x":this.start.x+=this.delta.x||0,this.source.x+=this.deltaSource.x||0;break;case"y":this.start.y+=this.delta.y||0,this.source.y+=this.deltaSource.y||0;break;case"start":case"target":this.start.vectorAdd(this.delta);break;case"source":this.source.vectorAdd(this.sourceDelta);break;case"path":this.pathPlace+=this.deltaPathPlace||0,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1);break;default:a.xt(this.pathPlace)&&(this.pathPlace+=this.deltaPathPlace||0,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1)),this.start.vectorAdd(this.delta),this.source.vectorAdd(this.sourceDelta)}return this},a.Cell.prototype.revertStart=function(b){switch(b){case"x":this.start.x-=this.delta.x||0,this.source.x-=this.deltaSource.x||0;break;case"y":this.start.y-=this.delta.y||0,this.source.y-=this.deltaSource.y||0;break;case"start":case"target":this.start.vectorSubtract(this.delta);break;case"source":this.source.vectorSubtract(this.sourceDelta);break;case"path":this.pathPlace-=this.deltaPathPlace||0,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1);break;default:a.xt(this.pathPlace)&&(this.pathPlace-=this.deltaPathPlace||0,this.pathPlace>1&&(this.pathPlace-=1),this.pathPlace<0&&(this.pathPlace+=1)),this.start.vectorSubtract(this.delta),this.source.vectorSubtract(this.sourceDelta)}return this},a.Cell.prototype.zoom=function(b){if(a.isa(b,"num")){var c,d,e=this.sourceWidth,f=this.sourceHeight,g=this.actualWidth,h=this.actualHeight,i=this.get("sourceMinWidth")||this.sourceWidth,j=this.get("sourceMinHeight")||this.sourceHeight,k=this.get("sourceMaxWidth")||this.sourceWidth,l=this.get("sourceMaxHeight")||this.sourceHeight,m=this.source.x,n=this.source.y,o=e+b,p=f+b;a.isBetween(o,i,k,!0)&&a.isBetween(p,j,l,!0)&&(e=o,c=m-b/2,m=0>c?0:c>g-e?g-e:c,f=p,d=n-b/2,n=0>d?0:d>h-f?h-f:d,this.source.x=m,this.source.y=n,this.sourceWidth=e,this.sourceHeight=f)}return this},a.Cell.prototype.spliceCell=function(b){if(b=a.safeObject(b),a.contains(["horizontal","vertical","top","bottom","left","right"],b.edge)){var c,d,e,f,g,h=this.actualHeight,i=this.actualWidth,j=a.canvas[this.name],k=a.context[this.name];switch(f=document.createElement("canvas"),f.width=i,f.height=h,g=f.getContext("2d"),k.setTransform(1,0,0,1,0,0),b.edge){case"horizontal":c=d=i/2,e="left";break;case"vertical":c=d=h/2,e="top";break;case"top":case"bottom":c=b.strip||20,d=h-c,e=b.edge;break;case"left":case"right":c=b.strip||20,d=i-c,e=b.edge}switch(e){case"top":g.drawImage(j,0,0,i,c,0,d,i,c),g.drawImage(j,0,c,i,d,0,0,i,d);break;case"bottom":g.drawImage(j,0,0,i,d,0,c,i,d),g.drawImage(j,0,d,i,c,0,0,i,c);break;case"left":g.drawImage(j,0,0,c,h,d,0,c,h),g.drawImage(j,c,0,d,h,0,0,d,h);break;case"right":g.drawImage(j,0,0,d,h,c,0,d,h),g.drawImage(j,d,0,c,h,0,0,c,h)}k.clearRect(0,0,i,h),k.drawImage(f,0,0,i,h)}return this},a.Group.prototype.updateStart=function(b){for(var c=0,d=this.sprites.length;d>c;c++)a.sprite[this.sprites[c]].updateStart(b);return this},a.Group.prototype.revertStart=function(b){for(var c=0,d=this.sprites.length;d>c;c++)a.sprite[this.sprites[c]].revertStart(b);return this},a.Group.prototype.reverse=function(b){for(var c=0,d=this.sprites.length;d>c;c++)a.sprite[this.sprites[c]].reverse(b);return this},a.d.Design.roll=0,a.d.Design.autoUpdate=!1,a.mergeInto(a.d.Gradient,a.d.Design),a.mergeInto(a.d.RadialGradient,a.d.Design),a.xt(a.d.Pattern)&&a.mergeInto(a.d.Pattern,a.d.Design),a.Design.prototype.update=function(a,b){return this.makeGradient(a,b),this.sortStops(),this.applyStops(),this},a.Design.prototype.sortStops=function(){for(var b=this.get("color"),c=this.get("roll"),d=0,e=b.length;e>d;d++)b[d].stop+=c,a.isBetween(b[d].stop,0,1,!0)||(b[d].stop=b[d].stop>.5?b[d].stop-1:b[d].stop+1),b[d].stop<=0?b[d].stop=1e-6:b[d].stop>=1&&(b[d].stop=.999999);b.sort(function(a,b){return a.stop-b.stop}),this.set({color:b})},a.newAnimation=function(b){return new a.Animation(b)},a.newTween=function(b){return new a.Tween(b)},a.pushUnique(a.sectionlist,"animation"),a.pushUnique(a.nameslist,"animate"),a.pushUnique(a.nameslist,"animationnames"),a.doAnimation=!1,a.animationLoop=function(){for(var b=0,c=a.animate.length;c>b;b++)a.animate[b]&&a.animation[a.animate[b]].fn();a.doAnimation&&window.requestAnimFrame(function(){a.animationLoop()})},a.Animation=function(b){a.Base.call(this,b),b=a.safeObject(b);var c=a.isa(b.delay,"bool")?b.delay:!1;return this.fn=b.fn||function(){},a.animation[this.name]=this,a.pushUnique(a.animationnames,this.name),c||this.run(),this},a.Animation.prototype=Object.create(a.Base.prototype),a.Animation.prototype.type="Animation",a.Animation.prototype.classname="animationnames",a.d.Animation={fn:function(){}},a.mergeInto(a.d.Animation,a.d.Base),a.Animation.prototype.run=function(){return a.pushUnique(a.animate,this.name),!0},a.Animation.prototype.halt=function(){return a.removeItem(a.animate,this.name),!0},a.Animation.prototype.kill=function(){return delete a.animation[this.name],a.removeItem(a.animationnames,this.name),a.removeItem(a.animate,this.name),!0},a.Tween=function(b){return a.Base.call(this,b),b=a.safeObject(b),this.targets=a.isa(b.targets,"arr")?b.targets:a.xt(b.targets)?[b.targets]:[],this.currentTargets=[],this.initVals=[],this.start=a.isa(b.start,"obj")?b.start:{},this.engines=a.isa(b.engines,"obj")?b.engines:{},this.end=a.isa(b.end,"obj")?b.end:{},this.startTime=Date.now(),this.duration=b.duration||0,this.active=!1,this.reverse=b.reverse||!1,this.autoReverse=b.autoReverse||!1,this.autoReverseAndRun=b.autoReverseAndRun||!1,this.count=b.count||0,this.currentCount=0,this.onCommence=b.onCommence||{},this.onComplete=b.onComplete||{},this.nextTween=b.nextTween||"",this.killOnComplete=b.killOnComplete||!1,this.callback=a.isa(b.callback,"fn")?b.callback:!1,a.animation[this.name]=this,a.pushUnique(a.animationnames,this.name),this},a.Tween.prototype=Object.create(a.Base.prototype),a.Tween.prototype.type="Tween",a.Tween.prototype.classname="animationnames",a.d.Tween={targets:[],currentTargets:[],start:{},engines:{},end:{},onComplete:{},initVals:[],onCommence:{},startTime:0,duration:0,active:!1,reverse:!1,autoReverse:!1,callback:!1,autoReverseAndRun:!1,count:0,currentCount:0,killOnComplete:!1,nextTween:""},a.mergeInto(a.d.Tween,a.d.Base),a.Tween.prototype.fn=function(){var b,c,d=Date.now(),e=(d-this.startTime)/this.duration,f=Object.keys(this.end);if(this.active)if(1>e){for(var g=0,h=this.currentTargets.length;h>g;g++)if(b=this.currentTargets[g],a.xt(b)){c={};for(var i=0,j=f.length;j>i;i++)c[f[i]]=this.engine(this.initVals[g][f[i]].start,this.initVals[g][f[i]].change,e,this.engines[f[i]],this.reverse);b.set(c)}}else this.halt(),(this.autoReverse||this.autoReverseAndRun)&&(this.reverse=this.reverse?!1:!0),this.autoReverseAndRun?a.isa(this.currentCount,"num")?(this.currentCount--,this.currentCount>0?this.run():this.runComplete()):this.run():this.runComplete();return!0},a.Tween.prototype.engine=function(b,c,d,e){var f;switch(e){case"easeOut":return b+d*d*c;case"easeIn":return f=1-d,b+c+f*f*-c;case"easeOut3":return b+d*d*d*c;case"easeIn3":return f=1-d,b+c+f*f*f*-c;case"easeOut4":return b+d*d*d*d*c;case"easeIn4":return f=1-d,b+c+f*f*f*f*-c;case"easeOut5":return b+d*d*d*d*d*c;case"easeIn5":return f=1-d,b+c+f*f*f*f*f*-c;case"easeOutIn":return f=1-d,.5>d?b+d*d*c*2:b+c+f*f*-c*2;case"easeOutIn3":return f=1-d,.5>d?b+d*d*d*c*4:b+c+f*f*f*-c*4;case"easeOutIn4":return f=1-d,.5>d?b+d*d*d*d*c*8:b+c+f*f*f*f*-c*8;case"easeOutIn5":return f=1-d,.5>d?b+d*d*d*d*d*c*16:b+c+f*f*f*f*f*-c*16;case"out":return f=1-d,b+c+Math.cos(90*d*a.radian)*-c;case"in":return b+Math.sin(90*d*a.radian)*c;default:return b+d*c}},a.Tween.prototype.run=function(){var b,c,d,e;if(!this.active){c=[],e=Object.keys(this.end),this.currentCount=this.currentCount||this.count,this.currentTargets=[],this.initVals=[];for(var f=0,g=a.animationnames.length;g>f;f++)d=a.animation[a.animationnames[f]],"Tween"===d.type&&d.active&&d.name!==this.name&&c.push(d);for(var f=0,h=this.targets.length;h>f;f++){b=!0;for(var i=0,j=c.length;j>i;i++){for(var k=0,l=c[i].currentTargets.length;l>k;k++)if(this.targets[f].name===c[i].currentTargets[k].name){b=!1;break}if(!b)break}b&&this.currentTargets.push(this.targets[f])}if(this.currentTargets.length>0){for(var m=0,n=this.currentTargets.length;n>m;m++)if(a.xt(this.currentTargets[m])){this.currentTargets[m].set(this.onCommence),this.initVals.push({});for(var k=0,l=e.length;l>k;k++)this.initVals[m][e[k]]=a.xt(this.start[e[k]])?{start:this.reverse?this.end[e[k]]:this.start[e[k]],change:this.reverse?-(this.end[e[k]]-this.start[e[k]]):this.end[e[k]]-this.start[e[k]]}:{start:this.currentTargets[m].get([e[k]]),change:this.reverse?-this.end[e[k]]:this.end[e[k]]}}return this.startTime=Date.now(),a.pushUnique(a.animate,this.name),this.active=!0,!0}}return!1},a.Tween.prototype.runComplete=function(){for(var b=0,c=this.currentTargets.length;c>b;b++)a.xt(this.currentTargets[b])&&this.currentTargets[b].set(this.onComplete);return this.nextTween?a.xt(a.animation[this.nextTween])&&a.animation[this.nextTween].run():this.callback&&this.callback(),this.killOnComplete&&this.kill(),!0},a.Tween.prototype.halt=function(){return this.active=!1,a.removeItem(a.animate,this.name),!0},a.Tween.prototype.kill=function(){if(this.active)for(var b=0,c=this.currentTargets.length;c>b;b++)a.xt(this.currentTargets[b])&&this.currentTargets[b].set(this.onComplete);return a.removeItem(a.animate,this.name),a.removeItem(a.animationnames,this.name),delete a.animation[this.name],!0},a}(scrawl);