import './building.scss';

// Анимация при загрузке страницы

$(document).ready(function(){
    $('.firstscreen_logo').addClass('animfromleftfast')
    $('.firstscreen_menu').addClass('animfromrightfast')
    $('.firstscreen_center').fadeTo(6000, 1);
        console.log('scrolltop>50')
})

// Анимация при скроллинге страницы

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.anim1').fadeTo(1000, 1);
        $('.anim2').fadeTo(2000, 1);
        $('.anim3').fadeTo(4000, 1);
        $('.anim4').fadeTo(6000, 1);
    };

    if ($(this).scrollTop() > 1200) {
        $('.anim5').fadeTo(2000, 1);
        $('.anim6').fadeTo(4000, 1);
        $('.anim7').fadeTo(6000, 1);
        $('.anim8').fadeTo(8000, 1);
    };

    if ($(this).scrollTop() > 2000) {
        $('.cta_title').addClass('animfromleftfast');
        $('.cta_text').addClass('animfromleftfast');
        $('.cta_form').addClass('animfromrightfast');
    };

    if ($(this).scrollTop() > 2500) {
        $('.anim9').fadeTo(2000, 1);
    };

    if ($(this).scrollTop() > 3150) {
        $('.anim10').fadeTo(2000, 1);
    };

    if ($(this).scrollTop() > 3500) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})