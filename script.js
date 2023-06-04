const elements = document.querySelector('.elements');
const tempElement = document.querySelector('#temp-element').content;
const popupProfile = document.querySelector('.popup-profile');
const buttonOpenPopupEditProfile = document.querySelector('.profile__button-edit');
const buttonCloseProfile = document.querySelector("#close-edit-popup");
const buttonClosePopupAddCard = document.querySelector("#close-mesto-popup");
const buttonCloseImage = document.querySelector("#close-image-popup");
const buttonSubmit = document.querySelectorAll('.popup__submit-button');

const formElementEdit = document.querySelector('#popup-edit');
const inputName =  formElementEdit.querySelector('#popup__input-name');
const inputDescription =  formElementEdit.querySelector('#popup__input-description');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const buttonOpenPopupAddCard = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup-mesto');
const popupImage = document.querySelector('.popup-image');

const formElementMesto = document.querySelector('#popup-mesto');
const mestoUrl = document.querySelector('#popup__input-link');
const mestoTitle = document.querySelector('#popup__input-title');
const popupBigImage = document.querySelector('.popup__image');
const popupBigImageTitle = document.querySelector('.popup__image-title');

const popup = document.querySelectorAll('.popup');
const buttonEditAvatar = document.querySelector('.profile__edit');
const popupAvatar = document.querySelector('.popup-avatar');
const buttonCloseAvatar = document.querySelector('#close-avatar-popup');
const formAvatarEdit = document.querySelector('#popup-avatar');
const profileImage = document.querySelector('.profile__avatar');

initialCards.forEach(function(elem){
  const element = createElement(elem.link,elem.name);
  elements.append(element);
})


buttonOpenPopupEditProfile.addEventListener('click',editPopupProfile);
buttonOpenPopupAddCard.addEventListener('click',function()
{
  openPopup(popupAddCard);
});
buttonCloseProfile.addEventListener('click',function(){
  closePopup(popupProfile);
});
buttonClosePopupAddCard.addEventListener('click',function()
{
  closePopup(popupAddCard);
});
buttonCloseImage.addEventListener('click',function(){
  closePopup(popupImage);
});
formElementEdit.addEventListener('submit',submitSaveProfile);
formElementMesto.addEventListener('submit',submitAddCardForm);

function createElement(url,title){
  const element = tempElement.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  elementImage.src = url;
  elementImage.alt = title;
  element.querySelector('.element__text').textContent = title;
  return element;
}
function openPopup(popup){
    popup.classList.add('popup_opened');
}

function editPopupProfile(){
  openPopup(popupProfile);
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
}
function closePopup(popup){
    popup.classList.remove('popup_opened');
}
function submitSaveProfile(evt){
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  inputName.value = '';
  inputDescription.value = '';
  closePopup(popupProfile)();
}
function submitAddCardForm(evt){
  evt.preventDefault();
  const element = createElement(mestoUrl.value,mestoTitle.value)
  elements.prepend(element);
  mestoUrl.value = '';
  mestoTitle.value = ''; 
  closePopup(popupAddCard);
}
elements.onclick = function(event) {
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
};

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

buttonEditAvatar.addEventListener('click',function(){
  openPopup(popupAvatar);
});
buttonCloseAvatar.addEventListener('click',function(){
  closePopup(popupAvatar);
})
formAvatarEdit.addEventListener('submit',submitEditAvatar);

function submitEditAvatar(evt){
  evt.preventDefault();
  profileImage.src = document.querySelector('#popup__input-link-avatar').value
  formAvatarEdit.reset();
  closePopup(popupAvatar);
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add('popup__input_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__text_error_active');
};

const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  formError.classList.remove('popup__text_error_active');
  formError.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
  inputElement.setCustomValidity("");
  }
  if (!inputName.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    buttonElement.classList.add('popup__submit-button_disabled');
  } else {
        buttonElement.disabled = false;
    buttonElement.classList.remove('popup__submit-button_disabled');
  }
}; 

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
enableValidation(); 

