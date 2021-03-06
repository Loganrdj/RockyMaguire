$(document).ready(function(){
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
    $(".contactBtn").mouseenter(function(){
        $(this).text("Submit >>");
    })
    $(".contactBtn").mouseleave(function(){
        $(this).text("Submit");
    })

    $(".animatedImg").mouseenter(function(){ 
        $(this).toggleClass('classWithShadow');
        $(this).animate({ top: "-=2px" }, {duration: 200, queue: false});
        $(this).animate({ left: "-=2px" }, {duration: 200, queue: false});
    });
    $(".animatedImg").mouseleave(function(){ 
        $(this).toggleClass('classWithShadow');
        $(this).animate({ top: "+=2px" }, {duration: 200, queue: false});
        $(this).animate({ left: "+=2px" }, {duration: 200, queue: false});
    });

    // Testing


    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
    });

    // Right: 39
    // Left: 37

    

    $('#prev').bind('click', function (event) {
        event.preventDefault();
        carousel.prev();
        return false
    });

    


    $('#next').bind('click', function (event) {
        event.preventDefault();
        carousel.next();
        return false;
    });


    $("#carousel").waterwheelCarousel({
        // number tweeks to change apperance
        startingItem:               0,   // item to place in the center of the carousel. Set to 0 for auto
        separation:                 175, // 175 distance between items in carousel
        separationMultiplier:       .85, // .85 multipled by separation distance to increase/decrease distance for each additional item
        horizonOffset:              0,   // offset each item from the "horizon" by this amount (causes arching)
        horizonOffsetMultiplier:    1,   // multipled by horizon offset to increase/decrease offset for each additional item
        sizeMultiplier:             0.7, // determines how drastically the size of each item changes
        opacityMultiplier:          0.8, // determines how drastically the opacity of each item changes
        horizon:                    0,   // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto
        flankingItems:              4,   // the number of items visible on either side of the center                  
    
        // animation
        speed:                      350,      // speed in milliseconds it will take to rotate from one to the next
        animationEasing:            'linear', // the easing effect to use when animating
        quickerForFurther:          true,     // set to true to make animations faster when clicking an item that is far away from the center
        edgeFadeEnabled:            false,    // when true, items fade off into nothingness when reaching the edge. false to have them move behind the center image
    
        // misc
        linkHandling:               2,                 // 1 to disable all (used for facebox), 2 to disable all but center (to link images out)
        autoPlay:                   0,                 // indicate the speed in milliseconds to wait before autorotating. 0 to turn off. Can be negative
        orientation:                'horizontal',      // indicate if the carousel should be 'horizontal' or 'vertical'
        activeClassName:            'carousel-center', // the name of the class given to the current item in the center
        keyboardNav:                true,             // set to true to move the carousel with the arrow keys
        keyboardNavOverride:        true,              // set to true to override the normal functionality of the arrow keys (prevents scrolling)
        imageNav:                   true,              // clicking a non-center image will rotate that image to the center
    
        // preloader
        preloadImages:              true,  // disable/enable the image preloader. 
        forcedImageWidth:           800,     // specify width of all images; otherwise the carousel tries to calculate it
        forcedImageHeight:          600,     // specify height of all images; otherwise the carousel tries to calculate it
    
        // callback functions
        movingToCenter:             $.noop, // fired when an item is about to move to the center position
        movedToCenter:              $.noop, // fired when an item has finished moving to the center
        clickedCenter:              $.noop, // fired when the center item has been clicked
        movingFromCenter:           $.noop, // fired when an item is about to leave the center position
        movedFromCenter:            $.noop  // fired when an item has finished moving from the center
    });
});