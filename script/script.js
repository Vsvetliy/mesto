import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import initialCards from './data.js';
import Popup from './Popup.js';
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
const popupImg = document.querySelector('.popup_img');
const popupImgClose = popupImg.querySelector('.popup__close-button');
const validateOptions = {
  popupInputSelector: '.popup__input',
  submitButtonSelector: 'button[type = "submit"]',
  submitButtonDisabledClass: 'popup__submit-button_disabled',
  inputErrorActiveClass: 'popup__input-error_active',
  inputTypeActiveClass: 'popup__input_type_error'
};
const sectionOptions = {
  items: initialCards,
  renderer: addElement
}
const popupAddFormValidator =  new FormValidator(validateOptions, popupAddFormElement);
const popupProfileValidator =  new FormValidator(validateOptions, popupProfileElement);
const section = new Section(sectionOptions, '.elements')
const popupProfile2 = new Popup('.popup_profile')
const popupAddForm2 = new Popup('.popup_add-form')
const popupImg2 = new Popup('.popup_img')
 



function addElement(data, container) {
  const card = new Card(data, '.element-template');
  container.prepend(card.createCard());
}

function handleAddtFormSubmit(evt) {
  evt.preventDefault();
  section.addItem(
    {
      name: titleInput.value,
      link: linkInput.value
    });
    popupAddForm2.close ();
  titleInput.value = '';
  linkInput.value = '';
  popupAddFormValidator.disableSubmit()

}

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfile2.close ()
}

section.render()

formElement.addEventListener('submit', handleProfileFormSubmit);
popupAddButton.addEventListener('click', handleAddtFormSubmit);
//МЫ тут
popupCloseButton.addEventListener('click', () => popupProfile2.close());

addButton.addEventListener('click', () => popupAddForm2.open());
popupAddFormClose.addEventListener('click', () => popupAddForm2.close());
popupImgClose.addEventListener('click', () => popupImg2.close(popupImg));
popupOpenButton.addEventListener('click', function (evt) {
  popupProfile2.open ();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popupProfileValidator.enableSubmit()
});
popupProfile.querySelector('.popup__overlay').addEventListener('click', () => popupProfile2.close());
popupImg.querySelector('.popup__overlay').addEventListener('click', () => popupImg2.close());
popupAddForm.querySelector('.popup__overlay').addEventListener('click', () => popupAddForm2.close());
enableValidation()

function enableValidation() {
  popupAddFormValidator.enableValidation();
  popupProfileValidator.enableValidation();
}; 
