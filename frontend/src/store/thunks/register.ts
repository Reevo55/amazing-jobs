import {onIsLoadingChange} from "../actions/profile";
import {Dispatch} from "redux";


export const createNewUserAndRedirect = (data:any, endpoint:string) => {

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
          console.log("Register success")
          return response.json();     
      }else if(response.status !== 200){
          console.log("Register failed")
          throw Error("Register failed")
      }
    })
    .then(() => window.top!.location = "/")
    .catch((error) => console.log(error))  
    .finally(() => dispatch(onIsLoadingChange(false)))
  }
}