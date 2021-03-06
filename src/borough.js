import './borough.scss';
import './template/header.scss';
import './template/footer.scss';
import './animation.scss';
import './animation.js';

// Анимация при скроллинге страницы

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.anim1').fadeTo(1000, 1);
        $('.description_title').addClass('animfromleftfast');
        $('.description_text').addClass('animfromrightfast');
    };

    if ($(this).scrollTop() > 3500) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})