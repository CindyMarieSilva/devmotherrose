jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.go-top-noscroll');
        } else {
            $('.go-top-noscroll');
        }
    });
    $('.go-top-noscroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});