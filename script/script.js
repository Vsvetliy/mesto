let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let page = document.querySelector('.page');
let seveButton = document.querySelector('.popup__submit-button')
let songsContainer = document.querySelector('.profile__author-edit');
let formElement = document.querySelector('.popup__container') 
let nameInput = formElement.querySelector('.popup__input_author');
let jobInput = formElement.querySelector('.popup__input_job');
let nameProfile = document.querySelector('.profile__quote-author');
let jobProfile = document.querySelector('.profile__quote-author-subline');
let popupToggle = function (event) {
    //event.preventDefault();
    popup.classList.toggle('popup_opened');

}


popupOpenButton.addEventListener('click', popupToggle);

popupCloseButton.addEventListener('click', popupToggle);






function formSubmitHandler (evt) {
    evt.preventDefault(); 

    
    
  
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
  
}
seveButton.addEventListener('click', popupToggle);

seveButton.addEventListener('click', formSubmitHandler); 