import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom"
import {FC} from "react";
import {productsStore} from "../../stores/products";
import {CardProductProps} from "./CardProduct.props";


 const CardProduct: FC<CardProductProps> = ({img, title, authors, category, etag}): JSX.Element => {
    const navigate = useNavigate()

    return (
            <Card sx={{ width: 280 }}
            onClick={()=>{
                navigate(`/book`)
                productsStore.addDetailProduct(etag)
            }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={img || "img/no_foto.png"}
                        alt="image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {category? category[0] : ''}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {title? title : ''}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {authors? authors?.join(", ") : ''}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}
export default CardProduct;
