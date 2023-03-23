import Button from '@mui/material/Button';
import {fetchData} from "../../../api/apiGetProducts";


const Btn = ()=> {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}} >
            <Button
                onClick={()=> fetchData(30)}
                variant="outlined">Load more</Button>
        </div>
    );
}

export default Btn