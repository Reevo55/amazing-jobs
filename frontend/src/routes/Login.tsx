import DefaultLayout from "../layouts/DefaultLayout";
import MyInput from "../components/inputs/MyInput";
import MyButton from "../components/buttons/MyButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/Form.css';
import { useAppDispatch } from '../hooks';
import { tryLoggingAndRedirect } from "../store/thunks/login";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const user_id = localStorage.getItem('user_id');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const data = { 
      email: email,
      password: pass,
    };

    console.log("Zaloguj się: " + email + pass)
    dispatch(tryLoggingAndRedirect(data, 'login'))
  }

  const logoutSubmit = (e:any) => {
    e.preventDefault();
    localStorage.removeItem("user_id");
    navigate("/");
  }

  return (
    <DefaultLayout>
      {user_id ? (
        <>
          <h1 className="font-bold text-center text-4xl mt-5">Użytkownik jest już zalogowany. Chcesz się wylogować ?</h1>
          <div className="col-md-12 text-center">
          <MyButton className='mt-7 btn-lg' onClick={logoutSubmit} >Wyloguj się</MyButton>
          </div>
        </>
      ):(
        <>
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
        </>
      )}
    
     
    
    
    </DefaultLayout>
  );
}

export default Login;