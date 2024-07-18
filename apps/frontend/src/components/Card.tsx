import {
  IconChevronRight,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import useItem from "@/hooks/useItem";
import Load from "./Load";
import {useState} from "react";
import Image from "next/image";

interface CardProps {
  // allowEdition: boolean;
}

export default function Card(props: CardProps) {
  const {items, deleteItem} = useItem();
  const [loading, setLoading] = useState(true);

  console.log(items);

  function renderData() {
    if (!items) {
      return <Load loading={loading} className="text-center" />;
    }

    if (items?.length === 0) {
      return (
        <div className=" flex flex-col justify-center items-center mt-20 gap-8">
          <Image
            src="/assets/vazio.png"
            width={400}
            height={400}
            alt="Imagem da tela Inicial"
            className=""
          />
          <div className="text-center max-w-96 text-zinc-500">
            <h2 className="text-3xl font-semibold py-3">Nada para Mostrar</h2>
            <p className="text-base ">
              Clique no botão{" "}
              <span className="font-semibold ">Novo Registro</span> para
              adicionar receitas ou despesas
            </p>
          </div>
        </div>
      );
    }

    return items.map((item) => {
      return (
        <div
          key={item.id}
          className="flex justify-between bg-zinc-900  w-[65vw] m-auto p-4 rounded-md "
        >
          <div className="flex  gap-4">
            <p>{item.id}</p>
            <p>{item.createdAt}</p>
            <h3>{item.description}</h3>
          </div>
          <div className="flex  gap-4">
            <p className="flex  items-center gap-2">
              {item.type === "RECEITA" ? (
                <IconTrendingUp className="text-green-500" />
              ) : (
                <IconTrendingDown className="text-red-500" />
              )}
              {item.value}
            </p>
            <p
              className={`px-3 py-1 rounded-sm text-sm font-medium capitalize 
              ${item.status === "CANCELADO" ? "bg-red-950 text-red-400 " : ""}
              ${item.status === "CONSOLIDADO" ? "bg-green-950 text-green-400 " : ""} 
              ${item.status === "PENDENTE" ? "bg-yellow-950 text-yellow-400" : ""}
              `}
            >
              {item.status}
            </p>
            <button>
              <IconChevronRight />
            </button>
          </div>
        </div>
      );
    });
  }
  return renderData();
}
