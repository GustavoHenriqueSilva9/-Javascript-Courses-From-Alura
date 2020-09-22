console.log("Execução")
import { Cliente } from "./Cliente.js";
import{ Gerente } from "./Funcionarios/Gerente.js"
import{ Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000,45455121)
diretor.CadastrarSenha("123456789")

const gerente = new Gerente("Gustavo", 5000, 16549848)
gerente.CadastrarSenha("123")
const cliente = new Cliente("Lais", 78448464 , "123456")


const gerenteLogado = SistemaAutenticacao.login(gerente, "123")
const diretorLogado = SistemaAutenticacao.login(diretor, "123456789")
// const clienteLogado = SistemaAutenticacao.login(cliente, "123456")





console.log(gerenteLogado)
console.log(diretorLogado)
// console.log(clienteLogado)

