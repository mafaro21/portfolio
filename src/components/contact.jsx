import React from 'react'
import {
    Box, Center, Text, IconButton, Flex, VStack, Button, useColorMode, SimpleGrid, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function Contact({ isOpen, onClose }) {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'} motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent bg={colorMode === 'light' ? 'contact.dark' : ' contact.light'} >
                    <Center><ModalHeader color={colorMode === 'light' ? 'black' : 'white'}>Contact </ModalHeader></Center>
                    <ModalCloseButton />
                    <ModalBody color={colorMode === 'light' ? 'black' : 'white'}>
                        If you want to get in-touch with me:
                        <Text mt={3} color={colorMode === 'light' ? 'black' : 'white'}>Visit my Github github.com/mafaro21</Text>
                        <Text color={colorMode === 'light' ? 'black' : 'white'}>Shoot me an email at mafaro2105@gmail.com</Text>
                        <Text color={colorMode === 'light' ? 'black' : 'white'}>Checkout my linkedin</Text>
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
