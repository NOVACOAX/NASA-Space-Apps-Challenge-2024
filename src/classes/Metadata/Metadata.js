import { MetaTag } from './MetaTag'

/**
 * The Metadata class represents the metadata of a web page,
 * including the title, character encoding, and meta tags.
 */
export class Metadata {
  /**
   * Creates an instance of Metadata.
   * @param {string} title
   * @param {string} charset
   * @param {MetaTag[]} metaTags
   */
  constructor(title, charset, metaTags = []) {
    this.title = title
    this.charset = charset
    this.metaTags = metaTags
  }

  /**
   * @type {string} The title of the web page.
   */
  title = undefined

  /**
   * @type {string} The charset of the web page.
   */
  charset = undefined

  /**
   * @type {MetaTag[]} An array of objects representing meta tags.
   */
  metaTags = undefined

  /**
   * Adds a metaTag to `this.metaTags`.
   * @param {MetaTag} metaTag
   * @throws {MetaTagError} If instance is not valid or missing `name` and `content` properties.
   */
  addMetaTag(metaTag) {
    if (metaTag.validateMetaTag().isValid) this.metaTags.push(metaTag)
  }

  /**
   * Change the title tag of the document head from instance
   */
  addTitleToHead() {
    document.title = this.title
  }

  /**
   * Checks if a `metadata` object is provided and if it is an instance of the
   * `Metadata` class, throwing an error message if not.
   * @static
   * @param {Metadata} metadata - The `metadata` parameter is expected to be an instance of the `Metadata` class.
   * @returns {{ isValid: boolean, error?: MetadataError}}
  //  * @throws {MetadataError} If instance is not valid or not provided.
   */
  static validateMetadata(metadata) {
    const status = { isValid: true }

    if (!metadata) {
      status.isValid = false
      status.error = new MetadataError('Metadata not provided.')
    } else if (!(metadata instanceof Metadata)) {
      status.isValid = false
      status.error = new MetadataError('Invalid metadata provided.')
    }

    return status
  }

  /**
   * Change the title tag of the document head
   * @static
   * @param {Metadata["title"]} title
   */
  static addTitleToHead(title) {
    document.title = title
  }
}

export class MetadataError extends Error {}
