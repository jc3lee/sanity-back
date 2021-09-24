import S from '@sanity/base/structure-builder'

export default [
  ...S.defaultInitialValueTemplateItems().filter(listItem => !["blogSettings"].includes(listItem.getId()))
]

// add this to sanity json

// ,
//     {
//       "name": "part:@sanity/base/new-document-structure",
//       "path": "./newDocStructure.js"
//     }  