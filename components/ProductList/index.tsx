import React from 'react'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import { ProductCard } from '../ProductCard'
import { productList } from '../../data/productList.json'



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