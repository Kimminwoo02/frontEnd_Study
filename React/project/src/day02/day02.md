```
import React, { useEffect , useState } from 'react'

const App = () => {
    const  [count, setCount] = useState(0);
    const  [name, setName] = useState('');

    useEffect(()=>{
        console.log( '언제나 실행');
        // 화면의 갱신이 일어날때마 매번 호출
    })

    useEffect(()=>{
        console.log( 'count 실행');
    },[count])

    useEffect(()=>{
        console.log( 'text 실행');
    },[name])

    
    useEffect(()=>{
        console.log( '마운트 될때 최초 한번만 실행');
    },[])



    const stateCount =()=>{
        setCount( count + 1);
    }
    const handleInput= (e)=>{
        setName( e.target.value );
    }
  return (
    <div>
        <button onClick={ stateCount }> stateCount 증가 </button>
        <input type="text"  value={ name } onChange={ handleInput } />
        <p>{ name }</p>
    </div>
  )
}

export default App
```

```
import React, { useEffect , useState } from 'react'

const App = () => {
    const  [showTimer, setShowTimer] = useState(false);

    
  return (
    <div>
        <button onClick={ ()=>{ setShowTimer( !showTimer )} }> toggle </button>
        <span> { showTimer && <Timer /> }</span>
    </div>
  )
}

const Timer = ()=>{
    useEffect(()=>{
        const timer = setInterval( ()=>{
            console.log(" timer process ");
        }, 1000)

        return ()=>{
            clearInterval(timer);
        }
    }, [])
     
    return(
        <div> 타이머 시작 </div>
    )
}
export default App
```

```
import React, { useEffect , useState , useRef } from 'react'

const App = () => {
    const  [countState, setCountState] = useState(0);
    let countLet = 0; 
    const  countRef = useRef(0);
    //console.log( JSON.stringify(countRef));
    // {"current":0}

    // useRef
    const countStateFun =()=>{
        setCountState( countState + 1);
    }
    const countLetFun =()=>{
        countLet = countLet + 1; 
        console.log( countLet )
    }
    const countRefFun =()=>{
        countRef.current =   countRef.current + 1; 
        // { current : 값 }      
    }

  return (
    <div>
        <button onClick={ countStateFun}> countState  {countState} </button>
        <button onClick={  countLetFun }> countLet  {countLet} </button>
        <button onClick={ countRefFun }> countRef  {countRef.current} </button>
        
    </div>
  )
}

export default App
```
# 로그인 
```
import React, { useEffect , useState , useRef } from 'react'

const App = () => {
     const  inputRef = useRef();
     const  pwRef = useRef();
     const [show, setShow] = useState(false ); 
     const [inputType, setInputType] = useState('password' ); 

     useEffect(()=>{
         inputRef.current.focus(); 
     })

     const login = ()=>{
         alert(`${inputRef.current.value} 님 환영합니다.`);
         inputRef.current.value = '';
         inputRef.current.focus();
     }

     const onPassWordShow =()=>{
        setShow( !show );
        setInputType( show ? 'password' : 'text');
     }
  return (
    <div>
        <input type="text" ref={  inputRef } />
        <input type={inputType} ref={  pwRef } />
        <input type="checkbox" onChange={ onPassWordShow } id="showpw" />
        <button onClick={ login }>  로그인 </button>
    </div>
  )
}

export default App
```
```
import React, { useEffect } from 'react'
import { useState, useRef  } from 'react'


const App = () => {
  return (
    <div className='Main'>
        <Header  title={'koreaIt'} />
        <Content />
        <Footer />
    </div>
  )
}

const Content = () => {
  const [subjects, setSubjects ] = useState([
      {   id:1,  subject:'html',  checked : true   },
      {   id:2,  subject:'css',  checked : true   },
      {   id:3,  subject:'javascript',  checked : false   },
      {   id:4,  subject:'jQuery',  checked : false   },
  ])

  const inputRef = useRef(null);
  // 값 확인

  const handleCheck = (id)=>{
      // console.log(id)
      const list = subjects.map( subject => subject.id === id ? {
         ...subject, checked: !subject.checked  }: subject );
         setSubjects(list);
  }

  const pushNewSubject =()=>{
        if( inputRef.current.value === '') return false;

        setSubjects([
            ...subjects, {
                id:subjects.length + 1,
                subject : inputRef.current.value,
                checked : true
            }
        ])

        inputRef.current.value = '';
        inputRef.current.focus();
  }

  useEffect(()=>{
      console.log('변경');
  },[subjects])
  
  const handleDelete =(id) =>{
        const listItems = subjects.filter( item => item.id !== id);
        setSubjects( listItems );
        // 같지 않은 데이터를 걸러서 새로운 배열을 만들어 사용 
  }
  return (
    <div className='content'>
       {
           subjects.map( subject => (
               <Subject subject={subject} 
                        handleDelete={handleDelete }
               />
           ))
       } 
       <input type="text"  ref={ inputRef } />
       <button onClick={ pushNewSubject }> 수강신청 </button>
    </div>
  )
}

const Subject = ( { subject , handleDelete } ) => {
  // subject.checked 를 처리하기위한  state
  const [isDone, setIsDone] = useState(subject.checked);

  const toggleDone =()=>{
      setIsDone( !isDone );
      console.log( isDone );
  }

  return (
    <>
          <p className='item'>
              <span> {subject.id} </span>
              <span> {subject.subject} </span>
              <span> {subject.checked ? '신청완료' : '미신청'} </span>
              <input type="checkbox" 
                     checked = { isDone }
                     onChange = { toggleDone }
              />
              <button onClick={ ()=>{ handleDelete(subject.id)}}> 삭제 </button>
          </p>
    </>
  )
}

const Footer = () => {
    const today = new Date(); 

    return (
      <footer>
         <h1> copyright &copy; { today.getFullYear() }  </h1>
      </footer>
    )
}

const Header = ({title}) => {
    return (
      <header>
         <h1>{ title } </h1>
      </header>
    )
}

Header.defaultProps ={
    title :"NewBrand"
}


export default App
```