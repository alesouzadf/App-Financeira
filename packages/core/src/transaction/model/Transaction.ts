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
}

export default class Transaction extends Entidade<Transaction, TransactionProps> {
    readonly id: number = 0
    readonly value: Valor
    readonly description: TextoSimples
    readonly type: TipoTransacao
    readonly status: StatusTransacao
    readonly createdAt: Date = new Date()

    constructor(props: TransactionProps){
      super(props)
      this.value = new Valor(props.value!, 'valor', 'Transaction')
      this.description = new TextoSimples(props.description!, 5, 100, 'description', 'Transaction')
      this.type = new TipoTransacao()
      this.status = new StatusTransacao()
    }
} 
