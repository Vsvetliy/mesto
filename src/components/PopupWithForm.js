import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
	constructor(popupSelector, onSubmit) {
        super(popupSelector)
        this._onSubmit = onSubmit 
        this._popupContainer = this._popup.querySelector('.popup__container');
        
	}
    _getInputValues() {
        return this._popup.querySelectorAll('.popup__input');
    }
    setEventListeners() {
        super.setEventListeners()
        this._popupContainer.addEventListener('submit', this._onSubmit);
       
    }
    close() {
        super.close()
        this._getInputValues().forEach(formInput =>  formInput.value = '');
    }

}