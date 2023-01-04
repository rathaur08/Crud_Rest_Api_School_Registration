const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);

// Create HTTP Server Using Express
app.listen(port, () => {
    console.log("listing the port at 8000");
});