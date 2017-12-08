const bodyParser = require('body-parser');
const express = require('express');
const _ = require('underscore');
const app = express();

var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Todo API Root");
});

// GET /todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
    var todoId = parseInt(req.params.id, 10);  // all request params are strings
    var matched = _.findWhere(todos, {id: todoId});

    if (matched) {
        res.json(matched);
    } else {
        res.status(404).send();
    }
});

// POST
app.post('/todos', (req, res) => {
    var body = _.pick(req.body, 'description', 'completed');

    if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
        return res.status(400).send();
    }

    body.description = body.description.trim();
    
    body.id = todoNextId++;
    todos.push(body);
    

    res.json(todos);
});

app.listen(PORT, () => {
    console.log('\n###############################################');
    console.log('\n$$ Express Server is Running on Port ' + PORT + ' $$');
    console.log('\n###############################################');
});