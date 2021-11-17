jQuery(window).on('scroll', function () {
    if (300 < jQuery(this).scrollTop()) {
        jQuery('.inner').addClass('change-color');
    } else {
        jQuery('.inner').removeClass('change-color');
    }
});