// const express = require('express')
// const app = express();

// //db connection
// const MongoClient = require('mongodb').MongoClient
// let db;
// MongoClient.connect('mongodb://localhost:27017', (err, client) => {
//     if (err) throw err

//     db = client.db('ecom')
// })

// // route
// app.get('/', (req, res) => {
// // fetch raw data from 
//     db.collection('product').find().toArray(function (err, result) {
//         if (err) throw err
//         res.send(result);
//     })
// });

// // creating server
// app.listen(4000, () => {
//     console.log('Listen on port 4000');
// })




////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const ConnectionURL = 'mongodb://@localhost:27017';
// mongodb+srv://codersgyan:<password>@commentsystem.bvlq4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// DB setup
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
let db;

(async function(){
   try {
    const client = await  MongoClient.connect(ConnectionURL)
    db = client.db('ecom')
   } catch (err) {
    throw err
   }
})();

app.get('/', async (req, res) => {
    // 602edc071c9212bd595b596d

    try {
        // const result = await db.collection('products').findOne({ name: { $eq: 'Camera' } });

        // const result = await db.collection('product').findOne({ _id: ObjectId('602edc071c9212bd595b596d')});
        res.send(result);
    } catch (err) {
        throw err
    }

    // try {
    //     const result = await db.collection('products').insertOne({
    //         name: 'Camera',
    //         price: 400
    //     });
    //     res.send(result);
    // } catch (err) {
    //     throw err
    // }

    // db.products.find()
    // try {
    //     const result = await db.collection('products').find().toArray()
    //     res.send(result);
    // } catch (err) {
    //     throw err
    // }
});


app.listen(4000, () => console.log('Listening on port 4000'));