import {IconCurrency, IconCurrencyDollar, IconCurrencyReal} from "@tabler/icons-react";
import Logo from "./Logo";
import Menu from "./Menu";

interface SidebarProps {
  className?: string;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div
      className={`absolute sm:static 
    sm:flex flex-col z-30  bg-zinc-900
    ${props.className}`}
    >
      <div className="bg-purple-500 h-36 rounded-r-3xl flex justify-center items-center">
        <IconCurrencyDollar size={80} stroke={3} className="text-white rotate-12"/>
      </div>
    </div>
  );
}
