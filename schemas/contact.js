import React from "react"
import { AiOutlineAudit } from "react-icons/ai"

export default {
  title: "Contact",
  name: "contact",
  type: "document",
  icon: AiOutlineAudit,
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
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "name",
    },
  }
}