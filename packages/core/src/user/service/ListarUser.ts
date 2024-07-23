import CasoDeUso from "../../shared/CasoDeUso";
import User from "../model/User";
import RepositoryUser from "../provider/RepositoryUser";

export default class ListarUser implements CasoDeUso<void, User[]> {
  constructor(private readonly repository: RepositoryUser) {}
  
  async executar(): Promise<User[]> {
    return await this.repository.buscarTudo() ?? null
  }
}
