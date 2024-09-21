"use client"

import { Global } from "@emotion/react"
import { SystemContext } from '@ditto/styled-system'
import { createContext } from "../create-context"

const [ChakraContextProvider, useChakraContext] = createContext<SystemContext>({
    name: "ChakraContext",
    strict: true,
    providerName: "<ChakraProvider />",
})

export interface ChakraProviderProps {
    value: SystemContext
    children: React.ReactNode
}

function ChakraProvider(props: ChakraProviderProps) {
    const { value: sys, children } = props
  
    return (
        <ChakraContextProvider value={sys}>
            <Global
                styles={[sys.getPreflightCss(), sys.getGlobalCss(), sys.getTokenCss()]}
            />
            {children}
        </ChakraContextProvider>
    )
}
  
export { ChakraProvider, useChakraContext }