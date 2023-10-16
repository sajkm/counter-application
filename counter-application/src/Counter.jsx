import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,reset,incrementByAmount } from "./redux/counterSlice";

export default function Counter() {
  
  const [amount,setAmount] = useState("")

const dispatch=useDispatch()

const count = useSelector((state)=>state.counter.count)

const handleIncrement = ()=>{
  if(amount==""){
    alert("please provide amount")
  }else{
    //update state in store
    dispatch(incrementByAmount(Number(amount)))
  }
}


  return (
    <div className="counter-card">
      <div className="result-field">{count}</div>
      <div className="btn-collection">
        <button onClick={()=>dispatch(decrement())} className="btn decrement ">Decrement</button>
        <button onClick={()=>dispatch(reset())} className="btn reset">reset</button>{" "}
        <button onClick={()=>dispatch(increment())} className="btn increment ">Increment</button>{" "}
      </div>
      <div className="d-flex mt-5 h-25">
        <input onChange={e=>setAmount(e.target.value)} type="text" className="form-control" placeholder="Enter Amount to be Incremented!!!"/>
        <button onClick={handleIncrement} className="btn btn-primary ms-3 ">Increment by amount</button>
      </div>
    </div>
  );
}