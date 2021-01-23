let popup = document.querySelector('.popup');
let popupAddForm = document.querySelector('.popup_add-form');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupCloseButton2 = popupAddForm.querySelector('.popup__close-button');
let addButton = document.querySelector('.profile__add-button');
let page = document.querySelector('.page');
let seveButton = document.querySelector('.popup__submit-button')
let songsContainer = document.querySelector('.profile__author-edit');
let formElement = document.querySelector('.popup__container') 
let nameInput = formElement.querySelector('.popup__input_name_author');
let jobInput = formElement.querySelector('.popup__input_name_job');
let nameProfile = document.querySelector('.profile__quote-author');
let jobProfile = document.querySelector('.profile__quote-author-subline');
let popupAddButton = document.querySelector('.popup__add-form-button');
let titleInput = document.querySelector('.popup__input_title');
let linkInput = document.querySelector('.popup__input_link');
let elements = document.querySelector('.elements');
let popupImg = document.querySelector('.popup_img');
let popupImgImages = popupImg.querySelector('.popup__images');
let popupImgText = popupImg.querySelector('.popup__text');



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

  
 
  let elementTemplate = document.querySelector('.element-template').content;

function render() {
  
  initialCards.forEach(renderItem);
}




function renderItem(element) {
    let templateCards = elementTemplate.cloneNode(true); 
    let elementDeleteButton = templateCards.querySelector('.element__delete-button').addEventListener('click', handleDelete);
    let elementlikebutton = templateCards.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_activ');
    });

    templateCards.querySelector('.element__text').textContent = element.name; 
    templateCards.querySelector('.element__images').src = element.link;
    templateCards.querySelector('.element__images').addEventListener('click', function (evt) {
      popupImg.classList.add('popup_img-opened');
      popupImgImages.src = element.link;
      popupImgText.textContent = element.name;
    });
    elements.append(templateCards);  
  }




  function formAddElement (evt) {
   
    let templateCards = elementTemplate.cloneNode(true); 
    let elementDeleteButton = templateCards.querySelector('.element__delete-button').addEventListener('click', handleDelete);
    let elementlikebutton = templateCards.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_activ');
    });

    templateCards.querySelector('.element__text').textContent = titleInput.value; 
    templateCards.querySelector('.element__images').src = linkInput.value;
    templateCards.querySelector('.element__images').addEventListener('click', function (evt) {
      popupImg.classList.add('popup_img-opened');

    });
    elements.prepend(templateCards);  
   popupClose ()
   
}

function handleDelete(evt) {
	evt.target.closest('.element').remove();

}



render()


let profileaddbutton = document.querySelector('.profile__add-button');



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

popupImg.classList.remove('popup_img-opened');


popupImg.querySelector('.popup__close-button').addEventListener('click', function (evt) {
  popupImg.classList.remove('popup_img-opened');
});
popupImg.addEventListener('click', function (evt) {
  popupImg.classList.remove('popup_img-opened');
});