const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/todos', (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
});

app.get('/todos/:id', (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        const todos = JSON.parse(data);
        const todo = todos.find(t => t.id === parseInt(req.params.id));
        if (!todo) {
            res.status(404).send("Not Found");
        }
        else {
            res.status(200).json(todo);
        }
    })
});

app.post('/todos', (req, res) => {
    const todo = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        description: req.body.description
    }
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data)
        todos.push(todo)
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
            if (err) throw err
            res.status(200).json(todo)
        })
    })
});

app.put('/todos/:id', (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        const todo = JSON.parse(data)
        const todoIndex = todo.findIndex(t => t.id === parseInt(req.params.id));
        if (todoIndex === -1) res.status(404).send("Not Found")
        else {
            const updatedTodo = {
                id: todo[todoIndex].id,
                title: req.body.title,
                description: req.body.description
            }
            todo[todoIndex] = updatedTodo
            fs.writeFile("todos.json", JSON.stringify(todo), (err) => {
                if (err) throw err;
                res.status(200).json(updatedTodo);
            })
        }
    })
});

app.delete('/todos/:id', (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        let todo = JSON.parse(data)
        const todoIndex = todo.findIndex(t => t.id === parseInt(req.params.id));
        if (todoIndex === -1) res.status(404).send("Not Found")
        else {
            todo.splice(todoIndex, 1)
            fs.writeFile("todos.json", JSON.stringify(todo), (err) => {
                if (err) throw err;
                res.status(200).send("Delete Done")
            })
        }
    })
});

app.use((req, res) => { res.status(404).send('Route not found'); })

app.listen(port);