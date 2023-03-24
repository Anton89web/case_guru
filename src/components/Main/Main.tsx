import React, {FC, useEffect, useState} from 'react';
import styles from "./Main.module.css"
import CardProduct from "../CardProduct/CardProduct";
import Btn from "../UI/Button/Button";
import {productsStore} from "../../stores/products";
import {observer} from "mobx-react-lite";
import {Product} from "../../Interfaces/ProductInterface";
import ProgressRoll from "../ProgressRoll/ProgresRoll";
import Modal from "../UI/Modal/Modal";


const MainComponent: FC = (): JSX.Element => {
    const [firstRender, setFirstRender] = useState<boolean>(true)
    const {foundResults, products, loadingProducts} = productsStore

    useEffect(()=>{
        setFirstRender(!firstRender)
    },[])

    console.log(firstRender)
    return (
        <main className={styles.main}>
            <div className={`${loadingProducts? styles.progress_roll : styles.hidden}`}>
              <ProgressRoll/>
            </div>
            {products.length ?  <div className="container">
                <p className={styles.main__title}>Found {foundResults} results</p>
                <div className={styles.main__products_grid}>
                    {[...products].map(({etag, volumeInfo: {imageLinks, title, authors, categories}}: Product) =>
                        <CardProduct
                            key={etag}
                            img={imageLinks?.thumbnail}
                            title={title}
                            authors={authors}
                            category={categories}
                            etag={etag}
                        />)}
                </div>
                {(products.length > foundResults - 30) ? "" : <Btn/>}
            </div> : firstRender? <></> : <Modal/>}
        </main>
    );
};

export const Main = observer(MainComponent);
