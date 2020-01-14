$(document).ready(function(){
  
  $("#cat").click(function()
  { var meow="Meow!"; 
    alert(meow);
  });

  $("#dog").click(function()
  { var woof="Woof!"; 
    alert(woof);
  });

  var bear= "#bear";
  $(".animal").click(function(){
    $("h2").after()
    $(bear).slideToggle();
    bear = "#wolf"
  
    
  });

  // $(".animal").click(function(){
  //   $("#bear").after()
  //   $("#wolf").slideToggle();

  // });

});