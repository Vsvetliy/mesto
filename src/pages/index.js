import './index.css';
import Api from '../components/Api.js';
import { nameInput, jobInput, validateOptions, avatarUser, popupAddFormElement, popupSetAvatar, popupProfileElement, popupOpenButton, addButton, } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

let section;
let userId;



 function handleConfirmDelete(evt) {
  evt.preventDefault();
        
        popupConfirm.open()
    }






const popupImg = new PopupWithImage('.popup_img');
const popupAvatarUser = new PopupWithForm('.popup_aupdate_avatar', handleAvatarUserSubmit)
const popupAddFormValidator =  new FormValidator(validateOptions, popupAddFormElement);
const popupProfileValidator =  new FormValidator(validateOptions, popupProfileElement);
const popupSetAvatarValidator =  new FormValidator(validateOptions, popupSetAvatar);
const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit)
const popupAddForm = new PopupWithForm('.popup_add-form', handleAddFormSubmit)
const userInfo = new UserInfo({
  nameUserSelector: '.profile__quote-author',
  infoUserSelector: '.profile__quote-author-subline',
  avatarUserSelector: '.profile__photo-avatar',
})
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  headers: {
    authorization: '32d33121-ecae-4993-8e9f-60de3dfa8ed6',
    'Content-Type': 'application/json'
  }
});

const popupConfirm = new PopupConfirm('.popup_confirm',(evt, data) => 
        {
          evt.preventDefault();
         
          api.deleteCard(data._id)
          .then(() => {
            document.getElementById(data._id).remove();
            popupConfirm.close();
          })
          .catch((err) => {
            console.log(err);
          });
          
          
        }, true);






const dataInfoUser = api.getInfoUser();


function handleAvatarUserSubmit (evt, data) {
  evt.preventDefault(); 
  popupAvatarUser.save()
  api.setAvatar(data.avatar)
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        job: data.about,
        avatar: data.avatar
      }) 
      popupAvatarUser.close ()
    })
    .catch((err) => {
      console.log(err);
    });
    popupSetAvatarValidator.disableSubmit()
}


function addElement(data, container) {
  container.prepend(createCard(data));
}

function createCard(data) {
  const card = new Card(data, '.element-template', handleCardClick, userId, api, handleConfirmDelete);
  return card.createCard();
}



function handleCardClick(data) {
  popupImg.open(data);
}

function handleAddFormSubmit(evt, data) {
  evt.preventDefault();
  popupAddForm.save ();
  api.addNewCard(data)
  .then((data) => {
    section.addItem(data)
    popupAddForm.close ();
  })
  .catch((err) => {
    console.log(err);
  });
  popupAddFormValidator.disableSubmit()
}

function handleProfileFormSubmit (evt, data) {
  evt.preventDefault(); 
  popupProfile.save()
  api.setInfoUser(data)
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        job: data.about,
        avatar: data.avatar
      }) 
      popupProfile.close ()
    })
    .catch((err) => {
      console.log(err);
    });
}

function enableValidation() {
  popupAddFormValidator.enableValidation();
  popupProfileValidator.enableValidation();
  popupSetAvatarValidator.enableValidation();
}; 

function render(section) {
  section.render()
  popupProfile.setEventListeners()
  popupAddForm.setEventListeners()
  popupImg.setEventListeners();
  popupConfirm.setEventListeners();
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

popupAvatarUser.setEventListeners()
avatarUser.addEventListener('click', () => popupAvatarUser.open())

dataInfoUser
.then((data) => {
  userInfo.setUserInfo({
    name: data.name,
    job: data.about,
    avatar: data.avatar,
  }) 
  userId = data._id
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
})
.catch((err) => {
  console.log(err);
});