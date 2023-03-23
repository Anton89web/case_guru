import axios from "axios";
import {productsStore} from "../stores/products";

export async function fetchData(num = 0) {
  const key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
  const path = `https://www.googleapis.com/books/v1/volumes?q=hobbit&startIndex=${0+num}&maxResults=30&key=${key}`
  try {
    const {data} = await axios.get(path)
    console.log(data)
    productsStore.addProduct(data?.items)
    productsStore.setFoundResults(data?.totalItems)
  } catch (e) {
    alert(e)
  }
}
