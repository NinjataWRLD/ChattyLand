const functions = require("firebase-functions");
const cors = require('cors');

const corsHandler = cors({ origin: true });

exports.helloWorld = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => res.send('Hello World!'));
});