/**
 * The main entry point into the site. This file gets transpiled
 * and bundled using Webpack.
 */

 var mainSwiper = new Swiper ('.swiper-projects', {
   keyboardControl: true,
   hashnav: true,
   hashnavWatchState: false,
   nextButton: '.main-next',
   prevButton: '.main-prev', 
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
     loop: false
   });

  //  eval(cleanName + "Swiper.on('onReachEnd', function () { \
  //   console.log(mainSwiper); \
  //   console.log(mainSwiper.params.nextButton = '.'+name+'-next'); \
  //  })");

  eval(cleanName + "Swiper.on('onSlideChangeStart', function () { \
    var isBeginning = " + cleanName + "Swiper.isBeginning; \
    var isEnd = " + cleanName + "Swiper.isEnd; \
    var mPrevs = document.getElementsByClassName('m-prev'); \
    var mNexts = document.getElementsByClassName('m-next'); \
    if (isBeginning) { \
      for (i = 0; i < mPrevs.length; i++) { \
        mPrevs[i].classList.remove('main-hide'); \
      } \
      for (var i = 0; i < mNexts.length; i++ ) { \
        mNexts[i].classList.add('main-hide'); \
      } \
      console.log('first slide'); \
    } else if (isEnd){ \
      for (i = 0; i < mPrevs.length; i++) { \
        mPrevs[i].classList.add('main-hide'); \
      } \
      for (var i = 0; i < mNexts.length; i++) { \
        mNexts[i].classList.remove('main-hide'); \
      } \
      console.log('last slide'); \
    } else { \
      for (i = 0; i < mPrevs.length; i++) { \
        mPrevs[i].classList.add('main-hide'); \
      } \
      for (var i = 0; i < mNexts.length; i++) { \
        mNexts[i].classList.add('main-hide'); \
      } \
      console.log('middle slide'); \
    }\
  })");

  //
  // eval(cleanName + "Swiper.on('onSlidePrevStart', function () { \
  //   var test = " + cleanName + "Swiper.isBeginning; \
  //   if (test) { \
  //     mainSwiper.slidePrev(false); \
  //     resetAllPr(); \
  //     console.log(test); \
  //   } \
  // })");
}

mainSwiper.on('onSlidePrevStart', function() {
  resetAllPr();
})
mainSwiper.on('onSlideNextStart', function() {
  resetAllNe();
  console.log('nextslide');
})

// document.onclick = function(event) {
//   var el = event.target;
//
//   var name = el.classList[1]
//   var cleanName = name.replace(/-/g,"");
//   cleanName = cleanName.replace(/prev/g,"");
//   cleanName = cleanName.replace(/next/g,"");
//
//   if (el.classList.contains('swiper-button-disabled')) {
//     eval("console.log(" + cleanName + "Swiper.isBeginning)");
//     eval("console.log(" + cleanName + "Swiper.isEnd)");
//     console.log("---clicked---");
//   }
// }


var resetAllPr = function() {
  var main = document.getElementsByClassName('swiper-projects');
  var eachProj = main[0].children[0].children;
  for (var i = 0; i < eachProj.length; i++) {
     var classes = eachProj[i].children[0].classList;
     var name = classes[0]
     var cleanName = name.replace(/-/g,"");
     var le = eval( cleanName + "Swiper.slides.length" );
     eval(cleanName + "Swiper.slideTo(" + le + ",0)" );
   }
}

var resetAllNe = function() {
  var main = document.getElementsByClassName('swiper-projects');
  var eachProj = main[0].children[0].children;
  for (var i = 0; i < eachProj.length; i++) {
     var classes = eachProj[i].children[0].classList;
     var name = classes[0]
     var cleanName = name.replace(/-/g,"");
     eval(cleanName + "Swiper.slideTo(0,0)" );
   }
}