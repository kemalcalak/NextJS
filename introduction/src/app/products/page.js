'use server'
import {redirect} from "next/navigation";
const mockF=()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}

const Products=async ()=>{
    const r=await  mockF()
    console.log(r)
    if(r===1){
        redirect('/')
    }
    return(
        <div>
            <h1>
                Products
            </h1>
            <p>
                <a href='/categories'>Categories</a>
            </p>
        </div>
    )
}
export  default  Products
