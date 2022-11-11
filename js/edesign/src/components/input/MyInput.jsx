import React, { useRef} from 'react';
import "./MyInput.css"
import Draggable from 'react-draggable';
import { fonts } from '../../utils/consts';

const MyInput = () => {
    const inputRef = useRef()
    const toolbarRef = useRef()
    const txtRef = useRef()
    const btnBold = useRef()
    const btnItalic = useRef()
    const btnUnderline = useRef()
    const wrapperRef = useRef()
    const selectBtnRef = useRef()
    const optionsRef = useRef()
    const colorRef = useRef()
    
    

    function addFont(){
        fonts.forEach(font => {
            let li = `<li сlick="updateName(this)">${font}</li>`
            optionsRef.current.insertAdjacentHTML('beforeend', li)
        })
        // onselect(window, updateName)
    }

    // addFont()

    // function updateName(e) {
    //     console.log(e.innerHTML);
    // }

    const setBold = () => {
        txtRef.current.classList.toggle('bold')
        
        }
    
    const setItalic = () => {
        txtRef.current.classList.toggle('italic')
        
        }
    
    const setUnderline = () => {
        txtRef.current.classList.toggle('underline')
        
        }
    

    let switchBg = (el) => {
        el.target.style.backgroundColor = "transparent"
        el.target.style.border = "none"
        el.target.style.width = "400px"
        el.target.addEventListener('keyup', e => {
            let scH = e.target.scrollHeight;
            el.target.style.height = `${scH}px`
            
        })

        const inp = inputRef.current
        const tb = toolbarRef.current

        colorRef.current.addEventListener('change', () => {
            if (colorRef.current){
            const color = colorRef.current.value
            txtRef.current.style.color = color
            console.log(txtRef.current.style);
            console.log(colorRef.current.value)}
        })

        inp.addEventListener('contextmenu', (ell) => {
            ell.preventDefault();
            tb.style.display = "flex"

        })
        
        inp.addEventListener('click', () => {
            tb.style.display = "none"

        })

        
        
        // const updateName = (choosen) => {
        //     console.log(choosen);
        // }

        selectBtnRef.current.addEventListener('click', () => {
            wrapperRef.current.classList.toggle('active')
        })

        
        
        

} 




    return (
        <div className='card'>
            
            <Draggable>
            <div>
            <div className='toolbar'
            ref={toolbarRef}

            >
                <div className='wrapper' ref={wrapperRef}>
                    <div className='selectBtn' ref={selectBtnRef}>
                        <span>font</span>
                    </div>
                    <div className='content'>
                        <div className='search'>
                            <input type="text" placeholder='search' />
                        </div>
                        <ul className='options' ref={optionsRef}>
                            
                        </ul>
                    </div>
                </div>
                <button className='txtstyler' onClick={setBold} ref={btnBold}> B</button>
                <button className='txtstyler' onClick={setItalic} ref={btnItalic}> I </button>
                <button className='txtstyler' onClick={setUnderline} ref={btnUnderline}> U </button>
                <input type="color" ref={colorRef}/>
            </div>
            <label className='Input' ref = {inputRef} onClick={ switchBg } >
                <textarea 
                    placeholder='text...'
                    type="text"
                    className = "txt-area"
                    spellcheck="false"
                    ref={txtRef}
                />
            </label> 
           </div>
            </Draggable>

            
            
            
        </div>        
    )
}
export default MyInput;
