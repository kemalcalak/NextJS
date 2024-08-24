export  default  function Users({children}){

    return(
        <section>
            <nav>
                <h1>Burası Header For Users</h1>
            </nav>
            <div className="contentClass">
                {children}
            </div>
        </section>
    )
}
