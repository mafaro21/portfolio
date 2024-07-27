import React, { useState } from 'react';
import {
    Box, Center, Text, IconButton, Flex, VStack, Button, useColorMode, SimpleGrid, useDisclosure,
    Spacer,
    Image
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import About from '../components/about';
import Projects from '../components/projects';
import Experience from '../components/Experience';
import Contact from '../components/contact';

export default function another() {
    const { isOpen: isOpenAbout, onOpen: onOpenAbout, onClose: onCloseAbout } = useDisclosure()
    const { isOpen: isOpenProjects, onOpen: onOpenProjects, onClose: onCloseProjects } = useDisclosure()
    const { isOpen: isOpenExperience, onOpen: onOpenExperience, onClose: onCloseExperience } = useDisclosure()
    const { isOpen: isOpenContact, onOpen: onOpenContact, onClose: onCloseContact } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

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

            <Box overflow={'hidden'} className='lilita-one-regular' minH={'90vh'} maxW={'100vw'} bg={back}>
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
                    </SimpleGrid>
                </Center>
            </Box >

            <Box minH={'8vh'} bg={back}>
                <Center>
                    <Flex gap={1} >
                        <Link to={'mailto:mafaro2105@gmail.com'} target='_blank' >
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="94" height="54" fill={'#6a6a6a'} className='svg' viewBox="0 0 24 24">
                                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                            </svg>
                        </Link>
                        <Spacer />
                        <Link to={'https://github.com/mafaro21'} target='_blank'>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="94" height="54" fill={'#6a6a6a'} className='svg' viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                        <Spacer />
                        <Link to={'https://linkedin.com/in/mafaro-mushonga-b8a68a231'} target='_blank'>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="94" height="54" fill={'#6a6a6a'} className='svg' viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                        </Link>
                    </Flex>
                </Center>
            </Box>
        </>
    )
}
