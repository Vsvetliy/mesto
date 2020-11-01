let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let page = document.querySelector('.page');
let seveButton = document.querySelector('.popup__submit-button')
let songsContainer = document.querySelector('.profile__author-edit');
let formElement = document.querySelector('.popup__container') 
let nameInput = formElement.querySelector('.popup__input_name_author');
let jobInput = formElement.querySelector('.popup__input_name_job');
let nameProfile = document.querySelector('.profile__quote-author');
let jobProfile = document.querySelector('.profile__quote-author-subline');

function popupOpen (evt) {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}


function popupClose (evt) {
      popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupClose (evt)
    
}

formElement.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', popupClose); 
popupOpenButton.addEventListener('click', popupOpen) 