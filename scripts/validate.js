const obj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error',
};


function disabledSubmit(evt) {
  evt.preventDefault();
}

//  добавляем класс с ошибкой. 
const showInputError = (object, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage; // сообщение об ошибке
  errorElement.classList.add(object.errorClass);
};

// удаляем класс с ошибкой.
const hideInputError = (object, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.add(object.errorClass); 
  errorElement.textContent = ''; 
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  });
};

// кнопки отправки
const disabledSubmitBtm = (object, buttonElement) => {
  buttonElement.classList.add(object.inactiveButtonClass);
  buttonElement.disabled = true;
};

const activeSubmitBtm = (object, buttonElement) => {
  buttonElement.classList.remove(object.inactiveButtonClass);
  buttonElement.disabled = false;
};

// включение и отключение кнопки отправки.
const toggleButtonState = (object, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) { 
    disabledSubmitBtm(object, buttonElement);
  } else {
    activeSubmitBtm(object, buttonElement);
  }
};


const isValid = (object, formElement, inputElement) => {
  if (!inputElement.validity.valid) { 
    showInputError( 
      object,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(object, formElement, inputElement); 
  }
};

// обработчик для всех полей формы
const setEventListeners = (object, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(object.inputSelector)
  );
  const buttonElement = formElement.querySelector(object.submitButtonSelector); 
  toggleButtonState(object, inputList, buttonElement); 

  inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input', function () { 
      isValid(object, formElement, inputElement); 
      toggleButtonState(object, inputList, buttonElement); 
    });
  });
};


const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector)); 
  formList.forEach((formElement) => { 
    formElement.addEventListener('submit', disabledSubmit);
    setEventListeners(object, formElement); 
  });
};

enableValidation(obj);






