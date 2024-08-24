'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";


const Categories=()=>{
    const router=useRouter()
    useEffect(()=>{
       setTimeout(()=>{
            router.push('/',{})
       },2000)
    },[])
    return(
        <div>
            <h1>
                Categories
            </h1>
            <p>
                <a href='/products'>Products</a>
            </p>

        </div>
    )
}
export  default  Categories
