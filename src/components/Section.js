class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer; 
    this._container = container; 
  }

  renderItems(items) {
    //отрисовка всех элементов функцией renderer
    items.forEach(item => {this._renderer(item)});
  };

  addItem(element) {
    //принимает dom-элемент и добавляет в начало контейнера
    this._container.prepend(element);
  }
}

export { Section };