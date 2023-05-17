import emailjs from '@emailjs/browser'
import brevoClient from '@lib/connection/brevo-connection'

class ContactService {
  async subscribeToNewsletter(form: any): Promise<void> {
    // will create contact in brevo on
    // 🎉 Content reader and product update list

    const fullName = form.fullName as string
    const email = form.email
    const [firstName, lastName] = fullName.split(' ')

    try {
      await brevoClient.post('/contacts', {
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName || '',
        },
        listIds: [6, 2],
        updateEnabled: true,
        email,
      })
    } catch (error) {
      throw {
        statusCode: 400,
        message: 'newsletter/subscribe-failed',
        error,
      }
    }
  }

  async sendContact(form: any) {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: form.name,
        message: form.message,
        from_email: form.email,
        reply_to: form.email,
        interests: form.interests,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
  }
}
const contactService = new ContactService()
export default contactService
