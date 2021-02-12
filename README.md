AppJusto website

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

You will need to create a file called 'next.config.js' with some configurations and your firebase credentials:

```bash
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  env: {
    FIREBASE_API_KEY: "",
    FIREBASE_AUTH_DOMAIN: "",
    FIREBASE_DATABASE_URL: "",
    FIREBASE_PROJECT_ID: "",
    FIREBASE_STORAGE_BUCKET: "",
    FIREBASE_MESSAGING_SENDER_ID: "",
    FIREBASE_APP_ID: "",
    FIREBASE_MEASUREMENT_ID: "",
    GOOGLE_PLACES_API_KEY: "",
  },
  experimental: {
    sprFlushToDisk: false,
  },
});
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

