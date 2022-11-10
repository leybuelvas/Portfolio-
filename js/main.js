$(document).ready(function () {
  "use strict";
  function e(e) {
    if ($(".home").length) {
      $(document).scrollTop();
      $("nav ul li a").each(function () {
        var e = $(this);
        $(e.attr("href"));
      });
    }
  }
  $(document).on("scroll", e),
    $('a[href^="#"]').on("click", function (o) {
      o.preventDefault(),
        $(document).off("scroll"),
        $("a").each(function () {
          $(this).removeClass("active"),
            $(window).width() < 768 && $(".nav-menu").slideUp();
        }),
        $(this).addClass("active");
      var i = this.hash;
      (i = $(i)),
        $("html, body")
          .stop()
          .animate(
            { scrollTop: i.offset().top - 80 },
            500,
            "swing",
            function () {
              (window.location.hash = i.selector), $(document).on("scroll", e);
            }
          );
    }),
    $(window).scroll(function () {
      $(window).scrollTop() > 200
        ? ($("#main-nav, #main-nav-subpage").slideDown(700),
          $("#main-nav-subpage").removeClass("subpage-nav"))
        : ($("#main-nav").slideUp(700),
          $("#main-nav-subpage").hide(),
          $("#main-nav-subpage").addClass("subpage-nav"));
    }),
    $(".responsive").on("click", function (e) {
      $(".nav-menu").slideToggle();
    });
  var o = $(".typed");
  $(function () {
    o.typed({
      strings: ["Leyci Buelvas", "Software Developer",],
      typeSpeed: 100,
      loop: !0,
    });
  }),
    $(".services-carousel").owlCarousel({
      autoplay: !0,
      loop: !0,
      margin: 20,
      dots: !0,
      nav: !1,
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } },
    });
  $(".popup-img").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-with-zoom",
    gallery: { enabled: !0 },
    zoom: {
      enabled: !0,
      duration: 300,
      easing: "ease-in-out",
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
  });
}),
  $(window).load(function () {
    var e = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-thumbnail",
      layoutMode: "fitRows",
    });
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active"),
        $(this).addClass("filter-active"),
        e.isotope({ filter: $(this).data("filter") });
    });
  });
