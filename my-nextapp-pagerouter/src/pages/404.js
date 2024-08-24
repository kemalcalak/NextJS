import Link from "next/link";

export  default function Custom404(){
    return(
        <div>Sayfa bulunamadı ana sayfaya git
        <Link href='/'>Anasayfa</Link>
        </div>
    )
}
