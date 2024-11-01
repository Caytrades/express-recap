import express from "express";
// Routing refers to how an application’s endpoints (URIs) respond to client requests.
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>")
});

app.get("/dashboard", (req, res) => {
    res.send("<h1>Welcome to Admin Dashboard</h1>")
})

app.listen(8000, () => console.log("Server Up On http://localhost:8000"))