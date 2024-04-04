import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import Layout from 'components/Layout'

import Unlimited from 'components/Unlimited'
import Slider from 'blocks/Slider'

import Row from 'blocks/Row'
import { H2 } from 'blocks/tags'

const Home = styled(Row)`
display: flex;
flex-direction: column;
// &:before {
//   content: '';
//   position: absolute;
//   top: 20px;
//   left: 10px;
//   right: 10px;
//   bottom: 10px;
//   opacity: 0.1;
//   background: url(/logo.png) no-repeat 50% 50%;
//   background-size: cover;
//   z-index: -1;
// }
`

const Brand = styled.img`
width: 100%;
max-width: 400px;
align-self: center;
`

const Section = styled.section`
  padding: 10px 0;
`

const IndexPage: NextPage = () => (
  <Layout title="Главная | Йога клуб ОМ">
    <Home>
      <Brand src="/brand.png" alt="Йога клуб ОМ" />
      <div style={{ padding: '20px 0' }}>
        <Slider
          list={
            [
              '/images/home/2-1.jpeg',
              '/images/home/5.jpeg',
              '/images/home/11.jpeg',
              '/images/home/8.jpeg',
              '/images/home/7.jpeg',
              '/images/home/3-1.jpeg',
              // '/images/home/1.png',
            ]
          }
        />
      </div>
      <Section>
        <strong>Наш клуб</strong> - это сообщество увлеченных людей,
        целью которых является саморазвитие и помощь в этом другим людям.
        С 2014 года улучшаем жизнь Практикой!
      </Section>

      <H2>Выбери свою практику</H2>
      <Section>
        Можно выбрать практику в удобное для Вас время, различного уровня сложности
        и созвучную Вашим внутренним устремлениям.
        Занятия проводят опытные и сертифицированные инструкторы, с которыми можно
        заниматься - <strong>индивидуально</strong> или <strong>в группе</strong>.
      </Section>
      <Section><strong>ЙОГА:</strong>
        <div className="item">Классическая Хатха йога</div>
        <div className="item">Аштанга йога</div>
        <div className="item">Кундалини йога</div>
        <div className="item">Мягкие практики <strong>для беременных</strong></div>
      </Section>

      <Section><strong>СПЕЦИАЛЬНЫЕ НАПРАВЛЕНИЯ:</strong>
        <div className="item">Практика &quot;Здоровая спина&quot;</div>
        <div className="item">Общая физическая подготовка</div>
      </Section>
      <Section><strong>ЕДИНОБОРСТВА (ДЛЯ ДЕТЕЙ ОТ 5 ДО 14 ЛЕТ)</strong>
        <div className="item">Джит Кун-до - стиль, основанный Брюсом Ли</div>
      </Section>

      <H2>Акция: 2 занятия по цене 1!</H2>
      <Section><Unlimited /></Section>
    </Home>
  </Layout>
)

export default IndexPage
