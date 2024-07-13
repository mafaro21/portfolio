import { Box, Text, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react';

export default function Other() {
    return (
        <>
            <Box>
                <Box bg="#211A1D" minHeight="100vh" w="100vw" overflow="hidden">
                    <Box pt={8}>
                        <Text color="#fff" fontSize="8xl" textAlign="center">Mafaro</Text>
                    </Box>
                    <Center>
                        <SimpleGrid p={10} mt="35vh" w="100%" spacing={3} columns={[7, 9, 11, 13, 20]} rows={5}>
                            <Box bg="#9CDF11" h="200px" p={9} w={'100%'} color="blac" borderRadius="9px 10px 0px" gridColumn="span 4" position="relative" >About Me
                                {/* <Box w="60px" h="30px" bg="#628B0B" position="absolute" top="50%" left="50%" transform="translate(-250%, -130%)" ></Box> */}
                            </Box>
                            <Box bg="#6320EE" h="200px" p={9} w={'100%'} color="white" borderRadius="69px 0px 19px" gridColumn="span 3" position="relative">Projects
                                {/* <Box w="50px" h="50px" bg="#3E1495" clipPath="polygon(0% 0%, 0% 100%, 100% 100%)" position="absolute" top="50%" left="50%" transform="translate(-140%, 90%)"></Box>*/}
                            </Box>
                            <Box bg="#FFD700  " h="200px" p={9} w={'100%'} color="black" borderRadius="9px 86px 19px 0px" gridColumn="span 6" position="relative">something something
                                {/* <Box w="50px" h="50px" bg="#9F8600" position="absolute" top="50%" left="50%" transform="translate(-240%, 40%) rotate(45deg)"></Box> */}
                            </Box>
                            <Box bg="#FF6347 " h="200px" p={9} w={'100%'} color="black" borderRadius="9px 0px 39px" gridColumn="span 5" position="relative">Contact Me
                                {/* <Box w="0" h="0" borderLeft="29px solid transparent" borderRight="25px solid transparent" borderBottom="50px solid #9F3E2C" position="absolute" top="50%" left="50%" transform="translate(190%, -140%)"></Box> */}
                            </Box>
                            <Box bg="#00CED1 " h="200px" p={9} w={'100%'} color="black" borderRadius="9px 0px 99px" gridColumn="span 2" position="relative">Contact Me
                                {/* <Box bg="#008183" w="50px" h="50px" borderRadius="50%" position="absolute" top="50%" left="50%" transform="translate(20%, 10%)"></Box> */}
                            </Box>
                        </SimpleGrid>
                    </Center>
                </Box>
            </Box>
        </>
    );
}
