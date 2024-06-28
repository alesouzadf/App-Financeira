import {Express, Request, Response} from "express";
import Create from "../core/transaction/service/Create";

export default class CreateController {
  constructor(
    readonly server: Express,
    useCase: Create
  ) {
    server.post("/", async (req: Request, res: Response) => {
      const {value, description, type, status} = req.body;
      const transaction = await useCase.toExecute({
        value,
        description,
        type,
        status,
      });

      if (description.length == "") {
        res.status(401).json("Descrição não pode ser vazia");
        return;
      }

      if (value === 0) {
        res.status(401).json("O valor não pode ser 0");
        return;
      }

      if (type != "Receita" && type != "Despesa") {
        res.send("O campo tipo só recebe o valor 'Despesa' ou 'Receita'");
        return;
      }

      if (
        status != "Pendente" &&
        status != "Consolidado" &&
        status != "Cancelado"
      ) {
        res.send(
          "Esses são os valores possíveis para o campo 'Status': Pendente, Consolidado, Cancelado"
        );
        return;
      }

      if (!transaction) {
        res.status(204).send("Problema ao cadastrar");
      }
      console.log(transaction);
      res.status(200).send(`Cadastrada`);
    });
  }
}
