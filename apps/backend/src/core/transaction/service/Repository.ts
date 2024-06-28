import Transaction from "../model/Transaction";

export default interface Repository {
  getAll(): Promise<Transaction[]>;
  create(transaction: Partial<Transaction>): Promise<Transaction>;
  update(id: number): Promise<Transaction>;
  getById(id: number): Promise<Transaction | null>;
  delete(id: number): Promise<boolean>;
}
