import {useRouter} from "next/router";
import Button from "./Button";
import Request from "@/core/Request";

interface ModalProps {
  visible: boolean;
}

export default function Modal(props: ModalProps) {
  const router = useRouter();
  const token = Request.headers.authorization?.replace("Bearer ", "")
  // const arrayToken = token!.split('.')
  // const tokenPayload = JSON.parse(atob(arrayToken[1]))
  return (
    <div
      className={`self-end absolute top-28 z-30 bg-zinc-800 rounded-md p-4 space-y-5 ${props.visible ? "inline" : "hidden"}`}
    >
      <h4>{"Nome Usuário"}</h4>
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
