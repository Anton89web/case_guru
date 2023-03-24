import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styles from "./SelectLabels.module.css"
import Select from '@mui/material/Select';
import {SelectLabelsProps} from "./SelectLabels.props";
import {filtersStore} from "../../../stores/filters";
import {FetchData} from "../../../api/apiGetProducts";
import {productsStore} from "../../../stores/products";
import {searchStore} from "../../../stores/search";


const SelectLabels = ({label, activeValue, values, changeValue }: SelectLabelsProps): JSX.Element=> {

    return (
        <div className={styles.select}>
            <span className={styles.select__label}>{label}</span>
            <FormControl sx={{ m: 1, minWidth: 180, backgroundColor: "white", borderRadius: 1 }}>
                <Select
                    value={activeValue}
                    onChange={e =>{
                        changeValue.call(filtersStore, e.target.value)
                        if (searchStore.search){
                            FetchData(0, productsStore.addNewProduct)
                        }
                    }}
                >
                    {values.map(value =>
                        <MenuItem value={value} key={value}>
                        {value.slice(0,1).toUpperCase() + value.slice(1)}
                        </MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectLabels