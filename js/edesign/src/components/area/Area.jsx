import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { useRef } from 'react'
import './area.css'


const isRectInArea = (rect, area) => (
    rect.top >= area.top
    && rect.left >= area.left
    && rect.top + rect.height <= area.top + area.height   
    && rect.left + rect.width <= area.left + area.width
  )
  
  const getBoundsArea = (rect, area) => ({
    left: area.left, 
    top: area.top, 
    right: (area.left + area.width - rect.width), 
    bottom: (area.top + area.height - rect.height)
  }) 


const Area = () => {
    const [drag, setDrag] = useState(false)

    const imgPlaceRef = useRef(null)
    const areaRef = useRef(null)
    const [transform, setTransform] = useState('none');
    const [boundsArea, setBoundsArea] = useState(false)
    
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
        imgPlaceRef.current.append(newimg)
        newimg.src = window.URL.createObjectURL(files[0])

        setDrag(false)
    }

        const handleEvent = (e, data) => {
            if (boundsArea) return true
        
            if (data && imgPlaceRef &&  imgPlaceRef.current && areaRef && areaRef.current) {
        
              const dragRC = imgPlaceRef.current.getBoundingClientRect()
              const areaRC = areaRef.current.getBoundingClientRect()
              if (isRectInArea(dragRC, areaRC)){
                 areaRef.current.style.background = 'grey'   
              } else {
                 areaRef.current.style.background = 'black'   
              }
              if (isRectInArea(dragRC, areaRC) && e.type === 'mouseup' ){
                areaRef.current.style.background = 'black'
                setBoundsArea(getBoundsArea(dragRC, areaRC))
              } 
            }
        
    } 
    console.log(imgPlaceRef.current);



    return(
        <div className='Area'>
                <Draggable
                    bounds={boundsArea}
                    onDrag={handleEvent}
                    onStart={handleEvent}
                    onStop={handleEvent}
                    onMouseDown={handleEvent}
                    onMouseUp={handleEvent}
                    onTouchStart={handleEvent}
                    onTouchEnd={handleEvent}
                >
                    <div className='place-for-img' ref={imgPlaceRef}></div>
                </Draggable>
            
                <div
                    ref = {areaRef}
                    className='drop-area'
                    onDragStart = {e => dragStartHandler(e)}
                    onDragLeave = {e => dragLeaveHandler(e)}
                    onDragOver = {e => dragStartHandler(e)}
                    onDrop = {e => onDropHandler(e)}
                    ></div>
                
            
            
        </div>
    )

}

export default Area