import React, { FunctionComponent } from 'react'
import Codepen from 'react-codepen-embed'
import { defineType, PreviewProps } from 'sanity'

/**
 * ## CodePenPreview
 *
 * preview the codepen url into a working pen
 *
 * @returns JSX.Element
 */
const CodePenPreview: FunctionComponent<PreviewProps> = (
  props
): JSX.Element => {
  // const { url } = value
  // if (!url || url == '') {
  //   return <div>Please add url for your codepen</div>
  // }
  // // split the url and use as another
  // // properties
  // const splittedUrl = (url as string).split('/')
  // const [, , , user, , hash] = splittedUrl
  // return <div>Hello world</div>
  // return <Codepen user={user} hash={hash} />
  // return <p>{JSON.stringify(props)}</p>
  return <p></p>
}

/**
 * # codepenSchema
 *
 * use to embed the codepen code
 * and display in the blog
 */
const codepenSchema = defineType({
  title: 'Embed Codepen',
  name: 'codepen',
  type: 'object',
  fields: [
    {
      title: 'URL',
      description: '🧑🏿‍💻 Your codepen embed url',
      name: 'url',
      type: 'url'
    }
  ],
  preview: {
    select: {
      url: 'url'
    }
  },
  components: {
    // preview: CodePenPreview
  }
})

export default codepenSchema
