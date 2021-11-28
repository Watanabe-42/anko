$(function () {
    setTimeout(function () {
        $('.one-time').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            adaptiveHeight: true,
            fade: true,
            infinite: true,
            speed: 1500,

            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
        });
    }, 500);
});


// Tasteページスライドショー
$('.center').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    arrows: false,
    centerMode: true,
    centerPadding: '60px',

    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});

// Menuページスライドショー
$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    // スライドのスピード
    speed: 1800,

    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});


// menu viewmoreボタン
$(function () {
    $('.readmore').click(function () {
        $('div').removeClass('hide-text');
        $(this).css('display', 'none');
    });
});


// お問い合わせ　閉じるボタン
$(function () {
    $('#contact').click(function () {
        $('div').removeClass('kakusu');
    });
});

$(function () {
    $('#otoiawaseru').click(function () {
        $('.nakami').css('display', 'none');
        $('.nakami-next').css('display', 'inline');
    });
});

// ハンバーガーメニュー
$(function () {
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
    });
});

$(function () {
    $('.hamburger-menu').addClass('kakusu');
    $('.openbtn1').click(function () {
        if ($(this).hasClass('active')) {
            $('.hamburger-menu').removeClass('kakusu');
        } else {
            $('.hamburger-menu').addClass('kakusu');
        }
    });
});
