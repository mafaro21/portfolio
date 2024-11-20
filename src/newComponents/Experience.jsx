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
        { title: 'Infrastructure management using Microsoft Azure' },
        { title: 'Configuring VPN’s from on premises servers to servers on Azure' },
        { title: 'Troubleshooting and resolving service-related problems' },
        { title: 'Facilitating purchase and renewal of domains and SSL Certificates' },
        { title: 'Microsoft 365 admin management' },
        { title: 'Commissioning and decommissioning of virtual machines' },
    ]

    const exp2 = [
        { title: 'Working with frontend technologies like React to build responsive and user friendly web apps' },
        { title: 'Building and consuming RESTful APIs using Express.js to create server-side logic and handle requests' },
        { title: 'Creating and managing MySQL databases' },
        { title: 'Microsoft 365 admin management' },
        { title: 'Managing which devices have access to our wireless network' },
        { title: 'Providing technical support to users, troubleshooting hardware and software issues' },
        { title: 'Setting up and configuring computer systems' },
        { title: 'Assisting with the installation, configuration, and maintenance of IT equipment' },
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
                                <Box w={{ base: '100%', md: '50%' }}>
                                    <Text fontSize={'40px'} color={colorMode === 'light' ? '#141A32' : '#FFC15E'}>Sasai</Text>
                                    <Text fontSize={'25px'} color={colorMode === 'light' ? '#141A32' : '#FFC15E'}>Graduate Trainee (Oct 2021 - June 2024)</Text>
                                    <UnorderedList mt={3}>
                                        {exp1.map((item) => (
                                            <ListItem color={colorMode === 'light' ? 'black' : 'white'} fontSize={'19px'}>{item.title}</ListItem>
                                        ))}
                                    </UnorderedList>

                                </Box>

                                <Box w={{ base: '100%', md: '50%' }} mt={{ base: 9, md: 0 }} ml={{ base: 0, md: 10 }}>
                                    <Text fontSize={'40px'} color={colorMode === 'light' ? '#141A32' : '#FFC15E'}>Providence Human Capital</Text>
                                    <Text fontSize={'25px'} color={colorMode === 'light' ? '#141A32' : '#FFC15E'}>IT Officer (July 2024 - present)</Text>
                                    <UnorderedList mt={3}>
                                        {exp2.map((item) => (
                                            <ListItem color={colorMode === 'light' ? 'black' : 'white'} fontSize={'19px'}>{item.title}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </Box>
                            </Flex>
                        </Container>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
