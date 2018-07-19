var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {userList} =require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
  var todo = new Todo({ text : req.body.text  });
  //console.log(req.body);
  todo.save().then((doc)=>{
  res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  }); //todo.save
}); //post

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
      res.status(400).send(e);
    });

});

app.get ('/todos/:id',(req,res)=>{
  var id =req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  } //if

  Todo.findById(id).then((todo)=>{
    if(!todo)
      res.status(400).send();
    else {
        res.status(200).send({todo});
    }
  }).catch((e) =>{ res.status(400).send(e);
  });

});


app.listen(8000,()=>{
  console.log('started on port 8000');
})

module.exports = {app};
