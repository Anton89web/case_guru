import {FC} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./DetailProduct.module.css"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const DetailProduct : FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'left',
        padding: 15,
        color: theme.palette.text.secondary,
        height: 50,
        lineHeight: '50px',
    }));
    return (
        <div>
            <div className="container">
                <div className={styles.detail__wrapper}>
                    <CardMedia
                        className={styles.detail__img}
                        component="img"
                        height="280"
                        image="/img/content.jpeg"
                        alt="image"
                    />
                    <CardContent className={styles.card__content}>
                        <Typography variant="body2" color="text.secondary">
                            {'Category'}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {'Name book'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {"Autors"}
                        </Typography>
                        <Item elevation={1}>
                            "Описание"
                        </Item>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
