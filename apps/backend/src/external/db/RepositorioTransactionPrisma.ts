import {PrismaClient} from "@prisma/client";
import {RepositorioTransaction, Transaction} from "core";

export default class RepositorioTransactionPrisma
  implements RepositorioTransaction
{

  private readonly prisma = new PrismaClient();

  async obterPorId(userId: number, id: number): Promise<Transaction> {
    const transactionData = await this.prisma.transaction.findUnique({
      where: {userId, id},
    });

    if (!transactionData) {
      throw new Error(`Transacão com o id ${id} não encontrado`);
    }

    return new Transaction(transactionData);
  }

  async buscarTudo(userId: number): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId: userId,
      },
    });
    return transactions as any;
  }

  async filtrarPorStatus(
    status: string,
    userId: number
  ): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        status: status,
        userId: userId,
      },
    });
    return transactions as any;
  }

  async salvar(transaction: Transaction): Promise<Transaction> {
    const newTransaction = await this.prisma.transaction.upsert({
      where: {id: transaction.id},
      update: transaction.props,
      create: transaction.props as any,
    });
    return new Transaction(newTransaction);
  }

  async excluir(userId: number, id: number): Promise<void> {
    await this.prisma.transaction.delete({
      where: {
        id: id,
        userId: userId
      }
    })
  }
}
