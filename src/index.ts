import express from "express"
import { value } from "./config"
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send("Tracflo API Test v2")
})
app.get("/final", (req, res) => {
  res.send("This is the final test")
})

app.get("/env", (req, res) => {
  res.send(process.env.VAR)
})

app.get("/value", (req, res) => {
  res.send(`variable: ${value}`)
})

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})
