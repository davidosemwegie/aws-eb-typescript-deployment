import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.port || 3000
app.get("/", (req, res) => res.send(`Welcome to the ${process.env.name} api`))
app.get("/hello", (req, res) => res.send("Hello World"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
