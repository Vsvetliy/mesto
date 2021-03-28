const profileElement = document.querySelector('.popup_profile').querySelector('.popup__container');
const nameInput = profileElement.querySelector('.popup__input_name_author');
const jobInput = profileElement.querySelector('.popup__input_name_job');
const avatarUser = document.querySelector('.profile__photo-avatar');
const popupAddFormElement = document.querySelector('.popup_add-form').querySelector('.popup__validatable');
const popupSetAvatar = document.querySelector('.popup_aupdate_avatar').querySelector('.popup__validatable');
const popupProfileElement = document.querySelector('.popup_profile').querySelector('.popup__validatable');
const popupOpenButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const validateOptions = {
    popupInputSelector: '.popup__input',
    submitButtonSelector: 'button[type = "submit"]',
    submitButtonDisabledClass: 'popup__submit-button_disabled',
    inputErrorActiveClass: 'popup__input-error_active',
    inputTypeActiveClass: 'popup__input_type_error'
};





export { nameInput, jobInput, validateOptions, avatarUser, popupAddFormElement, popupSetAvatar,popupProfileElement, popupOpenButton, addButton, };
