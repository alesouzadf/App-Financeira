import Layout from "@/components/Layout";
import {IconPlus, IconUser} from "@tabler/icons-react";
import {useRouter} from "next/router";
import Select from "@/components/Select";
import {statusSelect} from "@/data/status";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {useState} from "react";
import useItem from "@/hooks/useItem";
import Modal from "@/components/Modal";
import useBoolean from "@/hooks/useBoolean";

interface LinksProps {}

export default function Links(props: LinksProps) {
  const {items, filterByStatus, getAll} = useItem();
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useBoolean(false);
  const router = useRouter();

  function handleRedirectNew() {
    router.push("/New");
  }

  function handleFilter(e: any) {
    const inputStatus = e.target.value;
    if (!inputStatus) {
      setStatus("");
      getAll();
      return;
    }
    setStatus(inputStatus);
    filterByStatus(inputStatus);
  }

  return (
    <Layout title="Lista de links" className="flex flex-col">
      <Button
        color="zinc"
        rounded="rounded-full"
        className="flex items-center justify-center self-end h-16 w-16 rounded-full mr-14"
        onClick={setVisible}
      >
        <IconUser size={30} />
      </Button>
      <Modal visible={visible} />
      <div className="flex justify-between items-center p-10 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-semibold">Minhas Finanças</h1>
          <p className="text-sm">{`Você tem ${items?.length} registro(s)`}</p>
        </div>
        <div className="flex gap-4 items-center">
          <Select
            valueSelect={status}
            nameSelect="filterByStatus"
            option={<option value="">Filtrar por Status</option>}
            data={statusSelect}
            onChange={handleFilter}
            className="bg-transparent"
          />
          <Button
            color="purple"
            rounded="rounded-full"
            padding="p-5"
            className="flex items-center gap-2"
            onClick={handleRedirectNew}
          >
            <IconPlus
              className="bg-zinc-100 text-purple-600 rounded-full p-2"
              size={40}
              stroke={4}
            />
            Novo Registro
          </Button>
        </div>
      </div>
      <section className="flex gap-6 flex-wrap  p-10">
        <Card data={items} />
      </section>
    </Layout>
  );
}
