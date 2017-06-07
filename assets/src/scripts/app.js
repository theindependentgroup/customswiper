/**
 * The main entry point into the site. This file gets transpiled
 * and bundled using Webpack.
 */

var mainSwiper = new Swiper ('.swiper-projects', {
  direction: 'vertical',
  //  nextButton: '.swiper-button-next',
  //  prevButton: '.swiper-button-prev',
  keyboardControl: true,
  hashnav: true,
  hashnavWatchState: true
})


// iterate through each project and initiate Swipers
var main = document.getElementsByClassName('swiper-projects');
var eachProj = main[0].children[0].children;
for (var i = 0; i < eachProj.length; i++) {
   var classes = eachProj[i].children[0].classList;
   var name = classes[0]
   var cleanName = name.replace(/-/g,"");

   window[cleanName + "Swiper"] = new Swiper ('.'+name, {
     keyboardControl: true,
     pagination: '.swiper-pagination',
     paginationType: 'fraction',
     loop: true
   });
   //console.log(cleanName);
   //console.log(name);
   console.log( eval(cleanName + "Swiper") );

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
