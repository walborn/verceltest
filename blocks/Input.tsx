import styled from 'styled-components'

type Props = {
  disabled?: boolean
}

const Input = styled.input <Props > `
position: relative;
width: 100%;
padding: 12px 25px 12px 15px;
border: 1px solid ${props => props.theme.border.color};
transition: border-color 0.2s ease-in-out;
border-radius: 4px;
outline: none;
font-size: inherit;
:focus {
  border-color: #73a9eb;
}

::placeholder {
  color: #95a3b4;
}
`

export default Input
