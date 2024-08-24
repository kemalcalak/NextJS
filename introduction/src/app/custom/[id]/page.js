"use client"
import {useEffect} from "react";

const Page= (p)=>{

    useEffect(()=>{
        console.log(p)
    },[])
    return(
        <div>
          Custom with ID

        </div>
    )
}
export  default  Page
