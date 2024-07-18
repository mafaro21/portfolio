import { useState } from 'react'
import '../App.css'
import {
    Box, Flex, Text, Center, Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Container,
    ListItem,
    UnorderedList
} from '@chakra-ui/react'

function App() {
    const steps = [
        { title: 'First', description1: 'blah', description2: 'blah', description3: 'blah', description4: 'blah' },


        { title: 'Second', description: '' },
    ]

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <>
            <Box className='lilita-one-regular' maxW={'100vw'} overflow={'hidden'}>
                <Box minH={'90vh'} bg={'#73BA9B'} p={'100px'} fontSize={'40px'} color={'#01110A'}>
                    hey! welcome to my site
                    <Text mt={6} color={'#003E1F'}>lsjdddddddddddddddf</Text>
                    <Text mt={6} color={'#EEE7ED'}>text</Text>
                    <Text mt={6} color={'#FFC15E'}>LIKE</Text>
                </Box>

                <Box bg={'#01110A'} color={'#73BA9B'} fontSize={'40px'} >
                    <Center color={'#EEE7ED'}>my</Center>
                    <Flex w={'100%'} p={'90px'}>
                        <Box w={'50%'}>
                            <Stepper index={activeStep} orientation='vertical' height='300px' colorScheme={'green'}>
                                {steps.map((step, index) => (
                                    <Step key={index} >
                                        <StepIndicator>

                                        </StepIndicator>

                                        <Box flexShrink='0'>
                                            <StepTitle color={'#FFC15E'}>{step.title}</StepTitle>
                                            <StepDescription color={'#FFC15E'}>
                                                <UnorderedList >
                                                    <ListItem color={'#FFC15E'}>
                                                        {step.description1}
                                                    </ListItem>
                                                    <ListItem color={'#FFC15E'}>
                                                        {step.description2}
                                                    </ListItem>
                                                    <ListItem color={'#FFC15E'}>
                                                        {step.description3}
                                                    </ListItem>
                                                    <ListItem color={'#FFC15E'}>
                                                        {step.description4}
                                                    </ListItem>
                                                </UnorderedList>
                                            </StepDescription>
                                        </Box>

                                        <StepSeparator />
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>

                        <Box color={'#FFC15E'} w={'50%'}>
                            sfdsfdfd
                        </Box>
                    </Flex>
                </Box>

                <Box bg={'#73BA9B'} p={'100px'}>
                    lkjsdf
                </Box>

                <Box bg={'black'} p={8}>
                    <Center color={'#73BA9B'}>Made by me ☻2024</Center>
                </Box>
            </Box>
        </>
    )
}

export default App
