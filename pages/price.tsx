import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import Layout from 'components/Layout'

import Row from 'blocks/Row'
import { H2 } from 'blocks/tags'

import Unlimited from 'components/Unlimited'

const Card = styled.section`
margin: 10px 0;
padding: 20px;
box-sizing: border-box;
box-shadow: ${props => props.theme.shadow.index};
border-radius: 6px;
cursor: pointer;
&:hover {
  box-shadow: ${props => props.theme.shadow.hover};
}`

const Amount = styled.div`
display: inline-block;
font-size: 22px;
font-weight: 600;
color: color-orange;
`
const Hint = styled.div`
font-size: 14px;
color: #5d616f;
`

const Info = styled.div`
margin: 20px 0;
padding: 20px;
background: ${props => props.theme.color.gray.pale};
box-sizing: border-box;
box-shadow: ${props => props.theme.shadow.index};
border-radius: 6px;
font-size: 17px;
a {
  text-decoration: none;
  color: ${props => props.theme.color.orange};
  opacity: .8;
  &:hover {
    opacity: 1;
  }
  &:visited {
    color: ${props => props.theme.color.brown.light};
  }
}`

const PricePage: NextPage = () => (
  <Layout title="Цены | Йога клуб ОМ">
    <Row>
      <H2>Акция: 2 занятия по цене 1!</H2>
      <Unlimited />
      <H2>Стоимость групповых занятий</H2>
      <Card>
        <Amount>900 рублей</Amount> - разовое занятие.
      </Card>
      <Card>
        <Amount>3000 рублей</Amount> - абонемент на 4 занятия в течение 1-го месяца
        <Hint>{3000/4} руб. одно занятие</Hint>
      </Card>
      <Card>
        <Amount>5600 рублей</Amount> - абонемент на 8 занятий в течение 1-го месяца
        <Hint>{5600/8} руб. одно занятие</Hint>
      </Card>
      <Card>
        <Amount>7800 рублей</Amount> - абонемент на 12 занятий в течение 2-х месяцев
        <Hint>{7800/12} руб. одно занятие</Hint>
      </Card>
      <Card>
        <Amount>14400 рублей</Amount> - абонемент на 24 занятия в течение 3-х месяцев
        <Hint>{14400/24} руб. одно занятие</Hint>
      </Card>

      <H2>Стоимость индивидуальных занятий</H2>
      <Card>
        <Amount>3300 рублей</Amount> - разовое занятие (<b>1</b> час).
      </Card>
      <Card>
        <Amount>4000 рублей</Amount> - разовое занятие (<b>1.5</b> часа).
      </Card>
      <Card>
        <Amount>12000 рублей</Amount> - абонемент на <b>4</b> занятия (по <b>1</b> часу) в течение 1-го месяца.
      </Card>
      <Card>
        <Amount>14500 рублей</Amount> - абонемент на <b>4</b> занятия (по <b>1.5</b> часа) в течение 1-го месяца.
      </Card>

      <H2>Способы оплаты</H2>
      <Card>
        <Amount>Наличный расчёт</Amount> - &nbsp;у&nbsp;администратора на стойке регистрации
      </Card>
      <Info>
        Оплачивая занятие, абонемент или услугу, клиент присоединяется к настоящему <a href="/docs/public-offer__yoga-club-om.pdf">договору-оферте</a>
      </Info>
    </Row>
  </Layout>
)

export default PricePage
