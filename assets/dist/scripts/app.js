!function(e){function n(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r={};n.m=e,n.c=r,n.i=function(e){return e},n.d=function(e,r,a){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=1)}([function(module,exports,__webpack_require__){"use strict";for(var mainSwiper=new Swiper(".swiper-projects",{direction:"vertical",keyboardControl:!0,hashnav:!0,hashnavWatchState:!1}),main=document.getElementsByClassName("swiper-projects"),eachProj=main[0].children[0].children,i=0;i<eachProj.length;i++){var classes=eachProj[i].children[0].classList,name=classes[0],cleanName=name.replace(/-/g,"");window[cleanName+"Swiper"]=new Swiper("."+name,{keyboardControl:!0,nextButton:"."+name+"-next",prevButton:"."+name+"-prev",pagination:".swiper-pagination",paginationType:"fraction",loop:!0}),console.log("."+name+"-next"),eval(cleanName+"Swiper.on('onSlideNextStart', function () {     var test = "+cleanName+"Swiper.isEnd;     if (test) {       mainSwiper.slideNext(false);       resetAllNe();       console.log(test);     }   })"),eval(cleanName+"Swiper.on('onSlidePrevStart', function () {     var test = "+cleanName+"Swiper.isBeginning;     if (test) {       mainSwiper.slidePrev(false);       resetAllPr();       console.log(test);     }   })")}for(var resetAllPr=function resetAllPr(){for(var main=document.getElementsByClassName("swiper-projects"),eachProj=main[0].children[0].children,i=0;i<eachProj.length;i++){var classes=eachProj[i].children[0].classList,name=classes[0],cleanName=name.replace(/-/g,"");eval(cleanName+"Swiper.slideTo(0,1,0)")}},resetAllNe=function resetAllNe(){for(var main=document.getElementsByClassName("swiper-projects"),eachProj=main[0].children[0].children,i=0;i<eachProj.length;i++){var classes=eachProj[i].children[0].classList,name=classes[0],cleanName=name.replace(/-/g,"");eval(cleanName+"Swiper.slideTo(1,1,0)")}},hoverBoxes=document.getElementsByClassName("hover-box"),hoverTargets=document.getElementsByClassName("hover-target"),i=0;i<hoverBoxes.length;i++)hoverBoxes[i].addEventListener("mouseenter",function(){console.log("in!");for(var e=0;e<hoverTargets.length;e++)hoverTargets[e].classList.remove("o-0")}),hoverBoxes[i].addEventListener("mouseleave",function(){console.log("out!");for(var e=0;e<hoverTargets.length;e++)hoverTargets[e].classList.add("o-0")})},function(e,n,r){e.exports=r(0)}]);