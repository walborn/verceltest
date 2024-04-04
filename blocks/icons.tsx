import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// social
import VkontakteSVG from '../public/svg/social/vk.svg'
import TelegramChannelSVG from '../public/svg/social/telegram.svg'

// messenger
import WhatsAppSVG from '../public/svg/messenger/whatsapp.svg'
import ViberSVG from '../public/svg/messenger/viber.svg'
import TelegramSVG from '../public/svg/messenger/telegram.svg'

import PhoneSVG from '../public/svg/phone.svg'
import LocationSVG from '../public/svg/location.svg'
import FileSVG from '../public/svg/file.svg'
import EmailSVG from '../public/svg/email.svg'

interface Props {
  children?: React.ReactNode
  className?: string
  href?: string
  link?: string
  hover?: string
  size?: string
  hidden?: boolean
}

const CA: React.FC<Props> = props => (
  <a className={props.className} href={props.href} target="_blank" rel="noreferrer">
    {props.children}
  </a>
)

const A = styled(CA)`
${props => props.link};
color: inherit;
&:hover {
  ${props => props.hover};
}
> *:not(:first-child) {
  margin-left: 5px;
}
text-decoration: none;
${props => props.size ? `svg { width: ${props.size}; height: ${props.size}; }` : ''};
`

const Vkontakte: React.FC<Props> = props => (
  <A href={props.href} link="svg { fill: #ffa727; vertical-align: middle; }" hover="svg { fill: #45668e; }" size={props.size}>
    <VkontakteSVG />&nbsp;{props.children}
  </A>
)

const TelegramChannel: React.FC<Props> = props => (
  <A href={props.href} link="svg { fill: #ffa727; vertical-align: middle; }" hover="svg { fill: #0088cc; }" size={props.size}>
    <TelegramChannelSVG />&nbsp;{props.children}
  </A>
)

const messenger = {
  link: 'svg { transform: translateY(3px); height: 16px; width: 16px; fill: #ffa727; }',
}
const WhatsApp: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #25d366; }">
    <WhatsAppSVG />
  </A>
)

const Viber: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #8f5db7; }">
    <ViberSVG />
  </A>
)
const Telegram: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #0088cc; }">
    <TelegramSVG />
  </A>
)

const Phone: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #0088cc; }">
    <PhoneSVG />
    <span hidden={props.hidden}>{props.children}</span>
  </A>
)

const Location: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #ff596d; }">
    <LocationSVG />
    <span hidden={props.hidden}>{props.children}</span>
  </A>
)


const File: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #ff596d; }">
    <FileSVG />
    <span hidden={props.hidden}>{props.children}</span>
  </A>
)

const Email: React.FC<Props> = props => (
  <A href={props.href} link={messenger.link} hover="svg { fill: #ff596d; }">
    <EmailSVG />
    <span hidden={props.hidden}>{props.children}</span>
  </A>
)

const CLogo: React.FC<Props> = props => (
  <div className={props.className}>
    <Link href={props.href || '/'}>
      <a><img src="/logo.png" /></a>
    </Link>
  </div>
)

const Logo = styled(CLogo)`
display: inline-block;
cursor: pointer;
img {
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  height: ${props => props.size || '32px'};
  width: ${props => props.size || '32px'};
}
`
const Container = styled.div`
display: inline-block;
vertical-align: middle;
padding: 0 0 0 20px;
line-height: 0;
> * {
  margin-left: 10px;
}`

export {
  Vkontakte, TelegramChannel,
  WhatsApp, Viber, Telegram,
  Phone,
  File,
  Email,
  Logo,
  Location,
  Container,
}
