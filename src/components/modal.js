import {
    popup  } from './constants.js';

export function openPopup(popup){
    popup.classList.add('popup_opened');
}
export function closePopup(popup){
    popup.classList.remove('popup_opened');
}
popup.forEach(element => { // Закрытие по оверлаю и Esc
    element.addEventListener('click',function(event){
      event.target.classList.value.split(' ').forEach(elem => {
        if(elem === 'popup')
        {
          closePopup(element);
        }
      });
    })
    document.addEventListener('keydown', function(event) {
      if(event.key === "Escape")
      {
        closePopup(element);
      }
    });  
  });