import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

