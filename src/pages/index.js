import './index.css';
import Api from '../components/Api.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

const api = new Api();
const dataInfoUser = api.getInfoUser();



  
const popupAddFormElement = document.querySelector('.popup_add-form').querySelector('.popup__validatable');
const profileElement = document.querySelector('.popup_profile').querySelector('.popup__container');
const popupProfileElement = document.querySelector('.popup_profile').querySelector('.popup__validatable');
const popupOpenButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameInput = profileElement.querySelector('.popup__input_name_author');
const jobInput = profileElement.querySelector('.popup__input_name_job');
const popupImg = new PopupWithImage('.popup_img');;
const validateOptions = {
  popupInputSelector: '.popup__input',
  submitButtonSelector: 'button[type = "submit"]',
  submitButtonDisabledClass: 'popup__submit-button_disabled',
  inputErrorActiveClass: 'popup__input-error_active',
  inputTypeActiveClass: 'popup__input_type_error'
};
let section;


api.getCards()
  .then((data) => {
    const sectionOptions = {
      items: data,
      renderer: addElement
    }
    section = new Section(sectionOptions, '.elements')
    render(section)
  })
  .catch((err) => {
    console.log(err);
  });

  


const popupAddFormValidator =  new FormValidator(validateOptions, popupAddFormElement);
const popupProfileValidator =  new FormValidator(validateOptions, popupProfileElement);

const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit)
const popupAddForm = new PopupWithForm('.popup_add-form', handleAddFormSubmit)
const userInfo = new UserInfo({
  nameUserSelector: '.profile__quote-author',
  infoUserSelector: '.profile__quote-author-subline',
  avatarUserSelector: '.profile__photo-avatar',
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
  // section.addItem(
  //   {
  //     name: data.title,
  //     link: data.link
  //   });
    popupAddForm.close ();
  api.addNewCard(data)
  .then((data) => {
    section.addItem({
      name: data.name,
      link: data.link,
      
    }) 
  })
  .catch((err) => {
    console.log(err);
  });
  popupAddFormValidator.disableSubmit()

}

function handleProfileFormSubmit (evt, data) {
  evt.preventDefault(); 
 
  popupProfile.close ()
  api.setInfoUser(data)
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        job: data.about,
        avatar: data.avatar
      }) 
    })
    .catch((err) => {
      console.log(err);
    });
}









function enableValidation() {
  popupAddFormValidator.enableValidation();
  popupProfileValidator.enableValidation();
}; 


function render(section) {
  api.getCards()
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
}

dataInfoUser
.then((data) => {
  userInfo.setUserInfo({
    name: data.name,
    job: data.about,
    avatar: data.avatar
  }) 
})
.catch((err) => {
  console.log(err);
});