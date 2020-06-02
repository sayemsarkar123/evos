$(function() {
  "use strict";

  // Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]',{
      speed: 900,
      speedAsDuration: true
  });

  // Sticky Header
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('header').addClass('my-nav');
      } else {
          $('header').removeClass('my-nav');
      }
  });

  var scene = document.getElementById('main');
  var parallaxInstance = new Parallax(scene);

  //  Circle Progress
  $('#ui-ux').circleProgress({
      value: 0.73,
      size: 193,
      startAngle: 4.7,
      thickness: 8,
      emptyFill: "#15154c",
      fill: {
          color: "#6928d9"
      }
  }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentile').html(Math.round(73 * progress) + '<i>%</i>');
  });

  var circles = $('#ui-ux');

  circles.appear({
      force_process: true
  });

  circles.on('appear', function() {
      var circle = $(this);
      if (!circle.data('inited')) {
          circle.circleProgress({
              value: $(this).data('value'),
          });
          circle.data('inited', true);
      }
  });

  $('#development').circleProgress({
      value: 0.85,
      size: 193,
      startAngle: 4.7,
      thickness: 8,
      emptyFill: "#15154c",
      fill: {
          color: "#1573ff"
      }
  }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentile').html(Math.round(85 * progress) + '<i>%</i>');
  });

  var circles = $('#development');

  circles.appear({
      force_process: true
  });

  circles.on('appear', function() {
      var circle = $(this);
      if (!circle.data('inited')) {
          circle.circleProgress({
              value: $(this).data('value'),
          });
          circle.data('inited', true);
      }
  });

  $('#branding').circleProgress({
      value: 0.48,
      size: 193,
      startAngle: 4.7,
      thickness: 8,
      emptyFill: "#15154c",
      fill: {
          color: "#16ffdb"
      }
  }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentile').html(Math.round(48 * progress) + '<i>%</i>');
  });

  var circles = $('#branding');

  circles.appear({
      force_process: true
  });

  circles.on('appear', function() {
      var circle = $(this);
      if (!circle.data('inited')) {
          circle.circleProgress({
              value: $(this).data('value'),
          });
          circle.data('inited', true);
      }
  });

  $('#product').circleProgress({
      value: 0.69,
      size: 193,
      startAngle: 4.7,
      thickness: 8,
      emptyFill: "#15154c",
      fill: {
          color: "#baff26"
      }
  }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentile').html(Math.round(69 * progress) + '<i>%</i>');
  });

  var circles = $('#product');

  circles.appear({
      force_process: true
  });

  circles.on('appear', function() {
      var circle = $(this);
      if (!circle.data('inited')) {
          circle.circleProgress({
              value: $(this).data('value'),
          });
          circle.data('inited', true);
      }
  });

  // slick Slider
  /* $('.brand__item').slick({
arrows: false,
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
}); */

  /* $('.brand__item').owlCarousel({
loop:true,
margin:10,
nav:false,
dots:false,
dotsEach:false,
responsive:{
0:{
items:3
},
600:{
items:3
},
1000:{
items:5
}
}
}); */

  var slider = tns({
      container: '.brand__item',
      items: 5,
      gutter: 55,
      autoplayTimeout: 4000,
      speed: 400,
      swipeAngle: false,
      slideBy: 1,
      controls: false,
      autoplayButtonOutput: false,
      nav: false,
      autoplay: true,
      mouseDrag: true,
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }
  });

  // init Isotope
  var $grid = $('.grid').isotope({// options
  });
  // filter items on button click
  $('.portfolio-menu').on('click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
          filter: filterValue
      });
  });

  // activeClass JS
  $('.portfolio-menu li').on('click', function() {
      $('li').removeClass('active');
      $(this).addClass('active')
  });

  var typed = new Typed('.element',{
      strings: ["Designer.", "Founder."],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      cursorChar: ""
  });

  $('.teams-card').tilt({
      maxTilt: 10,
  });

  $('[data-fancybox="images"]').fancybox({
      animationEffect: "zoom-in-out",
      transitionEffect: "slide",
  });

  // Off-Canvas Menu
  $(".menu img").on('click', function() {
      $(".off-canvas-menu").addClass("active");
      $(".off-canvas-menu-layer").addClass("active");
  });

  $(".off-canvas-close, .off-canvas-menu-layer").on('click', function() {
      $(".off-canvas-menu").removeClass("active");
      $(".off-canvas-menu-layer").removeClass("active");
  });

  $(".experience").hover3d({
      selector: ".shape__9",
  });
  $(".experience").hover3d({
      selector: ".shape__10",
      sensitivity: 30
  });
  $(".experience").hover3d({
      selector: ".shape__11",
  });
  $(".contacts").hover3d({
      selector: ".shape__12",
      sensitivity: 30
  });
  $(".contacts").hover3d({
      selector: ".shape__13",
  });
  $(".blog").hover3d({
      selector: ".shape__14",
      sensitivity: 30
  });

  new WOW().init();

})(jQuery);
