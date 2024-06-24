import { TransacaoFacade } from '../../../../packages/adapters/src'
import { RepositorioTransacao } from 'core'
import { Express } from 'express'
import Erros from '../utils/Erros'

export default class RegistrarUsuarioController {
    constructor(
        readonly servidor: Express,
        readonly repo: RepositorioTransacao,
    ) {
        servidor.post('/transacao/registrar', async (req, res) => {
            try {
                const { descricao, data, tipo, valor, status } = req.body
                const facade = new TransacaoFacade(repo)
                await facade.registrar({ descricao, data, tipo, valor, status })
                res.status(201).json({})
            } catch (e: any) {
                res.status(400).send(Erros.tratar(e))
            }
        })
    }
}