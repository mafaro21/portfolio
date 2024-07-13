import { useState } from 'react'
import '../App.css'
import { Box, Flex, Text } from '@chakra-ui/react'

function App() {

    return (
        <>
            <Box  >
                <Flex h={'100vh'} w={'100vw'} position={'absolute'} overflow="hidden">

                    <Box bg={'#211A1D'} w={'55vw'} p={{ base: '100px', xl: '200px' }} position={'relative'}>
                        <Flex w={'100%'}>
                            <Text color={'white'} fontSize={{ base: '4xl', xl: '8xl' }} zIndex={1} ml={{ base: '0', xl: '70%' }} >Welcome</Text>
                            <Text fontSize={{ base: '4xl', xl: '8xl' }} color={{ base: 'white', xl: '#9CDF11' }} w={1}>!</Text>
                        </Flex>
                        <Text color={'white'} fontSize={{ base: '4xl', xl: '5xl' }} ml={{ base: '4%', xl: '87%' }} zIndex={1} mt={8}>My name is:</Text>

                        <Text color={'#9CDF11'} fontSize={{ base: '4xl', xl: '70px' }} style={{ marginLeft: '133%', zIndex: '9' }} mt={-7}>Mafaro</Text>
                    </Box>

                    <Box bg={'#6320EE'} w={'45vw'}>

                    </Box>
                </Flex >
            </Box>
        </>
    )
}

export default App
