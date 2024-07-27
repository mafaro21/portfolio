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
import life from '../img/life.gif'
import hayati from '../img/charon1.jpg'

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
            <Box bgImage={life}>
                <Box bg={'white'} minH='7vh' pt={9} bgImage={life}>
                </Box>
                <Box bgImage={life} borderLeft={'25px double #01110A'} minH='90vh' ml={'159px'} position="relative" _after={{
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: 'calc(100% - 550px)', // Adjust this value based on the desired length of the dashed line
                    height: '0',
                    borderTop: '25px solid #01110A',
                    marginLeft: '550px' // Adjust this value to the length of the dashed line
                }}>
                    <Box borderTop={'25px dashed #01110A'} bg={'grey'} bgImage={hayati} bgRepeat={'no-repeat'} >
                        <Flex flexDirection={'column'} gap={90} mt={'100px'} position={'relative'}>
                            <Text ml={'-150px'} as={'b'} color={'yellow'} p={1} pl={4} bg={'black'} w={'6%'}>About me</Text>
                            <Text ml={'-150px'} as={'b'} color={'yellow'} p={1} pl={4} bg={'black'} w={'6%'}>Projects</Text>
                            <Text ml={'-150px'} as={'b'} color={'yellow'} p={1} pl={4} bg={'black'} w={'6%'}>ljsdklfjdkl</Text>
                            <Text ml={'-150px'} as={'b'} color={'yellow'} p={1} pl={4} bg={'black'} w={'6%'}>ljsdklfjdkl</Text>
                        </Flex>

                        <Text textAlign={'right'} fontSize={'260px'} color={'yellow'}>Mafaro</Text>
                    </Box>

                </Box>

            </Box>
            {/* <Box mt={'-310px'}>
                <Text textAlign={'right'} fontSize={'260px'} color={'#01110A'}>Mafaro</Text>
            </Box > */}
            {/* bg='#73BA9B' */}
            {/* color='#01110A' */}
        </>
    )
}

export default App
