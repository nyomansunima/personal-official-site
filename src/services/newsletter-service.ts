import { brevoConnection } from '~/config/brevo'

type SubsribeInput = {
  email: string
}

class NewsletterService {
  async subsribeToDailyUpdate({ email }: SubsribeInput): Promise<void> {
    await brevoConnection('/contacts', {
      method: 'post',
      body: {
        updateEnabled: true,
        email,
        listIds: [6, 2],
        attributes: {},
      },
    })

    return
  }
}

export const newsletterService = new NewsletterService()
