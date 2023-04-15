import { Popup } from './Popup.js';

/** класс перезаписывает родительский метод open */
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageClicked = this._popup.querySelector('.popup-image__img');
    this._nameImageClicked = this._popup.querySelector('.popup-image__title');
  }

  open(name, link) {
    this._nameImageClicked.textContent = name;

    this._imageClicked.src = link;
    this._imageClicked.alt = name;

    super.open();
  };
}

export { PopupWithImage };