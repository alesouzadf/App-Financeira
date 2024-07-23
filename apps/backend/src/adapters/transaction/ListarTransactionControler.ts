import { TransactionFacade } from 'adapters'
import { RepositorioTransaction } from 'core'
import { Express } from 'express'
import Erros from '../../utils/Erros'

export default class ListarTransactionController {
    constructor(
        readonly servidor: Express,
        readonly repo: RepositorioTransaction,
        ...middleware: any[]
    ) {
        servidor.get('/transaction/listar', ...middleware, async (req, res) => {
            try {
                const userId = (req as any).usuario.id
                const facade = new TransactionFacade(repo)
                const transactions = await facade.listar(userId)
                res.status(200).json(transactions)
            } catch (e: any) {
                res.status(400).send(Erros.tratar(e))
            }
        })
    }
}