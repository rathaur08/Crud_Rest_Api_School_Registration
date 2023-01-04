const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port= process.env.PORT || 8000;
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello From the Student Registration..");
// });
// Create a new Students --------------->
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);

    user.save().than(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// Create HTTP Server Using Express
app.listen(port, () => {
    console.log("listing the port at 8000");
});