const express = require('express');
const app = express();

var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: "Walk through the mists of Avalon",
    completed: false
}, {
    id: 2,
    description: "Write letter to ol Mr. Knox at Stateville",
    completed: false
}, {
    id: 3,
    description: "Get a little bit taller, and become a balla",
    completed: true
}];

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
    var matched;

    todos.forEach((item) => {
        if (todoId === item.id) {
            matched = item;
        }
    });

    if (matched) {
        res.json(matched);
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, () => {
    console.log('\n###############################################');
    console.log('\n$$ Express Server is Running on Port ' + PORT + ' $$');
    console.log('\n###############################################');
});