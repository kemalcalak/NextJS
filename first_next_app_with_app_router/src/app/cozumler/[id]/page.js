'use client'
import {useRouter} from "next/navigation";

export default function CozumDetail ({params}){
    const router=useRouter()
    return(
        <div>
            <button onClick={()=>{
                router.push('/cozumler')
            }}>Çözümlere Geri Dön</button>
            <h1>Çözüm detay sayfası</h1>
            <h1>Çözüm detay numarası {params.id}</h1>
        </div>
    )
}
