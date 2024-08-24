'use client'


import {useRouter} from "next/navigation";

export default function Home() {
  const router=useRouter()
  const onNavigate=()=>{
    router.push('/products')
  }
  return (
    <main className='app-main'>

      <div  className='route-item' onClick={onNavigate}>
       Products With Navigate
      </div>


    </main>
  );
}
