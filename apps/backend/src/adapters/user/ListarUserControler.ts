import { UsuarioFacade } from 'adapters'
import { RepositoryUser } from 'core'
import { Express } from 'express'
import Erros from '../../utils/Erros'

export default class ListarUserController {
  constructor(
      readonly servidor: Express,
      readonly repo: RepositoryUser,
  ) {
      servidor.get('/user/listar', async (req, res) => {
          try {
              const facade = new UsuarioFacade(repo)
              const usuarios = await facade.listar()
              res.status(200).json(usuarios)
          } catch (e: any) {
              res.status(400).send(Erros.tratar(e))
          }
      })
  }
}