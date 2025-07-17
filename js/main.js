(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 50
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }

            // Close navbar on mobile after clicking a link
            if ($(window).width() < 768) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
    
    // Typed Initiate
    if ($('.header .typed-text').length == 1) {
        var typed_strings = $('.header .typed-text').text().split(', ');
        var typed = new Typed('.header h2', {
            strings: typed_strings,
            typeSpeed: 50, // Speed of typing (ms per character)
            backSpeed: 20, // Speed of backspacing (ms per character)
            backDelay: 1000, // Delay before backspacing (1 second)
            startDelay: 500, // Delay before starting (0.5 second)
            loop: true, // Loop through all strings
            smartBackspace: true // Backspace only typed characters
        });
    }
    
    // Skills animation
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);
