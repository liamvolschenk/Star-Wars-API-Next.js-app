//importing head so that I can add a favicon
import Head from 'next/head'
//importing a global css file
import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div>
                <div>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    )
}