

export default class UserInfo {
	constructor(options) {
       
        this._nameUser = document.querySelector(options.nameUserSelector)
        this._infoUser = document.querySelector(options.infoUserSelector)
        this._avatarUser = document.querySelector(options.avatarUserSelector)
       ;

	}
    getUserInfo() {
      
        return { 
           name: this._nameUser.textContent,
           job: this._infoUser.textContent,
        };    
    }
    setUserInfo(options) {
        
        this._nameUser.textContent = options.name
        this._infoUser.textContent = options.job
        this._avatarUser.src = options.avatar
        
        
        
    }
}