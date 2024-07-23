import {useRouter} from "next/router";
import Button from "./Button";
import Request from "@/core/Request";
import useAuth from "@/hooks/useAuth";

interface ModalProps {
  visible: boolean;
}

export default function Modal(props: ModalProps) {
  const router = useRouter();
  const {userData} = useAuth();
  return (
    <div
      className={`self-end absolute top-24 right-24 z-30 bg-zinc-800 rounded-md p-4 space-y-5 min-w-52 ${props.visible ? "inline" : "hidden"}`}
    >
      <div className=" text-base space-x-2 text-center">
        <p>{userData.name}</p>
        <p>{userData.email}</p>
      </div>
      <Button
        color="red"
        widthFull
        onClick={() => {
          Request.deleteToken();
          router.push("/");
        }}
      >
        Sair
      </Button>
    </div>
  );
}
