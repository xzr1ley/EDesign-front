import React, { useRef } from 'react';
import "./MyInputTitle.css"
import Draggable from 'react-draggable'

const MyInputTitle = () => {
    const ref = useRef()
    console.log(ref)

    let switchBg = (el) => {
        console.log(el.target)
        el.target.style.backgroundColor = "transparent"
        el.target.style.border = "none"
        el.target.style.width = "400px"
        el.target.addEventListener('keyup', e => {
            let scH = e.target.scrollHeight;
            el.target.style.height = `${scH}px`
        })

    }  

    
   
   
    return (
        <div>
            <Draggable>
            <label className='InputTitle'  ref = {ref} onClick={ switchBg }>
                    <textarea 
                    placeholder='Title...'
                    type="text"
                    className = "txt-area-title"
                    spellcheck="false"
                />
                
            </label>
            </Draggable>
        </div>        
    )
}
export default MyInputTitle;
