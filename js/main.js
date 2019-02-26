$( document ).ready(function() {
    $(".hamburger").click(function(){
        $(this).toggleClass( 'is-active' );
        $(this).siblings().toggleClass( 'active' );
        $(this).parent().siblings().toggleClass( 'active' );
    });
});

