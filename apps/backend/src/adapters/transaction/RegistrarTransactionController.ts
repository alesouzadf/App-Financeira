import { TransactionFacade } from 'adapters'
import { RepositorioTransaction } from 'core'
import { Express } from 'express'
import Erros from '../../utils/Erros'

export default class RegistrarTransactionController {
    constructor(
        readonly servidor: Express,
        readonly repo: RepositorioTransaction,
        ...middleware: any[]
    ) {
        servidor.post('/transaction/registrar', ...middleware, async (req, res) => {
            try {
                const { value, description, type, status } = req.body
                const userId = (req as any).usuario.id
                const facade = new TransactionFacade(repo)
                await facade.registrar({ userId, value, description, type, status })
                res.status(201).json({ message: "Transação cadastrada!" })
            } catch (e: any) {
                res.status(400).send(Erros.tratar(e))
            }
        })
    }
}