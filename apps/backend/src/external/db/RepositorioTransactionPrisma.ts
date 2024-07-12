import { PrismaClient } from '@prisma/client'
import { RepositorioTransaction, Transaction } from 'core'

export default class RepositorioTransactionPrisma implements RepositorioTransaction {
  private readonly prisma = new PrismaClient()

  async obterPorId(id: number): Promise<Transaction | null> {
    const transactionData = await this.prisma.transaction.findUnique({ where: { id } })

    if (!transactionData) {
      throw new Error(`Transacão com o id ${id} não encontrado`)
    }

    return new Transaction(transactionData)
  }

  async buscarTudo(userId: number): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId: userId
      }
    })
    return transactions as any
  }

  async salvar(transaction: Transaction): Promise<Transaction> {
    const newTransaction = await this.prisma.transaction.upsert({
      where: { id: transaction.id },
      update: transaction.props,
      create: transaction.props as any,
    })
    return new Transaction(newTransaction)
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