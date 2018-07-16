// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
     return console.log('Could not connect to MongoDb Server');
    }
    console.log('Connected successfully to MongoDb Server');

    // db.collection('userlist').find({
    // //  location:'Houston-TX'
    // _id: new ObjectId('5b4aa250c762c64b3f58c790')
    //   }).toArray().then((docs)=>{
    //     console.log('users');
    //     console.log(JSON.stringify(docs, undefined,2));
    //   },(err)=>{
    //     console.log('unable to fetch',e);
    //   });

    db.collection('userlist').find().count().then((count)=>{
        console.log(`users count: ${count}`);
      },(err)=>{
        console.log('unable to fetch',e);
      });

    db.close();
});
