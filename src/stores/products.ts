import {makeAutoObservable} from "mobx";
import {Product} from "../Interfaces/ProductInterface"


class Products {
    loadingProducts: boolean = false
    foundResults: number = 0
    empty = false
    products: Product[] = []
    detailProduct: Product[] = [{
        id: '',
        etag: '',
        volumeInfo: {
            imageLinks:{
                thumbnail: ""
            } ,
            title: '',
            authors: [''],
            categories: [''],
            description: '',
        }
    }]

    constructor() {
        makeAutoObservable(this)
    }

    setFoundResults(data: number) {
        this.foundResults = data
    }

    addProduct(data: Product[]) {
        this.products = [...this.products, ...data]
    }

    addNewProduct(data: Product[]) {
        this.products.length = 0
        this.products = [...data]
    }

    addDetailProduct(etag: string){
        this.detailProduct = this.products.filter(e => e.etag === etag )
    }

    setLoading(boolean: boolean){
        this.loadingProducts = boolean
    }

    emptySearch(flag: boolean){
        this.empty = flag
}


}

export const productsStore = new Products()