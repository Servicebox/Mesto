class FormValidator {
  constructor(object, formElement) {
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._formElement = formElement;

  }

  enableValidation() {
      this._setEventListeners();
  }

  // добавление класса с ошибкой 
  _showInputError() {
    const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage
    errorElement.classList.add(this._errorClass);
  }

  // удаление класса с ошибкой 
  _hideInputError() {
    const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.add(this._errorClass); //
    errorElement.textContent = '';
  }

  // проверка валид. поля
  _isValid(inputElement) {
    if (!this._inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError();
    }
  }
//проверяет валид. полей, отключение или включение кнопки отправки 
  _toggleButtonState(_inputList, _buttonElement) {
    const isFormValid = this._formElement.checkValidity();
    this._buttonElement.disabled = !isFormValid;
    this._buttonElement.classList.toggle(
        this._inactiveButtonClass, 
        !isFormValid 
      );
  }

  _setEventListeners() {
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._inputElement = inputElement;
this._isValid();
          this._toggleButtonState();
        });
      });

    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  disablesSubmitForm() {
    this._inputList.forEach((inputSelector) => {
    this._inputSelector = inputSelector;
    this._hideInputError();
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



