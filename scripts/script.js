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

//открытие и закрытие popup
/*function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  
};
*/
function handleFormProfileSubmit(evt) {
  evt.preventDefault();

  nameProfileTitle.textContent = nameProfileInput.value;
  jobProfileTitle.textContent = jobProfileInput.value;
  closePopup(popupProfile);
}

//функция открытия popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closeWithinPopup);
};

//закрытие popup  оверлей
const closeWithinPopup = (e) => {
  if (e.target.classList.contains('popup_opened')) {
    closePopup(e.target);
  }
};
//закрытие popup esc
const closePopupEsc = (e) => {
    if (e.keyCode == 27) {
      const popupAll = document.querySelector('.popup_opened');
      closePopup(popupAll);
    }
  };

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
 
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closeWithinPopup);
};


//создаем новую картинку
function createCard(input) {
  const cardName = input.name;
  const cardLink = input.link;
  const cardAlt = input.name;
  const cardElement = cardTemplate.content.cloneNode(true);
  cardElement.querySelector(".card__name").textContent = cardName;
  const imageCard = cardElement.querySelector(".card__img");
  imageCard.src = cardLink;
  imageCard.alt = cardAlt;

  const buttonLike = cardElement.querySelector(".card__like");
  const buttonDel = cardElement.querySelector(".card__del");
  const cardImage = cardElement.querySelector(".card__img");

  //like 
  buttonLike.addEventListener("click", function (event) {
    buttonLike.classList.toggle("card__like_active");
  });

  //удаляем любую картинку
  buttonDel.addEventListener("click", function () {
    const parentOfDel = buttonDel.closest(".card");
    parentOfDel.remove();
  });

  // открываем popup
  cardImage.addEventListener("click", function () {
    imageClicked.src = cardLink;
    imageClicked.alt = cardName;
    nameImageClicked.textContent = cardAlt;

    openPopup(popupImage);
  });

  return cardElement;
}

const addNewCard = (input) => {
  cardsBlock.prepend(createCard(input));
};

initialCards.forEach(function (input) {
  cardsBlock.append(createCard(input));
});

formCards.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addNewCard({
    name: nameImageAdd.value,
    link: linkImageAdd.value,
  });

  evt.target.reset();
  closePopup(popupAdd);
});

//открываем и редактируюем popup
buttonEdit.addEventListener("click", function () {
  openPopup(popupProfile);
  nameProfileInput.value = nameProfileTitle.textContent;
  jobProfileInput.value = jobProfileTitle.textContent;
});

//открываем popup для добавления картинки
addButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

formProfile.addEventListener("submit", handleFormProfileSubmit);

