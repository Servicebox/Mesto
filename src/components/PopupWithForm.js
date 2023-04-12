import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
  }

  _getInputValues() { //метод собирает данные всех полей формы
    this._formInputValues = {};
    this._inputList.forEach((input) => {
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners(); //перезаписывает родительский метода

    this._form.addEventListener('submit', (e) => { //добавляет обработчик сабмита форме
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}

export { PopupWithForm };