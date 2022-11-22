$(document).ready(function() {
    // 탭 메뉴 전환
    $('.tab_btns').find("li").on('click', function(e){
        e.preventDefault();
        var me = $(this).index();
            idx = me;
        console.log(idx);
        $('.tab_btns li').removeClass('active');
        $(this).addClass('active');
        
        $('.tab_list li').hide();
        $('.tab_list li').eq(idx).fadeIn(100);
    });

    // 리뷰 슬라이드
    var swiper = new Swiper(".review_list", {
        slidesPerView: 1,
        spaceBetween: 70,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        },
    });

    // 스크롤 따라오는 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.follow').fadeIn(100);
            
        } else {
            $('.follow').fadeOut(100);
        }
    });


    // 유투브 영상 팝업 불러오기
	$(".content").on("click", function(e){
		e.preventDefault();
		$(".popup_back").stop().fadeIn(100);
	});

    //클릭시 팝업 닫기
	$('.close_btn').on('click',function(){
        $('.popup_back').stop().fadeOut(100);
	});
});