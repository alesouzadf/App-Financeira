import { TransactionFacade } from 'adapters'
import { RepositorioTransaction } from 'core'
import { Express } from 'express'
import Erros from '../utils/Erros'

export default class ListarTransactionController {
  constructor(
      readonly servidor: Express,
      readonly repo: RepositorioTransaction,
  ) {
      servidor.get('/transaction/listar', async (req, res) => {
          try {
              const facade = new TransactionFacade(repo)
              const transactions = await facade.listar()
              res.status(200).json(transactions)
          } catch (e: any) {
              res.status(400).send(Erros.tratar(e))
          }
      })
  }
}