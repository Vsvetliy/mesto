const popup = document.querySelector('.popup');
const popupAddForm = document.querySelector('.popup_add-form');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupCloseButton2 = popupAddForm.querySelector('.popup__close-button');
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
  
  initialCards.forEach(renderItem);
}




function renderItem(element) {
  const templateCards = elementTemplate.cloneNode(true); 
  const elementDeleteButton = templateCards.querySelector('.element__delete-button').addEventListener('click', handleDelete);
  const elementlikebutton = templateCards.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_activ');
    });

    templateCards.querySelector('.element__text').textContent = element.name; 
    templateCards.querySelector('.element__images').src = element.link;
    templateCards.querySelector('.element__images').addEventListener('click', function (evt) {
      popupImg.classList.add('popup_opened');
      popupImgImages.src = element.link;
      popupImgText.textContent = element.name;
    });
    elements.append(templateCards);  
  }




  function formAddElement (evt) {
   
    const templateCards = elementTemplate.cloneNode(true); 
    const elementDeleteButton = templateCards.querySelector('.element__delete-button').addEventListener('click', handleDelete);
    const elementlikebutton = templateCards.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_activ');
    });

    templateCards.querySelector('.element__text').textContent = titleInput.value; 
    templateCards.querySelector('.element__images').src = linkInput.value;
    templateCards.querySelector('.element__images').addEventListener('click', function (evt) {
      popupImg.classList.add('popup_opened');

    });
    elements.prepend(templateCards);  
   popupClose ()
   
}

function handleDelete(evt) {
	evt.target.closest('.element').remove();

}



render()


const profileaddbutton = document.querySelector('.profile__add-button');



function popupOpen2 (evt) {
  popupAddForm.classList.add('popup_opened');
    
}
profileaddbutton.addEventListener('click', popupOpen2) 



function popupOpen (evt) {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


function popupClose (evt) {
  popup.classList.remove('popup_opened');
  popupAddForm.classList.remove('popup_opened');

}


function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClose (evt)
  
}

formElement.addEventListener('submit', formSubmitHandler);
popupAddButton.addEventListener('click', formAddElement);
popupCloseButton.addEventListener('click', popupClose);
popupCloseButton2.addEventListener('click', popupClose); 
popupOpenButton.addEventListener('click', popupOpen); 

popupImg.classList.remove('popup_opened');


popupImg.querySelector('.popup__close-button').addEventListener('click', function (evt) {
  popupImg.classList.remove('popup_opened');
});
popupImg.addEventListener('click', function (evt) {
  popupImg.classList.remove('popup_opened');
});