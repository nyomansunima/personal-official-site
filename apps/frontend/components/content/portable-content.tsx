import { PortableText } from '@portabletext/react'
import { FunctionComponent } from 'react'
import Image from 'next/image'
import urlBuilder from '@sanity/image-url'
import sanityClient from '@lib/connection/sanity-connection'
import { Highlight, themes } from 'prism-react-renderer'

interface ContentPortableProps {
  content: any
  className?: string
}

interface ImageComponentProps {
  value: any
}

interface CodeComponentProps {
  value: {
    code?: any
    language: string
    filename?: string
  }
}

/**
 * # CodeComponent
 *
 * Code highliter component
 *
 * @returns JSX.Element
 */
const CodeComponent: FunctionComponent<CodeComponentProps> = ({
  value,
}): JSX.Element => {
  return (
    <div className="flex flex-col w-full overflow-hidden rounded-2xl mt-10">
      <div className="flex items-center bg-[#1b1f25] py-2 px-3 relative">
        {/* close indicator */}
        <div className="flex items-center gap-1 h-10">
          <span className="h-3 w-3 rounded-full flex bg-[#ff5f57]"></span>
          <span className="h-3 w-3 rounded-full flex bg-[#ffbf57]"></span>
          <span className="h-3 w-3 rounded-full flex bg-[#36dc68]"></span>
        </div>

        {/* filename */}
        <div className="flex absolute inset-y-0 top-3 left-24 rounded-tl-2xl rounded-tr-2xl justify-center items-center bg-[#0d1116] font-medium text-gray-100 text-base px-10 py-2">
          {value.filename}
        </div>

        <div className="flex flex-1"></div>

        {/* copy code button */}
        <button className="flex justify-center items-center h-8 w-8 rounded-lg bg-[#0d1116] text-white text-sm">
          <i className="fi fi-rr-copy"></i>
        </button>
      </div>
      <div className="bg-[#0d1116] flex p-3 min-h-[300px]">
        <Highlight
          language={value.language}
          code={value.code}
          theme={themes.dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} !bg-transparent -mt-2`} style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                return (
                  <div
                    key={i}
                    {...lineProps}
                    className="flex items-center gap-4"
                  >
                    <span className="text-gray-500">{i + 1}</span>
                    <div>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

/**
 * # ImageComponent
 *
 * the component
 * to showing the image in portable content
 *
 * @returns JSX.Element
 */
const ImageComponent: FunctionComponent<ImageComponentProps> = ({
  value,
}): JSX.Element => {
  return (
    <picture className="flex w-full relative h-[500px] rounded-3xl overflow-hidden my-6">
      <Image
        src={urlBuilder(sanityClient).image(value).url()}
        fill
        sizes="auto"
        alt={value.alt || ''}
        className="!m-0"
      />
    </picture>
  )
}

/**
 * # ContentPortable
 *
 * the portable content
 * that parse the content form sanity
 * @returns JSX.Element
 */
const ContentPortable: FunctionComponent<ContentPortableProps> = ({
  content,
  className,
}): JSX.Element => {
  // define the specific components
  const Components = {
    types: {
      image: ImageComponent,
      code: CodeComponent,
    },
  }

  return (
    <div
      className={`${'prose text-xl font-medium prose-headings:mt-20 prose-headings:font-semibold'} ${className}`}
    >
      <PortableText value={content} components={Components} />
    </div>
  )
}

export default ContentPortable
