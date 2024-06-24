import Data from "../../shared/Data";
import Descricao from "../../shared/Descricao";
import Tipo from "../../shared/Tipo";
import Entidade , { EntidadeProps } from "../../shared/Entidade";
import Valor from "../../shared/Valor";
import Status from "../../shared/Status";

export interface TransacaoProps extends EntidadeProps{
    descricao: string,
    criadoEm: Date,
    tipo: string,
    valor: any,
    status: string
}

export default class Transacao extends Entidade<Transacao, TransacaoProps> {
    readonly descricao: Descricao
    readonly criadoEm: Data
    readonly tipo: Tipo
    readonly valor: Valor
    readonly status: Status

    constructor(props: TransacaoProps) {
        super(props)

        this.descricao = new Descricao(props.descricao!, 'descricao', 'Transacao')
        this.criadoEm = new Data(props.criadoEm, 'criadoEm', 'Transacao')
        this.tipo = new Tipo(props.tipo, 'tipo', 'Transacao')
        this.valor = new Valor(props.valor, 'valor', 'Transacao')
        this.status = new Status(props.status, 'status', 'Transacao')
    }
}