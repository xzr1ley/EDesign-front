import React, { useState } from 'react';
import "./MyInput.css"
import "./MoveForText"

const MyInput = () => {
    const [value, setValue] = useState()

    
   
   
    return (
        <div>
            <label className='Input draggable'>
                    <textarea 
                    placeholder='text...'
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    className = "txt-area"
                    spellcheck="false"
                />
            </label>
        </div>        
    )
}
export default MyInput;
