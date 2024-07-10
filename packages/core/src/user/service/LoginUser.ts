import CasoDeUso from "../../shared/CasoDeUso"
import CryptoProvider from "../provider/CryptoProvider"
import RepositoryUser from "../provider/RepositoryUser"
import Validador from "../../shared/Validador"
import Email from "../../shared/Email"
import User from "../model/User"

export type Entrada = { email: string; password: string }

export default class LoginUser implements CasoDeUso<Entrada, User> {
    constructor(
        private repo: RepositoryUser,
        private provedorCripto: CryptoProvider,
    ) { }

    async executar(entrada: Entrada): Promise<User> {
        const email = new Email(entrada.email, "email")
        const usuario = await this.repo.getByEmail(email.valor)

        if (!usuario) Validador.lancarErro("USUARIO_NAO_EXISTE")

        const mesmaSenha = this.provedorCripto.comparar(
            entrada.password,
            usuario.password!.valor,
        )

        if (!mesmaSenha) Validador.lancarErro("SENHA_INCORRETA")
        return usuario.semSenha()
    }
}