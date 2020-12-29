const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  env: {
    FIREBASE_API_KEY: "AIzaSyBcFA8AAeGNp0q7Zxd09PEbm4X_gl37xfI",
    FIREBASE_AUTH_DOMAIN: "app-justo-site.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://app-justo-site.firebaseio.com",
    FIREBASE_PROJECT_ID: "app-justo-site",
    FIREBASE_STORAGE_BUCKET: "app-justo-site.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "739460379065",
    FIREBASE_APP_ID: "1:739460379065:web:4496d1ec8e8e74d02f8668",
    FIREBASE_MEASUREMENT_ID: "G-MD12BE6W35",
  },
  experimental: {
    sprFlushToDisk: false,
  },
});
