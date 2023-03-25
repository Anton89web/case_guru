import {makeAutoObservable} from "mobx";


class Search {
    search: string = ''
    errorServer: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setSearch(searchUser: string) {
        this.search = searchUser
    }

    setErrorServer(flag: boolean) {
        this.errorServer = flag
    }

}

export const searchStore = new Search()