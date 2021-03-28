
export default class Card {
	constructor(data, cardSelector, handleCardClick, userId, api, handleConfirmDelete) {
        this._handleConfirmDelete = handleConfirmDelete;
        this._data = data;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._userId = userId;
        this._api = api;
        const elementTemplate = document.querySelector(this._cardSelector).content;
        this._templateCard = elementTemplate.cloneNode(true); 
        this._elementText = this._templateCard.querySelector('.element__text');
        this._elementImages = this._templateCard.querySelector('.element__images');
        this._elementLikeCounter = this._templateCard.querySelector('.like_counter');
        this._elementlikebutton = this._templateCard.querySelector('.element__like-button');
        this._elementDeleteButton = this._templateCard.querySelector('.element__delete-button');
        this._popupImgImages = document.querySelector('.popup_img').querySelector('.popup__images');
        this._popupImgText = document.querySelector('.popup_img').querySelector('.popup__text');
        this._id = document.querySelector('#popup-confirm');
        this._article = this._templateCard.querySelector('.element');

	}
    createCard() {
        this._elementText.textContent = this._data.name; 
        this._elementImages.src = this._data.link;
        this._elementLikeCounter.textContent = this._data.likes.length;
        this._addImgClickEventListener();
        if(this._userId == this._data.owner._id){
        this._addDeleteButtonClickEventListener();
        }else{
            this._elementDeleteButton.classList.add('delet_none')
        }
        if(this._data.likes.find((like) => like._id == this._userId)){
            this._elementlikebutton.classList.add('element__like-button_activ');
        }

        this._addLikebuttonClickEventListener();
        this._article.setAttribute("id", this._data._id);
        return this._templateCard;
    }
    
    
    _addLikebuttonClickEventListener() {
        
        this._elementlikebutton.addEventListener('click',  (evt) => {
            if(this._data.likes.find((like) => like._id == this._userId)) {
                this._api.deleteLikes(this._data._id)
                .then((data) => {
                    evt.target.parentNode.querySelector('.like_counter').textContent = data.likes.length;
                    evt.target.classList.remove('element__like-button_activ');
                    this._data.likes = data.likes;
                })
                .catch((err) => {
                console.log(err);
                }); 
            }else {
               
                this._api.addLikes(this._data._id)
                .then((data) => {
                    evt.target.parentNode.querySelector('.like_counter').textContent = data.likes.length;
                    evt.target.classList.add('element__like-button_activ');
                    this._data.likes = data.likes;
                })
                .catch((err) => {
                console.log(err);
                }); 
            
            }
       
        });
    }

    
    _addDeleteButtonClickEventListener() {
        this._elementDeleteButton.addEventListener('click', (evt) => 
        {
            evt.preventDefault();
            this._id.value = this._data._id; 
            this._handleConfirmDelete(evt) 
        });
    }
    


    _delete(evt) {
        evt.preventDefault();
        evt.target.closest('.element').remove();
    }
    
    _addImgClickEventListener() {
        
        this._elementImages.addEventListener('click', () =>  {
            this._handleCardClick(this._data)
            
        });
    }
    
}