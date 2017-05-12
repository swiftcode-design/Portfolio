const express = require('express');

const app = module.exports = express();
app.use(express.static(__dirname + '/dist'));

let port = 8080;

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
// $(document).ready(function(){
//
//
//     $(".top-nav-button").on('click', function(){
//         $("body").animate({
//           scrollTop: $('#bio-anchor').offset().top
//         }, 500);
//     });
//     $("#sticky-nav-3").on('click', function(){
//         $("body").animate({
//           scrollTop: $('#skills-anchor').offset().top
//         }, 500);
//     });
//     $("#sticky-nav-4").on('click', function(){
//         $("body").animate({
//           scrollTop: $('#projects-anchor').offset().top
//         }, 500);
//     });
//     $("#sticky-nav-5").on('click', function(){
//         $("body").animate({
//           scrollTop: $('#contacts-anchor').offset().top
//         }, 500);
//     });
//     $("#sticky-nav-2").on('click', function(){
//         $("body").animate({
//           scrollTop: $('#bio-anchor').offset().top
//         }, 500);
//     });
//
//     $(window).scroll(function(){
//       // if($(window).width() < 1200){
//       //   // $('.sticky-nav').css("right", "50px");
//       //   console.log(window.width());
//       // }
//
//       if($(this).scrollTop() > $('#bio-anchor').offset().top -10){
//         $(".sticky-nav-div").addClass("nav-displace");
//         $(".sticky-nav").addClass("nav-displace");
//         $('#sticky-nav-2').addClass('highlight');
//         $('.city-bg').css('transform', `translateY(${$(window).scrollTop()/ 100}%)`);
//       }
//       if($(this).scrollTop() < $('#bio-anchor').offset().top){
//         $(".sticky-nav").removeClass("nav-displace");
//         $(".sticky-nav-div").removeClass("nav-displace");
//         $('#sticky-nav-2').removeClass('highlight');
//       }
//
//       if($(this).scrollTop() > $('#skills-anchor').offset().top -70){
//         $('.sticky-nav').css("right", "20px");
//         $('#sticky-nav-3').addClass('highlight');
//         $('#sticky-nav-2').removeClass('highlight');
//       }
//       if($(this).scrollTop() < $('#skills-anchor').offset().top - 70){
//         $('.sticky-nav').css("right", "150px");
//         $('#sticky-nav-3').removeClass('highlight');
//       }
//
//       if($(this).scrollTop() > $('#projects-anchor').offset().top -70){
//         $('#sticky-nav-4').addClass('highlight', '#018080');
//         $('#sticky-nav-3').removeClass('highlight');
//       }
//       if($(this).scrollTop() < $('#projects-anchor').offset().top - 70){
//         $('#sticky-nav-4').removeClass('highlight', '#018080');
//       }
//
//       if($(this).scrollTop() > $('#contacts-anchor').offset().top -70){
//         $('#sticky-nav-5').addClass('highlight', '#018080');
//         $('#sticky-nav-4').removeClass('highlight');
//       }
//       if($(this).scrollTop() < $('#contacts-anchor').offset().top - 70){
//         $('#sticky-nav-5').removeClass('highlight', '#018080');
//       }
//
//       if($(this).scrollTop() + $(window).height() == $(document).height()) {
//         $('#sticky-nav-4').removeClass('highlight');
//         $('#sticky-nav-5').addClass('highlight', '#018080');
//       }
//
//       if($(window).width() < 1104){
//         $('.sticky-nav').css("right", "50px");
//         console.log("hello");
//       }
//       if($(window).width() >= 1104){
//         if($(this).scrollTop() < $('#bio-anchor').offset().top - 70){
//           $('.sticky-nav').css("right", "150px");
//         }
//         // $('.sticky-nav').css("right", "150px");
//         console.log("hello");
//       }
//
//     });
//     $(window).resize(function(){
//       if($(this).width() < 1200){
//         $('.sticky-nav').css("right", "50px");
//       }
//       if($(this).width() >= 1200){
//         $('.sticky-nav').css("right", "150px");
//       }
//     })
// });
