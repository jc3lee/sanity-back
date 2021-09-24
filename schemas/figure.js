export default {
  title: "Image",
  name: "figure",
  type: "object",
  initialValue: {
    size: 'Large',
  },
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'Large' },
          { title: 'Medium', value: 'Medium' },
          { title: 'Small', value: 'Small' },
        ], // <-- predefined values
        // layout: 'radio', // <-- defaults to 'dropdown'
      }
    },
    {
      title: "Description for SEO and accessibility",
      name: "alt",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "alt",
      size: "size",
      media: "image",
    },
    prepare(selection) {
      return {
        title: `${selection.title} (${selection.size})`,
        media: selection.media,
      }
    },
  }
}