import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { defaultDocumentNode } from './defaultDocumentNode';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { myTheme } from './theme';

export default defineConfig({
  basePath: '/studio',
  name: 'Blulytix-CMS',
  title: 'Blulytix-CMS-Content',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // studio: {
  //   components: {
  //     logo: Logo,
  //   },
  // },
  theme: myTheme,
});
