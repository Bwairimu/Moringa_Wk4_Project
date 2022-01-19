
$(document).ready(function(){
  // Activate Carousel
  $("#carouselGallery").carousel();
  // Enable Carousel Indicators
  $(".carousel-item1").click(function(){
    $("#carouselGallery").carousel(0);
  });
  $(".carousel-item2").click(function(){
    $("#carouselGallery").carousel(1);
  });
  $(".carousel-item3").click(function(){
    $("#carouselGallery").carousel(2);
  });
  $(".carousel-item4").click(function(){
    $("#carouselGallery").carousel(3);
  });
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#carouselGallery").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselGallery").carousel("next");
  });
});

