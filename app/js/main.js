AOS.init({
  startEvent: "DOMContentLoaded",
  offset: 0,
  duration: 1200,
  delay: "200",
  easing: "ease",
  once: true,
  mirror: true,
  disable: function () {
    return $(window).width() <= 768;
  },
});

$(".gallery").each(function () {
  const $this = $(this);
  const $item = $this.find(".gItem");
  $(function () {
    $this.lightGallery({
      selector: $item,
      thumbnail: true,
      zoom: true,
    });
  });
});

SmoothScroll({
  // Scrolling Core
  animationTime: 800, // [ms]
  stepSize: 100, // [px]

  // Acceleration
  accelerationDelta: 50, // 50
  accelerationMax: 3, // 3

  // Keyboard Settings
  keyboardSupport: true, // option
  arrowScroll: 50, // [px]

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Other
  touchpadSupport: false, // ignore touchpad by default
  fixedBackground: true,
  excluded: "",
});
$(document).ready(function () {
  var $item = 0;
  $(".work-hero .work-item").click(function () {
    $item = $(this).index();
    $(".work-hero .work-item").removeClass("on");
    $(".work-hero .work-item").eq($item).addClass("on");
  });
});

function logMess(mess) {
  console.log(mess);
}

window.logMess = logMess;
// window.functionSlider = functionSlider;
