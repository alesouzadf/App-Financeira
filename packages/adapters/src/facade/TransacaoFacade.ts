import { RegistrarTransacao, RepositorioTransacao } from 'core'
import { TransacaoDTO } from '..'

export default class TransacaoFacade {
    constructor(
        private readonly repo?: RepositorioTransacao,
    ) {}

    async registrar(dto: TransacaoDTO): Promise<void> {
        const casoDeUso = new RegistrarTransacao(this.repo!)
        await casoDeUso.executar({
            descricao: dto.descricao!,
            tipo: dto.tipo!,
            valor: dto.valor!,
            status: dto.status!
        })
    }
}