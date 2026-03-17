// ./structure/index.ts

import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      // ...all other items
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            // ...all other ignored types
            "siteSettings",
          ].includes(item.getId()!)
      ),
    ]);