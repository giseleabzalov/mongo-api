import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllDoc, postDoc, findDoc, deleteDoc } from "./src/functions.js";

// const PORT = process.env.PORT;

const app = express();
app.use( express.json() );
app.use( cors() );

// get: root
app.get("/", (req, res) => res.send(`Mongo API: I am root.`));

// get: get all
app.get("/getall", getAllDoc)

// get: search
app.get("/search/:search", findDoc)

// post: add
app.post("/post", postDoc);
// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// delete
app.delete("/delete/:docId", deleteDoc)

export const api = functions.https.onRequest(app);


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
