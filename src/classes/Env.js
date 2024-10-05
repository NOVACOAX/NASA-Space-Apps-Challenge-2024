/**
 * Imports environment variables
 *
 * @export
 * @class Env
 */
export class Env {
  /**
   * Original `import.meta.env` object
   */
  env = import.meta.env

  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_API_KEY = Env.env.VITE_FIREBASE_API_KEY
  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_AUTH_DOMAIN = Env.env.VITE_FIREBASE_AUTH_DOMAIN
  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_PROJECT_ID = Env.env.VITE_FIREBASE_PROJECT_ID
  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_STORAGE_BUCKET = Env.env.VITE_FIREBASE_STORAGE_BUCKET
  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_MESSAGING_SENDER_ID = Env.env.VITE_FIREBASE_MESSAGING_SENDER_ID
  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_APP_ID = Env.env.VITE_FIREBASE_APP_ID
  /**
   * @type {string | undefined}
   */
  VITE_FIREBASE_MEASUREMENT_ID = Env.env.VITE_FIREBASE_MEASUREMENT_ID
  /**
   * @type {string | undefined}
   */
  VITE_FIRESTORE_EMULATOR_HOST =
    Env.env.VITE_FIRESTORE_EMULATOR_HOST ?? '127.0.0.1'
  /**
   * @type {boolean}
   */
  VITE_FIREBASE_EMULATORS_ENABLED =
    Env.env.VITE_FIREBASE_EMULATORS_ENABLED === 'true'

  get VITE_FIRESTORE_EMULATOR_PORT() {
    const portFromImportEnv = Env.env.VITE_FIRESTORE_EMULATOR_PORT
    if (portFromImportEnv) return parseInt(portFromImportEnv)
    return 8000
  }
}

const env = new Env()
export default env
