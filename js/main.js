$( document ).ready(function() {
    $(".hamburger").click(function(){
        $(this).toggleClass( 'is-active' );
        $(this).siblings().toggleClass( 'active' );
        $(this).parent().siblings().toggleClass( 'active' );
    });
    $('.portfolio').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
    });
});

