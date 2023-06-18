import './pages/index.css';
import {
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
  profileImage,
  submitEditProfile,
  submitAddMesto,
  submitUpdateAvatar
} from './components/constants.js';
import {
  createElement
} from './components/card.js';
import {
  openPopup, closePopup
} from './components/modal.js'
import {
  enableValidation
} from './components/validate.js'
import {
  getInitialCards, getProfileInfo, editProfileInfo, addCard, updateAvatar
} from './components/api.js'


let userId;

Promise.all([getProfileInfo(), getInitialCards()])
  .then(([user, cards]) => {
    if (user) {
      userId = user._id;
      const avatar = document.querySelector('.profile__avatar');
      const name = document.querySelector('.profile__title');
      const about = document.querySelector('.profile__description');
      avatar.src = user.avatar;
      name.textContent = user.name;
      about.textContent = user.about;
    }
    if (cards) {
      cards.forEach(function (item) {
        const element = createElement(userId, item)
        elements.append(element)
      })
    }
  })
  .catch(error => {
    console.error(error);
  })
function submitSaveProfile(evt) {
  evt.preventDefault();
  const delLoading = setLoading(submitEditProfile);
  editProfileInfo(inputName.value, inputDescription.value)
    .then(info => {
      profileTitle.textContent = info.name;
      profileDescription.textContent = info.about;
      formElementEdit.reset();
      closePopup(popupProfile);
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      delLoading();
    })
}

function submitAddCardForm(evt) {
  evt.preventDefault();
  const delLoading = setLoading(submitAddMesto);
  addCard(mestoTitle.value, mestoUrl.value)
    .then(card => {
      const element = createElement(userId, card)
      elements.prepend(element);
      formElementMesto.reset();
      closePopup(popupAddCard);
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      delLoading();
    })
}

buttonOpenPopupEditProfile.addEventListener('click', editPopupProfile);
buttonOpenPopupAddCard.addEventListener('click', function () {
  const buttonElement = formElementMesto.querySelector('.popup__submit-button');
  if (mestoUrl.value === '' || mestoTitle === '') {
    buttonElement.classList.add('popup__submit-button_disabled');
    buttonElement.disabled = true;
  }
  openPopup(popupAddCard);
});
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formElementEdit.addEventListener('submit', submitSaveProfile);
formElementMesto.addEventListener('submit', submitAddCardForm);



function editPopupProfile() {
  openPopup(popupProfile);
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
}





buttonEditAvatar.addEventListener('click', function () {
  openPopup(popupAvatar);
});
buttonCloseAvatar.addEventListener('click', function () {
  closePopup(popupAvatar);
})
formAvatarEdit.addEventListener('submit', submitEditAvatar);

function submitEditAvatar(evt) {
  evt.preventDefault();
  const delLoading = setLoading(submitUpdateAvatar);
  updateAvatar(popupInputAvatar.value)
    .then(user => {
      profileImage.src = user.avatar;
      closePopup(popupAvatar);
      formAvatarEdit.reset();
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      delLoading();
    })
};


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text_error_active'
});

function setLoading(submitButton) {
  const buttonText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';
  submitButton.disabled = true;
  return function () {
    submitButton.textContent = buttonText;
    submitButton.disabled = false;
  }
}