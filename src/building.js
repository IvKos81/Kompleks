import './building.scss';

// Анимация при загрузке страницы

$(document).ready(function(){
    $('.firstscreen_logo').addClass('animfromleftfast')
    $('.firstscreen_menu').addClass('animfromrightfast')
    $('.firstscreen_center').fadeTo(6000, 1);
})

// Анимация при скроллинге страницы

$(window).scroll(function() {
    if ($(this).scrollTop() > 880) {
        $('.anim1').fadeTo(1000, 1);
        $('.description_title').addClass('animfromleftfast');
        $('.description_text').addClass('animfromrightfast');
    };

    if ($(this).scrollTop() > 1550) {
        $('.anim2').fadeTo(1000, 1);
        $('.outer_title').addClass('animfromleftfast');
        $('.outer_text').addClass('animfromrightfast');
    };

    if ($(this).scrollTop() > 2270) {
        $('.anim3').fadeTo(1000, 1);
        $('.inner_title').addClass('animfromrightfast');
        $('.inner_text').addClass('animfromleftfast');
    };

    if ($(this).scrollTop() > 2800) {
        $('.anim4').fadeTo(1000, 1);
        $('.smarthouse_title').addClass('animfromrightfast');
        $('.smarthouse_text').addClass('animfromleftfast');
    };

    if ($(this).scrollTop() > 3500) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})

// подсветка выбора на изображении

$('#mapzk').maphilight({
    fill: true,
    fillColor: '2252a9',
    fillOpacity: 0.5,
    stroke: true,
    strokeColor: 'ffccaa' 
});