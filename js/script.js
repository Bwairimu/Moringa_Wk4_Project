$(document).ready(function(){
	var slideNum = $('.carousel-inner .carousel-item').length;
	var randomNum = Math.floor(Math.random() * slideNum) + 1;
	var randomNumIndex = randomNum - 1;
	$('.carousel').carousel( randomNumIndex );
	$('.carousel-item').removeClass('transparent');
});


function pizza(toppings, size){
  this.toppings =toppings;
  this.size=size;
  this.calculateCost=function(){
    return this.toppings*this.size;
  };
}

pizza.prototype.toppingsBasedAmount=function(){
  if(this.toppings.length!=0){
    var toppingsPrice=this.toppings+ "" + length;
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
  return this.totalCost+""+ this.toppingsBasedAmount+ "" +this.sizeBasedAMount;
}

$(document).ready(function(){
  $("#onlineForm").submit(function(event){
    event.preventDefault();

    $("#show-Bill").show();
    var inputtedName=$("input#name").val();
    var inputtednumToppings=$("input#numToppings").val();
    var inputtedpizzaSize=$("input#pizzaSize").val();
    var newBill =new pizza(inputtedName,inputtednumToppings,InputtedpizzaSize);
     
    alert(newBill);
  });

  $('#cancel').click(function(){
    location.reload();
  });

  var inputtednumToppings=parseInt($("#numToppings").val());
    var toppingsArray=[];
    $("input:checkbox[name=toppingsCheck]:checked").each(function(){
      var inputtedToppings =$(this).val();
      toppingsArray.push(inputtedToppings);
      $("#displayToppings").text(inputtedToppings + ",");
    });
  });
});
var inputtedSize=$("input:radio[name=pizzaSize]:checked").val();
$("#displayName").text(inputtedName);
$("#displaySize").text(inputtedSize);

pizza= new pizza(toppingsArray, inputtedSize);

var toppingBasedAmt=pizza.toppingsBasedAmount();
var sizeBasedAmt=pizza.sizeBasedAMount();
pizza.calculateCost(toppingBasedAmt,sizeBasedAmt);
