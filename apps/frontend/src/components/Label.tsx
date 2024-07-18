interface LabeProps {
  text: string;
  label: string;
  className?: string;
}

export default function Label(props: LabeProps) {
  return (
    <label
      className={`mb-2 text-white ${props.className ?? props.className}`}
      htmlFor={props.label}
    >
      {props.text}
    </label>
  );
}
