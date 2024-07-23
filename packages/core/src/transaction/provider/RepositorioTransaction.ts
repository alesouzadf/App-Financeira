import Transaction from "../model/Transaction";

export default interface RepositorioTransaction {
  salvar(transaction: Transaction): Promise<Transaction>;
  obterPorId(userId: number, id: number): Promise<Transaction>;
  buscarTudo(userId: number): Promise<Transaction[]>;
  filtrarPorStatus(status: string, userId: number): Promise<Transaction[]>;
}
