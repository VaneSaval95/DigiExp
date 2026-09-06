import { postJson } from "../lib/fetch.ts";
import "./App.css";
import "./auth/auth.css";
import { formToObject } from "./utils/form.ts";

export default function Login() {
    async function OnsubmitForm(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault()
    
        const submitValue= formToObject(event.target)
        const response = await postJson("http://localhost:3000/"+event.target.action, submitValue)
        return false
      }
  return (
    <form action="/login" onSubmit={OnsubmitForm} method="post">
      <label htmlFor="correo">Correo electrónico:</label>
      <input type="email" id="correo" name="correo" required />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" />

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
