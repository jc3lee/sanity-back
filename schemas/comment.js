import React from "react"
import { BiCommentDetail } from "react-icons/bi"

export default {
  title: "Comment",
  name: "comment",
  type: "document",
  icon: BiCommentDetail,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      readOnly: true,
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      readOnly: true,
    },
    {
      title: "Text",
      name: "text",
      type: "text",
      readOnly: true,
    },
    {
      title: "Post",
      name: "post",
      type: "reference",
      readOnly: true,
      to: [
        {
          type: "post",
        },
      ]
    },
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "post.title",
    },
  }
}