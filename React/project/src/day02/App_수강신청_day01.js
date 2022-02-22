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
               <Subject subject={subject} />
           ))
       } 
    </div>
  )
}

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