$(document).ready(function(){
    $(".nav").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    $(".slideList").children("div:gt(0)").hide();

    var currentIndex = 0;

    setInterval(function(){
        var next = (currentIndex + 1) % 3;
        $(".slideList").find("div").eq(currentIndex).fadeOut(1000);
        $(".slideList").find("div").eq(next).fadeIn(1000);
        currentIndex = next;
    }, 2000);

    // 탭메뉴

    var tabBtn = $(".tabBtn > ul > li");
    var tabCon = $(".tabCon > div");

    tabCon.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCon.css("display","none");
        tabCon.eq(index).css("display","block");
    });

    $('.con a.first').click(function(e){
        e.preventDefault();
        $('.layer_bg').css("display","block");
    });
    $('.layer .close').click(function(e){
        e.preventDefault();
        $('.layer_bg').css("display","none");
    });

    
});