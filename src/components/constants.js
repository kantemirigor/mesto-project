export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];
  export const elements = document.querySelector('.elements');
  export const tempElement = document.querySelector('#temp-element').content;
  export const popupProfile = document.querySelector('.popup-profile');
  export const buttonOpenPopupEditProfile = document.querySelector('.profile__button-edit');
  export const buttonCloseProfile = document.querySelector("#close-edit-popup");
  export const buttonClosePopupAddCard = document.querySelector("#close-mesto-popup");
  export const buttonCloseImage = document.querySelector("#close-image-popup");
  export const closeButtons = document.querySelectorAll('.popup__close-button');
  
  export const formElementEdit = document.querySelector('#popup-edit');
  export const inputName =  formElementEdit.querySelector('#popup__input-name');
  export const inputDescription =  formElementEdit.querySelector('#popup__input-description');
  
  export const profileTitle = document.querySelector('.profile__title');
  export const profileDescription = document.querySelector('.profile__description');
  export const buttonOpenPopupAddCard = document.querySelector('.profile__button-add');
  export const popupAddCard = document.querySelector('.popup-mesto');
  export const popupImage = document.querySelector('.popup-image');
  
  export const formElementMesto = document.querySelector('#popup-mesto');
  export const mestoUrl = document.querySelector('#popup__input-link');
  export const mestoTitle = document.querySelector('#popup__input-title');
  export const popupBigImage = document.querySelector('.popup__image');
  export const popupBigImageTitle = document.querySelector('.popup__image-title');
  export const popupInputAvatar = document.querySelector('#popup__input-link-avatar');
  
  export const popups = document.querySelectorAll('.popup');
  export const buttonEditAvatar = document.querySelector('.profile__edit');
  export const popupAvatar = document.querySelector('.popup-avatar');
  export const buttonCloseAvatar = document.querySelector('#close-avatar-popup');
  export const formAvatarEdit = document.querySelector('#popup-avatar');
  export const profileImage = document.querySelector('.profile__avatar');