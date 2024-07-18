import Button from "@/components/Button";
import {useState} from "react";
import Request from "@/core/Request";
import {useRouter} from "next/router";
import Input from "@/components/Input";
import useAuth from "@/hooks/useAuth";
import Load from "@/components/Load";

export default function Auth() {
  const router = useRouter();
  const [action, setAction] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {setLogged} = useAuth();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const dataToCheck = {email, password};
    try {
      const response = await Request.post("/user/login", dataToCheck);
      if (response.token) {
        Request.addToken(response.token);
        setLogged(true);
        router.push("/Dashboard");

        return;
      }
      window.alert("Usuário ou senha incorretos");
      setLoading(false);
    } catch (error) {
      window.alert(error);
    }
  };

  const handleCreateUser = async (event: any) => {
    event.preventDefault();
    const dataToCheck = {name, email, password};
    try {
      const response = await Request.post("/user/registrar", dataToCheck);
      console.log(response);
      if (response.status) {
        alert(
          "Erro ao cadastar! Verifique os dados ou confirme se já tem perfil criado"
        );

        return;
      }
      setName("");
      setEmail("");
      setPassword("");
      setAction("login");
      setLoading(false);
    } catch (error) {}
  };

  function handleRequest(event: any) {
    setLoading(true);
    if (action === "login") {
      handleLogin(event);
      return;
    }
    handleCreateUser(event);
  }

  function handleClickBtnLogin() {
    setAction("login");
    setEmail("");
    setPassword("");
  }

  function handleClickBtnCreate() {
    setAction("registar");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <section className="flex flex-col justify-center items-center  h-screen bg-zinc-800">
      <h2 className="text-3xl font-semibold p-6 text-zinc-200">
        {action === "login" ? "Fazer Login" : "Criar conta"}
      </h2>
      <div
        className={`flex items-center justify-center  w-[95vw] max-w-[500px] p-8 rounded-md`}
      >
        <div className="w-full ">
          <div className="flex gap-6 mb-6 justify-between">
            <Button color="green" onClick={handleClickBtnLogin} widthFull>
              Login
            </Button>
            <Button
              color="cyan"
              className="bg-cy"
              onClick={handleClickBtnCreate}
              widthFull
            >
              Registar
            </Button>
          </div>
          <form
            onSubmit={handleRequest}
            method="post"
            action="/"
            className="flex flex-col align-center"
          >
            {action !== "login" ? (
              <Input
                label="name"
                text="Nome"
                value={name}
                minlength={3}
                valueChange={setName}
              />
            ) : (
              ""
            )}
            <Input
              label="email"
              text="Email"
              type="email"
              value={email}
              valueChange={setEmail}
            />
            <Input
              label="password"
              text="Senha"
              type="password"
              minlength={6}
              value={password}
              valueChange={setPassword}
            />
            <Button
              color={action === "login" ? "green" : "cyan"}
              className={`mt-4 ${loading ?? "pointer-events-none"}`}
            >
              {action === "login" ? "Login" : "Criar"}
            </Button>
          </form>
          <Load loading={loading} />
        </div>
      </div>
    </section>
  );
}
