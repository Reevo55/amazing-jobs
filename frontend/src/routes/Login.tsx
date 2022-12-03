import DefaultLayout from "../layouts/DefaultLayout";
import MyInput from "../components/inputs/MyInput";
import MyButton from "../components/buttons/MyButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/Form.css';

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(email + pass)
  }

  return (
    <DefaultLayout>
      <h1 className="mt-5 font-bold text-center text-4xl">Zaloguj się i znajdź wymarzoną pracę !</h1>
      
        <form className="login-form mt-8" onSubmit={handleSubmit}>

          <MyInput className='mt-5' value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Wpisz email" id="email" name="email"/>

          <MyInput className='mt-5' value={pass}  onChange={(e) =>setPass(e.target.value)} type="password" placeholder="Wpisz hasło" id="password" name="password"/>
      
          <MyButton className='mt-7' >Zaloguj się</MyButton>
        
        </form>
        <div className="text-center mt-5" >
          <Link
            to={"/register"}
            className={`hover:underline bg-secondary text-white px-6 py-2 rounded-lg `}
          > 
          Nie masz jeszcze konta? Zarejestruj się!
          </Link>
        </div>
    
    </DefaultLayout>
  );
}

export default Login;