import {makeAutoObservable} from "mobx";


class Filters {
    categories = [
        'all',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
    ]

    sorting = [
        'relevance',
        'newest',
    ]

    categorieActive = 'all'
    sortingActive = 'relevance'

    constructor() {
        makeAutoObservable(this)
    }

    changeCategories (categorie: string) {
        this.categorieActive = categorie
    }

    changeSorting (sort: string){
        this.sortingActive = sort
    }
}

export const filtersStore = new Filters()