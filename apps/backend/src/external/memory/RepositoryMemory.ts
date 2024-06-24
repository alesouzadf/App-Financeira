import Transaction from "../../core/transaction/model/Transaction";
import Repository from "../../core/transaction/service/Repository";

export default class RepositoryMemory implements Repository {
  private readonly transactions: Transaction[] = [];
  
  async create(transaction: Transaction): Promise<Transaction> {
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
