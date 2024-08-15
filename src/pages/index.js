import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from '../components/ProductList';

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Featured Products
            </Typography>
            <ProductList />
        </Container>
    );
}
