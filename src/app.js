const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello From the Student Registration..");
});

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

// Read the data of Student --------------->
app.get("/students", async (req, res) => {
    try {
        const ReadUser = await Student.find();
        res.send(ReadUser);
    } catch (err) {
        res.send(err);
    }
})

// get the indivisual Students data using id --------------->
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const ReadUserId = await Student.findById(_id);
        console.log(ReadUserId);
        if (!ReadUserId) {
            return res.status(404).send();
        } else {
            res.send(ReadUserId);
        }
    } catch (err) {
        res.send(err);
    }
})

// Update the data Student using id --------------->
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const UpdateUser = await Student.findByIdAndUpdate(_id, req.body,{new : true});
        console.log(UpdateUser);
        if (!UpdateUser) {
            return res.status(404).send();
        } else {
            res.send(UpdateUser);
        }
    } catch (err) {
        res.send(err);
    }
})

// Delete the  Students by it id --------------->
app.delete("/students/:id", async (req, res) => {
    try {
        const DeleteUser = await Student.findByIdAndDelete(req.params.id);
        // console.log(DeleteUser);
        if (!req.params.id) {
            return res.status(404).send();
        } else {
            res.send(DeleteUser);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})


// Create HTTP Server Using Express
app.listen(port, () => {
    console.log("listing the port at 8000");
});