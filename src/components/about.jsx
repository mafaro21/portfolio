import React from 'react'
import {
    Button, useColorMode, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function About({ isOpen, onClose }) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'2xl'} >
                <ModalOverlay />
                <ModalContent bg={colorMode === 'light' ? 'about.dark' : ' about.light'}>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt={3} color={'white'}>
                        Hi, I'm Mafaro, a dedicated web developer based in Harare, Zimbabwe specializing in front-end development.
                        My expertise lies in building responsive web applications using JavaScript, with a strong focus on React.
                        Additionally, I have experience working with cloud technologies, particularly Microsoft Azure.

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
