import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

export default function ProductCard({ product }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.imageUrl}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        ${product.price}
                    </Typography>
                    <Button variant="contained" color="primary">
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
}
