import React, {FC} from 'react';
import styles from "./Main.module.css"
import CardProduct from "../CardProduct/CardProduct";
import Btn from "../UI/Button/Button";
import {productsStore} from "../../stores/products";
import {observer} from "mobx-react-lite";
import {Product} from "../../Interfaces/ProductInterface";
import ProgressRoll from "../ProgressRoll/ProgresRoll";
import {TransitionsModal} from "../UI/Modal/Modal";
import {searchStore} from "../../stores/search";


const MainComponent: FC = (): JSX.Element => {
    const {foundResults, products, loadingProducts} = productsStore

    return (
        <main className={styles.main}>
            <div className={`${loadingProducts? styles.progress_roll : styles.hidden}`}>
              <ProgressRoll/>
            </div>
            {products.length ?
                <div className="container">
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
            </div> : <TransitionsModal/>}
        </main>
    );
};

export const Main = observer(MainComponent);
