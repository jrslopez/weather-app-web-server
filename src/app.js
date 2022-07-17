const path = require("path")
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))

app.get("/help", (req, res) => {
  res.send([
    {
      name: "James",
      age: 25,
    },
    { name: "Cammylle", age: 25 },
  ])
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.")
})
