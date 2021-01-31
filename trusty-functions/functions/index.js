// in command line:
// firebase deploy
// firebase serve (Quicker, to test on local server)

const functions = require("firebase-functions");
const admin = require('firebase-admin'); // admin sdk to access db
//const express = require('express');
//const app = express();
const app = require('express')();
admin.initializeApp(); // initialize admin to use it

const firebaseConfig = {
    apiKey: "AIzaSyBMICz6JBYTkd90oYvuUcRC8fRlgMUfQEc",
    authDomain: "trusty-paw.firebaseapp.com",
    projectId: "trusty-paw",
    storageBucket: "trusty-paw.appspot.com",
    messagingSenderId: "980847798419",
    appId: "1:980847798419:web:f3cb591e7402ff5eb80566",
    measurementId: "G-GD67ZLZVXC"
  };

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();

// USERS

// first parameter is the route
// app is our container for all our routes
app.get('/users', (req, res) => {
    admin
        .db
        .collection("users")
        .orderBy('createdAt', 'desc') // sorts by most recent
        .get() // equivalent to db.collection("users")
        .then((data) => {
            let users = []; // creates a users list
            data.forEach((doc) => {
                users.push({
                    user_id: doc.id,
                    user_fields: doc.data()
                })
                //users.push(doc.data()); // pushes each doc in the collection into the users[]
            });
            // returning response as a json
            return res.json(users);
        })
        .catch((err) => console.error(err)); // catching errors
});


app.post('/user', (req, res) => {
    // creating object/doc to add
    const newUser = {

        // userId: req.body.userId,
        name: req.body.name,
        type: req.body.type,
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
        email: req.body.email,
        password: req.body.password,
        address: {
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            province: req.body.province,
            postal: req.body.postal
        }
 
        //createdAt: new Date().toISOString() // formats the date into a string
        //createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };
    // adding newUser to users collection
    admin
        .db
        .collection('users')
        .add(newUser) // returns a product
        .then((doc) => {
            res.json({ message: `document ${doc.id} created successfully.` }); // `contains a variable`
        })
        .catch((err) => {
            res.status(500).json({ error: 'something went wrong' });
            console.error(err);
        });
});

/* TODO ADD PETS
app.post('/pet', (req,res) => {
    const newPet = {
        name:
    }

})
*/

const isEmpty = (string) => {
    if (string.trim() === '') {
        return true;
    } else {
        return false;
    }
}

const isEmail = (email) => {
    const regEx = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) {
        return true;
    } else {
        return false;
    }
}

// Signup route
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        type: req.body.type
    };

    // TODO: validate data
    let token;
    db.doc(`/users/${newUser.email}`).get()
        .then(doc => {
            return firebase
                .auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password);
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then(idToken => {
            token = idToken;
            const userCredentials = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                type: newUser.type,
                userId: userId
            };
            return db.doc(`/users/${newUser.userId}`).set(userCredentials);
        })
        .then( () => {
            return res.status(201).json({ token });
        })
        .catch(err => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                return res.status(400).json({ email: 'This email is already in use.' });
            } else {
                return res.status(500).json({ error: err.code });
            }
        });

/* No error handling
    firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json({ message: `user ${data.user.uid} signed up successfully` });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
        */
});

app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    let errors = {};

    if (isEmpty(user.email)) {
        errors.email = 'Please enter an email.';
    }
    if (isEmpty(user.password)) {
        errors.password = 'Please enter a password.';
    }

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken();
        })
        .then(token => {
            return res.json({ token });
        })
        .catch(err => {
            console.error(err);
            if (err.code === 'auth/wrong-password') {
                return res.status(403).json({ general: 'Wrong email or password. Please try again.' });
            }
            return res.status(500).json({ error: err.code });
        });
});



// https://baseurl.com/api/users -> we want this route format
exports.api = functions.region('northamerica-northeast1').https.onRequest(app); // automatically turns into multiple routes