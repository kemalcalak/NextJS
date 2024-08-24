'use client'
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";

export default function Page(p){
    const searchParams=useSearchParams()

    useEffect(()=>{
            const sp=searchParams.get('q')
        alert(sp)

    },[])
    return(
        <div>
            Detail page {p.searchParams.q}
        </div>
    )
}
