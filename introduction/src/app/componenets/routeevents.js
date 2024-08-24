"use client"
import {useEffect} from "react";
import {useSearchParams,usePathname,useParams} from "next/navigation";

export default function RouteEvent(){
    const pathname=usePathname()
    const params=useParams()
    const searchParams=useSearchParams()

    useEffect(()=>{
       // console.log(pathname,searchParams)
        const url=`${pathname}?${searchParams}`
        console.log(searchParams.get("q"))
        console.log(searchParams.getAll("q"))
        console.log(searchParams.has("t"))
        console.log(searchParams.size)
        searchParams.forEach((i)=>{
            console.log('i',i)
        })
       // console.log(searchParams.values().next().done)
        console.log(params)
        console.log('url',url)
    },[pathname,searchParams,params])
}
