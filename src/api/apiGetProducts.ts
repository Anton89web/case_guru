import axios from "axios";
import {productsStore} from "../stores/products";
import {searchStore} from "../stores/search";
import {filtersStore} from "../stores/filters";
import {Product} from "../Interfaces/ProductInterface";

export async function fetchData(num:number=0, fun: { (data: Product[]): void}) {
  const key = `&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
  const searchText = `q=${searchStore.search}`
  const startIndex = `&startIndex=${0+num}`
  const category = `+subject:${filtersStore.categoryActive === "all" ? "" : filtersStore.categoryActive}`
  const orderBy = `&orderBy=${filtersStore.sortingActive}`
  const path = `https://www.googleapis.com/books/v1/volumes?${searchText}${category}${orderBy}${startIndex}&maxResults=30${key}`

  try {

    productsStore.setLoading(true)
    const {data} = await axios.get(path)

    if(data.items && data.totalItems){
      fun.call(productsStore, data.items)
      productsStore.setFoundResults(data.totalItems)
      productsStore.emptySearch(false)
      searchStore.setErrorServer(false)
    } else {
      productsStore.addNewProduct([])
      productsStore.setFoundResults(0)
      productsStore.emptySearch(true)
    }

  } catch (e) {
      productsStore.emptySearch(true)
      searchStore.setErrorServer(true)
      // alert(e)
  } finally {
    productsStore.setLoading(false)
  }
}
