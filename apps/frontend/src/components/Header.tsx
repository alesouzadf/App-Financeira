import Title from "./Title";

interface HeaderProps {
  title: string;
  icon?: any;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="h-20 flex justify-between text-center px-16 py-2 border-b border-zinc-500">
      <Title>{props.title}</Title>
      {props.icon}
    </header>
  );
}
