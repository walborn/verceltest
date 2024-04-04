import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

import { Master } from 'interfaces'
import Row from 'blocks/Row'
import Loading from 'components/Loading'
import Layout from 'components/Layout'

import list from 'public/masters'

const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`

const Item = styled.li`
margin: 10px 0;
padding: 20px;
text-align: center;
box-sizing: border-box;
box-shadow: ${props => props.theme.shadow.index};
border-radius: 6px;
cursor: pointer;
opacity: 0.95;
transition: opacity .3s ease-in-out;
&:hover {
  opacity: 1;
  box-shadow: ${props => props.theme.shadow.hover};
}
> a {
  text-decoration: none;
}
`

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

type Props = {
  list: Master[],
  pathname: string,
}

const MasterListPage: NextPage<Props> = () => {
  if (!list) return <Layout title="Инструкторы | Йога клуб ОМ"><Loading /></Layout>

  return (
    <Layout title="Инструктора | Йога клуб ОМ">
      <Row>
        <List>
          {
            list.map((i: any) => (
              <Item key={i.id}>
                <Link href="/masters/[id]" as={`/masters/${i.id}`}>
                  <a>
                    <Avatar src={`/images/avatar/${i.id}.jpg`} alt={i.name} />
                    <Name>{i.name}</Name>
                    <Description>{i.description}</Description>
                  </a>
                </Link>
              </Item>
            ))
          }
        </List>
      </Row>
    </Layout>
  )
}

export default MasterListPage
