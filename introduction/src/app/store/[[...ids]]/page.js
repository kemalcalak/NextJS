const Page= (p)=>{
    return(
        <div>
           <h1>Store Page</h1>
            <ul>
                <li>
                    {JSON.stringify(p.searchParams)}
                </li>
                <li>
                    {JSON.stringify(p.searchParams.ad)}
                </li>
                <li>
                    {JSON.stringify(p.searchParams.yas)}
                </li>
            </ul>
        </div>
    )
}
export  default  Page
