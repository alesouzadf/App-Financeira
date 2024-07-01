import { TransactionFacade } from 'adapters'
import { RepositorioTransaction } from 'core'
import { Express } from 'express'
import Erros from '../utils/Erros'

export default class RegistrarTransactionController {
    constructor(
        readonly servidor: Express,
        readonly repo: RepositorioTransaction,
    ) {
        servidor.post('/Transaction/registrar', async (req, res) => {
            try {
                const { value, description, type, status } = req.body
                const facade = new TransactionFacade(repo)
                await facade.registrar({ value, description, type, status})
                res.status(201).json({})
            } catch (e: any) {
                res.status(400).send(Erros.tratar(e))
            }
        })
    }
}