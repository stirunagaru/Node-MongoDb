var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//'mongodb://sumanjali:suma@3005@ds141671.mlab.com:41671/todos-app-db';

//||'mongodb://localhost:27017/TodoApp'
mongoose.connect('mongodb://sumanjali:suma@3005@ds141671.mlab.com:41671/todos-app-db' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
