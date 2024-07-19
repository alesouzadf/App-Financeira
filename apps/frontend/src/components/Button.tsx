interface ButtonProps {
  color?:
    | "green"
    | "blue"
    | "gray"
    | "red"
    | "yellow"
    | "slate"
    | "purple"
    | "cyan";
  className?: string;
  widthFull?: boolean;
  children: any;
  padding?: string;
  rounded?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? "";
  return (
    <button
      onClick={props.onClick}
      className={`
            cursor-pointer
            bg-gradient-to-r from-${color ?? color}-900 to-${color ?? color}-600
            text-white ${props.widthFull ? "w-full" : ""} 
            ${props.padding ? props.padding : "px-4 p-2"}
            ${props.rounded ? props.rounded : "rounded-md"}
            ${props.className ?? props.className}
        `}
    >
      {props.children}
    </button>
  );
}
