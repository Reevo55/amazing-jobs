import {onIsLoadingChange} from "../actions/profile";
import {Dispatch} from "redux";


export const tryLoggingAndRedirect = (data:any, endpoint:string) => {
    
    const checkResponse = (response:any) =>
    {
        console.log("Response: " + response)
        localStorage.setItem("user_id", response);
    }

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
    .then((response) => response.json())
    .then((response) => checkResponse(response) )  
    .then(() => window.top!.location = "/")
    .catch((error) => console.log(error))  
    .finally(() => dispatch(onIsLoadingChange(false)))
  }
}