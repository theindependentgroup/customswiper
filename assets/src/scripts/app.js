/**
 * The main entry point into the site. This file gets transpiled
 * and bundled using Webpack.
 */

var mainSwiper = new Swiper ('.swiper-projects', {
  keyboardControl: true,
  hashnav: true,
  hashnavWatchState: false
})


// iterate through each project and initiate Swipers
var main = document.getElementsByClassName('swiper-projects');
var eachProj = main[0].children[0].children;
for (var i = 0; i < eachProj.length; i++) {
   var classes = eachProj[i].children[0].classList;
   var name = classes[0]
   var cleanName = name.replace(/-/g,"");

   window[cleanName + "Swiper"] = new Swiper ('.'+name, {
     direction: 'vertical',
     keyboardControl: true,
     nextButton: '.'+name+'-next',
     prevButton: '.'+name+'-prev',
     pagination: '.swiper-pagination',
     paginationType: 'fraction',
     loop: true
   });
   //console.log(cleanName);
   //console.log(name);
   console.log( '.'+name+'-next' );

  //  eval(cleanName + "Swiper.on('onSlideNextStart', function () { \
  //    var test = " + cleanName + "Swiper.isEnd; \
  //    console.log(test); \
  //  })");
  //
  eval(cleanName + "Swiper.on('onSlideNextStart', function () { \
    var test = " + cleanName + "Swiper.isEnd; \
    if (test) { \
      mainSwiper.slideNext(false); \
      resetAllNe(); \
      console.log(test); \
    } \
  })");

  eval(cleanName + "Swiper.on('onSlidePrevStart', function () { \
    var test = " + cleanName + "Swiper.isBeginning; \
    if (test) { \
      mainSwiper.slidePrev(false); \
      resetAllPr(); \
      console.log(test); \
    } \
  })");

  // window[cleanName + "Swiper"].on('onSlideNextStart', function () {
  //   var test = window[cleanName + "Swiper"].container;
  //   console.log(test);
  //  });
}


var resetAllPr = function() {
  var main = document.getElementsByClassName('swiper-projects');
  var eachProj = main[0].children[0].children;
  for (var i = 0; i < eachProj.length; i++) {
     var classes = eachProj[i].children[0].classList;
     var name = classes[0]
     var cleanName = name.replace(/-/g,"");

     eval(cleanName + "Swiper.slideTo(0,1,0)" );

   }
}

var resetAllNe = function() {
  var main = document.getElementsByClassName('swiper-projects');
  var eachProj = main[0].children[0].children;
  for (var i = 0; i < eachProj.length; i++) {
     var classes = eachProj[i].children[0].classList;
     var name = classes[0]
     var cleanName = name.replace(/-/g,"");

     eval(cleanName + "Swiper.slideTo(1,1,0)" );

   }
}


var hoverBoxes = document.getElementsByClassName('hover-box');
var hoverTargets = document.getElementsByClassName('hover-target');

for (var i = 0; i < hoverBoxes.length; i++) {
  hoverBoxes[i].addEventListener('mouseenter', function() {
    console.log('in!');
    for (var j = 0; j < hoverTargets.length; j++) {
      hoverTargets[j].classList.remove('o-0');
    }
  });
  hoverBoxes[i].addEventListener('mouseleave', function() {
    console.log('out!');
    for (var j = 0; j < hoverTargets.length; j++) {
      hoverTargets[j].classList.add('o-0');
    }
  });
}