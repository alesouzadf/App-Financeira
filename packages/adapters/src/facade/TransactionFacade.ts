import { RepositorioTransaction, RegistrarTransaction, Transaction, ListarTransaction, EditarTransaction } from "core";
import { TransactionDTO } from "../dto";


export default class TransactionFacade {
    constructor(
        private readonly repo?: RepositorioTransaction
    ){}

    async registrar(dto: TransactionDTO): Promise<void>{
        const casoDeUso = new RegistrarTransaction(this.repo!)
        await casoDeUso.executar({
            value: dto.value!,
            description: dto.description!,
            type: dto.type!,
            status: dto.status!
        })
    }

    async listar(): Promise<Transaction[]>{
        const casoDeUso = new ListarTransaction(this.repo!)
        const transaction = casoDeUso.executar()

        return transaction ?? null
    }


    async editar(id: number, data: TransactionDTO): Promise<Transaction | boolean> {
        const casoDeUso = new EditarTransaction(this.repo!)
        await casoDeUso.executar({ id, ...data })
        return true
    }

}