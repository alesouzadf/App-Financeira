import {Express} from "express";
import GetAll from "../../../../packages/core/src/transaction/service/GetAll";
export default class GetAllController {
  constructor(
    readonly server: Express,
    useCase: GetAll
  ) {
    server.get("/", async (req, res) => {
      const transactions = await useCase.toExecute();
      res.status(200).send(transactions);
    });
  }
}
