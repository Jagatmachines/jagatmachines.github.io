$( document ).ready(function() {
    $(".hamburger").click(function(){
        $(this).toggleClass( 'is-active' );
        $(this).siblings().toggleClass( 'active' );
        // debugger;
        $(this).parent().siblings().toggleClass('removeActive');

        // $(this).parent().siblings().toggleClass( 'active' );
        // $(this).parent().siblings().css('opacity', 0);
    });

    $("#clickHome").click(() => {
        $(document).find('.active').removeClass('active removeActive');
        $(document).find('.is-active').removeClass('is-active');
        $('#home').addClass('active');
    })
});


