import DefaultLayout from "../layouts/DefaultLayout";
import MyInput from "../components/inputs/MyInput";
import MyButton from "../components/buttons/MyButton";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../assets/Form.css';

function Register() {
  const [first_name, setFirstName] = useState("");
  const [second_name, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [localization, setLocalization] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function sendRequest(data:any, endpoint:string) {   
    const full_url = 'http://127.0.0.1:5000/' + endpoint       
    
    try {
      const response = await fetch(full_url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(
          `Server error: The status is ${response.status}`
        );
      }

      let recevied_data = await response.json();
      console.log(recevied_data)
      navigate('/');

    } catch(err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    } 
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const data = { email: email,
                   password: pass,
                   first_name: first_name,
                   second_name: second_name,
                   is_recruiter: false
                 };
    
    sendRequest(data, 'register')
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
