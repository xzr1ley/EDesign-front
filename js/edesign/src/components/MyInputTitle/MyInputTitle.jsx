import React, { useState } from 'react';
import "./MyInputTitle.css"
import "./MoveForText"

const MyInputTitle = () => {
    const [value, setValue] = useState()

    
   
   
    return (
        <div>
            <label className='InputTitle draggable'>
                    <textarea 
                    placeholder='Title'
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    className = "txtAreaTitle"
                    spellcheck="false"
                />
            </label>
        </div>        
    )
}
export default MyInputTitle;
