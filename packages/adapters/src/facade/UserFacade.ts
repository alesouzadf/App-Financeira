import { LoginUser, RegistrarUsuario, RepositoryUser, CryptoProvider } from 'core'
import { UserDTO } from '..'

export default class UsuarioFacade {
    constructor(
        private readonly repo?: RepositoryUser,
        private readonly provedorCriptografia?: CryptoProvider
    ) { }

    async registrar(dto: UserDTO): Promise<void> {
        const casoDeUso = new RegistrarUsuario(this.repo!, this.provedorCriptografia!)
        await casoDeUso.executar({
            name: dto.name!,
            email: dto.email!,
            password: dto.password!,
        })
    }

    async login(dto: UserDTO): Promise<UserDTO> {
        const casoDeUso = new LoginUser(this.repo!, this.provedorCriptografia!)
        const usuario = await casoDeUso.executar({
            email: dto.email!,
            password: dto.password!,
        })
        return usuario.props
    }
}