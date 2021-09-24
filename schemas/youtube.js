import React from "react"
import {AiOutlineYoutube} from "react-icons/ai"
import getYoutubeId from "get-youtube-id"

const Youtube = ({ value }) => {
  if (!value || !value.url) return null
  const id = getYoutubeId(value.url)
  const src = `https://www.youtube.com/embed/${id}`
  return (
    <iframe style={{ margin: "0 auto", }} width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default {
  title: "Youtube",
  name: "youtube",
  type: "object",
  fields: [
    {
      title: "Youtube Video URL",
      name: "url",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Youtube,
  }
}