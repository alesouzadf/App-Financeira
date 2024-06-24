import {useState} from "react";

export default function Home() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Despesa");
  const [status, setStatus] = useState("Pendente");

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log({
      description,
      value,
      type,
      status,
    });
    const data = {
      description,
      value: Number(value),
      type,
      status,
    };

    const request = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    const response = await fetch("http://localhost:4000", request);
    console.log(response);
  }

  function handleType(event: any) {
    setType(event.target.value);
  }

  function handleStatus(event: any) {
    setStatus(event.target.value);
  }

  return (
    <main>
      <form
        className="flex flex-col max-w-screen-lg px-6"
        onSubmit={handleSubmit}
      >
        <label className="py-2 text-xl" htmlFor="description">
          Descrição
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(event: any) => setDescription(event.target.value)}
          placeholder="Conta de luz"
          className="p-2 border rounded-md"
        />
        <label className="py-2 text-xl" htmlFor="value">
          Valor
        </label>
        <input
          type="number"
          name="value"
          id="value"
          value={value}
          onChange={(event: any) => setValue(event.target.value)}
          className="p-2 border rounded-md"
        />
        <label className="py-2 text-xl rounded-md" htmlFor="type">
          Tipo
        </label>
        <select name="" id="type" className="p-2" onChange={handleType}>
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>
        <label className="py-2 text-xl rounded-md" htmlFor="status">
          Status
        </label>
        <select name="" id="status" className="p-2" onChange={handleStatus}>
          <option value="pendente">Pendente</option>
          <option value="consolidado">Consolidado</option>
          <option value="cancelado">Cancelado</option>
        </select>
        <button className="p-2 mt-4 bg-blue-400 rounded-md">Enviar</button>
      </form>
    </main>
  );
}
