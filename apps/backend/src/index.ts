import dotenv from 'dotenv'
dotenv.config()

import app from './external/api/config'
import RegistrarTransactionController from './adapters/RegistrarTransactionController'
import RepositorioTransactionPrisma from './external/db/RepositorioTransactionPrisma'

// ----------------------------------- Dependências

const repoTransaction = new RepositorioTransactionPrisma()

// ----------------------------------- Rotas Abertas

new RegistrarTransactionController(app, repoTransaction)