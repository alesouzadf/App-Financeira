interface SelectProps {
  valueSelect: string;
  onChange: (event: any) => void;
  data: any;
  className?: string;
  option: any;
  secondOption?: any;
  nameSelect: string;
}

export default function Select(props: SelectProps) {
  return (
    <>
      <select
        value={props.valueSelect}
        name={props.nameSelect}
        id={props.nameSelect}
        onChange={props.onChange}
        className={` focus:outline-none p-2 ${
          props.className ?? props.className
        }`}
        required
      >
        {props.option}
        {props.secondOption}
        {props.data.map((item: any, index: number) => (
          <option key={index} value={item.value} className={`bg-${item.value}`}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
}
