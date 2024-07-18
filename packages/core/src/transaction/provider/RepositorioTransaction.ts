import Transaction from "../model/Transaction";

export default interface RepositorioTransaction {
    salvar(transaction: Transaction): Promise<Transaction>
    obterPorId(id: number): Promise<Transaction | null>
    buscarTudo(userId: number): Promise<Transaction[]>
    filtrarPorStatus(status: string, userId: number): Promise<Transaction[]>
}