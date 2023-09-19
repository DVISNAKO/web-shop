import {makeAutoObservable} from "mobx";

export default class deviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this.devices = [
            {id: 1, name: 'Iphone 12pro', price: 25000, rating: 4},
            {id: 1, name: 'Iphone 13pro', price: 35000, rating: 5},
        ]

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