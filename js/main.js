$( document ).ready(function() {
    $(".hamburger").click(function(){
        $(this).toggleClass( 'is-active' );
        $(this).siblings().toggleClass( 'active' );
        // debugger;
        $(this).parent().siblings().toggleClass('removeActive');

        // $(this).parent().siblings().toggleClass( 'active' );
        // $(this).parent().siblings().css('opacity', 0);
    });

    function loading() {
        $('.loading').removeClass('inactive');
        $('#wrapper').addClass('inactive');

        setTimeout(() => {
            $('#wrapper').removeClass('inactive');
            $('.loading').addClass('inactive');
        }, 1000)
    }

    $("#clickHome").click(() => {
        loading();
        $(document).find('.active').removeClass('active removeActive');`1`
        $(document).find('.is-active').removeClass('is-active');
        $('#home').addClass('active').removeClass('removeActive');
    })

    $("#clickWork").click(() => {
        loading();
        $(document).find('.active').removeClass('active removeActive');
        $(document).find('.is-active').removeClass('is-active');
        $('#work').addClass('active').removeClass('removeActive');
    })
});


