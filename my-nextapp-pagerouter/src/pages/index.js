import { Inter } from "next/font/google";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const router=useRouter()

    useEffect(()=>{

        const prefetchPage=async ()=>{
            await  router.prefetch('/products')
            console.log('loaded')
        }
        prefetchPage()
    },[router])
  return (
    <>
      Anasayfa
        <Link href='/products'>Ürünler</Link>
        <button onClick={()=>{
            router.push({
                pathname:'/suggestions',
                query:{qid:10}
            })
        }}>Go Suggets</button>

    </>
  );
}
