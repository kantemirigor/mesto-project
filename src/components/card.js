import {
    elements,
    tempElement,
    popupImage,
    popupBigImage,
    popupBigImageTitle  } from './constants.js';
    import {
        openPopup
      } from './modal.js'
elements.addEventListener('click',function(event){
    const target = event.target;
    if(target.id === 'like')
    {
      target.classList.toggle('element__like_active')
    }
    if(target.id === 'delete')
    {
      target.parentElement.remove();
    }
    if(target.id === 'element-image')
    {
      popupBigImage.src = target.src;
      popupBigImage.alt = target.nextElementSibling.firstElementChild.textContent;
      popupBigImageTitle.textContent = target.nextElementSibling.firstElementChild.textContent;
      openPopup(popupImage);
    }
  }) 
  export function createElement(url,title){
    const element = tempElement.querySelector('.element').cloneNode(true);
    const elementImage = element.querySelector('.element__image');
    elementImage.src = url;
    elementImage.alt = title;
    element.querySelector('.element__text').textContent = title;
    return element;
  }