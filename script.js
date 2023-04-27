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
const buttonAdd = document.querySelector('.profile__button-add');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const tempElement = document.querySelector('#temp-element').content;
const elements = document.querySelector('.elements');
const tempPopup = document.querySelector('#temp-popup').content;
const page = document.querySelector('.page');
const popup = tempPopup.querySelector('.popup').cloneNode(true);
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupContainer = popup.querySelector('.popup__container');
const popupInputs = popup.querySelectorAll('.popup__input');
const formElement = popup.querySelector('.popup__form');

for (let i = 0; i < initialCards.length; i++) {
    let element = tempElement.querySelector(".element").cloneNode(true);
    element.querySelector('.element__image').src = initialCards[i].link;
    element.querySelector('.element__text').textContent= initialCards[i].name;  
    elements.append(element);
}


formElement.addEventListener('submit', saveProfile);  // Нажатие кнопки "Сохранить" в попап,запускает функцию Saveform

function saveProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputs[0].value;
    profileDescription.textContent = popupInputs[1].value;
    
}
function test(evt)
{
    evt.preventDefault();
    console.log("С кайфом")
}
popupCloseButton.addEventListener('click',function(){
    popup.classList.remove('popup_opened');
})
buttonEdit.addEventListener('click',function(){
    page.append(popup);
    popup.classList.add('popup_opened');
    popupInputs[0].value = profileTitle.textContent;
    popupInputs[1].value = profileDescription.textContent;
})
buttonAdd.addEventListener('click',function(){
    page.append(popup);
    popup.classList.add('popup_opened');
    popup.querySelector('.popup__title').textContent = "Новое место";
    popupInputs[0].value = "";
    popupInputs[1].value = "";
    popupInputs[0].placeholder ="Название"; 
    popupInputs[1].placeholder = "Ссылка на картинку";
    popup.querySelector('.popup__submit-button').value = "Создать";
})

