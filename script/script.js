const popup = document.querySelector('.popup');
const popupAddForm = document.querySelector('.popup_add-form');
const popupAddFormClose = popupAddForm.querySelector('.popup__close-button');
const popupProfile = document.querySelector('.popup_profile');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const page = document.querySelector('.page');
const seveButton = document.querySelector('.popup__submit-button')
const songsContainer = document.querySelector('.profile__author-edit');
const formElement = document.querySelector('.popup__container') 
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
const popupImgImages = popupImg.querySelector('.popup__images');
const popupImgText = popupImg.querySelector('.popup__text');
const elementTemplate = document.querySelector('.element-template').content;

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
 

function render() {
  initialCards.forEach(item => addElement(item.name, item.link));
}

function addElement(name, link) {
  elements.prepend(createCard(name, link));
}

function createCard(name, link) {
  const templateCard = elementTemplate.cloneNode(true); 
  const elementDeleteButton = templateCard.querySelector('.element__delete-button');
  const elementlikebutton = templateCard.querySelector('.element__like-button');
  const elementText = templateCard.querySelector('.element__text');
  const elementImages = templateCard.querySelector('.element__images');

    elementText.textContent = name; 
    elementImages.src = link;
    elementImages.addEventListener('click', function (evt) {
      popupImgImages.src = link;
      popupImgText.textContent = name;
      openPopup(popupImg)
    });
    elementDeleteButton.addEventListener('click', handleDelete);
    elementlikebutton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_activ');
    });
    
  return templateCard;
}

function handleAddtFormSubmit(evt) {
  evt.preventDefault();
  addElement(titleInput.value, linkInput.value)
  closePopup (popupAddForm)
}

function handleDelete(evt) {
	evt.target.closest('.element').remove();
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
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
  //popupProfile.classList.add('popup_opened');
 openPopup (popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
