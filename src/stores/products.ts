import {makeAutoObservable} from "mobx";

class Products {
    foundResults: number = 0
    products: any = [] //Типизировать объект

    constructor() {
        makeAutoObservable(this)
    }

    setFoundResults(data: number) {
        this.foundResults = data
    }

    addProduct(data: string[]) {
        this.products = [...this.products, ...data]
    }
}

export const productsStore = new Products