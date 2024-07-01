import { BASE_URL } from "../../../constants";
import Api from "../../api/Api";
import Terminal from "../util/Terminal";

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

  try {
    const api = new Api(BASE_URL);
    await api.post("/transacao/registrar", {
      value,
      description,
      type,
      status,
    });
    Terminal.success("Usuário registrado com sucesso!");
  } catch (error) {
    Terminal.erro(JSON.stringify(error, null, 2));
  } finally {
    await Terminal.waitEnter();
  }

}
