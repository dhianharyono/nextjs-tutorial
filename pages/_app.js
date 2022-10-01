import '../styles/globals.css'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3180428, 6)
  }, [])
return <Component {...pageProps} />
}
export default MyApp
