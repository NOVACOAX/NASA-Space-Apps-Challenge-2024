# This Is Me Website

The following README contains setup instructions for this particular project. It is going to change throughout the development lifecycle of this project. If you're looking for Vite's setup README.md (which has been renamed), [click here](./README.VITE.md).

This project contains all the source code for the This Is Me Website. After you clone this repo, you can install dependencies using NPM:

```bash
npm install
```

## Environment Variables

Once all dependencies are installed, you need to create environment variables. We will need separate environment variables for development and production stages. Vite, the build tool used in this project, allows us to do this in separate files using modes. You can learn more about how Vite handles environment variables and modes in the [official documentation](https://vitejs.dev/guide/env-and-mode.html).

### `.env` Files

For this project, we create three `.env.[mode]` files. In order to allow git to ignore our environment variables, we can append `*.local` to each `.env.[mode]` file:

```
.env.local
.env.development.local
.env.production.local
```

Inside the `.env.*` files, we can define our environment variables like this:

```sh
# These are just examples.
VITE_FIREBASE_API_KEY="this is a dummy api key"
```

During development when running `npm run dev`, Vite will use the all environment variables defined in `.env.local` and `.env.development.local`. If there are duplicate variables in both, the variables defined in `.env.development.local` will override the ones defined in `.env.local`.

When you run `npm run build`, Vite will bundle the project using the variables defined in `.env.local` and `.env.production.local`. This is useful because it allows us to define the exact same variables while using different values in different environments.

A great example of this is when using Firebase's Local Emulator Suite. We can define an environment variable to check if Firebase should connect to the Firestore emulator:

```sh
# .env.development.local
VITE_FIREBASE_EMULATOR_ENABLED=true

# .env.production.local
VITE_FIREBASE_EMULATOR_ENABLED=false
```

Then, in your code, you can run some conditional logic to connect to the Firestore emulator if the option is enabled:

```js
// db.js
import firebaseApp from './firebase.js';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const EMULATOR_ENABLED = import.meta.env.VITE_FIREBASE_EMULATOR_ENABLED === 'true';
if (EMULATOR_ENABLED) connectFirestoreEmulator(db, '127.0.0.1', 8080);
```

If you want an env variable to have the same value in both production and development, you can simply define it in `.env.local` and exclude it from the other two modes.

IMPORTANT: Only variables that begin with `VITE_` will be rendered in the client side code during build-time. Since we will need to access all the Firebase resources on the client side in our Vue application, we have to prepend all the variables with `VITE_` for our application to get the values.

### Using Environment Variables

In order for us to use our defined environment variables in our code, we need to import them using the `import.meta.env` object:

```js
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
```

<!-- ### Typescript Support

When using `import.meta.env`, Typescript already has some predefined environment variables. However, we won't get any type safety or IntelliSense for our custom environment variables. In order to achieve this, this project has a `env.d.ts` declaration file in the `./src/` directory. When you add new environment variables, you can define their types in this declaration file.

```ts
// ./src/env.d.ts

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  // add more env variables here...
}
```

You can learn more about custom environment variables types in [Vite's official documentation](https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript). You can also learn more about declaration modules from [Typescript's official documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html). -->

### Typescript Support

Since this project is initialized using JavaScript, most of the code will not be written in Typescript. However, there is a `typings` directory in the `src` folder with type declarations for some more global items, like environment variables. You can utilize these types in your code using JSDoc like this:

```js
// The following JSDoc comment will add additional types for the environment variables in this module to aid with Intellisense. 
/** @type {import("../typings/env").ImportMetaEnv} */

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
```

Note: Using JSDoc is entirely optional. The code will run just fine without it. JSDocs are only useful to let you know what properties and methods are available in every module, making development faster and easier.

### Required Env Variables

Here is a list of all the current required environment variables. When you create a new environment variable, please add it to this table and make a pull request.

| Env Variable                      | Type              |
| --------------------------------- | ----------------- |
| VITE_FIREBASE_API_KEY             | string            |
| VITE_FIREBASE_AUTH_DOMAIN         | string            |
| VITE_FIREBASE_PROJECT_ID          | string            |
| VITE_FIREBASE_STORAGE_BUCKET      | string            |
| VITE_FIREBASE_MESSAGING_SENDER_ID | string            |
| VITE_FIREBASE_APP_ID              | string            |
| VITE_FIREBASE_MEASUREMENT_ID      | string            |
| VITE_FIREBASE_EMULATORS_ENABLED   | "true" \| "false"  |
| VITE_FIRESTORE_EMULATOR_HOST      | string            |
| VITE_FIRESTORE_EMULATOR_PORT      | string            |


## Project Contributors
- Hugh Hershell - [Github](https://github.com/NOVACOAX) | [Website](https://novacoax.github.io/magpie/)
- Victor Maina - [Github](https://github.com/thevictormaina) | [Website](https://victormaina.com)