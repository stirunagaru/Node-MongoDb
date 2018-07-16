// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
     return console.log('Could not connect to MongoDb Server');
    }
    console.log('Connected successfully to MongoDb Server');

//findOneAndUpdate
//findOneAndUpdate(filter, update, options, callback)

  // db.collection('Todoslist').findOneAndUpdate(
  //   //filter
  //   {_id:new ObjectId("5b4beaf54f4f816fbce1ca03")},
  //   //update
  //   {  $set:{completed:false}  },
  //   //options
  //   {returnOriginal : true }
  // ).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndUpdate
  //findOneAndUpdate(filter, update, options, callback)

  db.collection('userlist').findOneAndUpdate(
    //filter
    {_id:new ObjectId("5b4beb534f4f816fbce1ca33")},
    //update
    {  $set:{name:'Anjali Tirunagaru'},
       $inc:{age:1}
      },
    //options
    {returnOriginal : false }
  ).then((result)=>{
    console.log(result);
  });





// db.close();
});
