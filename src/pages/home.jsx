import { useState } from 'react'
import '../App.css'
import {
    Box, Flex, Text, Center, Step,
    Divider,
    useSteps,
    Container,
    ListItem,
    UnorderedList,
    Image
} from '@chakra-ui/react'
import sun from '../img/sun.jpg'

function App() {
    const exp1 = [
        { title: 'dfd' },
        { title: 'sgfreg' },
    ]

    const exp2 = [
        { title: 'dfd' },
        { title: 'sgfreg' },
    ]

    const proj = [
        {
            title: 'Twitclone',
            desc: 'TwitClone is a social media web application inspired by Twitter. It is designed to help people connect with friends and family, allowing users to share updates and stay informed about each other\'s lives.',
            stack: 'React, Express, Node and MongoDB',
            features: 'real-time interactions such as following/unfollowing, tweeting, liking, retweeting'
        },
        {
            title: 'Real Estate',
            desc: 'RealEstate is an e-commerce web system designed to help users find houses and apartments for rent or sale. It provides a user-friendly platform for browsing and searching real estate listings, catering to both potential buyers and renters.',
            stack: 'PHP, MySQL and StripeAPI',
            features: 'adding to cart, contacting agents'
        },
        {
            title: 'soleXchange',
            desc: 'soleXchange is a modern e-commerce platform dedicated to offering a wide variety of footwear for men, women, and children. It aims to provide customers with an easy and enjoyable online shopping experience, featuring the latest trends and timeless classics.',
            stack: 'React, ChakraUI, Express, Node & PostgreSql',
            features: 'WIP'
        },
        {
            title: 'filesort',
            desc: 'filesort is a versatile program designed to help users organize their digital files efficiently. It automates the process of sorting files based on various criteria, reducing clutter and enhancing productivity.',
            stack: 'python',
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
            <Box  >
                <Box minH='90vh' bg='#73BA9B' >
                    <Container maxW='1250px' fontSize={'60px'}>
                        <Text pt={'300px'} color='#01110A'>Welcome to my site</Text>
                    </Container>
                </Box>

                <Box bg={'#01110A'} color={'#73BA9B'} maxW={'100vw'}>
                    <Center color={'#EEE7ED'} fontSize={'40px'}>my</Center>
                    <Container maxW='1250px' p={8}>
                        <Flex w={'100%'} direction={{ base: "column", md: "row" }}>
                            <Box color={'#FFC15E'} w={'50%'}>
                                <Text color={'#FFC15E'} fontSize={'40px'}>First</Text>
                                <UnorderedList >
                                    {exp1.map((item) => (
                                        <ListItem color={'#FFC15E'} fontSize={'20px'}>{item.title}</ListItem>
                                    ))}
                                </UnorderedList>

                            </Box>

                            <Box color={'#FFC15E'} w={'50%'} mt={{ base: 9, md: 0 }} ml={{ base: 0, md: 10 }}>
                                <Text color={'#FFC15E'} fontSize={'40px'}>Second</Text>
                                <UnorderedList>
                                    {exp2.map((item) => (
                                        <ListItem color={'#FFC15E'} fontSize={'20px'}>{item.title}</ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Box bg={'#73BA9B'} >
                    <Center color='#01110A' fontSize={'40px'}>Projects</Center>
                    <Container maxW='1250px' p={9} fontSize={'30px'}>
                        {proj.map((item) => (
                            <Box mt={9}>
                                <Text color='#01110A'>{item.title}</Text>
                                <Flex fontSize={'18px'}>
                                    <Image src={sun} w={'50%'} borderRadius={'10px'} />
                                    <Box w={'50%'} pl={5}>
                                        <UnorderedList>
                                            <ListItem color='#01110A'>{item.desc}</ListItem>
                                            <ListItem mt={3} color='#01110A'>Key Features: {item.features}</ListItem>
                                            <ListItem mt={3} color='#01110A'>{item.stack}</ListItem>
                                        </UnorderedList>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}

                    </Container>
                </Box>

                <Box bg={'#003e1f'} >
                    <Center color={'#EEE7ED'} fontSize={'40px'} >Contact Me</Center>
                    <Container maxW='1250px' p={9} fontSize={'30px'}>
                        <Center justifyContent={'space-around'}>
                            <Box>Github </Box>
                            <Box>Email</Box>
                        </Center>
                    </Container>
                </Box>

                <Box bg={'black'} pt={8} pb={8}>
                    <Center color={'#73BA9B'} fontSize={'20px'}>Made by me ☻2024</Center>
                </Box>
            </Box>
        </>
    )
}

export default App
