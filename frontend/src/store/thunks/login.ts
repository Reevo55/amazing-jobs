import {onIsLoadingChange} from "../actions/profile";
import {Dispatch} from "redux";
import { onShowStatusMessage } from '../actions/statusMessage'
import { MessageType } from '../../types/types'

export const tryLoggingAndRedirect = (data:any, endpoint:string) => {
    
  return (dispatch: Dispatch) => {  

    dispatch(onIsLoadingChange(true))
    const full_url = 'http://127.0.0.1:5000/' + endpoint     
    
    fetch(full_url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })    
    .then((response) => {
      if(response.status === 200){
          return response.json();     
      }else if(response.status !== 200){
          dispatch(onShowStatusMessage('Błąd', 'Niepoprawny email lub hasło. Spróbuj jeszcze raz lub załóż konto.', MessageType.failure))
          throw Error("User not found")
      }
    })
    .then((response) => {
       localStorage.setItem("user_id", JSON.stringify(response));} )  
    .then(() => window.top!.location = "/")
    .catch((error) => console.log(error))  
    .finally(() => dispatch(onIsLoadingChange(false)))
  }
}