"use client"
import {useRouter} from "next/router";

export default function SuggestIndex() {
    const router=useRouter()
    return (
        <>
            <button onClick={()=>{router.push('/')}}>Anasayfa</button>
            SuggestIndex Page
        </>
    );
}
