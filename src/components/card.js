import {
  elements,
  tempElement,
  popupImage,
  popupBigImage,
  popupBigImageTitle
} from './constants.js';
import {
  openPopup
} from './modal.js'
import {
  delCard
} from './api.js'

elements.addEventListener('click', function (event) {
  const target = event.target;
  if (target.id === 'like') {
    target.classList.toggle('element__like_active')
  }
  if (target.id === 'delete') {
    console.log(target)
    target.parentElement.remove();
  }
  if (target.id === 'element-image') {
    popupBigImage.src = target.src;
    popupBigImage.alt = target.closest('.element').textContent;
    popupBigImageTitle.textContent = target.closest('.element').textContent;
    openPopup(popupImage);
  }
})
export function createElement(url, title, countLikes, id) {
  const element = tempElement.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementLike = element.querySelector('.element__count-likes');
  const elementTrash = element.querySelector('.element__trash')
  elementLike.textContent = countLikes;

  elementImage.src = url;
  elementImage.alt = title;
  element.querySelector('.element__text').textContent = title;
  if (id !== '3b57a3c6d612c9dd2904d820') {
    elementTrash.remove();
  }
  return element;
}
