import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container, Typography, Button } from '@mui/material';
import products from '../../data/products';

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;

    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return (
            <Container maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Product not found
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {product.name}
            </Typography>
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={800}  
                height={600}
                layout="responsive" 
            />
            <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
                ${product.price}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                {product.description}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                Add to Cart
            </Button>
        </Container>
    );
}
