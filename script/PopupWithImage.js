import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
        super(popupSelector)
        this._popupImgImages = document.querySelector('.popup_img').querySelector('.popup__images');
        this._popupImgText = document.querySelector('.popup_img').querySelector('.popup__text');
	}
    
    open(options) {

        super.open()

        this._popupImgImages.src = options.link;
        this._popupImgText.textContent = options.name;
    }
    

}