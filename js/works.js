$(document).ready(function (){
    $(".project_list li a").on('mouseenter', function () {
        $(this).addClass("one");
        $(".project_list li a").css({opacity: 0.2});
        $(this).css({opacity: 1});
        $(".project h2").addClass('boder');
    });
    $(".project_list li a").on('mouseleave', function () {
        $(this).removeClass("one");
        $(".project_list li a").css({opacity: 1});
        $(this).css({opacity: 1});
        $(".project h2").removeClass('boder');
    });

// 마우스 오버 bg 효과
    $(".project_list_1, .project_list_2").css({ opacity: 0, visibility: "hidden", display: "none" });
    
    $(".project_list .list1 a").on('mouseenter', function () {
        $(".project_list_1").addClass("onMouse");
        $(".project_list_1").css({ opacity: 1, visibility: "visible", display: "block" }); 
    });
    
    $(".project_list .list1 a").on('mouseleave', function () {
        $(".project_list_1").removeClass("onMouse");
        $(".project_list_1").css({ opacity: 0, visibility: "hidden", display: "none" }); 
    });
    
    $(".project_list .list2 a").on('mouseenter', function () {
        $(".project_list_2").addClass("onMouse1");
        $(".project_list_2").css({ opacity: 1, visibility: "visible", display: "block" }); 
    });
    
    $(".project_list .list2 a").on('mouseleave', function () {
        $(".project_list_2").removeClass("onMouse1");
        $(".project_list_2").css({ opacity: 0, visibility: "hidden", display: "none" });
    });
    
    $(".sns_list li a").on('mouseenter', function () {
        $(this).css({transform: 'rotate(360deg) scale(1.4)', transition: 'all .5s ease-in-out'});
    });
    $(".sns_list li a").on('mouseleave', function () {
        $(this).css({transform: 'rotate(0deg) scale(1)'});
    });

    $(window).on('resize', function(){
       var listHei = $('.project_list').innerHeight();
       $('.bg').css({height: listHei});
    });
    $(window).trigger('resize');
});