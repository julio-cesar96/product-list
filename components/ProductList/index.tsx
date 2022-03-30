import React from 'react'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import { ProductCard } from '../ProductCard'
import { productList } from '../../data/productList.json'

const favoriteKey = 'favorite_products';

const FavProduct = (id: number) => {
    const favoriteProduct = productList.filter(
       (product) => product.id === id
    ); 
    const FavoriteProductList = localStorage.getItem(favoriteKey);
}




export const ProductList = () => {
    return (
        <>
            <Center p={6} mt={2}>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} bgColor="blue.50" w='full'>
                    {productList.map(
                        (product, index) => <ProductCard key={index} product={product}/>
                    )}
                </Grid>
            </Center>
        </>
    )
}