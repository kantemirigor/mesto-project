const initialCards = [
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
const elements = document.querySelector('.elements');
const tempElement = document.querySelector('#temp-element').content;
const popupProfile = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelectorAll('.popup__close-button');
const buttonSubmit = document.querySelectorAll('.popup__submit-button');
const inputName =  document.querySelector('#popup__input-name');
const inputDescription =  document.querySelector('#popup__input-description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const buttonAdd = document.querySelector('.profile__button-add');
const popupMesto = document.querySelector('.popup-mesto');
const popupImage = document.querySelector('.popup-image');

initialCards.forEach(function(elem){
  console.log(elem.link)
  const element = tempElement.querySelector('.element').cloneNode(true); // дубль с 81 строкой 
  element.querySelector('.element__image').src = elem.link;
  element.querySelector('.element__text').textContent = elem.name;
  elements.append(element);
})

buttonEdit.addEventListener('click',showPopup);
buttonClose[0].addEventListener('click',closePopup);  // Исправить!
buttonClose[1].addEventListener('click',closePopup);  // Исправить!
buttonClose[2].addEventListener('click',closePopup);  // Исправить!
buttonSubmit[0].addEventListener('click', saveProfile); // Исправить!
buttonSubmit[1].addEventListener('click', saveMesto); // Исправить!
buttonAdd.addEventListener('click' , addMesto);

function showPopup(){
  popupProfile.classList.add('popup_opened'); //Можно совместить с 77?
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
  
}
function closePopup(){
  popupProfile.classList.remove('popup_opened');
  popupMesto.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
}
function saveProfile(evt){
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
}
function addMesto(){
  popupMesto.classList.add('popup_opened');  // Можно совместить с 77?
}
function fullImage(){
  popupImage.classList.add('popup_opened');
}
function saveMesto(evt){
  evt.preventDefault();
  const element = tempElement.querySelector('.element').cloneNode(true);  // дубль с 43 строкой
  element.querySelector('.element__image').src = document.querySelector('#popup__input-link').value;
  element.querySelector('.element__text').textContent = document.querySelector('#popup__input-title').value;
  elements.prepend(element); 
}
elements.onclick = function(event) {
  let target = event.target;
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
    document.querySelector('.popup__image').src = target.src;
    document.querySelector('.popup__image-title').textContent = target.nextElementSibling.firstElementChild.textContent;
    fullImage();
  }
};
