$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoWidth: false,
    items: 5,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }

  })
});