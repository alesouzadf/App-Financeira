import CasoDeUso from "../../shared/CasoDeUso"
import Transaction from "../model/Transaction"
import RepositorioTransaction from "../provider/RepositorioTransaction"

type Entrada = {
    id: number
    value?: number
    description?: string
    type?: string
    status?: string
}

console.log(new Intl.RelativeTimeFormat("pt-BR"))
console.log(new Date())

export default class EditarTransaction implements CasoDeUso<Entrada, boolean> {
    constructor(
        private readonly repo: RepositorioTransaction
    ) { }

    async executar(entrada: Entrada): Promise<boolean> {
        const { id, value, description, type, status } = entrada
        const transaction = await this.repo.obterPorId(id)
        if (transaction) {
            const newTransaction = new Transaction({ id, value, description, type, status, createdAt: new Date() })

            await this.repo.salvar(newTransaction)
            return true
        }
        return false

    }
}