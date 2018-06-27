$( document ).ready(function() {


    //
    $('.nav-trigger').click(function() {



        $(".header_nav").slideToggle();
        $('.nav-trigger').toggleClass('is-active');
        return false;
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



