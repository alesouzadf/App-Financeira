import { RepositorioTransaction, Transaction } from "core";

export default class RepositorioTransactionMemory implements RepositorioTransaction {

  obterPorId(id: number): Promise<Transaction | null> {
    throw new Error("Method not implemented.");
  }
  buscarTudo(): Promise<Transaction[]> {
    throw new Error("Method not implemented.");
  }
  private readonly transactions: Transaction[] = [];
  
  async salvar(transaction: Transaction): Promise<Transaction> {
    const newTransaction = {...transaction, id: Math.random()};
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  getAll(): Promise<Transaction[]> {
    throw new Error("Method not implemented.");
  }

  update(id: number): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<Transaction | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
