var mongoose = require('mongoose');

var userList = mongoose.model('userList', {

    name:{
      type:String ,
      required: true ,
      minlength:1,
      trim: true
    },
    email:
    {
      type : String,
      required :true,
      trim: true,
      minlength:1
    }
});

// var user = new userList({
//   name: 'sumanjali tirunagaru',
//   email: 'tsumanjali94@gmail.com'
// });
//
// user.save().then((doc)=>{
//   console.log('saved Doc', doc);
//   },(e)=>{
//     console.log('unable to save',e);
// });

module.exports ={userList};
