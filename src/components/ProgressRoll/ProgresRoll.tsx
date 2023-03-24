import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {FC} from "react";

const CircularIndeterminate: FC = (): JSX.Element =>  {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress/>
        </Box>
    );
}

export default CircularIndeterminate