import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { lighten } from 'polished'

import Layout from 'components/Layout'

import Row from 'blocks/Row'
import Button from 'blocks/Button'
import TimeSVG from '../public/svg/time.svg'
import { Lesson } from 'interfaces'

import list from 'public/lessons'

const ToggleButton = styled(
  ({ className, ...props }) => <div className={className}><Button {...props} /></div>
)`
margin: 10px 0;
text-align: center;
Button {
  max-width: 300px;
}
`
const DayList = styled.div`
white-space: nowrap;
box-shadow: ${props => props.theme.shadow.index};
`
const DayItem = styled.div<{ active: boolean }>`
display: inline-block;
box-sizing: border-box;
width: calc(100%/7);
padding: 5px 0;
font-weight: 600;
color: ${props => props.theme.color.gray.dark};
border-left: 0 none;
text-align: center;
outline: none;
cursor: pointer;
transition: background-color 0.2s;
&:first-child {
  border-left: 1px solid ${props => props.theme.color.gray.pale};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
&:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
&:hover {
  background-color: ${lighten(0.05, '#fbe1c2')};
  border: 1px solid ${lighten(0.05, '#fbe1c2')};
}

${(props: any) => props.active
? `
background-color: #fbe1c2;
border: 1px solid ${lighten(0.2, props.theme.color.orange)};
`
: ''}
`
const Card = styled.div`
margin: 10px 0;
padding: 20px;
text-align: center;
box-sizing: border-box;
box-shadow: inset 0 1px 1px #e7eaf3, 0 0 8px #e7eaf3;
border-radius: 6px;
cursor: pointer;
`
const Time = styled.div`
color: #468ee5;
font-weight: 700;
`
const Title = styled.div``

const MasterCmp: React.FC<{ className?: string; alternate?: string; master: string; }> = 
({ className, alternate, master }) => {
  if (alternate) return <div className={`${className} alternate`}><span>{master}</span> → <span>{alternate}</span></div>
  if (master) return <div className={`${className} master`}>{master}</div>
  return <div className={`${className} blank`}>Не назначен</div>
}

const Master = styled(MasterCmp)`
font-size: 14px;
font-weight: 300;
`
const Level = styled.div``
const Note = styled.div`
color: ${props => props.theme.color.orange};
`

const Week = {} as any

Week.Container = styled.table`
border-collapse: collapse;
min-width: 100%;
`
Week.Headers = styled(props => <thead className={props.className}><tr>{props.children}</tr></thead>)``

Week.HeadTime = styled.th`
text-align: center;
width: 50px;
svg {
  fill: ${props => props.theme.color.orange};
}
`
Week.Head = styled.th<{ active: boolean }>`
font-weight: 600;
color: #5d616f;
cursor: pointer;
transition: background-color 0.2s;
box-sizing: border-box;
padding: 5px 0;
${props => props.active
? `
background-color: #fbe1c2;
box-shadow: inset 0 0 0 1px #ffd18d;
`
: `
&:hover {
  background-color: ${lighten(0.05, '#fbe1c2')};
  box-shadow: inset 0 0 0 1px #fbe1c2;
}
`
}
`
Week.Body = styled.tbody`
transform: translate(0px, 10px);
`
Week.Row = styled.tr`
&:nth-child(2n + 1) {
  background: rgba(138,120,115,0.05);
}
`
Week.CellTime = styled.td`
color: ${props => props.theme.color.orange};
text-align: center;
`
Week.Cell = styled.td`
font-size: 11px;
padding: 5px;
`
Week.Lesson = styled.div`
margin: 10px 0;
padding: 10px;
text-align: center;
box-sizing: border-box;
box-shadow: ${props => props.theme.shadow.index};
border-radius: 6px;
cursor: pointer;
&:hover {
  box-shadow: ${props => props.theme.shadow.hover};
}
`
Week.Category = styled.div<{ value: string }>`
border-radius: 4px;
background-color: ${props => {
  if (props.value === 'ashtanga') return props.theme.color.blue.light
  if (props.value === 'fighting') return props.theme.color.red
  if (props.value === 'hatha') return props.theme.color.green
  return ''
}};
`
Week.Time = styled.div`
color: ${props => props.theme.color.blue.light};
`
Week.Master = styled(MasterCmp)`
font-size: 14px;
font-weight: 300;
${props => props.alternate ? `
span: first-child;
color: ${props.theme.color.gray.light};
text-decoration: line-through;
` : ''}
span: last-child;
color: ${props => props.theme.color.blue.light};
`
Week.Level = styled.div``
Week.Title = styled.div``
Week.Note = styled.div`
color: ${props => props.theme.color.orange};
`

const weekdays = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ]
const hhmm = (minutes: number) => (mm => `${`0${(minutes - mm) / 60}`.slice(-2)}:${`0${mm}`.slice(-2)}`)(minutes % 60)

export const getLessons: any = (list: Lesson[]) => {
  
  const lessons: Lesson[][] =  list
    .reduce((r: Lesson[][], i: Lesson) => {
      if (!Array.isArray(r[i.day])) r[i.day] = []
      r[i.day].push(i)
      return r
    }, [])

  const compare = (a: Lesson, b: Lesson) => {
    if (a.time < b.time) return -1
    if (a.time > b.time) return 1
    if (a.duration < b.duration) return -1
    if (a.duration > b.duration) return 1
    return 0
  }

  return lessons.map(i => i.sort(compare))
}

const getDay = () => {
  const now = new Date()
  const offset = (now.getTimezoneOffset() + 180) * 60 * 1000
  return (new Date(now.getTime() + offset).getDay() + 6) % 7
}

const SchedulePage: NextPage = () => {
  const [ day, setDay ] = React.useState(getDay())
  const [ view, setView ] = React.useState('day') // day or week

  const lessons = getLessons(list)

  const table = lessons.reduce((r: any, l: Lesson[], weekday: any) => {
    l.forEach((lesson: Lesson) => {
        const hour: number = lesson.time / 60 | 0
        if (!r[hour]) r[hour] = { [weekday]: [ lesson ] }
        else if (!Array.isArray(r[hour][weekday])) r[hour][weekday] = [ lesson ]
        else r[hour][weekday] = [ ...r[hour][weekday], lesson ]
    })
    return r
  }, [])

  if (view === 'day') return (
    <Layout title="Расписание | Йога клуб ОМ">
      <Row>
        <ToggleButton onClick={() => setView('week')}>Показать всю неделю</ToggleButton>
        <DayList>
        {
          weekdays.map((weekday, i) => (
            <DayItem key={weekday} active={i === day} onClick={() => setDay(i)}>
              {weekday}
            </DayItem>
          ))
        } 
        </DayList>
        {
          lessons[day].map((i: any) => (
            <Card key={i.id}>
              <Time>{hhmm(+i.time)} - {hhmm(+i.time + +i.duration)}</Time>
              <Title>{i.title}</Title>
              <Master
                master={i.master}
                alternate={i.alternate}
              />
              <Level>{i.level}</Level>
              <Note dangerouslySetInnerHTML={{ __html: i.note }} />
            </Card>
          ))
          }
      </Row>
    </Layout>
  )
  if (view === 'week') return (
    <Layout title="Расписание | Йога клуб ОМ">
      <Row>
        <ToggleButton onClick={() => setView('day')}>Показать один день</ToggleButton>
        <Week.Container>
          <Week.Headers>
            <Week.HeadTime><TimeSVG style={{ padding: 10, width: '100%' }}/></Week.HeadTime>
            {
              [ 0, 1, 2, 3, 4, 5, 6 ].map(i => (
                <Week.Head
                  key={weekdays[i]}
                  onClick={() => setDay(i)}
                  active={i === day}
                >
                  {weekdays[i]}
                </Week.Head>
              ))
            }
          </Week.Headers>
          <Week.Body>
          {
            table.map((row: any, index: number) => (
              <Week.Row key={index}>
                <Week.CellTime>{index}</Week.CellTime>
                {
                  [ 0, 1, 2, 3, 4, 5, 6 ].map(weekday => (
                    <Week.Cell key={weekday}>
                    {
                      row[weekday]?.filter((i: Lesson) => !i.hidden)?.map((i: Lesson) => (
                        <Week.Lesson key={i.id}>
                          <Week.Category value={i.category} />
                          <Week.Time>{hhmm(+i.time)} - {hhmm(+i.time + +i.duration)}</Week.Time>
                          <Week.Title>{i.title}</Week.Title>
                          <Master master={i.master} />
                          <Week.Level>{i.level}</Week.Level>
                          <Week.Note dangerouslySetInnerHTML={{ __html: i.note }} />
                        </Week.Lesson>
                      ))
                    }
                    </Week.Cell>
                  ))
                }
              </Week.Row>
            ))
          }
          </Week.Body>
        </Week.Container>
      </Row>
    </Layout>
  )
  return <pre>{JSON.stringify(table, null, 4)}</pre>
}

export default SchedulePage
