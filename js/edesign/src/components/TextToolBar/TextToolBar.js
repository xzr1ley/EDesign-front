import { useEffect, useState } from "react";

export default function TextToolBar(inputRef){
    const [IsTextToolBar, setClick] = useState(false)

    const on = (e) => {
        setClick(true)
        e.preventDefault()
    }
    const off = () => setClick(false)

    useEffect(() => {
        if(!inputRef.current){
            return;
        }

        const node = inputRef.current;

        node.addEventListener('contextmenu', on)
        node.addEventListener('click', off)

        return function() {
        node.removeEventListener('contextmenu', on)
        node.removeEventListener('click', off)

        }
    })
    return IsTextToolBar
}
