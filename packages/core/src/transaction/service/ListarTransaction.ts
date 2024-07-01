import CasoDeUso from "../../shared/CasoDeUso";
import Transaction from "../model/Transaction";
import RepositorioTransaction from "../provider/RepositorioTransaction";

export default class ListarTransaction implements CasoDeUso<void, Transaction[]> {
  constructor(private readonly repository: RepositorioTransaction) {}
  
  async executar(): Promise<Transaction[]> {
    return await this.repository.buscarTudo() ?? null
  }
}
