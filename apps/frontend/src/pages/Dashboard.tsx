import Layout from "@/components/Layout";
import {IconPlus} from "@tabler/icons-react";
import {useRouter} from "next/router";
import useBoolean from "@/hooks/useBoolean";
import Image from "next/image";
import Select from "@/components/Select";
import {statusSelect} from "@/data/status";
import Card from "@/components/Card";

interface LinksProps {}

export default function Links(props: LinksProps) {
  const [activeEdition, toggleActive] = useBoolean(false);
  const router = useRouter();

  function handleRedirectNew() {
    router.push("/New");
  }

  function handleToAllowEdition() {
    toggleActive();
  }

  return (
    <Layout title="Lista de links" className="flex flex-col ">
      <div className="flex justify-around items-center pt-20">
        <div className="flex flex-col ">
          <h1 className="text-5xl font-semibold">Minhas Finanças</h1>
          <p className="text-sm">Você tem 1 registro(s)</p>
        </div>
        <div className="flex gap-4 items-center">
          <Select
            nameSelect="filterByStatus"
            option={<option value="">Filtrar por Status</option>}
            data={statusSelect}
            onChange={() => console.log("Filtrar")}
            className="bg-transparent"
          />
          <button
            className="flex items-center gap-2 bg-purple-600 p-5 rounded-full"
            onClick={handleRedirectNew}
          >
            <IconPlus
              className="bg-zinc-100 text-purple-600 rounded-full p-2"
              size={40}
              stroke={4}
            />
            Novo Registro
          </button>
        </div>
      </div>
      <section className="flex gap-6 flex-wrap  mt-8">
        <Card />
      </section>
    </Layout>
  );
}
