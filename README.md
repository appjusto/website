## AppJusto website

## Getting Started

At your selected folder, clone the repository

```bash
git clone https://github.com/appjusto/website.git
```

Go to project's folder and install all dependecies

```bash
cd <project_folder>
# then
yarn
# or
npm install
```

You will need to create a file called 'next.config.js' with some configurations and your firebase credentials for hosting/functions and firebase/storage source (EXTERNAL_) projects:

PS: If you are using just one project, you don't need to create the variables prefixed with EXTERNAL_ and you need to adjust the settings in ./firebaseApp.ts.

```bash
const withImages = require('next-images')

module.exports = withImages({
  distDir: "./nextjs",
  esModule: true,
  env: {
    FIREBASE_API_KEY: "",
    FIREBASE_AUTH_DOMAIN: "",
    FIREBASE_PROJECT_ID: "",
    FIREBASE_STORAGE_BUCKET: "",
    FIREBASE_MESSAGING_SENDER_ID: "",
    FIREBASE_APP_ID: "",
    FIREBASE_MEASUREMENT_ID: "",
    EXTERNAL_FIREBASE_API_KEY: "",
    EXTERNAL_FIREBASE_AUTH_DOMAIN: "",
    EXTERNAL_FIREBASE_PROJECT_ID: "",
    EXTERNAL_FIREBASE_STORAGE_BUCKET: "",
    EXTERNAL_FIREBASE_MESSAGING_SENDER_ID: "",
    EXTERNAL_FIREBASE_APP_ID: "",
    EXTERNAL_FIREBASE_MEASUREMENT_ID: "",
  },
  experimental: {
    sprFlushToDisk: false,
  },
});
```

Log in with firebase and edit the settings in .firebaserc:

```bash
{
  "projects": {
    "default": "your-app-name"
  }
}
```

Run the project

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live in

[https://appjusto.com.br/](https://appjusto.com.br/)

