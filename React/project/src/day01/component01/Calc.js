import React from 'react'
import { useState } from 'react'

const Calc = ({ number1:num1 , number2}) => {
    // 디스트럭처링 하여 가져온 이름이  state 의 중복되면 사용할 수 없으므로 
    // 이름을 변경하여 가져올 수 있음 
    const [number1, setNumber1] = useState( num1 );
    //const [number2, setNumber2] = useState( num2);
    const num2 = number2; 

    const addNumber = ( number1, num2 )=>{
        return number1 + num2; 
    }

    const addNum = addNumber( number1, num2);

  return (
    <div>
       <h1> 계산기 </h1>
       <input type="number" 
              value={ number1 }
              onChange ={ e=> setNumber1( Number(e.target.value) )}
       />
       + 
       <input type="number" 
              value={ num2 }    
       />
       <span> = { addNum } </span>
    </div>
  )
}

export default Calc