const popup = document.querySelector ('.popup');
const buttonEditOpen = document.querySelector ('.profile__button_act_edit');
const buttonClose = document.querySelector ('.popup__button_act_exit');
const getName = document.querySelector ('.profile__title');
const getJob = document.querySelector ('.profile__subtitle');
const editForm = document.querySelector ('.popup__container');
let nameInput = editForm.querySelector ('.popup__input_user');
let jobInput =  editForm.querySelector ('.popup__input_job');

function openPopup () {
  popup.classList.add ('popup__open');
  nameInput.value = getName.textContent;
  jobInput.value = getJob.textContent;
}

function closePopup ()  {
popup.classList.remove ('popup__open');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    getName.textContent = `${nameInput.value}`;
    getJob.textContent = `${jobInput.value}`;
    closePopup ();
}

buttonEditOpen.addEventListener ('click', openPopup);
buttonClose.addEventListener ('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);
