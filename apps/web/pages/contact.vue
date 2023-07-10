<template>
  <main class="flex flex-col py-64">
    <div class="flex container mx-auto">
      <div class="flex flex-col laptop:w-8/12 px-5 laptop:px-0 mx-auto">
        <h2
          class="text-5xl laptop:text-8xl font-medium flex laptop:w-10/12 leading-tight"
          animation="text-char-opacity"
        >
          ✋ Hi, let's discus something
        </h2>

        <div animation="slide-up">
          <div class="flex flex-wrap gap-4 items-center mt-16" animation-target>
            <OutlineButton
              :link="social.url"
              v-for="social in socials"
              :key="social.label"
              >{{ social.label }}</OutlineButton
            >
          </div>
        </div>

        <!-- form -->
        <FormInput
          :context="form"
          @save="sendMessage.mutate"
          class="mt-20 gap-5"
        >
          <TextInput name="fullName" placeholder="Your full name" />
          <TextInput name="email" placeholder="Your email address" />
          <AreaTextInput name="message" placeholder="Your messages" />

          <div class="flex justify-end">
            <OutlineButton type="submit">
              <i class="fi fi-rr-paper-plane"></i>
              Send Messages
            </OutlineButton>
          </div>
        </FormInput>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { socials } from '~/assets/data/social.json'
import { object, string } from 'yup'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Contact',
  description: 'Get in touch with me and collaborate',
  ogTitle: 'Contact',
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
    onError: (err) => {
      console.log(err)
      // form.resetForm()
    },
  },
)

onMounted(() => {
  useAnimation()
})
</script>
