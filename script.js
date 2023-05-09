const elements = document.querySelector('.elements');
const tempElement = document.querySelector('#temp-element').content;
const popupProfile = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseProfile = document.querySelector("#close-edit-popup");
const buttonCloseMesto = document.querySelector("#close-mesto-popup");
const buttonCloseImage = document.querySelector("#close-image-popup");
const buttonSubmit = document.querySelectorAll('.popup__submit-button');
const inputName =  document.querySelector('#popup__input-name');
const inputDescription =  document.querySelector('#popup__input-description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const buttonAdd = document.querySelector('.profile__button-add');
const popupMesto = document.querySelector('.popup-mesto');
const popupImage = document.querySelector('.popup-image');
const formElementEdit = document.querySelector('#popup-edit');
const formElementMesto = document.querySelector('#popup-mesto');
const mestoUrl = document.querySelector('#popup__input-link');
const mestoTitle = document.querySelector('#popup__input-title');
const popupBigImage = document.querySelector('.popup__image');
const popupBigImageTitle = document.querySelector('.popup__image-title');

initialCards.forEach(function(elem){
  const element = createElement(elem.link,elem.name);
  elements.append(element);
})


buttonEdit.addEventListener('click',editPopupProfile);
buttonAdd.addEventListener('click',openPopup(popupMesto));
buttonCloseProfile.addEventListener('click',closePopup(popupProfile));
buttonCloseMesto.addEventListener('click',closePopup(popupMesto));
buttonCloseImage.addEventListener('click',closePopup(popupImage));
formElementEdit.addEventListener('submit',saveProfile);
formElementMesto.addEventListener('submit',saveMesto);

function createElement(url,title){
  const element = tempElement.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = url;
  element.querySelector('.element__image').alt = title;
  element.querySelector('.element__text').textContent = title;
  return element;
}
function openPopup(popup){
  return function () {
    popup.classList.add('popup_opened');
  }
}

function editPopupProfile(){
  openPopup(popupProfile)();
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
}
function closePopup(popup){
  return function () {
    popup.classList.remove('popup_opened');
  }
}
function saveProfile(evt){
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(popupProfile)();
}
function saveMesto(evt){
  evt.preventDefault();
  const element = createElement(mestoUrl.value,mestoTitle.value)
  elements.prepend(element); 
  closePopup(popupMesto)();
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
    popupBigImageTitle.textContent = target.nextElementSibling.firstElementChild.textContent;
    openPopup(popupImage)();
  }
};
