class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer; 
    this._container = container; 
  }

  renderItems(items) {
    //отрисовка всех элементов функцией renderer
    items.forEach(item => {this._renderer(item)});
  };

  addItem(element, isStart = false) { 
    if (isStart){ this._container.append(element); 
    } else this._container.prepend(element);//принимает dom-элемент и добавляет в начало контейнера }
}
}
export { Section };
//Добрый, я изменила то что было в замечаниях ,по кнопке уверенна на 100 проц, 
//а вот с добавлением карточки очень пришлось помучаться, надеюсь что верно теперь)
//переписывала код два дня уже голова не соображает- поэтому переживательно очень 