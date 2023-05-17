import { FlatButton } from '@components/buttons'
import { Form, TextInput } from '@components/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import contactService from '@lib/services/contact-service'
import { useMutation } from '@tanstack/react-query'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const newsletterValidation = z.object({
  fullName: z.string(),
  email: z
    .string()
    .min(1, 'Please add your email')
    .email('Opps, your email look weird'),
})

const BlogNewsletter: FunctionComponent = (): JSX.Element => {
  const newsletterForm = useForm({
    mode: 'onChange',
    resolver: zodResolver(newsletterValidation),
  })

  const subscribeNewsletter = useMutation(
    contactService.subscribeToNewsletter,
    {
      onSuccess: () => {
        newsletterForm.reset()
      },
      onError: () => {
        newsletterForm.reset()
      },
    }
  )

  return (
    <div className="flex flex-col mt-10 bg-white border border-gray-100 p-10 rounded-3xl font-medium">
      <h4 className="text-3xl font-semibold">Subscribe to newsletter</h4>
      <span className="text-gray-700 mt-2 text-lg">
        Get exclusive content, discounts, and updates delivered straight to your
        inbox. Join community by subscribe - it's quick, easy, and free. I
        promise no spam and you can unsubscribe anytime. Subscribe now!
      </span>

      <Form
        context={newsletterForm}
        onSubmit={subscribeNewsletter.mutate}
        className="mt-8"
      >
        <div className="flex flex-col tablet:flex-row w-full gap-5">
          <TextInput
            name="fullName"
            placeholder="Your full name"
            preIcon="fi fi-rr-user"
          />
          <TextInput
            name="email"
            placeholder="Your email address"
            preIcon="fi fi-rr-user"
          />
        </div>
        <FlatButton
          disabled={subscribeNewsletter.isLoading}
          className="w-full mt-7 transition-all duration-500 hover:-translate-y-1"
        >
          <i className="fi fi-rr-paper-plane"></i>
          Subscribe now
        </FlatButton>
      </Form>
    </div>
  )
}

export default BlogNewsletter
