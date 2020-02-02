$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function(){
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

$(".contactBtn").on("click", function(){
    $(this).fadeOut(200);
    $(this).fadeIn(200);
    $(this).animate({
        opacity: '.5'
    })
})
$(".resetBtn").on("click", function(){
    $("textarea").val("");
    $(this).fadeOut(200);
    $(this).fadeIn(500);
})
$(".contactBtn").mouseenter(function(){
    $(this).text("Submit >>");
})
$(".contactBtn").mouseleave(function(){
    $(this).text("Submit");
})
