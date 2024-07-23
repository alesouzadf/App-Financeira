import {createContext, useState} from "react";

const AuthContext = createContext({} as any);

export function AuthProvider(props: any) {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({name: "", email: ""});

  const ctx = {logged, setLogged, userData, setUserData};
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
