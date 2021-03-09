import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopup, closePopup, initialCards } from './utils.js';
const popupAddForm = document.querySelector('.popup_add-form');
const popupAddFormElement = popupAddForm.querySelector('.popup__validatable');

const popupAddFormClose = popupAddForm.querySelector('.popup__close-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileElement = popupProfile.querySelector('.popup__validatable');

const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popupProfile.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_name_author');
const jobInput = formElement.querySelector('.popup__input_name_job');
const nameProfile = document.querySelector('.profile__quote-author');
const jobProfile = document.querySelector('.profile__quote-author-subline');
const popupAddButton = document.querySelector('.popup__add-form-button');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');
const elements = document.querySelector('.elements');
const popupImg = document.querySelector('.popup_img');
const popupImgClose = popupImg.querySelector('.popup__close-button');
const options = {
  popupInputSelector: '.popup__input',
  submitButtonSelector: 'button[type = "submit"]',
  submitButtonDisabledClass: 'popup__submit-button_disabled',
  inputErrorActiveClass: 'popup__input-error_active',
  inputTypeActiveClass: 'popup__input_type_error'
};
const popupAddFormValidator =  new FormValidator(options, popupAddFormElement);
const popupProfileValidator =  new FormValidator(options, popupProfileElement);


 

function render() {
  initialCards.forEach(item => addElement(item));
}

function addElement(data) {
  const card = new Card(data, '.element-template');
  elements.prepend(card.createCard());
}

function handleAddtFormSubmit(evt) {
  evt.preventDefault();
  addElement(titleInput.value, linkInput.value);
  closePopup (popupAddForm);
  titleInput.value = '';
  linkInput.value = '';
  popupAddFormValidator.disableSubmit()

}

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup (popupProfile)
}

render()

formElement.addEventListener('submit', handleProfileFormSubmit);
popupAddButton.addEventListener('click', handleAddtFormSubmit);
popupCloseButton.addEventListener('click', () => closePopup(popupProfile));
addButton.addEventListener('click', () => openPopup(popupAddForm));
popupAddFormClose.addEventListener('click', () => closePopup(popupAddForm));
popupImgClose.addEventListener('click', () => closePopup(popupImg));
popupOpenButton.addEventListener('click', function (evt) {
 openPopup (popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popupProfileValidator.enableSubmit()
});
popupProfile.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popupProfile));
popupImg.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popupImg));
popupAddForm.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popupAddForm));
enableValidation()

function enableValidation() {
  popupAddFormValidator.enableValidation();
  popupProfileValidator.enableValidation();
}; 
