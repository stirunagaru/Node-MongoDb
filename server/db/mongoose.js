var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//'mongodb://sumanjali:suma@3005@ds141671.mlab.com:41671/todos-app-db';

//||'mongodb://localhost:27017/TodoApp'
mongoose.connect('mongodb://sumanjali:suma@3005@ds141671.mlab.com:41671/todos-app-db' || 'mongodb://localhost:27017/TodoApp', (err)=>{
  if(err){
      console.log('CONNECTION ERROR::::', err);
    }
    console.log('CONNECTED to DB!');
});

module.exports = {mongoose};
