import CasoDeUso from "../../shared/CasoDeUso";
import Transaction from "../model/Transaction";
import RepositorioTransaction from "../provider/RepositorioTransaction";

type Input = {
  userId: number;
  id: number;
};

export default class PegarTransactionById
  implements CasoDeUso<Input, Transaction>
{
  constructor(private readonly repository: RepositorioTransaction) {}

  async executar(data: Input): Promise<Transaction> {
    const {userId, id} = data;
    const transaction = await this.repository.obterPorId(userId, id);
    return transaction ?? null;
  }
}
