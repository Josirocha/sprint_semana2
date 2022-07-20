import Dica from "../model/dica-model.js"

const dicasDevController = (app) => {
  app.get('/tips', (req, res) => {
    const dica = new Dica()
    const dicaAleatoria = dica.retornaDicaAleatoria()
    res.json({ "dica": dicaAleatoria })
  })

  app.post('/create', (req, res) => {
    const dados = req.body
    const dica = new Dica()
    dica.adiciona(dados)
    res.send(`ok`)
  })
}


export default dicasDevController