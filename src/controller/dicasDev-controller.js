import { adiciona, retornaDicaAleatoria } from "../model/dica-model.js"

const dicasDevController = (app) => {
  app.get('/tips', (req, res) => {
    const dicaAleatoria = retornaDicaAleatoria()
    res.json({ "dica": dicaAleatoria })
  })

  app.post('/create', (req, res) => {
    const dados = req.body.text
    adiciona(dados)
    res.send(`ok`)
  })
}


export default dicasDevController