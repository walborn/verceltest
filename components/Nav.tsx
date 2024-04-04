import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import useMedia from 'use-media'

import Row from 'blocks/Row'

import {
  Logo,
  Vkontakte,
  WhatsApp,
  Viber, 
  Telegram,
  Phone,
  Location,
  TelegramChannel,
} from 'blocks/icons'

import MenuSVG from '../public/svg/menu.svg'
import CloseSVG from '../public/svg/close.svg'

// const Info = styled.div`
// padding: 5px;
// font-size: 1.3rem;
// text-align: center;
// color: #ffffff;
// background-color: #ffa727;
// `

export const Sandwich = styled(MenuSVG)`
  position: absolute;
  display: ${props => props.hidden ? 'none' : 'block'};
  top: 50%;
  right: 20px;
  width: 24px;
  transform: translateY(-50%);
  fill: #ffa727;
  cursor: pointer;
  user-select: none;
  &:hover {
    fill: #f39000;
  }
`
const Close = styled(CloseSVG)`
position: absolute;
top: 25px;
right: 20px;
transform: translateY(-50%);
font-size: 28px;
fill: #d4d8df;
cursor: pointer;
user-select: none;
&:hover {
  fill: #b2bbc6;
}
`
const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 1;
background: rgba(138,120,115,0.2);
`

const Socials = styled.span`
display: inline-block;
vertical-align: middle;
line-height: 0;
> * {
  margin-left: 10px;
  display: inline-block;
  height: 24px;
  width: 24px;
}
@media only screen and (min-width: 1000px) {
  padding-left: 15px;
}
`

const Messengers = styled.div`
position: absolute;
display: inline-block;
right: 20px;
> * {
  margin-left: 5px;
}
@media only screen and (max-width: 1000px) {
  padding-right: 35px;
}
`

interface item {
  key: string
  href: string
  title: string
}

const Item = styled(props => (
<Link key={props.key} href={props.href}>
  <a className={props.className}>{props.children}</a>
</Link>))`
text-decoration: none;
&:hover {
  color: #ffa727;
}
${props => props.active ? `
color: ${props.theme.color.orange};
font-weight: bold;
` : 'color: #5d616f;'}
`

interface ListProps {
  children?: React.ReactNode
  className?: string
  opened?: boolean
  active?: string
  list: item[]
}

const List: React.FC<ListProps> = props => (
  <div className={props.className}>
    {
      props.list.map(i => (
        <Item key={i.key} href={`/${i.href}`} active={props.active === i.key}>
          {i.title}
        </Item>
      ))
    }
    {props.children}
  </div>
)

const Top = styled((props) => (
  <div className={props.className}>
    <Row>{props.children}</Row>
    <Sandwich {...props.sandwich}  />
  </div>
))`
position: relative;
background: #fafbfe;
line-height: 50px;
> div:first-child > * {
  margin-right: 10px;
}
a {
  color: #8a7873;
  &:hover {
    color: #39291d;
  }
}
@media only screen and (max-width: 780px) {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16);
}
`

const Bottom = styled(({ children, ...props }) => (<div {...props}><Row>{children}</Row></div>))`
display: ${props => props.hidden ? 'none' : 'block'};
background: #fbe1c2;
box-shadow: 0 0 2px 0 rgba(245, 166, 32, 0.3);
line-height: 40px;
`

const ListTop = styled(List)`
text-align: center;
color: #b2bbc6;
${Item} {
  display: inline-block;
  padding: 0 20px;
  cursor: pointer;
}
`

const ListRight = styled(({ onClose, ...props }) => (
  <>
    {props.opened && <Backdrop onClick={onClose} hidden={props.hidden || !props.opened}/>}
    <List {...props}>{props.opened && <Close onClick={onClose} />}</List>
  </>
))`
${props => (props.hidden || !props.opened) ? 'display: none; transform: translate(228px);' : ''};
position: fixed;
padding-top: 50px;
transition: transform .3s ease-in-out;
user-select: none;
width: 228px;
height: 100%;
top: 0;
right: 0;
z-index: 2147483647;
background: #fafbfe;
box-shadow: -6px 0 6px -6px #e7eaf3;
${Item} {
  display: block;
  padding: 15px 20px;
  border-top: 1px solid #e8e8e8;
}
`

const navigation = [
  { key: '', href: '', title: 'Главная' },
  { key: 'schedule', href: 'schedule', title: 'Расписание' },
  { key: 'price', href: 'price', title: 'Цены' },
  { key: 'masters', href: 'masters', title: 'Инструкторы' },
  { key: 'rent', href: 'rent', title: 'Аренда залов' },
  { key: 'contact', href: 'contact', title: 'Контакты' },
]

const Nav: React.FC = () => {
  const [opened, setOpened] = React.useState(false)
  const router = useRouter()
  const desktop = useMedia({ minWidth: '1000px' })
  const tablet = useMedia({ maxWidth: '780px' })
  const mobile = useMedia({ maxWidth: '500px' })

  const active = (x => (Array.isArray(x) ? x[0] : ''))(router.pathname.match(/[a-z]+/))
  return (
    <header>
      <Headroom>
        <Top sandwich={{ onClick: () => setOpened(true), hidden: !tablet }}>
          <Logo href="/" />

          <Location href="https://yandex.ru/maps/-/CCQlqKsMhD" hidden={!desktop}>
            м.&nbsp;Бибирево, ул.&nbsp;Плещеева&nbsp;д.12А, 3&nbsp;этаж
          </Location>

          <Socials>
            <Vkontakte href="https://vk.com/yoga.altufyevo" />
            <TelegramChannel href="https://t.me/yogaclub_om_moscow" />
          </Socials>

          <Messengers>
            <Phone href="tel:+79168765413" hidden={mobile}>+7 (916) 876-54-13</Phone>
            <WhatsApp href="https://wa.me/79168765413"/>
            <span hidden={mobile}><Viber href="viber://chat?number=79168765413"/></span>
            <Telegram href="tg://resolve?domain=yoga_club_om"/>
          </Messengers>
        </Top>
        <Bottom hidden={tablet}>
          <ListTop
            opened={opened}
            active={active}
            list={navigation}
          />
        </Bottom>
      </Headroom>
      <ListRight
        hidden={!tablet}
        opened={opened}
        active={active}
        list={navigation}
        onClose={() => setOpened(false)}
      />
      {/* <Info>С <b>28</b> октября по <b>7</b> ноября занятия в клубе <b>отменяются</b>.<br />Все абонементы будут продлены на весь срок ограничений.</Info> */}
    </header>
  )
}

export default Nav
