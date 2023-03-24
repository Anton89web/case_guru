import Button from '@mui/material/Button';
import {FetchData} from "../../../api/apiGetProducts";
import { productsStore } from '../../../stores/products';


const Btn = ()=> {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <Button
                onClick={() =>{
                    FetchData(30, productsStore.addProduct)}
                }
                variant="outlined">Load more</Button>
        </div>
    );
}

export default Btn