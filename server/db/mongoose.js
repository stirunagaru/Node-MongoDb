var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//'mongodb://tirunagaru:suma3005@ds141671.mlab.com:41671/todos-app-db';

//||'mongodb://localhost:27017/TodoApp'
mongoose.connect('mongodb://tirunagaru:suma3005@ds141671.mlab.com:41671/todos-app-db');
//    (err)=>{
//   if(err){
//     //  console.log('CONNECTION ERROR:', err);
//     }
//     console.log('CONNECTED to DB!');
// });

module.exports = {mongoose};
