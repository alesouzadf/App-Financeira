import Form from "@/components/Form";
import Layout from "@/components/Layout";

export default function New() {
  return (
    <Layout
      title="Adicionar Transação"
      className="flex flex-col justify-center items-center h-auto sm:h-[95vh]"
    >
      <Form />
    </Layout>
  );
}
