import React from 'react';
// 다양한 이벤트 핸들러 사용과 
// 파라미터 있는 함수 , 파라미터 없는 함수, 이벤트 전달 함수 확인 
export default function Content() {
    const handleNameChange = () =>{
        const names = ['kim' , 'lee', 'park'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    let num = 0;
    const handleClick = ()=>{
        console.log( ++num + '버튼을 클릭했다오');
    }
    
    const handleClick2 = (name)=>{
        console.log(`${name}은 전달받은 파라미터라오`);
    }

    const handleClick3 = (e)=>{
        console.log(e.target);
    }

    return (
        <main>
            <p> Hello { handleNameChange()}!</p>
            <button onClick={handleClick}> 파라미터가 없는 함수, 클릭하세요. </button>
            <button onClick={()=>handleClick2('kim')}> 파라미터가 있는 함수, 클릭하세요 </button>
            <button onClick={(e)=>handleClick3(e)}> event object전달하는 함수, 클릭하세요 </button>
            <p onDoubleClick={handleClick}> Double Click 이라오. { handleNameChange()}!</p>
        </main>
    );
  }

  // export default Content;