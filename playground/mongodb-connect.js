// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
     return console.log('Could not connect to MongoDb Server');
    }
    console.log('Connected successfully to MongoDb Server');

    // db.collection('Todoslist').insertOne({
    //     text:'first insertion - from Node',
    //     completed:'ongoing'
    //   },(err,result)=>{
    //     if(err){
    //      return console.log('Unable to insert Todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    //   });



    db.collection('userlist').insertOne({
      name:'sumanjali Tirunagaru',
      age:24,
      location: 'Houston-TX'
    },(err,result)=>{
      if(err){
          return console.log('Unable to insert user document to userlist',err);
         }
         console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});
