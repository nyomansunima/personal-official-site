'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
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

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Please type your email address',
    })
    .email('Opps, your email is invalid'),
})

export function NewsletterForm(): React.ReactElement {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div className="flex w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col tablet:flex-row gap-x-4 gap-y-3 w-full tablet:justify-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="tablet:w-6/12">
                <FormControl>
                  <Input
                    placeholder="Just your favorite email address"
                    className="h-14 px-6 bg-ambient"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant={'secondary'}
            size={'lg'}
            className="transition-all duration-500 hover:scale-95"
          >
            Subscribe <i className="fi fi-rr-paper-plane" />
          </Button>
        </form>
      </Form>
    </div>
  )
}

export function NewsletterSection(): React.ReactElement {
  return (
    <div className="flex flex-col mt-16 items-center">
      <span className="text-foreground/70 !leading-relaxed text-center laptop:w-7/12">
        If you like this, support me by subscribe to this newsletter. You’ll get
        notification on email when something released
      </span>

      <div className="mt-10 tablet:w-10/12">
        <NewsletterForm />
      </div>
    </div>
  )
}
