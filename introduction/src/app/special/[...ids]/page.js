const Page= (p)=>{
    return(
        <div>
           <h1>
               Special Page with IDS ...
           </h1>
            <ul>
                <li>
                    {JSON.stringify(p)}
                </li>
            </ul>
        </div>
    )
}
export  default  Page
