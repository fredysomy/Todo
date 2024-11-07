const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

const app = express();

app.use(express.json());

const CON_STRING =
  "mongodb+srv://fredy:fredy.csa2125@cluster0todo.f7lz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Todo";

mongoose
  .connect(CON_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hi", (req, res) => {
  res.send("Hi Saintgits");
});




app.get("/todos", (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json({
        todos: todos,
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});







app.post("/createtodo", (req, res) => {
  const todo = new Todo({
    todo: req.body.todo,
    completed: false,
  });

  todo
    .save()
    .then((todo) => {
      res.json({
        success: true,
        message: "Todo added successfully",
        data: todo,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/updatetodo/:id", (req, res) => {
  const id = req.params.id;
  const { todo, status } = req.body;

  Todo.findByIdAndUpdate(id, {
    todo: todo,
    completed: status,
  }).then((data) => {
    res.json({
      success: true,
      message: "Todo updated successfully",
      data: data,
    });
  });
});


app.delete("/deletetodo/:id", (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndDelete(id).then(()=>
    res.json({
      success: true,
      message: "Todo deleted successfully",
    }))
  })



  app.get("/todo/:id", (req, res) => {
    const id = req.params.id;
  
    Todo.findById(id)
        .then((todo) => {
            res.json({
            success: true,
            data: todo,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    })
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
