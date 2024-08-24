export  default  function CustomLayout({children}){

    return(
        <section>
            <nav>
                <h1>Burası Header For CustomPage</h1>
            </nav>
            <div className="contentClass">
                {children}
            </div>
        </section>
    )
}
