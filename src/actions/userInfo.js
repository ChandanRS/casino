import {
    USER_INFO
   } from "./types";
 
 export const userInfo = (name, balance) => dispatch=> {
     let obj = {name , balance}
     dispatch({
       type: USER_INFO,
       payload: obj
     });
   }