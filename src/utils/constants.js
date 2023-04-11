const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
  
  const obj = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_inactive',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__input-error',
  };
  
  //переменные
  //const popup = document.querySelector('.popup')
  const popupProfile = document.querySelector('.popup-profile');
  const popupAdd = document.querySelector('.popup-add'); //мод.окно добавления карточки
  const popupImage = document.querySelector('.popup-image'); //мод.окно картинки
  
  const buttonEdit = document.querySelector('.profile__edit-button'); //кнопка открытия модал окна редактирования профиля
  const addButton = document.querySelector('.profile__add-button'); //кнопка открытия модал окна добавления карточки
  
  const formCards = document.querySelector('.form-cards'); // форма модал окна добавления карточек
  const formProfile = document.querySelector('.form-profile'); // форма мод окна редактиования профиля
  
  const nameProfileInput = document.querySelector('.form__input_text_name'); //поле имени пользователя
  const jobProfileInput = document.querySelector('.form__input_text_job'); //поле описания пользователя
  const nameProfileTitle = document.querySelector('.profile__name'); // имя пользователя
  const jobProfileTitle = document.querySelector('.profile__job'); //описание пользователя
  
  const nameImageAdd = document.querySelector('.form__input_image_name'); // название картинки
  const linkImageAdd = document.querySelector('.form__input_image_link'); // ссылка на картинку
  
  const imageClicked = document.querySelector('.popup-image__img'); // изображение
  const nameImageClicked = document.querySelector('.popup-image__title'); // название изображения
  
  const cardsBlock = document.querySelector('.cards'); // секция всех карточек

  export {
    initialCards,
    obj,
    buttonEdit,
    addButton,
    formCards,
    formProfile,
    nameProfileInput,
    jobProfileInput,
    cardsBlock
  }