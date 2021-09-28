import Head from 'next/head'

const Layout = ({children, title}) => {
    return (
        <>
        <Head>
        <title>Adolweb | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <main>
            {children}
        </main>
        </>
    )
}

export default Layout;
