$(document).ready(function(){
  //Hide Modal
  $('#modalForIcon1, #modalForIcon2, #modalForIcon3').hide();
    // Open Modal for Icon 1
    $("#icon1").click(function(){
      $("#modalForIcon1").modal();
    });
    // Open Modal for Icon 2
    $("#icon2").click(function(){
      $("#modalForIcon2").modal();
    });
    // Open Modal for Icon 3
    $("#icon3").click(function(){
      $("#modalForIcon3").modal();
    });
});