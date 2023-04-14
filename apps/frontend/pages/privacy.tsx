import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/privacy.module.scss'
import { useEffect, useRef } from 'react'
import useCursor from '@lib/hooks/use-cursor'
import { gsap } from 'gsap'

/**
 * # PrivacyPage
 *
 * the privacy pages
 *
 * @returns JSX.Element
 */
const PrivacyPage: NextPageWithLayout = (): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0.7,
          defaults: {
            duration: 1.7,
            ease: 'expo',
          },
        })
        .from('h1', {
          y: 80,
          opacity: 0,
        })
        .from('main div', {
          y: 40,
          opacity: 0,
          stagger: 0.3,
        })
    }, mainRef)
    cursor.reload()

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Privacy Policy - Nyoman Sunima</title>
        <meta name="description" content="Please read the privacy policy" />
      </Head>

      <main ref={mainRef} className={styles.main}>
        <article>
          <h1 data-cursor-exclusion data-cursor-size="200">
            Privacy Policy
          </h1>
          <div>
            <p>
              Effective date: April 2, 2023 I operates the
              https://nyomansunima.com/ Website (the "Service"). This page
              informs you of policies regarding the collection, use, and
              disclosure of personal data when you use Service and the choices
              you have associated with that data. I use your data to provide and
              improve the Service. By using the Service, you agree to the
              collection and use of information in accordance with this policy.
              Unless otherwise defined in this Privacy Policy, terms used in
              this Privacy Policy have the same meanings as in Terms and
              Conditions, accessible from https://nyomansunima.com/
            </p>
          </div>
          <div>
            <h3>Information Collection And Use</h3>
            <p>
              I collect several different types of information for various
              purposes to provide and improve Service to you.
            </p>
          </div>
          <div>
            <h3>Types of Data Collected</h3>
          </div>
          <div>
            <h4>Personal Data</h4>
            <p>
              While using Service, I may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to:
            </p>

            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Cookies and Usage Data</li>
            </ul>
          </div>
          <div>
            <h4>Usage Data</h4>
            <p>
              I may also collect information how the Service is accessed and
              used ("Usage Data"). This Usage Data may include information such
              as your computer's Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of Service that you
              visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers and other diagnostic data.
            </p>
          </div>
          <div>
            <h4>Tracking & Cookies Data</h4>
            <p>
              I use cookies and similar tracking technologies to track the
              activity on Service and hold certain information.
            </p>
            <p>
              Cookies are files with small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a Ibsite and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. HoIver, if you do not accept cookies,
              you may not be able to use some portions of Service.
            </p>
            <p>Examples of Cookies I use:</p>

            <ul>
              <li>
                Session Cookies. I use Session Cookies to operate Service.
              </li>
              <li>
                Preference Cookies. I use Preference Cookies to remember your
                preferences and various settings.
              </li>
              <li>
                Security Cookies. I use Security Cookies for security purposes.
              </li>
            </ul>
          </div>
          <div>
            <h3>Use of Data</h3>
            <p>Me uses the collected data for various purposes:</p>

            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to Service</li>
              <li>
                To allow you to participate in interactive features of Service
                when you choose to do so
              </li>
              <li>To provide customer care and support</li>
              <li>
                To provide analysis or valuable information so that I can
                improve the Service
              </li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>
          <div>
            <h3>Transfer Of Data</h3>
            <p>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ than those from your jurisdiction.
            </p>
            <p>
              If you are located outside United States and choose to provide
              information to us, please note that I transfer the data, including
              Personal Data, to United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy folloId by your submission of
              such information represents your agreement to that transfer.
            </p>
            <p>
              Me will take all steps reasonably necessary to ensure that your
              data is treated securely and in accordance with this Privacy
              Policy and no transfer of your Personal Data will take place to an
              organization or a country unless there are adequate controls in
              place including the security of your data and other personal
              information.
            </p>
          </div>
          <div>
            <h3>Disclosure Of Data</h3>
            <p>
              Me may disclose your Personal Data in the good faith belief that
              such action is necessary to:
            </p>

            <ul>
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Me</li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                To protect the personal safety of users of the Service or the
                public
              </li>
              <li>To protect against legal liability</li>
            </ul>
          </div>
          <div>
            <h3>Security Of Data</h3>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While I strive to use commercially
              acceptable means to protect your Personal Data, I cannot guarantee
              its absolute security.
            </p>
          </div>
          <div>
            <h3>Service Providers</h3>
            <p>
              I may employ third party companies and individuals to facilitate
              Service ("Service Providers"), to provide the Service on behalf,
              to perform Service-related services or to assist us in analyzing
              how Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to
              perform these tasks on behalf and are obligated not to disclose or
              use it for any other purpose.
            </p>
          </div>
          <div>
            <h4>Analytics</h4>
            <p>
              I may use third-party Service Providers to monitor and analyze the
              use of Service.
            </p>
          </div>
          <div>
            <h4>Google Analytics</h4>
            <p>
              Google Analytics is a Ib analytics service offered by Google that
              tracks and reports Ibsite traffic. Google uses the data collected
              to track and monitor the use of Service. This data is shared with
              other Google services. Google may use the collected data to
              contextualize and personalize the ads of its own advertising
              network.
            </p>
            <p>
              You can opt-out of having made your activity on the Service
              available to Google Analytics by installing the Google Analytics
              opt-out browser add-on. The add-on prevents the Google Analytics
              JavaScript (ga.js, analytics.js, and dc.js) from sharing
              information with Google Analytics about visits activity.
            </p>
            <p>
              For more information on the privacy practices of Google, please
              visit the Google Privacy & Terms Ib page:
            </p>
            <a href="https://policies.google.com/privacy?hl=en">
              https://policies.google.com/privacy?hl=en
            </a>
          </div>
          <div>
            <h3>Links To Other Sites</h3>
            <p>
              Service may contain links to other sites that are not operated by
              us. If you click on a third party link, you will be directed to
              that third party's site. I strongly advise you to review the
              Privacy Policy of every site you visit. I have no control over and
              assume no responsibility for the content, privacy policies or
              practices of any third party sites or services.
            </p>
          </div>
          <div>
            <h3>Children's Privacy</h3>
            <p>
              Service does not address anyone under the age of 18 ("Children").
              I do not knowingly collect personally identifiable information
              from anyone under the age of 18. If you are a parent or guardian
              and you are aware that your Children has provided us with Personal
              Data, please contact us. If I become aware that I have collected
              Personal Data from children without verification of parental
              consent, I take steps to remove that information from servers.
            </p>
          </div>
          <div>
            <h3>Changes To This Privacy Policy</h3>
            <p>
              I may update Privacy Policy from time to time. I will notify you
              of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              I will let you know via email and/or a prominent notice on
              Service, prior to the change becoming effective and update the
              "effective date" at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email:{' '}
              <a href="mailto:nyomansunima@gmail.com">nyomansunima@gmail.com</a>
            </p>
          </div>
        </article>
      </main>
    </>
  )
}

PrivacyPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default PrivacyPage
