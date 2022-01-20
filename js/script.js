
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

function pizza(toppings, size){
  this.toppings =toppings,
  this. size=size
}
pizza.prototype.toppingsBasedAmount=function(){
  if(this.toppings.length!=0){
    var toppingsPrice=this.toppings.length*3;
    return toppingsPrice;
  }else{
    alert("Please choose your Toppings")
  }
}
pizza.prototype.sizeBasedAMount=function(){
  if(this.size==="small"){
    return 500;
  }else if (this.size==="Medium"){
    return 800;
  }else if (this.size==="Large"){
    return 1100;
  }else {
    alert ("Please select your preferred size")
  }
}
pizza.prototype.calculateCost=function(toppingsBasedAmount,sizeBasedAMount){
  var totalCost=toppingsBasedAmount + sizeBasedAMount;
  $("#displayTotalCost").html(totalCost);
}
var pizza;
$(document).ready(function(){
  $("#onlineForm").submit(function(event){
    event.prventDefault();
    $("#show-Bill").show();
    var inputtedName=$("#name").val();
    var inputtednumToppings=parseInt($("#numToppings").val());
    var toppingsArray=[];
    $("input:checkbox[name=toppingsCheck]:checked").each(function(){
      var inputtedToppings =$(this).val();
      toppingsArray.push(inputtedToppings);
      $("#displayToppings").text(inputtedToppings + ",");
    });
  });
});
