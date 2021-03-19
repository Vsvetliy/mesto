import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
        super(popupSelector)
        this._popupImgImages = this._popup.querySelector('.popup__images');
        this._popupImgText = this._popup.querySelector('.popup__text');
	}
    
    open(options) {

        super.open()

        this._popupImgImages.src = options.link;
        this._popupImgText.textContent = options.name;
    }
    

}