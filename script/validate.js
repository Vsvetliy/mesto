

const showInputError = (formElement, inputElement, errorMessage, options) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(options.inputTypeActiveClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(options.inputErrorActiveClass);
  };
  
  const hideInputError = (formElement, inputElement, options) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(options.inputTypeActiveClass);
    errorElement.classList.remove(options.inputErrorActiveClass);
    errorElement.textContent = '';
  };
  
  
  function setEventListeners(formElement, options) {
    const inputList = Array.from(formElement.querySelectorAll(options.popupInputSelector)); 
    checkFormValidity (formElement, options);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, options);
        checkFormValidity (formElement, options);
      });
      
    }); 
  }
  
  
  
  const checkInputValidity = (formElement, inputElement, options) => {
    if (!inputElement.validity.valid) {
       showInputError(formElement, inputElement, inputElement.validationMessage, options);
  } else {
    hideInputError(formElement, inputElement, options); 
    }
  };

    const checkFormValidity = (formElement, options) => {
        const submitButton  = formElement.querySelector(options.submitButtonSelector);
        const inputList = Array.from(formElement.querySelectorAll(options.popupInputSelector)); 
        if (hasInvalidInput(inputList)) {
          disableSubmit(submitButton, options); 
        } else {
          enableSubmit(submitButton, options);
        }
      };
    


    const enableSubmit= (submitButton, options) => {
      submitButton.classList.remove(options.submitButtonDisabledClass);
      submitButton.disabled=false;
      };


    const disableSubmit= (submitButton, options) => {
      submitButton.classList.add(options.submitButtonDisabledClass);
        submitButton.disabled=true;
    };



  function enableValidation(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
        
            evt.preventDefault();
        });
  
        setEventListeners(formElement, options);
    }); 
  }


  enableValidation({
    formSelector: '.popup__validatable',
    popupInputSelector: '.popup__input',
    submitButtonSelector: 'button[type = "submit"]',
    submitButtonDisabledClass: 'popup__submit-button_disabled',
    inputErrorActiveClass: 'popup__input-error_active',
    inputTypeActiveClass: 'popup__input_type_error'
  })



  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }