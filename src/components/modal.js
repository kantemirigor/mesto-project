import {
  popups, popupImage, popupBigImage, popupBigImageTitle
} from './constants.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
export function openPopupImg(event) {
  const target = event.target
  popupBigImage.src = target.src;
  popupBigImage.alt = target.closest('.element').textContent;
  popupBigImageTitle.textContent = target.closest('.element').textContent;
  openPopup(popupImage);
}
popups.forEach(element => {
  element.addEventListener('click', function (event) {
    event.target.classList.value.split(' ').forEach(elem => {
      if (elem === 'popup') {
        closePopup(element);
      }
    });
  })
});
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}