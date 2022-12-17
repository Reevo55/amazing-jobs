import {onIsLoadingChange} from "../actions/profile";
import {Dispatch} from "redux";


export const saveCvAndRedirect = (data:any) => {
    
  return (dispatch: Dispatch) => {  

    dispatch(onIsLoadingChange(true))
    const full_url = 'http://127.0.0.1:5000/cv'     
    
    fetch(full_url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })    
    .then((response) => {
      if(response.status === 200){
          console.log("CV data saved")
          return response.json();     
      }else if(response.status !== 200){
          console.log("CV data save failed")
          throw Error("CV save fail")
      }
    })
    .then(() => window.top!.location = "/")
    .catch((error) => console.log(error))  
    .finally(() => dispatch(onIsLoadingChange(false)))
  }
}