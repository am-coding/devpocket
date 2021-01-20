import App from 'next/app'
import { AppProvider } from '../components/ContextWrapper'
import { ChakraProvider } from "@chakra-ui/react"

import "../styles/global.css"
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ChakraProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      </ChakraProvider>
    )
  }
}

export default MyApp