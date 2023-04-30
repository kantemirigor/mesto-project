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
    const element = tempElement.querySelector(".element").cloneNode(true);
    element.querySelector('.element__image').src = initialCards[i].link;
    element.querySelector('.element__text').textContent= initialCards[i].name;  
    elements.append(element);
}



function saveProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputs[0].value;
    profileDescription.textContent = popupInputs[1].value;
    
}
function saveMesto(evt){
    evt.preventDefault();
    const element = tempElement.querySelector(".element").cloneNode(true);
    element.querySelector('.element__image').src = popupInputs[1].value;
    element.querySelector('.element__text').textContent= popupInputs[0].value;  
    elements.prepend(element);
}
popupCloseButton.addEventListener('click',function(){
    popup.classList.remove('popup_opened');
    formElement.removeEventListener('submit', saveProfile); 
    formElement.removeEventListener('submit', saveMesto); 

})
buttonEdit.addEventListener('click',function(){
    page.append(popup);
    popup.classList.add('popup_opened');
    popupInputs[0].value = profileTitle.textContent;
    popupInputs[1].value = profileDescription.textContent;
    formElement.addEventListener('submit', saveProfile); 
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
    formElement.addEventListener('submit', saveMesto); 
})


const elementLike = document.querySelectorAll('.element__like');
elements.onclick = function(event) {
  let target = event.target;
  if(target.id === 'like')
  {
    target.classList.toggle('element__like_active')
  }
};
const delElement = document.querySelectorAll('element__trash');
elements.onclick = function(event){
  console.log(popupCloseButton);
  let target = event.target;
  const tempPopupImage = document.querySelector('#popup-image').content;
  const popupImage = tempPopupImage.querySelector(".popup").cloneNode(true);
  if(target.id === 'delete')
  {
    target.parentElement.remove();
  }
  if(target.id === 'element-image')
  {
    popupImage.querySelector('.popup__image').src = target.src;
    popupImage.querySelector('.popup__image-title').textContent = target.nextElementSibling.firstElementChild.textContent;
    const popupCloseButton2 = popupImage.querySelector('.popup__close-button');
    page.append(popupImage);
    popupCloseButton2.addEventListener('click',function(){
      popup.classList.remove('popup_opened');
    })
  }
}





