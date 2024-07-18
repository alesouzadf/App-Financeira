import {IconLoader, IconLoader2, IconLoader3} from "@tabler/icons-react";
import {useState} from "react";

interface LoadProps {
  loading?: boolean;
  className?: string;
}

export default function Load(props: LoadProps) {
  return (
    <div className={props.loading ? "mt-4 flex justify-center w-full" : "hidden"}>
      <IconLoader
        className={`animate-spin text-white ${
          props.className ?? props.className
        }`}
        size={40}
      />
    </div>
  );
}
