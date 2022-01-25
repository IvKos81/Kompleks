import './blocks.scss';

// Анимация при загрузке страницы

$(document).ready(function(){
    $('.firstscreen_logo').addClass('animfromleftfast')
    $('.firstscreen_menu').addClass('animfromrightfast')
    $('.firstscreen_center').fadeTo(6000, 1);
})

// Анимация при скроллинге страницы

$(window).scroll(function() {

    if ($(this).scrollTop() > 550) {
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