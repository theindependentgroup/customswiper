/**
 * The main entry point into the site. This file gets transpiled
 * and bundled using Webpack.
 */

 var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
   spaceBetween: 30,
   hashnav: true,
   hashnavWatchState: true
 })
