export  default  function CategoriesLayout({children}){

    return(
       <section>
           <nav>
               <h1>Burası Header</h1>
           </nav>
           <div className="contentClass">
               {children}
           </div>
       </section>
    )
}
