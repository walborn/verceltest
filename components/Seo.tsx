import * as React from 'react'
import { NextSeo } from 'next-seo'

type Props = {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const Seo: React.FC<Props> = ({ title, description, url, ogTitle, ogDescription }) => (
  <NextSeo
    title={title}
    titleTemplate="%s / Йога клуб ОМ"
    description={description}
    canonical={url}
    openGraph={{
      url,
      title: ogTitle || title,
      description: ogDescription || description,
      images: [
        {
          url: `${url}/static/favicon.png`,
          width: 1200,
          height: 630,
          alt: ogTitle || title,
        },
      ],
      site_name: 'Йога клуб ОМ',
    }}
  />
)

Seo.defaultProps = {
  title: 'Yoga Club OM',
  description: 'Yoga Club OM',
  url: '',
  ogImage: '/favicon.png',
  keywords: '',
}

export default Seo
