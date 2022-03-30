import React from 'react'
import { Center, Grid, GridItem } from '@chakra-ui/react'

export const ProductList = () => {
    return (
        <>
            <Center p={6} mt={2}>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} bgColor="blue.50" w='full'>
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                </Grid>
            </Center>
        </>
    )
}