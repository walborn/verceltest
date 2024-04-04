const sgMail = require('@sendgrid/mail')

export default async function (req: any, res: any) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { subject, phone, name } = req.body

  const content = {
    to: 'codebor@yandex.ru',
    from: 'yuzhakov.boris@gmail.com',
    subject,
    text: `${name} : ${phone}`,
    html: `<p><b>${name}</b> - <a href="tel:+${phone}">+${phone}</a></p>`
  }

  try {
    await sgMail.send(content)
    return res.status(200).send({ type: 'success', message: 'Message sent successfully' })
  } catch (error) {
    console.error('ERROR', error)
    return res.status(400).send({ type: 'failure', message: 'Something went wrong. Please, write message to +79168765413' })
  }
}
