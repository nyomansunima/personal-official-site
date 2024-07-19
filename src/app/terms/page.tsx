import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import Link from 'next/link'
import ArticleContent from '~/components/common/content'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Read the terms of use for this site',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Terms of use',
    description: 'Read the terms of use for this site',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Terms of use',
    description: 'Read the terms of use for this site',
  },
}

export default function Privacy() {
  return (
    <div className="container mx-auto py-40">
      <div className="flex justify-center w-7/12 mx-auto">
        <ArticleContent>
          <h2>Terms of conditions</h2>
          <p>
            These Terms of Use govern your use of our website, located at 
            <Link href={'https://nyomansunima.one'}>
              https://nyomansunima.one
            </Link>{' '}
            Please read these terms carefully before accessing or using our
            website.
          </p>

          <h3>Acceptance of Terms</h3>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms of Use and all applicable laws and regulations. If you do not
            agree to these terms, you may not access or use our website.
          </p>

          <h3>Intellectual Property</h3>
          <p>
            All content on our website, including but not limited to text,
            graphics, logos, images, and software, is the property of Nyoman
            Sunima and is protected by intellectual property laws. You may not
            use, reproduce, distribute, or modify any content from our website
            without prior written permission from us.
          </p>

          <h3>User Conduct</h3>
          <p>
            When using our website, you agree to abide by the following
            guidelines:
          </p>
          <ul>
            <li>
              Do not engage in any unlawful, harmful, or abusive behavior.
            </li>
            <li>
              Do not post or transmit any content that is defamatory, obscene,
              or infringes upon the rights of others.
            </li>
            <li>
              Do not attempt to gain unauthorized access to our website or
              interfere with its functionality.
            </li>
            <li>
              Do not use our website for commercial purposes without our prior
              written consent.
            </li>
          </ul>

          <h3>Third-Party Websites and Content</h3>
          <p>
            Our website may contain links to third-party websites or display
            content from third parties. We do not endorse or control these
            websites or content, and we are not responsible for any damages or
            losses incurred as a result of your use of or reliance on them.
          </p>

          <h3>Disclaimer of Warranties</h3>
          <p>
            Our website is provided on an "as is" and "as available" basis,
            without any warranties of any kind, whether express or implied. We
            do not guarantee that our website will be error-free, secure, or
            uninterrupted. Your use of our website is at your own risk.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            In no event shall{' '}
            <Link href={'https://nyomansunima.com'}>
              https://nyomansunima.com
            </Link>
             or its affiliates be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising out of or in connection
            with your use of our website. This includes, but is not limited to,
            any damages for loss of profits, data, or other intangible losses,
            even if we have been advised of the possibility of such damages.
          </p>

          <h3>Privacy Policy</h3>
          <p>
            By using our website, you agree to the terms of our Privacy Policy,
            which describes how we collect, use, and disclose your personal
            information. Our Privacy Policy is incorporated into these Terms of
            Use by reference.
          </p>

          <h3>Changes to the Terms of Use</h3>
          <p>
            We reserve the right to modify or update these Terms of Use at any
            time without prior notice. Any changes will be effective immediately
            upon posting on our website. Your continued use of our website after
            any modifications to these terms constitutes your acceptance of the
            updated terms.
          </p>

          <h3>Governing Law and Jurisdiction</h3>
          <p>
            These Terms of Use shall be governed by and construed in accordance
            with the laws of Bali, Indonesia. Any dispute arising out of or in
            connection with these terms shall be subject to the exclusive
            jurisdiction of the courts located in Bali.
          </p>

          <h3>Contact</h3>
          <p>
            If you have any questions or concerns regarding these Terms of Use,
            please <Link href={'/contact'}>contact us</Link>.
          </p>
        </ArticleContent>
      </div>
    </div>
  )
}
