import './finances.scss';
import './template/header.scss';
import './template/footer.scss';
import './animation.scss';
import './animation.js';


// Анимация при скроллинге страницы

$(window).scroll(function() {

    if ($(this).scrollTop() > 0) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})


// Popup по таймеру

let popupTitle = document.querySelector('.popup_title');
let popupText = document.querySelector('.popup_text');

let showPopupOnTime = () => {
    document.querySelector('.popup_timer').style.display = 'block'
}

let timerButton = document.querySelector('.timer_button');
timerButton.addEventListener('click', (evt)=>{
    evt.preventDefault;
    document.querySelector('.popup_timer').style.display = 'none'
})

setTimeout(showPopupOnTime, 3000);