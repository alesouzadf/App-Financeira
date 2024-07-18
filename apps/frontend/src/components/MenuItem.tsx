import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
  label: string;
  url: string;
  icon: any;

}

export default function MenuItem(props: MenuItemProps) {
  const router = useRouter();
  const active = props.url === router.asPath
  return (
    <Link
      href={props.url}
      className={`
      flex gap-3 items-center rounded-lg 
      w-full px-4 py-2 text-base mt-3
      hover:bg-zinc-900
      ${active ? "text-blue-700 bg-zinc-900" : "text-zinc-400"}
      `}
    >
      {props.icon}
      <span className={`
      `}>{props.label}</span>
    </Link>
  );
}
