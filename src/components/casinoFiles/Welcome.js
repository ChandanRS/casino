import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";

 
const Welcome = () => {
    const user = useSelector(state => state.userInfo.name)
    const balance = useSelector(state => state.userInfo.balance)
    console.log(balance)
    return (
        <div>
       { user ? <h1 className="welcome" style={{marginTop:"5rem"}}> {` Hi ${user}, your balance is $${balance ? balance : 100}` } </h1>
        : <h1 className="welcome"  style={{marginTop:"5rem"}}>Welcome!!</h1> }
       </div>
    );
};

export default Welcome;