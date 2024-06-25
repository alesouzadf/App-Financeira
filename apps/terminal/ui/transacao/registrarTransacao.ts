import RepositorioTransacaoPrima from "../../src/external/db/RepositorioTransacaoPrima";
import RegistrarTransacao from "../../../../packages/core/src/transacao/service/RegistrarTransacao"
import Terminal from "../util/Terminal";

export default async function registrarTransacao(){
    Terminal.titulo("Registrar Transacao")

    const descricao = await Terminal.campoEntrada('Descricao')
    const tipo = await Terminal.campoEntrada('Tipo')
    const valor = await Terminal.campoEntrada('Valor')
    const status = await Terminal.campoEntrada('Status')

    const repoTransacao = new RepositorioTransacaoPrima()

    try {
      const registrarTransacao = new RegistrarTransacao(repoTransacao)  
      await registrarTransacao.executar({descricao, tipo, valor, status})
      
      Terminal.sucesso("Transacao cadastrado com sucesso")
    } catch (error) {
        Terminal.erro(JSON.stringify(error, null, 2))
    } finally {
        await Terminal.esperaEnter()
    }

}