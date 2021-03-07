export default class FormValidator {
	constructor(options, formElement) {
        this._options = options;
        this._formElement = formElement;
	}

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(this._formElement, this._options);
    }

    _setEventListeners(formElement, options) {
        const inputList = Array.from(formElement.querySelectorAll(options.popupInputSelector)); 
        this._checkFormValidity (formElement, options);
        const self = this;

        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', function () {
            self._checkInputValidity(formElement, inputElement, options);
            self._checkFormValidity (formElement, options);
          });
          
        }); 
    }
    _checkFormValidity(formElement, options) {
        const submitButton  = formElement.querySelector(options.submitButtonSelector);
        const inputList = Array.from(formElement.querySelectorAll(options.popupInputSelector)); 
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmit(submitButton, options); 
        } else {
            this._enableSubmit(submitButton, options);
        }
      };
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      }); 
    }
    _enableSubmit(submitButton, options) {
        submitButton.classList.remove(options.submitButtonDisabledClass);
        submitButton.disabled=false;
    };
  
  
    _disableSubmit(submitButton, options) {
        submitButton.classList.add(options.submitButtonDisabledClass);
        submitButton.disabled=true;
    };

    _checkInputValidity(formElement, inputElement, options) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, options);
        } 
        else {
            this._hideInputError(formElement, inputElement, options); 
        }
    };

    _showInputError(formElement, inputElement, errorMessage, options) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
        inputElement.classList.add(options.inputTypeActiveClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(options.inputErrorActiveClass);
      };
      
    _hideInputError(formElement, inputElement, options) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
        inputElement.classList.remove(options.inputTypeActiveClass);
        errorElement.classList.remove(options.inputErrorActiveClass);
        errorElement.textContent = '';
      };


}