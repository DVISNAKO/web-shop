import {makeAutoObservable} from "mobx";

export default class deviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Philips'},
           
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12pro', price: 25000, rating: 4},
            {id: 1, name: 'Iphone 13pro', price: 35000, rating: 5},
            
        ]

        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }

    setBrands(brands){
        this._brands = brands;
    }

    setDevices(devices){
        this._devices = devices;
    }

    setSelectedType(type){
        this._selectedType = type;
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand;
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }

    get devices(){
        return this._devices;
    }

    get selectedType(){
        return this._selectedType;
    }

    get selectedBrand(){
        return this._selectedBrand;
    }
}