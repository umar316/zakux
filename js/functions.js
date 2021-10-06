$(document).ready(function () {


    // Language Switcher Call
    $(".language-switcher > li a").click(function () {
        $(".language-options").slideToggle(300);
    });

    $(".language-options li a").click(function () {
        $(this).parent().parent().parent().children(".language-switcher > li a").html($(this).html());
    });

    // Brand Tab Navigation Call
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    // Slick Sldier Call
    $('.testimonial-slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    });

});