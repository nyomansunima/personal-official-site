import {
  ContactTextAreaInput,
  ContactTextInput,
  Form,
  HiddenInput,
  PillOption,
} from '@components/forms'
import { GeneralLayout } from '@components/layouts'
import { useMutation, useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/contact.module.scss'
import { useEffect, useRef, useState } from 'react'
import useCursor from '@lib/hooks/use-cursor'
import { OutlineButton } from '@components/buttons'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import contactService from '@lib/services/contact-service'
import { gsap } from 'gsap'
import commonService from '@lib/services/common-service'

const interests = [
  'Site from scratch',
  'App from scratch',
  'UI & UX Design',
  'Branding',
  'Web Development',
  'Mobile Development',
  'Maintenence',
]

const formValidation = z.object({
  interests: z.string().optional(),
  name: z.string(),
  email: z.string().min(1, 'Please add email').email('Your email look weird'),
  message: z.string(),
})

/**
 * # ContactPage
 *
 * page to handle the contact route
 * use to serve the client to get in touch with me
 *
 * @returns JSX.Element
 */
const ContactPage: NextPageWithLayout = (): JSX.Element => {
  const contactForm = useForm({
    mode: 'onChange',
    resolver: zodResolver(formValidation),
  })
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const socialsQuery = useQuery(['socials'], commonService.loadAllSocialMedia, {
    onSuccess: () => {
      cursor.reload()
    },
  })

  const sendContact = useMutation(contactService.sendContact, {
    onSuccess: () => {
      contactForm.reset()
      setSelectedInterests([])
    },
    onError: (e) => {
      console.log(e)
    },
  })

  // toggle the interest
  // and activate if the value is found
  const toggleInterest = (interest: string) => {
    const data = selectedInterests.slice()

    if (data.includes(interest)) {
      const index = data.indexOf(interest)
      data.splice(index, 1)
    } else {
      data.push(interest)
    }

    setSelectedInterests(data)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // start animate pages
      const tl = gsap.timeline({
        delay: 2.4,
        defaults: {
          ease: 'power1',
          duration: 1.4,
        },
      })

      tl.from('h1', {
        y: 100,
        opacity: 0,
      }).from('form', {
        y: 80,
        opacity: 0,
      })

      if (socialsQuery.data) {
        gsap.from('.socials li', {
          delay: 2.4,
          left: -100,
          ease: 'back',
          stagger: 0.25,
          duration: 1.5,
        })
      }
    }, mainRef)

    cursor.reload()

    return () => ctx.revert()
  }, [socialsQuery.data])

  return (
    <>
      <Head>
        <title>Contact - Nyoman Sunima</title>
        <meta
          name="description"
          content="Connect with me and start collaborate for your next project"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <h1
              className={styles.heading}
              data-cursor-size="200"
              data-cursor-exclusion
            >
              Hey, tell me about anything 🎉
            </h1>

            <Form
              context={contactForm}
              onSubmit={(data) => sendContact.mutate(data)}
              className={styles.form}
            >
              <span className={`${styles.interest_label} label`}>
                Iam interested in ...
              </span>
              <div className={styles.interest_wrapper}>
                {interests.map((interest, index) => (
                  <PillOption
                    selected={selectedInterests.includes(interest)}
                    onSelect={() => toggleInterest(interest)}
                    key={index}
                  >
                    {interest}
                  </PillOption>
                ))}
              </div>
              <HiddenInput
                name="interest"
                value={selectedInterests.join(', ')}
              />
              <ContactTextInput name="name" placeholder="Your name" />
              <ContactTextInput name="email" placeholder="Your email" />
              <ContactTextAreaInput
                name="message"
                placeholder="Tell me about your project"
              />

              <div className={styles.actions}>
                <OutlineButton
                  type="submit"
                  disabled={sendContact.isLoading}
                  isProcess={sendContact.isLoading}
                >
                  {sendContact.isLoading ? (
                    <>
                      Sending message <i className="fi fi-rr-spinner"></i>
                    </>
                  ) : (
                    <>
                      Send Message <i className="fi fi-rr-paper-plane"></i>
                    </>
                  )}
                </OutlineButton>
              </div>
            </Form>
          </div>
        </section>

        {socialsQuery.data && (
          <ul className={`${styles.socials} socials`}>
            {socialsQuery.data.map(({ iconCode, url }, index) => (
              <li
                data-cursor-stick
                data-cursor-exclusion
                data-cursor-size="80"
                key={index}
                onClick={() => window.open(url)}
              >
                <i className={iconCode}></i>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}

ContactPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default ContactPage
