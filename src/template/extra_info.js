import './extra_info.scss';

let buttonExtraInfo = document.querySelector('.extra_info');
let popupExtraInfo = document.querySelector('.popup_extra_info');
let buttonPopupExtraInfo = document.querySelector('.popup_extra_info_button');

buttonExtraInfo.addEventListener('click', (evt)=>{
    evt.preventDefault;
    popupExtraInfo.style.display = 'block'
});

buttonPopupExtraInfo.addEventListener('click', (evt)=>{
    evt.preventDefault;
    popupExtraInfo.style.display = 'none'
})
