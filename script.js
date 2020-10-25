let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit_button');
let popupCloseButton = popup.querySelector('.popup__close_button');
let page = document.querySelector('.page');
let seveButton = document.querySelector('.popup__Submit_Button')
let songsContainer = document.querySelector('.profile__author_edit');
let popupToggle = function (event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
}

//popupToggle();


popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


// Находим форму в DOM
//let formElement = // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//function formSubmitHandler (evt) {
  //  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
   // let nameInput = // Воспользуйтесь инструментом .querySelector()
  //  let jobInput = // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
//}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler); 