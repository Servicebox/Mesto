class FormValidator {
  constructor(object, formElement) {
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._formElement = formElement;

  }

  // добавление класса с ошибкой 
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage
    errorElement.classList.add(this._errorClass);
  }

  // удаление класса с ошибкой 
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    this._inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.add(this._errorClass); //
    errorElement.textContent = '';
  }

  // проверка валид. поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
//проверяет валид. полей, отключение или включение кнопки отправки 
  /** функция, которая проверяет валидность полей и отключает или включает кнопку отправки */
  _toggleButtonState() {
    const isFormValid = this._formElement.checkValidity();
    this._buttonElement.disabled = !isFormValid;
    this._buttonElement.classList.toggle(
      this._inactiveButtonClass, // добавляем класс неактивной кнопки
      !isFormValid // если валидация не пройдена
    );
  }

_stopSubmit = (e) => {
    e.preventDefault();
}

  _setEventListeners() {
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._inputElement = inputElement;
this._isValid(inputElement);
          this._toggleButtonState();
        });
      });

    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  disablesSubmitForm() {
    this._inputList.forEach((inputSelector) => {
    this._inputSelector = inputSelector;
    this._hideInputError(inputElement);
      });

    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export {
  FormValidator
};