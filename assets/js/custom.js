(function($) {

    new WOW({
        mobile: false
    }).init();

    $(window).load(function () {
        window.setTimeout("$('#status').fadeOut()", 300);
        window.setTimeout("$('#preloader').delay(300).fadeOut('slow')", 300);
    });

    $('.skills').waypoint(function(){
        $('.chart').each(function(){
            $(this).easyPieChart({
                size:140,
                animate: 2000,
                lineCap:'butt',
                scaleColor: false,
                barColor: '#222', // FF5252
                trackColor: 'transparent',
                lineWidth: 10
            });
        });
    },{offset:'80%'});


    $('.header').sticky({
        topSpacing: 0
    });

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 70
    });

    $('a').bind("click", function(e){

        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

}(jQuery));