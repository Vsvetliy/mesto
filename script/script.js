const popup = document.querySelector('.popup');
const popupAddForm = document.querySelector('.popup_add-form');
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
const popupImgImages = popupImg.querySelector('.popup__images');
const popupImgText = popupImg.querySelector('.popup__text');
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

  
 
  const elementTemplate = document.querySelector('.element-template').content;

function render() {
  
  initialCards.forEach(item => createCard(item.name, item.link));
}


//11111111111111111111111111111111111111111111111111111111111111111111111111111
function addElement(templateCards) {
  elements.prepend(templateCards);  
}

function createCard(name, link) {
  const templateCards = elementTemplate.cloneNode(true); 
  const elementDeleteButton = templateCards.querySelector('.element__delete-button');
  const elementlikebutton = templateCards.querySelector('.element__like-button');
  const elementText = templateCards.querySelector('.element__text');
  const elementImages = templateCards.querySelector('.element__images');

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
    
    addElement(templateCards)
  }
//1111111111111111111111111111111111111111111111111111111111111111111111111111


  



function handleAddtFormSubmit(evt) {
  evt.preventDefault();
  createCard(titleInput.value, linkInput.value)
  closePopup (popupAddForm)
}


 

handleAddtFormSubmit


function handleDelete(evt) {
	evt.target.closest('.element').remove();

}



render()







function openPopup (popup) {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


function closePopup (popup) {
  popup.classList.remove('popup_opened');

}


function handleHandlerFormSubmit (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup (popupProfile)
  
}

formElement.addEventListener('submit', handleHandlerFormSubmit);
popupAddButton.addEventListener('click', handleAddtFormSubmit);
popupCloseButton.addEventListener('click', () => closePopup(popupProfile));
 
popupOpenButton.addEventListener('click', () => openPopup(popup)); 
       addButton.addEventListener('click', () => openPopup(popupAddForm));
popupCloseButton.addEventListener('click', () => closePopup(popupAddForm));




popupImg.querySelector('.popup__close-button').addEventListener('click', function (evt) {
  popupImg.classList.remove('popup_opened');
});
popupImg.addEventListener('click', function (evt) {
  popupImg.classList.remove('popup_opened');
});