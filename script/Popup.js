export default class Popup {
	constructor(popupSelector) {
        this._popupSelector = popupSelector
        this._popup = document.querySelector(this._popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');

	}
    open() {
         this._popup.classList.add('popup_opened');
         document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt)  {
        if (evt.key === 'Escape') {
            this.close();
           
        }
    }

    setEventListeners() {

        this._popupCloseButton.addEventListener('click', () => this.close());

    }
}