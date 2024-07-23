import {TransactionFacade} from "adapters";
import {RepositorioTransaction} from "core";
import {Express} from "express";
import Erros from "../../utils/Erros";

export default class PegarTransactionByIdController {
  constructor(
    readonly servidor: Express,
    readonly repo: RepositorioTransaction,
    ...middleware: any[]
  ) {
    servidor.get("/transaction/:id", ...middleware, async (req, res) => {
      try {
        const userId = (req as any).usuario.id;
        const id = +req.params.id;
        const facade = new TransactionFacade(repo);
        const transaction = await facade.pegarPorId({userId, id});
        res.status(200).json(transaction.props);
      } catch (e: any) {
        res.status(400).send(Erros.tratar(e));
      }
    });
  }
}
