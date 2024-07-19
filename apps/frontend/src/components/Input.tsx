import Label from "./Label";

interface InputProps {
  type?: "email" | "password" | "number" | "date";
  text: string;
  value: any;
  name?: string;
  readOnly?: boolean;
  className?: string;
  label: string;
  minlength?: number;
  placeholder?: string;

  valueChange?: (valor: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <Label text={props.text} label={props.label}  className="mt-2"/>
      <input
        id={props.label}
        type={props.type ?? "text"}
        value={props.value}
        name={props.name}
        minLength={props.minlength}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        required
        onChange={(e) => props.valueChange?.(e.target.value)}
        className={`
                    border-b
                    focus:outline-none bg-transparent px-4 py-2
                `}
      />
    </div>
  );
}
