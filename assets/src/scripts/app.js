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
     keyboardControl: true
   });
   console.log(name);
   console.log(window[cleanName + "Swiper"]);

  //  var mainSwiper = new Swiper ('.swiper-projects', {
  //    direction: 'vertical',
  //    //  nextButton: '.swiper-button-next',
  //    //  prevButton: '.swiper-button-prev',
  //    keyboardControl: true,
  //    hashnav: true,
  //    hashnavWatchState: true
  // })

}
