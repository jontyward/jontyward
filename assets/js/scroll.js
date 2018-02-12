$("#button").click(function() {
    $('html,body').animate({
        scrollTop: $("#anchor").offset().top},
        'slow');
});