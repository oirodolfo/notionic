'use client'

import { ReactNode } from "react";

// import { ThemeProvider } from 'next-themes'
import { ChakraProvider } from '@chakra-ui/react'


// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ colors })



// * Because layout.tsx is only rendered on the server-side, we can use the
// * ThemeProvider and OtherProvider components directly in the RootLayout
// * component.

// * This is not possible in the app.tsx file because it is rendered
// * on both the server-side and the client-side.

export default function Providers({ children }: { children: ReactNode }) {
    return (
        // <ThemeProvider attribute="class">
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        // </ThemeProvider>
    )
}
