import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333', color: '#fff' }}>
            <Container maxWidth="lg"> 
                <Toolbar disableGutters>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        NextShopDB
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="error"> 
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
