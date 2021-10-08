import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import ItemId from "../components/ItemId";
import { v4 as uuidv4 } from 'uuid';
const initialItemId = uuidv4()

export default {
  title: "Item",
  name: "item",
  type: "document",
  icon: AiOutlineShoppingCart,
  initialValue: () => ({
    itemId: initialItemId,
  }),
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: 'itemId',
      title: 'Item Id',
      type: 'string',
      inputComponent: ItemId,
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Pricing",
      name: "pricing",
      type: "array",
      of: [
        {
          title: "Price",
          name: "priceObject",
          type: "object",
          fields: [
            {
              title: "Stripe Price Id",
              name: "priceId",
              type: "string",
            },
            {
              title: "Price",
              name: "price",
              type: "number",
            },
            {
              title: "Currency",
              name: "currency",
              type: "string",
            },
          ],
          preview: {
            select: {
              price: "price",
              currency: "currency",
            },
            prepare(selection) {
              const { price, currency, } = selection
              const units = Math.trunc(price / 100)
              const cents = price % 100
              const centsString = cents || "00"
              return {
                title: `${currency} ${units},${centsString}`,
              }
            },
          }
        }
      ]
    },
  ],
  preview: {
    select: {
      title: "title",
      pricing0: "pricing.0",
      image: "image",
    },
    prepare(selection) {
      const { image, title, pricing0, } = selection
      if (!pricing0) {
        return {
          title,
          media: image,
        }
      }
      const { price, currency, } = pricing0
      const units = Math.trunc(price / 100)
      const cents = price % 100
      const centsString = cents || "00"
      return {
        title,
        subtitle: `${currency} ${units},${centsString}`,
        media: image,
      }
    },
  }
}