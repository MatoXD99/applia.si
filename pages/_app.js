import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy='lazyOnLoad' src='https://www.googletagmanager.com/gtag/js?id=G-V2WELDKY45' />
      <Script
        strategy='lazyOnLoad'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-V2WELDKY45');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp