$(document).ready(function (){
    $(".sns_list li a").on('mouseenter', function () {
        $(this).css({transform: 'rotate(360deg) scale(1.4)', transition: 'all .5s ease-in-out'});
    });
    $(".sns_list li a").on('mouseleave', function () {
        $(this).css({transform: 'rotate(0deg) scale(1)'});
    });

    $(".project a").on('mouseenter', function () {
        $(this).addClass("mHover");
    });
    $(".project a").on('mouseleave', function () {
        $(this).removeClass("mHover");
    });

    $(window).on('scroll', function() {
        var scrollT = $(this).scrollTop();
        if (scrollT > 500) $('.btn_top').addClass('view');
        else $('.btn_top').removeClass('view');

    });

    $('.btn_top').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
        return false;
    });
});