import {TransactionFacade} from "adapters";
import {RepositorioTransaction} from "core";
import {Express} from "express";
import Erros from "../../utils/Erros";

export default class EditarTransactionController {
  constructor(
    readonly servidor: Express,
    readonly repo: RepositorioTransaction,
    ...middleware: any[]
  ) {
    servidor.post(
      "/transaction/editar/:id",
      ...middleware,
      async (req, res) => {
        try {
          const id = +req.params.id;
          const userId = (req as any).usuario.id;
          const {value, description, type, status} = req.body;
          const facade = new TransactionFacade(repo);
          await facade.editar(id, {
            value,
            description,
            type,
            status,
            userId,
          });
          res.status(201).json({message: "Transação atualizada!"});
        } catch (e: any) {
          res.status(400).send(Erros.tratar(e));
        }
      }
    );
  }
}
