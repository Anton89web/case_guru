import {FC} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./DetailProduct.module.css"
import {productsStore} from "../../stores/products";
import {Product} from "../../Interfaces/ProductInterface";


const DetailProduct: FC = (): JSX.Element => {
        const [obj]: Omit<Product, 'id'|'etag'>[] = productsStore?.detailProduct
        const {volumeInfo: {imageLinks, title, authors, categories, description}} = obj

    return (
        <div>
            <div className="container">
                <div className={styles.detail__wrapper}>
                    <CardMedia
                        className={styles.detail__img}
                        component="img"
                        height="280"
                        image= {imageLinks?.thumbnail ? imageLinks.thumbnail : "img/no_foto.png"}
                        alt="image"
                    />
                    <CardContent className={styles.card__content}>
                        <Typography variant="body2" color="text.secondary">
                            {categories?.join(', ') || ''}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {title || ''}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {authors?.join(', ') || ''}
                        </Typography>
                        <div style={{lineHeight: '25px'}}>
                            {description || ""}
                        </div>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
