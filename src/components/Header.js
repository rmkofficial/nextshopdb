// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333', color: '#fff' }}>
            <Toolbar>
                <Typography variant="h6">
                    NextShopDB
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
