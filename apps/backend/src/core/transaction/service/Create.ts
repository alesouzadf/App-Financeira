import UseCase from "../../shared/UseCase";
import Transaction from "../model/Transaction";
import Repository from "./Repository";

type Input = {
  value: number;
  description: string;
  type: string;
  status: string;
};

export default class Create implements UseCase<Input, Transaction> {
  constructor(private readonly repository: Repository) {}
  async toExecute(input: Input): Promise<Transaction> {
    const {value, description, type, status} = input;

    const transaction = await this.repository.create({
      value,
      description,
      type,
      status,
    });
    return transaction;
  }
}
