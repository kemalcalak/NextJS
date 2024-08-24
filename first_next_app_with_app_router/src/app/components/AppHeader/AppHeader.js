import Link from "next/link";

const AppHeader=()=>{
    return(
        <header>
            <h1>ABC Company</h1>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Anasayfa</Link>
                    </li>
                    <li>
                        <Link href='/cozumler'>Çözümlerimiz</Link>
                    </li>
                    <li>
                        <Link href='/urunler'>Ürünler</Link>
                    </li>
                    <li>
                        <Link href='/haberler'>Haberler</Link>
                    </li>
                    <li>
                        <Link href='/hakkimizda'>Hakkımızda</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default AppHeader
