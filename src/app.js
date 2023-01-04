const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello From the Student Registration..");
// });
// Create a new Students --------------->
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const CreateUser = await user.save();
        res.status(201).send(CreateUser);
    } catch (err) {
        res.status(400).send(err);
    }
})

// Create HTTP Server Using Express
app.listen(port, () => {
    console.log("listing the port at 8000");
});