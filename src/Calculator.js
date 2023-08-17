import React, { useState } from 'react'
import "./index.css"

const Calculator = () => {

  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const ButtonClick = (value) => {
    
    setCal(cal + value);
    console.log("cal", cal);
  }

  const Solve = () => {

    try {
      setCal(eval(cal));
    }
    catch (error) {
      setCal("Invalid Input");
    }

  }

  const DeleteAll = () => {
    setCal("");
  }

  const Del = () => {
    const deletee = cal.slice(0, -1);
    setCal(deletee);
  }

  return (

    <>
      <h3 className='headingg'> Calculator </h3>
      <div className='calculator-body'>
        <div className='calculation'> <span> {cal || "0"} </span> </div>
        <div className='btn-part'>
          <button className='btn-special' onClick={() => DeleteAll("")} > AC </button>
          <button className='btn-special' onClick={() => Del("")}> DEL </button>
          <button className='btn-special' onClick={() => Solve("=")} > = </button>
          <button className='btn-special' onClick={() => ButtonClick("/")} > ÷ </button>
          <button onClick={() => ButtonClick("1")} > 1 </button>
          <button onClick={() => ButtonClick("2")} > 2 </button>
          <button onClick={() => ButtonClick("3")} > 3 </button>
          <button className='btn-special' onClick={() => ButtonClick("+")} > + </button>
          <button onClick={() => ButtonClick("4")} > 4 </button>
          <button onClick={() => ButtonClick("5")} > 5 </button>
          <button onClick={() => ButtonClick("6")} > 6 </button>
          <button className='btn-special' onClick={() => ButtonClick("-")} > - </button>
          <button onClick={() => ButtonClick("7")} > 7 </button>
          <button onClick={() => ButtonClick("8")} > 8 </button>
          <button onClick={() => ButtonClick("9")} > 9 </button>
          <button className='btn-special' onClick={() => ButtonClick("*")} > X </button>
          <button onClick={() => ButtonClick("0")} > 0 </button>
          <button style={{ fontWeight: "bold" }} onClick={() => ButtonClick(".")} > . </button>
        </div>
      </div>
    </>

  )
}

export default Calculator;