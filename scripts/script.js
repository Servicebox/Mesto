import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, obj } from './array.js';

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
//закрытие popup оверлей */
//const closeWithinPopup = (e) => {
  //if (e.target.classList.contains('popup_opened')) {
    //closePopup(e.target);
  //}
//};

const closePopupEsc = (e) => {
  const isEsc = (e.key === 'Escape');
  if (isEsc) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};
// закрытие popup esc 
//const closePopupEsc = (e) => {
  //if (e.keyCode === 'Escape') {
    //const popupAll = document.querySelector('.popup_opened');
    //closePopup(popupAll);
  //}
//};

/*закрытие модального окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closeWithinPopup);
}

// открытие модальных окон //
function openPopup(popup) {
  popup.classList.add('popup_opened');
 document.addEventListener('keydown', closePopupEsc);
 document.addEventListener('click', closeWithinPopup('.popup'));
}
*/
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeWithinPopup);
  document.addEventListener('keydown', closePopupEsc);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeWithinPopup);
  document.removeEventListener('keydown', closePopupEsc);
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

  //закрытие окна после сохранения
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

formProfile.addEventListener('submit', handleFormProfileSubmit);
formCards.addEventListener('submit', handleFormAddSubmit);

//валидация
const profileValidation = new FormValidator(obj, formProfile);
profileValidation.enableValidation();

const formCardValidation = new FormValidator(obj, formCards);
formCardValidation.enableValidation();
