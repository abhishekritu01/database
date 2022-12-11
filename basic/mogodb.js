// abhishekkumar@Abhisheks-MacBook-Air ~ % mongosh
// Current Mongosh Log ID:	634e40aa02d858145d598e84
// Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4
// Using MongoDB:		6.0.0
// Using Mongosh:		1.5.4

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2022-10-16T17:42:22.992+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
//    2022-10-16T17:42:22.993+05:30: Soft rlimits for open file descriptors too low
// ------

// ------
//    Free Monitoring URL:
//    https://cloud.mongodb.com/freemonitoring/cluster/FDHZDKFY57ZWBOVWBP3R4EPRFG72ET6U
// ------

test > show dbs
admin          40.00 KiB
config        108.00 KiB
local          72.00 KiB
rest - api      108.00 KiB
tutorialmern   48.00 KiB
test > use ecom
switched to db ecom
ecom > db.createCollection('product')
{ ok: 1 }
ecom > show collections
product
ecom > db.createCollection('users')
{ ok: 1 }
ecom > show collections
product
users
ecom > db.product.drop();
true
ecom > show collections
users
ecom > db.user.drop();
false
ecom > db.users.drop();
true
ecom > show collections

ecom > db.createCollection('products')
{ ok: 1 }
ecom > db.products.find();

ecom > db.products.insertOne({ name: 'keyboard', price: '250' })
{
    acknowledged: true,
        insertedId: ObjectId("634e42b802d858145d598e85")
}
ecom > db.products.find();
[
    {
        _id: ObjectId("634e42b802d858145d598e85"),
        name: 'keyboard',
        price: '250'
    }
]
ecom > db.products.insertOne({ name: 'moniter', price: '3000' })
{
    acknowledged: true,
        insertedId: ObjectId("634e42fd02d858145d598e86")
}
ecom > db.products.find();
[
    {
        _id: ObjectId("634e42b802d858145d598e85"),
        name: 'keyboard',
        price: '250'
    },
    {
        _id: ObjectId("634e42fd02d858145d598e86"),
        name: 'moniter',
        price: '3000'
    }
]
ecom > db.products.find({ price: 250 });

ecom > db.products.find({ price: 250 })

ecom > db.products.find({ price: 250 })

ecom > db.products.find();
[
    {
        _id: ObjectId("634e42b802d858145d598e85"),
        name: 'keyboard',
        price: '250'
    },
    {
        _id: ObjectId("634e42fd02d858145d598e86"),
        name: 'moniter',
        price: '3000'
    }
]
ecom > db.products.find();
[
    {
        _id: ObjectId("634e42b802d858145d598e85"),
        name: 'keyboard',
        price: '250'
    },
    {
        _id: ObjectId("634e42fd02d858145d598e86"),
        name: 'moniter',
        price: '3000'
    }
]
ecom > db.products.find({ price: 250 });

ecom > db.products.find({ price: '250' });
[
    {
        _id: ObjectId("634e42b802d858145d598e85"),
        name: 'keyboard',
        price: '250'
    }
]
ecom > show collections
products
ecom > db.products.findOne({ price: '250' });
{
    _id: ObjectId("634e42b802d858145d598e85"),
        name: 'keyboard',
            price: '250'
}
ecom > db.products.findOne({ price: '350' });
null
ecom > db.products.remove({ _id: ObjectId("634e42b802d858145d598e85") });
DeprecationWarning: Collection.remove() is deprecated.Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
{ acknowledged: true, deletedCount: 1 }
ecom > db.products.find();
[
    {
        _id: ObjectId("634e42fd02d858145d598e86"),
        name: 'moniter',
        price: '3000'
    }
]
ecom > db.products.remove({ _id: ObjectId("634e42fd02d858145d598e86") })
{ acknowledged: true, deletedCount: 1 }
ecom > db.products.find();

ecom > db.products.insertOne({ name: 'moniter', price: 300 })
{
    acknowledged: true,
        insertedId: ObjectId("634e45f802d858145d598e87")
}
ecom > db.products.insertOne({ name: 'keyboard', price: 250 })
{
    acknowledged: true,
        insertedId: ObjectId("634e460802d858145d598e88")
}
ecom > db.products.find();
[
    {
        _id: ObjectId("634e45f802d858145d598e87"),
        name: 'moniter',
        price: 300
    },
    {
        _id: ObjectId("634e460802d858145d598e88"),
        name: 'keyboard',
        price: 250
    }
]
ecom > db.products.find({ price: 300 });
[
    {
        _id: ObjectId("634e45f802d858145d598e87"),
        name: 'moniter',
        price: 300
    }
]
ecom > db.products.find().pretty();
[
    {
        _id: ObjectId("634e45f802d858145d598e87"),
        name: 'moniter',
        price: 300
    },
    {
        _id: ObjectId("634e460802d858145d598e88"),
        name: 'keyboard',
        price: 250
    }
]
ecom > db.products.insertMany([{ name: 'Mouse', price: 20 }, { name: 'Table', price: 400 }])
{
    acknowledged: true,
        insertedIds: {
        '0': ObjectId("634e46fd02d858145d598e89"),
            '1': ObjectId("634e46fd02d858145d598e8a")
    }
}
ecom > db.products.find()
[
    {
        _id: ObjectId("634e45f802d858145d598e87"),
        name: 'moniter',
        price: 300
    },
    {
        _id: ObjectId("634e460802d858145d598e88"),
        name: 'keyboard',
        price: 250
    },
    {
        _id: ObjectId("634e46fd02d858145d598e89"),
        name: 'Mouse',
        price: 20
    },
    {
        _id: ObjectId("634e46fd02d858145d598e8a"),
        name: 'Table',
        price: 400
    }
]
ecom > db.products.update({ _id: ObjectId("634e45f802d858145d598e87") }, {
    $set: {
        name: 'Tv}})
Uncaught:
            SyntaxError: Unterminated string constant. (1: 76)

                > 1 | db.products.update({ _id: ObjectId("634e45f802d858145d598e87") }, {
                    $set: {
                        name: 'Tv}})
                            |                                                                             ^
                            2 |

                            ecom > db.products.update({ _id: ObjectId("634e45f802d858145d598e87") }, { $set: { name: 'Tv' } })
DeprecationWarning: Collection.update() is deprecated.Use updateOne, updateMany, or bulkWrite.
{
                        acknowledged: true,
                        insertedId: null,
                        matchedCount: 1,
                        modifiedCount: 1,
                        upsertedCount: 0
                    }
ecom > db.products.find()
                    [
                    { _id: ObjectId("634e45f802d858145d598e87"), name: 'Tv', price: 300 },
                    {
                        _id: ObjectId("634e460802d858145d598e88"),
                        name: 'keyboard',
                        price: 250
                    },
                    {
                        _id: ObjectId("634e46fd02d858145d598e89"),
                        name: 'Mouse',
                        price: 20
                    },
                    {
                        _id: ObjectId("634e46fd02d858145d598e8a"),
                        name: 'Table',
                        price: 400
                    }
                    ]
ecom > 

ecom> db.products.find()
[
  { _id: ObjectId("634e45f802d858145d598e87"), name: 'Tv', price: 300 },
  {
    _id: ObjectId("634e460802d858145d598e88"),
    name: 'keyboard',
    price: 250
  },
  {
    _id: ObjectId("634e46fd02d858145d598e89"),
    name: 'Mouse',
    price: 20
  },
  {
    _id: ObjectId("634e46fd02d858145d598e8a"),
    name: 'Table',
    price: 400
  }
]
ecom> db.products.deleteOne({_id: ObjectId("634e46fd02d858145d598e8a")})
{ acknowledged: true, deletedCount: 1 }
ecom> db.products.find()
[
  { _id: ObjectId("634e45f802d858145d598e87"), name: 'Tv', price: 300 },
  {
    _id: ObjectId("634e460802d858145d598e88"),
    name: 'keyboard',
    price: 250
  },
  {
    _id: ObjectId("634e46fd02d858145d598e89"),
    name: 'Mouse',
    price: 20
  }
ecom> db.products.deleteMany({_id:{$in:[ObjectId("634e460802d858145d598e88"),ObjectId("634e46fd02d858145d598e89")]}})
{ acknowledged: true, deletedCount: 2 }
ecom> db.products.find()
[
  { _id: ObjectId("634e45f802d858145d598e87"), name: 'Tv', price: 300 }
]
ecom> 



ecom> db.createCollection('review')
{ ok: 1 }
ecom> show collections
products
review
ecom> db.review.drop();
true
ecom> show collections
products
ecom> db.createCollection('reviews')
{ ok: 1 }
ecom> show collections
products
reviews
ecom> db.reviews.insertMany([{text:'this is good product',stars:4},{text:'this is very bad product',stars:2}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("634e514b02d858145d598e8b"),
    '1': ObjectId("634e514b02d858145d598e8c")
  }
}
ecom> db.reviews.find();
[
  {
    _id: ObjectId("634e514b02d858145d598e8b"),
    text: 'this is good product',
    stars: 4
  },
  {
    _id: ObjectId("634e514b02d858145d598e8c"),
    text: 'this is very bad product',
    stars: 2
  }
]
ecom> db.products.deleteMany({_id:{$in:[ObjectId("634e514b02d858145d598e8b"),ObjectId("634e514b02d858145d598e8c")]}});
{ acknowledged: true, deletedCount: 0 }
ecom> db.reviews.find();
[
  {
    _id: ObjectId("634e514b02d858145d598e8b"),
    text: 'this is good product',
    stars: 4
  },
  {
    _id: ObjectId("634e514b02d858145d598e8c"),
    text: 'this is very bad product',
    stars: 2
  }
]
ecom> db.reviews.find();
[
  {
    _id: ObjectId("634e514b02d858145d598e8b"),
    text: 'this is good product',
    stars: 4
  },
  {
    _id: ObjectId("634e514b02d858145d598e8c"),
    text: 'this is very bad product',
    stars: 2
  }
]
ecom> db.reviews.deleteOne(_id: ObjectId("634e514b02d858145d598e8b"));
Uncaught:
SyntaxError: Unexpected token, expected "," (1:24)

> 1 | db.reviews.deleteOne(_id: ObjectId("634e514b02d858145d598e8b"));
    |                         ^
  2 |

ecom> db.reviews.drop();
true
ecom> show collections
products
ecom> db.createCollection('reviews')
{ ok: 1 }
ecom> show collections
products
reviews
ecom> db.products.find()
[
  { _id: ObjectId("634e45f802d858145d598e87"), name: 'Tv', price: 300 }
]
ecom> db.reviews.insertMany([{text:'this is good product',staecom> db.reviews.insertMany([{text:'this is good product',stars:4,prodctId:ObjectId("634e45f802d858145d598e87")},{text:'this is very bad product',stars:2,prodctId:ObjectId("634e45f802d858145d598e87")}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("634e55a202d858145d598e8d"),
    '1': ObjectId("634e55a202d858145d598e8e")
  }
}
ecom> db.reviews.find()
[
  {
    _id: ObjectId("634e55a202d858145d598e8d"),
    text: 'this is good product',
    stars: 4,
    prodctId: ObjectId("634e45f802d858145d598e87")
  },
  {
    _id: ObjectId("634e55a202d858145d598e8e"),
    text: 'this is very bad product',
    stars: 2,
    prodctId: ObjectId("634e45f802d858145d598e87")
  }
]
ecom> db.products.find()
[
  { _id: ObjectId("634e45f802d858145d598e87"), name: 'Tv', price: 300 }
ecom> db.products.update({_id:ObjectId("634e45f802d858145d598e87")},{$set: {reviews:[ {text:'this is good product',stars:4},{text:'this is very bad product',stars:2}]}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  }
]
ecom> db.products.find().pretty();
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  }
]
ecom> 
ecom> db.products.insertOne({name:'keyboard',price:250,category:'computer'}) 
{
  acknowledged: true,
  insertedId: ObjectId("634e614702d858145d598e8f")
}
ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  {
    _id: ObjectId("634e614702d858145d598e8f"),
    name: 'keyboard',
    price: 250,
    category: 'computer'
  }
]
ecom> 


/////////////////////////////////////////////////////////////////
//operators

ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  {
    _id: ObjectId("634e614702d858145d598e8f"),
    name: 'keyboard',
    price: 250,
    category: 'computer'
  }
]
ecom> db.products.deleteOne({ _id: ObjectId("634e614702d858145d598e8f"),})
{ acknowledged: true, deletedCount: 1 }
ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  }
]
ecom> db.products.insertOne({name:'keyboard'}) 
{
  acknowledged: true,
  insertedId: ObjectId("634e657f02d858145d598e90")
}
ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  { _id: ObjectId("634e657f02d858145d598e90"), name: 'keyboard' }
]
ecom> db.products.find({name:{$eq:'keyboard'})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:39)

> 1 | db.products.find({name:{$eq:'keyboard'})
    |                                        ^
  2 |

ecom> db.products.find({name:{$eq:'keyboard'}})
[ { _id: ObjectId("634e657f02d858145d598e90"), name: 'keyboard' } ]
ecom> 
ecom> db.products.insertOne({name:'pen',price:"10}) 
Uncaught:
SyntaxError: Unterminated string constant. (1:40)

> 1 | db.products.insertOne({name:'pen',price:"10}) 
    |                                         ^
  2 |

ecom> db.products.insertOne({name:'pen',price:10}) 
{
  acknowledged: true,
  insertedId: ObjectId("634e664902d858145d598e91")
}
ecom> db.products.insertOne({name:'copy',price:15}) 
{
  acknowledged: true,
  insertedId: ObjectId("634e666002d858145d598e92")
}
ecom> db.products.insertOne({name:'pencil',price:5}) 
{
  acknowledged: true,
  insertedId: ObjectId("634e666e02d858145d598e93")
}
ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  { _id: ObjectId("634e657f02d858145d598e90"), name: 'keyboard' },
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  },
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  }
]
ecom> db.products.find({name:{$eq :'pencil'}})
[
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  }
]
ecom>  db.products.find({price:{$eq :15}})
[
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  }
]
ecom> db.products.insertOne({name:'usb',price:10}) 
{
  acknowledged: true,
  insertedId: ObjectId("634e685102d858145d598e94")
}
ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  { _id: ObjectId("634e657f02d858145d598e90"), name: 'keyboard' },
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  },
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({price:{$gt:7}})
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({price:{$gt:11}})
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  }
]
ecom> db.products.find({price:{$gte:11}})
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  }
]
ecom> db.products.find({price:{$ls:11}})
MongoServerError: unknown operator: $ls
ecom> db.products.find({price:{$lt:11}})
[
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({price:{$lt:8}})
[
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  }
]
ecom> db.products.find({price:{$lte:8}})
[
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  }
]
ecom> db.products.find({price:{$ne:11}})
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  { _id: ObjectId("634e657f02d858145d598e90"), name: 'keyboard' },
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  },
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> 



// logical operator





ecom> db.products.find()
[
  {
    _id: ObjectId("634e45f802d858145d598e87"),
    name: 'Tv',
    price: 300,
    reviews: [
      { text: 'this is good product', stars: 4 },
      { text: 'this is very bad product', stars: 2 }
    ]
  },
  { _id: ObjectId("634e657f02d858145d598e90"), name: 'keyboard' },
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  },
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({ $and:[{price:{$eq:10}},{name:{$eq:'pen'}}]})
[
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 }
]
ecom> db.products.find({ $and:[{price:{$eq:10}},{name:{$eq:'usb'}}]})
[
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({ $and:[{price:{$eq:10}},{name:{$eq:'copy'}}]}) 

ecom> db.products.find({ $and:[{price:{$eq:10}},{name:{$eq:'usb'}}]})
[
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({ $or:[{price:{$eq:10}},{name:{$eq:'copy'}}]})
[
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666002d858145d598e92"),
    name: 'copy',
    price: 15
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> db.products.find({ $or:[{price:{$eq:10}},{name:{$eq:'pencil'}}]})
[
  { _id: ObjectId("634e664902d858145d598e91"), name: 'pen', price: 10 },
  {
    _id: ObjectId("634e666e02d858145d598e93"),
    name: 'pencil',
    price: 5
  },
  { _id: ObjectId("634e685102d858145d598e94"), name: 'usb', price: 10 }
]
ecom> 


///////////////////////////////////////////////

// creating bulk of data 
// ecom> for(let i=1;i<5000;i++){
//     ... db.product.insert({name:'product'+i,price:i})
//     ... }


// db.product.find({name:'product2000'}).explain('executionStats')
ecom> db.product.find({name:'product2000'})
[
  {
    _id: ObjectId("634e761866eed100368a9c6e"),
    name: 'product2000',
    price: 2000
  }
]
ecom> db.product.find({name:'product2000'}).explain('executionStats')
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'ecom.product',
    indexFilterSet: false,
    parsedQuery: { name: { '$eq': 'product2000' } },
    queryHash: '64908032',
    planCacheKey: '64908032',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'COLLSCAN',
      filter: { name: { '$eq': 'product2000' } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 6,
    totalKeysExamined: 0,
    totalDocsExamined: 4999,
    executionStages: {
      stage: 'COLLSCAN',
      filter: { name: { '$eq': 'product2000' } },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 5001,
      advanced: 1,
      needTime: 4999,
      needYield: 0,
      saveState: 5,
      restoreState: 5,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 4999
    }
  },
  command: { find: 'product', filter: { name: 'product2000' }, '$db': 'ecom' },
  serverInfo: {
    host: 'Abhisheks-MacBook-Air.local',
    port: 27017,
    version: '6.0.0',
    gitVersion: 'e61bf27c2f6a83fed36e5a13c008a32d563babe2'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}
ecom> db.product.createIndex({name:1})
name_1
ecom>   db.product.find({name:'product2000'}).explain('executionStats')
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'ecom.product',
    indexFilterSet: false,
    parsedQuery: { name: { '$eq': 'product2000' } },
    queryHash: '64908032',
    planCacheKey: 'A6C0273F',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { name: 1 },
        indexName: 'name_1',
        isMultiKey: false,
        multiKeyPaths: { name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { name: [ '["product2000", "product2000"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 5,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { name: 1 },
        indexName: 'name_1',
        isMultiKey: false,
        multiKeyPaths: { name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { name: [ '["product2000", "product2000"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  command: { find: 'product', filter: { name: 'product2000' }, '$db': 'ecom' },
  serverInfo: {
    host: 'Abhisheks-MacBook-Air.local',
    port: 27017,
    version: '6.0.0',
    gitVersion: 'e61bf27c2f6a83fed36e5a13c008a32d563babe2'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}
ecom>   db.product.find({name:'product2000'}).explain('executionStats')
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'ecom.product',
    indexFilterSet: false,
    parsedQuery: { name: { '$eq': 'product2000' } },
    queryHash: '64908032',
    planCacheKey: 'A6C0273F',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { name: 1 },
        indexName: 'name_1',
        isMultiKey: false,
        multiKeyPaths: { name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { name: [ '["product2000", "product2000"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { name: 1 },
        indexName: 'name_1',
        isMultiKey: false,
        multiKeyPaths: { name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { name: [ '["product2000", "product2000"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  command: { find: 'product', filter: { name: 'product2000' }, '$db': 'ecom' },
  serverInfo: {
    host: 'Abhisheks-MacBook-Air.local',
    port: 27017,
    version: '6.0.0',
    gitVersion: 'e61bf27c2f6a83fed36e5a13c008a32d563babe2'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}
ecom> db.product.getIndexs()
TypeError: db.product.getIndexs is not a function
ecom> db.product.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { name: 1 }, name: 'name_1' }
]
ecom> db.product.dropIndex('name_1')
{ nIndexesWas: 2, ok: 1 }
ecom> db.product.getIndexes()
[ { v: 2, key: { _id: 1 }, name: '_id_' } ]
ecom> db.products.find({name:'product2000'})

ecom> db.products.find({name:'product2000'})

ecom> db.products.find({name:'product2000'})

ecom> 
