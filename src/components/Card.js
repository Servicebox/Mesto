
 class Card {
  constructor(data, templateSelector, viewPopupImage) {
    this._name = data.name;
    this._link = data.link;
    this._viewPopupImage = viewPopupImage;
    this._templateSelector = templateSelector;
  }

  //добавляем классу метод _getTemplate, который: 
  _getTemplate() {
    const cardElement = document
      .querySelector("#card__template") 
      .content.querySelector(".card") 
      .cloneNode(true); 

    return cardElement; 
  }

  //добавляем классу метод, который вставит данные в разметку и подготовит карточку к публикации 
  generateCard() {
    this._element = this._getTemplate(); 

    //добавим данные 
    this._elementImage = this._element.querySelector(".card__img");
    this._elementName = this._element.querySelector(".card__name");
    this._elementLike = this._element.querySelector(".card__like");
    this._elementDel = this._element.querySelector(".card__del");

    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._link;
    this._elementName.textContent = this._name;

    return this._element; // вернем наружу
  }

  //лайк карточки
  _like() {
    this._elementLike.classList.toggle("card__like_active");
  }

  //удаление карточки 
  _del() {
    this._element.remove();
    this._element = null;
  }

  //метод добавления всех обработчиков в одном месте
  _setEventListeners() {
    this._elementImage.addEventListener("click", () => {
      this._viewPopupImage(this._name, this._link);
    });

    this._elementLike.addEventListener("click", () => this._like());
    this._elementDel.addEventListener("click", () => this._del());
  }
}


export { Card };
