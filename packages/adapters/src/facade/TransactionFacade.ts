import {
  Transaction,
  RepositorioTransaction,
  RegistrarTransaction,
  ListarTransaction,
  FiltrarTransaction,
  PegarTransactionById,
  EditarTransaction,
  ExcluirTransaction,
} from "core";
import {TransactionDTO, FiltroDTO} from "../dto";
import PegarPorIdDTO from "../dto/PegarPorIdDTO";

export default class TransactionFacade {
  constructor(private readonly repo?: RepositorioTransaction) {}

  async registrar(dto: TransactionDTO): Promise<void> {
    const casoDeUso = new RegistrarTransaction(this.repo!);
    await casoDeUso.executar({
      userId: dto.userId!,
      value: dto.value!,
      description: dto.description!,
      type: dto.type!,
      status: dto.status!,
    });
  }

  async listar(userId: number): Promise<Transaction[]> {
    const casoDeUso = new ListarTransaction(this.repo!);
    const transaction = casoDeUso.executar(userId);

    return transaction ?? null;
  }

  async pegarPorId(data: PegarPorIdDTO): Promise<Transaction> {
    const casoDeUso = new PegarTransactionById(this.repo!);
    return await casoDeUso.executar(data);
  }

  async editar(
    id: number,
    data: TransactionDTO
  ): Promise<Transaction | boolean> {
    const casoDeUso = new EditarTransaction(this.repo!);
    await casoDeUso.executar({id, ...data});
    return true;
  }

  async excluir(
    userId: number,
    id: number,
  ): Promise<void> {
    const casoDeUso = new ExcluirTransaction(this.repo!);
    await casoDeUso.executar({userId, id});
  }

  async filtrar(data: FiltroDTO): Promise<Transaction[]> {
    const casoDeUso = new FiltrarTransaction(this.repo!);
    const transaction = casoDeUso.executar({...data});

    return transaction ?? null;
  }
}
