import Transacao from "../model/Transacao"

export default interface RepositorioTransacao {

    salvar(Transacao: Transacao): Promise<Transacao>

    // obterListaTransacao(): Promise<Transacao[] | null>
}