import React , {useState} from 'react'
import { Calculator } from './calculator'
import "./display.css"
export const Display = () => {
    let [val1, setval1] = useState(0)
    let [val, setval] = useState(0)
    let [sign, setsign] = useState('')
    let [final , setfinal] = useState(0)

    const toDisplay = (e) =>{
          if(e === 'C'){
            setfinal(0);
            setsign('');
            setval(0);
            setval1(0);
            setsign('');
            return;
          }

          if(e === '='){
             setval(0);
             setval1(final);
             setsign('');
             return;
          }

         if(sign === ''){          
           if(e >= 0 && e <= 9){
                val1 = val1 * 10 + e;
                setval1(val1);
           }else if(e === 'toogle'){
                setval1(val1);
           }else if(e === '.'){
                val1 = val1 / 10;
                setval1(val1)
           }else{
                sign = e;            
                setsign(sign);
           }
         }else{
           if(e >= 0 && e <= 9){
                val = val * 10 + e;
                setval(val);
           }else if(e === 'toogle'){
                val = -val;
                setval(val);
           }else if(e === '.'){
                val /= 10;
                setval(val)
           }else{
                sign = e;
                setsign(sign)
           }
           calculate();
         }

    }

    const calculate = () =>{
       //console.log(val);
       let here = 0;
       if(sign === '+'){
           here = val1 + val;
       }else if(sign === '-'){
           here = val1 - val;
       }else if(sign === '/'){
           here = val1 / val;
       }else if(sign === 'x'){
           here = val1 * val;
       }else{
           here = val1 % val;
       }
       setfinal(here);
    }

  return (
    <>
    <div className='container d-flex flex-column align-items-center my-3 pos'>
            <div className='ans'>Answer: {final}</div>            
            <input type="text" disabled = {true} value = {val1 + sign + (val > 0 ? val : "")}/>            
    </div>
    <div className="container">
        <Calculator toDisplay = {toDisplay}/>
    </div>
    </>
  )
}
