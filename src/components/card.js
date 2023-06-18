import {
  tempElement,
} from './constants.js';
import {
  openPopupImg,
} from './modal.js';
import {
  delCard, putLike, delLike,
} from './api.js';


function deleteElement(id) {
  return function (event) {
    delCard(id)
      .then(() => {
        event.target.closest('.element').remove();
      })
      .catch(error => {
        console.log(error);
      });
  }
}


function addLike(element, id, likes) {
  const elementLike = element.closest('.element').querySelector('.element__count-likes');
  const elementLikeButton = element;
  elementLike.textContent = likes;
  elementLikeButton.classList.add('element__like_active');
}

function removeLike(element, id, likes) {
  const elementLike = element.closest('.element').querySelector('.element__count-likes');
  const elementLikeButton = element
  elementLike.textContent = likes;
  elementLikeButton.classList.remove('element__like_active');
}

function checkLike(element, id) {
  const elementLikeButton = element;
  return elementLikeButton.classList.contains('element__like_active');
}

function toggleLike(id) {
  return function (event) {
    if (checkLike(event.target, id)) {
      delLike(id)
        .then(card => {
          removeLike(event.target, id, card.likes.length);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      putLike(id)
        .then(card => {
          addLike(event.target, id, card.likes.length);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}

export function createElement(myId, data) {

  const element = tempElement.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');
  const elementLikeButton = element.querySelector('.element__like');
  const elementLike = element.querySelector('.element__count-likes');
  const elementTitle = element.querySelector('.element__text');

  elementImage.src = data.link;
  elementImage.alt = data.name;
  elementLike.textContent = data.likes.length;
  elementTitle.textContent = data.name;

  elementImage.addEventListener('click', openPopupImg);
  elementLikeButton.addEventListener('click', toggleLike(data._id));

  if (myId === data.owner._id) {
    elementTrash.addEventListener('click', deleteElement(data._id));
  } else {
    elementTrash.style.display = 'none';
  }
  if (data.likes.some(like => like._id === myId)) {
    elementLikeButton.classList.add('element__like_active');
  }
  return element;
}