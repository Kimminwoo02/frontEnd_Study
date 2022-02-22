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
      <tr>
            <p className='item'>
                <span> {subject.id} </span>
                <span> {subject.subject} </span>
                <span> {subject.checked ? '신청완료' : '미신청'} </span>
                <input type="checkbox" 
                       checked = { isDone }
                       onChange = { toggleDone }
                />
            </p>
      </tr>
    )
}

export default Subject