/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react"
import { IoImageOutline, } from "react-icons/io5"
import { ImEarth, ImLink } from "react-icons/im"
import { AiOutlineYoutube, AiOutlineCodepen,} from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"
import { IoLogoTiktok } from "react-icons/io5"
import { ImTwitter } from "react-icons/im"

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            blockEditor: {
              icon: ImLink,
            },
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [
                  {
                    type: "author",
                  },
                  {
                    type: "category",
                  },
                  {
                    type: "post",
                  },
                ]
              },
            ],
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            blockEditor: {
              icon: ImEarth,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'code',
    },
    {
      type: 'codepen',
      icon: AiOutlineCodepen,
    },
    {
      type: 'figure',
      icon: IoImageOutline,
    },
    {
      type: 'instagram',
      icon: RiInstagramFill,
    },
    {
      type: 'tiktok',
      icon: IoLogoTiktok,
    },
    {
      type: 'twitter',
      icon: ImTwitter,
    },
    {
      type: 'youtube',
      icon: AiOutlineYoutube,
    },
  ],
}
