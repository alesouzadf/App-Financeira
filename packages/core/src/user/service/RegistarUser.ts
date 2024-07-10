import User from '../model/User'
import CasoDeUso from '../../shared/CasoDeUso'
import SenhaForte from '../../shared/SenhaForte'
import Validador from '../../shared/Validador'
import CryptoProvider from '../provider/CryptoProvider'
import RepositoryUser from '../provider/RepositoryUser'

export type Entrada = {
    name: string
    email: string
    password: string
}

export default class RegistrarUser implements CasoDeUso<Entrada, void> {
    constructor(
        private readonly repo: RepositoryUser,
        private readonly provedorCripto: CryptoProvider
    ) { }

    async executar(entrada: Entrada): Promise<void> {
        const { name, email, password } = entrada
        const senhaForte = new SenhaForte(password)

        const senhaCripto = this.provedorCripto.criptografar(senhaForte.valor)
        const novoUsuario = new User({ name, email, password: senhaCripto })

        const usuarioExistente = await this.repo.getByEmail(email)
        Validador.valor(usuarioExistente?.email.valor)
            .nulo('USUARIO_JA_EXISTE')
            .lancarSeErro()

        await this.repo.save(novoUsuario)
    }
}
