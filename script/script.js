let popup = document.querySelector('.popup');
let popupAddForm = document.querySelector('.popup__add-form');
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
let popupAddButton = document.querySelector('.popup__add-button');
let titleInput = formElement.querySelector('.popup__input_title');
let linkInput = formElement.querySelector('.popup__input_link');
let elements = document.querySelector('.elements');
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
  //функция пройди по массиву и выполни renderItem
  initialCards.forEach(renderItem);
}

function renderItem(element) {
    let templateCards = elementTemplate.cloneNode(true); //клонируем шаблон
    templateCards.querySelector('.element__text').textContent = element.name; 
    templateCards.querySelector('.element__images').src = element.link;
    elements.append(templateCards);  //вставляем в elements наш шаблон.
    
  }
//console.log(templateCards);


  function formAddElement (evt) {
    renderItem(titleInput.value, linkInput.value)
    //const templateCards = elementTemplate.cloneNode(true);
    
  
    
  //elements.append(templateCards)


  
   popupClose (evt)
   
}





//  elements.innerHTML = templateElement;
//function renderItem(element) {
//	const htmlElement = elementTemplate.cloneNode(true);
//	htmlElement.querySelector('.item__text').innerText = text;
 // elements.append(templateCards)
//	setListeners(htmlElement);
	//list.appendChild(htmlElement);
//}

//function setListeners(element) {
	//element.querySelector('.delete').addEventListener('click', handleDelete);
	//element.querySelector('.edit').addEventListener('click', handleEdit);
	//element.querySelector('.duplicate').addEventListener('click', handleDuplicate);
//}



//function handleDelete(evt) {
//	evt.target.closest('.list__item').remove();
//	resetEditMode();
//}







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
  popupAddForm.classList.remove('popup_opened');
      popup.classList.remove('popup_opened');
      
}


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupClose (evt)
    
}

formElement.addEventListener('submit', formSubmitHandler);
//popupAddButton.addEventListener('submit', formAddElement);
popupCloseButton.addEventListener('click', popupClose); 
popupCloseButton2.addEventListener('click', popupClose); 
popupOpenButton.addEventListener('click', popupOpen) 