import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { useRef } from 'react'
import './area.css'

const Area = () =>{
    const [drag, setDrag] = useState(false)

    const areaRef = useRef(null)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    } 
    
    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    } 
    
    function onDropHandler(e) {
        e.preventDefault()
        let files  = [...e.dataTransfer.files]
        console.log(files)

        let newimg = document.createElement('img')
        newimg.classList.add('newimg')
        areaRef.current.appendChild(newimg)
        newimg.src = window.URL.createObjectURL(files[0])

        setDrag(false)
    } 
    console.log(areaRef.current);



    return(
        <div className='Area'>
            {drag
                ? <div
                    className='drop-area'
                    onDragStart = {e => dragStartHandler(e)}
                    onDragLeave = {e => dragLeaveHandler(e)}
                    onDragOver = {e => dragStartHandler(e)}
                    onDrop = {e => onDropHandler(e)}
                    >Отпустите файл для загрузки</div>
                : <div
                    className='drop-area'
                    onDragStart = {e => dragStartHandler(e)}
                    onDragLeave = {e => dragLeaveHandler(e)}
                    onDragOver = {e => dragStartHandler(e)}
                >Перетащите файл для загрузки</div>  
            }
            <Draggable>
            <div ref={areaRef}></div>
            </Draggable>
        </div>
    )

}

export default Area