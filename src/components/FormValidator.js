export default class FormValidator {
	constructor(options, formElement) {
        this._options = options;
        this._formElement = formElement;
        this._submitButton  = formElement.querySelector(options.submitButtonSelector);
        this._inputList = Array.from(formElement.querySelectorAll(options.popupInputSelector)); 
	}

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    _setEventListeners() {
        this._checkFormValidity();
        
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._checkFormValidity();
          });
          
        }); 
    }

    _checkFormValidity() {
          if (this._hasInvalidInput()) {
            this.disableSubmit(); 
        } else {
            this.enableSubmit();
        }
    };

    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      }); 
    }

    enableSubmit() {
        this._submitButton.classList.remove(this._options.submitButtonDisabledClass);
        this._submitButton.disabled=false;
    };
  
    disableSubmit() {
        this._submitButton.classList.add(this._options.submitButtonDisabledClass);
        this._submitButton.disabled=true;
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } 
        else {
            this._hideInputError(inputElement); 
        }
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
        inputElement.classList.add(this._options.inputTypeActiveClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._options.inputErrorActiveClass);
      };
      
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
        inputElement.classList.remove(this._options.inputTypeActiveClass);
        errorElement.classList.remove(this._options.inputErrorActiveClass);
        errorElement.textContent = '';
      };


}