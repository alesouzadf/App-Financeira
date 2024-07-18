import {createContext, useState} from "react";

const AuthContext = createContext({} as any);

export function AuthProvider(props: any) {
  const [logged, setLogged] = useState(false);

  const ctx = {logged, setLogged};
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
