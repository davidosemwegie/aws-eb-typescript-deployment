import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.use((req, res) => {
  res.send("Tracflo API Test 7")
})

app.get("/hello", (req, res) => {
  res.send("Hello world")
})

app.listen(process.env.PORT, () => {
  console.log(`server is up and running on port ${port}`)
})
