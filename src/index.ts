import express from "express"

const app = express()

app.use((req, res) => {
  res.send("Tracflo API Test 7")
})

app.listen(process.env.PORT, () => {
  console.log("server is ready.")
})
