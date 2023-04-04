import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <meta name="description" content={'Find a lot a events'} />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    {/*This is so that we can use portals or html outside the next app*/}
                    <div id={'overlays'}></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
