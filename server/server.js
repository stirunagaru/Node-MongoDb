var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

  var Todo = mongoose.model('Todo',{
    text:{ type:String  },
    completed:{ type : Boolean },
    completedAt:{ type : Number }
  });


  var newTodo = new Todo({
     text :'sleep early',
     completed : 'false',
     completedAt : 123
  })

  newTodo.save().then((doc)=>{
    console.log('saved Doc', doc);
  },(e)=>{
    console.log('unable to save',e);
  });
