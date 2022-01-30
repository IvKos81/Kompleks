import './main.scss';
import L from 'leaflet'

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
        $('.anim3').fadeTo(3000, 1);
        $('.anim4').fadeTo(4000, 1);
    };

    if ($(this).scrollTop() > 1200) {
        $('.anim5').fadeTo(2000, 1);
        $('.anim6').fadeTo(3000, 1);
        $('.anim7').fadeTo(4000, 1);
        $('.anim8').fadeTo(5000, 1);
    };

    if ($(this).scrollTop() > 2000) {
        $('.cta_title').addClass('animfromleftfast');
        $('.cta_text').addClass('animfromleftfast');
        $('.cta_form').addClass('animfromrightfast');
    };

    if ($(this).scrollTop() > 2500) {
        $('.anim9').fadeTo(1000, 1);
    };

    if ($(this).scrollTop() > 3150) {
        $('.anim10').fadeTo(1000, 1);
    };

    if ($(this).scrollTop() > 4000) {
        $('.anim11').fadeTo(1000, 1);
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
let personPhone2 = document.querySelector('.cta_phone2');
let formButton2 = document.querySelector('.cta_button2');
let popupButton = document.querySelector('.popup_button');
let popupButton2 = document.querySelector('.popup_button2');
let popupTitle = document.querySelector('.popup_title');
let popupTitle2 = document.querySelector('.popup_title2');
let popupText = document.querySelector('.popup_text');
let popupText2 = document.querySelector('.popup_text2');
let popup = document.querySelector('.popup');
let popup2 = document.querySelector('.popup2');


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
    popup2.style.display = 'block'
    popupTitle2.innerHTML = 'Уважаемый гражданин '+personName2.value+'. Мы сейчас проверим ваш номер телефона: '+personPhone2.value+'!'
    popupText2.innerHTML = 'Хотим также по секрету сообщить, что мы подумали тут и внесли ваш телефон во все рекламные базы данных. Так что ожидайте в ближайшее время много новых и интересных предложений!'
})

popupButton.addEventListener('click', (evt)=>{
    evt.preventDefault;
    popup.style.display = 'none'
})

popupButton2.addEventListener('click', (evt)=>{
    evt.preventDefault;
    popup2.style.display = 'none'
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

// установка Leaflet Карт

var map = L.map('mymap').setView([59.964611, 30.418843], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
var markerSapfir = L.marker([59.964539, 30.417207]).addTo(map);
markerSapfir.bindPopup('Жилой корпус "Сапфир"').openPopup();
var markerIzumrud = L.marker([59.963703, 30.418720]).addTo(map);
markerIzumrud.bindPopup('Жилой корпус "Изумруд"').openPopup();
