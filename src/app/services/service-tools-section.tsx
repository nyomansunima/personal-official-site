'use client'

import gsap from 'gsap'
import * as React from 'react'

type StackItemProps = {
  image: string
}

type StackSeparatorProps = {
  label: string
  color: string
}

function StackItem({ image }: StackItemProps) {
  return (
    <span className="h-12 float-left inline-block mx-16">
      <img src={image} alt="Tools" className="w-full h-full" />
    </span>
  )
}

function StackSeparator({ label, color }: StackSeparatorProps) {
  return (
    <span
      className="px-8 py-4 rounded-full font-medium inline-block float-left"
      style={{ background: color }}
    >
      {label}
    </span>
  )
}

export default function ServiceToolsSection() {
  React.useEffect(function runAnimtion() {
    const ctx = gsap.context(() => {
      gsap.to('[data-animation-infinite-scroll-left]', {
        xPercent: -30,
        repeat: -1,
        duration: 4.0,
        ease: 'linear',
      })
      gsap.to('[data-animation-infinite-scroll-right]', {
        xPercent: 30,
        repeat: -1,
        duration: 4.0,
        ease: 'linear',
      })
    })

    return () => ctx.revert()
  }, [])
  return (
    <section className="flex flex-col bg-black text-neutral-100">
      <div className="flex flex-col container mx-auto px-5 laptop:px-20 py-28 laptop:py-64 gap-16">
        <h2
          className="text-5xl laptop:text-8xl !leading-none laptop:w-9/12"
          data-animation="text-char-slide-up"
        >
          Working with stable technology.
        </h2>
      </div>

      <div className="flex flex-col gap-16 overflow-hidden laptop:pb-64">
        <div
          className="inline-block whitespace-nowrap gap-16 min-w-max"
          data-animation-infinite-scroll-left
        >
          <StackItem image="/images/tools/node.png" />
          <StackItem image="/images/tools/react.png" />
          <StackItem image="/images/tools/js.png" />
          <StackItem image="/images/tools/sanity.png" />
          <StackItem image="/images/tools/vue.png" />
          <StackSeparator label="WEB" color="#2723FF" />
          <StackItem image="/images/tools/webflow.png" />
          <StackItem image="/images/tools/wix.png" />
          <StackItem image="/images/tools/framer.png" />
          <StackItem image="/images/tools/html.png" />
        </div>
        <div
          className="inline-block whitespace-nowrap gap-16 min-w-max"
          data-animation-infinite-scroll-right
        >
          <StackItem image="/images/tools/node.png" />
          <StackItem image="/images/tools/react.png" />
          <StackItem image="/images/tools/js.png" />
          <StackItem image="/images/tools/sanity.png" />
          <StackItem image="/images/tools/vue.png" />
          <StackSeparator label="MOBILE" color="#FF5FA1" />
          <StackItem image="/images/tools/webflow.png" />
          <StackItem image="/images/tools/wix.png" />
          <StackItem image="/images/tools/framer.png" />
          <StackItem image="/images/tools/html.png" />
        </div>
      </div>
    </section>
  )
}
