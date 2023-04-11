class Section {
    constructor({ inputs, renderer }, container) {
      this._inputs = inputs; //массив данных, которые нужно добавить на страницу
      this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице
      this._container = container; //сюда добавляются созданные элементы
    }
  
    renderInputs() {
      //метод, отвечающий за отрисовку всех элементов функцией renderer
      this._inputs.forEach((input) => {
        this._renderer(input);
      });
    }
  
    addInput(element) {
      //публичный метод, который принимат DOM-элемент и добавляет в начало контейнера
      this._container.prepend(element);
    }
  }
  
  export { Section };