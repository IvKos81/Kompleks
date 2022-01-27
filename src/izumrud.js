import './izumrud.scss';

// Анимация при загрузке страницы

$(document).ready(function(){
    $('.firstscreen_logo').addClass('animfromleftfast')
    $('.firstscreen_menu').addClass('animfromrightfast')
    $('.anim0').fadeTo(3000, 1);
})

// Анимация при скроллинге страницы

$(window).scroll(function() {

    if ($(this).scrollTop() > 750) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})

// // Всплывающее окно

// $('.izumrud__map').click(function(){
//     alert("КВАРТИРЫ ЕЩЕ НЕ ВЫСТАВЛЕНЫ НА ПРОДАЖУ")
// })

// подсветка выбора на изображении

$('.izumrud__map').maphilight({
    fill: true,
    fillColor: '2252a9',
    fillOpacity: 0.5,
    stroke: true,
    strokeColor: 'ffccaa' 
});