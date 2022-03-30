import React from 'react'
import { Image , Text, Center, Flex, HStack, Button, IconButton, Heading } from '@chakra-ui/react'
import { IProduct } from '../../interface/product'
import { StarIcon } from '@chakra-ui/icons';

type ProductCardProps = {
    product: IProduct;
}

export const ProductCard = ( { product } : ProductCardProps )  => {
    
    return (
        <Center maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor="white" px={2} py={4} flexDirection="column">
            <Center overflow='hidden' maxHeight={40}>
                <Image src={product.imageURL} alt={product.imageAlt} maxHeight={40}/>
            </Center>

            
                <Heading
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    fontSize="md"
                >
                    {product.name}
                </Heading>

                
                <HStack width="full">
                    <Text color='red.600' fontSize='lg' as='s' fontWeight='semibold'>
                    R$ {product.listPrice}
                    </Text>

                    <Text color='green.500' fontSize='lg' fontWeight='bold'>
                    R$ {product.salesPrice}
                    </Text>
                </HStack>

                <Flex py={2} justifyContent='space-between' width="full" >
                    <Button colorScheme="green"> Comprar </Button>
                    <IconButton icon={<StarIcon />} aria-label='Favoritar' />
                </Flex>
            </Center>
    )
}