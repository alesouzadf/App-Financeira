import CasoDeUso from "../../shared/CasoDeUso"
import RepositorioTransaction from "../provider/RepositorioTransaction"

export type Entrada = {
    userId: number
    id: number
}

export default class ExcluirTransaction implements CasoDeUso<Entrada, void> {
    constructor(
        private readonly repo: RepositorioTransaction
    ) { }

    async executar(entrada: Entrada): Promise<void> {
        const { userId, id } = entrada
        await this.repo.excluir(userId, id)
    }
}