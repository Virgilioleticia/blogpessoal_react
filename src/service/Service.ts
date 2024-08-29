import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-nest-ghyq.onrender.com'
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

//Função que envia requisições do tipo Get com o token
export const buscar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

//Função que envia requisições do tipo Post com o token
export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

//Função que envia requisições do tipo Put com o token
export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

//Função que envia requisições do tipo Delete com o token
export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}