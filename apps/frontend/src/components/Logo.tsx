import {IconBrandReact, IconBrandTailwind} from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="h-20 flex items-center px-8 py-2 font-black  border-b border-zinc-500">
      <span className="text-4xl py-3 text-white">Mural</span>
    </Link>
  );
}
