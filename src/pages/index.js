//import { Card } from './components/Card.js';
//import { FormValidator } from './components/FormValidator.js';
import './index.css';

import 
{
  initialCards,
  obj,
  buttonEdit,
  addButton,
  formCards,
  formProfile,
  nameProfileInput,
  jobProfileInput,
  cardsBlock
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';

/** экземпляр класса UserInfo, который отвечает за управление отображением информации о пользователе на странице */
const user = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job'});

/** создание новой карточки */
function createCard(data) {
  const card = new Card(data, '#card__template', viewPopupImageImg);
  return card.generateCard();
}

/** экземпляр класса Section, который отвечает за отрисовку элементов на странице */
const cardsList = new Section({ items: initialCards, renderer: (item) => {
  cardsList.addInput(createCard(item));
}},'.cards');

cardsList.renderItems();

/** экземпляры класса PopupWithForm */

/** попап редкатирования профиля */
const popupProfile = new PopupWithForm('.popup-profile', (inputs) => {
  user.setUserInfo(inputs);
  popupProfile.close();
});
popupProfile.setEventListeners();

function openPopupProfile({ name, job}) {
  nameProfileInput.value = name;
  jobProfileInput.value = job;

  popupProfile.open();
}

buttonEdit.addEventListener('click', () => {
  openPopupProfile(user.getUserInfo());
  profileValidation.disablesSubmitForm();
})

/** попап добавления карточки */
const popupAdd = new PopupWithForm('.popup-add', ({ name, link }) => {
  cardsList.addInput(createCard({ name, link }));
  popupAdd.close();
})
popupAdd.setEventListeners();

addButton.addEventListener('click', () => {
  popupAdd.open();
  formCardValidation.disablesSubmitForm();
})

/** попап просмотра изображения */
const popupViewImage = new PopupWithImage('.popup-image')
popupViewImage.setEventListeners();

function viewPopupImageImg(name, link) {
  popupViewImage.open(name, link);
}

/** валидация форм */
const profileValidation = new FormValidator(obj, formProfile);
profileValidation.enableValidation();

const formCardValidation = new FormValidator(obj, formCards);
formCardValidation.enableValidation();


//Извините что так туплю и приходиться тратить еще время на проверку этой работы. Постоянно куда-то тороплюсь и не вчитываюсь, впредь буду внимательней и перепроверять
//Спасибо))