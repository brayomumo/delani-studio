$(document).ready (function(){
    $(".hidden p").hide();
     $("#design").click(function(){
         $("#design p").toggle();
         $("#design img").toggle();
     })
     $("#development").click(function(){
        $("#development p").toggle();
        $("#development img").toggle();
    })
    $("#management").click(function(){
        $("#management p").toggle();
        $("#management img").toggle();
    })
})