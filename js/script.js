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
    $("div.input-error").hide();
    $("div.input-success").hide();
   
        $("div.input-error").hide();
        $("div.input-success").hide();
        $("#submit").click(function(){
            $(".input-success").toogle();
        })
    // $("btn submit").click(function(){
    //     $(".input-success").toogle();
    // })
    
    //  $("#submit").click(function(){
    //     // // if($("name").val().length>0){
    //     //     $("div.input-success").show();
    //     //     $("div.input-success").hide();
    //     // //  }else {
    //     //     // $("div.input-error").show();
    //     //     // $("div.input-error").hide();
    //     // // }

    //  })
    
})