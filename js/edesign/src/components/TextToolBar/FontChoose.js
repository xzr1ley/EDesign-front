import { useEffect, useState } from "react";

export default function FontChoose(inputRef){
    const [IsFontChoose, setFontChoose] = useState()

    const on = () => {
        setClick(true)
    }

    useEffect(() => {
        if(!inputRef.current){
            return;
        }

        const node = inputRef.current;

        node.addEventListener('click', on)

        return function() {
        node.removeEventListener('click', on)

        }
    })
    return IsFontChoose
}