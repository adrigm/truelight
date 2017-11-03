$(function() {
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#ms-preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});
