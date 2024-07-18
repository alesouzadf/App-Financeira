export default function Title(props: any) {
  return (
    <h1 className="py-4 text-3xl font-bold text-white">
      {props.children}
    </h1>
  );
}
