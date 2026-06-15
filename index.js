const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hello World!  This a test of ex3.1 of the DevOps with Docker course.</h1><div>Hugs and Kisses, EA613 (aka MoocyDocker613 on the streets of ol' Dockertowne)</div>")
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})