import Email from "../../shared/Email";
import Entidade from "../../shared/Entidade";
import NameUser from "../../shared/NomePessoa";
import SenhaHash from "../../shared/SenhaHash";


export interface UserProps {
    id?: number
    name?: string
    email?: string
    password?: string
}

export default class User extends Entidade<User, UserProps> {
    readonly id: number = 0
    readonly name: NameUser
    readonly email: Email
    readonly password: SenhaHash | null

    constructor(props: UserProps) {
        super(props)

        this.name = new NameUser(props.name!, 'nome', 'Usuário')
        this.email = new Email(props.email, 'email', 'Usuário')
        this.password = props.password ? new SenhaHash(props.password, 'senha', 'Usuário') : null
    }

    semSenha(): User {
        return this.clone({ password: undefined })
    }
}