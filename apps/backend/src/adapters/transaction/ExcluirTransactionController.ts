import {TransactionFacade} from "adapters";
import {RepositorioTransaction} from "core";
import {Express} from "express";
import Erros from "../../utils/Erros";

export default class ExcluirTransactionController {
  constructor(
    readonly servidor: Express,
    readonly repo: RepositorioTransaction,
    ...middleware: any[]
  ) {
    servidor.delete(
      "/transaction/excluir/:id",
      ...middleware,
      async (req, res) => {
        try {
          const id = +req.params.id;
          const userId = (req as any).usuario.id;
          const facade = new TransactionFacade(repo);
          await facade.excluir(userId, id);
          res.status(200).json({message: "Transação excluida!"});
        } catch (e: any) {
          res.status(400).send(Erros.tratar(e));
        }
      }
    );
  }
}
