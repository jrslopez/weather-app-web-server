const path = require("path")
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "James Lopez",
  })
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "James Lopez",
  })
})

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "James Lopez",
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.")
})
