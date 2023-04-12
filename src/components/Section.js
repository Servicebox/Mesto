class Section {
    constructor({ items, renderer }, container) {
      this._items = items; //массив данных, которые нужно добавить на страницу
      this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице
      this._container = container; //сюда добавляются созданные элементы
    }
  
    renderItems() {
      //метод, отвечающий за отрисовку всех элементов функцией renderer
      this._items.forEach((item) => {
        this._renderer(item);
      });
    }
  
    addInput(element) {
      //публичный метод, который принимат DOM-элемент и добавляет в начало контейнера
      this._container.prepend(element);
    }
  }
  
  export { Section };