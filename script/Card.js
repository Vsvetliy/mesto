import Popup from './Popup.js';
export default class Card {
	constructor(data, cardSelector) {
        this._data = data;
        this._cardSelector = cardSelector;
        const elementTemplate = document.querySelector(this._cardSelector).content;
        this._templateCard = elementTemplate.cloneNode(true); 
        this._elementText = this._templateCard.querySelector('.element__text');
        this._elementImages = this._templateCard.querySelector('.element__images');
        this._elementlikebutton = this._templateCard.querySelector('.element__like-button');
        this._elementDeleteButton = this._templateCard.querySelector('.element__delete-button');
        this._popupImg = document.querySelector('.popup_img');
        this._popupImgImages = this._popupImg.querySelector('.popup__images');
        this._popupImgText = this._popupImg.querySelector('.popup__text');
        this._popupImg2 = new Popup('.popup_img')
	}
    createCard() {
        this._elementText.textContent = this._data.name; 
        this._elementImages.src = this._data.link;
        this._addImgClickEventListener();
        this._addDeleteButtonClickEventListener();
        this._addLikebuttonClickEventListener();
        return this._templateCard;
    }

    _addLikebuttonClickEventListener() {
        
        this._elementlikebutton.addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__like-button_activ');
        });
    }

    _addDeleteButtonClickEventListener() {
        
        this._elementDeleteButton.addEventListener('click', this._handleDelete);
    }

    _handleDelete(evt) {
        evt.target.closest('.element').remove();
    }
    
    _addImgClickEventListener() {
        
        this._elementImages.addEventListener('click', () =>  {
            this._popupImgImages.src = this._data.link;
            this._popupImgText.textContent = this._data.name;
            this._popupImg2.open(this._popupImg);
        });
    }
    
}