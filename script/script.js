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

  //element-template
  let  elements = document.querySelector('.elements');
  
  let elementTemplate = document.querySelector('.element-template').content;


  initialCards.forEach(function(element){
    const templateCards = elementTemplate.cloneNode(true);

    elementTemplate.querySelector('.element__text').textContent = element.name;
    elementTemplate.querySelector('.element__images').src = element.link;
   // elementTemplate.querySelector('.element__text').textContent = element.name;
  
    elements.append(templateCards)


  })




  //const elements = document.querySelector('.elements')
 // const templateElement = initialCards.reduce((result, name, link) => (
  //    result + `
  //    <article class="element">
   //   <img src="./images/ural.jpg" alt="Уральские горы" class="element__images"> 
   //   <div class="element__text-box">
    //    <h2 class="element__text">${name}</h2>
    //    <button type = "button" name = "like_button" class="element__like-button">
    //    </button>
    //  </div>
  //  </article>
 //     `
 // ))
  
//  elements.innerHTML = templateElement;
  
  




















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