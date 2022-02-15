import React from 'react';
import { useState} from 'react';
 
export default function Content() {
    const [name, setName] = useState('kim');
    // name = 'kim' 으로 초기화 한것
    // setName 메소드로 다시 setting 할 수 있음 
    const [count, setCount] = useState(0);

    const handleNameChange = () =>{
        const names = ['kim' , 'lee', 'park'];
        const int = Math.floor(Math.random() * 3);
        //return names[int];
        setName(names[int]);
        // name을 새로운 이름으로 셋팅
    }

    const handleClick = ()=>{
        setCount( count + 3);

        // count ++ 하지 안고 두번 호출 해도 2로 증가되지 않는다.
        console.log(count);
    }

    return (
        <main>
            <p> Hello {name}!</p>
            <button onClick={handleNameChange}> 클릭하면 이름을 계속 바꿔요. </button>
            <button onClick={handleClick }> count를 출력해요 </button>
        </main>
    );
  }

  // export default Content;