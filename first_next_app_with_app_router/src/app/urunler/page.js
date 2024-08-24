'use client'
import {useRouter} from "next/navigation";

const Urunler=()=>{
    const router=useRouter()
    const handleClick=()=>{
            router.push('/urunler/detail?q='+Math.random().toString(36))
    }
    return(
        <div>
            <h1>Urunler</h1>
            <b onClick={handleClick}>Ürün 1</b>
            <b onClick={handleClick}>Ürün 2</b>

        </div>
    )
}
export default Urunler
