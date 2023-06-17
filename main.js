(()=>{"use strict";var e=document.querySelector(".elements"),t=document.querySelector("#temp-element").content,n=document.querySelector(".popup-profile"),o=document.querySelector(".profile__button-edit"),r=(document.querySelector("#close-edit-popup"),document.querySelector("#close-mesto-popup"),document.querySelector("#close-image-popup"),document.querySelectorAll(".popup__close-button")),c=document.querySelector(".submit-edit-profile"),u=document.querySelector("#popup-edit"),a=u.querySelector("#popup__input-name"),i=u.querySelector("#popup__input-description"),l=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),d=document.querySelector(".profile__button-add"),p=document.querySelector(".popup-mesto"),m=document.querySelector(".popup-image"),f=document.querySelector("#popup-mesto"),_=document.querySelector("#popup__input-link"),v=document.querySelector("#popup__input-title"),y=document.querySelector(".popup__image"),S=document.querySelector(".popup__image-title"),q=document.querySelector("#popup__input-avatar"),b=document.querySelector(".submit-add-mesto"),h=document.querySelectorAll(".popup"),E=document.querySelector(".profile__edit"),k=document.querySelector(".popup-avatar"),C=document.querySelector("#close-avatar-popup"),L=document.querySelector("#popup-avatar"),g=document.querySelector(".profile__avatar"),x=document.querySelector(".submit-edit-avatar");function A(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function T(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w)}function j(e){var t=e.target;y.src=t.src,y.alt=t.closest(".element").textContent,S.textContent=t.closest(".element").textContent,A(m)}function w(e){"Escape"===e.key&&T(document.querySelector(".popup_opened"))}h.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.value.split(" ").forEach((function(t){"popup"===t&&T(e)}))}))}));var O={baseUrl:"https://nomoreparties.co/v1/plus-cohort-25",headers:{authorization:"475fb50a-548f-4190-a712-b420a1ac6f4a","Content-Type":"application/json"}};function P(e,t,n){return fetch("".concat(O.baseUrl).concat(t),{method:e,headers:O.headers,body:n?JSON.stringify(n):void 0}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function B(e){var t;(t=e.target.dataset.id,P("DELETE","/cards/".concat(t))).then((function(){e.target.closest(".element").remove()})).catch((function(e){console.log(e)}))}function D(e){var t=e.target.dataset.id;!function(e){return document.querySelector('[data-id="'.concat(e,'"]')).querySelector(".element__like").classList.contains("element__like_active")}(t)?function(e){return P("PUT","/cards/likes/".concat(e))}(t).then((function(e){!function(e,t){var n=document.querySelector('[data-id="'.concat(e,'"]')),o=n.querySelector(".element__count-likes"),r=n.querySelector(".element__like");o.textContent=t,r.classList.add("element__like_active")}(t,e.likes.length)})).catch((function(e){console.log(e)})):function(e){return P("DELETE","/cards/likes/".concat(e))}(t).then((function(e){!function(e,t){var n=document.querySelector('[data-id="'.concat(e,'"]')),o=n.querySelector(".element__count-likes"),r=n.querySelector(".element__like");o.textContent=t,r.classList.remove("element__like_active")}(t,e.likes.length)})).catch((function(e){console.log(e)}))}function M(e,n){var o=t.querySelector(".element").cloneNode(!0),r=o.querySelector(".element__image"),c=o.querySelector(".element__trash"),u=o.querySelector(".element__like"),a=o.querySelector(".element__count-likes"),i=o.querySelector(".element__text");return o.dataset.id=n._id,r.src=n.link,r.alt=n.name,u.dataset.id=n._id,a.textContent=n.likes.length,c.dataset.id=n._id,i.textContent=n.name,r.addEventListener("click",j),u.addEventListener("click",D),e===n.owner._id?c.addEventListener("click",B):c.style.display="none",n.likes.some((function(t){return t._id===e}))&&u.classList.add("element__like_active"),o}var U,I,G=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function N(e){var t=e.textContent;return e.textContent="Сохранение...",e.disabled=!0,function(){e.textContent=t,e.disabled=!1}}Promise.all([P("GET","/users/me"),P("GET","/cards")]).then((function(t){var n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(a.push(o.value),a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw r}}return a}}(n,o)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],u=r[1];if(c){U=c._id;var a=document.querySelector(".profile__avatar"),i=document.querySelector(".profile__title"),l=document.querySelector(".profile__description");a.src=c.avatar,i.textContent=c.name,l.textContent=c.about}u&&u.forEach((function(t){var n=M(U,t);e.append(n)}))})).catch((function(e){console.error(e)})),o.addEventListener("click",(function(){A(n),a.value=l.textContent,i.value=s.textContent})),d.addEventListener("click",(function(){var e=f.querySelector(".popup__submit-button");""!==_.value&&""!==v||(e.classList.add("popup__submit-button_disabled"),e.disabled=!0),A(p)})),r.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return T(t)}))})),u.addEventListener("submit",(function(e){e.preventDefault();var t,o,r=N(c);(t=a.value,o=i.value,P("PATCH","/users/me",{name:t,about:o})).then((function(e){l.textContent=e.name,s.textContent=e.about})).catch((function(e){console.log(e)})).finally((function(){r()})),u.reset(),T(n)})),f.addEventListener("submit",(function(t){t.preventDefault();var n,o,r=N(b);(n=v.value,o=_.value,P("POST","/cards",{name:n,link:o})).then((function(t){var n=M(U,t);e.prepend(n)})).catch((function(e){console.log(e)})).finally((function(){r()})),f.reset(),T(p)})),E.addEventListener("click",(function(){A(k)})),C.addEventListener("click",(function(){T(k)})),L.addEventListener("submit",(function(e){e.preventDefault();var t,n=N(x);(t=q.value,P("PATCH","/users/me/avatar",{avatar:t})).then((function(e){g.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){n()})),T(k),L.reset()})),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__text_error_active"},Array.from(document.querySelectorAll(I.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);G(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),G(n,o,t)}))}))}(e,I)}))})();