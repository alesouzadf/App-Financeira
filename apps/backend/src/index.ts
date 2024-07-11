import dotenv from 'dotenv'
dotenv.config()

import app from './external/api/config'
import RegistrarUserController from './adapters/RegistrarUserController'
import ListarUserController from './adapters/ListarUserControler'
import RegistrarTransactionController from './adapters/RegistrarTransactionController'
import ListarTransactionController from './adapters/ListarTransactionControler'
import RepositorioTransactionPrisma from './external/db/RepositorioTransactionPrisma'
import EditarTransactionController from './adapters/EditarTransactionController'
import RepositorioUsuarioPrisma from './external/db/RepositorioUsuarioPrisma'
import ProvedorCriptografiaBcrypt from './external/auth/ProvedorCriptografiaBcript'


// ----------------------------------- Dependências

const repoTransaction = new RepositorioTransactionPrisma()
const repoUser = new RepositorioUsuarioPrisma()
const provedorCripto = new ProvedorCriptografiaBcrypt()

// ----------------------------------- Rotas Abertas

new RegistrarTransactionController(app, repoTransaction)
new ListarTransactionController(app, repoTransaction)
new EditarTransactionController(app, repoTransaction)
new RegistrarUserController(app, repoUser, provedorCripto)
new ListarUserController(app, repoUser)