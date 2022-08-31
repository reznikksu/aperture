$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoWidth: true,
    items: 5,
    nav: true,
    navText: ['<', '>'],
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