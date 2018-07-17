var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type:String ,
    required: true ,
    minlength:1,
    trim: true
  },
  completed:{
     type : Boolean,
      default: false
    },
  completedAt:{
    type : Number,
  default:null
}
});


module.exports ={Todo};


// var newTodo = new Todo({
//    text :true,
// // completed : 'false',
//    completedAt : 123
// })
//
// newTodo.save().then((doc)=>{
//   console.log('saved Doc', doc);
// },(e)=>{
//   console.log('unable to save',e);
// });
