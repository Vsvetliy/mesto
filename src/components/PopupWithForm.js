import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
	constructor(popupSelector, onSubmit) {
        super(popupSelector)
        this._onSubmit = onSubmit 
        this._popupContainer = this._popup.querySelector('.popup__container');
        
	}
    _getInputValues() {
        const inputList = this._popup.querySelectorAll('.popup__input');
        const formValues = {};
        inputList.forEach(input => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupContainer.addEventListener('submit', (evt) => this._onSubmit(evt, this._getInputValues()));


    }

    close() {
        super.close()
        this._popupContainer.reset()
        
    }

}