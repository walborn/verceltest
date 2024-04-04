import styled from 'styled-components'
import LoadingSVG from '../public/svg/loading.svg'

export default styled(props => <div {...props}><LoadingSVG /></div>)`
position: relative;
min-height: 300px;
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 48px;
}`
