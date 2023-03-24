import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {FC, useState} from "react";
import * as React from "react";
import {searchStore} from "../../../stores/search";
import {FetchData} from "../../../api/apiGetProducts";
import {productsStore} from "../../../stores/products";
import styles from "./Search.module.css"

const Search: FC = (): JSX.Element => {
    const [searchText, setSearchText] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);

    const SearchData = () => {
        searchStore.setSearch(searchText)
        if (searchStore.search){
            setValid(false)
            productsStore.setLoading(true)
            FetchData(0, productsStore.addNewProduct)
        } else {
            setValid(true)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement >)=> {
        if (e.key === "Enter"){
            e.preventDefault()
            SearchData()
        }
    }

    return (
        <>{valid &&
        <span className={styles.valid}>Введите название книги!!</span>}
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, margin: '0 auto' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Book name"
                inputProps={{ 'aria-label': 'search google books' }}
                onChange={e => setSearchText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                value={searchText}
            />
            <IconButton onClick={()=> SearchData()}
                        type={'button'}
                        sx={{ p: '10px' }}
                        aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
        </>
    );
}

export default Search