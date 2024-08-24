export default function  SubLayout({children}){
    return(
        <>
            <h1>Bu bir sublayout</h1>
            <section>
                {children}
            </section>
        </>
    )
}
