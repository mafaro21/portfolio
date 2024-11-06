import React from 'react'
import Slider from 'react-slick';
import {
    Box, Text, SimpleGrid, Center, Container,
    Grid,
    GridItem,
    Flex,
    Image,
    UnorderedList,
    ListItem,
    Divider,
    HStack,
    Tag,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

export default function Carousel({ images }) {

    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
    };

    return (
        <>
            <Box mt={5}>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <Box key={index} p={4}>
                            <Image src={image.src} borderRadius="10px" />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </>
    )
}
