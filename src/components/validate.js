
  const showInputError = (formElement, inputElement, errorMessage,options) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.add(options.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(options.errorClass);
  };
  
  const hideInputError = (formElement, inputElement,options) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(options.inputErrorClass);
    formError.classList.remove(options.errorClass);
    formError.textContent = '';
  };
  
  const isValid = (formElement, inputElement,options) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
    inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage,options);
    } else {
      hideInputError(formElement, inputElement,options);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  
  
  const toggleButtonState = (inputList, buttonElement,options) => {
    if (hasInvalidInput(inputList)) {
          buttonElement.disabled = true;
      buttonElement.classList.add(options.inactiveButtonClass);
    } else {
          buttonElement.disabled = false;
      buttonElement.classList.remove(options.inactiveButtonClass);
    }
  }; 
  
  const setEventListeners = (formElement,options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);
    toggleButtonState(inputList, buttonElement,options);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement,options)
        toggleButtonState(inputList, buttonElement,options);
      });
    });
  };
  
  export const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement,options);
    });
  };