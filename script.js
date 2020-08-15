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

//popupToggle();


popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);




//console.log(
    //popup,
   // popupCloseButton,
   // popupOpenButton
//)
function addName() {
    let artist = document.querySelector('.Popup__author');
    let song = document.querySelector('.Popup__author-subline');
  
    songsContainer.insertAdjacentHTML('beforeend', `
          <div class="profile__author">
        <h1 class="profile__quote-author">${artist.value}</h1>
        <p class="profile__quote-author-subline">${song.value}</p>
            
          </div>
    `);
  artist.value = '';
      song.value = '';
   // renderAdded();
  }
  
  seveButton.addEventListener('click', addName);