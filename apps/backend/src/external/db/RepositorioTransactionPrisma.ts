import { PrismaClient } from '@prisma/client'
import { RepositorioTransaction, Transaction } from 'core'

export default class RepositorioTransactionPrisma implements RepositorioTransaction {
    private readonly prisma = new PrismaClient()
   
    obterPorId(id: number): Promise<Transaction | null> {
      throw new Error('Method not implemented.')
    }
    
    async buscarTudo(): Promise<Transaction[]> {
    //  return await this.prisma.transaction.findMany();
     throw new Error("Method not implemented.");
    }

    async salvar(transaction: Transaction): Promise<Transaction> {
        const newTransaction = await this.prisma.transaction.upsert({
          where: { id:  -1 },
          update: transaction.props as any,
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