export default function  Layout({children}){
        return(
            <>
            <nav>Navbar</nav>
                <main>{children}</main>
                <footer>Footer</footer>
            </>
        )
}
