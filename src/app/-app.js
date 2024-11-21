import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1430143994998751"
     crossorigin="anonymous"></script>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
