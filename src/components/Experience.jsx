import React from 'react'
import {
    Box, Center, Text, IconButton, Flex, VStack, Button, useColorMode, SimpleGrid, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Container,
    ListItem,
    UnorderedList,
    Image
} from '@chakra-ui/react'

export default function Experience({ isOpen, onClose }) {
    const { colorMode, toggleColorMode } = useColorMode()

    const exp1 = [
        { title: 'dfd' },
        { title: 'sgfreg' },
    ]

    const exp2 = [
        { title: 'dfd' },
        { title: 'sgfreg' },
    ]

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'6xl'} >
                <ModalOverlay />
                <ModalContent bg={colorMode === 'light' ? 'some.dark' : ' some.light'}>
                    <Center><ModalHeader>Experience</ModalHeader></Center>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container maxW='1250px' >
                            <Flex w={'100%'} direction={{ base: "column", md: "row" }}>
                                <Box w={'50%'}>
                                    <Text fontSize={'40px'} color={'#FFC15E'}>First</Text>
                                    <UnorderedList >
                                        {exp1.map((item) => (
                                            <ListItem fontSize={'20px'}>{item.title}</ListItem>
                                        ))}
                                    </UnorderedList>

                                </Box>

                                <Box w={'50%'} mt={{ base: 9, md: 0 }} ml={{ base: 0, md: 10 }}>
                                    <Text fontSize={'40px'} color={'#FFC15E'}>Second</Text>
                                    <UnorderedList>
                                        {exp2.map((item) => (
                                            <ListItem fontSize={'20px'}>{item.title}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </Box>
                            </Flex>
                        </Container>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
