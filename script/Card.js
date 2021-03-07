export default class Card {
	constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
	}
    createCard() {
        const elementTemplate = document.querySelector(this._cardSelector).content;
        const templateCard = elementTemplate.cloneNode(true); 
        const elementText = templateCard.querySelector('.element__text');
        const elementImages = templateCard.querySelector('.element__images');

        elementText.textContent = this._name; 
        elementImages.src = this._link;
        this._addImgClickEventListener(elementImages);
        this._addDeleteButtonClickEventListener(templateCard);
        this._addLikebuttonClickEventListener(templateCard);
        
        
         return templateCard;
    }

    _addLikebuttonClickEventListener(templateCard) {
        const elementlikebutton = templateCard.querySelector('.element__like-button');
        elementlikebutton.addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__like-button_activ');
        });
    }
    _addDeleteButtonClickEventListener(templateCard) {
        const elementDeleteButton = templateCard.querySelector('.element__delete-button');
        elementDeleteButton.addEventListener('click', this._handleDelete);
    }

    _handleDelete(evt) {
        evt.target.closest('.element').remove();
    }
    
    _addImgClickEventListener(elementImages) {
        const popupImg = document.querySelector('.popup_img');
        const popupImgImages = popupImg.querySelector('.popup__images');
        const popupImgText = popupImg.querySelector('.popup__text');
        const self = this;

        elementImages.addEventListener('click', function (evt) {
            popupImgImages.src = self._link;
            popupImgText.textContent = self._name;
            self._openPopup(popupImg);
        });
    }
    _openPopup(popup) {
      
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEscape);
           
    }
    _closeByEscape(evt) {
        if (evt.key === 'Escape') {
          const openedPopup = document.querySelector('.popup_opened')
          this._closePopup(openedPopup);
         
        }
      }
    _closePopup (popup) {
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEscape);
      }
}