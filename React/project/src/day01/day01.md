# useState 
```
import React from 'react'
import { useState  } from 'react';

const App = () => {
    const  [name, setName] = useState('로그인');
    // let name ="로그인";

    // const login=()=>{
    //     const newName = name == '로그인' ? 'react' : '로그인'; 
    //     setName( newName ); 
    //     // useState 를 사용할 때마다 화면을 갱신 
    //     // name = name =='로그인' ? 'react' : '로그인';
    //     console.log( name );
    //     // document.getElementById('name').innerHTML = name; 
    //     // 자바스크립트가 화면을 갱신하는 방법
    // }
  return (
    <div>
        <h1 id="name"> { name } </h1>
        <button onClick={()=>{ setName(name =='로그인' ? 'react' : '로그인')}}> click </button>
    </div>
  )
}

export default App
```

# 컴포넌트 분리 
```
import React from 'react'
import NameChange from './component01/NameChange';

const App = () => {

  return (
    <div>
        <NameChange />
    </div>
  )
}

export default App
```
```
import React from 'react'
import { useState } from 'react'

const NameChange = () => {
    const  [name, setName] = useState('로그인');
    return (
      <div>
          <h1 id="name"> { name } </h1>
          <button onClick={()=>{ setName(name === '로그인' ? 'react' : '로그인')}}> click </button>
      </div>
    )
}

export default NameChange
```

# 계산기
```
import React from 'react'
import { useState } from 'react'

const addNumber = ( number1, number2 )=>{
    return number1 + number2; 
}

const App = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const addNum = addNumber( number1, number2);

  return (
    <div>
       <h1> 계산기 </h1>
       <input type="number" 
              value={ number1 }
              onChange ={ e=> setNumber1( Number(e.target.value) )}
       />
       + 
       <input type="number" 
              value={ number2 }
              onChange ={ e=> setNumber2( Number(e.target.value) )}
       />
       <span> = { addNum } </span>
    </div>
  )
}

export default App
```

# 계산기 컴포넌트 분리 
```
import React from 'react'
import Calc from './component01/Calc';

const App = () => {
   
  return (
    <div>
       <Calc number1={30}  number2={ 60} />
    </div>
  )
}

export default App
```

```
import React from 'react'
import { useState } from 'react'

const Calc = ({ number1:num1 , number2:num2 }) => {
    // 디스트럭처링 하여 가져온 이름이  state 의 중복되면 사용할 수 없으므로 
    // 이름을 변경하여 가져올 수 있음 
    const [number1, setNumber1] = useState( num1 );
    const [number2, setNumber2] = useState( num2);
   
    const addNumber = ( number1, number2 )=>{
        return number1 + number2; 
    }

    const addNum = addNumber( number1, number2);

  return (
    <div>
       <h1> 계산기 </h1>
       <input type="number" 
              value={ number1 }
              onChange ={ e=> setNumber1( Number(e.target.value) )}
       />
       + 
       <input type="number" 
              value={ number2 }
              onChange ={ e=> setNumber2( Number(e.target.value) )}
       />
       <span> = { addNum } </span>
    </div>
  )
}

export default Calc
```


# 프로토타입을 이용하여 값을 초기화 
```
import React from 'react'
import { useState } from 'react'

const App = () => {
   
  return (
    <div>
       <Counter />
       <Counter number={30} />
       <Counter number={10} />
    </div>
  )
}

const Counter = (props)=>{
    //const [counter, setCounter ] = useState( number || 0 );
    const [counter, setCounter ] = useState( props.number );
    const countFunc = ()=>{
            setCounter( counter + 1);
    }
    return(
        <div>
            <button onClick={ countFunc }> counter {counter} </button>
        </div>
    )
}

// 값이 전달 되지 않으면 기본값을 사용할 수 있음 
Counter.defaultProps ={
   number  : 0
}
export default App
```

# 데이터의 위치에 따른 형태 
// app에서는 state 이나 하위컴포넌트로 전달 되어서는 
// props 로 사용 
```
import React from 'react'
import { useState } from 'react'
//npm  i colornames -s
import colorNames  from 'colornames';

const App = () => {
  const [ colorValue, setColorValue ]= useState('');
  const [ hexValue, setHexValue ]= useState('');
  const [ isDarkText, setIsDarkText ] = useState( true );
  // 문자색을 반전 시키기 위함 

  const style = {
      width: '300px',
      margin:'auto'
  }
  return (
    <div style={ style }>
      <Nemo  colorValue={colorValue}
             hexValue={ hexValue }
             isDarkText ={ isDarkText }
      />
      <Input  colorValue={colorValue} 
              setHexValue = { hexValue }
              setColorValue ={ setColorValue }
              isDarkText = {isDarkText}
              setIsDarkText = {setIsDarkText}
      />
    </div>
  )
}

const Nemo = ({ colorValue , hexValue , isDarkText})=>{
    return(
        <div className='section'
             style={{
                 backgroundColor : colorValue,
                 color: isDarkText ? '#000' : '#fff'
             }}
        >
           <p> { colorValue === '' ? colorValue : '색을 입력하세요.'} </p>
           <p> { hexValue === '' ? hexValue : null} </p>
        </div>
    )
}

Nemo.defaultProps ={
    colorValue :'green'
}

const Input = ({ 
    colorValue , setColorValue , setHexValue , isDarkText, setIsDarkText
})=>{
    return(
        <div className='section'
                style={{
                    backgroundColor : colorValue
                }}
            >
            <input type="text" 
                autoFocus
                placeholder='색을 입력하세요.'
                required
                value={colorValue}
                onChange={ e=>{ 
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button type="button"
                    onClick={ ()=>setIsDarkText(!isDarkText) }
            > 문자색 변경 </button>
        </div>
    )
}


export default App
```

# 목록을 출력하는 컴포넌트 
```
import React from 'react'
import { useState } from 'react'


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


    const handleCheck = (id)=>{
        // console.log(id)
        const list = subjects.map( subject => subject.id === id ? {
           ...subject, checked: !subject.checked  }: subject );
           setSubjects(list);
    }

    return (
      <div className='content'>
         {
             subjects.map( subject => (
                 <p className='item'>
                     <span> {subject.id} </span>
                     <span> {subject.subject} </span>
                     <span> {subject.checked ? '신청완료' : '미신청'} </span>
                     <input type="checkbox" 
                            onChange={()=>handleCheck(subject.id)}
                            isChecked ={ subject.checked }
                     />
                 </p>
             ))
         } 
      </div>
    )
}

const Subject = ( { subject } ) => {
    

    return (
      <>
         
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

# checked 개선 
```
import React from "react";
import {useState} from "react";

const Subject = ( { subject } ) => {
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
            </p>
      </>
    )
}

export default Subject
```

# subject  컴포넌트 분리
```
const Content = () => {
    const [subjects, setSubjects ] = useState([
        {   id:1,  subject:'html',  checked : true   },
        {   id:2,  subject:'css',  checked : true   },
        {   id:3,  subject:'javascript',  checked : false   },
        {   id:4,  subject:'jQuery',  checked : false   },
    ])


    const handleCheck = (id)=>{
        // console.log(id)
        const list = subjects.map( subject => subject.id === id ? {
           ...subject, checked: !subject.checked  }: subject );
           setSubjects(list);
    }

    return (
      <div className='content'>
         {
             subjects.map( subject => (
                 <Subject subject={subject} />
             ))
         } 
      </div>
    )
}

export default Content
```
```
import React from 'react'
import { useState } from 'react'
import { Button , ButtonGroup , Alert , UncontrolledAlert } from 'reactstrap';

const App = () => {
  return (
    <div className='Main'> 
        <div>
            <Button
                color="primary"
                aria-label="hello Button"
            >
                Click Me
            </Button>
            {` `}
            <Button
                color="success"  
                outline="false"
            >
                Click Me
            </Button>
        </div>

        <ButtonGroup>
            <Button>
                Left
            </Button>
            <Button>
                Middle
            </Button>
            <Button>
                Right
            </Button>
        </ButtonGroup>

        <Alert
            color="primary"
        >
            Hey! Pay attention.
        </Alert>
        <UncontrolledAlert color="info">
        I am an alert and I can be dismissed!
        </UncontrolledAlert>

        <div>
  <Alert>
    <h4 className="alert-heading">
      Well done!
    </h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
  </Alert>
</div>
    </div>
  )
}

export default App
```