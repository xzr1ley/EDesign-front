import React from 'react'
import "../styles/style.css"
import "./Move"
import { useState } from "react";
import MyInput from './input/MyInput';
import MyInputTitle from './MyInputTitle/MyInputTitle';



const Bibl = () => {
        const [items,setItem] = useState([{id: 1,item: <MyInputTitle/>, class:".123"}, {id: 2,item:"", class:"space"}, {id: 3,item:<MyInput/>, class:".123"}])


    return (
        <div className="App">

            <div className='Biblioteka'>
                <h1 className='Title'>Library</h1>
                <div className='Blocs'>
                
                {items.map(block =>
                    <div className={block.class}>
                        {block.item}
                    </div>    
                )}
                </div>
            </div>

           
            
        </div>
    )
};

export default Bibl;