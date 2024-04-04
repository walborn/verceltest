import React from 'react'
import styled from 'styled-components'
import Row from 'blocks/Row'

import {
  Vkontakte,
  TelegramChannel,
  WhatsApp,
  Viber,
  Telegram,
  Phone,
  Location,
  File,
  Email,
  Logo,
} from 'blocks/icons'

const Socials = styled.div`
display: inline-block;
padding: 44px 20px;
list-style-type: none;
margin: 0;
vertical-align: top;
> *:not(:last-child) {
  padding-right: 10px;
}
@media only screen and (max-width: 780px) {
  display: flex;
  justify-content: center;
  padding: 44px 20px;
}
`

const Messengers = styled.div`
position: absolute;
display: inline-block;
> *:not(:last-child) {
  padding-right: 5px;
}
`

const Contacts = styled.div`
margin: 0;
padding: 0;
list-style-type: none;
max-width: 400px;
> * {
  display: block;
  color: #8a7873;
}
`

const Container = styled(props => (
  <footer className={props.className}>
    <Row>{props.children}</Row>
  </footer>
))`
background: ${props => props.theme.footer.background};
padding: 20px 0;
a {
  ${props => props.theme.footer.link};
}
> div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
}
`

const Footer: React.FC = () => (
  <Container>
    <Logo href="/" size="128px" />
    <Socials>
      <Vkontakte href="https://vk.com/yoga.altufyevo" size="32px" />
      <TelegramChannel href="https://t.me/yogaclub_om_moscow" size="32px" />
    </Socials>

    <Contacts>
      <File href="/docs/public-offer__yoga-club-om.pdf">Политика конфиденциальности</File>
      <Location href="https://yandex.ru/maps/-/CCQlqKsMhD">
        м.&nbsp;Бибирево, ул.&nbsp;Плещеева,&nbsp;д.&nbsp;12А, 3&nbsp;этаж
      </Location>
      <Messengers>
        <Phone href="tel:+79168765413">+7 (916) 876-54-13</Phone>
        <WhatsApp href="https://wa.me/79168765413" />
        <Viber href="viber://chat?number=79168765413" />
        <Telegram href="tg://resolve?domain=yoga_club_om" />
      </Messengers>
      <Phone href="tel:+79168765413">+7 (916) 876-54-13</Phone>
      <Email href="mailto:yoga-club-om@yandex.ru?subject=Запись">
        yoga-club-om@yandex.ru
      </Email>
    </Contacts>
  </Container>
)

export default Footer
