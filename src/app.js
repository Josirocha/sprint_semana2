import express from 'express'
import dicasDevController from './controller/dicasDev-controller.js'

const app = express()
const port = 3000
app.use(express.json())
dicasDevController(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})