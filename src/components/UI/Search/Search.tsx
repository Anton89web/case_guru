import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {FC, useRef, useState} from "react";
import * as React from "react";

const Search: FC = ()=> {
    const [searchText, setSearchText] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null)


    const SearchData = () => {
        // ref.current?.focus()
        console.log(searchText)
        console.log("Search...")
        setSearchText('')

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement >)=> {
        if (e.key === "Enter"){
            e.preventDefault()
            SearchData()
        }
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, margin: '0 auto' }}
        >
            <InputBase
                ref={ref}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Book name"
                inputProps={{ 'aria-label': 'search google books' }}
                onChange={e => setSearchText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                value={searchText}
            />
            <IconButton type={'button'} sx={{ p: '10px' }} aria-label="search">
                <SearchIcon
                    onClick={()=> SearchData()}
                />
            </IconButton>
        </Paper>
    );
}

export default Search