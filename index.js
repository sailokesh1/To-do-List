import express from 'express'
const app = express();
const port = 3000;


var todos = []


app.use(express.json());        // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.get("/", (req, res) => {

    res.json(todos, 200)


})
app.post("/", (req, res) => {
    var randomID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    var todo = {
        id: randomID,
        name: req.body.name,
        status: false
    }
    todos.push(todo)
    res.json(todo, 201)
})
//getting todo by id


app.get("/:id", (req, res) => {
    let id = parseInt(req.params.id)
    const todo = todos.find(x => x.id === id)  
    console.log(todo);


    res.json(todo, 200)
});

//changing status to true or false
app.put("/:id", (req, res) => {
    let id = parseInt(req.params.id)
    const todo = todos.find(x => x.id === id)  
    console.log(todo);
    todo.status = req.body.status      //can add todo.name to update name 
    res.json(todo, 200)

})
// Delete a Todo by ID
app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);      
    todos.splice(index, 1);                                

    res.json({
        message:
            "done"
    });
});



app.listen(port, () => {
    console.log("App is Running on port 3000");

})

