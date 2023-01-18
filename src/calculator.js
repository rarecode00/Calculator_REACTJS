import React , {useState} from "react";

export const Calculator = (props) => {
  const [val, setval] = useState(0)
  const handleClick = (curr) =>{
    props.toDisplay(curr);
  }

  return (
    <div className="container d-flex justify-content-center">     
      <div className="row align-items-start col-3">
        <button className="col-3 h-50 d-inline-block" onClick={() =>{handleClick('C')}}>C</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('toogle')}}>+/-</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('%')}}>%</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('/')}}>/</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(7)}}>7</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(8)}}>8</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(9)}}>9</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('x')}}>X</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(4)}}>4</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(5)}}>5</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(6)}}>6</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('-')}}>-</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(1)}}>1</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(2)}}>2</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick(3)}}>3</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('+')}}>+</button>
        <button className="col-6 h-50 d-inline-block" onClick={() =>{handleClick(0)}}>0</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('.')}}>.</button>
        <button className="col-3 w-25 h-50 d-inline-block" onClick={() =>{handleClick('=')}}>=</button>        
      </div>
    </div>
  );
};
