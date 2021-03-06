var express = require('express');
var bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');




var app = express();
app.use(bodyParser.json());


app.post('/todos', (req, res)=>{
    var todo = new Todo({
        text:req.body.text,
        completed:req.body.completed,
        completedAt:req.body.completedAt
    });
        todo.save().then((doc)=>{
            res.send(doc)
        }).catch(e=>res.status(400).send(e));
});
app.get('/todos', (req,res)=>{
    Todo.find()
        .then((todos)=>{
            res.send({
                todos
            })
        })
        .catch((e)=>{
            res.status(404).send(e);
        });
});
app.listen(3000, ()=>{
    console.log('Started on port 3000');
});



module.exports = {app};