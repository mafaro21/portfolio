import React from 'react'
import {
    Box, Center, Text, IconButton, Flex, VStack, Button, useColorMode, SimpleGrid, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ListItem,
    UnorderedList,
    Image,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    HStack,

} from '@chakra-ui/react'
import sun from '../img/sun.jpg'

export default function Projects({ isOpen, onClose }) {
    const { colorMode, toggleColorMode } = useColorMode()

    const proj = [
        {
            title: 'Twitclone',
            desc: 'TwitClone is a social media web application inspired by Twitter. It is designed to help people connect with friends and family, allowing users to share updates and stay informed about each other\'s lives.',
            stack: 'React',
            stack2: 'Express',
            stack3: 'Node',
            stack4: 'MongoDB',
            features: 'real-time interactions such as following/unfollowing, tweeting, liking, retweeting'
        },
        {
            title: 'Real Estate',
            desc: 'RealEstate is an e-commerce web system designed to help users find houses and apartments for rent or sale. It provides a user-friendly platform for browsing and searching real estate listings, catering to both potential buyers and renters.',
            stack: 'PHP',
            stack2: 'MySQL',
            stack3: 'StripeAPI',
            features: 'adding to cart, contacting agents'
        },
        {
            title: 'soleXchange',
            desc: 'soleXchange is a modern e-commerce platform dedicated to offering a wide variety of footwear for men, women, and children. It aims to provide customers with an easy and enjoyable online shopping experience, featuring the latest trends and timeless classics.',
            stack: 'React',
            stack2: 'Express',
            stack3: 'Node',
            stack4: 'PostgreSql',
            features: 'WIP'
        },
        {
            title: 'filesort',
            desc: 'filesort is a versatile program designed to help users organize their digital files efficiently. It automates the process of sorting files based on various criteria, reducing clutter and enhancing productivity.',
            stack: 'Python',
            features: 'sorting files based on extension & sorting videos based on orientation',
        },
        {
            title: 'Nssa',
            desc: 'Nssa is a powerful tool designed to compare two Excel files and consolidate their differences into separate files for easy analysis and reporting. This program is ideal for users who need to identify and manage discrepancies between datasets efficiently.',
            stack: 'Nodejs',
            features: 'automatically consolidate differences into separate excel files',
        }
    ]

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'6xl'} motionPreset='slideInBottom' >
                <ModalOverlay />
                <ModalContent bg={colorMode === 'light' ? 'proj.dark' : ' proj.light'} >
                    <Center><ModalHeader color={'white'}>Projects</ModalHeader></Center>
                    <ModalCloseButton />
                    <ModalBody>
                        {proj.map((item) => (
                            <Box mt={9}>
                                <Text color={'white'} fontSize={'xl'}>{item.title}</Text>
                                <Flex fontSize={'18px'} mt={2}>
                                    <Image src={sun} w={'50%'} borderRadius={'10px'} />
                                    <Box w={'50%'} pl={5} >
                                        <UnorderedList>
                                            <ListItem color={'white'}>{item.desc}</ListItem>
                                            <ListItem mt={3} color={'white'}>Key Features: {item.features}</ListItem>
                                            {/* <ListItem mt={3} color={'white'}>{item.stack}</ListItem> */}
                                        </UnorderedList>
                                        <HStack spacing={1} mt={2} ml={4}>
                                            <Tag borderRadius='full' fontWeight={600}>{item.stack}</Tag>
                                            {item.stack2 ?
                                                <Tag borderRadius='full' fontWeight={600}>{item.stack2}</Tag>
                                                :
                                                null}
                                            {item.stack3 ?
                                                <Tag borderRadius='full' fontWeight={600}>{item.stack3}</Tag>
                                                :
                                                null}
                                            {item.stack4 ?
                                                <Tag borderRadius='full' fontWeight={600}>{item.stack4}</Tag>
                                                :
                                                null}
                                        </HStack>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
