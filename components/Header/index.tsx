import React from 'react'
import { Flex, Heading, Center } from '@chakra-ui/react'

export const Header = () => {
    return (
        <>
            <Flex w="full" h="6rem" bgColor="blue.500" justifyContent="center" py={1}>
                <Center>
                    <Heading color="white"> Júlião Store </Heading>
                </Center>
            </Flex>
        </>
    )
}

