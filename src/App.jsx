import { Box, Center, Text, Flex } from '@chakra-ui/react'
import './App.css'
import sun from './img/sun.jpg'

function App() {

  return (
    <>
      <Box pt={10} bgImage={sun} h={'100vh'} bgPosition={'center'} bgSize={'auto'}>
        <Center>
          <Box h={'89vh'} w={'80vw'} bg="rgba(960, 950, 950, 0.6)" style={{ border: '1px rgba(128, 128, 128, 0.2) solid', borderRadius: '10px' }} textAlign={'center'}>

            <Box mt={6}>
              <Text fontSize={'2xl'} as={'b'}>Mafaro</Text>
            </Box>
            <Box>
              Mafaro
            </Box>
          </Box >
        </Center >
      </Box >
    </>
  )
}

export default App
