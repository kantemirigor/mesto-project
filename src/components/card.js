import {
  tempElement
} from './constants.js';
import {
  openPopupImg
} from './modal.js'
import {
  delCard, putLike, delLike
} from './api.js'


function deleteElement(event) {
  const id = event.target.dataset.id;
  delCard(id)
    .then(() => {
      event.target.closest('.element').remove()
    })
    .catch(error => {
      console.log(error)
    })
}


function addLike(id, likes) {
  const element = document.querySelector(`[data-id="${id}"]`);
  const elementLike = element.querySelector('.element__count-likes');
  const elementLikeButton = element.querySelector('.element__like');
  elementLike.textContent = likes;
  elementLikeButton.classList.add('element__like_active');
}

function removeLike(id, likes) {
  const element = document.querySelector(`[data-id="${id}"]`);
  const elementLike = element.querySelector('.element__count-likes');
  const elementLikeButton = element.querySelector('.element__like');
  elementLike.textContent = likes;
  elementLikeButton.classList.remove('element__like_active');
}
function checkLike(id) {
  const element = document.querySelector(`[data-id="${id}"]`);
  const elementLikeButton = element.querySelector('.element__like');
  return elementLikeButton.classList.contains('element__like_active');
}

function toggleLike(event) {
  const id = event.target.dataset.id;

  if (checkLike(id)) {
    delLike(id)
      .then(card => {
        removeLike(id, card.likes.length);
      })
      .catch(error => {
        console.log(error)
      })
  } else {
    putLike(id)
      .then(card => {
        addLike(id, card.likes.length);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export function createElement(myId, data) {

  const element = tempElement.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');
  const elementLikeButton = element.querySelector('.element__like')
  const elementLike = element.querySelector('.element__count-likes');
  const elementTitle = element.querySelector('.element__text');

  element.dataset.id = data._id
  elementImage.src = data.link
  elementImage.alt = data.name
  elementLikeButton.dataset.id = data._id
  elementLike.textContent = data.likes.length
  elementTrash.dataset.id = data._id
  elementTitle.textContent = data.name

  elementImage.addEventListener('click', openPopupImg)
  elementLikeButton.addEventListener('click', toggleLike)

  if (myId === data.owner._id) {
    elementTrash.addEventListener('click', deleteElement)
  } else {
    elementTrash.style.display = 'none'
  }
  if (data.likes.some(like => like._id === myId)) {
    elementLikeButton.classList.add('element__like_active');
  }
  return element;
}
