// schemas/siteSettings.js
export default {
  name: 'blogSettings',
  title: 'Blog Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Featured Posts',
      name: 'featuredPosts',
      type: 'array',
      of: [
        {
          type: "reference", to: [{ type: "post" }]
        }
      ]
    },
    {
      title: 'Must Read Posts',
      name: 'mustReadPosts',
      type: 'array',
      of: [
        {
          type: "reference", to: [{ type: "post" }]
        }
      ]
    },
  ],
  preview: {
    select: {
      featuredPosts: 'featuredPosts',
    },
    prepare(selection) {
      return {
        title: "Blog Settings",
      }
    },
  },
}