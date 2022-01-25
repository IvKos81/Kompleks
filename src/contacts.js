import './contacts.scss';

// Анимация при загрузке страницы

$(document).ready(function(){
    $('.firstscreen_logo').addClass('animfromleftfast')
    $('.firstscreen_menu').addClass('animfromrightfast')
    $('.firstscreen_center').fadeTo(6000, 1);
    $('.anim11').fadeTo(2000, 1);
    $('.footer_logo').addClass('animfromleft')
    $('.footer_list3').addClass('animfromright')
    $('.footer_list1').addClass('animfromleftfast')
    $('.footer_list2').addClass('animfromrightfast')    
})
