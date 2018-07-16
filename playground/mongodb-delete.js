// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
     return console.log('Could not connect to MongoDb Server');
    }
    console.log('Connected successfully to MongoDb Server');

//deletemany - deletes all with the same text:''
    db.collection('Todoslist').deleteMany({
      text:'Learn Node'
    }).then((result)=>{
      console.log(result);
    });

//delete One
    db.collection('Todoslist').deleteOne({
      text:'Learn Node'
    }).then((result)=>{
      console.log(result);
    });

//find One and delete

  db.collection('Todoslist').findOneAndDelete({
    completed:false
  }).then((result)=>{
    console.log(result);
  });

  //deletemany - deletes all with the same text:''
      db.collection('userlist').deleteMany({
        name:'sumanjali Tirunagaru'
      }).then((result)=>{
        //console.log(result);
      });



//deleteMany
      db.collection('userlist').findOneAndDelete({
        _id:new ObjectId("5b4bdb5c4f4f816fbce1c7bb")
      }).then((result)=>{
       console.log(JSON.stringify(result,undefined,2));
      });

 db.close();
});
