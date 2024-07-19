import {
  IconChevronRight,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import useItem from "@/hooks/useItem";
import getNameMonth from "@/data/months";
import Load from "./Load";
import {useState} from "react";
import Image from "next/image";
import Button from "./Button";
import {useRouter} from "next/navigation";

interface CardProps {
  data: any;
}

export default function Card(props: CardProps) {
  const {data} = props;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  function formatedDate(date: string) {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = getNameMonth(newDate.getMonth());
    const year = newDate.getFullYear();
    const formatted = `${day} ${month} ${year}`;
    return formatted;
  }

  function currencyFormat(currency: number) {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(currency);
  }

  function renderData() {
    if (!data) {
      return <Load loading={loading} className="text-center" />;
    }

    if (data?.length === 0) {
      return (
        <div className="container m-auto flex flex-col justify-center items-center mt-20 gap-8">
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

    return data.map((item: any) => {
      return (
        <div
          key={item.id}
          className="flex justify-between bg-zinc-900 w-full p-4 rounded-md "
        >
          <div className="flex  items-center gap-4">
            <p>{`#${item.id}`}</p>
            <p className="text-base text-zinc-400">
              {formatedDate(item.createdAt)}
            </p>
            <h3 className="text-base">{item.description}</h3>
          </div>
          <div className="flex items-center gap-4">
            <p className="flex  items-center gap-2">
              {item.type === "RECEITA" ? (
                <IconTrendingUp className="text-green-500" />
              ) : (
                <IconTrendingDown className="text-red-500" />
              )}
              {currencyFormat(item.value)}
            </p>
            <p
              className={`px-3 py-1 rounded-sm text-sm font-medium capitalize w-36 text-center list-item list-inside
              ${item.status === "CANCELADO" ? "bg-red-950 text-red-400 " : ""}
              ${item.status === "CONSOLIDADO" ? "bg-green-950 text-green-400 " : ""} 
              ${item.status === "PENDENTE" ? "bg-yellow-950 text-yellow-400" : ""}
              `}
            >
              {item.status}
            </p>
            <Button onClick={() => router.push(`/Edit/${item.id}`)}>
              <IconChevronRight />
            </Button>
          </div>
        </div>
      );
    });
  }
  return renderData();
}
