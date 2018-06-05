jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.go-top').fadeIn('slow');
        } else {
            $('.go-top').fadeOut('slow');
        }
    });
    $('.go-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});