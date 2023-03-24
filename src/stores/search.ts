import {makeAutoObservable} from "mobx";


class Search {
    search: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    setSearch (searchUser: string) {
        this.search = searchUser
    }

}

export const searchStore = new Search()