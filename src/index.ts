import express from "express"
import { value } from "./config"
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send("Tracflo API Test v2")
})

app.get("/hello", (req, res) => {
  res.send("Hello world")
})

app.get("/value", (req, res) => {
  res.send(`variable: ${value}`)
})

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})
