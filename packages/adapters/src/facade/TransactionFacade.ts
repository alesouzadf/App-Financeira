import { RepositorioTransaction, RegistrarTransaction, Transaction, ListarTransaction } from "core";
import { TransactionDTO } from "../dto";

export default class UsuarioFacade {
    constructor(
        private readonly repo?: RepositorioTransaction
    ){}

    async registrar(dto: TransactionDTO): Promise<void>{
        const casoDeUso = new RegistrarTransaction(this.repo!)
        await casoDeUso.executar({
            value: dto.value!,
            description: dto.description!,
            createdAt: dto.createdAt!,
            type: dto.type!,
            status: dto.type!
        })
    }

    async listar(): Promise<Transaction[]>{
        const casoDeUso = new ListarTransaction(this.repo!)
        const transaction = casoDeUso.executar()

        return transaction ?? null
    }
}