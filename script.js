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
const buttonEdit = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');
const popupContainer = document.querySelector('.popup__container');
let popupInputs = popupContainer.querySelectorAll('.popup__input');
const formElement = popupContainer.querySelector('.popup__form');

let tempElement = document.querySelector('#temp-element').content;
let elements = document.querySelector('.elements');

for (let i = 0; i < initialCards.length; i++) {
    let element = tempElement.querySelector(".element").cloneNode(true);
    element.querySelector('.element__image').src = initialCards[i].link;
    element.querySelector('.element__text').textContent= initialCards[i].name;
    elements.append(element);
}






formElement.addEventListener('submit', saveForm); 

function saveForm(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputs[0].value;
    profileDescription.textContent = popupInputs[1].value;
}

buttonEdit.addEventListener('click',function(){
    popup.classList.add('popup_opened');
    popupInputs[0].value = profileTitle.textContent;
    popupInputs[1].value = profileDescription.textContent;  
})
popupCloseButton.addEventListener('click',function(){
    popup.classList.remove('popup_opened');
})

