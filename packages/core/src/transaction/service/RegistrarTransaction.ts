import CasoDeUso from "../../shared/CasoDeUso"
import Transaction from "../model/Transaction"
import RepositorioTransaction from "../provider/RepositorioTransaction"

export type Entrada = {
    value: number
    description: string
    type: string
    status: string
}

export default class RegistrarTransaction implements CasoDeUso<Entrada, void>{
    constructor(
        private readonly repo: RepositorioTransaction
    ){}
    
    async executar(entrada: Entrada): Promise<void> {
        const { value, description, type, status } = entrada

        const newTransaction = new Transaction({value, description, type, status})

        await this.repo.salvar(newTransaction)
    }
}