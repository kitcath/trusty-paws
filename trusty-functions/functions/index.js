// in command line:
// firebase deploy
// firebase serve (Quicker, to test on local server)

const functions = require("firebase-functions");
const admin = require('firebase-admin'); // admin sdk to access db

admin.initializeApp(); // initialize admin to use it

const express = require('express');
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// GET request
// getting documents from a collection
// getUSers gets a list of docs in users collection
/*
exports.getUsers = functions.https.onRequest((req, res) => {
    admin
        .firestore()
        .collection("users")
        .get() // equivalent to db.collection("users")
        .then((data) => {
            let users = []; // creates a users list
            data.forEach((doc) => {
                users.push(doc.data()); // pushes each doc in the collection into the users[]
            });
            // returning response as a json
            return res.json(users);
        })
        .catch((err) => console.error(err)); // catching errors
});
*/

// first parameter is route
// app is our container for all our routes
app.get('/users', (req, res) => {
    admin
        .firestore()
        .collection("users")
        .get() // equivalent to db.collection("users")
        .then((data) => {
            let users = []; // creates a users list
            data.forEach((doc) => {
                users.push(doc.data()); // pushes each doc in the collection into the users[]
            });
            // returning response as a json
            return res.json(users);
        })
        .catch((err) => console.error(err)); // catching errors
});

// POST request
// writing to a collection
exports.createUser = functions.https.onRequest((req, res) => {
    // only answers to a POST request
    if (req.method !== 'POST') {
        return res.status(400).json({ error: 'Method not allowed! POST request only.' });
    }
    // creating object/doc to add
    const newUser = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        name: req.body.name,
        type: req.body.type,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };
    // adding newUser to users collection
    admin.firestore()
        .collection('users')
        .add(newUser) // returns a product
        .then((doc) => {
            res.json({ message: `document ${doc.id} created successfully.` }); // `contains a variable`
        })
        .catch((err) => {
            res.status(500).json({ error: `something went wrong` });
            console.error(err);
        });
});

// https://baseurl.com/api/users -> we want this route format

exports.api = functions.https.onRequest(app); // automatically turns into multiple routes