import {PrismaClient} from "@prisma/client";
import Transaction from "../../core/transaction/model/Transaction";
import Repository from "../../core/transaction/service/Repository";

export default class RepositoryPostgres implements Repository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(transaction: Transaction): Promise<Transaction> {
    const result = await this.prisma.transaction.create({data: transaction});
    return result;
  }
  async getAll(): Promise<Transaction[]> {
    return await this.prisma.transaction.findMany();
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
