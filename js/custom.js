$(function () {

    // slick part start
    $('.slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 200,
    });

    $('.rating_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: ".next",
        prevArrow: ".prev",
    });

    $('.selling_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: ".right",
        prevArrow: ".left",
    });

    // slick part end

    // ----------------------------------------------------
    // first box type part start

    var typed = new Typed('.typed', {
        strings: ['Live Heltly', 'Frutis'],
        loop: true,
        typeSpeed: 100
    });
    // firtst box type part end

    // ----------------------------------------------------
    // secend box type part start

    var typed = new Typed('.secend_box', {
        strings: ['Fresh vegetable', 'Fruit basket'],
        loop: true,
        typeSpeed: 100
    });
    // secend box type part end

    // ----------------------------------------------------
    // counter part start

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    // counter part end

    // ----------------------------------------------------
    // testimonial part start

    $('.testimonial').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        nextArrow: ".next",
        prevArrow: ".prev",
    });
    // testimonial part end

    // ----------------------------------------------------
    // back to top part start


    $(".back_to_top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000)
    })

    $(window).scroll(function () {
        var scrolling = $(window).scrollTop()

        if (scrolling > 10) {
            $(".back_to_top").fadeIn(500);
        } else {
            $(".back_to_top").fadeOut(500);
        }
    })
    // back to top part end

    // ----------------------------------------------------
})