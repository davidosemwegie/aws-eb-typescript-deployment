import express from "express"
import dotenv from "dotenv"

const app = express()
const port = process.env.PORT || 3050

app.get("/", (req, res) => {
  res.send("Tracflo API Test 7")
})

app.get("/hello", (req, res) => {
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})
