import styled from 'styled-components'
import { darken } from 'polished'

type Props = {
  className?: string;
  type?: ('button' | 'submit');
  disabled?: boolean;
}

interface variant {
  font: string;
  background: string;
  border: string;
  disabled?: boolean;
}

const buttonVariant = ({ font, background, border, disabled } : variant) => `
color: ${font};
background-color: ${background};
border: 1px solid ${border};
border-radius: 4px;
transition: background .1s ease-in-out;
width: 100%;
line-height: 30px;
font-size: inherit;
${disabled
    ? `cursor: default;
opacity: .5;
pointer-events: none;`
    : `cursor: pointer;
&:focus {
  border-color: ${darken(0.3, border)};
  background-color: ${darken(0.1, background)};
  outline: none;
}

&:hover {
  background-color: ${darken(0.1, background)};
  border-color: ${darken(0.2, border)};
}`
}`

export default styled.button < Props > `
${props => buttonVariant({ ...props.theme.button, disabled: props.disabled })}
`
