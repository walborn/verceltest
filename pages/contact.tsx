import * as React from 'react'
import { NextPage } from 'next'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import styled from 'styled-components'

import Layout from 'components/Layout'
import Row from 'blocks/Row'
import { H2 } from 'blocks/tags'
import List from 'blocks/List'

import {
  Vkontakte,
  WhatsApp,
  Viber,
  Telegram,
  Phone,
  Location,
  File,
  Email,
  TelegramChannel,
} from 'blocks/icons'

const Contacts = styled.div`
box-shadow: ${props => props.theme.shadow.index};
border-radius: 6px;
line-height: 30px;
li > a {
  text-decoration: none;
  color: #39291d;
}
li:hover > a {
  color: #8a7873;
}
@media only screen and (min-width: 1000px) {
  > * {
    display: inline-block;
    margin: 0;
    box-shadow: none;
    min-height: 350px;
    vertical-align: top;
  }
  > *:first-child {
    width: 40%;
  }

  > *:last-child {
    width: 60%;
  }
}
`

const Messengers = styled.div`
position: absolute;
display: inline-block;
> *:not(:last-child) {
  padding-right: 5px;
}
`

const YandexMap = styled.div`
  > div > * {
    position: absolute;
  }
`

const ContactPage: NextPage = () => (
  <Layout title="Контакты | Йога клуб ОМ">
    <Row>
      <H2>Контакты</H2>
      <Contacts>
        <List>
          <Location href="https://yandex.ru/maps/-/CCQlqKsMhD">
            м.&nbsp;Бибирево ул.&nbsp;Плещеева,&nbsp;д.&nbsp;12А,&nbsp;3&nbsp;этаж
          </Location>
          <>
            <Phone href="tel:+79168765413">+7 (916) 876-54-13&nbsp;</Phone>
            <Messengers>
              <WhatsApp href="https://wa.me/79168765413"/>
              <Viber href="viber://chat?number=79168765413"/>
              <Telegram href="tg://resolve?domain=yoga_club_om"/>
            </Messengers>
          </>
          <Phone href="tel:+79295659511">+7 (929) 565-95-11</Phone>
          <Email href="mailto:yoga-club-om@yandex.ru?subject=Запись">
            yoga-club-om@yandex.ru
          </Email>
          <Vkontakte href="https://vk.com/yoga.altufyevo" size="20px">Вконтакте</Vkontakte>
          <TelegramChannel href="https://t.me/yogaclub_om_moscow" size="20px">Telegram</TelegramChannel>
          <File href="/docs/public-offer__yoga-club-om.pdf">Скачать договор оферты</File>
        </List>
        <YandexMap>
          <YMaps>
            <Map
              width="100%"
              height="350px"
              state={{ center: [ 55.885832, 37.610907 ], zoom: 15 }}
            >
              <Placemark
                geometry={[ 55.885832, 37.610907 ]}
                properties={{
                  hintContent: 'Располоdжение клуба ОМ',
                  balloonContent: 'Йога клуб ОМ',
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/svg/placemarkYandex.svg',
                  iconImageSize: [ 60, 68 ],
                  iconImageOffset: [ -30, -68 ],
                }}
              />
            </Map>
          </YMaps>
        </YandexMap>
      </Contacts>
    </Row>
  </Layout>
)

export default ContactPage
