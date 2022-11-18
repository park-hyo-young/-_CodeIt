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
});