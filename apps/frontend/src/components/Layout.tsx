import Head from "next/head";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: any;
  title: string;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="App Financieira" />
        <meta name="keywords" content="" />
        <meta name="author" content="TechTitans" />
        <title>App Financeira</title>
      </Head>
      <main className="bg-black flex min-h-screen">
        <Sidebar className="min-h-screen w-36" />
        <section className="flex flex-col w-full">
          <div
            className={` px-16 py-10 text-xl
           bg-black text-zinc-100
            ${props.className ?? props.className}`}
          >
            {props.children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
