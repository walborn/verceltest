import styled from 'styled-components'


export const H1 = styled.h1`
text-align: center;
margin-bottom: 23px;
line-height: 40px;
font-size: 44px;
color: ${props => props.theme.font.color.title};
`

export const H2 = styled.h2`
text-align: center;
margin-bottom: 23px;
line-height: 40px;
font-size: 32px;
color: ${props => props.theme.font.color.title};
`

export const List = styled.ul`
margin: 10px 0;
padding: 0;
list-style: none;
`

export const Item = styled.li`
position: relative;
padding: 3px 30px;
margin: 0;
&:before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffa500;
}
`

export const Thesis = styled.strong``
