'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { newsletterService } from '~/services/newsletter-service'

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Please add your email address')
    .email('Opps your email looks weird.'),
})

function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const subscribeToNewsletter = useMutation({
    mutationFn: newsletterService.subsribeToDailyUpdate,
    onSuccess: () => {
      form.reset()
    },
    onError: () => {
      form.reset()
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((formData) =>
          subscribeToNewsletter.mutate(formData),
        )}
        className="flex flex-col gap-3 mt-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button disabled={subscribeToNewsletter.isPending} size={'base'}>
            {!subscribeToNewsletter.isPending ? (
              <>
                <i className="fi fi-rr-paper-plane" />
                Subscribe now
              </>
            ) : (
              <>
                <i className="fi fi-rr-paper-plane" />
                Subscribing ...
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default function BioNewsletterSection() {
  return (
    <section className="flex flex-col col-span-full border border-border rounded-xl p-4">
      <h3 className="text-xl">Join Newsletter</h3>
      <span className="opacity-75 mt-1">
        Join the amazing design, development, indie hacker tips every weeek.
      </span>

      <NewsletterForm />
    </section>
  )
}
