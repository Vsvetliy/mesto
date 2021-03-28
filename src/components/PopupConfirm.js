import Popup from './Popup.js';
export default class PopupConfirm extends Popup {
	constructor(popupSelector, onSubmit) {
        super(popupSelector)
        this._onSubmit = onSubmit 
        this._popupContainer = this._popup.querySelector('.popup__container');
        this._popupSubmit = this._popup.querySelector('button[type=submit]');
        this._popupSubmitText = this._popupSubmit.textContent;
        this._submit = (evt) => this._onSubmit(evt, this._getInputValues());

	}
    _getInputValues() {
        const inputList = this._popup.querySelectorAll('.popup__input');
        const formValues = {};
        inputList.forEach(input => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    

    close() {
        super.close()
        this._popupContainer.reset()
        this._popupSubmit.textContent = this._popupSubmitText
        
    }
    
    
    setEventListeners() {
            super.setEventListeners()
            this._popupContainer.addEventListener('submit', this._submit)
        }
}