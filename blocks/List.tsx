import React from 'react'
import styled from 'styled-components'

const List = ({ className, children }: any) => (
  <ul className={className}>
    {React.Children.map(children, child => <li>{child}</li>)}
  </ul>
)

export default styled(List)`
  list-style: none;
  margin: 0;
  padding: 10px;
`
