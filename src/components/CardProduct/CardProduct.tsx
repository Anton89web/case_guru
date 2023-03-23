import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom"
import {FC} from "react";


interface Book  {
    img: string
    title: string
    authors: string []
    category: string []
}

 const CardProduct: FC<Book> = ({img, title, authors, category})=> {
    const navigate = useNavigate()

    return (
            <Card sx={{ width: 250 }}
            onClick={()=> navigate(`/book`)}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={img}
                        alt="image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {category? category[0] : ''}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {title? title : ''}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {authors? authors : 0}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}
export default CardProduct;
