<template>
  <main class="flex flex-col laptop:py-64 py-32">
    <div class="flex container mx-auto laptop:px-20 px-5">
      <div class="flex flex-col laptop:w-8/12 px-5 laptop:px-0 mx-auto">
        <h2
          class="text-5xl laptop:text-8xl font-medium flex leading-tight"
          animation="text-char-opacity"
        >
          Hello, let's discus something
        </h2>

        <div animation="slide-up">
          <div class="flex flex-wrap gap-4 items-center mt-16" animation-target>
            <Button
              v-for="social in socials"
              :key="social.label"
              as="a"
              :href="social.url"
              target="_blank"
              external
              size="lg"
              >{{ social.label }}</Button
            >
          </div>
        </div>

        <!-- form -->
        <FormInput
          :context="form"
          class="mt-20 gap-5"
          @save="sendMessage.mutate"
        >
          <TextInput name="fullName" placeholder="Your full name" />
          <TextInput name="email" placeholder="Your email address" />
          <AreaTextInput name="message" placeholder="Your messages" />

          <div class="flex justify-end">
            <Button type="submit" variant="primary" size="lg">
              <i class="fi fi-rr-paper-plane"></i>
              Send Messages
            </Button>
          </div>
        </FormInput>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { socials } from '~/assets/data/social.json'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Contact',
  description: 'Get in touch with me and collaborate',
  ogTitle: 'Contact | Nyoman Sunima',
  ogDescription: 'Get in touch with me and collaborate',
})

const formSchema = object({
  fullName: string().required('Please add your full name'),
  email: string()
    .required('Please add email')
    .email('Opps, your email look weirds'),
  message: string().required('Please add your message'),
})

const form = useForm({ validationSchema: formSchema })
const sendMessage = useMutation(
  (formData) => {
    const { email, fullName, message } = formData
    return useBrevo('/smtp/email', {
      method: 'POST',
      body: {
        sender: {
          name: 'Site Contact',
          email: 'contact@nyomansunima.com',
        },
        to: [
          {
            name: 'Nyoman Sunima',
            email: 'nyomansunima@gmail.com',
          },
        ],
        templateId: '1',
        params: {
          fullname: fullName,
          message,
          email,
        },
      },
    })
  },
  {
    onSuccess: () => {
      form.resetForm()
    },
  },
)
</script>
