import {makeAutoObservable} from "mobx";

export default class userStore {
    constructor(){
        this._isAuth = true;
        this.user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool){
        this._isAuth = bool;
    }

    setIsUser(user){
        this._user = user;
    }

    get isAuth(){
        return this._isAuth
    }

    get getUser(){
        return this._user
    }
}