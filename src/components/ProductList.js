import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import products from '../data/products';

export default function ProductList() {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
    );
}
