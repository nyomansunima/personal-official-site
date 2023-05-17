import { Form, TextInput } from '@components/forms'
import contentService from '@lib/services/content-service'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { NextPageWithLayout } from '~/types/app'
import { useMutation } from '@tanstack/react-query'
import contactService from '@lib/services/contact-service'
import { useForm } from 'react-hook-form'
import { FlatButton } from '@components/buttons'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newsletterValidation = z.object({
  fullName: z.string(),
  email: z
    .string()
    .min(1, 'Please add your email')
    .email('Opps, your email look weird'),
})

/**
 * # BioPage
 *
 * Handle the bio profile and
 * show the inportant links
 * @returns JSX.Element
 */
const BioPage: NextPageWithLayout = (): JSX.Element => {
  const newsletterForm = useForm({
    mode: 'onChange',
    resolver: zodResolver(newsletterValidation),
  })
  const detailQuery = useQuery(['bio'], contentService.getDetailBio)
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

  useEffect(() => {
    document.body.classList.add('bg-slate-100', 'dark:bg-[#13101e]')
  }, [])

  return (
    <>
      <Head>
        <title>My awesome link in bio | Nyoman Sunima</title>
        <meta
          name="description"
          content="Explore my personal bio link profile"
        />
      </Head>

      <main className="flex container mx-auto py-16 px-5 tablet:px-0 tablet:py-32 justify-center font-medium">
        <div className="flex flex-col tablet:w-6/12">
          {/* Intro profile */}
          <div className="flex flex-col w-full items-center">
            <div className="flex h-28 w-28 rounded-full relative overflow-hidden before:content-[''] before:absolute p-3 before:inset-0 before:border-2 before:border-gray-200 dark:border-gray-800 before:rounded-full">
              <Image
                src="/images/avatar.png"
                className="rounded-full overflow-hidden"
                fill
                sizes="auto"
                alt="Profile"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <h2 className="text-2xl font-semibold dark:text-white">
                Nyoman Sunima
              </h2>
              <i className="fi fi-rr-badge-check text-violet-500 text-2xl"></i>
            </div>
            <p className="flex w-11/12 text-center text-lg mt-4 dark:text-gray-200">
              Hi. I'm Nyoman Sunima! I'm a self-taught Senior Product Designer,
              Creative Fullstack Developer located in Bali, Indonesia.
            </p>
          </div>

          {/* Social icons */}
          {detailQuery.data?.socials && detailQuery.data.socials.length > 0 && (
            <div className="flex items-center gap-4 justify-center mt-10">
              {detailQuery.data.socials.map((social, index) => (
                <Link
                  href={social.url}
                  target="_blank"
                  className="flex justify-center items-center h-14 w-14 shadow-sm rounded-full bg-white transition-all duration-300 hover:-translate-y-1"
                  key={index}
                >
                  <i className={`${social.iconCode} text-xl`}></i>
                </Link>
              ))}
            </div>
          )}

          {/* special button */}
          {detailQuery.data?.links && detailQuery.data.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 justify-center mt-6 via-violet-50">
              {detailQuery.data.links.map((link, index) => (
                <Link
                  href={link.url}
                  target="_blank"
                  className="flex px-6 py-4 rounded-3xl bg-white font-semibold gap-3 justify-center items-center transition-all duration-700 hover:scale-95"
                  style={{
                    background: link.customColor,
                    color: link.customColor && 'white',
                  }}
                  key={index}
                >
                  {link.iconCode && (
                    <i className={`${link.iconCode} text-xl`}></i>
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* summary info */}
          <div className="flex flex-col tablet:grid tablet:grid-cols-4 gap-5 mt-10">
            {/* total follower in social media */}
            <div className="flex flex-col items-start bg-emerald-300 p-5 rounded-4xl col-span-2 row-span-5 total-follower relative bg-[url('/images/pattern/circle.svg')] bg-right-top bg-no-repeat transition-all duration-7 00 hover:-translate-y-2">
              <i className="fi fi-rr-following text-5xl"></i>
              <h4 className="flex uppercase text-6xl font-bold mt-6">400</h4>
              <span className="flex text-lg font-semibold">
                Follower accros media
              </span>
              <p className="flex mt-4">
                Measured for facebook, instagram, twitter, linkedin, and
                dribbble.
              </p>

              <span className="flex mt-10">Last updated on May 2023</span>
            </div>

            {/* total subscriber in newsletter */}
            <div className="flex flex-col items-start bg-white p-5 rounded-4xl col-span-2 row-span-1 bg-[url('/images/pattern/poly.svg')] bg-right-top bg-no-repeat bg-cover transition-all duration-700 hover:-translate-y-2">
              <div className="flex justify-between items-center w-full">
                <h4 className="flex text-2xl font-semibold">200+</h4>
                <i className="fi fi-rr-envelope-dot text-2xl text-gray-500"></i>
              </div>
              <p className="flex mt-2">My monthly newsletter feed subscriber</p>
            </div>

            {/* contact to influencer */}
            <div className="flex flex-col items-start bg-red-200 p-5 rounded-4xl col-span-2 row-span-4 transition-all duration-700 hover:-translate-y-2">
              <div className="flex justify-between items-center w-full">
                <h4 className="flex text-lg font-semibold">
                  Need an influencer?
                </h4>
              </div>
              <p className="flex mt-2">
                I provider exclusive influencer and business model
              </p>

              <Link
                href="http://nyomansunima.com/contact"
                className="flex items-center gap-3 font-semibold mt-6"
                target="_blank"
              >
                <i className="fi fi-br-paper-plane"></i>
                Send me a message
              </Link>
            </div>

            {/*  Book any meetings */}
            <div className="flex flex-col bg-black p-6 rounded-[32px] col-span-4 row-span-2 text-white transition-all duration-700 hover:-translate-y-2">
              <div className="flex items-center gap-10">
                <div className="flex flex-col flex-1">
                  <h4 className="text-xl font-semibold leading-none">
                    Partner chat with me
                  </h4>
                  <span className="flex mt-4 text-slate-200">
                    if you have something important to discuss and want to
                    collaborate together, Please book my calendar to meet
                  </span>
                </div>
                <Link
                  href="https://calendly.com/nyomansunima/meetings"
                  target="_blank"
                  className="flex h-14 w-14 rounded-full border border-gray-700 justify-center items-center transition-all duration-300 hover:scale-95"
                >
                  <i className="fi fi-sr-calendar text-xl text-emerald-500"></i>
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <div className="flex gap-2">
                  <i className="fi fi-rr-clock text-xl"></i>
                  <span className="font-semibold">30 minutes</span>
                </div>

                <div className="flex gap-2">
                  <i className="fi fi-rr-video-camera-alt text-xl"></i>
                  <span className="font-semibold">Google meets</span>
                </div>
              </div>
            </div>
          </div>

          {/* newsletter form */}
          <div className="flex flex-col mt-10 bg-white p-5 rounded-3xl">
            <h4 className="text-xl font-semibold">Subscribe to newsletter</h4>
            <span className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              vitae numquam illo reprehenderit unde velit laboriosam facere
              consequatur ipsum dignissimos.
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
        </div>
      </main>
    </>
  )
}

const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['bio'], contentService.getDetailBio)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export { getServerSideProps }
export default BioPage
