import StatusTransacao from "../../shared/StatusTransacao";
import TextoSimples from "../../shared/TextoSimples";
import TipoTransacao from "../../shared/TipoTransacao";
import Valor from "../../shared/Valor";

export interface TransactionProps {
  value?: number
  description?: string
  createdAt?: Date
  type?: string
  status?: string
}

export default class Transaction {
    readonly value: Valor
    readonly description: TextoSimples
    readonly createdAt: Date
    readonly type: TipoTransacao
    readonly status: StatusTransacao
  props: any;

    constructor(props: TransactionProps){
      this.value = new Valor(props.value!, 'valor', 'Transaction')
      this.description = new TextoSimples(props.description!, 5, 100, 'description', 'Transaction')
      this.createdAt = new Date()
      this.type = new TipoTransacao()
      this.status = new StatusTransacao()
    }
} 
