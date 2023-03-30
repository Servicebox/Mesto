import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';



// массив картинок
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

const closeButtons = document.querySelectorAll('.popup__close'); // все кнопки закрытия модалок
closeButtons.forEach((button) => {
  const popup = button.closest('.popup'); //родитель к кнопке закрытия
  button.addEventListener('click', () => closePopup(popup)); // слушатель закрытия по клику на кнопку
});

//закрытие popup оверлей
const closeWithinPopup = (e) => {
  const isOverlay = e.target.classList.contains('popup_opened');
  if (isOverlay) {
    closePopup(e.target);
    }
};
//закрытие popup esc
const closePopupEsc = (e) => {
  const isEsc = (e.key === 'Escape');
  if (isEsc) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};
//open modal window
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeWithinPopup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

function viewPopupImageImg(name, link) {
  imageClicked.src = link;
  imageClicked.alt = name;
  nameImageClicked.textContent = name;

  openPopup(popupImage);
}

//создание новой карточки 
function createCard(data) {
  const card = new Card(data, '#card__template', viewPopupImageImg);
  return card.generateCard();
}

//добавление новой карточки
function addNewCard(input) {
  cardsBlock.prepend(input);
}

/** загрузка из массива */
initialCards.forEach((input) => {
  addNewCard(createCard(input));
});

//cброс инпутов
function clearInput(e) {
  e.target.reset();
}

//сохранение данных профиля,заполнение проф.пользователя
function handleFormProfileSubmit(e) {
  e.preventDefault();

  nameProfileTitle.textContent = nameProfileInput.value;
  jobProfileTitle.textContent = jobProfileInput.value;

  closePopup(popupProfile);
}

// сохранение даных карточки
function handleFormAddSubmit(e) {
  e.preventDefault();

  const addCard = {
    name: nameImageAdd.value,
    link: linkImageAdd.value,
  };

  addNewCard(createCard(addCard));
  closePopup(popupAdd, clearInput(e));
}


//открытие и редактирование полей попап профиля
buttonEdit.addEventListener('click', function () {
  nameProfileInput.value = nameProfileTitle.textContent;
  jobProfileInput.value = jobProfileTitle.textContent;
  
  openPopup(popupProfile);
});

// открытие попап добавления карточки
addButton.addEventListener('click', function () {
  formCardValidation.disablesSubmitForm();
  openPopup(popupAdd);
});

document.addEventListener('keydown', closePopupEsc);
formProfile.addEventListener('submit', handleFormProfileSubmit);
formCards.addEventListener('submit', handleFormAddSubmit);

//валидация
const profileValidation = new FormValidator(obj, formProfile);
profileValidation.enableValidation();

const formCardValidation = new FormValidator(obj, formCards);
formCardValidation.enableValidation();
// я уже и так и эдак до чего доменяла ,уже не понимаю что надо , голова уже взрываеться