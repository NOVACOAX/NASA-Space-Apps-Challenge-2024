/**
 * This MetaTag class represents a meta tag with name,
 * content, and http-equiv attributes.
 */
export class MetaTag {
  /**
   * Creates an instance of MetaTag.
   * @param {string} name
   * @param {string} content
   * @param {string} httpEquiv
   */
  constructor(name, content, httpEquiv = undefined) {
    this.name = name
    this.content = content
    this.httpEquiv = httpEquiv
  }

  /**
   * @type {string} The name attribute of the meta tag.
   */
  name = undefined

  /**
   * @type {string} The content attribute of the meta tag.
   */
  content = undefined

  /**
   * @type {string} The http-equiv attribute of the meta tag.
   */
  httpEquiv = undefined

  /**
   * Added onto newly created `<meta />` to track which tags should be
   * dynamically updated.
   * @static
   * @type {'data-meta-tag-controller'}
   * @private
   */
  static #htmlAttr = 'data-meta-tag-controller'

  get property() {
    return this.name
  }

  /**
   * Creates a meta tag element with specified attributes and returns it.
   * @throws {MetaTagError} If instance is not valid or missing `name` and `content` properties.
   */
  createMetaTagElement() {
    const metaTag = document.createElement('meta')
    const validation = this.validateMetaTag()

    if (validation.isValid) {
      metaTag.setAttribute('name', this.name)
      metaTag.setAttribute('content', this.content)
      metaTag.setAttribute('property', this.property)
      this.httpEquiv && metaTag.setAttribute('http-equiv', this.httpEquiv)
      metaTag.setAttribute(MetaTag.#htmlAttr, true)

      return metaTag
    } else {
      throw validation.error
    }
  }

  /**
   * Checks if a MetaTag instance is valid. Calls the `validateMetaTag()` function on
   * the `MetaTag` object with `this` as the argument.
   */
  validateMetaTag() {
    return MetaTag.validateMetaTag(this)
  }

  /**
   * Checks if a `metaTag` object is provided and if it is an instance of the
   * `MetaTag` class, throwing an error message if not.
   * @static
   * @param {MetaTag} metaTag - The `metaTag` parameter is expected to be an instance of the `MetaTag` class.
   * @returns {{ isValid: boolean, error?: MetaTagError }}
  //  * @throws {MetaTagError} If instance is not valid or missing `name` and `content` properties.
   */
  static validateMetaTag(metaTag) {
    const status = { isValid: true }

    if (!metaTag) {
      status.isValid = false
      status.error = new MetaTagError('metaTag not provided.')
    } else if (!(metaTag instanceof MetaTag)) {
      status.isValid = false
      status.error = new MetaTagError('Invalid metaTag provided.')
    } else if (!metaTag.name) {
      status.isValid = false
      status.error = new MetaTagError(
        'Name attribute is not defined on meta tag.'
      )
    } else if (!metaTag.content) {
      status.isValid = false
      status.error = new MetaTagError(
        'Content attribute is not defined on meta tag.'
      )
    }

    return status
  }

  /** 
   * Adds a new meta tag to the `<head>` section of the HTML document.
   */
  addMetaTagToHead() {
    // Remove stale meta tag that matches same name
    const staleMetaTag = document.querySelector(`meta[name=${this.name}]`)
    if (staleMetaTag) staleMetaTag.remove()

    // Add new meta tag to head
    const metaTagElement = this.createMetaTagElement()
    document.head.appendChild(metaTagElement)
  }

  /**
   * Changes the meta tags in the document head
   * @static
   * @param {MetaTag[]} metaTags - The metaTags parameter is an object that contains the meta tags for a specific
   * route.
   */
  static addMetaTagsToHead(metaTags) {
    // Remove stale meta tags from DOM
    /** @type {NodeListOf<HTMLMetaElement>} */
    const staleTags = document.head.querySelectorAll(
      `meta[${MetaTag.#htmlAttr}]`
    )
    staleTags.forEach((el) => el.remove())

    // Create meta elements from each metaTag and append them to the head
    metaTags.forEach((metaTag) => metaTag.addMetaTagToHead())
  }
}

export class MetaTagError extends Error {}
