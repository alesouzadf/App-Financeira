import {useEffect, useState} from "react";
import Button from "./Button";
import Input from "./Input";
import useItem from "@/hooks/useItem";
import {useRouter} from "next/router";
import Select from "./Select";
import {statusSelect} from "@/data/status";
import {typeSelect} from "@/data/type";

interface FormProps {
  id?: string;
}

export default function Form(props: FormProps) {
  const router = useRouter();
  const {saveItem, getById, getAll} = useItem();
  const id = props.id ?? "";
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    (async () => {
      if (props.id) {
        console.log(props.id);
        const item = await getById(props.id);
        console.log(item);
        setDescription(item.description);
        setValue(item.value);
        setType(item.type);
        setStatus(item.status);
      }
    })();
  }, []);

  const handleSave = async () => {
    await saveItem(description, value, type, status, id);
    router.push("/Dashboard");
    getAll();
  };

  return (
    <div className="w-[95vw] max-w-[500px] m-auto space-y-6">
      {id ? (
        <Input label="id" readOnly text="Id" value={id} className="mb-5" />
      ) : (
        false
      )}
      <Input
        label="description"
        text="Descrição"
        minlength={6}
        value={description}
        valueChange={setDescription}
      />
      <Input
        type="number"
        label="value"
        text="Valor Registro"
        placeholder="0,00"
        value={value === 0 ? "0,00" : value}
        valueChange={setValue}
      />

      <Select
        option={
          <option value="" className="text-zinc-400 ">
            Selecione o Tipo
          </option>
        }
        onChange={(event: any) => setType(event.target.value)}
        data={typeSelect}
        nameSelect="type"
        className="w-full border-b"
      />
      <Select
        option={
          <option value="" className="text-zinc-400 ">
            Selecione o Status
          </option>
        }
        onChange={(event: any) => setStatus(event.target.value)}
        data={statusSelect}
        nameSelect="status"
        className="w-full  border-b"
      />

      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2" widthFull onClick={handleSave}>
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button
          color="red"
          widthFull
          onClick={() => {
            router.push("/Dashboard");
          }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}
