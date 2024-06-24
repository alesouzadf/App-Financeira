import Terminal from "./Terminal";
import Create from "../../backend/src/core/transaction/service/Create";


export default async function createTransaction() {
  Terminal.title("Adiconar transação");

  const description = await Terminal.input("Descrição");
  const value = await Terminal.input("Valor");
  const type = await Terminal.input("Tipo");
  const status = await Terminal.input("Status");

  const input = {
    value: +value,
    description,
    type,
    status,
  };

  console.log(input);


  Terminal.success("Cadastrado com sucesso");
  await Terminal.waitEnter();
}
