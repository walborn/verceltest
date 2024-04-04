import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Layout from 'components/Layout'
import Row from 'blocks/Row'

import list from '../../public/masters'

const Name = styled.div`
font-size: 28px;
padding-bottom: 10px;
color: ${props => props.theme.color.orange};
text-align: center;
`
const Avatar = styled(({ className, ...props }) => (<div className={className}><img {...props} /></div>))`
text-align: center;
> img {
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadow.index};
}
`
const Description = styled.div`
text-align: center;
color: ${props => props.theme.color.gray.dark};
`

const MasterPage: NextPage = () => {
  const { query } = useRouter()

  const item = list.find(i => i.id === query.id)

  if (!item) return (
    <Layout title="Мастер | Йога клуб ОМ">
      <Row>
        <strong>404.</strong> Инструктор не найден
      </Row>
    </Layout>
  )

  return (
    <Layout title={`${item.name} | Йога клуб ОМ`}>
      <Row>
        <Avatar src={`/images/avatar/${item.id}.png`} alt={item.name} />
        <Name>{item.name}</Name>
        <Description>{item.description}</Description>
      </Row>
    </Layout>
  )
}

export default MasterPage
