import Entidade from "../../shared/Entidade";
import StatusTransacao from "../../shared/StatusTransacao";
import TextoSimples from "../../shared/TextoSimples";
import TipoTransacao from "../../shared/TipoTransacao";
import Valor from "../../shared/Valor";

export interface TransactionProps {
  id?: number
  value?: number
  description?: string
  type?: string
  status?: string
  createdAt?: Date
  userId: number
}


export default class Transaction extends Entidade<Transaction, TransactionProps> {
  readonly id: number
  readonly value: Valor
  readonly description: TextoSimples
  readonly type: TipoTransacao
  readonly status: StatusTransacao
  readonly createdAt: Date = new Date()
  readonly userId: number

  constructor(props: TransactionProps) {
    super(props)
    this.id = props.id ?? 0
    this.value = new Valor(props.value!, 'valor', 'Transaction')
    this.description = new TextoSimples(props.description!, 5, 100, 'description', 'Transaction')
    this.type = new TipoTransacao(props.type!, 'type', 'Transaction')
    this.status = new StatusTransacao(props.status!, 'status', 'Transaction')
    this.userId = props.userId ?? 0
  }
} 
