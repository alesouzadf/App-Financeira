import UseCase from "../../shared/UseCase";
import Transaction from "../model/Transaction";
import Repository from "./Repository";

export default class GetAll implements UseCase<void, Transaction[]> {
  constructor(private readonly repository: Repository) {}
  async toExecute(): Promise<Transaction[]> {
    return await this.repository.getAll();
  }
}
