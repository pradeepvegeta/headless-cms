import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const pageType = defineType({
    name: "page",
    title: "Page",
    type: "document",
    icon: DocumentIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title,
            };
        },
    },
});
