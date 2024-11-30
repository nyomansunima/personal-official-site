import Link from 'next/link'
import * as React from 'react'

export function EndWordSection(): React.ReactElement {
  return (
    <section>
      <br />

      <h2>Last word to say, thanks</h2>

      <p>
        Through every success, collaboration, and challenge, these moments have
        not only defined my career but also shaped my perspective on growth,
        creativity, and resilience. They serve as a reminder that the most
        meaningful achievements often come from overcoming adversity and pushing
        beyond comfort zones.
      </p>

      <p>
        As I continue on this path, I look forward to creating new milestones,
        forging impactful connections, and embracing the next set of challenges
        with the same passion and drive. The journey is far from over, and I’m
        excited to see what’s next.
      </p>

      <p>
        Check my <Link href={'/works'}>works</Link>,{' '}
        <Link href={'/crafts'}>handmade</Link>,{' '}
        <Link href={'/journeys'}>journeys</Link> and{' '}
        <Link href={'/stories'}>stories</Link>. Then{' '}
        <Link href={'/contact'}>contact me</Link> if you want to collaborate and
        make something awesome together.
      </p>

      <p>Thanks for all of your support and attention.</p>
    </section>
  )
}
