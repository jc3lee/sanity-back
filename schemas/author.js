import Prepend from "../components/Prepend";
import React from "react"
import { AiOutlineUser } from "react-icons/ai"

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: AiOutlineUser,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialAccounts',
      title: 'Social Accounts',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'linkedinId',
          title: 'Linkedin URL',
          type: 'string',
          options: {
            prepend: "https://www.linkedin.com/",
          },
          inputComponent: Prepend,
        },
        {
          name: 'twitterId',
          title: 'Twitter URL',
          type: 'string',
          options: {
            prepend: "https://www.twitter.com/",
          },
          inputComponent: Prepend,
        },
        {
          name: 'instagramId',
          title: 'Instagram URL',
          type: 'string',
          options: {
            prepend: "https://www.instagram.com/",
          },
          inputComponent: Prepend,
        },
        {
          name: 'facebookId',
          title: 'Facebook URL',
          type: 'string',
          options: {
            prepend: "https://www.facebook.com/",
          },
          inputComponent: Prepend,
        },
      ]
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'websiteLink',
      title: 'Link to website',
      type: 'url',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: "websiteLink",
      media: 'image',
    },
  },
}
