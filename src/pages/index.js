import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import initialCards from '../script/data.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';


const popupAddFormElement = document.querySelector('.popup_add-form').querySelector('.popup__validatable');
const profileElement = document.querySelector('.popup_profile').querySelector('.popup__container');
const popupProfileElement = document.querySelector('.popup_profile').querySelector('.popup__validatable');
const popupOpenButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameInput = profileElement.querySelector('.popup__input_name_author');
const jobInput = profileElement.querySelector('.popup__input_name_job');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');
const popupImg = new PopupWithImage('.popup_img');;
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
const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit)
const popupAddForm = new PopupWithForm('.popup_add-form', handleAddFormSubmit)
const userInfo = new UserInfo({
  nameUserSelector: '.profile__quote-author',
  infoUserSelector: '.profile__quote-author-subline',
})
 
function addElement(data, container) {
  const card = new Card(data, '.element-template', handleCardClick);
  container.prepend(card.createCard());
}

function handleCardClick(data) {
  popupImg.open(data);
}

function handleAddFormSubmit(evt, data) {
  evt.preventDefault();
  section.addItem(
    {
      name: data.title,
      link: data.link
    });
    popupAddForm.close ();
  
  popupAddFormValidator.disableSubmit()

}

function handleProfileFormSubmit (evt, data) {
  evt.preventDefault(); 
  userInfo.setUserInfo({
    name: data.name,
    job: data.job
  })
  popupProfile.close ()
}

section.render()
popupProfile.setEventListeners()
popupAddForm.setEventListeners()
popupImg.setEventListeners();
addButton.addEventListener('click', () => popupAddForm.open());
popupOpenButton.addEventListener('click', function (evt) {
  popupProfile.open ();
  const userValues = userInfo.getUserInfo();
  nameInput.value = userValues.name;
  jobInput.value = userValues.job;
  popupProfileValidator.enableSubmit()
});

enableValidation()

function enableValidation() {
  popupAddFormValidator.enableValidation();
  popupProfileValidator.enableValidation();
}; 
