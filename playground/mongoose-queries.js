const {ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {userList} = require('./../server/models/user');
// var id = '5b4e95f2a4977ff6093edb95';

// if(!ObjectID.isValid(id)){
//   console.log('ID is not Valid');
// }

// Todo.find({
//   _id : id // implicitly converts id to Object Id()
// }).then((todos) => {
//   console.log('Todos Array: ',todos);
// });
//
// //when id is not present, no error just NULL
//
// Todo.findOne({
//   _id :id
// }).then((todo)=>{
//   console.log('Todo Object: ',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo) return console.log('ID is not present');
//   console.log('Todo By ID:', todo  );
// })
// //.catch((e) => console.log(e))
// ;

var userid = '5b4e38014f4651a906b9a109';
if(!ObjectID.isValid(userid)){
  console.log('userId is unable to find');
}
userList.findById(userid).then((user)=>{
  if(!user) return console.log('ID is not present');
    console.log('User By ID:', user  );
  })
  .catch((e) => console.log(e))
  ;
