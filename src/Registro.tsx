import './App.css'
import "./auth/auth.css"
import { postJson } from "../lib/fetch.ts";

function App() {
  async function OnsubmitForm(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault()

    console.log("Estamos trabajando en tu registro!", event)
    const data= new FormData(event.target)
    const submitValue: Record<string, any> = {}
    
    for(const [key, value] of data.entries()){
      
      submitValue[key]=value
    }
    const response = await postJson("http://localhost:3000/register", submitValue)
    return false
  }
  return (
    <>
      <form action="/register" onSubmit={OnsubmitForm} method="post">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="user_name" />
      
        <label htmlFor="mail">Correo electrónico:</label>
        <input type="email" id="mail" name="user_mail" />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password"/>

        <label htmlFor="passwordConfirm">Confirma contraseña:</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" />
      
        <div>

          <button type="submit">Registrarme</button>
        </div>
  
      </form>
      
    </>
  )
}

export default App
