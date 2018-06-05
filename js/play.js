$('.play').click(function(){
    var $this = $(this);
    
    // starting audio
    var audioID = "sound" + $(this).attr('id');
    
    $this.toggleClass('active');
    if($this.hasClass("active")){
    $(".pause").removeClass("pause");
    $(".active").removeClass("active");  
    $(this).addClass("active pause");  
    $("#" + audioID).trigger("play");  
    } else {
        $this.removeClass('pause');
        $this.addClass('play');
        $("#" + audioID).trigger('pause');
    }
});
