<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

const validation = object({
  email: string()
    .required('Please add your email address')
    .email('Your email looks weird'),
  fullName: string().required('Who are you'),
})

const form = useForm({
  validationSchema: validation,
})

const subscribe = useMutation(
  async (formData) => {
    // This will automaticaly send the contact into
    // Daily Update list of contact
    await useBrevo('/contacts', {
      method: 'POST',
      body: {
        attributes: {
          FIRST_NAME: (formData.fullName as string).split(' ')[0],
          FULL_NAME: formData.fullName,
          LAST_NAME: (formData.fullName as string).split(' ')[1],
        },
        listIds: [6],
        updateEnabled: false,
        email: formData.email,
        emailBlacklisted: false,
        smsBlacklisted: false,
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

<template>
  <div class="flex flex-col laptop:w-7/12 mx-auto mt-28">
    <h3 class="text-2xl font-medium">🎉 Subscribe to newsletter</h3>
    <FormInput
      class="flex flex-col gap-5 mt-10"
      :context="form"
      @save="subscribe.mutate"
    >
      <TextInput name="fullName" placeholder="Your full name" />
      <TextInput name="email" placeholder="Your email address" />

      <div class="flex justify-end">
        <Button type="submit" variant="primary" size="lg"
          >{{ subscribe.pending.value ? 'Please wait ...' : 'Subscribe now' }}
          <i class="fi fi-rr-envelope-plus"></i>
        </Button>
      </div>
    </FormInput>
  </div>
</template>
