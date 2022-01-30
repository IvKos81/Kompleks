import './flat.scss';

// Анимация при загрузке страницы

$(document).ready(function(){
    $('.firstscreen_logo').addClass('animfromleftfast')
    $('.firstscreen_menu').addClass('animfromrightfast')
    $('.firstscreen_center').fadeTo(6000, 1);
})

// Анимация при скроллинге страницы

$(window).scroll(function() {

    if ($(this).scrollTop() > 300) {
        $('.anim11').fadeTo(2000, 1);
        $('.footer_logo').addClass('animfromleft')
        $('.footer_list3').addClass('animfromright')
        $('.footer_list1').addClass('animfromleftfast')
        $('.footer_list2').addClass('animfromrightfast')
    };

})

// появление текста при наведении мыши

let coridor = document.querySelector('#coridor');
let kitchen = document.querySelector('#kitchen');
let toilet = document.querySelector('#toilet');
let bathroom = document.querySelector('#bathroom');
let storageroom = document.querySelector('#storageroom');
let balcony = document.querySelector('#balcony');
let bedroom1 = document.querySelector('#bedroom1');
let bedroom2 = document.querySelector('#bedroom2');
let livingroom = document.querySelector('#livingroom');
let flDescr = document.querySelector('.flat_description');
let flDescrText = document.querySelector('.flat_description_text');


coridor.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Большой коридор. Напольное покрытие - керамогранит. Стены оклеены изностойкими обоями под окраску. Размеры коридора позволяют установить внутри него встроенный шкаф';
});
coridor.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

kitchen.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Светлая кухня. Напольное покрытие - керамическая плитка. Стены, по желанию, могут быть отделаны обоями под покраску, кафельной плиткой или декоративной штукатуркой.';
});
kitchen.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

toilet.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Раздельный санузел. Согласно предлагаемой отделке устанавливается обычный унитаз со сливным бачком. По желанию клиента может быть установлен встроенный унитаз-инсталляция, а также возможно укомплектование гигиеническим душем и маленькой раковиной.';
});
toilet.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

bathroom.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Ванная комната. Повышенная гидроизоляция. Отделка - кафельная плитка. Установлена ванная размерами 170х50 см. По желанию заказчика может быть смонтирована душевая кабина. ';
});
bathroom.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

storageroom.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Небольшая кладовая комната. Может быть использована как комната для установки стиральной машины или как встроенная гардеробная. Напольное покрытие - керамогранит, стены отделаны обоями под окраску. Дополнительно в комнате выведена электрическая розетка.';
});
storageroom.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

balcony.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Большая лоджия на 2 окна. По желанию заказчика может быть установлено холодное или теплое остекление. Дополнительно доступна опция утепления балкона.';
});
balcony.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

bedroom1.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Небольшая уютная спальня. Отделка стен -  обои под покраску, напольное покрытие - ламинат 34 класса. Комната может быть переоборудована в детскую. ';
});
bedroom1.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});

bedroom2.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Небольшая уютная спальня. Отделка стен -  обои под покраску, напольное покрытие - ламинат 35 класса. Комната может быть переоборудована в детскую. ';
});
bedroom2.addEventListener('mouseleave', (evt) => {
   flDescr.style.display = 'none'
});


livingroom.addEventListener('mouseover', (evt) => {
    flDescr.style.display = 'block'
    flDescrText.innerHTML = 'Большая светлая комната. Стены отделаны обоями под покраску. Напольное покрытие - ламинат 34 класса. Потолок - оштукатурен и окрашен в три слоя.';
});
livingroom.addEventListener('mouseleave', (evt) => {
    flDescr.style.display = 'none'
});

$('#flat3-1').maphilight({
    fill: true,
    fillColor: '2252a9',
    fillOpacity: 0.5,
    stroke: true,
    strokeColor: 'ffccaa' 
});
