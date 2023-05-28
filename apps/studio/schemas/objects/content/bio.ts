import { Activity } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Bio',
  name: 'bioContent',
  type: 'object',
  icon: Activity,
  fields: [
    defineField({
      title: 'Avatar',
      name: 'avatar',
      type: 'image'
    }),
    defineField({
      title: 'Short Description',
      name: 'desc',
      type: 'text'
    }),
    defineField({
      title: 'Stats',
      name: 'stats',
      type: 'object',
      fields: [
        defineField({
          title: 'Total Follower',
          name: 'totalFollower',
          type: 'number'
        }),
        defineField({
          title: 'Total Subscriber',
          name: 'totalSubscriber',
          type: 'number'
        })
      ]
    }),
    defineField({
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          title: 'Social',
          type: 'object',
          fields: [
            defineField({
              title: 'Label',
              name: 'label',
              type: 'string'
            }),
            defineField({
              title: 'URL',
              name: 'url',
              type: 'url'
            }),
            defineField({
              title: 'Icon Code',
              name: 'iconCode',
              type: 'string'
            })
          ]
        }
      ]
    }),
    defineField({
      title: 'Special Buttons',
      name: 'links',
      type: 'array',
      of: [
        {
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              title: 'URL',
              name: 'url',
              type: 'url'
            }),
            defineField({
              title: 'Label',
              name: 'label',
              type: 'string'
            }),
            defineField({
              title: 'Icon Code',
              name: 'iconCode',
              type: 'string'
            }),
            defineField({
              title: 'Custom Background Color',
              name: 'customColor',
              type: 'color'
            })
          ]
        }
      ]
    })
  ]
})
