const expect = require('expect');
const request = require('supertest');

const {app} =  require('./../server');
const {Todo} = require('./../models/todo');
const {userList} =  require('./../models/user');

const todos = [{
  text : 'first test todo'
},{
  text : 'second test Todo'
}];

//testing lifecycle method
beforeEach((done)=>{
  Todo.remove({}).then(()=>{
  return Todo.insertMany(todos);
}).then(()=>done());

});

describe('POST /Todo',()=>{

  it('post - create a New Todo Object', (done)=>{
    var text = 'post - test data';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err, res)=>{
        if(err) {return done(err);}

        Todo.find({text}).then((todos)=>{
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=>done(e));

    }); //end
  }); //it

  it('post - Invalid Todo Data Object ', (done)=>{
  //  var text ="";
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if(err) {return done(err);}

      Todo.find().then((todos)=>{
        expect(todos.length).toBe(2);
        done();
      }).catch((e)=> done(e));
    });//end
  }); //it
});  // describe


describe('GET /Todos',()=>{
  it('retreive all the Todos',(done)=>{
      request(app)
      .get('/todos')
      .expect(200)
      .expect((res)=>{
        expect(res.body.todos.length).toBe(2);
      }).end(done);//expect
  });//if
}); //describe
