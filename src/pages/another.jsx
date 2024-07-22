import React, { useState } from 'react';
import {
    Box, Center, Text, IconButton, Flex, VStack, Button, useColorMode, SimpleGrid, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { AnimatePresence, color, motion } from 'framer-motion';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import About from '../components/about';
import Projects from '../components/projects';
import Experience from '../components/Experience';
import Contact from '../components/contact';
// import { About } from '../components/about.jsx'

export default function another() {
    const { isOpen: isOpenAbout, onOpen: onOpenAbout, onClose: onCloseAbout } = useDisclosure()
    const { isOpen: isOpenProjects, onOpen: onOpenProjects, onClose: onCloseProjects } = useDisclosure()
    const { isOpen: isOpenExperience, onOpen: onOpenExperience, onClose: onCloseExperience } = useDisclosure()
    const { isOpen: isOpenContact, onOpen: onOpenContact, onClose: onCloseContact } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    const MotionBox = motion(Box);



    const text = () => {
        if (colorMode === 'light') {
            return 'customText.dark'
        } else {
            return 'customText.light'
        }
    }

    const back = () => {
        if (colorMode === 'light') {
            return 'customBg.dark'
        } else {
            return 'customBg.light'
        }
    }

    return (
        <>

            <Box overflow={'hidden'} className='lilita-one-regular' minH={'100vh'} maxW={'100vw'} bg={back}>

                <Box textAlign={'right'} p={4} >
                    {colorMode === 'light' ?
                        <Button onClick={toggleColorMode} w={'auto'} bg={'#F7AF9D'} mr={8}>
                            <SunIcon boxSize={6} />
                        </Button>
                        :
                        <Button onClick={toggleColorMode} w={'auto'} bg={'#222076'} mr={8} _hover={{ bg: '#010662' }} >
                            <MoonIcon boxSize={6} color="red.500" />
                        </Button>
                    }

                </Box>

                <Text fontSize={{ base: '100px', md: '205px' }}  >
                    <Center color={text}>
                        Mafaro
                    </Center>

                </Text>

                <Text fontSize={{ base: '40px', md: '60px' }} mt={-10}>
                    <Center color={text}>
                        UI/UX DEVELOPER
                    </Center>
                </Text>

                <Center>
                    <SimpleGrid p={8} w="100%" spacing={3} columns={[3, 3, 6, 6, 12]} rows={5} mt={9} color={text}>
                        <Box bg={colorMode === 'light' ? 'about.dark' : ' about.light'} h="100px" p={9} w={'100%'} color={colorMode === 'light' ? '#bdbdbd' : '#ededed'} borderRadius="9px 50px 0px" gridColumn="span 3" transition="border-radius 0.3s ease" _hover={{
                            borderRadius: "39px 39px 39px", cursor: 'pointer',
                        }} onClick={onOpenAbout}>About Me
                        </Box>
                        <About isOpen={isOpenAbout} onClose={onCloseAbout} />

                        <Box bg={colorMode === 'light' ? 'proj.dark' : ' proj.light'} h="100px" p={9} w={'100%'} color={'#ededed'} borderRadius="69px 0px 19px" gridColumn="span 3" transition="border-radius 0.3s ease" _hover={{
                            borderRadius: "39px 39px 39px", cursor: 'pointer',
                        }} onClick={onOpenProjects}>Projects
                        </Box>
                        <Projects isOpen={isOpenProjects} onClose={onCloseProjects} />

                        <Box bg={colorMode === 'light' ? 'some.dark' : ' some.light'} h="100px" p={9} w={'100%'} color={'#ededed'} borderRadius="9px 86px 19px 0px" gridColumn="span 3" transition="border-radius 0.3s ease" _hover={{
                            borderRadius: "39px 39px 39px", cursor: 'pointer',
                        }} onClick={onOpenExperience}>Experience
                        </Box>
                        <Experience isOpen={isOpenExperience} onClose={onCloseExperience} />

                        <Box bg={colorMode === 'light' ? 'contact.dark' : ' contact.light'} h="100px" p={9} w={'100%'} color={'#ededed'} borderRadius="9px 0px 39px" gridColumn="span 3" transition="border-radius 0.3s ease" _hover={{
                            borderRadius: "39px 39px 39px", cursor: 'pointer',
                        }} onClick={onOpenContact}>Contact Me
                        </Box>
                        <Contact isOpen={isOpenContact} onClose={onCloseContact} />

                        {/* <Box bg={colorMode === 'light' ? 'cont.dark' : ' cont.light'} h="100px" p={9} w={'100%'} color={'#ededed'} borderRadius="9px 0px 99px" gridColumn="span 2" position="relative">Contact Me
                        </Box> */}
                    </SimpleGrid>
                </Center>

                {/* <Box  >
                    <Link to={'https://github.com/mafaro21'} >
                        <Text fontSize={{ base: '40px', md: '60px' }} >
                            <Center color={text} _hover={{
                                bgGradient: 'linear(to-r, red.500, yellow.500)', bgClip: 'text'
                            }}>
                                Visit my Github
                            </Center>
                        </Text>
                    </Link>
                </Box> */}
            </Box >
        </>
    )
}
