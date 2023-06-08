import './pages/index.css';
import {
  initialCards,
  elements,
  popupProfile,
  buttonOpenPopupEditProfile,
  closeButtons,
  formElementEdit,
  inputName,
  inputDescription,
  profileTitle,
  profileDescription,
  buttonOpenPopupAddCard,
  popupAddCard,
  formElementMesto,
  popupInputAvatar,
  mestoUrl,
  mestoTitle,
  buttonEditAvatar,
  popupAvatar,
  buttonCloseAvatar,
  formAvatarEdit,
  profileImage
} from './components/constants.js';
import {
  createElement
} from './components/card.js';
import {
  openPopup,closePopup
} from './components/modal.js'
import {
  enableValidation
} from './components/validate.js'

initialCards.forEach(function(elem){
  const element = createElement(elem.link,elem.name);
  elements.append(element);
})


buttonOpenPopupEditProfile.addEventListener('click',editPopupProfile);
buttonOpenPopupAddCard.addEventListener('click',function()
{
  const buttonElement = formElementMesto.querySelector('.popup__submit-button');
  if(mestoUrl.value === '' || mestoTitle === '')
  {
    buttonElement.classList.add('popup__submit-button_disabled');
    buttonElement.disabled = true;
  }
  openPopup(popupAddCard);
});
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formElementEdit.addEventListener('submit',submitSaveProfile);
formElementMesto.addEventListener('submit',submitAddCardForm);



function editPopupProfile(){
  openPopup(popupProfile);
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
}

function submitSaveProfile(evt){
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  formElementEdit.reset();
  closePopup(popupProfile);
}
function submitAddCardForm(evt){
  evt.preventDefault();
  const element = createElement(mestoUrl.value,mestoTitle.value)
  elements.prepend(element);
  formElementMesto.reset();
  closePopup(popupAddCard);
}


buttonEditAvatar.addEventListener('click',function(){
  openPopup(popupAvatar);
});
buttonCloseAvatar.addEventListener('click',function(){
  closePopup(popupAvatar);
})
formAvatarEdit.addEventListener('submit',submitEditAvatar);

function submitEditAvatar(evt){
  evt.preventDefault();
  profileImage.src = popupInputAvatar.value
  formAvatarEdit.reset();
  closePopup(popupAvatar);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text_error_active'
}); 

