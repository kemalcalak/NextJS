import Link from "next/link";

export default function HaberlerLayout({children}){
    return(
        <div className='haberlerLayout'>
            <div className='leftbar'>
                <Link href='/haberler/son-haberler/1'>Son haberler</Link>
                <Link href='/haberler/guncler-haberler/deneme'>Güncel haberler</Link>
                <Link href='/haberler/yeni-haberler/test3/6'>Yeni haberler</Link>


            </div>
            <div className='right'>
                {children}
            </div>
        </div>
    )
}
