(function ($){
    "use strict";
    new wow().init();


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    $(".testimonial-carousel").owlCarousel({
        autoplay:true,
        smartspeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items:3
            }
        }
    });

})(jQuery);

