const buttonEdit = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');
const popupContainer = document.querySelector('.popup__container');
let popupInputs = popupContainer.querySelectorAll('.popup__input');
const formElement = popupContainer.querySelector('.popup__form');

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
