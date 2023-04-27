import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageClicked = this._popup.querySelector('.popup-image__img');
    this._nameImageClicked = this._popup.querySelector('.popup-image__title');
  }

  open({ name, link }) {
    /** вставляем в попап картинку (src) с названием (textContent)*/
    this._nameImageClicked.textcontent = name;
    this._imageClicked.src = link;
    this._imageClicked.alt = name;

    super.open();
  }
}

export { PopupWithImage };