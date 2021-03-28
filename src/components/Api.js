export default class Api {
    constructor(options) {
        this._options = options;
    }
       
    _toJson(request) {
      return  request.then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
         
       
    }

    getInfoUser() {
        const request = fetch(this._options.baseUrl + 'users/me', {
            method: 'get',
            headers: this._options.headers,
        });
        return this._toJson(request)
    
    }

    getCards() {
        const request = fetch(this._options.baseUrl + 'cards ', {
            method: 'get',
            headers: this._options.headers,
        });
        
        return this._toJson(request)  
    }

    setInfoUser(data) {
        const request = fetch(this._options.baseUrl + 'users/me', {   
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job
              })
        });
        
        return this._toJson(request)
    }
    
    addNewCard(data) {
        const request = fetch(this._options.baseUrl + 'cards', {  
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
              })
        });
        
        return this._toJson(request)
    }

    deleteCard(id) {
        const request = fetch(this._options.baseUrl + 'cards/' + id, {
            method: 'DELETE',
            headers: this._options.headers,
        });
        
        return this._toJson(request)
    }

    addLikes(id) {
        const request = fetch(this._options.baseUrl + 'cards/likes/' + id, {
            method: 'PUT',
            headers: this._options.headers,
        });
        
        return this._toJson(request)
    }

    deleteLikes(id) {
        const request = fetch(this._options.baseUrl + 'cards/likes/' + id, {
            method: 'DELETE',
            headers: this._options.headers,
        });
        
        return this._toJson(request)  
    }

    setAvatar(avatarLink) {
        const request = fetch(this._options.baseUrl + 'users/me/avatar', {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                avatar: avatarLink,
            })
        });
        
        return this._toJson(request)
    }
} 