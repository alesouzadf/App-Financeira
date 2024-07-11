import { UsuarioFacade } from 'adapters'
import { CryptoProvider, RepositoryUser } from 'core'
import { Express } from 'express'
import Erros from '../utils/Erros'
import ProvedorJWT from '../external/auth/ProvedorJWT'

export default class LoginUsuarioController {
    constructor(
        readonly servidor: Express,
        readonly repo: RepositoryUser,
        readonly provedorCripto: CryptoProvider,
        readonly provedorJWT: ProvedorJWT
    ) {
        servidor.post('/user/login', async (req, res) => {
            try {
                const { email, password } = req.body
                const facade = new UsuarioFacade(repo, provedorCripto)
                const usuario = await facade.login({ email, password })
                const token = provedorJWT.gerar({
                    id: usuario.id,
                    nome: usuario.name,
                    email: usuario.email,
                })
                res.status(200).json({ token })
            } catch (e: any) {
                res.status(400).send(Erros.tratar(e))
            }
        })
    }
}
