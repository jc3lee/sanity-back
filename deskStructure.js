import S from '@sanity/desk-tool/structure-builder'
import React from "react"
import { RiHomeGearLine } from "react-icons/ri"

export default () =>
  S.list()
    .title('Base')
    .items(
      [
        S.listItem()
          .title("Blog Settings")
          .icon(RiHomeGearLine)
          .child(
            S.document()
              .schemaType("blogSettings")
              .documentId("blogSettings")
          ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !["blogSettings"].includes(listItem.getId()))
      ]
    )