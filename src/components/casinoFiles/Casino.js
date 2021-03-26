import React,{useEffect, useRef,useState} from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import Table from './Table'
import {storeResults} from '../../actions/storeResults'
import {userInfo} from '../../actions/userInfo'
import {useSelector,useDispatch} from 'react-redux'

const Casino = ({handler,data}) => {
    const [count, setCount] = useState(0)
    // const [balance, setBalance] = useState(()=>localStorage.getItem("balance") ? +localStorage.getItem("balance") : 100 )
    const balanceFromRedux = useSelector(state => state.userInfo.balance)
    const [balance, setBalance] = useState(()=>balanceFromRedux ? balanceFromRedux : 100 )
    let slot1=""
    let slot2=""
    let slot3=""
    const dispatch = useDispatch()
const ref1 = useRef(0)
const ref2 = useRef(0)
const ref3 = useRef(0)
const ref4 = useRef(0)
const ref5 = useRef(0)
const ref6 = useRef(0)
const ref7 = useRef(0)
const ref8 = useRef(0)
const ref9 = useRef(0)
// const res = useRef(localStorage.getItem('results'))
const res = useRef()

const [datas, setDatas] = useState([])
const [currentRes, setCurrentRes] = useState()
const [winOrLoss, setWinOrLoss] = useState("")
const rows = useSelector(state => state.addrow.row)
const [myArray, setMyArray] = useState(()=>rows ? rows : []);
console.log(rows)
const name = localStorage.getItem('user')
// setDatas( datas.map((item,index) =>  [...item, {row : currentRes}]))

useEffect(()=>{
    dispatch(userInfo(name,balance))
},[balance])

const handleSpin = () => {
    
    setCount(count=>count+1)
    ref1.current = Math.ceil(Math.random()*9) 
    ref2.current = Math.ceil(Math.random()*9)
    ref3.current = Math.ceil(Math.random()*9)
    ref4.current = Math.ceil(Math.random()*9)
    ref5.current = Math.ceil(Math.random()*9)
    ref6.current = Math.ceil(Math.random()*9)
    ref7.current = Math.ceil(Math.random()*9)
    ref8.current = Math.ceil(Math.random()*9)
    ref9.current = Math.ceil(Math.random()*9)

    slot1= ""+ref1.current +ref2.current +ref3.current
    slot2= ""+ref4.current +ref5.current +ref6.current
    slot3= ""+ref7.current +ref8.current +ref9.current
    if((ref1.current === ref2.current) || (ref2.current === ref3.current)){
        setBalance(balance=> balance + 0.5)
        setWinOrLoss("Congratulations!! You won!!!")
    }else if((ref1.current === ref2.current) && (ref2.current === ref3.current)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 1)
    } else if((ref1.current === ref2.current === ref3.current == 3)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 5)
    } else if((ref1.current === ref2.current === ref3.current == 7)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 10)
    }
    // slot2
    else if((ref7.current === ref8.current) || (ref8.current === ref9.current)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 0.5)
    }else if((ref7.current === ref8.current) && (ref8.current === ref9.current)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 1)
    } else if((ref7.current === ref8.current === ref9.current == 3)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 5)
    } else if((ref7.current === ref8.current === ref9.current == 7)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 10)
    } 
    //slot3
    else if((ref4.current === ref5.current) || (ref5.current === ref6.current)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 0.5)
    }else if((ref4.current === ref5.current) && (ref5.current === ref6.current)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 1)
    } else if((ref4.current === ref5.current === ref6.current == 3)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 5)
    } else if((ref4.current === ref5.current === ref6.current == 7)){
        setWinOrLoss("Congratulations!! You won!!!")
        setBalance(balance=> balance + 10)
    } else{
        setBalance(balance=>balance - 1)
        setWinOrLoss("Oops!! You lost the game!")
    }

    
    // setCurrentRes(slot1+slot2+slot3)
    setMyArray(oldArray => [...oldArray, [name,slot1,slot2,slot3,new Date().toString()]]);

    dispatch(storeResults(myArray ? myArray : [name,slot1,slot2,slot3,new Date().toString()]))
    
    
    
}
localStorage.setItem("balance",balance)
const handleDebug = () => {
    setCount(0)
    setBalance(balance=> balance + 10)
    ref1.current = 7 
    ref2.current = 7
    ref3.current = 7
    ref4.current = 7
    ref5.current = 7
    ref6.current = 7
    ref7.current = 7
    ref8.current = 7
    ref9.current = 7
}

// data(1,222,34,5)
// console.log(data)
console.log(balance)
return (
   
    <div className="casino-container">
         <h1>Your Balance: {balance}</h1>
         
        <div className="box-container">
            <div className="slot slot1">
           <div>{ref1.current}</div>
           <div>{ref2.current}</div>
           <div>{ref3.current}</div>
           </div>
           <div className="slot slot2">
           <div>{ref4.current}</div>
           <div>{ref5.current}</div>
           <div>{ref6.current}</div>
           </div>
           <div className="slot slot2">
           <div>{ref7.current}</div>
           <div>{ref8.current}</div>
           <div>{ref9.current}</div>
           </div>
        </div>
        <div className="btn-casino-container">
        <Button className="casino-btn" variant="contained" color="primary" onClick={handleSpin}>Spin</Button>
        <Button className="casino-btn" variant="contained" onClick={handleDebug}>Debug</Button>
        <Button className="casino-btn" variant="contained" color="secondary" onClick={handler}>Close</Button>
        </div>
        <h1 style={{color:"purple"}}>{winOrLoss}</h1>
        
     </div>
    );
};

export default Casino;