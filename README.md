## AppJusto website - Getting Started

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

This application uses 4 different firebase projects and configures 3 development environments.For this, two files ('.env-cmdrc.json' and 'next.config.js') must be created to configure and use current and external firebase project for dev, staging and live environments:

##### .env-cmdrc.json
```bash
{
  "current": {
    "FIREBASE_API_KEY": "",
    "FIREBASE_AUTH_DOMAIN": "",
    "FIREBASE_PROJECT_ID": "",
    "FIREBASE_STORAGE_BUCKET": "",
    "FIREBASE_MESSAGING_SENDER_ID": "",
    "FIREBASE_APP_ID": "",
    "FIREBASE_MEASUREMENT_ID": ""
  },
  "dev": {
    "EXTERNAL_FIREBASE_API_KEY": "",
    "EXTERNAL_FIREBASE_AUTH_DOMAIN": "",
    "EXTERNAL_FIREBASE_PROJECT_ID": "",
    "FIREBASE_STORAGE_BUCKET": "",
    "EXTERNAL_FIREBASE_MESSAGING_SENDER_ID": "",
    "EXTERNAL_FIREBASE_APP_ID": "",
    "EXTERNAL_FIREBASE_MEASUREMENT_ID": ""
  },
  "staging": {
    "EXTERNAL_FIREBASE_API_KEY": "",
    "EXTERNAL_FIREBASE_AUTH_DOMAIN": "",
    "EXTERNAL_FIREBASE_PROJECT_ID": "",
    "FIREBASE_STORAGE_BUCKET": "",
    "EXTERNAL_FIREBASE_MESSAGING_SENDER_ID": "",
    "EXTERNAL_FIREBASE_APP_ID": "",
    "EXTERNAL_FIREBASE_MEASUREMENT_ID": ""
  },
  "live": {
    "EXTERNAL_FIREBASE_API_KEY": "",
    "EXTERNAL_FIREBASE_AUTH_DOMAIN": "",
    "EXTERNAL_FIREBASE_PROJECT_ID": "",
    "FIREBASE_STORAGE_BUCKET": "",
    "EXTERNAL_FIREBASE_MESSAGING_SENDER_ID": "",
    "EXTERNAL_FIREBASE_APP_ID": "",
    "EXTERNAL_FIREBASE_MEASUREMENT_ID": ""
  }
}
```

##### next.config.js
```bash
const withImages = require('next-images')

module.exports = withImages({
  distDir: "./nextjs",
  esModule: true,
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    EXTERNAL_FIREBASE_API_KEY: process.env.EXTERNAL_FIREBASE_API_KEY,
    EXTERNAL_FIREBASE_AUTH_DOMAIN: process.env.EXTERNAL_FIREBASE_AUTH_DOMAIN,
    EXTERNAL_FIREBASE_PROJECT_ID: process.env.EXTERNAL_FIREBASE_PROJECT_ID,
    EXTERNAL_FIREBASE_MESSAGING_SENDER_ID: process.env.EXTERNAL_FIREBASE_MESSAGING_SENDER_ID,
    EXTERNAL_FIREBASE_APP_ID: process.env.EXTERNAL_FIREBASE_APP_ID,
    EXTERNAL_FIREBASE_MEASUREMENT_ID: process.env.EXTERNAL_FIREBASE_MEASUREMENT_ID,
  },
  experimental: {
    sprFlushToDisk: false,
  },
});
```

Run the project locally

```bash
yarn local:dev
# or
npm run local:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live in

[https://appjusto.com.br/](https://appjusto.com.br/)

