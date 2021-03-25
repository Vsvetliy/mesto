import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
	constructor(popupSelector, onSubmit) {
        super(popupSelector)
        this._onSubmit = onSubmit 
        this._popupContainer = this._popup.querySelector('.popup__container');
        this._popupSubmit = this._popup.querySelector('button[type=submit]');
        this._popupSubmitText = this._popupSubmit.textContent;
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
        this._popupSubmit.textContent = this._popupSubmitText
    }
    save() {
        this._popupSubmit.textContent = 'Сохранение...'
    }
}