import React from 'react';
// 버튼을 클릭하면 콘솔창에 출력
// 리로드 할때마다 이름 랜덤 출력 
export default function Content() {
    const handleNameChange = () =>{
        const names = ['kim' , 'park', 'lee'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = ()=>{
        console.log('버튼을 클릭했다오');
    }
    return (
        <main>
            <p> Hello { handleNameChange()}!</p>
            <button onClick={handleClick}> 클릭하세요. </button>
        </main>
    );
  }

  // export default Content;