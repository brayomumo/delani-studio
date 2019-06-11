$(document).ready(function () {
    $(".hidden p").hide();
    $("#design").click(function () {
        $("#design p").toggle();
        $("#design img").toggle();
    })
    $("#development").click(function () {
        $("#development p").toggle();
        $("#development img").toggle();
    })
    $("#management").click(function () {
        $("#management p").toggle();
        $("#management img").toggle();

    })
    $("#contact").submit(function (e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("thank you " + name + " \n message submitted successfully")
        }
    });
    $(".padd").hover(function() {
        $(this).children(".card-1").fadeToggle(1000, "linear");
        
       });

    // // $(document).ready(function() {
    // $('#text1').hide();
    // $('#work1').animate({
    //     opacity: 1

    // });

    // $('#work1').hover(function () {
    //     $(this).stop().animate({ opacity: 4 }, 200);
    //     $('#text1').fadeIn();

    // }, function () {
    //     $(this).stop().animate({ opacity: 1 }, 500)
    //     $('#text1').fadeOut();
    // });


    // // });
})