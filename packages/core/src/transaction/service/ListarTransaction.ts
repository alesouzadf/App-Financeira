import CasoDeUso from "../../shared/CasoDeUso";
import Transaction from "../model/Transaction";
import RepositorioTransaction from "../provider/RepositorioTransaction";

export default class ListarTransaction implements CasoDeUso<number, Transaction[]> {
  constructor(private readonly repository: RepositorioTransaction) { }

  async executar(userId: number): Promise<Transaction[]> {
    return await this.repository.buscarTudo(userId) ?? null
  }
}
