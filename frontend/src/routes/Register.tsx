import DefaultLayout from "../layouts/DefaultLayout";
import MyInput from "../components/inputs/MyInput";
import MyButton from "../components/buttons/MyButton";
import React, { useState } from "react";
import '../assets/Form.css';

function Register() {
  const [first_name, setFirstName] = useState("");
  const [second_name, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [localization, setLocalization] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(email + " " + pass + " " + first_name + " " +  second_name + " " + localization) 
  }

  return (
    <DefaultLayout>
    <h1 className="mt-5 font-bold text-center text-4xl">Zarejestruj się i znajdź wymarzoną pracę !</h1>
    
      <form className="login-form mt-8" onSubmit={handleSubmit}>

        <MyInput className='mt-5' value={first_name} onChange={(e) =>setFirstName(e.target.value)} type="first_name" placeholder="Wpisz imię" id="first_name" name="first_name"/>
        <MyInput className='mt-5' value={second_name} onChange={(e) =>setSecondName(e.target.value)} type="second_name" placeholder="Wpisz nazwisko" id="second_name" name="second_name"/>
        <MyInput className='mt-5' value={localization} onChange={(e) =>setLocalization(e.target.value)} type="second_name" placeholder="Podaj swoje miasto" id="localization" name="localization"/>
        <MyInput className='mt-5' value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Wpisz email" id="email" name="email"/>
        <MyInput className='mt-5' value={pass}  onChange={(e) =>setPass(e.target.value)} type="password" placeholder="Wpisz hasło" id="password" name="password"/>
    
        <MyButton className='mt-5' >Zarejestruj się</MyButton>
      
      </form>  
  </DefaultLayout>
  );
}

export default Register;
