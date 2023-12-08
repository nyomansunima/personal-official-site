'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { newsletterService } from '~/services/newsletter-service'

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Opps, please add email address')
    .email('Opps, your email looks weird'),
})

function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const subscribeToNewsletter = useMutation({
    mutationFn: async (formData: z.infer<typeof formSchema>) => {
      await newsletterService.subsribeToDailyUpdate({ email: formData.email })
    },
    onSuccess: () => {
      form.reset({ email: '' })
    },
    onError: () => {
      form.reset({ email: '' })
    },
  })

  return (
    <Form {...form}>
      <form
        className="flex items-center gap-5 mt-10 w-full"
        onSubmit={form.handleSubmit((formData) =>
          subscribeToNewsletter.mutate(formData),
        )}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-grow">
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={'base'}>
          <i className="fi fi-rr-envelope" />
          Subscribe Now
        </Button>
      </form>
    </Form>
  )
}

export default function BlogDetailNewsletterSection() {
  return (
    <section className="flex border border-neutral-100 px-14 py-10 rounded-2xl laptop:mt-24 mt-16">
      <div className="flex flex-col">
        <h3 className="text-4xl !leading-tight">
          Weekly ideas & strategies delivered to your inbox
        </h3>
        <p className="mt-6 opacity-70">
          The weekly newsletter for over +15,000 developers & designers who want
          to earn more and live a wealthy life.
        </p>

        <NewsletterForm />
      </div>
    </section>
  )
}
