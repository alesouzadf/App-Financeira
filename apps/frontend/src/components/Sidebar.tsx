import {IconCurrencyDollar, IconCurrencyReal} from "@tabler/icons-react";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div
      className={`absolute  sm:static 
    sm:flex flex-col z-30  bg-zinc-900 
    ${props.className}`}
    >
      <div className="bg-purple-500 h-36 rounded-r-3xl flex justify-center items-center">
        <Image
          src="/assets/Vector.png"
          width={50}
          height={50}
          alt=""
          className="text-white rotate-12"
        />
      </div>
    </div>
  );
}
