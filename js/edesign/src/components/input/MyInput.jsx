import React, { useRef} from 'react';
import "./MyInput.css"
import Draggable from 'react-draggable';

const MyInput = () => {
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
            <label className='Input' ref = {ref} onClick={ switchBg }>
                <textarea 
                    placeholder='text...'
                    type="text"
                    className = "txt-area"
                    spellcheck="false"
                />
            </label> 
            </Draggable>
        </div>        
    )
}
export default MyInput;
