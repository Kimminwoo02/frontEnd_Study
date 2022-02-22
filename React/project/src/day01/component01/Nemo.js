import React from "react";
import colorNames  from 'colornames';

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

Nemo.defaultProps = {
    colorValue :'red'
}

export default Nemo