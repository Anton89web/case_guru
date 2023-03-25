import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {FC, useState} from "react";
import {productsStore} from "../../../stores/products";
import {observer} from "mobx-react-lite";
import {searchStore} from "../../../stores/search";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const  TransitionsModalC: FC = (): JSX.Element => {

    const handleClose = () => {
        productsStore.emptySearch(false)
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={productsStore.empty}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={productsStore.empty}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {searchStore.errorServer? 'Ошибка получения данных c сервера' : 'Книги по Вашему запросу не найдены'}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export  const TransitionsModal = observer(TransitionsModalC)
