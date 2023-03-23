import React, {FC, useEffect} from 'react';
import styles from "./Main.module.css"
import CardProduct from "../CardProduct/CardProduct";
import Btn from "../UI/Button/Button";
import {productsStore} from "../../stores/products";
import {observer} from "mobx-react-lite";
import {fetchData} from "../../api/apiGetProducts";

const MainComponenet: FC = () => {
    const {foundResults, products} = productsStore
    useEffect(()=> {
        fetchData()
    }, [])
    return (
        <main className={styles.main}>
            <div className="container">
                <p className={styles.main__title}>Found {foundResults} results</p>
                <div className={styles.main__products_grid}>
                    {[...products].map(({id, volumeInfo: {imageLinks, title, authors, categories}}) =>
                        <CardProduct key={id}
                                     img={imageLinks?.thumbnail}
                                     title={title}
                                     authors={authors}
                                     category={categories}
                        />)}
                </div>
                <Btn/>
            </div>

        </main>
    );
};

export const Main = observer(MainComponenet);
