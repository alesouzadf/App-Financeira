import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Collection from "../core/Collection";

export default function useItem() {
  const router = useRouter();
  const repo = new Collection();

  const [items, setItem] = useState<any[]>();

  useEffect(() => {
    (async () => {
      getAll();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAll() {
    const data = await repo.getAll();
    if (data[0].codigo) {
      router.push("/");
      return;
    }
    setItem(data);
  }

  async function getById(id: string) {
    const product = await repo.getById(id);
    return product;
  }

  async function deleteItem(id: string) {
    await repo.delete(id);
    getAll();
  }

  async function saveItem(
    description: string,
    value: number,
    type: string,
    status: string,
    id: string
  ) {
    await repo.save(description, value, type, status, id);
    getAll();
  }

  return {
    items,
    saveItem,
    deleteItem,
    getAll,
    getById,
  };
}
