
// 반짝이 효과
document.addEventListener("DOMContentLoaded", function() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var count = 300; // 별 개수

  // 랜덤 숫자 생성 함수
  function genRanNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  // 별 생성 및 배치
  for (var loop = 0; loop < count; loop++) {
    var star = document.createElement("div");
    star.classList.add('dot'); // dot 클래스 추가

    if (genRanNum(1, 5) === 5) {
      star.classList.add('twinkle');
      star.style.animationDuration = genRanNum(0.5, 2) + 's'; // 애니메이션 시간을 빠르게 랜덤 설정
    }

    var ranWH = genRanNum(1, 3); // 랜덤 크기 설정
    star.style.top = genRanNum(0, screenHeight) + 'px'; // 화면 높이에 맞춰 별의 위치 설정
    star.style.left = genRanNum(0, screenWidth) + 'px'; // 화면 너비에 맞춰 별의 위치 설정
    star.style.width = ranWH + 'px';
    star.style.height = ranWH + 'px';

    document.body.appendChild(star);
  }
});
 
 
 // 마우스 움직임에 따른 배경 색상
  document.addEventListener("mousemove", function(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	
	var width = window.innerWidth;
	var height = window.innerHeight;

	var xPercent = (mouseX / width) * 130;
	var yPercent = (mouseY / height) * 130;

	var gradient = `linear-gradient(${xPercent + yPercent}deg, rgba(${xPercent}, ${yPercent}, 130, 0.8), rgba(${140 - xPercent}, ${170 - yPercent}, 230, 0.8))`;

	document.body.style.background = gradient;
  });


// introduce text event
Math.randInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
  
function getRandStringFrom(chars, string) {
	var random_string = "";

	for (var char = 0; char < string.length + 1; char++) {
		if (string[char] == " ") random_string += " ";
		else random_string += chars.charAt(Math.randInt(0, chars.length));
	}

	return random_string;
}

window.onload = function() {
	var random_appear = document.querySelector(".text1");
	var text_appear = document.querySelector(".text1");

	(function loop() {
		var original_content = text_appear.innerText;
		var current_length = 0;

		var appearUpdate = setInterval(function() {
		var substring_section = original_content.substring(0, current_length);

		text_appear.innerText = substring_section;

		current_length++;

		if (current_length > original_content.length) clearInterval(appearUpdate);
		}, 35);
	})();
};




//스크롤 이벤트
$(window).on('scroll', function () {
	var scrollT = $(this).scrollTop();
	if (scrollT > 500) $('.btn_top').addClass('view');
	else $('.btn_top').removeClass('view');

	// actText1~5
	var txtPos = $('.actText1').offset().top - 800;
	if (scrollT > txtPos) $('.actText1').addClass('on');
	else $('.actText1').removeClass('on');

	var txtPos = $('.actText2').offset().top - 760;
	if (scrollT > txtPos) $('.actText2').addClass('on');
	else $('.actText2').removeClass('on');

	var txtPos = $('.actText3').offset().top - 740;
	if (scrollT > txtPos) $('.actText3').addClass('on');
	else $('.actText3').removeClass('on');

	var txtPos = $('.actText4').offset().top - 720;
	if (scrollT > txtPos) $('.actText4').addClass('on');
	else $('.actText4').removeClass('on');

	var txtPos = $('.actText5').offset().top - 700;
	if (scrollT > txtPos) $('.actText5').addClass('on');
	else $('.actText5').removeClass('on');

	//skill_wrap
	var txtPos = $('.skills').offset().top - 900;
	if (scrollT > txtPos) $('.skill_wrap').addClass('on');
	else $('.skill_wrap').removeClass('on');


	//skills bar 1~7
	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar1').addClass('on');
	else $('.bar1').removeClass('on');
	
	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar2').addClass('on');
	else $('.bar2').removeClass('on');

	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar3').addClass('on');
	else $('.bar3').removeClass('on');

	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar4').addClass('on');
	else $('.bar4').removeClass('on');

	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar5').addClass('on');
	else $('.bar5').removeClass('on');

	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar6').addClass('on');
	else $('.bar6').removeClass('on');

	var txtPos = $('.skill_wrap').offset().top - 670;
	if (scrollT > txtPos) $('.bar7').addClass('on');
	else $('.bar7').removeClass('on');


	//license1~3
	var txtPos = $('.license .text1').offset().top - 800;
	if (scrollT > txtPos) $('.license .text1').addClass('on');
	else $('.license .text1').removeClass('on');

	var txtPos = $('.license .text2').offset().top - 800;
	if (scrollT > txtPos) $('.license .text2').addClass('on');
	else $('.license .text2').removeClass('on');

	var txtPos = $('.license .text3').offset().top - 800;
	if (scrollT > txtPos) $('.license .text3').addClass('on');
	else $('.license .text3').removeClass('on');

	var txtPos = $('.license .text4').offset().top - 800;
	if (scrollT > txtPos) $('.license .text4').addClass('on');
	else $('.license .text4').removeClass('on');


	// 스크롤에 따른 로고 유무
	var logoPos = $('.introduce').offset().top - 50;
	if (scrollT > logoPos) $('.logo a').addClass('on');
	else $('.logo a').removeClass('on');

	// TOP 버튼
	$('.btn_top').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
        return false;
    });

	$(".sns_list li a").on('mouseenter', function () {
		$(this).css({transform: 'rotate(360deg) scale(1.4)', transition: 'all .5s ease-in-out'});
	});
	$(".sns_list li a").on('mouseleave', function () {
		$(this).css({transform: 'rotate(0deg) scale(1)'});
	});
	

});