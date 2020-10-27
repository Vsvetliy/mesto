let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit_button');
let popupCloseButton = popup.querySelector('.popup__close_button');
let page = document.querySelector('.page');
let seveButton = document.querySelector('.popup__Submit_Button')
let songsContainer = document.querySelector('.profile__author_edit');
let popupToggle = function (event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');

}


popupOpenButton.addEventListener('click', popupToggle);

popupCloseButton.addEventListener('click', popupToggle);



let formElement = document.querySelector('.popup__container') 


function formSubmitHandler (evt) {
    evt.preventDefault(); 

    
    let nameInput = formElement.querySelector('.Popup__author');
  let jobInput = formElement.querySelector('.Popup__author-subline');
  
  document.querySelector('.profile__quote-author').textContent = nameInput.value;
 document.querySelector('.profile__quote-author-subline').textContent = jobInput.value;
  
}
seveButton.addEventListener('click', popupToggle);

seveButton.addEventListener('click', formSubmitHandler); 