import { defineConfig, Config } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'
import { setupNextSanity } from 'next-sanity-extra'

const sanityConfig = {
  name: 'default',
  title: 'Rod Kisten',

  basePath: '/studio',
  projectId: '8pb8mdet',
  dataset: 'production',

  apiVersion: '2022-11-15',

  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes
  }
}

export const config = setupNextSanity(sanityConfig)
export default config
// export default  defineConfig<Config>(sanityConfig)

export const {
  sanityClient,
  imageUrlBuilder,
  PortableText,
  sanityStaticProps,
  useSanityQuery
} = config
