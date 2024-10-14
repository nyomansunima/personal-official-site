import * as React from 'react'

export function ComingSoonSection(): React.ReactElement {
  return (
    <section className="flex flex-col pb-20 laptop:pb-56">
      <div className="flex justify-center items-center">
        <span className="text-foreground/60">More coming soon...</span>
      </div>
    </section>
  )
}
