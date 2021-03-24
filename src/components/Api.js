export default class Api {
    constructor(options) {
     
    }
    getInfoUser() {
        const request = fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
            method: 'get',
            headers: {
                authorization: '32d33121-ecae-4993-8e9f-60de3dfa8ed6',
                'Content-Type': 'application/json'
            },
            
        });
        
        const jsonInfoUser = request.then((res) => {
           if (res.ok) {
               return res.json();
           }
           return Promise.reject(`Ошибка: ${res.status}`);
        })
        
      return jsonInfoUser  
    }
    getCards() {
        const request = fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards ', {
            method: 'get',
            headers: {
                authorization: '32d33121-ecae-4993-8e9f-60de3dfa8ed6',
                'Content-Type': 'application/json'
            },
            
        });
        
        const jsonCards = request.then((res) => {
           if (res.ok) {
               return res.json();
           }
           return Promise.reject(`Ошибка: ${res.status}`);
        })
        
      return jsonCards  
    }
    setInfoUser(data) {
        const request = fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '32d33121-ecae-4993-8e9f-60de3dfa8ed6',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.job
              })
        });
        
        const jsonSetInfoUser = request.then((res) => {
           if (res.ok) {
               return res.json();
           }
           return Promise.reject(`Ошибка: ${res.status}`);
        })
        
      return jsonSetInfoUser  
    }
    addNewCard(data) {
        const request = fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards ', {
            method: 'POST',
            headers: {
                authorization: '32d33121-ecae-4993-8e9f-60de3dfa8ed6',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.title,
                link: data.link
              })
        });
        
        const jsonaddNewCard = request.then((res) => {
           if (res.ok) {
               return res.json();
           }
           return Promise.reject(`Ошибка: ${res.status}`);
        })
        
      return jsonaddNewCard  
    }
} 