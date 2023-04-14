import emailjs from '@emailjs/browser'

class ContactService {
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
