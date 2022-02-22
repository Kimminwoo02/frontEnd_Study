import React from "react";
import {useState} from "react";
import Subject from "./Subject";

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