import { Transacao } from '..'
import CasoDeUso from '../../shared/CasoDeUso'
import RepositorioTransacao from '../Provider/RepositorioTransacao'

export type Entrada = {
    descricao: string
    criadoEm: Date
    tipo: string
    valor: any
    status: string
}

export default class RegistrarTransacao implements CasoDeUso<Entrada, void> {
    constructor(
        private readonly repo: RepositorioTransacao,
    ) {}

    async executar(entrada: Entrada): Promise<void> {
        const { descricao, criadoEm, tipo, valor, status } = entrada

        const novaTransacao = new Transacao({ descricao, criadoEm, tipo, valor, status })

        await this.repo.salvar(novaTransacao)
    }
}