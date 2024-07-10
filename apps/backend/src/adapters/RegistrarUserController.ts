
import {RepositoryUser } from 'core'
import { Express } from 'express'
import Erros from '../utils/Erros'
import { UsuarioFacade } from 'adapters'

export default class RegistrarUserController {
    constructor(
        readonly servidor: Express,
        readonly repo: RepositoryUser,
    ) {
        servidor.post('/user/registrar', async (req, res) => {
            try {
                const { name, email, password } = req.body
                const facade = new UsuarioFacade (repo)
                await facade.registrar({name, email, password })
                res.status(201).json({ message: "Usuário cadastrado!" })
            } catch (e: any) {
                res.status(400).send(Erros.tratar(e))
            }
        })
    }
}