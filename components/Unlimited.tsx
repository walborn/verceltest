import React from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { Form, Field } from 'react-final-form'
import Input from 'blocks/Input'
import Button from 'blocks/Button'


const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
@media only screen and (max-width: 780px) {
  position: relative;
  display: block;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  > * {
    margin-bottom: 10px;
  }
}
`

const Info = styled.div`
> p {
  position: relative;
  padding: 5px 30px;
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
}
`

const FieldRow = styled.div`
margin-bottom: 10px;
`
const Failure = styled.div`
display: ${props => props.children && !props.hidden ? 'block' : 'none'};
color: ${props => props.theme.color.failure};
padding: 5px 5px 0;
font-size: 11px;
`

interface User {
  name: string;
  phone: string;
}
type Props = {
  className?: string,
}

const Unlimited: React.FC<Props> = props => {
  const submit = async ({ name, phone }: User) => {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, subject: 'Unlimited Week' }),
    })
    if (res.status === 200) return toast(
      <div style={{ textAlign: 'center' }}>
        Вы успешно записались на акцию<br />
        <b style={{ fontSize: 20 }}>&quot;2 занятия по цене 1&quot;</b><br />
        В скором времени мы с Вами свяжемся для подтверждения участия!
      </div>)
    return toast.error(<div>Что-то пошло не так.<br />Повторите попытку позже.</div>)
  }

  const validate = (user: User) => {
    const errors: any = {}

    if (!user.name) errors.name = 'Обязательное поле'
    if (user.phone && !/^7\d{10}$/.test(user.phone)) errors.phone = 'Неверный номер телефона. Должен начинаться на 79 и далее 9 цифр'

    return errors
  }
  return (
    <Container className={props.className}>
      <Info>
        <p>Стоимость ₽ <strong>900</strong></p>
        <p>Акция актуальна, если вы у нас впервые</p>
        <p>2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</p>
        <p>Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</p>
      </Info>
      <Form
        onSubmit={submit}
        validate={validate}
        render={({ handleSubmit, form, pristine, valid }) => (
          <form onSubmit={async values => { await handleSubmit(values); if(valid) form.reset(); }}>
            <Field name="name">
              {({ input, meta }) => (
                <FieldRow>
                  <Input type="text" {...input} placeholder="Имя, Фамилия" />
                  <Failure hidden={!meta.touched || meta.pristine}>{meta.error}</Failure>
                </FieldRow>
              )}
            </Field>
            <Field name="phone">
              {({ input, meta }) => (
                <FieldRow>
                  <Input type="text" {...input} placeholder="Телефон" maxLength={12} />
                  <Failure hidden={!meta.touched || meta.pristine}>{meta.error}</Failure>
                </FieldRow>
              )}
            </Field>

            <Button type="submit" disabled={pristine}>Участвовать</Button>
          </form>
        )}
      />
    </Container>
  )
}

export default Unlimited
