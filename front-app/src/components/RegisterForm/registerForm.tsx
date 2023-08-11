import { useAuth } from "@/contexts/usersContext";
import { UserData, userSchema } from "@/schemas/usersSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {register, handleSubmit} = useForm<UserData>({
    resolver: zodResolver(userSchema)
  })

  const {registerUser} = useAuth()

  const registerOnSubmit = (data: UserData) => {
    registerUser(data)
  }

  const router = useRouter();
  return (
    <form className="form-user" onSubmit={handleSubmit(registerOnSubmit)}>
      <h1 className="titles">Cadastro</h1>
      <div className="input-label">
        <label htmlFor="name" className="text-sm text-slate-600">
          Nome
        </label>
        <input type="text" id="name" className="input" {...register("name")} />
      </div>
      <div className="input-label">
        <label htmlFor="email" className="text-sm text-slate-600">
          Email
        </label>
        <input type="email" id="email" className="input" {...register("email")} />
      </div>
      <div className="input-label">
        <label htmlFor="phone" className="text-sm text-slate-600">
          Telefone
        </label>
        <input type="tel" id="phone" className="input" {...register("phone_number")} />
      </div>
      <div className="input-label">
        <label htmlFor="password" className="text-sm text-slate-600">
          Senha
        </label>
        <input type="password" id="password" className="input" {...register("password")} />
      </div>
      <button className="button">Cadastrar</button>
      <p className={"text-base self-center font-semibold"}>Ou</p>
      <button
        className={
          "button border-2 bg-slate-100 text-slate-950 border border-slate-950 enabled:hover:bg-slate-950 enabled:hover:text-slate-100"
        }
        type="reset"
        onClick={() => {
          router.push("/");
        }}
      >
        Login
      </button>
      
    </form>
  );
};

export default RegisterForm;
