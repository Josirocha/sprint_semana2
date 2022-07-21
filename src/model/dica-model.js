import { tips } from "../database/bd.js"

export const adiciona = (texto) => {
  console.log("adicionou");

  tips.push(texto)
}

export const retornaDicaAleatoria = () => {
  const dica = tips[Math.floor(Math.random() * tips.length)]
  return dica;
}
