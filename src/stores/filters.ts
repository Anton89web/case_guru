import {makeAutoObservable} from "mobx";


class Filters {
    categories: string[] = [
        'all',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
    ]

    sorting: string[] = [
        'relevance',
        'newest',
    ]

    categoryActive: string = 'all'
    sortingActive: string = 'relevance'

    constructor() {
        makeAutoObservable(this)
    }

    changeCategories (category: string) {
        this.categoryActive = category
    }

    changeSorting (sort: string){
        this.sortingActive = sort
    }
}

export const filtersStore = new Filters()