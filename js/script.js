
var carouselGallery = document.querySelector('#carouselGallery')
var carousel = new bootstrap.carousel(carouselGallery, {
  interval: 2000,
  wrap: false
})
var carouselGallery = document.getElementById('carouselGallery')
carouselGallery.addEventListener('slide.bs.carousel', function () {
  // do something...
})


