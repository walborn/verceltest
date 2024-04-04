import * as React from 'react'
import { NextPage } from 'next'
import Layout from 'components/Layout'

import Slider from 'blocks/Slider'
import Row from 'blocks/Row'
import { H2, List, Item, Thesis } from 'blocks/tags'

const RentPage: NextPage = () => (
  <Layout title="Аренда | Йога клуб ОМ">
    <Row>
      <Thesis>Наши залы</Thesis> - это многофункциональные площадки,
      которые подойдут для различных занятий и мероприятий.
      Залы предназначены для проведения индивидуальных и групповых
      занятий по следующим направлениям:
      <List>
        <Item>Йога</Item>
        <Item>Фитнес</Item>
        <Item>Единоборства</Item>
      </List>
      <H2>Характеристики</H2>
      <List>
        <Item>Площадь залов: 70 и 17 м<sup>2</sup></Item>
        <Item>Высота потолков: 3.4 м</Item>
        <Item>Напольное покрытие: ламинат</Item>
        <Item>Раздевалки (женская, мужская)</Item>
        <Item>Спортинвентарь: коврики, блоки, ремни для йоги, болстеры, татами</Item>
      </List>
      <Slider
        list={
          [
            '/images/gallery/0.jpeg',
            '/images/gallery/1.jpeg',
            '/images/gallery/2.jpeg',
            '/images/gallery/3.jpeg',
            '/images/gallery/4.jpeg',
            '/images/gallery/5.jpeg',
          ]
        }
      />
    </Row>
  </Layout>
)

export default RentPage
