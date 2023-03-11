//многие пишут что надо перенести картинки в отдельный js файл-перенсла в cards.js
//переменные
const popupProfile = document.querySelector(".popup-profile"); 
const popupAdd = document.querySelector(".popup-add"); 
const popupImage = document.querySelector(".popup-image"); 

const buttonEdit = document.querySelector(".profile__edit-button"); 
const addButton = document.querySelector(".profile__add-button"); 

const formCards = document.querySelector(".form-cards"); 
const formProfile = document.querySelector(".form-profile");

const nameProfileInput = document.querySelector(".form__input_text_name");
const jobProfileInput = document.querySelector(".form__input_text_job"); 

const nameProfileTitle = document.querySelector(".profile__name"); 
const jobProfileTitle = document.querySelector(".profile__job"); 

const nameImageAdd = document.querySelector(".form__input_image_name"); 
const linkImageAdd = document.querySelector(".form__input_image_link"); 

const imageClicked = document.querySelector(".popup-image__img");
const nameImageClicked = document.querySelector(".popup-image__title");

const cardsBlock = document.querySelector(".cards"); 
const cardTemplate = document.querySelector("#card__template"); 
const card = document.querySelector(".card");

// все кнопки закрытия popup
const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

//функция открытия popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("click", closeWithinPopup);
};

//закрытие popup  оверлей
const closeWithinPopup = (e) => {
  if (e.target.classList.contains("popup_opened")) {
    closePopup(e.target);
  }
};

//закрытие popup esc
const closePopupEsc = (e) => {
  if (e.keyCode == 27) {
      const popupAll = document.querySelector(".popup_opened");
    closePopup(popupAll);
  }
};


//функция закрытия popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("click", closeWithinPopup);
}

//Cброс инпутов
function clearInput(e) {
  e.target.reset();
}

function handleFormProfileSubmit(e) {
  //отправка данных(заполнение профиля пользователя)
  e.preventDefault();

  nameProfileTitle.textContent = nameProfileInput.value;
  jobProfileTitle.textContent = jobProfileInput.value;
  closePopup(popupProfile);
}

nameProfileInput.value = nameProfileTitle.textContent;
jobProfileInput.value = jobProfileTitle.textContent;

//функция создания новой карточки
function createCard(input) {
  const cardName = input.name;
  const cardLink = input.link;
  const cardAlt = input.name;
  const cardElement = cardTemplate.content.cloneNode(true); 
  const cardCloned = cardElement.querySelector('.card'); 
  cardCloned.querySelector('.card__name').textContent = cardName; 
  const imageCard = cardCloned.querySelector('.card__img'); 
  imageCard.src = cardLink;
  imageCard.alt = cardAlt;

  const buttonLike = cardCloned.querySelector('.card__like'); 
  const buttonDel = cardCloned.querySelector('.card__del'); 
  const cardImage = cardCloned.querySelector('.card__img'); 

  //лайк карточки
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("card__like_active");
  });

  //удаляем любую картинку
  buttonDel.addEventListener("click", function () {
    const parentOfDel = buttonDel.closest(".card");
    parentOfDel.remove();
  });

  // открытие попап с картинкой по клику на карточку
  cardImage.addEventListener("click", function () {
    imageClicked.src = cardLink;
    imageClicked.alt = cardName;
    nameImageClicked.textContent = cardAlt;

    openPopup(popupImage);
  });

  return cardCloned; // возвращаем новую клонированную карточку (не сам шаблон)
  // return cardElement;
}

const addNewCard = (input) => {
  cardsBlock.prepend(createCard(input));
};

initialCards.forEach(function (input) {
  cardsBlock.append(createCard(input));
});

formCards.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewCard({
    name: nameImageAdd.value,
    link: linkImageAdd.value,
  });

  closePopup(popupAdd, clearInput(e));
});

//открываем и редактируем попап
buttonEdit.addEventListener("click", function () {
  openPopup(popupProfile);
  nameProfileInput.value = nameProfileTitle.textContent;
  jobProfileInput.value = jobProfileTitle.textContent;
});

//открываем popup для добавления картинки
addButton.addEventListener("click", function () {
  disablesSubmitForm(obj, formCards);
  openPopup(popupAdd);
});

formProfile.addEventListener("submit", handleFormProfileSubmit);