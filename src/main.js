import './main.scss';

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

    if ($(this).scrollTop() > 4100) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})

// Всплывающее окно

let personName = document.querySelector('.cta_name');
let personPhone = document.querySelector('.cta_phone');
let formButton = document.querySelector('.cta_button');
let personName2 = document.querySelector('.cta_name2');
let personPhone2 = document.querySelector('cta_phone2');
let formButton2 = document.querySelector('.cta_button2');
let popupButton = document.querySelector('.popup_button');
let popupTitle = document.querySelector('.popup_title');
let popupText = document.querySelector('.popup_text');
let popup = document.querySelector('.popup');

formButton.addEventListener('click', (evt)=>{
    evt.preventDefault;
    // popup.style.opacity = '100'
    // popup.style.zIndex = '1'
    popup.style.display = 'block'
    popupTitle.innerHTML = 'Уважаемый гражданин '+personName.value+'. Мы сейчас проверим ваш номер телефона: '+personPhone.value
    popupText.innerHTML = 'Хотим Вам заодно сообщить, что мы прикольнулись и внесли ваш телефон во все рекламные базы данных. Так что ожидайте в ближайшее время много новых и интересных предложений!'
})

formButton2.addEventListener('click', (evt)=>{
    evt.preventDefault;
    // popup.style.opacity = '100'
    // popup.style.zIndex = '1'
    popup.style.display = 'block'
    popupTitle.innerHTML = 'Уважаемый гражданин '+personName2.value+'. Мы сейчас проверим ваш номер телефона: '+personPhone2.value+'!'
    popupText.innerHTML = 'Хотим Вам заодно сообщить, что мы прикольнулись и внесли ваш телефон во все рекламные базы данных. Так что ожидайте в ближайшее время много новых и интересных предложений!'
})

popupButton.addEventListener('click', (evt)=>{
    evt.preventDefault;
    popup.style.display = 'none'
})

// Popup по таймеру

let showPopupOnTime = () => {
    document.querySelector('.popup_timer').style.display = 'block'
}

let timerButton = document.querySelector('.timer_button');
timerButton.addEventListener('click', (evt)=>{
    evt.preventDefault;
    document.querySelector('.popup_timer').style.display = 'none'
})

setTimeout(showPopupOnTime, 7000);