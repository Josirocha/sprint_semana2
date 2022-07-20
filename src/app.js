import express from 'express'
import dicasDevController from './controller/dicasDev-controller.js'

const app = express()
const port = 3000
dicasDevController(app)
app.use(express.json())

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})