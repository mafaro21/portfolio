
// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        customBg: {
            light: "#F7AF9D",
            dark: "#010662",
        },
        customText: {
            light: "#010b07",
            dark: "#829a92",
        },
        about: {
            light: "#420039",
            dark: "#222076",
        },
        proj: {
            light: "#932F6D",
            dark: "#407F9C",
        },
        some: {
            light: "#972D07",
            dark: "#51C674",
        },
        contact: {
            light: "#582707",
            dark: "#71D75A",
        },
        // cont: {
        //     // light: "#00b723",
        //     light: "#29110B",
        //     dark: "#00360a",
        // },
    }

})




export default theme