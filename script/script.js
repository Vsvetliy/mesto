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
//let popupToggle = function (event) {
    //event.preventDefault();
   //popup.classList.toggle('popup_opened');

//}


//popupOpenButton.addEventListener('click', popupToggle);

//popupCloseButton.addEventListener('click', popupclose);


function popupOpen (evt) {
    popup.classList.add('popup_opened');
    console.log(1)
    nameInput.value = nameProfile.textContent;
    console.log(nameProfile.textContent)
    jobInput.value = jobProfile.textContent;
    console.log(jobProfile.textContent)
}


function popupClose (evt) {
      popup.classList.remove('popup_opened');
}





function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', popupClose); 
popupOpenButton.addEventListener('click', popupOpen); 