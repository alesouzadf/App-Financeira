import CasoDeUso from "../../shared/CasoDeUso";
import Transaction from "../model/Transaction";
import RepositorioTransaction from "../provider/RepositorioTransaction";

type Entrada = {
  userId: number;
  status: string;
};

export default class FiltrarTransaction implements CasoDeUso<Entrada, Transaction[]> {
  constructor(private readonly repository: RepositorioTransaction) { }

  async executar(entrada: Entrada): Promise<Transaction[]> {
    const {userId, status} = entrada;
    return await this.repository.filtrarPorStatus(status, userId) ?? null
  }
}
