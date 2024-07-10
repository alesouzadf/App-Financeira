import dotenv from 'dotenv'
dotenv.config()

import app from './external/api/config'
import RegistrarTransactionController from './adapters/RegistrarTransactionController'
import ListarTransactionController from './adapters/ListarTransactionControler'
import RepositorioTransactionPrisma from './external/db/RepositorioTransactionPrisma'
import EditarTransactionController from './adapters/EditarTransactionController'

// ----------------------------------- Dependências

const repoTransaction = new RepositorioTransactionPrisma()

// ----------------------------------- Rotas Abertas

new RegistrarTransactionController(app, repoTransaction)
new ListarTransactionController(app, repoTransaction)
new EditarTransactionController(app, repoTransaction)