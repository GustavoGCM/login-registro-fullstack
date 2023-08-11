import { Toast } from "@/components/Toast/toast";
import { api } from "@/pages/api/api";
import { LoginData, UserData } from "@/schemas/usersSchemas";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  setToken: (value: string) => void;
  token: string | undefined;
  registerUser: (data: UserData) => void;
  loginUser: (data: LoginData) => void;
}

const authContext = createContext<authProviderData>({} as authProviderData);

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  const registerUser = (data: UserData) => {
    api
      .post("/users", data)
      .then(() => {
        Toast({ message: "Usuário criado com sucesso", success: true });
        router.push("/");
      })
      .catch((err) => {
        Toast({ message: "Informações inválidas", success: false });
        console.log(err);
      });
  };
  const loginUser = (data: LoginData) => {
    api
      .post("/login", data)
      .then((res) => {
        setCookie(null, "@TOKEN", res.data.token, {
          path: "/",
        });
        Toast({ message: "Login efetuado com sucesso", success: true });
        router.push("/dashboard");
      })
      .catch((err) => {
        Toast({ message: "Credenciais inválidas", success: false });
        console.log(err);
      });
  };

  return (
    <authContext.Provider value={{ loginUser, registerUser, setToken, token }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
