import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: relative;
overflow: hidden;
background-color: ${props => props.theme.color.gray.pale};
`
const List = styled.ul<{dx: number }>`
list-style: none;
white-space: nowrap;
margin: 0;
padding: 0;
font-size: 0;
${({ dx }) => dx ? 'transition: transform ease-out 0.45s;' : ''};
${({ dx }) => `transform: translateX(${-100 * (1 + dx)}%)`};
`
const Item = styled(({ src, ...props }) => <li {...props}><img src={src} /></li>)`
display: inline-block;
vertical-align: middle;
width: 100%;
img {
  width: 100%;
}
`

const ImageContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  img {
    width: 100%;
  }
`
const ArrowSVG = (props: any) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
</svg>)
  
const Arrow = styled(props => <div {...props}><ArrowSVG /></div>)<{prev?: boolean, next?: boolean}>`
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #ffffff;
cursor: pointer;
opacity: .2;
&:hover {
  opacity: .4;
}
svg {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
}
${props => props.prev ? `left: 20px; svg { transform: translate(-50%, -50%) rotate(180deg); }` : ''}
${props => props.next ? `right: 20px; svg { transform: translate(-50%, -50%); }` : ''}
`

interface Props {
  style?: any
  list: string[]
  delay?: number
}

const Slider: React.FC<Props> = ({ style, list, delay = 7000 }) => {
  if (list.length === 1) return <ImageContainer><img src={list[0]} /></ImageContainer>
  const [ images, setImages ] = React.useState<{ key: string; src: string }[]>([])
  const [ pos, setPos ] = React.useState({ x: 0, i: 0 })
  
  React.useEffect(() => {
    const values = list.length === 2 ? [ ...list, ...list ] : [ ...list ]
    setImages(values.map((src, i) => ({ key: `${src}-${i}`, src })))
  }, [ list ])

  const prev = (i: number) => (i + images.length - 1) % images.length
  const next = (i: number) => (i + 1) % images.length

  const ti = React.useRef(0)

  const resetInterval = () => {
    if (ti.current) clearInterval(ti.current)
    ti.current = setInterval(handleNext, delay)
  }

  React.useEffect(() => {
    resetInterval()
    return () => clearInterval(ti.current)
  })

  const handleNext = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e) e.preventDefault()
    resetInterval()
    if (pos.x) return
    setPos({ ...pos, x: 1 })
    setTimeout(() => setPos({ x: 0, i: next(pos.i) }), 500)
  }

  const handlePrev = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e) e.preventDefault()
    resetInterval()
    if (pos.x) return
    setPos({ ...pos, x: -1 })
    setTimeout(() => setPos({ x: 0, i: prev(pos.i) }), 500)
  }

  const prevImage = React.useMemo(() => images[prev(pos.i)], [ images, pos.i])
  const currImage = React.useMemo(() => images[pos.i], [images, pos.i])
  const nextImage = React.useMemo(() => images[next(pos.i)], [ images, pos.i ])
  
  if (!nextImage || !prevImage || !currImage) return null
  return (
    <Container style={style}>
      <List dx={pos.x}>
        <Item key={prevImage.key} src={prevImage.src} />
        <Item key={currImage.key} src={currImage.src} />
        <Item key={nextImage.key} src={nextImage.src} />
      </List>
      <Arrow prev onClick={handlePrev} />
      <Arrow next onClick={handleNext} />
    </Container>
  )
}

export default Slider
