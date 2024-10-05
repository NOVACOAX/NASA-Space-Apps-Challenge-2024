import { MetaTag, Metadata } from '../../classes/Metadata'

const homeMetadata = new Metadata('Her climate')

homeMetadata.addMetaTag(
  new MetaTag(
    'description',
    'The sun touches everything.'
  )
)

export default homeMetadata
