import React from 'react'
import "./functions.css";
const Functions = ({functions, setFunctions}) => {
    const { inputValue, selectValue } = functions;
  return (
         <div className="functions">
            <input type="text" value={inputValue} placeholder='Search' onChange={(e) => setFunctions({...functions, inputValue: e.target.value})}/>
            <select name="" id="" value={selectValue} onChange={(e) => setFunctions({...functions, selectValue: e.target.value})}>
                <option value="level">By level</option>
                <option value="title">By Title</option>
            </select>
        </div>  
        )
}

export default Functions