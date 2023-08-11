import { useAuth } from "@/contexts/usersContext";
import { LoginData, loginSchema } from "@/schemas/usersSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "console";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


const LoginForm = () => {
  const {register, handleSubmit} = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  })

  const {loginUser} = useAuth()
  const router = useRouter();

  const onLoginSubmit = (data: LoginData) => {
    loginUser(data)
  }
  return (
    <form className="form-user" onSubmit={handleSubmit(onLoginSubmit)}>
      <h1 className="titles">Login</h1>
      <div className="input-label">
        <label htmlFor="email" className="text-sm text-slate-600">
          Email
        </label>
        <input type="email" id="email" className="input" {...register("email")} />
      </div>
      <div className="input-label">
        <label htmlFor="password" className="text-sm text-slate-600">
          Senha
        </label>
        <input type="password" id="password" className="input" {...register("password")}/>
      </div>
      <button
        className={"text-xs self-end mr-1 hover:text-sky-900 font-semibold"}
      >
        Esqueci minha senha
      </button>
      <button className="button">Entrar</button>
      <p className={"text-base self-center font-semibold"}>Ou</p>
      <button
        className={
          "button border-2 bg-slate-100 text-slate-950 border border-slate-950 enabled:hover:bg-slate-950 enabled:hover:text-slate-100"
        }
        type="reset"
        onClick={() => {
          router.push("/register");
        }}
      >
        Cadastrar-se
      </button>
    </form>
  );
};

export default LoginForm;
