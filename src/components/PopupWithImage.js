import { Popup } from './Popup.js';

/** класс перезаписывает родительский метод open */
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageClicked = this._popup.querySelector('.popup-image__img');
    this._nameImageClicked = document.querySelector('.popup-image__title');
  }

  open(name, link) {
    this._nameImageClicked.textcontent = textcontent;

    this._imageClicked.src = link;
    this._imageClicked.alt = name;

    super.open();
  };
}

export { PopupWithImage };