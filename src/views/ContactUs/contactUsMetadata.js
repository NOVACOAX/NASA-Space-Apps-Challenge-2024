import { MetaTag, Metadata } from '@/classes/Metadata'

const metadata = new Metadata('Contact Us | Her Climate')

metadata.addMetaTag(
  new MetaTag('description', 'Find out more about how you can reach us.')
)

export default metadata
