const express = require("express")
const app = express();

app.use((req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.listen(8000, ( console.log("Server is running on http://localhost:8000")))