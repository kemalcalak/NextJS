'use client'
import {customRedirect} from './action'
const CustomPage= ()=>{
    const handleClick=()=>{
        customRedirect()
    }
    return(
        <div>
            <h1>
                CustomPage
            </h1>
            <div>
                <button onClick={handleClick}>Tıkla</button>
            </div>
        </div>
    )
}
export  default  CustomPage
