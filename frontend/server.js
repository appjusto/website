const admin = require("firebase-admin");
const functions = require("firebase-functions");
const next = require("next");
const config = require("./next.config");

admin.initializeApp();

const app = next({
	dev: false,
	// the absolute directory from the package.json file that initialises this module
	// IE: the absolute path from the root of the Cloud Function
	conf: config,
});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((request, response) => {
	// log the page.js file or resource being requested
	console.log("File: " + request.originalUrl);
	return app.prepare().then(() => handle(request, response));
});

exports.nextStaging = functions.https.onRequest((request, response) => {
	// log the page.js file or resource being requested
	console.log("File: " + request.originalUrl);
	return app.prepare().then(() => handle(request, response));
});

exports.nextDev = functions.https.onRequest((request, response) => {
	// log the page.js file or resource being requested
	console.log("File: " + request.originalUrl);
	return app.prepare().then(() => handle(request, response));
});

exports.nextCommunity = functions.https.onRequest((request, response) => {
	// log the page.js file or resource being requested
	console.log("File: " + request.originalUrl);
	return app.prepare().then(() => handle(request, response));
});
