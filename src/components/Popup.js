class Popup {
    constructor(popupSelector) { 
      this._popup = document.querySelector(popupSelector);
    }
  
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
      document.addEventListener('click', this._handleOverlayClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
      document.addEventListener('click', this._handleOverlayClose);
    }
  
    _handleEscClose = (e) => {
      //логика закрытия попап через Esc
      if (e.key === 'Escape') {
        this.close(this._popup);
      }
    };
  
    _handleOverlayClose = (e) => {
      //логика закрытия попап нажатием на оверлей
      if (e.target.classList.contains('popup_opened')) {
        this.close(this._popup);
      }
    };
  
    setEventListeners() {
      this._popup.addEventListener('click', (e) => {
          if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close')) {
              this.close(this._popup);
          }
      });
    }
  }
  
  export { Popup };