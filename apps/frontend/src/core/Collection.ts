import Request from "./Request";

export default class Collection {
  async save(
    description: string,
    value: number,
    type: string,
    status: string,
    id: string
  ) {
    let data;
    if (id) {
      data = await Request.put(`/transaction/editar/${id}`, {
        description,
        value,
        type,
        status,
        id,
      });
    } else {
      data = await Request.post("/transaction/registrar", {
        description,
        value: Number(value),
        type,
        status,
      });
    }
    return data;
  }

  async delete(id: string) {
    await Request.delete(`/transaction/excluir/${id}`);
  }

  async getAll() {
    const data = await Request.get(`/transaction/listar`);
    return data;
  }

  async getByStatus(status: string) {
    const data = await Request.get(`/transaction/filtrar/${status}`);
    return data;
  }

  async getById(id: string) {
    const data = await Request.get(`/transaction/${id}`);
    return data;
  }
}
