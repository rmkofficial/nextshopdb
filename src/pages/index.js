import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
                    Featured Products
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Grid>
            </Container>
        </>
    );
}
