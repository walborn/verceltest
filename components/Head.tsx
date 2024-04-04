import React from 'react'
import NextHead from 'next/head'

type Props = {
  title?: string,
  description?: string,
  url?: string,
  ogImage?: string,
  keywords?: string,
}

const Head: React.FC<Props> = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="keywords" content={props.keywords} />
    <meta name="description" content={props.description} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="apple-touch-icon" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/favicon.png" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage} />
    <meta property="og:image" content={props.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="yandex-verification" content="1b46776c88d34ab0" />
  </NextHead>
)

Head.defaultProps = {
  title: 'Yoga Club OM',
  description: 'Yoga Club OM',
  url: '',
  ogImage: '/favicon.png',
  keywords: '',
}

export default Head
