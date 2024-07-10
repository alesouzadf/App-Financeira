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
        console.log(senhaForte.valor)
        const senhaCripto = this.provedorCripto.criptografar(senhaForte.valor)
        console.log(senhaCripto)
        const novoUsuario = new User({ name, email, password: senhaCripto })
        console.log(email)
        const usuarioExistente = await this.repo.getByEmail(email)
        Validador.valor(usuarioExistente?.email.valor)
            .nulo('USUARIO_JA_EXISTE')
            .lancarSeErro()

        await this.repo.save(novoUsuario)
    }
}
