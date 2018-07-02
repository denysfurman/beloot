$( document ).ready(function() {


    // mobile menu
    $('.nav-trigger').click(function() {
        $(".header_nav").slideToggle();
        $('.nav-trigger').toggleClass('is-active');
        return false;
    });

    //all page
    $('.all_pages').click(function() {
        $('.all_pages').toggleClass('open');
    });

    // Menu
    $('.menu-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $(".lk_menu").slideToggle();
    });

    //counter
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 4000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });



        });
    });

        // language select
    var icon = '<i class="far fa-chevron-down"></i>';

    $(document).ready(function(){
        var current = $('.language.active').html() + icon;
        $('.current-language').html(current);

        $('.current-language').on('click', function(e){
            e.preventDefault();
            $(this).addClass('open');

            $('.language-select').addClass('active');
            $('.language', '.language-select').on('click', function(ev){
                ev.preventDefault();
                $('.language.active').removeClass('active');
                $(this).addClass('active');
                var updated = $('.language.active').html() + icon;
                $('.current-language').html(updated).removeClass('open');
                $('.language-select').removeClass('active');
            });
        });
    });




});
$(document).ready(function() {

    if ($(".results").length > 0) {
        var resultItems = $('.results');
        var mixer = mixitup(resultItems);
    }


});



