import { defineType } from "sanity";

export const property = defineType({
    name: "property",
    title: "Property",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Property Title",
            type: "string",
            description: "e.g., Beautiful Colonial Home",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "images",
            title: "Property Images",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required().min(1),
        },
        {
            name: "address",
            title: "Address",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "neighborhood",
            title: "Neighborhood",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().positive(),
        },
        {
            name: "bedrooms",
            title: "Bedrooms",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "bathrooms",
            title: "Bathrooms",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "squareFeet",
            title: "Square Feet",
            type: "number",
            validation: (Rule) => Rule.required().positive(),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
        },
        {
            name: "agentNote",
            title: "Agent's Personal Note",
            type: "text",
            description: "Share what you love about this home!",
            rows: 3,
        },
        {
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "For Sale", value: "for-sale" },
                    { title: "For Rent", value: "for-rent" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
            initialValue: "for-sale",
        },
        {
            name: "displayOnHomepage",
            title: "Display on Homepage",
            type: "boolean",
            description: "Toggle to show/hide this property on the main page",
            initialValue: true,
        },
        {
            name: "yearBuilt",
            title: "Year Built",
            type: "number",
        },
        {
            name: "lotSize",
            title: "Lot Size (acres)",
            type: "number",
        },
    ],
    preview: {
        select: {
            title: "title",
            address: "address",
            price: "price",
            media: "images.0",
            status: "status",
        },
        prepare(selection) {
            const { title, address, price, media, status } = selection;
            const formattedPrice = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            }).format(price);
            return {
                title: title,
                subtitle: `${formattedPrice} • ${address} • ${status}`,
                media: media,
            };
        },
    },
});
