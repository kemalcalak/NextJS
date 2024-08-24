"use client"

import {useEffect} from "react";
export default  function Error({error,reset}){
    useEffect(()=>{
        console.log('p',error)
    },[error])

    const onReset=()=>{
        reset()
    }
    return(
        <div>
            Sorry something went wrong
            <button onClick={onReset}>Reset</button>
        </div>
    )
}
